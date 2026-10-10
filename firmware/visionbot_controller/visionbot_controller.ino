/* VisionBot protocol v1 — Arduino Mega 2560, Servo + ArduinoJson 7.
 * Motors DETACHED at startup; commissioning required before ARM.
 * This firmware is a prototype, not a certified safety controller.
 * A physical power-isolation E-stop and mechanical fall protection are required.
 */
#include <Servo.h>
#include <ArduinoJson.h>
#include <math.h>

// Set true ONLY after calibrating each joint mapping below on your unloaded arm.
const bool COMMISSIONED = false;
const uint8_t N = 6, ESTOP_PIN = 2, GRIP_PIN = 10;
const uint8_t PINS[N] = {3,4,5,6,7,8};
// Normally-closed interlock between pin 2 and GND. Open circuit => stop.
const float QMIN[N] = {-150,-40,-150,-150,-100,-150};
const float QMAX[N] = {150,150,150,150,100,150};
const float HOME[N] = {0,55,-95,40,0,0};
const float VMAX[N] = {35,30,35,40,40,40};
const float AMAX[N] = {70,60,70,80,80,80};
// EXAMPLE mapping, not a universal servo calibration. Measure offset/direction.
const float SERVO_MIN[N] = {20,20,20,20,20,20};
const float SERVO_MAX[N] = {160,160,160,160,160,160};
const int GRIP_OPEN = 40, GRIP_CLOSED = 85;
Servo motors[N], gripper;
float q[N], target[N], velocity[N];
bool armed=false, latched=false, overflow=false;
char packet[700];size_t used=0;
unsigned long lastHeartbeat=0,lastUpdate=0,lastTelemetry=0;
const unsigned long WATCHDOG_MS=1000;

float servoAngle(uint8_t i,float angle){
  return SERVO_MIN[i]+(angle-QMIN[i])/(QMAX[i]-QMIN[i])*(SERVO_MAX[i]-SERVO_MIN[i]);
}
void halt(bool latch){
  armed=false;if(latch)latched=true;
  for(uint8_t i=0;i<N;i++){motors[i].detach();target[i]=q[i];velocity[i]=0;}
  gripper.detach();
}
void reply(const char* id,bool ok,const char* message=""){
  JsonDocument r;r["type"]=ok?"ACK":"ERROR";r["command_id"]=id;r["protocol"]=1;r["message"]=message;
  r["armed"]=armed;r["estop"]=latched;r["commissioned"]=COMMISSIONED;
  serializeJson(r,Serial);Serial.println();
}
void process(){
  JsonDocument doc;auto err=deserializeJson(doc,packet);
  if(err){reply("",false,"Invalid JSON");return;}
  const char* type=doc["type"]|"";const char* id=doc["command_id"]|"";
  if(!strcmp(type,"ESTOP")){halt(true);reply(id,true);return;}
  if(!strcmp(type,"HELLO")){reply(id,true,"VisionBot Arduino v1");return;}
  if(!strcmp(type,"HEARTBEAT")){lastHeartbeat=millis();reply(id,true);return;}
  if(!strcmp(type,"DISARM")){halt(false);reply(id,true);return;}
  if(!strcmp(type,"RESET")){
    if(digitalRead(ESTOP_PIN)==HIGH){reply(id,false,"Physical interlock is open");return;}
    halt(false);latched=false;reply(id,true);return;
  }
  if(!strcmp(type,"ARM")){
    if(!COMMISSIONED){reply(id,false,"Commission joint mappings before ARM");return;}
    if(latched||digitalRead(ESTOP_PIN)==HIGH){reply(id,false,"Interlock or E-stop latched");return;}
    // No automatic homing: q is the last commanded pose, not encoder feedback.
    // Operator must physically align to HOME on first boot before arming.
    for(uint8_t i=0;i<N;i++){motors[i].write((int)round(servoAngle(i,q[i])));motors[i].attach(PINS[i]);target[i]=q[i];velocity[i]=0;}
    gripper.write(GRIP_OPEN);gripper.attach(GRIP_PIN);armed=true;lastHeartbeat=millis();lastUpdate=millis();reply(id,true);return;
  }
  if(!armed||latched){reply(id,false,"Motors disabled");return;}
  if(!strcmp(type,"MOVE_JOINTS")){
    JsonArray a=doc["joints"].as<JsonArray>();
    if(a.size()!=N){reply(id,false,"Expected six joints");return;}
    float next[N];
    for(uint8_t i=0;i<N;i++){
      if(!a[i].is<float>()&&!a[i].is<int>()){reply(id,false,"Non-numeric joint");return;}
      next[i]=a[i].as<float>();
      if(!isfinite(next[i])||next[i]<QMIN[i]||next[i]>QMAX[i]){reply(id,false,"Joint limit");return;}
    }
    for(uint8_t i=0;i<N;i++)target[i]=next[i];
    reply(id,true);return;
  }
  if(!strcmp(type,"GRIPPER")){
    const char* action=doc["action"]|"";
    if(strcmp(action,"open")&&strcmp(action,"close")){reply(id,false,"Bad gripper action");return;}
    gripper.write(!strcmp(action,"open")?GRIP_OPEN:GRIP_CLOSED);reply(id,true);return;
  }
  reply(id,false,"Unknown command");
}
void setup(){
  pinMode(ESTOP_PIN,INPUT_PULLUP);Serial.begin(115200);
  for(uint8_t i=0;i<N;i++){q[i]=HOME[i];target[i]=HOME[i];velocity[i]=0;}
  halt(false);lastHeartbeat=millis();lastUpdate=millis();
}
void loop(){
  unsigned long now=millis();
  if(digitalRead(ESTOP_PIN)==HIGH||(armed&&now-lastHeartbeat>WATCHDOG_MS))halt(true);
  // Bounded parser; overflow discards the ENTIRE packet until newline.
  uint8_t budget=96;
  while(Serial.available()&&budget--){
    char c=Serial.read();
    if(c=='\n'){
      if(overflow){reply("",false,"Packet too long");}
      else{packet[used]=0;if(used)process();}
      used=0;overflow=false;
    }else if(c!='\r'){
      if(used>=sizeof(packet)-1)overflow=true;
      if(!overflow)packet[used++]=c;
    }
  }
  if(armed&&now-lastUpdate>=20){
    float dt=min((now-lastUpdate)/1000.0f,0.05f);lastUpdate=now;
    for(uint8_t i=0;i<N;i++){
      float error=target[i]-q[i];
      float desired=copysign(min(VMAX[i],sqrt(2*AMAX[i]*fabs(error))),error);
      float dv=constrain(desired-velocity[i],-AMAX[i]*dt,AMAX[i]*dt);velocity[i]+=dv;
      float delta=velocity[i]*dt;
      if(fabs(delta)>=fabs(error)){q[i]=target[i];velocity[i]=0;}else q[i]+=delta;
      q[i]=constrain(q[i],QMIN[i],QMAX[i]);motors[i].write((int)round(servoAngle(i,q[i])));
    }
  }
  if(now-lastTelemetry>=200){
    lastTelemetry=now;JsonDocument t;t["type"]="TELEMETRY";t["armed"]=armed;t["estop"]=latched;t["timestamp"]=now;t["feedback"]="commanded_no_encoders";
    JsonArray a=t["joint_angles"].to<JsonArray>();for(uint8_t i=0;i<N;i++)a.add(q[i]);serializeJson(t,Serial);Serial.println();
  }
}
