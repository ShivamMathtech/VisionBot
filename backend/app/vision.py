"""A bounded camera worker: latest frame only; CPU color demo or optional YOLO."""
import threading,time,math
from pathlib import Path
import cv2
import numpy as np

COLORS={'red_cube':(55,60,225),'blue_cube':(235,135,25),'green_cube':(90,185,30),'target_zone':(20,210,245)}
DEMO_OBJECTS=[{'name':'red_cube','position':[210.,-90.,25.]},{'name':'blue_cube','position':[250.,0.,25.]},{'name':'green_cube','position':[200.,85.,25.]},{'name':'target_zone','position':[130.,130.,25.]}]

class CalibrationProfile:
    def __init__(self):self.matrix=None;self.z=25.;self.name=None;self.error=None
    def fit(self,pixels,robot,z=25,name='workspace'):
        a=np.asarray(pixels,float);b=np.asarray(robot,float)
        if a.shape!=b.shape or a.ndim!=2 or a.shape[1]!=2 or not np.isfinite(a).all() or not np.isfinite(b).all():raise ValueError('Use matching N x 2 finite point pairs')
        if np.linalg.matrix_rank(a-a.mean(axis=0))<2 or np.linalg.matrix_rank(b-b.mean(axis=0))<2:raise ValueError('Calibration points must not be collinear')
        H,mask=cv2.findHomography(a,b,0)
        if H is None or not np.isfinite(H).all() or abs(np.linalg.det(H))<1e-10:raise ValueError('Degenerate calibration')
        pred=cv2.perspectiveTransform(a.reshape(-1,1,2),H).reshape(-1,2)
        self.matrix=H;self.z=z;self.name=name;self.error=float(np.sqrt(np.mean(np.sum((pred-b)**2,axis=1))))
        return self.export()
    def transform(self,point):
        if self.matrix is None:return None
        p=self.matrix @ np.array([*point,1.])
        if abs(p[2])<1e-9:return None
        return [float(p[0]/p[2]),float(p[1]/p[2]),self.z]
    def export(self):return {'name':self.name,'matrix':self.matrix.tolist() if self.matrix is not None else None,'z':self.z,'fit_rmse_mm':self.error}
    def load(self,v):self.matrix=np.asarray(v['matrix']);self.z=v['z'];self.name=v['name'];self.error=v['fit_rmse_mm']

class Tracker:
    def __init__(self):self.items={};self.next=1
    def update(self,objects,now):
        available={k:v for k,v in self.items.items() if now-v['timestamp']<1.5};used=set()
        for o in objects:
            options=[(np.linalg.norm(np.array(o['center'])-v['center']),k) for k,v in available.items() if k not in used and v['class_name']==o['class_name']]
            best=min(options,default=(float('inf'),0))
            if best[0]<90:
                i=best[1];old=available[i];dt=max(.001,now-old['timestamp']);velocity=((np.array(o['center'])-old['center'])/dt).tolist()
            else:i=self.next;self.next+=1;velocity=[0.,0.]
            o.update(id=i,velocity=velocity,timestamp=now);used.add(i);self.items[i]=o.copy()
        self.items={k:v for k,v in self.items.items() if now-v['timestamp']<1.5}
        return objects

