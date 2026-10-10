import Editor,{loader} from '@monaco-editor/react';
import * as monaco from 'monaco-editor';
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
self.MonacoEnvironment={getWorker(){return new EditorWorker()}};
loader.config({monaco});
export default function TaskEditor({value,onChange}:{value:string;onChange:(v:string|undefined)=>void}){return <Editor height="310px" defaultLanguage="python" theme="vs-dark" value={value} onChange={onChange} options={{minimap:{enabled:false},fontSize:12,scrollBeyondLastLine:false,automaticLayout:true}}/>}
