import {useEffect,useRef} from 'react';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import type {State} from './types';
const vec=(p:number[])=>new THREE.Vector3(p[0]/1000,p[2]/1000,-p[1]/1000);
export default function RobotScene({state,view='Orbit',preview=[]}:{state:State;view?:string;preview?:number[][]}){
 const host=useRef<HTMLDivElement>(null),current=useRef(state),planned=useRef(preview),viewRef=useRef(view);current.current=state;planned.current=preview;viewRef.current=view;
 useEffect(()=>{if(!host.current)return;const el=host.current,scene=new THREE.Scene();scene.background=new THREE.Color('#07111d');scene.fog=new THREE.Fog('#07111d',1.7,4);
 const camera=new THREE.PerspectiveCamera(42,1,.01,10);camera.position.set(.62,.48,.62);const renderer=new THREE.WebGLRenderer({antialias:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));el.appendChild(renderer.domElement);
 renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
 const controls=new OrbitControls(camera,renderer.domElement);controls.target.set(.13,.13,0);controls.enableDamping=true;controls.minDistance=.25;controls.maxDistance=2.8;
 scene.add(new THREE.HemisphereLight(0xd4eaff,0x122235,2.5));const light=new THREE.DirectionalLight(0xffffff,3);light.position.set(.4,1,.3);light.castShadow=true;light.shadow.mapSize.set(1024,1024);scene.add(light);
 const ground=new THREE.Mesh(new THREE.BoxGeometry(.92,.02,.82),new THREE.MeshStandardMaterial({color:0x172a3b,roughness:.8}));ground.position.set(.12,-.02,0);ground.receiveShadow=true;scene.add(ground);
 const grid=new THREE.GridHelper(1.6,32,0x215177,0x142f43);grid.position.y=-.008;scene.add(grid);
 const metal=new THREE.MeshStandardMaterial({color:0xc5d4df,metalness:.65,roughness:.3}),blue=new THREE.MeshStandardMaterial({color:0x167bdf,metalness:.5,roughness:.35}),dark=new THREE.MeshStandardMaterial({color:0x1d2d3b,metalness:.7,roughness:.4});
 const base=new THREE.Mesh(new THREE.CylinderGeometry(.05,.065,.045,32),dark);base.position.y=.023;scene.add(base);
 const links:THREE.Mesh[]=[],joints:THREE.Mesh[]=[];
 for(let i=0;i<6;i++){const m=new THREE.Mesh(new THREE.CylinderGeometry(.012,.018,1,16),metal);m.castShadow=true;scene.add(m);links.push(m);const ball=new THREE.Mesh(new THREE.SphereGeometry(.025,20,20),blue);ball.castShadow=true;scene.add(ball);joints.push(ball)}
 const claw=new THREE.Group();for(const x of [-1,1]){const finger=new THREE.Mesh(new THREE.BoxGeometry(.009,.045,.013),dark);finger.position.set(x*.022,0,0);claw.add(finger)}scene.add(claw);
 const colors:Record<string,number>={red_cube:0xef525d,blue_cube:0x198aff,green_cube:0x24c997,target_zone:0xe9bd36},objects:Record<string,THREE.Mesh>={};
 Object.entries(colors).forEach(([name,color])=>{const box=new THREE.Mesh(new THREE.BoxGeometry(name==='target_zone'?.105:.05,name==='target_zone'?.006:.05,name==='target_zone'?.105:.05),new THREE.MeshStandardMaterial({color,roughness:.45,metalness:.12}));box.castShadow=true;box.receiveShadow=true;scene.add(box);objects[name]=box});
 const axes=new THREE.AxesHelper(.12);scene.add(axes);
 const path=new THREE.Line(new THREE.BufferGeometry(),new THREE.LineBasicMaterial({color:0x12d9d2,transparent:true,opacity:.7}));scene.add(path);const plan=new THREE.Line(new THREE.BufferGeometry(),new THREE.LineBasicMaterial({color:0xe3b14b}));scene.add(plan);
 const resize=new ResizeObserver(()=>{camera.aspect=el.clientWidth/el.clientHeight;camera.updateProjectionMatrix();renderer.setSize(el.clientWidth,el.clientHeight)});resize.observe(el);
 let raf=0,lastView='',lastPath='',lastPlan='';function draw(){const s=current.current;const pts=s.robot.points.map(vec);links.forEach((link,i)=>{const a=pts[i],b=pts[i+1];if(!a||!b)return;const d=new THREE.Vector3().subVectors(b,a);link.position.copy(a).add(b).multiplyScalar(.5);link.scale.y=Math.max(.001,d.length());link.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),d.length()?d.normalize():new THREE.Vector3(0,1,0));joints[i].position.copy(b)});const tcp=pts.at(-1)!;claw.position.copy(tcp);claw.children.forEach((f,i)=>{f.position.x=(i?1:-1)*(s.robot.gripper==='close'?.014:.03)});axes.position.copy(tcp);
 s.simulation.objects.forEach(o=>{if(objects[o.name]){objects[o.name].position.copy(vec(o.position));if(o.name==='target_zone')objects[o.name].position.y=.004}});
 const pk=JSON.stringify(s.path);if(pk!==lastPath){path.geometry.dispose();path.geometry=new THREE.BufferGeometry().setFromPoints(s.path.map(vec));lastPath=pk}const pp=JSON.stringify(planned.current);if(pp!==lastPlan){plan.geometry.dispose();plan.geometry=new THREE.BufferGeometry().setFromPoints(planned.current.map(vec));lastPlan=pp}
 if(lastView!==viewRef.current){lastView=viewRef.current;const positions:Record<string,number[]>={Top:[.1,1.2,.001],Front:[.1,.2,1.2],Side:[1.2,.2,0],Orbit:[.62,.48,.62]};camera.position.fromArray(positions[lastView]||positions.Orbit);controls.target.set(.13,.13,0);controls.update()}
 controls.update();renderer.render(scene,camera);raf=requestAnimationFrame(draw)}draw();return()=>{cancelAnimationFrame(raf);resize.disconnect();controls.dispose();scene.traverse(o=>{const m=o as THREE.Mesh;if(m.geometry)m.geometry.dispose();if(m.material){(Array.isArray(m.material)?m.material:[m.material]).forEach(x=>x.dispose())}});renderer.dispose();el.replaceChildren()};},[]);
 return <div className="robot-scene" ref={host} aria-label="Interactive 3D robot simulation"/>;
}