class Vision:
    def __init__(self,root,objects):
        self.root=Path(root);self.objects=objects;self.lock=threading.RLock();self.quit=threading.Event();self.thread=None
        self.config={'source':'demo','detector':'color','fps':12,'confidence':.5,'model':'models/detector.pt','classes':[]}
        self.calibration=CalibrationProfile();self.tracker=Tracker();self.detections=[];self.jpeg=None;self.frame=None
        self.status='offline';self.error=None;self.fps=0;self.latency=0;self.model=None;self.record=None;self.record_path=None
    def start(self,config):
        self.stop();self.config=config.copy();self.error=None;self.model=None;self.tracker=Tracker()
        self.calibration=CalibrationProfile()
        if config['source']=='demo':
            self.calibration.fit([[0,0],[640,0],[640,480],[0,480]],[[50,-200],[370,-200],[370,200],[50,200]],25,'demo-only')
        if config['detector']=='yolo':
            path=(self.root/config['model']).resolve()
            if not path.is_file():raise ValueError('YOLO model missing. Put trusted weights in models/ and configure its path.')
            try:from ultralytics import YOLO
            except ImportError as e:raise ValueError('Install backend/requirements-yolo.txt first') from e
            self.model=YOLO(str(path))
        self.quit.clear();self.status='starting';self.thread=threading.Thread(target=self._loop,daemon=True);self.thread.start()
    def stop(self):
        self.quit.set()
        if self.thread:
            self.thread.join(timeout=4)
            if self.thread.is_alive():raise ValueError('Camera read still blocked; wait for stream timeout or restart server')
        self.thread=None;self.status='offline';self.detections=[];self.stop_record()
    def _demo(self):
        frame=np.full((480,640,3),(30,26,20),np.uint8)
        for x in range(0,640,40):cv2.line(frame,(x,0),(x,480),(48,42,31),1)
        for y in range(0,480,40):cv2.line(frame,(0,y),(640,y),(48,42,31),1)
        cv2.putText(frame,'VIRTUAL CAMERA | COLOR DETECTOR',(18,30),0,.5,(170,190,205),1)
        for obj in list(self.objects):
            x,y,z=obj['position'];u=int((x-50)*2);v=int((y+200)*1.2);w=32 if obj['name']!='target_zone' else 55
            cv2.rectangle(frame,(u-w,v-w),(u+w,v+w),COLORS[obj['name']],-1)
        return frame
    def _color(self,frame):
        hsv=cv2.cvtColor(frame,cv2.COLOR_BGR2HSV)
        ranges={'red_cube':[(0,10),(170,179)],'blue_cube':[(95,125)],'green_cube':[(40,85)],'target_zone':[(20,35)]}
        result=[]
        for name,rs in ranges.items():
            mask=np.zeros(hsv.shape[:2],np.uint8)
            for lo,hi in rs:mask|=cv2.inRange(hsv,(lo,100,70),(hi,255,255))
            for c in cv2.findContours(mask,cv2.RETR_EXTERNAL,cv2.CHAIN_APPROX_SIMPLE)[0]:
                area=cv2.contourArea(c)
                if area<250:continue
                x,y,w,h=cv2.boundingRect(c);score=min(1.,area/max(1,w*h))
                result.append({'class_name':name,'confidence':score,'bbox':[x,y,x+w,y+h],'center':[x+w/2,y+h/2]})
        return result
    def _loop(self):
        cap=None;still=None
        try:
            src=self.config['source']
            if src!='demo':
                path=self.root/src
                if path.suffix.lower() in ('.png','.jpg','.jpeg','.bmp','.webp') and path.exists():still=cv2.imread(str(path))
                else:
                    source=int(src) if src.isdigit() else str(path) if path.exists() else src
                    if isinstance(source,str) and source.startswith(('rtsp://','http://','https://')):
                        cap=cv2.VideoCapture(source,cv2.CAP_FFMPEG,[cv2.CAP_PROP_OPEN_TIMEOUT_MSEC,3000,cv2.CAP_PROP_READ_TIMEOUT_MSEC,2000])
                    else:cap=cv2.VideoCapture(source)
                    if not cap.isOpened():raise ValueError('Camera or video could not be opened')
                    cap.set(cv2.CAP_PROP_BUFFERSIZE,1)
            self.status='online';last=time.perf_counter()
            while not self.quit.is_set():
                begin=time.perf_counter()
                if src=='demo':frame=self._demo()
                elif still is not None:frame=still.copy()
                else:
                    ok,frame=cap.read()
                    if not ok:
                        if not str(src).startswith(('rtsp:','http:')) and not str(src).isdigit():
                            cap.set(cv2.CAP_PROP_POS_FRAMES,0);ok,frame=cap.read()
                        if not ok:raise ValueError('Camera stopped providing frames')
                    frame=cv2.resize(frame,(640,480))
                if frame is None:raise ValueError('Image decoding failed')
                frame=cv2.resize(frame,(640,480))
                if self.model:
                    r=self.model.predict(frame,conf=self.config['confidence'],imgsz=640,device='cpu',verbose=False)[0]
                    ds=[]
                    for b in r.boxes:
                        xy=b.xyxy[0].tolist();ds.append({'class_name':r.names[int(b.cls.item())],'confidence':float(b.conf.item()),'bbox':xy,'center':[(xy[0]+xy[2])/2,(xy[1]+xy[3])/2]})
                else:ds=self._color(frame)
                ds=[d for d in ds if d['confidence']>=self.config['confidence'] and (not self.config.get('classes') or d['class_name'] in self.config['classes'])]
                ds=self.tracker.update(ds,time.time())
                for d in ds:
                    d['robot_position']=self.calibration.transform(d['center']);x,y,x2,y2=map(int,d['bbox'])
                    cv2.rectangle(frame,(x,y),(x2,y2),(230,215,40),1);cv2.putText(frame,f"#{d['id']} {d['class_name']} {d['confidence']:.2f}",(x,max(15,y-7)),0,.42,(245,245,245),1)
                self.latency=(time.perf_counter()-begin)*1000
                with self.lock:
                    self.frame=frame;self.jpeg=cv2.imencode('.jpg',frame,[cv2.IMWRITE_JPEG_QUALITY,80])[1].tobytes();self.detections=ds
                    if self.record:self.record.write(frame)
                now=time.perf_counter();self.fps=1/max(.001,now-last);last=now
                self.quit.wait(max(0,1/self.config['fps']-(now-begin)))
        except Exception as e:self.error=str(e);self.status='error';self.detections=[]
        finally:
            if cap is not None:cap.release()
            self.stop_record()
    def start_record(self,path):
        with self.lock:
            if self.status!='online':raise ValueError('Camera offline')
            if self.record:raise ValueError('Already recording')
            rec=cv2.VideoWriter(str(path),cv2.VideoWriter_fourcc(*'MJPG'),self.config['fps'],(640,480))
            if not rec.isOpened():raise ValueError('Video encoder unavailable')
            self.record=rec;self.record_path=str(path)
    def stop_record(self):
        with self.lock:
            if self.record:self.record.release();self.record=None
        return self.record_path
    def markers(self):
        if self.frame is None:raise ValueError('No camera frame')
        detector=cv2.aruco.ArucoDetector(cv2.aruco.getPredefinedDictionary(cv2.aruco.DICT_4X4_50))
        corners,ids,_=detector.detectMarkers(self.frame)
        return [{'id':int(i),'corners':c[0].tolist(),'center':c[0].mean(axis=0).tolist()} for c,i in zip(corners,ids.flatten())] if ids is not None else []
    def state(self):return {'status':self.status,'error':self.error,'fps':round(self.fps,1),'latency_ms':round(self.latency,2),'config':self.config,'recording':self.record is not None,'calibration':self.calibration.export(),'detections':self.detections}
