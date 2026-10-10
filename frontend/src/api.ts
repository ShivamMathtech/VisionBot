export async function api<T=any>(path:string,body?:unknown,method?:string):Promise<T>{
 const res=await fetch('/api'+path,{method:method||(body===undefined?'GET':'POST'),headers:body instanceof FormData?undefined:{'Content-Type':'application/json'},body:body===undefined?undefined:body instanceof FormData?body:JSON.stringify(body)});
 if(!res.ok){let data;try{data=await res.json()}catch{throw new Error(res.statusText)}throw new Error(typeof data.detail==='string'?data.detail:JSON.stringify(data.detail));}return res.json();
}
export function download(name:string,value:unknown){const url=URL.createObjectURL(new Blob([JSON.stringify(value,null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)}
