"""Acknowledged serial protocol. Commanded servo angles are NOT measured feedback."""
import json,threading,time,uuid
import serial
from serial.tools import list_ports

class ArduinoConnectionManager:
    def __init__(self):
        self.serial=None;self.lock=threading.RLock();self.pending={};self.quit=threading.Event();self.reader=None;self.heartbeat=None
        self.telemetry={};self.error=None;self.last_seen=0.;self.fault_callback=lambda reason:None
    @staticmethod
    def ports():return [{'port':p.device,'description':p.description} for p in list_ports.comports()]
    @property
    def connected(self):return self.serial is not None and self.serial.is_open and not self.error
    def connect(self,port,baud=115200):
        self.disconnect();self.error=None;self.quit.clear()
        self.serial=serial.Serial(port,baudrate=baud,timeout=.1,write_timeout=.2)
        time.sleep(2);self.serial.reset_input_buffer();self.last_seen=time.monotonic()
        self.reader=threading.Thread(target=self._read,daemon=True);self.reader.start()
        try:
            hello=self.send('HELLO')
            if hello.get('protocol')!=1:raise ValueError('Firmware protocol mismatch')
        except Exception:self.disconnect();raise
        self.heartbeat=threading.Thread(target=self._beat,daemon=True);self.heartbeat.start()
        return hello
    def send(self,kind,**payload):
        if not self.connected:raise ValueError(self.error or 'Arduino disconnected')
        cid=uuid.uuid4().hex[:10];event=threading.Event();slot={'event':event,'reply':None}
        with self.lock:
            self.pending[cid]=slot
            try:self.serial.write((json.dumps({'type':kind,'command_id':cid,**payload})+'\n').encode())
            except Exception:
                self.pending.pop(cid,None);raise
        if not event.wait(.65):
            with self.lock:self.pending.pop(cid,None)
            self.error='Arduino ACK timeout';self.fault_callback(self.error);raise ValueError(self.error)
        reply=slot['reply']
        if reply.get('type')!='ACK':raise ValueError(reply.get('message','Arduino rejected command'))
        return reply
    def emergency_stop(self):
        # Out-of-band stop write does not wait for queued acknowledgement.
        with self.lock:
            if self.serial and self.serial.is_open:
                try:self.serial.write(b'{"type":"ESTOP","command_id":"estop"}\n')
                except serial.SerialException:pass
    def _read(self):
        try:
            while not self.quit.is_set():
                line=self.serial.readline(2048)
                if not line:continue
                try:p=json.loads(line)
                except (ValueError,UnicodeDecodeError):continue
                if not isinstance(p,dict):continue
                self.last_seen=time.monotonic()
                cid=p.get('command_id')
                with self.lock:
                    slot=self.pending.pop(cid,None)
                if slot:slot['reply']=p;slot['event'].set()
                if p.get('type')=='TELEMETRY':
                    self.telemetry=p
                    if p.get('estop'):self.fault_callback('Physical interlock or firmware watchdog latched')
        except Exception as e:
            if not self.quit.is_set():self.error=str(e);self.fault_callback('Serial connection lost')
    def _beat(self):
        while not self.quit.wait(.25):
            try:self.send('HEARTBEAT')
            except Exception as e:self.error=str(e);self.fault_callback(self.error);break
    def disconnect(self):
        self.emergency_stop();self.quit.set()
        for t in (self.reader,self.heartbeat):
            if t and t is not threading.current_thread():t.join(timeout=1)
        if self.serial:self.serial.close()
        self.serial=None;self.telemetry={}
    def state(self):return {'connected':self.connected,'error':self.error,'telemetry':self.telemetry,'feedback':'commanded positions only; no encoders'}
