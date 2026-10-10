const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/editor-CmHCMQ7w.js","assets/editor-D6kYW_CN.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();function lg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var wu={exports:{}},Fo={},Au={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function Pv(){if(zp)return _t;zp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.iterator;function x(O){return O===null||typeof O!="object"?null:(O=y&&O[y]||O["@@iterator"],typeof O=="function"?O:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,A={};function S(O,Q,Ne){this.props=O,this.context=Q,this.refs=A,this.updater=Ne||M}S.prototype.isReactComponent={},S.prototype.setState=function(O,Q){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Q,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function _(){}_.prototype=S.prototype;function F(O,Q,Ne){this.props=O,this.context=Q,this.refs=A,this.updater=Ne||M}var N=F.prototype=new _;N.constructor=F,w(N,S.prototype),N.isPureReactComponent=!0;var b=Array.isArray,q=Object.prototype.hasOwnProperty,L={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function z(O,Q,Ne){var J,fe={},Ee=null,Me=null;if(Q!=null)for(J in Q.ref!==void 0&&(Me=Q.ref),Q.key!==void 0&&(Ee=""+Q.key),Q)q.call(Q,J)&&!I.hasOwnProperty(J)&&(fe[J]=Q[J]);var Le=arguments.length-2;if(Le===1)fe.children=Ne;else if(1<Le){for(var ke=Array(Le),Je=0;Je<Le;Je++)ke[Je]=arguments[Je+2];fe.children=ke}if(O&&O.defaultProps)for(J in Le=O.defaultProps,Le)fe[J]===void 0&&(fe[J]=Le[J]);return{$$typeof:s,type:O,key:Ee,ref:Me,props:fe,_owner:L.current}}function P(O,Q){return{$$typeof:s,type:O.type,key:Q,ref:O.ref,props:O.props,_owner:O._owner}}function C(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function V(O){var Q={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Ne){return Q[Ne]})}var ne=/\/+/g;function Z(O,Q){return typeof O=="object"&&O!==null&&O.key!=null?V(""+O.key):Q.toString(36)}function ae(O,Q,Ne,J,fe){var Ee=typeof O;(Ee==="undefined"||Ee==="boolean")&&(O=null);var Me=!1;if(O===null)Me=!0;else switch(Ee){case"string":case"number":Me=!0;break;case"object":switch(O.$$typeof){case s:case e:Me=!0}}if(Me)return Me=O,fe=fe(Me),O=J===""?"."+Z(Me,0):J,b(fe)?(Ne="",O!=null&&(Ne=O.replace(ne,"$&/")+"/"),ae(fe,Q,Ne,"",function(Je){return Je})):fe!=null&&(C(fe)&&(fe=P(fe,Ne+(!fe.key||Me&&Me.key===fe.key?"":(""+fe.key).replace(ne,"$&/")+"/")+O)),Q.push(fe)),1;if(Me=0,J=J===""?".":J+":",b(O))for(var Le=0;Le<O.length;Le++){Ee=O[Le];var ke=J+Z(Ee,Le);Me+=ae(Ee,Q,Ne,ke,fe)}else if(ke=x(O),typeof ke=="function")for(O=ke.call(O),Le=0;!(Ee=O.next()).done;)Ee=Ee.value,ke=J+Z(Ee,Le++),Me+=ae(Ee,Q,Ne,ke,fe);else if(Ee==="object")throw Q=String(O),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return Me}function ge(O,Q,Ne){if(O==null)return O;var J=[],fe=0;return ae(O,J,"","",function(Ee){return Q.call(Ne,Ee,fe++)}),J}function oe(O){if(O._status===-1){var Q=O._result;Q=Q(),Q.then(function(Ne){(O._status===0||O._status===-1)&&(O._status=1,O._result=Ne)},function(Ne){(O._status===0||O._status===-1)&&(O._status=2,O._result=Ne)}),O._status===-1&&(O._status=0,O._result=Q)}if(O._status===1)return O._result.default;throw O._result}var he={current:null},B={transition:null},le={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:B,ReactCurrentOwner:L};function ue(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:ge,forEach:function(O,Q,Ne){ge(O,function(){Q.apply(this,arguments)},Ne)},count:function(O){var Q=0;return ge(O,function(){Q++}),Q},toArray:function(O){return ge(O,function(Q){return Q})||[]},only:function(O){if(!C(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},_t.Component=S,_t.Fragment=n,_t.Profiler=a,_t.PureComponent=F,_t.StrictMode=r,_t.Suspense=f,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,_t.act=ue,_t.cloneElement=function(O,Q,Ne){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var J=w({},O.props),fe=O.key,Ee=O.ref,Me=O._owner;if(Q!=null){if(Q.ref!==void 0&&(Ee=Q.ref,Me=L.current),Q.key!==void 0&&(fe=""+Q.key),O.type&&O.type.defaultProps)var Le=O.type.defaultProps;for(ke in Q)q.call(Q,ke)&&!I.hasOwnProperty(ke)&&(J[ke]=Q[ke]===void 0&&Le!==void 0?Le[ke]:Q[ke])}var ke=arguments.length-2;if(ke===1)J.children=Ne;else if(1<ke){Le=Array(ke);for(var Je=0;Je<ke;Je++)Le[Je]=arguments[Je+2];J.children=Le}return{$$typeof:s,type:O.type,key:fe,ref:Ee,props:J,_owner:Me}},_t.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:c,_context:O},O.Consumer=O},_t.createElement=z,_t.createFactory=function(O){var Q=z.bind(null,O);return Q.type=O,Q},_t.createRef=function(){return{current:null}},_t.forwardRef=function(O){return{$$typeof:h,render:O}},_t.isValidElement=C,_t.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:oe}},_t.memo=function(O,Q){return{$$typeof:m,type:O,compare:Q===void 0?null:Q}},_t.startTransition=function(O){var Q=B.transition;B.transition={};try{O()}finally{B.transition=Q}},_t.unstable_act=ue,_t.useCallback=function(O,Q){return he.current.useCallback(O,Q)},_t.useContext=function(O){return he.current.useContext(O)},_t.useDebugValue=function(){},_t.useDeferredValue=function(O){return he.current.useDeferredValue(O)},_t.useEffect=function(O,Q){return he.current.useEffect(O,Q)},_t.useId=function(){return he.current.useId()},_t.useImperativeHandle=function(O,Q,Ne){return he.current.useImperativeHandle(O,Q,Ne)},_t.useInsertionEffect=function(O,Q){return he.current.useInsertionEffect(O,Q)},_t.useLayoutEffect=function(O,Q){return he.current.useLayoutEffect(O,Q)},_t.useMemo=function(O,Q){return he.current.useMemo(O,Q)},_t.useReducer=function(O,Q,Ne){return he.current.useReducer(O,Q,Ne)},_t.useRef=function(O){return he.current.useRef(O)},_t.useState=function(O){return he.current.useState(O)},_t.useSyncExternalStore=function(O,Q,Ne){return he.current.useSyncExternalStore(O,Q,Ne)},_t.useTransition=function(){return he.current.useTransition()},_t.version="18.3.1",_t}var Bp;function nh(){return Bp||(Bp=1,Au.exports=Pv()),Au.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function Lv(){if(Hp)return Fo;Hp=1;var s=nh(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(h,f,m){var v,y={},x=null,M=null;m!==void 0&&(x=""+m),f.key!==void 0&&(x=""+f.key),f.ref!==void 0&&(M=f.ref);for(v in f)r.call(f,v)&&!c.hasOwnProperty(v)&&(y[v]=f[v]);if(h&&h.defaultProps)for(v in f=h.defaultProps,f)y[v]===void 0&&(y[v]=f[v]);return{$$typeof:e,type:h,key:x,ref:M,props:y,_owner:a.current}}return Fo.Fragment=n,Fo.jsx=d,Fo.jsxs=d,Fo}var Vp;function Dv(){return Vp||(Vp=1,wu.exports=Lv()),wu.exports}var g=Dv(),Qe=nh();const Nv=lg(Qe);var il={},Cu={exports:{}},Fn={},Ru={exports:{}},bu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function Uv(){return Gp||(Gp=1,(function(s){function e(B,le){var ue=B.length;B.push(le);e:for(;0<ue;){var O=ue-1>>>1,Q=B[O];if(0<a(Q,le))B[O]=le,B[ue]=Q,ue=O;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var le=B[0],ue=B.pop();if(ue!==le){B[0]=ue;e:for(var O=0,Q=B.length,Ne=Q>>>1;O<Ne;){var J=2*(O+1)-1,fe=B[J],Ee=J+1,Me=B[Ee];if(0>a(fe,ue))Ee<Q&&0>a(Me,fe)?(B[O]=Me,B[Ee]=ue,O=Ee):(B[O]=fe,B[J]=ue,O=J);else if(Ee<Q&&0>a(Me,ue))B[O]=Me,B[Ee]=ue,O=Ee;else break e}}return le}function a(B,le){var ue=B.sortIndex-le.sortIndex;return ue!==0?ue:B.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();s.unstable_now=function(){return d.now()-h}}var f=[],m=[],v=1,y=null,x=3,M=!1,w=!1,A=!1,S=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(B){for(var le=n(m);le!==null;){if(le.callback===null)r(m);else if(le.startTime<=B)r(m),le.sortIndex=le.expirationTime,e(f,le);else break;le=n(m)}}function b(B){if(A=!1,N(B),!w)if(n(f)!==null)w=!0,oe(q);else{var le=n(m);le!==null&&he(b,le.startTime-B)}}function q(B,le){w=!1,A&&(A=!1,_(z),z=-1),M=!0;var ue=x;try{for(N(le),y=n(f);y!==null&&(!(y.expirationTime>le)||B&&!V());){var O=y.callback;if(typeof O=="function"){y.callback=null,x=y.priorityLevel;var Q=O(y.expirationTime<=le);le=s.unstable_now(),typeof Q=="function"?y.callback=Q:y===n(f)&&r(f),N(le)}else r(f);y=n(f)}if(y!==null)var Ne=!0;else{var J=n(m);J!==null&&he(b,J.startTime-le),Ne=!1}return Ne}finally{y=null,x=ue,M=!1}}var L=!1,I=null,z=-1,P=5,C=-1;function V(){return!(s.unstable_now()-C<P)}function ne(){if(I!==null){var B=s.unstable_now();C=B;var le=!0;try{le=I(!0,B)}finally{le?Z():(L=!1,I=null)}}else L=!1}var Z;if(typeof F=="function")Z=function(){F(ne)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,ge=ae.port2;ae.port1.onmessage=ne,Z=function(){ge.postMessage(null)}}else Z=function(){S(ne,0)};function oe(B){I=B,L||(L=!0,Z())}function he(B,le){z=S(function(){B(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_continueExecution=function(){w||M||(w=!0,oe(q))},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(f)},s.unstable_next=function(B){switch(x){case 1:case 2:case 3:var le=3;break;default:le=x}var ue=x;x=le;try{return B()}finally{x=ue}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(B,le){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ue=x;x=B;try{return le()}finally{x=ue}},s.unstable_scheduleCallback=function(B,le,ue){var O=s.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?O+ue:O):ue=O,B){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=ue+Q,B={id:v++,callback:le,priorityLevel:B,startTime:ue,expirationTime:Q,sortIndex:-1},ue>O?(B.sortIndex=ue,e(m,B),n(f)===null&&B===n(m)&&(A?(_(z),z=-1):A=!0,he(b,ue-O))):(B.sortIndex=Q,e(f,B),w||M||(w=!0,oe(q))),B},s.unstable_shouldYield=V,s.unstable_wrapCallback=function(B){var le=x;return function(){var ue=x;x=le;try{return B.apply(this,arguments)}finally{x=ue}}}})(bu)),bu}var jp;function Iv(){return jp||(jp=1,Ru.exports=Uv()),Ru.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wp;function Fv(){if(Wp)return Fn;Wp=1;var s=nh(),e=Iv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function c(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},y={};function x(t){return f.call(y,t)?!0:f.call(v,t)?!1:m.test(t)?y[t]=!0:(v[t]=!0,!1)}function M(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,o,l){if(i===null||typeof i>"u"||M(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(t,i,o,l,u,p,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=E}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){S[t]=new A(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];S[i]=new A(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){S[t]=new A(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){S[t]=new A(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){S[t]=new A(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){S[t]=new A(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){S[t]=new A(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){S[t]=new A(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){S[t]=new A(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function F(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,F);S[i]=new A(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,F);S[i]=new A(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,F);S[i]=new A(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){S[t]=new A(t,1,!1,t.toLowerCase(),null,!1,!1)}),S.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){S[t]=new A(t,1,!1,t.toLowerCase(),null,!0,!0)});function N(t,i,o,l){var u=S.hasOwnProperty(i)?S[i]:null;(u!==null?u.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,o,u,l)&&(o=null),l||u===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):u.mustUseProperty?t[u.propertyName]=o===null?u.type===3?!1:"":o:(i=u.attributeName,l=u.attributeNamespace,o===null?t.removeAttribute(i):(u=u.type,o=u===3||u===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var b=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,q=Symbol.for("react.element"),L=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),V=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),ge=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),he=Symbol.for("react.offscreen"),B=Symbol.iterator;function le(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Object.assign,O;function Q(t){if(O===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+t}var Ne=!1;function J(t,i){if(!t||Ne)return"";Ne=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ie){var l=ie}Reflect.construct(t,[],i)}else{try{i.call()}catch(ie){l=ie}t.call(i.prototype)}else{try{throw Error()}catch(ie){l=ie}t()}}catch(ie){if(ie&&l&&typeof ie.stack=="string"){for(var u=ie.stack.split(`
`),p=l.stack.split(`
`),E=u.length-1,U=p.length-1;1<=E&&0<=U&&u[E]!==p[U];)U--;for(;1<=E&&0<=U;E--,U--)if(u[E]!==p[U]){if(E!==1||U!==1)do if(E--,U--,0>U||u[E]!==p[U]){var H=`
`+u[E].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=E&&0<=U);break}}}finally{Ne=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?Q(t):""}function fe(t){switch(t.tag){case 5:return Q(t.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return t=J(t.type,!1),t;case 11:return t=J(t.type.render,!1),t;case 1:return t=J(t.type,!0),t;default:return""}}function Ee(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case I:return"Fragment";case L:return"Portal";case P:return"Profiler";case z:return"StrictMode";case Z:return"Suspense";case ae:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case V:return(t.displayName||"Context")+".Consumer";case C:return(t._context.displayName||"Context")+".Provider";case ne:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ge:return i=t.displayName||null,i!==null?i:Ee(t.type)||"Memo";case oe:i=t._payload,t=t._init;try{return Ee(t(i))}catch{}}return null}function Me(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(i);case 8:return i===z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Le(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ke(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Je(t){var i=ke(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,p=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(E){l=""+E,p.call(this,E)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Pt(t){t._valueTracker||(t._valueTracker=Je(t))}function pt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=ke(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function Dt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function W(t,i){var o=i.checked;return ue({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function dn(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=Le(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function lt(t,i){i=i.checked,i!=null&&N(t,"checked",i,!1)}function mt(t,i){lt(t,i);var o=Le(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Ct(t,i.type,o):i.hasOwnProperty("defaultValue")&&Ct(t,i.type,Le(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ze(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Ct(t,i,o){(i!=="number"||Dt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var qe=Array.isArray;function D(t,i,o,l){if(t=t.options,i){i={};for(var u=0;u<o.length;u++)i["$"+o[u]]=!0;for(o=0;o<t.length;o++)u=i.hasOwnProperty("$"+t[o].value),t[o].selected!==u&&(t[o].selected=u),u&&l&&(t[o].defaultSelected=!0)}else{for(o=""+Le(o),i=null,u=0;u<t.length;u++){if(t[u].value===o){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function T(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return ue({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ee(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(qe(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Le(o)}}function _e(t,i){var o=Le(i.value),l=Le(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function xe(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function pe(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fe(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?pe(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ae,Pe=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,u){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,u)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ae.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ct(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var we={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ze=["Webkit","ms","Moz","O"];Object.keys(we).forEach(function(t){ze.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),we[i]=we[t]})});function de(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||we.hasOwnProperty(t)&&we[t]?(""+i).trim():i+"px"}function $e(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,u=de(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,u):t[o]=u}}var Be=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ht(t,i){if(i){if(Be[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function nt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var St=null;function j(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var De=null,ce=null,me=null;function Ue(t){if(t=So(t)){if(typeof De!="function")throw Error(n(280));var i=t.stateNode;i&&(i=va(i),De(t.stateNode,t.type,i))}}function k(t){ce?me?me.push(t):me=[t]:ce=t}function ve(){if(ce){var t=ce,i=me;if(me=ce=null,Ue(t),i)for(t=0;t<i.length;t++)Ue(i[t])}}function ot(t,i){return t(i)}function Rt(){}var at=!1;function sn(t,i,o){if(at)return t(i,o);at=!0;try{return ot(t,i,o)}finally{at=!1,(ce!==null||me!==null)&&(Rt(),ve())}}function qt(t,i){var o=t.stateNode;if(o===null)return null;var l=va(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var ss=!1;if(h)try{var Ki={};Object.defineProperty(Ki,"passive",{get:function(){ss=!0}}),window.addEventListener("test",Ki,Ki),window.removeEventListener("test",Ki,Ki)}catch{ss=!1}function Ri(t,i,o,l,u,p,E,U,H){var ie=Array.prototype.slice.call(arguments,3);try{i.apply(o,ie)}catch(Se){this.onError(Se)}}var bi=!1,Pr=null,Lr=!1,Zi=null,Qo={onError:function(t){bi=!0,Pr=t}};function os(t,i,o,l,u,p,E,U,H){bi=!1,Pr=null,Ri.apply(Qo,arguments)}function Jo(t,i,o,l,u,p,E,U,H){if(os.apply(this,arguments),bi){if(bi){var ie=Pr;bi=!1,Pr=null}else throw Error(n(198));Lr||(Lr=!0,Zi=ie)}}function vi(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function ea(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function ta(t){if(vi(t)!==t)throw Error(n(188))}function Yl(t){var i=t.alternate;if(!i){if(i=vi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var u=o.return;if(u===null)break;var p=u.alternate;if(p===null){if(l=u.return,l!==null){o=l;continue}break}if(u.child===p.child){for(p=u.child;p;){if(p===o)return ta(u),t;if(p===l)return ta(u),i;p=p.sibling}throw Error(n(188))}if(o.return!==l.return)o=u,l=p;else{for(var E=!1,U=u.child;U;){if(U===o){E=!0,o=u,l=p;break}if(U===l){E=!0,l=u,o=p;break}U=U.sibling}if(!E){for(U=p.child;U;){if(U===o){E=!0,o=p,l=u;break}if(U===l){E=!0,l=p,o=u;break}U=U.sibling}if(!E)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function R(t){return t=Yl(t),t!==null?X(t):null}function X(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=X(t);if(i!==null)return i;t=t.sibling}return null}var re=e.unstable_scheduleCallback,se=e.unstable_cancelCallback,Y=e.unstable_shouldYield,be=e.unstable_requestPaint,Ce=e.unstable_now,We=e.unstable_getCurrentPriorityLevel,Ge=e.unstable_ImmediatePriority,it=e.unstable_UserBlockingPriority,st=e.unstable_NormalPriority,Xe=e.unstable_LowPriority,yt=e.unstable_IdlePriority,bt=null,xt=null;function pn(t){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(bt,t,void 0,(t.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:wt,Ke=Math.log,ri=Math.LN2;function wt(t){return t>>>=0,t===0?32:31-(Ke(t)/ri|0)|0}var mn=64,si=4194304;function Zt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function xi(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,u=t.suspendedLanes,p=t.pingedLanes,E=o&268435455;if(E!==0){var U=E&~u;U!==0?l=Zt(U):(p&=E,p!==0&&(l=Zt(p)))}else E=o&~u,E!==0?l=Zt(E):p!==0&&(l=Zt(p));if(l===0)return 0;if(i!==0&&i!==l&&(i&u)===0&&(u=l&-l,p=i&-i,u>=p||u===16&&(p&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-ut(i),u=1<<o,l|=t[o],i&=~u;return l}function Ft(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yn(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,p=t.pendingLanes;0<p;){var E=31-ut(p),U=1<<E,H=u[E];H===-1?((U&o)===0||(U&l)!==0)&&(u[E]=Ft(U,i)):H<=i&&(t.expiredLanes|=U),p&=~U}}function Pi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Tn(){var t=mn;return mn<<=1,(mn&4194240)===0&&(mn=64),t}function qn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Pn(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-ut(i),t[i]=o}function na(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var u=31-ut(o),p=1<<u;i[u]=0,l[u]=-1,t[u]=-1,o&=~p}}function ql(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-ut(o),u=1<<l;u&i|t[l]&i&&(t[l]|=i),o&=~u}}var Lt=0;function gh(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var _h,$l,vh,xh,yh,Kl=!1,ia=[],Qi=null,Ji=null,er=null,ro=new Map,so=new Map,tr=[],Qg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sh(t,i){switch(t){case"focusin":case"focusout":Qi=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":ro.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":so.delete(i.pointerId)}}function oo(t,i,o,l,u,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:p,targetContainers:[u]},i!==null&&(i=So(i),i!==null&&$l(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function Jg(t,i,o,l,u){switch(i){case"focusin":return Qi=oo(Qi,t,i,o,l,u),!0;case"dragenter":return Ji=oo(Ji,t,i,o,l,u),!0;case"mouseover":return er=oo(er,t,i,o,l,u),!0;case"pointerover":var p=u.pointerId;return ro.set(p,oo(ro.get(p)||null,t,i,o,l,u)),!0;case"gotpointercapture":return p=u.pointerId,so.set(p,oo(so.get(p)||null,t,i,o,l,u)),!0}return!1}function Mh(t){var i=Dr(t.target);if(i!==null){var o=vi(i);if(o!==null){if(i=o.tag,i===13){if(i=ea(o),i!==null){t.blockedOn=i,yh(t.priority,function(){vh(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ra(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Ql(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);St=l,o.target.dispatchEvent(l),St=null}else return i=So(o),i!==null&&$l(i),t.blockedOn=o,!1;i.shift()}return!0}function Eh(t,i,o){ra(t)&&o.delete(i)}function e_(){Kl=!1,Qi!==null&&ra(Qi)&&(Qi=null),Ji!==null&&ra(Ji)&&(Ji=null),er!==null&&ra(er)&&(er=null),ro.forEach(Eh),so.forEach(Eh)}function ao(t,i){t.blockedOn===i&&(t.blockedOn=null,Kl||(Kl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,e_)))}function lo(t){function i(u){return ao(u,t)}if(0<ia.length){ao(ia[0],t);for(var o=1;o<ia.length;o++){var l=ia[o];l.blockedOn===t&&(l.blockedOn=null)}}for(Qi!==null&&ao(Qi,t),Ji!==null&&ao(Ji,t),er!==null&&ao(er,t),ro.forEach(i),so.forEach(i),o=0;o<tr.length;o++)l=tr[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<tr.length&&(o=tr[0],o.blockedOn===null);)Mh(o),o.blockedOn===null&&tr.shift()}var as=b.ReactCurrentBatchConfig,sa=!0;function t_(t,i,o,l){var u=Lt,p=as.transition;as.transition=null;try{Lt=1,Zl(t,i,o,l)}finally{Lt=u,as.transition=p}}function n_(t,i,o,l){var u=Lt,p=as.transition;as.transition=null;try{Lt=4,Zl(t,i,o,l)}finally{Lt=u,as.transition=p}}function Zl(t,i,o,l){if(sa){var u=Ql(t,i,o,l);if(u===null)mc(t,i,l,oa,o),Sh(t,l);else if(Jg(u,t,i,o,l))l.stopPropagation();else if(Sh(t,l),i&4&&-1<Qg.indexOf(t)){for(;u!==null;){var p=So(u);if(p!==null&&_h(p),p=Ql(t,i,o,l),p===null&&mc(t,i,l,oa,o),p===u)break;u=p}u!==null&&l.stopPropagation()}else mc(t,i,l,null,o)}}var oa=null;function Ql(t,i,o,l){if(oa=null,t=j(l),t=Dr(t),t!==null)if(i=vi(t),i===null)t=null;else if(o=i.tag,o===13){if(t=ea(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return oa=t,null}function Th(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(We()){case Ge:return 1;case it:return 4;case st:case Xe:return 16;case yt:return 536870912;default:return 16}default:return 16}}var nr=null,Jl=null,aa=null;function wh(){if(aa)return aa;var t,i=Jl,o=i.length,l,u="value"in nr?nr.value:nr.textContent,p=u.length;for(t=0;t<o&&i[t]===u[t];t++);var E=o-t;for(l=1;l<=E&&i[o-l]===u[p-l];l++);return aa=u.slice(t,1<l?1-l:void 0)}function la(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ca(){return!0}function Ah(){return!1}function Hn(t){function i(o,l,u,p,E){this._reactName=o,this._targetInst=u,this.type=l,this.nativeEvent=p,this.target=E,this.currentTarget=null;for(var U in t)t.hasOwnProperty(U)&&(o=t[U],this[U]=o?o(p):p[U]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ca:Ah,this.isPropagationStopped=Ah,this}return ue(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ca)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ca)},persist:function(){},isPersistent:ca}),i}var ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ec=Hn(ls),co=ue({},ls,{view:0,detail:0}),i_=Hn(co),tc,nc,uo,ua=ue({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==uo&&(uo&&t.type==="mousemove"?(tc=t.screenX-uo.screenX,nc=t.screenY-uo.screenY):nc=tc=0,uo=t),tc)},movementY:function(t){return"movementY"in t?t.movementY:nc}}),Ch=Hn(ua),r_=ue({},ua,{dataTransfer:0}),s_=Hn(r_),o_=ue({},co,{relatedTarget:0}),ic=Hn(o_),a_=ue({},ls,{animationName:0,elapsedTime:0,pseudoElement:0}),l_=Hn(a_),c_=ue({},ls,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),u_=Hn(c_),d_=ue({},ls,{data:0}),Rh=Hn(d_),h_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},f_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},p_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function m_(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=p_[t])?!!i[t]:!1}function rc(){return m_}var g_=ue({},co,{key:function(t){if(t.key){var i=h_[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=la(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?f_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rc,charCode:function(t){return t.type==="keypress"?la(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?la(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),__=Hn(g_),v_=ue({},ua,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bh=Hn(v_),x_=ue({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rc}),y_=Hn(x_),S_=ue({},ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),M_=Hn(S_),E_=ue({},ua,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),T_=Hn(E_),w_=[9,13,27,32],sc=h&&"CompositionEvent"in window,ho=null;h&&"documentMode"in document&&(ho=document.documentMode);var A_=h&&"TextEvent"in window&&!ho,Ph=h&&(!sc||ho&&8<ho&&11>=ho),Lh=" ",Dh=!1;function Nh(t,i){switch(t){case"keyup":return w_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cs=!1;function C_(t,i){switch(t){case"compositionend":return Uh(i);case"keypress":return i.which!==32?null:(Dh=!0,Lh);case"textInput":return t=i.data,t===Lh&&Dh?null:t;default:return null}}function R_(t,i){if(cs)return t==="compositionend"||!sc&&Nh(t,i)?(t=wh(),aa=Jl=nr=null,cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ph&&i.locale!=="ko"?null:i.data;default:return null}}var b_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ih(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!b_[t.type]:i==="textarea"}function Fh(t,i,o,l){k(l),i=ma(i,"onChange"),0<i.length&&(o=new ec("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var fo=null,po=null;function P_(t){ef(t,0)}function da(t){var i=ps(t);if(pt(i))return t}function L_(t,i){if(t==="change")return i}var Oh=!1;if(h){var oc;if(h){var ac="oninput"in document;if(!ac){var kh=document.createElement("div");kh.setAttribute("oninput","return;"),ac=typeof kh.oninput=="function"}oc=ac}else oc=!1;Oh=oc&&(!document.documentMode||9<document.documentMode)}function zh(){fo&&(fo.detachEvent("onpropertychange",Bh),po=fo=null)}function Bh(t){if(t.propertyName==="value"&&da(po)){var i=[];Fh(i,po,t,j(t)),sn(P_,i)}}function D_(t,i,o){t==="focusin"?(zh(),fo=i,po=o,fo.attachEvent("onpropertychange",Bh)):t==="focusout"&&zh()}function N_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return da(po)}function U_(t,i){if(t==="click")return da(i)}function I_(t,i){if(t==="input"||t==="change")return da(i)}function F_(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var oi=typeof Object.is=="function"?Object.is:F_;function mo(t,i){if(oi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var u=o[l];if(!f.call(i,u)||!oi(t[u],i[u]))return!1}return!0}function Hh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vh(t,i){var o=Hh(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Hh(o)}}function Gh(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Gh(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function jh(){for(var t=window,i=Dt();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Dt(t.document)}return i}function lc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function O_(t){var i=jh(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Gh(o.ownerDocument.documentElement,o)){if(l!==null&&lc(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var u=o.textContent.length,p=Math.min(l.start,u);l=l.end===void 0?p:Math.min(l.end,u),!t.extend&&p>l&&(u=l,l=p,p=u),u=Vh(o,p);var E=Vh(o,l);u&&E&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(u.node,u.offset),t.removeAllRanges(),p>l?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var k_=h&&"documentMode"in document&&11>=document.documentMode,us=null,cc=null,go=null,uc=!1;function Wh(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;uc||us==null||us!==Dt(l)||(l=us,"selectionStart"in l&&lc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),go&&mo(go,l)||(go=l,l=ma(cc,"onSelect"),0<l.length&&(i=new ec("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=us)))}function ha(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var ds={animationend:ha("Animation","AnimationEnd"),animationiteration:ha("Animation","AnimationIteration"),animationstart:ha("Animation","AnimationStart"),transitionend:ha("Transition","TransitionEnd")},dc={},Xh={};h&&(Xh=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function fa(t){if(dc[t])return dc[t];if(!ds[t])return t;var i=ds[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Xh)return dc[t]=i[o];return t}var Yh=fa("animationend"),qh=fa("animationiteration"),$h=fa("animationstart"),Kh=fa("transitionend"),Zh=new Map,Qh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(t,i){Zh.set(t,i),c(i,[t])}for(var hc=0;hc<Qh.length;hc++){var fc=Qh[hc],z_=fc.toLowerCase(),B_=fc[0].toUpperCase()+fc.slice(1);ir(z_,"on"+B_)}ir(Yh,"onAnimationEnd"),ir(qh,"onAnimationIteration"),ir($h,"onAnimationStart"),ir("dblclick","onDoubleClick"),ir("focusin","onFocus"),ir("focusout","onBlur"),ir(Kh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),H_=new Set("cancel close invalid load scroll toggle".split(" ").concat(_o));function Jh(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,Jo(l,i,void 0,t),t.currentTarget=null}function ef(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],u=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var E=l.length-1;0<=E;E--){var U=l[E],H=U.instance,ie=U.currentTarget;if(U=U.listener,H!==p&&u.isPropagationStopped())break e;Jh(u,U,ie),p=H}else for(E=0;E<l.length;E++){if(U=l[E],H=U.instance,ie=U.currentTarget,U=U.listener,H!==p&&u.isPropagationStopped())break e;Jh(u,U,ie),p=H}}}if(Lr)throw t=Zi,Lr=!1,Zi=null,t}function kt(t,i){var o=i[Sc];o===void 0&&(o=i[Sc]=new Set);var l=t+"__bubble";o.has(l)||(tf(i,t,2,!1),o.add(l))}function pc(t,i,o){var l=0;i&&(l|=4),tf(o,t,l,i)}var pa="_reactListening"+Math.random().toString(36).slice(2);function vo(t){if(!t[pa]){t[pa]=!0,r.forEach(function(o){o!=="selectionchange"&&(H_.has(o)||pc(o,!1,t),pc(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[pa]||(i[pa]=!0,pc("selectionchange",!1,i))}}function tf(t,i,o,l){switch(Th(i)){case 1:var u=t_;break;case 4:u=n_;break;default:u=Zl}o=u.bind(null,i,o,t),u=void 0,!ss||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(i,o,{capture:!0,passive:u}):t.addEventListener(i,o,!0):u!==void 0?t.addEventListener(i,o,{passive:u}):t.addEventListener(i,o,!1)}function mc(t,i,o,l,u){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var U=l.stateNode.containerInfo;if(U===u||U.nodeType===8&&U.parentNode===u)break;if(E===4)for(E=l.return;E!==null;){var H=E.tag;if((H===3||H===4)&&(H=E.stateNode.containerInfo,H===u||H.nodeType===8&&H.parentNode===u))return;E=E.return}for(;U!==null;){if(E=Dr(U),E===null)return;if(H=E.tag,H===5||H===6){l=p=E;continue e}U=U.parentNode}}l=l.return}sn(function(){var ie=p,Se=j(o),Te=[];e:{var ye=Zh.get(t);if(ye!==void 0){var Oe=ec,Ve=t;switch(t){case"keypress":if(la(o)===0)break e;case"keydown":case"keyup":Oe=__;break;case"focusin":Ve="focus",Oe=ic;break;case"focusout":Ve="blur",Oe=ic;break;case"beforeblur":case"afterblur":Oe=ic;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Oe=Ch;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Oe=s_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Oe=y_;break;case Yh:case qh:case $h:Oe=l_;break;case Kh:Oe=M_;break;case"scroll":Oe=i_;break;case"wheel":Oe=T_;break;case"copy":case"cut":case"paste":Oe=u_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Oe=bh}var je=(i&4)!==0,Yt=!je&&t==="scroll",$=je?ye!==null?ye+"Capture":null:ye;je=[];for(var G=ie,te;G!==null;){te=G;var Re=te.stateNode;if(te.tag===5&&Re!==null&&(te=Re,$!==null&&(Re=qt(G,$),Re!=null&&je.push(xo(G,Re,te)))),Yt)break;G=G.return}0<je.length&&(ye=new Oe(ye,Ve,null,o,Se),Te.push({event:ye,listeners:je}))}}if((i&7)===0){e:{if(ye=t==="mouseover"||t==="pointerover",Oe=t==="mouseout"||t==="pointerout",ye&&o!==St&&(Ve=o.relatedTarget||o.fromElement)&&(Dr(Ve)||Ve[Li]))break e;if((Oe||ye)&&(ye=Se.window===Se?Se:(ye=Se.ownerDocument)?ye.defaultView||ye.parentWindow:window,Oe?(Ve=o.relatedTarget||o.toElement,Oe=ie,Ve=Ve?Dr(Ve):null,Ve!==null&&(Yt=vi(Ve),Ve!==Yt||Ve.tag!==5&&Ve.tag!==6)&&(Ve=null)):(Oe=null,Ve=ie),Oe!==Ve)){if(je=Ch,Re="onMouseLeave",$="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(je=bh,Re="onPointerLeave",$="onPointerEnter",G="pointer"),Yt=Oe==null?ye:ps(Oe),te=Ve==null?ye:ps(Ve),ye=new je(Re,G+"leave",Oe,o,Se),ye.target=Yt,ye.relatedTarget=te,Re=null,Dr(Se)===ie&&(je=new je($,G+"enter",Ve,o,Se),je.target=te,je.relatedTarget=Yt,Re=je),Yt=Re,Oe&&Ve)t:{for(je=Oe,$=Ve,G=0,te=je;te;te=hs(te))G++;for(te=0,Re=$;Re;Re=hs(Re))te++;for(;0<G-te;)je=hs(je),G--;for(;0<te-G;)$=hs($),te--;for(;G--;){if(je===$||$!==null&&je===$.alternate)break t;je=hs(je),$=hs($)}je=null}else je=null;Oe!==null&&nf(Te,ye,Oe,je,!1),Ve!==null&&Yt!==null&&nf(Te,Yt,Ve,je,!0)}}e:{if(ye=ie?ps(ie):window,Oe=ye.nodeName&&ye.nodeName.toLowerCase(),Oe==="select"||Oe==="input"&&ye.type==="file")var Ye=L_;else if(Ih(ye))if(Oh)Ye=I_;else{Ye=N_;var et=D_}else(Oe=ye.nodeName)&&Oe.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&(Ye=U_);if(Ye&&(Ye=Ye(t,ie))){Fh(Te,Ye,o,Se);break e}et&&et(t,ye,ie),t==="focusout"&&(et=ye._wrapperState)&&et.controlled&&ye.type==="number"&&Ct(ye,"number",ye.value)}switch(et=ie?ps(ie):window,t){case"focusin":(Ih(et)||et.contentEditable==="true")&&(us=et,cc=ie,go=null);break;case"focusout":go=cc=us=null;break;case"mousedown":uc=!0;break;case"contextmenu":case"mouseup":case"dragend":uc=!1,Wh(Te,o,Se);break;case"selectionchange":if(k_)break;case"keydown":case"keyup":Wh(Te,o,Se)}var tt;if(sc)e:{switch(t){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else cs?Nh(t,o)&&(rt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(rt="onCompositionStart");rt&&(Ph&&o.locale!=="ko"&&(cs||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&cs&&(tt=wh()):(nr=Se,Jl="value"in nr?nr.value:nr.textContent,cs=!0)),et=ma(ie,rt),0<et.length&&(rt=new Rh(rt,t,null,o,Se),Te.push({event:rt,listeners:et}),tt?rt.data=tt:(tt=Uh(o),tt!==null&&(rt.data=tt)))),(tt=A_?C_(t,o):R_(t,o))&&(ie=ma(ie,"onBeforeInput"),0<ie.length&&(Se=new Rh("onBeforeInput","beforeinput",null,o,Se),Te.push({event:Se,listeners:ie}),Se.data=tt))}ef(Te,i)})}function xo(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ma(t,i){for(var o=i+"Capture",l=[];t!==null;){var u=t,p=u.stateNode;u.tag===5&&p!==null&&(u=p,p=qt(t,o),p!=null&&l.unshift(xo(t,p,u)),p=qt(t,i),p!=null&&l.push(xo(t,p,u))),t=t.return}return l}function hs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function nf(t,i,o,l,u){for(var p=i._reactName,E=[];o!==null&&o!==l;){var U=o,H=U.alternate,ie=U.stateNode;if(H!==null&&H===l)break;U.tag===5&&ie!==null&&(U=ie,u?(H=qt(o,p),H!=null&&E.unshift(xo(o,H,U))):u||(H=qt(o,p),H!=null&&E.push(xo(o,H,U)))),o=o.return}E.length!==0&&t.push({event:i,listeners:E})}var V_=/\r\n?/g,G_=/\u0000|\uFFFD/g;function rf(t){return(typeof t=="string"?t:""+t).replace(V_,`
`).replace(G_,"")}function ga(t,i,o){if(i=rf(i),rf(t)!==i&&o)throw Error(n(425))}function _a(){}var gc=null,_c=null;function vc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var xc=typeof setTimeout=="function"?setTimeout:void 0,j_=typeof clearTimeout=="function"?clearTimeout:void 0,sf=typeof Promise=="function"?Promise:void 0,W_=typeof queueMicrotask=="function"?queueMicrotask:typeof sf<"u"?function(t){return sf.resolve(null).then(t).catch(X_)}:xc;function X_(t){setTimeout(function(){throw t})}function yc(t,i){var o=i,l=0;do{var u=o.nextSibling;if(t.removeChild(o),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(l===0){t.removeChild(u),lo(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=u}while(o);lo(i)}function rr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function of(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var fs=Math.random().toString(36).slice(2),yi="__reactFiber$"+fs,yo="__reactProps$"+fs,Li="__reactContainer$"+fs,Sc="__reactEvents$"+fs,Y_="__reactListeners$"+fs,q_="__reactHandles$"+fs;function Dr(t){var i=t[yi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Li]||o[yi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=of(t);t!==null;){if(o=t[yi])return o;t=of(t)}return i}t=o,o=t.parentNode}return null}function So(t){return t=t[yi]||t[Li],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ps(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function va(t){return t[yo]||null}var Mc=[],ms=-1;function sr(t){return{current:t}}function zt(t){0>ms||(t.current=Mc[ms],Mc[ms]=null,ms--)}function Ot(t,i){ms++,Mc[ms]=t.current,t.current=i}var or={},gn=sr(or),Ln=sr(!1),Nr=or;function gs(t,i){var o=t.type.contextTypes;if(!o)return or;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var u={},p;for(p in o)u[p]=i[p];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=u),u}function Dn(t){return t=t.childContextTypes,t!=null}function xa(){zt(Ln),zt(gn)}function af(t,i,o){if(gn.current!==or)throw Error(n(168));Ot(gn,i),Ot(Ln,o)}function lf(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var u in l)if(!(u in i))throw Error(n(108,Me(t)||"Unknown",u));return ue({},o,l)}function ya(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||or,Nr=gn.current,Ot(gn,t),Ot(Ln,Ln.current),!0}function cf(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=lf(t,i,Nr),l.__reactInternalMemoizedMergedChildContext=t,zt(Ln),zt(gn),Ot(gn,t)):zt(Ln),Ot(Ln,o)}var Di=null,Sa=!1,Ec=!1;function uf(t){Di===null?Di=[t]:Di.push(t)}function $_(t){Sa=!0,uf(t)}function ar(){if(!Ec&&Di!==null){Ec=!0;var t=0,i=Lt;try{var o=Di;for(Lt=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}Di=null,Sa=!1}catch(u){throw Di!==null&&(Di=Di.slice(t+1)),re(Ge,ar),u}finally{Lt=i,Ec=!1}}return null}var _s=[],vs=0,Ma=null,Ea=0,$n=[],Kn=0,Ur=null,Ni=1,Ui="";function Ir(t,i){_s[vs++]=Ea,_s[vs++]=Ma,Ma=t,Ea=i}function df(t,i,o){$n[Kn++]=Ni,$n[Kn++]=Ui,$n[Kn++]=Ur,Ur=t;var l=Ni;t=Ui;var u=32-ut(l)-1;l&=~(1<<u),o+=1;var p=32-ut(i)+u;if(30<p){var E=u-u%5;p=(l&(1<<E)-1).toString(32),l>>=E,u-=E,Ni=1<<32-ut(i)+u|o<<u|l,Ui=p+t}else Ni=1<<p|o<<u|l,Ui=t}function Tc(t){t.return!==null&&(Ir(t,1),df(t,1,0))}function wc(t){for(;t===Ma;)Ma=_s[--vs],_s[vs]=null,Ea=_s[--vs],_s[vs]=null;for(;t===Ur;)Ur=$n[--Kn],$n[Kn]=null,Ui=$n[--Kn],$n[Kn]=null,Ni=$n[--Kn],$n[Kn]=null}var Vn=null,Gn=null,Bt=!1,ai=null;function hf(t,i){var o=ei(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function ff(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Vn=t,Gn=rr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Vn=t,Gn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Ur!==null?{id:Ni,overflow:Ui}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=ei(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Vn=t,Gn=null,!0):!1;default:return!1}}function Ac(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Cc(t){if(Bt){var i=Gn;if(i){var o=i;if(!ff(t,i)){if(Ac(t))throw Error(n(418));i=rr(o.nextSibling);var l=Vn;i&&ff(t,i)?hf(l,o):(t.flags=t.flags&-4097|2,Bt=!1,Vn=t)}}else{if(Ac(t))throw Error(n(418));t.flags=t.flags&-4097|2,Bt=!1,Vn=t}}}function pf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Vn=t}function Ta(t){if(t!==Vn)return!1;if(!Bt)return pf(t),Bt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!vc(t.type,t.memoizedProps)),i&&(i=Gn)){if(Ac(t))throw mf(),Error(n(418));for(;i;)hf(t,i),i=rr(i.nextSibling)}if(pf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Gn=rr(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Gn=null}}else Gn=Vn?rr(t.stateNode.nextSibling):null;return!0}function mf(){for(var t=Gn;t;)t=rr(t.nextSibling)}function xs(){Gn=Vn=null,Bt=!1}function Rc(t){ai===null?ai=[t]:ai.push(t)}var K_=b.ReactCurrentBatchConfig;function Mo(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var u=l,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(E){var U=u.refs;E===null?delete U[p]:U[p]=E},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function wa(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function gf(t){var i=t._init;return i(t._payload)}function _f(t){function i($,G){if(t){var te=$.deletions;te===null?($.deletions=[G],$.flags|=16):te.push(G)}}function o($,G){if(!t)return null;for(;G!==null;)i($,G),G=G.sibling;return null}function l($,G){for($=new Map;G!==null;)G.key!==null?$.set(G.key,G):$.set(G.index,G),G=G.sibling;return $}function u($,G){return $=mr($,G),$.index=0,$.sibling=null,$}function p($,G,te){return $.index=te,t?(te=$.alternate,te!==null?(te=te.index,te<G?($.flags|=2,G):te):($.flags|=2,G)):($.flags|=1048576,G)}function E($){return t&&$.alternate===null&&($.flags|=2),$}function U($,G,te,Re){return G===null||G.tag!==6?(G=xu(te,$.mode,Re),G.return=$,G):(G=u(G,te),G.return=$,G)}function H($,G,te,Re){var Ye=te.type;return Ye===I?Se($,G,te.props.children,Re,te.key):G!==null&&(G.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===oe&&gf(Ye)===G.type)?(Re=u(G,te.props),Re.ref=Mo($,G,te),Re.return=$,Re):(Re=$a(te.type,te.key,te.props,null,$.mode,Re),Re.ref=Mo($,G,te),Re.return=$,Re)}function ie($,G,te,Re){return G===null||G.tag!==4||G.stateNode.containerInfo!==te.containerInfo||G.stateNode.implementation!==te.implementation?(G=yu(te,$.mode,Re),G.return=$,G):(G=u(G,te.children||[]),G.return=$,G)}function Se($,G,te,Re,Ye){return G===null||G.tag!==7?(G=Gr(te,$.mode,Re,Ye),G.return=$,G):(G=u(G,te),G.return=$,G)}function Te($,G,te){if(typeof G=="string"&&G!==""||typeof G=="number")return G=xu(""+G,$.mode,te),G.return=$,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case q:return te=$a(G.type,G.key,G.props,null,$.mode,te),te.ref=Mo($,null,G),te.return=$,te;case L:return G=yu(G,$.mode,te),G.return=$,G;case oe:var Re=G._init;return Te($,Re(G._payload),te)}if(qe(G)||le(G))return G=Gr(G,$.mode,te,null),G.return=$,G;wa($,G)}return null}function ye($,G,te,Re){var Ye=G!==null?G.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return Ye!==null?null:U($,G,""+te,Re);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case q:return te.key===Ye?H($,G,te,Re):null;case L:return te.key===Ye?ie($,G,te,Re):null;case oe:return Ye=te._init,ye($,G,Ye(te._payload),Re)}if(qe(te)||le(te))return Ye!==null?null:Se($,G,te,Re,null);wa($,te)}return null}function Oe($,G,te,Re,Ye){if(typeof Re=="string"&&Re!==""||typeof Re=="number")return $=$.get(te)||null,U(G,$,""+Re,Ye);if(typeof Re=="object"&&Re!==null){switch(Re.$$typeof){case q:return $=$.get(Re.key===null?te:Re.key)||null,H(G,$,Re,Ye);case L:return $=$.get(Re.key===null?te:Re.key)||null,ie(G,$,Re,Ye);case oe:var et=Re._init;return Oe($,G,te,et(Re._payload),Ye)}if(qe(Re)||le(Re))return $=$.get(te)||null,Se(G,$,Re,Ye,null);wa(G,Re)}return null}function Ve($,G,te,Re){for(var Ye=null,et=null,tt=G,rt=G=0,ln=null;tt!==null&&rt<te.length;rt++){tt.index>rt?(ln=tt,tt=null):ln=tt.sibling;var At=ye($,tt,te[rt],Re);if(At===null){tt===null&&(tt=ln);break}t&&tt&&At.alternate===null&&i($,tt),G=p(At,G,rt),et===null?Ye=At:et.sibling=At,et=At,tt=ln}if(rt===te.length)return o($,tt),Bt&&Ir($,rt),Ye;if(tt===null){for(;rt<te.length;rt++)tt=Te($,te[rt],Re),tt!==null&&(G=p(tt,G,rt),et===null?Ye=tt:et.sibling=tt,et=tt);return Bt&&Ir($,rt),Ye}for(tt=l($,tt);rt<te.length;rt++)ln=Oe(tt,$,rt,te[rt],Re),ln!==null&&(t&&ln.alternate!==null&&tt.delete(ln.key===null?rt:ln.key),G=p(ln,G,rt),et===null?Ye=ln:et.sibling=ln,et=ln);return t&&tt.forEach(function(gr){return i($,gr)}),Bt&&Ir($,rt),Ye}function je($,G,te,Re){var Ye=le(te);if(typeof Ye!="function")throw Error(n(150));if(te=Ye.call(te),te==null)throw Error(n(151));for(var et=Ye=null,tt=G,rt=G=0,ln=null,At=te.next();tt!==null&&!At.done;rt++,At=te.next()){tt.index>rt?(ln=tt,tt=null):ln=tt.sibling;var gr=ye($,tt,At.value,Re);if(gr===null){tt===null&&(tt=ln);break}t&&tt&&gr.alternate===null&&i($,tt),G=p(gr,G,rt),et===null?Ye=gr:et.sibling=gr,et=gr,tt=ln}if(At.done)return o($,tt),Bt&&Ir($,rt),Ye;if(tt===null){for(;!At.done;rt++,At=te.next())At=Te($,At.value,Re),At!==null&&(G=p(At,G,rt),et===null?Ye=At:et.sibling=At,et=At);return Bt&&Ir($,rt),Ye}for(tt=l($,tt);!At.done;rt++,At=te.next())At=Oe(tt,$,rt,At.value,Re),At!==null&&(t&&At.alternate!==null&&tt.delete(At.key===null?rt:At.key),G=p(At,G,rt),et===null?Ye=At:et.sibling=At,et=At);return t&&tt.forEach(function(bv){return i($,bv)}),Bt&&Ir($,rt),Ye}function Yt($,G,te,Re){if(typeof te=="object"&&te!==null&&te.type===I&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case q:e:{for(var Ye=te.key,et=G;et!==null;){if(et.key===Ye){if(Ye=te.type,Ye===I){if(et.tag===7){o($,et.sibling),G=u(et,te.props.children),G.return=$,$=G;break e}}else if(et.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===oe&&gf(Ye)===et.type){o($,et.sibling),G=u(et,te.props),G.ref=Mo($,et,te),G.return=$,$=G;break e}o($,et);break}else i($,et);et=et.sibling}te.type===I?(G=Gr(te.props.children,$.mode,Re,te.key),G.return=$,$=G):(Re=$a(te.type,te.key,te.props,null,$.mode,Re),Re.ref=Mo($,G,te),Re.return=$,$=Re)}return E($);case L:e:{for(et=te.key;G!==null;){if(G.key===et)if(G.tag===4&&G.stateNode.containerInfo===te.containerInfo&&G.stateNode.implementation===te.implementation){o($,G.sibling),G=u(G,te.children||[]),G.return=$,$=G;break e}else{o($,G);break}else i($,G);G=G.sibling}G=yu(te,$.mode,Re),G.return=$,$=G}return E($);case oe:return et=te._init,Yt($,G,et(te._payload),Re)}if(qe(te))return Ve($,G,te,Re);if(le(te))return je($,G,te,Re);wa($,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,G!==null&&G.tag===6?(o($,G.sibling),G=u(G,te),G.return=$,$=G):(o($,G),G=xu(te,$.mode,Re),G.return=$,$=G),E($)):o($,G)}return Yt}var ys=_f(!0),vf=_f(!1),Aa=sr(null),Ca=null,Ss=null,bc=null;function Pc(){bc=Ss=Ca=null}function Lc(t){var i=Aa.current;zt(Aa),t._currentValue=i}function Dc(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function Ms(t,i){Ca=t,bc=Ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Nn=!0),t.firstContext=null)}function Zn(t){var i=t._currentValue;if(bc!==t)if(t={context:t,memoizedValue:i,next:null},Ss===null){if(Ca===null)throw Error(n(308));Ss=t,Ca.dependencies={lanes:0,firstContext:t}}else Ss=Ss.next=t;return i}var Fr=null;function Nc(t){Fr===null?Fr=[t]:Fr.push(t)}function xf(t,i,o,l){var u=i.interleaved;return u===null?(o.next=o,Nc(i)):(o.next=u.next,u.next=o),i.interleaved=o,Ii(t,l)}function Ii(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var lr=!1;function Uc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Fi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function cr(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Mt&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,Ii(t,o)}return u=l.interleaved,u===null?(i.next=i,Nc(l)):(i.next=u.next,u.next=i),l.interleaved=i,Ii(t,o)}function Ra(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,ql(t,o)}}function Sf(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var u=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?u=p=E:p=p.next=E,o=o.next}while(o!==null);p===null?u=p=i:p=p.next=i}else u=p=i;o={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:p,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function ba(t,i,o,l){var u=t.updateQueue;lr=!1;var p=u.firstBaseUpdate,E=u.lastBaseUpdate,U=u.shared.pending;if(U!==null){u.shared.pending=null;var H=U,ie=H.next;H.next=null,E===null?p=ie:E.next=ie,E=H;var Se=t.alternate;Se!==null&&(Se=Se.updateQueue,U=Se.lastBaseUpdate,U!==E&&(U===null?Se.firstBaseUpdate=ie:U.next=ie,Se.lastBaseUpdate=H))}if(p!==null){var Te=u.baseState;E=0,Se=ie=H=null,U=p;do{var ye=U.lane,Oe=U.eventTime;if((l&ye)===ye){Se!==null&&(Se=Se.next={eventTime:Oe,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Ve=t,je=U;switch(ye=i,Oe=o,je.tag){case 1:if(Ve=je.payload,typeof Ve=="function"){Te=Ve.call(Oe,Te,ye);break e}Te=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=je.payload,ye=typeof Ve=="function"?Ve.call(Oe,Te,ye):Ve,ye==null)break e;Te=ue({},Te,ye);break e;case 2:lr=!0}}U.callback!==null&&U.lane!==0&&(t.flags|=64,ye=u.effects,ye===null?u.effects=[U]:ye.push(U))}else Oe={eventTime:Oe,lane:ye,tag:U.tag,payload:U.payload,callback:U.callback,next:null},Se===null?(ie=Se=Oe,H=Te):Se=Se.next=Oe,E|=ye;if(U=U.next,U===null){if(U=u.shared.pending,U===null)break;ye=U,U=ye.next,ye.next=null,u.lastBaseUpdate=ye,u.shared.pending=null}}while(!0);if(Se===null&&(H=Te),u.baseState=H,u.firstBaseUpdate=ie,u.lastBaseUpdate=Se,i=u.shared.interleaved,i!==null){u=i;do E|=u.lane,u=u.next;while(u!==i)}else p===null&&(u.shared.lanes=0);zr|=E,t.lanes=E,t.memoizedState=Te}}function Mf(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],u=l.callback;if(u!==null){if(l.callback=null,l=o,typeof u!="function")throw Error(n(191,u));u.call(l)}}}var Eo={},Si=sr(Eo),To=sr(Eo),wo=sr(Eo);function Or(t){if(t===Eo)throw Error(n(174));return t}function Ic(t,i){switch(Ot(wo,i),Ot(To,t),Ot(Si,Eo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Fe(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Fe(i,t)}zt(Si),Ot(Si,i)}function Es(){zt(Si),zt(To),zt(wo)}function Ef(t){Or(wo.current);var i=Or(Si.current),o=Fe(i,t.type);i!==o&&(Ot(To,t),Ot(Si,o))}function Fc(t){To.current===t&&(zt(Si),zt(To))}var Vt=sr(0);function Pa(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Oc=[];function kc(){for(var t=0;t<Oc.length;t++)Oc[t]._workInProgressVersionPrimary=null;Oc.length=0}var La=b.ReactCurrentDispatcher,zc=b.ReactCurrentBatchConfig,kr=0,Gt=null,Qt=null,on=null,Da=!1,Ao=!1,Co=0,Z_=0;function _n(){throw Error(n(321))}function Bc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!oi(t[o],i[o]))return!1;return!0}function Hc(t,i,o,l,u,p){if(kr=p,Gt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,La.current=t===null||t.memoizedState===null?tv:nv,t=o(l,u),Ao){p=0;do{if(Ao=!1,Co=0,25<=p)throw Error(n(301));p+=1,on=Qt=null,i.updateQueue=null,La.current=iv,t=o(l,u)}while(Ao)}if(La.current=Ia,i=Qt!==null&&Qt.next!==null,kr=0,on=Qt=Gt=null,Da=!1,i)throw Error(n(300));return t}function Vc(){var t=Co!==0;return Co=0,t}function Mi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?Gt.memoizedState=on=t:on=on.next=t,on}function Qn(){if(Qt===null){var t=Gt.alternate;t=t!==null?t.memoizedState:null}else t=Qt.next;var i=on===null?Gt.memoizedState:on.next;if(i!==null)on=i,Qt=t;else{if(t===null)throw Error(n(310));Qt=t,t={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},on===null?Gt.memoizedState=on=t:on=on.next=t}return on}function Ro(t,i){return typeof i=="function"?i(t):i}function Gc(t){var i=Qn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=Qt,u=l.baseQueue,p=o.pending;if(p!==null){if(u!==null){var E=u.next;u.next=p.next,p.next=E}l.baseQueue=u=p,o.pending=null}if(u!==null){p=u.next,l=l.baseState;var U=E=null,H=null,ie=p;do{var Se=ie.lane;if((kr&Se)===Se)H!==null&&(H=H.next={lane:0,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),l=ie.hasEagerState?ie.eagerState:t(l,ie.action);else{var Te={lane:Se,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null};H===null?(U=H=Te,E=l):H=H.next=Te,Gt.lanes|=Se,zr|=Se}ie=ie.next}while(ie!==null&&ie!==p);H===null?E=l:H.next=U,oi(l,i.memoizedState)||(Nn=!0),i.memoizedState=l,i.baseState=E,i.baseQueue=H,o.lastRenderedState=l}if(t=o.interleaved,t!==null){u=t;do p=u.lane,Gt.lanes|=p,zr|=p,u=u.next;while(u!==t)}else u===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function jc(t){var i=Qn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,u=o.pending,p=i.memoizedState;if(u!==null){o.pending=null;var E=u=u.next;do p=t(p,E.action),E=E.next;while(E!==u);oi(p,i.memoizedState)||(Nn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,l]}function Tf(){}function wf(t,i){var o=Gt,l=Qn(),u=i(),p=!oi(l.memoizedState,u);if(p&&(l.memoizedState=u,Nn=!0),l=l.queue,Wc(Rf.bind(null,o,l,t),[t]),l.getSnapshot!==i||p||on!==null&&on.memoizedState.tag&1){if(o.flags|=2048,bo(9,Cf.bind(null,o,l,u,i),void 0,null),an===null)throw Error(n(349));(kr&30)!==0||Af(o,i,u)}return u}function Af(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Gt.updateQueue,i===null?(i={lastEffect:null,stores:null},Gt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Cf(t,i,o,l){i.value=o,i.getSnapshot=l,bf(i)&&Pf(t)}function Rf(t,i,o){return o(function(){bf(i)&&Pf(t)})}function bf(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!oi(t,o)}catch{return!0}}function Pf(t){var i=Ii(t,1);i!==null&&di(i,t,1,-1)}function Lf(t){var i=Mi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:t},i.queue=t,t=t.dispatch=ev.bind(null,Gt,t),[i.memoizedState,t]}function bo(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=Gt.updateQueue,i===null?(i={lastEffect:null,stores:null},Gt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function Df(){return Qn().memoizedState}function Na(t,i,o,l){var u=Mi();Gt.flags|=t,u.memoizedState=bo(1|i,o,void 0,l===void 0?null:l)}function Ua(t,i,o,l){var u=Qn();l=l===void 0?null:l;var p=void 0;if(Qt!==null){var E=Qt.memoizedState;if(p=E.destroy,l!==null&&Bc(l,E.deps)){u.memoizedState=bo(i,o,p,l);return}}Gt.flags|=t,u.memoizedState=bo(1|i,o,p,l)}function Nf(t,i){return Na(8390656,8,t,i)}function Wc(t,i){return Ua(2048,8,t,i)}function Uf(t,i){return Ua(4,2,t,i)}function If(t,i){return Ua(4,4,t,i)}function Ff(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Of(t,i,o){return o=o!=null?o.concat([t]):null,Ua(4,4,Ff.bind(null,i,t),o)}function Xc(){}function kf(t,i){var o=Qn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Bc(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function zf(t,i){var o=Qn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Bc(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function Bf(t,i,o){return(kr&21)===0?(t.baseState&&(t.baseState=!1,Nn=!0),t.memoizedState=o):(oi(o,i)||(o=Tn(),Gt.lanes|=o,zr|=o,t.baseState=!0),i)}function Q_(t,i){var o=Lt;Lt=o!==0&&4>o?o:4,t(!0);var l=zc.transition;zc.transition={};try{t(!1),i()}finally{Lt=o,zc.transition=l}}function Hf(){return Qn().memoizedState}function J_(t,i,o){var l=fr(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Vf(t))Gf(i,o);else if(o=xf(t,i,o,l),o!==null){var u=An();di(o,t,l,u),jf(o,i,l)}}function ev(t,i,o){var l=fr(t),u={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Vf(t))Gf(i,u);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var E=i.lastRenderedState,U=p(E,o);if(u.hasEagerState=!0,u.eagerState=U,oi(U,E)){var H=i.interleaved;H===null?(u.next=u,Nc(i)):(u.next=H.next,H.next=u),i.interleaved=u;return}}catch{}finally{}o=xf(t,i,u,l),o!==null&&(u=An(),di(o,t,l,u),jf(o,i,l))}}function Vf(t){var i=t.alternate;return t===Gt||i!==null&&i===Gt}function Gf(t,i){Ao=Da=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function jf(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,ql(t,o)}}var Ia={readContext:Zn,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useInsertionEffect:_n,useLayoutEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useMutableSource:_n,useSyncExternalStore:_n,useId:_n,unstable_isNewReconciler:!1},tv={readContext:Zn,useCallback:function(t,i){return Mi().memoizedState=[t,i===void 0?null:i],t},useContext:Zn,useEffect:Nf,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Na(4194308,4,Ff.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Na(4194308,4,t,i)},useInsertionEffect:function(t,i){return Na(4,2,t,i)},useMemo:function(t,i){var o=Mi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=Mi();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=J_.bind(null,Gt,t),[l.memoizedState,t]},useRef:function(t){var i=Mi();return t={current:t},i.memoizedState=t},useState:Lf,useDebugValue:Xc,useDeferredValue:function(t){return Mi().memoizedState=t},useTransition:function(){var t=Lf(!1),i=t[0];return t=Q_.bind(null,t[1]),Mi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=Gt,u=Mi();if(Bt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),an===null)throw Error(n(349));(kr&30)!==0||Af(l,i,o)}u.memoizedState=o;var p={value:o,getSnapshot:i};return u.queue=p,Nf(Rf.bind(null,l,p,t),[t]),l.flags|=2048,bo(9,Cf.bind(null,l,p,o,i),void 0,null),o},useId:function(){var t=Mi(),i=an.identifierPrefix;if(Bt){var o=Ui,l=Ni;o=(l&~(1<<32-ut(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=Co++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Z_++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},nv={readContext:Zn,useCallback:kf,useContext:Zn,useEffect:Wc,useImperativeHandle:Of,useInsertionEffect:Uf,useLayoutEffect:If,useMemo:zf,useReducer:Gc,useRef:Df,useState:function(){return Gc(Ro)},useDebugValue:Xc,useDeferredValue:function(t){var i=Qn();return Bf(i,Qt.memoizedState,t)},useTransition:function(){var t=Gc(Ro)[0],i=Qn().memoizedState;return[t,i]},useMutableSource:Tf,useSyncExternalStore:wf,useId:Hf,unstable_isNewReconciler:!1},iv={readContext:Zn,useCallback:kf,useContext:Zn,useEffect:Wc,useImperativeHandle:Of,useInsertionEffect:Uf,useLayoutEffect:If,useMemo:zf,useReducer:jc,useRef:Df,useState:function(){return jc(Ro)},useDebugValue:Xc,useDeferredValue:function(t){var i=Qn();return Qt===null?i.memoizedState=t:Bf(i,Qt.memoizedState,t)},useTransition:function(){var t=jc(Ro)[0],i=Qn().memoizedState;return[t,i]},useMutableSource:Tf,useSyncExternalStore:wf,useId:Hf,unstable_isNewReconciler:!1};function li(t,i){if(t&&t.defaultProps){i=ue({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Yc(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:ue({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Fa={isMounted:function(t){return(t=t._reactInternals)?vi(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=An(),u=fr(t),p=Fi(l,u);p.payload=i,o!=null&&(p.callback=o),i=cr(t,p,u),i!==null&&(di(i,t,u,l),Ra(i,t,u))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=An(),u=fr(t),p=Fi(l,u);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=cr(t,p,u),i!==null&&(di(i,t,u,l),Ra(i,t,u))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=An(),l=fr(t),u=Fi(o,l);u.tag=2,i!=null&&(u.callback=i),i=cr(t,u,l),i!==null&&(di(i,t,l,o),Ra(i,t,l))}};function Wf(t,i,o,l,u,p,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,E):i.prototype&&i.prototype.isPureReactComponent?!mo(o,l)||!mo(u,p):!0}function Xf(t,i,o){var l=!1,u=or,p=i.contextType;return typeof p=="object"&&p!==null?p=Zn(p):(u=Dn(i)?Nr:gn.current,l=i.contextTypes,p=(l=l!=null)?gs(t,u):or),i=new i(o,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Fa,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=p),i}function Yf(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Fa.enqueueReplaceState(i,i.state,null)}function qc(t,i,o,l){var u=t.stateNode;u.props=o,u.state=t.memoizedState,u.refs={},Uc(t);var p=i.contextType;typeof p=="object"&&p!==null?u.context=Zn(p):(p=Dn(i)?Nr:gn.current,u.context=gs(t,p)),u.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Yc(t,i,p,o),u.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&Fa.enqueueReplaceState(u,u.state,null),ba(t,o,u,l),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function Ts(t,i){try{var o="",l=i;do o+=fe(l),l=l.return;while(l);var u=o}catch(p){u=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:u,digest:null}}function $c(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Kc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var rv=typeof WeakMap=="function"?WeakMap:Map;function qf(t,i,o){o=Fi(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Ga||(Ga=!0,du=l),Kc(t,i)},o}function $f(t,i,o){o=Fi(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var u=i.value;o.payload=function(){return l(u)},o.callback=function(){Kc(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){Kc(t,i),typeof l!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),o}function Kf(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new rv;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(o)||(u.add(o),t=vv.bind(null,t,i,o),i.then(t,t))}function Zf(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Qf(t,i,o,l,u){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Fi(-1,1),i.tag=2,cr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var sv=b.ReactCurrentOwner,Nn=!1;function wn(t,i,o,l){i.child=t===null?vf(i,null,o,l):ys(i,t.child,o,l)}function Jf(t,i,o,l,u){o=o.render;var p=i.ref;return Ms(i,u),l=Hc(t,i,o,l,p,u),o=Vc(),t!==null&&!Nn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,Oi(t,i,u)):(Bt&&o&&Tc(i),i.flags|=1,wn(t,i,l,u),i.child)}function ep(t,i,o,l,u){if(t===null){var p=o.type;return typeof p=="function"&&!vu(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,tp(t,i,p,l,u)):(t=$a(o.type,null,l,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&u)===0){var E=p.memoizedProps;if(o=o.compare,o=o!==null?o:mo,o(E,l)&&t.ref===i.ref)return Oi(t,i,u)}return i.flags|=1,t=mr(p,l),t.ref=i.ref,t.return=i,i.child=t}function tp(t,i,o,l,u){if(t!==null){var p=t.memoizedProps;if(mo(p,l)&&t.ref===i.ref)if(Nn=!1,i.pendingProps=l=p,(t.lanes&u)!==0)(t.flags&131072)!==0&&(Nn=!0);else return i.lanes=t.lanes,Oi(t,i,u)}return Zc(t,i,o,l,u)}function np(t,i,o){var l=i.pendingProps,u=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ot(As,jn),jn|=o;else{if((o&1073741824)===0)return t=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Ot(As,jn),jn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:o,Ot(As,jn),jn|=l}else p!==null?(l=p.baseLanes|o,i.memoizedState=null):l=o,Ot(As,jn),jn|=l;return wn(t,i,u,o),i.child}function ip(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Zc(t,i,o,l,u){var p=Dn(o)?Nr:gn.current;return p=gs(i,p),Ms(i,u),o=Hc(t,i,o,l,p,u),l=Vc(),t!==null&&!Nn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,Oi(t,i,u)):(Bt&&l&&Tc(i),i.flags|=1,wn(t,i,o,u),i.child)}function rp(t,i,o,l,u){if(Dn(o)){var p=!0;ya(i)}else p=!1;if(Ms(i,u),i.stateNode===null)ka(t,i),Xf(i,o,l),qc(i,o,l,u),l=!0;else if(t===null){var E=i.stateNode,U=i.memoizedProps;E.props=U;var H=E.context,ie=o.contextType;typeof ie=="object"&&ie!==null?ie=Zn(ie):(ie=Dn(o)?Nr:gn.current,ie=gs(i,ie));var Se=o.getDerivedStateFromProps,Te=typeof Se=="function"||typeof E.getSnapshotBeforeUpdate=="function";Te||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==l||H!==ie)&&Yf(i,E,l,ie),lr=!1;var ye=i.memoizedState;E.state=ye,ba(i,l,E,u),H=i.memoizedState,U!==l||ye!==H||Ln.current||lr?(typeof Se=="function"&&(Yc(i,o,Se,l),H=i.memoizedState),(U=lr||Wf(i,o,U,l,ye,H,ie))?(Te||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=H),E.props=l,E.state=H,E.context=ie,l=U):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{E=i.stateNode,yf(t,i),U=i.memoizedProps,ie=i.type===i.elementType?U:li(i.type,U),E.props=ie,Te=i.pendingProps,ye=E.context,H=o.contextType,typeof H=="object"&&H!==null?H=Zn(H):(H=Dn(o)?Nr:gn.current,H=gs(i,H));var Oe=o.getDerivedStateFromProps;(Se=typeof Oe=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==Te||ye!==H)&&Yf(i,E,l,H),lr=!1,ye=i.memoizedState,E.state=ye,ba(i,l,E,u);var Ve=i.memoizedState;U!==Te||ye!==Ve||Ln.current||lr?(typeof Oe=="function"&&(Yc(i,o,Oe,l),Ve=i.memoizedState),(ie=lr||Wf(i,o,ie,l,ye,Ve,H)||!1)?(Se||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(l,Ve,H),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(l,Ve,H)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||U===t.memoizedProps&&ye===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&ye===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Ve),E.props=l,E.state=Ve,E.context=H,l=ie):(typeof E.componentDidUpdate!="function"||U===t.memoizedProps&&ye===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&ye===t.memoizedState||(i.flags|=1024),l=!1)}return Qc(t,i,o,l,p,u)}function Qc(t,i,o,l,u,p){ip(t,i);var E=(i.flags&128)!==0;if(!l&&!E)return u&&cf(i,o,!1),Oi(t,i,p);l=i.stateNode,sv.current=i;var U=E&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&E?(i.child=ys(i,t.child,null,p),i.child=ys(i,null,U,p)):wn(t,i,U,p),i.memoizedState=l.state,u&&cf(i,o,!0),i.child}function sp(t){var i=t.stateNode;i.pendingContext?af(t,i.pendingContext,i.pendingContext!==i.context):i.context&&af(t,i.context,!1),Ic(t,i.containerInfo)}function op(t,i,o,l,u){return xs(),Rc(u),i.flags|=256,wn(t,i,o,l),i.child}var Jc={dehydrated:null,treeContext:null,retryLane:0};function eu(t){return{baseLanes:t,cachePool:null,transitions:null}}function ap(t,i,o){var l=i.pendingProps,u=Vt.current,p=!1,E=(i.flags&128)!==0,U;if((U=E)||(U=t!==null&&t.memoizedState===null?!1:(u&2)!==0),U?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),Ot(Vt,u&1),t===null)return Cc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=l.children,t=l.fallback,p?(l=i.mode,p=i.child,E={mode:"hidden",children:E},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=E):p=Ka(E,l,0,null),t=Gr(t,l,o,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=eu(o),i.memoizedState=Jc,t):tu(i,E));if(u=t.memoizedState,u!==null&&(U=u.dehydrated,U!==null))return ov(t,i,E,l,U,u,o);if(p){p=l.fallback,E=i.mode,u=t.child,U=u.sibling;var H={mode:"hidden",children:l.children};return(E&1)===0&&i.child!==u?(l=i.child,l.childLanes=0,l.pendingProps=H,i.deletions=null):(l=mr(u,H),l.subtreeFlags=u.subtreeFlags&14680064),U!==null?p=mr(U,p):(p=Gr(p,E,o,null),p.flags|=2),p.return=i,l.return=i,l.sibling=p,i.child=l,l=p,p=i.child,E=t.child.memoizedState,E=E===null?eu(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},p.memoizedState=E,p.childLanes=t.childLanes&~o,i.memoizedState=Jc,l}return p=t.child,t=p.sibling,l=mr(p,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function tu(t,i){return i=Ka({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Oa(t,i,o,l){return l!==null&&Rc(l),ys(i,t.child,null,o),t=tu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function ov(t,i,o,l,u,p,E){if(o)return i.flags&256?(i.flags&=-257,l=$c(Error(n(422))),Oa(t,i,E,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=l.fallback,u=i.mode,l=Ka({mode:"visible",children:l.children},u,0,null),p=Gr(p,u,E,null),p.flags|=2,l.return=i,p.return=i,l.sibling=p,i.child=l,(i.mode&1)!==0&&ys(i,t.child,null,E),i.child.memoizedState=eu(E),i.memoizedState=Jc,p);if((i.mode&1)===0)return Oa(t,i,E,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var U=l.dgst;return l=U,p=Error(n(419)),l=$c(p,l,void 0),Oa(t,i,E,l)}if(U=(E&t.childLanes)!==0,Nn||U){if(l=an,l!==null){switch(E&-E){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(l.suspendedLanes|E))!==0?0:u,u!==0&&u!==p.retryLane&&(p.retryLane=u,Ii(t,u),di(l,t,u,-1))}return _u(),l=$c(Error(n(421))),Oa(t,i,E,l)}return u.data==="$?"?(i.flags|=128,i.child=t.child,i=xv.bind(null,t),u._reactRetry=i,null):(t=p.treeContext,Gn=rr(u.nextSibling),Vn=i,Bt=!0,ai=null,t!==null&&($n[Kn++]=Ni,$n[Kn++]=Ui,$n[Kn++]=Ur,Ni=t.id,Ui=t.overflow,Ur=i),i=tu(i,l.children),i.flags|=4096,i)}function lp(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Dc(t.return,i,o)}function nu(t,i,o,l,u){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:u}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=o,p.tailMode=u)}function cp(t,i,o){var l=i.pendingProps,u=l.revealOrder,p=l.tail;if(wn(t,i,l.children,o),l=Vt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&lp(t,o,i);else if(t.tag===19)lp(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Ot(Vt,l),(i.mode&1)===0)i.memoizedState=null;else switch(u){case"forwards":for(o=i.child,u=null;o!==null;)t=o.alternate,t!==null&&Pa(t)===null&&(u=o),o=o.sibling;o=u,o===null?(u=i.child,i.child=null):(u=o.sibling,o.sibling=null),nu(i,!1,u,o,p);break;case"backwards":for(o=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&Pa(t)===null){i.child=u;break}t=u.sibling,u.sibling=o,o=u,u=t}nu(i,!0,o,null,p);break;case"together":nu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ka(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Oi(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),zr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=mr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=mr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function av(t,i,o){switch(i.tag){case 3:sp(i),xs();break;case 5:Ef(i);break;case 1:Dn(i.type)&&ya(i);break;case 4:Ic(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,u=i.memoizedProps.value;Ot(Aa,l._currentValue),l._currentValue=u;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Ot(Vt,Vt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?ap(t,i,o):(Ot(Vt,Vt.current&1),t=Oi(t,i,o),t!==null?t.sibling:null);Ot(Vt,Vt.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return cp(t,i,o);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ot(Vt,Vt.current),l)break;return null;case 22:case 23:return i.lanes=0,np(t,i,o)}return Oi(t,i,o)}var up,iu,dp,hp;up=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},iu=function(){},dp=function(t,i,o,l){var u=t.memoizedProps;if(u!==l){t=i.stateNode,Or(Si.current);var p=null;switch(o){case"input":u=W(t,u),l=W(t,l),p=[];break;case"select":u=ue({},u,{value:void 0}),l=ue({},l,{value:void 0}),p=[];break;case"textarea":u=T(t,u),l=T(t,l),p=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=_a)}ht(o,l);var E;o=null;for(ie in u)if(!l.hasOwnProperty(ie)&&u.hasOwnProperty(ie)&&u[ie]!=null)if(ie==="style"){var U=u[ie];for(E in U)U.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else ie!=="dangerouslySetInnerHTML"&&ie!=="children"&&ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&ie!=="autoFocus"&&(a.hasOwnProperty(ie)?p||(p=[]):(p=p||[]).push(ie,null));for(ie in l){var H=l[ie];if(U=u!=null?u[ie]:void 0,l.hasOwnProperty(ie)&&H!==U&&(H!=null||U!=null))if(ie==="style")if(U){for(E in U)!U.hasOwnProperty(E)||H&&H.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in H)H.hasOwnProperty(E)&&U[E]!==H[E]&&(o||(o={}),o[E]=H[E])}else o||(p||(p=[]),p.push(ie,o)),o=H;else ie==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,U=U?U.__html:void 0,H!=null&&U!==H&&(p=p||[]).push(ie,H)):ie==="children"?typeof H!="string"&&typeof H!="number"||(p=p||[]).push(ie,""+H):ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&(a.hasOwnProperty(ie)?(H!=null&&ie==="onScroll"&&kt("scroll",t),p||U===H||(p=[])):(p=p||[]).push(ie,H))}o&&(p=p||[]).push("style",o);var ie=p;(i.updateQueue=ie)&&(i.flags|=4)}},hp=function(t,i,o,l){o!==l&&(i.flags|=4)};function Po(t,i){if(!Bt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function vn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var u=t.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function lv(t,i,o){var l=i.pendingProps;switch(wc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vn(i),null;case 1:return Dn(i.type)&&xa(),vn(i),null;case 3:return l=i.stateNode,Es(),zt(Ln),zt(gn),kc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Ta(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ai!==null&&(pu(ai),ai=null))),iu(t,i),vn(i),null;case 5:Fc(i);var u=Or(wo.current);if(o=i.type,t!==null&&i.stateNode!=null)dp(t,i,o,l,u),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return vn(i),null}if(t=Or(Si.current),Ta(i)){l=i.stateNode,o=i.type;var p=i.memoizedProps;switch(l[yi]=i,l[yo]=p,t=(i.mode&1)!==0,o){case"dialog":kt("cancel",l),kt("close",l);break;case"iframe":case"object":case"embed":kt("load",l);break;case"video":case"audio":for(u=0;u<_o.length;u++)kt(_o[u],l);break;case"source":kt("error",l);break;case"img":case"image":case"link":kt("error",l),kt("load",l);break;case"details":kt("toggle",l);break;case"input":dn(l,p),kt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},kt("invalid",l);break;case"textarea":ee(l,p),kt("invalid",l)}ht(o,p),u=null;for(var E in p)if(p.hasOwnProperty(E)){var U=p[E];E==="children"?typeof U=="string"?l.textContent!==U&&(p.suppressHydrationWarning!==!0&&ga(l.textContent,U,t),u=["children",U]):typeof U=="number"&&l.textContent!==""+U&&(p.suppressHydrationWarning!==!0&&ga(l.textContent,U,t),u=["children",""+U]):a.hasOwnProperty(E)&&U!=null&&E==="onScroll"&&kt("scroll",l)}switch(o){case"input":Pt(l),Ze(l,p,!0);break;case"textarea":Pt(l),xe(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=_a)}l=u,i.updateQueue=l,l!==null&&(i.flags|=4)}else{E=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=pe(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=E.createElement(o,{is:l.is}):(t=E.createElement(o),o==="select"&&(E=t,l.multiple?E.multiple=!0:l.size&&(E.size=l.size))):t=E.createElementNS(t,o),t[yi]=i,t[yo]=l,up(t,i,!1,!1),i.stateNode=t;e:{switch(E=nt(o,l),o){case"dialog":kt("cancel",t),kt("close",t),u=l;break;case"iframe":case"object":case"embed":kt("load",t),u=l;break;case"video":case"audio":for(u=0;u<_o.length;u++)kt(_o[u],t);u=l;break;case"source":kt("error",t),u=l;break;case"img":case"image":case"link":kt("error",t),kt("load",t),u=l;break;case"details":kt("toggle",t),u=l;break;case"input":dn(t,l),u=W(t,l),kt("invalid",t);break;case"option":u=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},u=ue({},l,{value:void 0}),kt("invalid",t);break;case"textarea":ee(t,l),u=T(t,l),kt("invalid",t);break;default:u=l}ht(o,u),U=u;for(p in U)if(U.hasOwnProperty(p)){var H=U[p];p==="style"?$e(t,H):p==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&Pe(t,H)):p==="children"?typeof H=="string"?(o!=="textarea"||H!=="")&&ct(t,H):typeof H=="number"&&ct(t,""+H):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?H!=null&&p==="onScroll"&&kt("scroll",t):H!=null&&N(t,p,H,E))}switch(o){case"input":Pt(t),Ze(t,l,!1);break;case"textarea":Pt(t),xe(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Le(l.value));break;case"select":t.multiple=!!l.multiple,p=l.value,p!=null?D(t,!!l.multiple,p,!1):l.defaultValue!=null&&D(t,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=_a)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return vn(i),null;case 6:if(t&&i.stateNode!=null)hp(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Or(wo.current),Or(Si.current),Ta(i)){if(l=i.stateNode,o=i.memoizedProps,l[yi]=i,(p=l.nodeValue!==o)&&(t=Vn,t!==null))switch(t.tag){case 3:ga(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ga(l.nodeValue,o,(t.mode&1)!==0)}p&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[yi]=i,i.stateNode=l}return vn(i),null;case 13:if(zt(Vt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Bt&&Gn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)mf(),xs(),i.flags|=98560,p=!1;else if(p=Ta(i),l!==null&&l.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[yi]=i}else xs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;vn(i),p=!1}else ai!==null&&(pu(ai),ai=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Vt.current&1)!==0?Jt===0&&(Jt=3):_u())),i.updateQueue!==null&&(i.flags|=4),vn(i),null);case 4:return Es(),iu(t,i),t===null&&vo(i.stateNode.containerInfo),vn(i),null;case 10:return Lc(i.type._context),vn(i),null;case 17:return Dn(i.type)&&xa(),vn(i),null;case 19:if(zt(Vt),p=i.memoizedState,p===null)return vn(i),null;if(l=(i.flags&128)!==0,E=p.rendering,E===null)if(l)Po(p,!1);else{if(Jt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=Pa(t),E!==null){for(i.flags|=128,Po(p,!1),l=E.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)p=o,t=l,p.flags&=14680066,E=p.alternate,E===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=E.childLanes,p.lanes=E.lanes,p.child=E.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=E.memoizedProps,p.memoizedState=E.memoizedState,p.updateQueue=E.updateQueue,p.type=E.type,t=E.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Ot(Vt,Vt.current&1|2),i.child}t=t.sibling}p.tail!==null&&Ce()>Cs&&(i.flags|=128,l=!0,Po(p,!1),i.lanes=4194304)}else{if(!l)if(t=Pa(E),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Po(p,!0),p.tail===null&&p.tailMode==="hidden"&&!E.alternate&&!Bt)return vn(i),null}else 2*Ce()-p.renderingStartTime>Cs&&o!==1073741824&&(i.flags|=128,l=!0,Po(p,!1),i.lanes=4194304);p.isBackwards?(E.sibling=i.child,i.child=E):(o=p.last,o!==null?o.sibling=E:i.child=E,p.last=E)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Ce(),i.sibling=null,o=Vt.current,Ot(Vt,l?o&1|2:o&1),i):(vn(i),null);case 22:case 23:return gu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(jn&1073741824)!==0&&(vn(i),i.subtreeFlags&6&&(i.flags|=8192)):vn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function cv(t,i){switch(wc(i),i.tag){case 1:return Dn(i.type)&&xa(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Es(),zt(Ln),zt(gn),kc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Fc(i),null;case 13:if(zt(Vt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));xs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return zt(Vt),null;case 4:return Es(),null;case 10:return Lc(i.type._context),null;case 22:case 23:return gu(),null;case 24:return null;default:return null}}var za=!1,xn=!1,uv=typeof WeakSet=="function"?WeakSet:Set,He=null;function ws(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Wt(t,i,l)}else o.current=null}function ru(t,i,o){try{o()}catch(l){Wt(t,i,l)}}var fp=!1;function dv(t,i){if(gc=sa,t=jh(),lc(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var u=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var E=0,U=-1,H=-1,ie=0,Se=0,Te=t,ye=null;t:for(;;){for(var Oe;Te!==o||u!==0&&Te.nodeType!==3||(U=E+u),Te!==p||l!==0&&Te.nodeType!==3||(H=E+l),Te.nodeType===3&&(E+=Te.nodeValue.length),(Oe=Te.firstChild)!==null;)ye=Te,Te=Oe;for(;;){if(Te===t)break t;if(ye===o&&++ie===u&&(U=E),ye===p&&++Se===l&&(H=E),(Oe=Te.nextSibling)!==null)break;Te=ye,ye=Te.parentNode}Te=Oe}o=U===-1||H===-1?null:{start:U,end:H}}else o=null}o=o||{start:0,end:0}}else o=null;for(_c={focusedElem:t,selectionRange:o},sa=!1,He=i;He!==null;)if(i=He,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,He=t;else for(;He!==null;){i=He;try{var Ve=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ve!==null){var je=Ve.memoizedProps,Yt=Ve.memoizedState,$=i.stateNode,G=$.getSnapshotBeforeUpdate(i.elementType===i.type?je:li(i.type,je),Yt);$.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var te=i.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Re){Wt(i,i.return,Re)}if(t=i.sibling,t!==null){t.return=i.return,He=t;break}He=i.return}return Ve=fp,fp=!1,Ve}function Lo(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&t)===t){var p=u.destroy;u.destroy=void 0,p!==void 0&&ru(i,o,p)}u=u.next}while(u!==l)}}function Ba(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function su(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function pp(t){var i=t.alternate;i!==null&&(t.alternate=null,pp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[yi],delete i[yo],delete i[Sc],delete i[Y_],delete i[q_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function mp(t){return t.tag===5||t.tag===3||t.tag===4}function gp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||mp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ou(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=_a));else if(l!==4&&(t=t.child,t!==null))for(ou(t,i,o),t=t.sibling;t!==null;)ou(t,i,o),t=t.sibling}function au(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(au(t,i,o),t=t.sibling;t!==null;)au(t,i,o),t=t.sibling}var hn=null,ci=!1;function ur(t,i,o){for(o=o.child;o!==null;)_p(t,i,o),o=o.sibling}function _p(t,i,o){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(bt,o)}catch{}switch(o.tag){case 5:xn||ws(o,i);case 6:var l=hn,u=ci;hn=null,ur(t,i,o),hn=l,ci=u,hn!==null&&(ci?(t=hn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):hn.removeChild(o.stateNode));break;case 18:hn!==null&&(ci?(t=hn,o=o.stateNode,t.nodeType===8?yc(t.parentNode,o):t.nodeType===1&&yc(t,o),lo(t)):yc(hn,o.stateNode));break;case 4:l=hn,u=ci,hn=o.stateNode.containerInfo,ci=!0,ur(t,i,o),hn=l,ci=u;break;case 0:case 11:case 14:case 15:if(!xn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var p=u,E=p.destroy;p=p.tag,E!==void 0&&((p&2)!==0||(p&4)!==0)&&ru(o,i,E),u=u.next}while(u!==l)}ur(t,i,o);break;case 1:if(!xn&&(ws(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(U){Wt(o,i,U)}ur(t,i,o);break;case 21:ur(t,i,o);break;case 22:o.mode&1?(xn=(l=xn)||o.memoizedState!==null,ur(t,i,o),xn=l):ur(t,i,o);break;default:ur(t,i,o)}}function vp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new uv),i.forEach(function(l){var u=yv.bind(null,t,l);o.has(l)||(o.add(l),l.then(u,u))})}}function ui(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var u=o[l];try{var p=t,E=i,U=E;e:for(;U!==null;){switch(U.tag){case 5:hn=U.stateNode,ci=!1;break e;case 3:hn=U.stateNode.containerInfo,ci=!0;break e;case 4:hn=U.stateNode.containerInfo,ci=!0;break e}U=U.return}if(hn===null)throw Error(n(160));_p(p,E,u),hn=null,ci=!1;var H=u.alternate;H!==null&&(H.return=null),u.return=null}catch(ie){Wt(u,i,ie)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)xp(i,t),i=i.sibling}function xp(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ui(i,t),Ei(t),l&4){try{Lo(3,t,t.return),Ba(3,t)}catch(je){Wt(t,t.return,je)}try{Lo(5,t,t.return)}catch(je){Wt(t,t.return,je)}}break;case 1:ui(i,t),Ei(t),l&512&&o!==null&&ws(o,o.return);break;case 5:if(ui(i,t),Ei(t),l&512&&o!==null&&ws(o,o.return),t.flags&32){var u=t.stateNode;try{ct(u,"")}catch(je){Wt(t,t.return,je)}}if(l&4&&(u=t.stateNode,u!=null)){var p=t.memoizedProps,E=o!==null?o.memoizedProps:p,U=t.type,H=t.updateQueue;if(t.updateQueue=null,H!==null)try{U==="input"&&p.type==="radio"&&p.name!=null&&lt(u,p),nt(U,E);var ie=nt(U,p);for(E=0;E<H.length;E+=2){var Se=H[E],Te=H[E+1];Se==="style"?$e(u,Te):Se==="dangerouslySetInnerHTML"?Pe(u,Te):Se==="children"?ct(u,Te):N(u,Se,Te,ie)}switch(U){case"input":mt(u,p);break;case"textarea":_e(u,p);break;case"select":var ye=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!p.multiple;var Oe=p.value;Oe!=null?D(u,!!p.multiple,Oe,!1):ye!==!!p.multiple&&(p.defaultValue!=null?D(u,!!p.multiple,p.defaultValue,!0):D(u,!!p.multiple,p.multiple?[]:"",!1))}u[yo]=p}catch(je){Wt(t,t.return,je)}}break;case 6:if(ui(i,t),Ei(t),l&4){if(t.stateNode===null)throw Error(n(162));u=t.stateNode,p=t.memoizedProps;try{u.nodeValue=p}catch(je){Wt(t,t.return,je)}}break;case 3:if(ui(i,t),Ei(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{lo(i.containerInfo)}catch(je){Wt(t,t.return,je)}break;case 4:ui(i,t),Ei(t);break;case 13:ui(i,t),Ei(t),u=t.child,u.flags&8192&&(p=u.memoizedState!==null,u.stateNode.isHidden=p,!p||u.alternate!==null&&u.alternate.memoizedState!==null||(uu=Ce())),l&4&&vp(t);break;case 22:if(Se=o!==null&&o.memoizedState!==null,t.mode&1?(xn=(ie=xn)||Se,ui(i,t),xn=ie):ui(i,t),Ei(t),l&8192){if(ie=t.memoizedState!==null,(t.stateNode.isHidden=ie)&&!Se&&(t.mode&1)!==0)for(He=t,Se=t.child;Se!==null;){for(Te=He=Se;He!==null;){switch(ye=He,Oe=ye.child,ye.tag){case 0:case 11:case 14:case 15:Lo(4,ye,ye.return);break;case 1:ws(ye,ye.return);var Ve=ye.stateNode;if(typeof Ve.componentWillUnmount=="function"){l=ye,o=ye.return;try{i=l,Ve.props=i.memoizedProps,Ve.state=i.memoizedState,Ve.componentWillUnmount()}catch(je){Wt(l,o,je)}}break;case 5:ws(ye,ye.return);break;case 22:if(ye.memoizedState!==null){Mp(Te);continue}}Oe!==null?(Oe.return=ye,He=Oe):Mp(Te)}Se=Se.sibling}e:for(Se=null,Te=t;;){if(Te.tag===5){if(Se===null){Se=Te;try{u=Te.stateNode,ie?(p=u.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(U=Te.stateNode,H=Te.memoizedProps.style,E=H!=null&&H.hasOwnProperty("display")?H.display:null,U.style.display=de("display",E))}catch(je){Wt(t,t.return,je)}}}else if(Te.tag===6){if(Se===null)try{Te.stateNode.nodeValue=ie?"":Te.memoizedProps}catch(je){Wt(t,t.return,je)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===t)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===t)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===t)break e;Se===Te&&(Se=null),Te=Te.return}Se===Te&&(Se=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:ui(i,t),Ei(t),l&4&&vp(t);break;case 21:break;default:ui(i,t),Ei(t)}}function Ei(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(mp(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(ct(u,""),l.flags&=-33);var p=gp(t);au(t,p,u);break;case 3:case 4:var E=l.stateNode.containerInfo,U=gp(t);ou(t,U,E);break;default:throw Error(n(161))}}catch(H){Wt(t,t.return,H)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function hv(t,i,o){He=t,yp(t)}function yp(t,i,o){for(var l=(t.mode&1)!==0;He!==null;){var u=He,p=u.child;if(u.tag===22&&l){var E=u.memoizedState!==null||za;if(!E){var U=u.alternate,H=U!==null&&U.memoizedState!==null||xn;U=za;var ie=xn;if(za=E,(xn=H)&&!ie)for(He=u;He!==null;)E=He,H=E.child,E.tag===22&&E.memoizedState!==null?Ep(u):H!==null?(H.return=E,He=H):Ep(u);for(;p!==null;)He=p,yp(p),p=p.sibling;He=u,za=U,xn=ie}Sp(t)}else(u.subtreeFlags&8772)!==0&&p!==null?(p.return=u,He=p):Sp(t)}}function Sp(t){for(;He!==null;){var i=He;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:xn||Ba(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!xn)if(o===null)l.componentDidMount();else{var u=i.elementType===i.type?o.memoizedProps:li(i.type,o.memoizedProps);l.componentDidUpdate(u,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Mf(i,p,l);break;case 3:var E=i.updateQueue;if(E!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Mf(i,E,o)}break;case 5:var U=i.stateNode;if(o===null&&i.flags&4){o=U;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&o.focus();break;case"img":H.src&&(o.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ie=i.alternate;if(ie!==null){var Se=ie.memoizedState;if(Se!==null){var Te=Se.dehydrated;Te!==null&&lo(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}xn||i.flags&512&&su(i)}catch(ye){Wt(i,i.return,ye)}}if(i===t){He=null;break}if(o=i.sibling,o!==null){o.return=i.return,He=o;break}He=i.return}}function Mp(t){for(;He!==null;){var i=He;if(i===t){He=null;break}var o=i.sibling;if(o!==null){o.return=i.return,He=o;break}He=i.return}}function Ep(t){for(;He!==null;){var i=He;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ba(4,i)}catch(H){Wt(i,o,H)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var u=i.return;try{l.componentDidMount()}catch(H){Wt(i,u,H)}}var p=i.return;try{su(i)}catch(H){Wt(i,p,H)}break;case 5:var E=i.return;try{su(i)}catch(H){Wt(i,E,H)}}}catch(H){Wt(i,i.return,H)}if(i===t){He=null;break}var U=i.sibling;if(U!==null){U.return=i.return,He=U;break}He=i.return}}var fv=Math.ceil,Ha=b.ReactCurrentDispatcher,lu=b.ReactCurrentOwner,Jn=b.ReactCurrentBatchConfig,Mt=0,an=null,$t=null,fn=0,jn=0,As=sr(0),Jt=0,Do=null,zr=0,Va=0,cu=0,No=null,Un=null,uu=0,Cs=1/0,ki=null,Ga=!1,du=null,dr=null,ja=!1,hr=null,Wa=0,Uo=0,hu=null,Xa=-1,Ya=0;function An(){return(Mt&6)!==0?Ce():Xa!==-1?Xa:Xa=Ce()}function fr(t){return(t.mode&1)===0?1:(Mt&2)!==0&&fn!==0?fn&-fn:K_.transition!==null?(Ya===0&&(Ya=Tn()),Ya):(t=Lt,t!==0||(t=window.event,t=t===void 0?16:Th(t.type)),t)}function di(t,i,o,l){if(50<Uo)throw Uo=0,hu=null,Error(n(185));Pn(t,o,l),((Mt&2)===0||t!==an)&&(t===an&&((Mt&2)===0&&(Va|=o),Jt===4&&pr(t,fn)),In(t,l),o===1&&Mt===0&&(i.mode&1)===0&&(Cs=Ce()+500,Sa&&ar()))}function In(t,i){var o=t.callbackNode;Yn(t,i);var l=xi(t,t===an?fn:0);if(l===0)o!==null&&se(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&se(o),i===1)t.tag===0?$_(wp.bind(null,t)):uf(wp.bind(null,t)),W_(function(){(Mt&6)===0&&ar()}),o=null;else{switch(gh(l)){case 1:o=Ge;break;case 4:o=it;break;case 16:o=st;break;case 536870912:o=yt;break;default:o=st}o=Np(o,Tp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Tp(t,i){if(Xa=-1,Ya=0,(Mt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Rs()&&t.callbackNode!==o)return null;var l=xi(t,t===an?fn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=qa(t,l);else{i=l;var u=Mt;Mt|=2;var p=Cp();(an!==t||fn!==i)&&(ki=null,Cs=Ce()+500,Hr(t,i));do try{gv();break}catch(U){Ap(t,U)}while(!0);Pc(),Ha.current=p,Mt=u,$t!==null?i=0:(an=null,fn=0,i=Jt)}if(i!==0){if(i===2&&(u=Pi(t),u!==0&&(l=u,i=fu(t,u))),i===1)throw o=Do,Hr(t,0),pr(t,l),In(t,Ce()),o;if(i===6)pr(t,l);else{if(u=t.current.alternate,(l&30)===0&&!pv(u)&&(i=qa(t,l),i===2&&(p=Pi(t),p!==0&&(l=p,i=fu(t,p))),i===1))throw o=Do,Hr(t,0),pr(t,l),In(t,Ce()),o;switch(t.finishedWork=u,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Vr(t,Un,ki);break;case 3:if(pr(t,l),(l&130023424)===l&&(i=uu+500-Ce(),10<i)){if(xi(t,0)!==0)break;if(u=t.suspendedLanes,(u&l)!==l){An(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=xc(Vr.bind(null,t,Un,ki),i);break}Vr(t,Un,ki);break;case 4:if(pr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,u=-1;0<l;){var E=31-ut(l);p=1<<E,E=i[E],E>u&&(u=E),l&=~p}if(l=u,l=Ce()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*fv(l/1960))-l,10<l){t.timeoutHandle=xc(Vr.bind(null,t,Un,ki),l);break}Vr(t,Un,ki);break;case 5:Vr(t,Un,ki);break;default:throw Error(n(329))}}}return In(t,Ce()),t.callbackNode===o?Tp.bind(null,t):null}function fu(t,i){var o=No;return t.current.memoizedState.isDehydrated&&(Hr(t,i).flags|=256),t=qa(t,i),t!==2&&(i=Un,Un=o,i!==null&&pu(i)),t}function pu(t){Un===null?Un=t:Un.push.apply(Un,t)}function pv(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var u=o[l],p=u.getSnapshot;u=u.value;try{if(!oi(p(),u))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function pr(t,i){for(i&=~cu,i&=~Va,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-ut(i),l=1<<o;t[o]=-1,i&=~l}}function wp(t){if((Mt&6)!==0)throw Error(n(327));Rs();var i=xi(t,0);if((i&1)===0)return In(t,Ce()),null;var o=qa(t,i);if(t.tag!==0&&o===2){var l=Pi(t);l!==0&&(i=l,o=fu(t,l))}if(o===1)throw o=Do,Hr(t,0),pr(t,i),In(t,Ce()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Vr(t,Un,ki),In(t,Ce()),null}function mu(t,i){var o=Mt;Mt|=1;try{return t(i)}finally{Mt=o,Mt===0&&(Cs=Ce()+500,Sa&&ar())}}function Br(t){hr!==null&&hr.tag===0&&(Mt&6)===0&&Rs();var i=Mt;Mt|=1;var o=Jn.transition,l=Lt;try{if(Jn.transition=null,Lt=1,t)return t()}finally{Lt=l,Jn.transition=o,Mt=i,(Mt&6)===0&&ar()}}function gu(){jn=As.current,zt(As)}function Hr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,j_(o)),$t!==null)for(o=$t.return;o!==null;){var l=o;switch(wc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&xa();break;case 3:Es(),zt(Ln),zt(gn),kc();break;case 5:Fc(l);break;case 4:Es();break;case 13:zt(Vt);break;case 19:zt(Vt);break;case 10:Lc(l.type._context);break;case 22:case 23:gu()}o=o.return}if(an=t,$t=t=mr(t.current,null),fn=jn=i,Jt=0,Do=null,cu=Va=zr=0,Un=No=null,Fr!==null){for(i=0;i<Fr.length;i++)if(o=Fr[i],l=o.interleaved,l!==null){o.interleaved=null;var u=l.next,p=o.pending;if(p!==null){var E=p.next;p.next=u,l.next=E}o.pending=l}Fr=null}return t}function Ap(t,i){do{var o=$t;try{if(Pc(),La.current=Ia,Da){for(var l=Gt.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}Da=!1}if(kr=0,on=Qt=Gt=null,Ao=!1,Co=0,lu.current=null,o===null||o.return===null){Jt=1,Do=i,$t=null;break}e:{var p=t,E=o.return,U=o,H=i;if(i=fn,U.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var ie=H,Se=U,Te=Se.tag;if((Se.mode&1)===0&&(Te===0||Te===11||Te===15)){var ye=Se.alternate;ye?(Se.updateQueue=ye.updateQueue,Se.memoizedState=ye.memoizedState,Se.lanes=ye.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var Oe=Zf(E);if(Oe!==null){Oe.flags&=-257,Qf(Oe,E,U,p,i),Oe.mode&1&&Kf(p,ie,i),i=Oe,H=ie;var Ve=i.updateQueue;if(Ve===null){var je=new Set;je.add(H),i.updateQueue=je}else Ve.add(H);break e}else{if((i&1)===0){Kf(p,ie,i),_u();break e}H=Error(n(426))}}else if(Bt&&U.mode&1){var Yt=Zf(E);if(Yt!==null){(Yt.flags&65536)===0&&(Yt.flags|=256),Qf(Yt,E,U,p,i),Rc(Ts(H,U));break e}}p=H=Ts(H,U),Jt!==4&&(Jt=2),No===null?No=[p]:No.push(p),p=E;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var $=qf(p,H,i);Sf(p,$);break e;case 1:U=H;var G=p.type,te=p.stateNode;if((p.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(dr===null||!dr.has(te)))){p.flags|=65536,i&=-i,p.lanes|=i;var Re=$f(p,U,i);Sf(p,Re);break e}}p=p.return}while(p!==null)}bp(o)}catch(Ye){i=Ye,$t===o&&o!==null&&($t=o=o.return);continue}break}while(!0)}function Cp(){var t=Ha.current;return Ha.current=Ia,t===null?Ia:t}function _u(){(Jt===0||Jt===3||Jt===2)&&(Jt=4),an===null||(zr&268435455)===0&&(Va&268435455)===0||pr(an,fn)}function qa(t,i){var o=Mt;Mt|=2;var l=Cp();(an!==t||fn!==i)&&(ki=null,Hr(t,i));do try{mv();break}catch(u){Ap(t,u)}while(!0);if(Pc(),Mt=o,Ha.current=l,$t!==null)throw Error(n(261));return an=null,fn=0,Jt}function mv(){for(;$t!==null;)Rp($t)}function gv(){for(;$t!==null&&!Y();)Rp($t)}function Rp(t){var i=Dp(t.alternate,t,jn);t.memoizedProps=t.pendingProps,i===null?bp(t):$t=i,lu.current=null}function bp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=lv(o,i,jn),o!==null){$t=o;return}}else{if(o=cv(o,i),o!==null){o.flags&=32767,$t=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Jt=6,$t=null;return}}if(i=i.sibling,i!==null){$t=i;return}$t=i=t}while(i!==null);Jt===0&&(Jt=5)}function Vr(t,i,o){var l=Lt,u=Jn.transition;try{Jn.transition=null,Lt=1,_v(t,i,o,l)}finally{Jn.transition=u,Lt=l}return null}function _v(t,i,o,l){do Rs();while(hr!==null);if((Mt&6)!==0)throw Error(n(327));o=t.finishedWork;var u=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(na(t,p),t===an&&($t=an=null,fn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||ja||(ja=!0,Np(st,function(){return Rs(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=Jn.transition,Jn.transition=null;var E=Lt;Lt=1;var U=Mt;Mt|=4,lu.current=null,dv(t,o),xp(o,t),O_(_c),sa=!!gc,_c=gc=null,t.current=o,hv(o),be(),Mt=U,Lt=E,Jn.transition=p}else t.current=o;if(ja&&(ja=!1,hr=t,Wa=u),p=t.pendingLanes,p===0&&(dr=null),pn(o.stateNode),In(t,Ce()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)u=i[o],l(u.value,{componentStack:u.stack,digest:u.digest});if(Ga)throw Ga=!1,t=du,du=null,t;return(Wa&1)!==0&&t.tag!==0&&Rs(),p=t.pendingLanes,(p&1)!==0?t===hu?Uo++:(Uo=0,hu=t):Uo=0,ar(),null}function Rs(){if(hr!==null){var t=gh(Wa),i=Jn.transition,o=Lt;try{if(Jn.transition=null,Lt=16>t?16:t,hr===null)var l=!1;else{if(t=hr,hr=null,Wa=0,(Mt&6)!==0)throw Error(n(331));var u=Mt;for(Mt|=4,He=t.current;He!==null;){var p=He,E=p.child;if((He.flags&16)!==0){var U=p.deletions;if(U!==null){for(var H=0;H<U.length;H++){var ie=U[H];for(He=ie;He!==null;){var Se=He;switch(Se.tag){case 0:case 11:case 15:Lo(8,Se,p)}var Te=Se.child;if(Te!==null)Te.return=Se,He=Te;else for(;He!==null;){Se=He;var ye=Se.sibling,Oe=Se.return;if(pp(Se),Se===ie){He=null;break}if(ye!==null){ye.return=Oe,He=ye;break}He=Oe}}}var Ve=p.alternate;if(Ve!==null){var je=Ve.child;if(je!==null){Ve.child=null;do{var Yt=je.sibling;je.sibling=null,je=Yt}while(je!==null)}}He=p}}if((p.subtreeFlags&2064)!==0&&E!==null)E.return=p,He=E;else e:for(;He!==null;){if(p=He,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Lo(9,p,p.return)}var $=p.sibling;if($!==null){$.return=p.return,He=$;break e}He=p.return}}var G=t.current;for(He=G;He!==null;){E=He;var te=E.child;if((E.subtreeFlags&2064)!==0&&te!==null)te.return=E,He=te;else e:for(E=G;He!==null;){if(U=He,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Ba(9,U)}}catch(Ye){Wt(U,U.return,Ye)}if(U===E){He=null;break e}var Re=U.sibling;if(Re!==null){Re.return=U.return,He=Re;break e}He=U.return}}if(Mt=u,ar(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(bt,t)}catch{}l=!0}return l}finally{Lt=o,Jn.transition=i}}return!1}function Pp(t,i,o){i=Ts(o,i),i=qf(t,i,1),t=cr(t,i,1),i=An(),t!==null&&(Pn(t,1,i),In(t,i))}function Wt(t,i,o){if(t.tag===3)Pp(t,t,o);else for(;i!==null;){if(i.tag===3){Pp(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(dr===null||!dr.has(l))){t=Ts(o,t),t=$f(i,t,1),i=cr(i,t,1),t=An(),i!==null&&(Pn(i,1,t),In(i,t));break}}i=i.return}}function vv(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=An(),t.pingedLanes|=t.suspendedLanes&o,an===t&&(fn&o)===o&&(Jt===4||Jt===3&&(fn&130023424)===fn&&500>Ce()-uu?Hr(t,0):cu|=o),In(t,i)}function Lp(t,i){i===0&&((t.mode&1)===0?i=1:(i=si,si<<=1,(si&130023424)===0&&(si=4194304)));var o=An();t=Ii(t,i),t!==null&&(Pn(t,i,o),In(t,o))}function xv(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Lp(t,o)}function yv(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(o=u.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Lp(t,o)}var Dp;Dp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Ln.current)Nn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Nn=!1,av(t,i,o);Nn=(t.flags&131072)!==0}else Nn=!1,Bt&&(i.flags&1048576)!==0&&df(i,Ea,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;ka(t,i),t=i.pendingProps;var u=gs(i,gn.current);Ms(i,o),u=Hc(null,i,l,t,u,o);var p=Vc();return i.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Dn(l)?(p=!0,ya(i)):p=!1,i.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Uc(i),u.updater=Fa,i.stateNode=u,u._reactInternals=i,qc(i,l,t,o),i=Qc(null,i,l,!0,p,o)):(i.tag=0,Bt&&p&&Tc(i),wn(null,i,u,o),i=i.child),i;case 16:l=i.elementType;e:{switch(ka(t,i),t=i.pendingProps,u=l._init,l=u(l._payload),i.type=l,u=i.tag=Mv(l),t=li(l,t),u){case 0:i=Zc(null,i,l,t,o);break e;case 1:i=rp(null,i,l,t,o);break e;case 11:i=Jf(null,i,l,t,o);break e;case 14:i=ep(null,i,l,li(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:li(l,u),Zc(t,i,l,u,o);case 1:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:li(l,u),rp(t,i,l,u,o);case 3:e:{if(sp(i),t===null)throw Error(n(387));l=i.pendingProps,p=i.memoizedState,u=p.element,yf(t,i),ba(i,l,null,o);var E=i.memoizedState;if(l=E.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){u=Ts(Error(n(423)),i),i=op(t,i,l,o,u);break e}else if(l!==u){u=Ts(Error(n(424)),i),i=op(t,i,l,o,u);break e}else for(Gn=rr(i.stateNode.containerInfo.firstChild),Vn=i,Bt=!0,ai=null,o=vf(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(xs(),l===u){i=Oi(t,i,o);break e}wn(t,i,l,o)}i=i.child}return i;case 5:return Ef(i),t===null&&Cc(i),l=i.type,u=i.pendingProps,p=t!==null?t.memoizedProps:null,E=u.children,vc(l,u)?E=null:p!==null&&vc(l,p)&&(i.flags|=32),ip(t,i),wn(t,i,E,o),i.child;case 6:return t===null&&Cc(i),null;case 13:return ap(t,i,o);case 4:return Ic(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ys(i,null,l,o):wn(t,i,l,o),i.child;case 11:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:li(l,u),Jf(t,i,l,u,o);case 7:return wn(t,i,i.pendingProps,o),i.child;case 8:return wn(t,i,i.pendingProps.children,o),i.child;case 12:return wn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,u=i.pendingProps,p=i.memoizedProps,E=u.value,Ot(Aa,l._currentValue),l._currentValue=E,p!==null)if(oi(p.value,E)){if(p.children===u.children&&!Ln.current){i=Oi(t,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var U=p.dependencies;if(U!==null){E=p.child;for(var H=U.firstContext;H!==null;){if(H.context===l){if(p.tag===1){H=Fi(-1,o&-o),H.tag=2;var ie=p.updateQueue;if(ie!==null){ie=ie.shared;var Se=ie.pending;Se===null?H.next=H:(H.next=Se.next,Se.next=H),ie.pending=H}}p.lanes|=o,H=p.alternate,H!==null&&(H.lanes|=o),Dc(p.return,o,i),U.lanes|=o;break}H=H.next}}else if(p.tag===10)E=p.type===i.type?null:p.child;else if(p.tag===18){if(E=p.return,E===null)throw Error(n(341));E.lanes|=o,U=E.alternate,U!==null&&(U.lanes|=o),Dc(E,o,i),E=p.sibling}else E=p.child;if(E!==null)E.return=p;else for(E=p;E!==null;){if(E===i){E=null;break}if(p=E.sibling,p!==null){p.return=E.return,E=p;break}E=E.return}p=E}wn(t,i,u.children,o),i=i.child}return i;case 9:return u=i.type,l=i.pendingProps.children,Ms(i,o),u=Zn(u),l=l(u),i.flags|=1,wn(t,i,l,o),i.child;case 14:return l=i.type,u=li(l,i.pendingProps),u=li(l.type,u),ep(t,i,l,u,o);case 15:return tp(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:li(l,u),ka(t,i),i.tag=1,Dn(l)?(t=!0,ya(i)):t=!1,Ms(i,o),Xf(i,l,u),qc(i,l,u,o),Qc(null,i,l,!0,t,o);case 19:return cp(t,i,o);case 22:return np(t,i,o)}throw Error(n(156,i.tag))};function Np(t,i){return re(t,i)}function Sv(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(t,i,o,l){return new Sv(t,i,o,l)}function vu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Mv(t){if(typeof t=="function")return vu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ne)return 11;if(t===ge)return 14}return 2}function mr(t,i){var o=t.alternate;return o===null?(o=ei(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function $a(t,i,o,l,u,p){var E=2;if(l=t,typeof t=="function")vu(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case I:return Gr(o.children,u,p,i);case z:E=8,u|=8;break;case P:return t=ei(12,o,i,u|2),t.elementType=P,t.lanes=p,t;case Z:return t=ei(13,o,i,u),t.elementType=Z,t.lanes=p,t;case ae:return t=ei(19,o,i,u),t.elementType=ae,t.lanes=p,t;case he:return Ka(o,u,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:E=10;break e;case V:E=9;break e;case ne:E=11;break e;case ge:E=14;break e;case oe:E=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=ei(E,o,i,u),i.elementType=t,i.type=l,i.lanes=p,i}function Gr(t,i,o,l){return t=ei(7,t,l,i),t.lanes=o,t}function Ka(t,i,o,l){return t=ei(22,t,l,i),t.elementType=he,t.lanes=o,t.stateNode={isHidden:!1},t}function xu(t,i,o){return t=ei(6,t,null,i),t.lanes=o,t}function yu(t,i,o){return i=ei(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Ev(t,i,o,l,u){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qn(0),this.expirationTimes=qn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qn(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function Su(t,i,o,l,u,p,E,U,H){return t=new Ev(t,i,o,U,H),i===1?(i=1,p===!0&&(i|=8)):i=0,p=ei(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uc(p),t}function Tv(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function Up(t){if(!t)return or;t=t._reactInternals;e:{if(vi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Dn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Dn(o))return lf(t,o,i)}return i}function Ip(t,i,o,l,u,p,E,U,H){return t=Su(o,l,!0,t,u,p,E,U,H),t.context=Up(null),o=t.current,l=An(),u=fr(o),p=Fi(l,u),p.callback=i??null,cr(o,p,u),t.current.lanes=u,Pn(t,u,l),In(t,l),t}function Za(t,i,o,l){var u=i.current,p=An(),E=fr(u);return o=Up(o),i.context===null?i.context=o:i.pendingContext=o,i=Fi(p,E),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=cr(u,i,E),t!==null&&(di(t,u,E,p),Ra(t,u,E)),E}function Qa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Fp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function Mu(t,i){Fp(t,i),(t=t.alternate)&&Fp(t,i)}function wv(){return null}var Op=typeof reportError=="function"?reportError:function(t){console.error(t)};function Eu(t){this._internalRoot=t}Ja.prototype.render=Eu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Za(t,i,null,null)},Ja.prototype.unmount=Eu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Br(function(){Za(null,t,null,null)}),i[Li]=null}};function Ja(t){this._internalRoot=t}Ja.prototype.unstable_scheduleHydration=function(t){if(t){var i=xh();t={blockedOn:null,target:t,priority:i};for(var o=0;o<tr.length&&i!==0&&i<tr[o].priority;o++);tr.splice(o,0,t),o===0&&Mh(t)}};function Tu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function el(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function kp(){}function Av(t,i,o,l,u){if(u){if(typeof l=="function"){var p=l;l=function(){var ie=Qa(E);p.call(ie)}}var E=Ip(i,l,t,0,null,!1,!1,"",kp);return t._reactRootContainer=E,t[Li]=E.current,vo(t.nodeType===8?t.parentNode:t),Br(),E}for(;u=t.lastChild;)t.removeChild(u);if(typeof l=="function"){var U=l;l=function(){var ie=Qa(H);U.call(ie)}}var H=Su(t,0,!1,null,null,!1,!1,"",kp);return t._reactRootContainer=H,t[Li]=H.current,vo(t.nodeType===8?t.parentNode:t),Br(function(){Za(i,H,o,l)}),H}function tl(t,i,o,l,u){var p=o._reactRootContainer;if(p){var E=p;if(typeof u=="function"){var U=u;u=function(){var H=Qa(E);U.call(H)}}Za(i,E,t,u)}else E=Av(o,i,t,u,l);return Qa(E)}_h=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Zt(i.pendingLanes);o!==0&&(ql(i,o|1),In(i,Ce()),(Mt&6)===0&&(Cs=Ce()+500,ar()))}break;case 13:Br(function(){var l=Ii(t,1);if(l!==null){var u=An();di(l,t,1,u)}}),Mu(t,1)}},$l=function(t){if(t.tag===13){var i=Ii(t,134217728);if(i!==null){var o=An();di(i,t,134217728,o)}Mu(t,134217728)}},vh=function(t){if(t.tag===13){var i=fr(t),o=Ii(t,i);if(o!==null){var l=An();di(o,t,i,l)}Mu(t,i)}},xh=function(){return Lt},yh=function(t,i){var o=Lt;try{return Lt=t,i()}finally{Lt=o}},De=function(t,i,o){switch(i){case"input":if(mt(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var u=va(l);if(!u)throw Error(n(90));pt(l),mt(l,u)}}}break;case"textarea":_e(t,o);break;case"select":i=o.value,i!=null&&D(t,!!o.multiple,i,!1)}},ot=mu,Rt=Br;var Cv={usingClientEntryPoint:!1,Events:[So,ps,va,k,ve,mu]},Io={findFiberByHostInstance:Dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rv={bundleType:Io.bundleType,version:Io.version,rendererPackageName:Io.rendererPackageName,rendererConfig:Io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=R(t),t===null?null:t.stateNode},findFiberByHostInstance:Io.findFiberByHostInstance||wv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{bt=nl.inject(Rv),xt=nl}catch{}}return Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cv,Fn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tu(i))throw Error(n(200));return Tv(t,i,null,o)},Fn.createRoot=function(t,i){if(!Tu(t))throw Error(n(299));var o=!1,l="",u=Op;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(u=i.onRecoverableError)),i=Su(t,1,!1,null,null,o,!1,l,u),t[Li]=i.current,vo(t.nodeType===8?t.parentNode:t),new Eu(i)},Fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=R(i),t=t===null?null:t.stateNode,t},Fn.flushSync=function(t){return Br(t)},Fn.hydrate=function(t,i,o){if(!el(i))throw Error(n(200));return tl(null,t,i,!0,o)},Fn.hydrateRoot=function(t,i,o){if(!Tu(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,u=!1,p="",E=Op;if(o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),i=Ip(i,null,t,1,o??null,u,!1,p,E),t[Li]=i.current,vo(t),l)for(t=0;t<l.length;t++)o=l[t],u=o._getVersion,u=u(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,u]:i.mutableSourceEagerHydrationData.push(o,u);return new Ja(i)},Fn.render=function(t,i,o){if(!el(i))throw Error(n(200));return tl(null,t,i,!1,o)},Fn.unmountComponentAtNode=function(t){if(!el(t))throw Error(n(40));return t._reactRootContainer?(Br(function(){tl(null,null,t,!1,function(){t._reactRootContainer=null,t[Li]=null})}),!0):!1},Fn.unstable_batchedUpdates=mu,Fn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!el(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return tl(t,i,o,!1,l)},Fn.version="18.3.1-next-f1338f8080-20240426",Fn}var Xp;function Ov(){if(Xp)return Cu.exports;Xp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Cu.exports=Fv(),Cu.exports}var Yp;function kv(){if(Yp)return il;Yp=1;var s=Ov();return il.createRoot=s.createRoot,il.hydrateRoot=s.hydrateRoot,il}var zv=kv();const Bv=lg(zv);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),cg=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Vv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=Qe.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:a="",children:c,iconNode:d,...h},f)=>Qe.createElement("svg",{ref:f,...Vv,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:cg("lucide",a),...h},[...d.map(([m,v])=>Qe.createElement(m,v)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=(s,e)=>{const n=Qe.forwardRef(({className:r,...a},c)=>Qe.createElement(Gv,{ref:c,iconNode:e,className:cg(`lucide-${Hv(s)}`,r),...a}));return n.displayName=`${s}`,n};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=Tt("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=Tt("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=Tt("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=Tt("Cable",[["path",{d:"M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1",key:"10bnsj"}],["path",{d:"M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9",key:"1eqmu1"}],["path",{d:"M21 21v-2h-4",key:"14zm7j"}],["path",{d:"M3 5h4V3",key:"z442eg"}],["path",{d:"M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3",key:"ebdjd7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=Tt("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=Tt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=Tt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=Tt("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=Tt("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=Tt("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=Tt("FileDown",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=Tt("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=Tt("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=Tt("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=Tt("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=Tt("OctagonX",[["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",key:"2d38gg"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=Tt("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=Tt("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=Tt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=Tt("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=Tt("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=Tt("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=Tt("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=Tt("ScanEye",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0",key:"11ak4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=Tt("ScrollText",[["path",{d:"M15 12h-5",key:"r7krc0"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=Tt("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=Tt("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=Tt("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=Tt("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=Tt("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=Tt("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=Tt("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=Tt("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);async function Nt(s,e,n){const r=await fetch("/api"+s,{method:n||(e===void 0?"GET":"POST"),headers:e instanceof FormData?void 0:{"Content-Type":"application/json"},body:e===void 0?void 0:e instanceof FormData?e:JSON.stringify(e)});if(!r.ok){let a;try{a=await r.json()}catch{throw new Error(r.statusText)}throw new Error(typeof a.detail=="string"?a.detail:JSON.stringify(a.detail))}return r.json()}function fd(s,e){const n=URL.createObjectURL(new Blob([JSON.stringify(e,null,2)],{type:"application/json"})),r=document.createElement("a");r.href=n,r.download=s,r.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ih="170",Ws={ROTATE:0,DOLLY:1,PAN:2},Gs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},l0=0,Jp=1,c0=2,mg=1,gg=2,ji=3,Rr=0,zn=1,Wi=2,wr=0,Xs=1,em=2,tm=3,nm=4,u0=5,Zr=100,d0=101,h0=102,f0=103,p0=104,m0=200,g0=201,_0=202,v0=203,pd=204,md=205,x0=206,y0=207,S0=208,M0=209,E0=210,T0=211,w0=212,A0=213,C0=214,gd=0,_d=1,vd=2,$s=3,xd=4,yd=5,Sd=6,Md=7,_g=0,R0=1,b0=2,Ar=0,P0=1,L0=2,D0=3,N0=4,U0=5,I0=6,F0=7,vg=300,Ks=301,Zs=302,Ed=303,Td=304,Vl=306,wd=1e3,Jr=1001,Ad=1002,_i=1003,O0=1004,rl=1005,wi=1006,Du=1007,es=1008,$i=1009,xg=1010,yg=1011,Yo=1012,rh=1013,ts=1014,Xi=1015,$o=1016,sh=1017,oh=1018,Qs=1020,Sg=35902,Mg=1021,Eg=1022,gi=1023,Tg=1024,wg=1025,Ys=1026,Js=1027,Ag=1028,ah=1029,Cg=1030,lh=1031,ch=1033,Pl=33776,Ll=33777,Dl=33778,Nl=33779,Cd=35840,Rd=35841,bd=35842,Pd=35843,Ld=36196,Dd=37492,Nd=37496,Ud=37808,Id=37809,Fd=37810,Od=37811,kd=37812,zd=37813,Bd=37814,Hd=37815,Vd=37816,Gd=37817,jd=37818,Wd=37819,Xd=37820,Yd=37821,Ul=36492,qd=36494,$d=36495,Rg=36283,Kd=36284,Zd=36285,Qd=36286,k0=3200,z0=3201,bg=0,B0=1,Tr="",ni="srgb",to="srgb-linear",Gl="linear",Ut="srgb",bs=7680,im=519,H0=512,V0=513,G0=514,Pg=515,j0=516,W0=517,X0=518,Y0=519,rm=35044,sm="300 es",Yi=2e3,Ol=2001;class rs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const c=a.indexOf(n);c!==-1&&a.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let c=0,d=a.length;c<d;c++)a[c].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Il=Math.PI/180,Jd=180/Math.PI;function Ko(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[n&63|128]+yn[n>>8&255]+"-"+yn[n>>16&255]+yn[n>>24&255]+yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]).toLowerCase()}function Rn(s,e,n){return Math.max(e,Math.min(n,s))}function q0(s,e){return(s%e+e)%e}function Nu(s,e,n){return(1-n)*s+n*e}function Oo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function On(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const $0={DEG2RAD:Il};class dt{constructor(e=0,n=0){dt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Rn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*a+e.x,this.y=c*a+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ft{constructor(e,n,r,a,c,d,h,f,m){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,d,h,f,m)}set(e,n,r,a,c,d,h,f,m){const v=this.elements;return v[0]=e,v[1]=a,v[2]=h,v[3]=n,v[4]=c,v[5]=f,v[6]=r,v[7]=d,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,d=r[0],h=r[3],f=r[6],m=r[1],v=r[4],y=r[7],x=r[2],M=r[5],w=r[8],A=a[0],S=a[3],_=a[6],F=a[1],N=a[4],b=a[7],q=a[2],L=a[5],I=a[8];return c[0]=d*A+h*F+f*q,c[3]=d*S+h*N+f*L,c[6]=d*_+h*b+f*I,c[1]=m*A+v*F+y*q,c[4]=m*S+v*N+y*L,c[7]=m*_+v*b+y*I,c[2]=x*A+M*F+w*q,c[5]=x*S+M*N+w*L,c[8]=x*_+M*b+w*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],d=e[4],h=e[5],f=e[6],m=e[7],v=e[8];return n*d*v-n*h*m-r*c*v+r*h*f+a*c*m-a*d*f}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],d=e[4],h=e[5],f=e[6],m=e[7],v=e[8],y=v*d-h*m,x=h*f-v*c,M=m*c-d*f,w=n*y+r*x+a*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=y*A,e[1]=(a*m-v*r)*A,e[2]=(h*r-a*d)*A,e[3]=x*A,e[4]=(v*n-a*f)*A,e[5]=(a*c-h*n)*A,e[6]=M*A,e[7]=(r*f-m*n)*A,e[8]=(d*n-r*c)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,c,d,h){const f=Math.cos(c),m=Math.sin(c);return this.set(r*f,r*m,-r*(f*d+m*h)+d+e,-a*m,a*f,-a*(-m*d+f*h)+h+n,0,0,1),this}scale(e,n){return this.premultiply(Uu.makeScale(e,n)),this}rotate(e){return this.premultiply(Uu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Uu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Uu=new ft;function Lg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function kl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function K0(){const s=kl("canvas");return s.style.display="block",s}const om={};function jo(s){s in om||(om[s]=!0,console.warn(s))}function Z0(s,e,n){return new Promise(function(r,a){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}function Q0(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function J0(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Et={enabled:!0,workingColorSpace:to,spaces:{},convert:function(s,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===Ut&&(s.r=qi(s.r),s.g=qi(s.g),s.b=qi(s.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===Ut&&(s.r=qs(s.r),s.g=qs(s.g),s.b=qs(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Tr?Gl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,n){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function qi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function qs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const am=[.64,.33,.3,.6,.15,.06],lm=[.2126,.7152,.0722],cm=[.3127,.329],um=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dm=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Et.define({[to]:{primaries:am,whitePoint:cm,transfer:Gl,toXYZ:um,fromXYZ:dm,luminanceCoefficients:lm,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:am,whitePoint:cm,transfer:Ut,toXYZ:um,fromXYZ:dm,luminanceCoefficients:lm,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}});let Ps;class ex{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ps===void 0&&(Ps=kl("canvas")),Ps.width=e.width,Ps.height=e.height;const r=Ps.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ps}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=kl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),c=a.data;for(let d=0;d<c.length;d++)c[d]=qi(c[d]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(qi(n[r]/255)*255):n[r]=qi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tx=0;class Dg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tx++}),this.uuid=Ko(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let c;if(Array.isArray(a)){c=[];for(let d=0,h=a.length;d<h;d++)a[d].isDataTexture?c.push(Iu(a[d].image)):c.push(Iu(a[d]))}else c=Iu(a);r.url=c}return n||(e.images[this.uuid]=r),r}}function Iu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ex.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nx=0;class Bn extends rs{constructor(e=Bn.DEFAULT_IMAGE,n=Bn.DEFAULT_MAPPING,r=Jr,a=Jr,c=wi,d=es,h=gi,f=$i,m=Bn.DEFAULT_ANISOTROPY,v=Tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=Ko(),this.name="",this.source=new Dg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=c,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=f,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wd:e.x=e.x-Math.floor(e.x);break;case Jr:e.x=e.x<0?0:1;break;case Ad:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wd:e.y=e.y-Math.floor(e.y);break;case Jr:e.y=e.y<0?0:1;break;case Ad:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=vg;Bn.DEFAULT_ANISOTROPY=1;class Xt{constructor(e=0,n=0,r=0,a=1){Xt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=this.w,d=e.elements;return this.x=d[0]*n+d[4]*r+d[8]*a+d[12]*c,this.y=d[1]*n+d[5]*r+d[9]*a+d[13]*c,this.z=d[2]*n+d[6]*r+d[10]*a+d[14]*c,this.w=d[3]*n+d[7]*r+d[11]*a+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,c;const f=e.elements,m=f[0],v=f[4],y=f[8],x=f[1],M=f[5],w=f[9],A=f[2],S=f[6],_=f[10];if(Math.abs(v-x)<.01&&Math.abs(y-A)<.01&&Math.abs(w-S)<.01){if(Math.abs(v+x)<.1&&Math.abs(y+A)<.1&&Math.abs(w+S)<.1&&Math.abs(m+M+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const N=(m+1)/2,b=(M+1)/2,q=(_+1)/2,L=(v+x)/4,I=(y+A)/4,z=(w+S)/4;return N>b&&N>q?N<.01?(r=0,a=.707106781,c=.707106781):(r=Math.sqrt(N),a=L/r,c=I/r):b>q?b<.01?(r=.707106781,a=0,c=.707106781):(a=Math.sqrt(b),r=L/a,c=z/a):q<.01?(r=.707106781,a=.707106781,c=0):(c=Math.sqrt(q),r=I/c,a=z/c),this.set(r,a,c,n),this}let F=Math.sqrt((S-w)*(S-w)+(y-A)*(y-A)+(x-v)*(x-v));return Math.abs(F)<.001&&(F=1),this.x=(S-w)/F,this.y=(y-A)/F,this.z=(x-v)/F,this.w=Math.acos((m+M+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ix extends rs{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Xt(0,0,e,n),this.scissorTest=!1,this.viewport=new Xt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Bn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,c=this.textures.length;a<c;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Dg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ns extends ix{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Ng extends Bn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=_i,this.minFilter=_i,this.wrapR=Jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rx extends Bn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=_i,this.minFilter=_i,this.wrapR=Jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class is{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,c,d,h){let f=r[a+0],m=r[a+1],v=r[a+2],y=r[a+3];const x=c[d+0],M=c[d+1],w=c[d+2],A=c[d+3];if(h===0){e[n+0]=f,e[n+1]=m,e[n+2]=v,e[n+3]=y;return}if(h===1){e[n+0]=x,e[n+1]=M,e[n+2]=w,e[n+3]=A;return}if(y!==A||f!==x||m!==M||v!==w){let S=1-h;const _=f*x+m*M+v*w+y*A,F=_>=0?1:-1,N=1-_*_;if(N>Number.EPSILON){const q=Math.sqrt(N),L=Math.atan2(q,_*F);S=Math.sin(S*L)/q,h=Math.sin(h*L)/q}const b=h*F;if(f=f*S+x*b,m=m*S+M*b,v=v*S+w*b,y=y*S+A*b,S===1-h){const q=1/Math.sqrt(f*f+m*m+v*v+y*y);f*=q,m*=q,v*=q,y*=q}}e[n]=f,e[n+1]=m,e[n+2]=v,e[n+3]=y}static multiplyQuaternionsFlat(e,n,r,a,c,d){const h=r[a],f=r[a+1],m=r[a+2],v=r[a+3],y=c[d],x=c[d+1],M=c[d+2],w=c[d+3];return e[n]=h*w+v*y+f*M-m*x,e[n+1]=f*w+v*x+m*y-h*M,e[n+2]=m*w+v*M+h*x-f*y,e[n+3]=v*w-h*y-f*x-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,c=e._z,d=e._order,h=Math.cos,f=Math.sin,m=h(r/2),v=h(a/2),y=h(c/2),x=f(r/2),M=f(a/2),w=f(c/2);switch(d){case"XYZ":this._x=x*v*y+m*M*w,this._y=m*M*y-x*v*w,this._z=m*v*w+x*M*y,this._w=m*v*y-x*M*w;break;case"YXZ":this._x=x*v*y+m*M*w,this._y=m*M*y-x*v*w,this._z=m*v*w-x*M*y,this._w=m*v*y+x*M*w;break;case"ZXY":this._x=x*v*y-m*M*w,this._y=m*M*y+x*v*w,this._z=m*v*w+x*M*y,this._w=m*v*y-x*M*w;break;case"ZYX":this._x=x*v*y-m*M*w,this._y=m*M*y+x*v*w,this._z=m*v*w-x*M*y,this._w=m*v*y+x*M*w;break;case"YZX":this._x=x*v*y+m*M*w,this._y=m*M*y+x*v*w,this._z=m*v*w-x*M*y,this._w=m*v*y-x*M*w;break;case"XZY":this._x=x*v*y-m*M*w,this._y=m*M*y-x*v*w,this._z=m*v*w+x*M*y,this._w=m*v*y+x*M*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],c=n[8],d=n[1],h=n[5],f=n[9],m=n[2],v=n[6],y=n[10],x=r+h+y;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(v-f)*M,this._y=(c-m)*M,this._z=(d-a)*M}else if(r>h&&r>y){const M=2*Math.sqrt(1+r-h-y);this._w=(v-f)/M,this._x=.25*M,this._y=(a+d)/M,this._z=(c+m)/M}else if(h>y){const M=2*Math.sqrt(1+h-r-y);this._w=(c-m)/M,this._x=(a+d)/M,this._y=.25*M,this._z=(f+v)/M}else{const M=2*Math.sqrt(1+y-r-h);this._w=(d-a)/M,this._x=(c+m)/M,this._y=(f+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,c=e._z,d=e._w,h=n._x,f=n._y,m=n._z,v=n._w;return this._x=r*v+d*h+a*m-c*f,this._y=a*v+d*f+c*h-r*m,this._z=c*v+d*m+r*f-a*h,this._w=d*v-r*h-a*f-c*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,c=this._z,d=this._w;let h=d*e._w+r*e._x+a*e._y+c*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=r,this._y=a,this._z=c,this;const f=1-h*h;if(f<=Number.EPSILON){const M=1-n;return this._w=M*d+n*this._w,this._x=M*r+n*this._x,this._y=M*a+n*this._y,this._z=M*c+n*this._z,this.normalize(),this}const m=Math.sqrt(f),v=Math.atan2(m,h),y=Math.sin((1-n)*v)/m,x=Math.sin(n*v)/m;return this._w=d*y+this._w*x,this._x=r*y+this._x*x,this._y=a*y+this._y*x,this._z=c*y+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,n=0,r=0){K.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(hm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(hm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*a,this.y=c[1]*n+c[4]*r+c[7]*a,this.z=c[2]*n+c[5]*r+c[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=e.elements,d=1/(c[3]*n+c[7]*r+c[11]*a+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*a+c[12])*d,this.y=(c[1]*n+c[5]*r+c[9]*a+c[13])*d,this.z=(c[2]*n+c[6]*r+c[10]*a+c[14])*d,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,c=e.x,d=e.y,h=e.z,f=e.w,m=2*(d*a-h*r),v=2*(h*n-c*a),y=2*(c*r-d*n);return this.x=n+f*m+d*y-h*v,this.y=r+f*v+h*m-c*y,this.z=a+f*y+c*v-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a,this.y=c[1]*n+c[5]*r+c[9]*a,this.z=c[2]*n+c[6]*r+c[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,c=e.z,d=n.x,h=n.y,f=n.z;return this.x=a*f-c*h,this.y=c*d-r*f,this.z=r*h-a*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Fu.copy(this).projectOnVector(e),this.sub(Fu)}reflect(e){return this.sub(Fu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Rn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fu=new K,hm=new is;class Zo{constructor(e=new K(1/0,1/0,1/0),n=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(hi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(hi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=hi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,hi):hi.fromBufferAttribute(c,d),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),sl.copy(r.boundingBox)),sl.applyMatrix4(e.matrixWorld),this.union(sl)}const a=e.children;for(let c=0,d=a.length;c<d;c++)this.expandByObject(a[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ko),ol.subVectors(this.max,ko),Ls.subVectors(e.a,ko),Ds.subVectors(e.b,ko),Ns.subVectors(e.c,ko),_r.subVectors(Ds,Ls),vr.subVectors(Ns,Ds),jr.subVectors(Ls,Ns);let n=[0,-_r.z,_r.y,0,-vr.z,vr.y,0,-jr.z,jr.y,_r.z,0,-_r.x,vr.z,0,-vr.x,jr.z,0,-jr.x,-_r.y,_r.x,0,-vr.y,vr.x,0,-jr.y,jr.x,0];return!Ou(n,Ls,Ds,Ns,ol)||(n=[1,0,0,0,1,0,0,0,1],!Ou(n,Ls,Ds,Ns,ol))?!1:(al.crossVectors(_r,vr),n=[al.x,al.y,al.z],Ou(n,Ls,Ds,Ns,ol))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zi=[new K,new K,new K,new K,new K,new K,new K,new K],hi=new K,sl=new Zo,Ls=new K,Ds=new K,Ns=new K,_r=new K,vr=new K,jr=new K,ko=new K,ol=new K,al=new K,Wr=new K;function Ou(s,e,n,r,a){for(let c=0,d=s.length-3;c<=d;c+=3){Wr.fromArray(s,c);const h=a.x*Math.abs(Wr.x)+a.y*Math.abs(Wr.y)+a.z*Math.abs(Wr.z),f=e.dot(Wr),m=n.dot(Wr),v=r.dot(Wr);if(Math.max(-Math.max(f,m,v),Math.min(f,m,v))>h)return!1}return!0}const sx=new Zo,zo=new K,ku=new K;class jl{constructor(e=new K,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):sx.setFromPoints(e).getCenter(r);let a=0;for(let c=0,d=e.length;c<d;c++)a=Math.max(a,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zo.subVectors(e,this.center);const n=zo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(zo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ku.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zo.copy(e.center).add(ku)),this.expandByPoint(zo.copy(e.center).sub(ku))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bi=new K,zu=new K,ll=new K,xr=new K,Bu=new K,cl=new K,Hu=new K;class uh{constructor(e=new K,n=new K(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Bi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Bi.copy(this.origin).addScaledVector(this.direction,n),Bi.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){zu.copy(e).add(n).multiplyScalar(.5),ll.copy(n).sub(e).normalize(),xr.copy(this.origin).sub(zu);const c=e.distanceTo(n)*.5,d=-this.direction.dot(ll),h=xr.dot(this.direction),f=-xr.dot(ll),m=xr.lengthSq(),v=Math.abs(1-d*d);let y,x,M,w;if(v>0)if(y=d*f-h,x=d*h-f,w=c*v,y>=0)if(x>=-w)if(x<=w){const A=1/v;y*=A,x*=A,M=y*(y+d*x+2*h)+x*(d*y+x+2*f)+m}else x=c,y=Math.max(0,-(d*x+h)),M=-y*y+x*(x+2*f)+m;else x=-c,y=Math.max(0,-(d*x+h)),M=-y*y+x*(x+2*f)+m;else x<=-w?(y=Math.max(0,-(-d*c+h)),x=y>0?-c:Math.min(Math.max(-c,-f),c),M=-y*y+x*(x+2*f)+m):x<=w?(y=0,x=Math.min(Math.max(-c,-f),c),M=x*(x+2*f)+m):(y=Math.max(0,-(d*c+h)),x=y>0?c:Math.min(Math.max(-c,-f),c),M=-y*y+x*(x+2*f)+m);else x=d>0?-c:c,y=Math.max(0,-(d*x+h)),M=-y*y+x*(x+2*f)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),a&&a.copy(zu).addScaledVector(ll,x),M}intersectSphere(e,n){Bi.subVectors(e.center,this.origin);const r=Bi.dot(this.direction),a=Bi.dot(Bi)-r*r,c=e.radius*e.radius;if(a>c)return null;const d=Math.sqrt(c-a),h=r-d,f=r+d;return f<0?null:h<0?this.at(f,n):this.at(h,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,c,d,h,f;const m=1/this.direction.x,v=1/this.direction.y,y=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),v>=0?(c=(e.min.y-x.y)*v,d=(e.max.y-x.y)*v):(c=(e.max.y-x.y)*v,d=(e.min.y-x.y)*v),r>d||c>a||((c>r||isNaN(r))&&(r=c),(d<a||isNaN(a))&&(a=d),y>=0?(h=(e.min.z-x.z)*y,f=(e.max.z-x.z)*y):(h=(e.max.z-x.z)*y,f=(e.min.z-x.z)*y),r>f||h>a)||((h>r||r!==r)&&(r=h),(f<a||a!==a)&&(a=f),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Bi)!==null}intersectTriangle(e,n,r,a,c){Bu.subVectors(n,e),cl.subVectors(r,e),Hu.crossVectors(Bu,cl);let d=this.direction.dot(Hu),h;if(d>0){if(a)return null;h=1}else if(d<0)h=-1,d=-d;else return null;xr.subVectors(this.origin,e);const f=h*this.direction.dot(cl.crossVectors(xr,cl));if(f<0)return null;const m=h*this.direction.dot(Bu.cross(xr));if(m<0||f+m>d)return null;const v=-h*xr.dot(Hu);return v<0?null:this.at(v/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(e,n,r,a,c,d,h,f,m,v,y,x,M,w,A,S){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,d,h,f,m,v,y,x,M,w,A,S)}set(e,n,r,a,c,d,h,f,m,v,y,x,M,w,A,S){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=a,_[1]=c,_[5]=d,_[9]=h,_[13]=f,_[2]=m,_[6]=v,_[10]=y,_[14]=x,_[3]=M,_[7]=w,_[11]=A,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Us.setFromMatrixColumn(e,0).length(),c=1/Us.setFromMatrixColumn(e,1).length(),d=1/Us.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*d,n[9]=r[9]*d,n[10]=r[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,c=e.z,d=Math.cos(r),h=Math.sin(r),f=Math.cos(a),m=Math.sin(a),v=Math.cos(c),y=Math.sin(c);if(e.order==="XYZ"){const x=d*v,M=d*y,w=h*v,A=h*y;n[0]=f*v,n[4]=-f*y,n[8]=m,n[1]=M+w*m,n[5]=x-A*m,n[9]=-h*f,n[2]=A-x*m,n[6]=w+M*m,n[10]=d*f}else if(e.order==="YXZ"){const x=f*v,M=f*y,w=m*v,A=m*y;n[0]=x+A*h,n[4]=w*h-M,n[8]=d*m,n[1]=d*y,n[5]=d*v,n[9]=-h,n[2]=M*h-w,n[6]=A+x*h,n[10]=d*f}else if(e.order==="ZXY"){const x=f*v,M=f*y,w=m*v,A=m*y;n[0]=x-A*h,n[4]=-d*y,n[8]=w+M*h,n[1]=M+w*h,n[5]=d*v,n[9]=A-x*h,n[2]=-d*m,n[6]=h,n[10]=d*f}else if(e.order==="ZYX"){const x=d*v,M=d*y,w=h*v,A=h*y;n[0]=f*v,n[4]=w*m-M,n[8]=x*m+A,n[1]=f*y,n[5]=A*m+x,n[9]=M*m-w,n[2]=-m,n[6]=h*f,n[10]=d*f}else if(e.order==="YZX"){const x=d*f,M=d*m,w=h*f,A=h*m;n[0]=f*v,n[4]=A-x*y,n[8]=w*y+M,n[1]=y,n[5]=d*v,n[9]=-h*v,n[2]=-m*v,n[6]=M*y+w,n[10]=x-A*y}else if(e.order==="XZY"){const x=d*f,M=d*m,w=h*f,A=h*m;n[0]=f*v,n[4]=-y,n[8]=m*v,n[1]=x*y+A,n[5]=d*v,n[9]=M*y-w,n[2]=w*y-M,n[6]=h*v,n[10]=A*y+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ox,e,ax)}lookAt(e,n,r){const a=this.elements;return Wn.subVectors(e,n),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),yr.crossVectors(r,Wn),yr.lengthSq()===0&&(Math.abs(r.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),yr.crossVectors(r,Wn)),yr.normalize(),ul.crossVectors(Wn,yr),a[0]=yr.x,a[4]=ul.x,a[8]=Wn.x,a[1]=yr.y,a[5]=ul.y,a[9]=Wn.y,a[2]=yr.z,a[6]=ul.z,a[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,d=r[0],h=r[4],f=r[8],m=r[12],v=r[1],y=r[5],x=r[9],M=r[13],w=r[2],A=r[6],S=r[10],_=r[14],F=r[3],N=r[7],b=r[11],q=r[15],L=a[0],I=a[4],z=a[8],P=a[12],C=a[1],V=a[5],ne=a[9],Z=a[13],ae=a[2],ge=a[6],oe=a[10],he=a[14],B=a[3],le=a[7],ue=a[11],O=a[15];return c[0]=d*L+h*C+f*ae+m*B,c[4]=d*I+h*V+f*ge+m*le,c[8]=d*z+h*ne+f*oe+m*ue,c[12]=d*P+h*Z+f*he+m*O,c[1]=v*L+y*C+x*ae+M*B,c[5]=v*I+y*V+x*ge+M*le,c[9]=v*z+y*ne+x*oe+M*ue,c[13]=v*P+y*Z+x*he+M*O,c[2]=w*L+A*C+S*ae+_*B,c[6]=w*I+A*V+S*ge+_*le,c[10]=w*z+A*ne+S*oe+_*ue,c[14]=w*P+A*Z+S*he+_*O,c[3]=F*L+N*C+b*ae+q*B,c[7]=F*I+N*V+b*ge+q*le,c[11]=F*z+N*ne+b*oe+q*ue,c[15]=F*P+N*Z+b*he+q*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],c=e[12],d=e[1],h=e[5],f=e[9],m=e[13],v=e[2],y=e[6],x=e[10],M=e[14],w=e[3],A=e[7],S=e[11],_=e[15];return w*(+c*f*y-a*m*y-c*h*x+r*m*x+a*h*M-r*f*M)+A*(+n*f*M-n*m*x+c*d*x-a*d*M+a*m*v-c*f*v)+S*(+n*m*y-n*h*M-c*d*y+r*d*M+c*h*v-r*m*v)+_*(-a*h*v-n*f*y+n*h*x+a*d*y-r*d*x+r*f*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],d=e[4],h=e[5],f=e[6],m=e[7],v=e[8],y=e[9],x=e[10],M=e[11],w=e[12],A=e[13],S=e[14],_=e[15],F=y*S*m-A*x*m+A*f*M-h*S*M-y*f*_+h*x*_,N=w*x*m-v*S*m-w*f*M+d*S*M+v*f*_-d*x*_,b=v*A*m-w*y*m+w*h*M-d*A*M-v*h*_+d*y*_,q=w*y*f-v*A*f-w*h*x+d*A*x+v*h*S-d*y*S,L=n*F+r*N+a*b+c*q;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/L;return e[0]=F*I,e[1]=(A*x*c-y*S*c-A*a*M+r*S*M+y*a*_-r*x*_)*I,e[2]=(h*S*c-A*f*c+A*a*m-r*S*m-h*a*_+r*f*_)*I,e[3]=(y*f*c-h*x*c-y*a*m+r*x*m+h*a*M-r*f*M)*I,e[4]=N*I,e[5]=(v*S*c-w*x*c+w*a*M-n*S*M-v*a*_+n*x*_)*I,e[6]=(w*f*c-d*S*c-w*a*m+n*S*m+d*a*_-n*f*_)*I,e[7]=(d*x*c-v*f*c+v*a*m-n*x*m-d*a*M+n*f*M)*I,e[8]=b*I,e[9]=(w*y*c-v*A*c-w*r*M+n*A*M+v*r*_-n*y*_)*I,e[10]=(d*A*c-w*h*c+w*r*m-n*A*m-d*r*_+n*h*_)*I,e[11]=(v*h*c-d*y*c-v*r*m+n*y*m+d*r*M-n*h*M)*I,e[12]=q*I,e[13]=(v*A*a-w*y*a+w*r*x-n*A*x-v*r*S+n*y*S)*I,e[14]=(w*h*a-d*A*a-w*r*f+n*A*f+d*r*S-n*h*S)*I,e[15]=(d*y*a-v*h*a+v*r*f-n*y*f-d*r*x+n*h*x)*I,this}scale(e){const n=this.elements,r=e.x,a=e.y,c=e.z;return n[0]*=r,n[4]*=a,n[8]*=c,n[1]*=r,n[5]*=a,n[9]*=c,n[2]*=r,n[6]*=a,n[10]*=c,n[3]*=r,n[7]*=a,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),c=1-r,d=e.x,h=e.y,f=e.z,m=c*d,v=c*h;return this.set(m*d+r,m*h-a*f,m*f+a*h,0,m*h+a*f,v*h+r,v*f-a*d,0,m*f-a*h,v*f+a*d,c*f*f+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,c,d){return this.set(1,r,c,0,e,1,d,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,c=n._x,d=n._y,h=n._z,f=n._w,m=c+c,v=d+d,y=h+h,x=c*m,M=c*v,w=c*y,A=d*v,S=d*y,_=h*y,F=f*m,N=f*v,b=f*y,q=r.x,L=r.y,I=r.z;return a[0]=(1-(A+_))*q,a[1]=(M+b)*q,a[2]=(w-N)*q,a[3]=0,a[4]=(M-b)*L,a[5]=(1-(x+_))*L,a[6]=(S+F)*L,a[7]=0,a[8]=(w+N)*I,a[9]=(S-F)*I,a[10]=(1-(x+A))*I,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let c=Us.set(a[0],a[1],a[2]).length();const d=Us.set(a[4],a[5],a[6]).length(),h=Us.set(a[8],a[9],a[10]).length();this.determinant()<0&&(c=-c),e.x=a[12],e.y=a[13],e.z=a[14],fi.copy(this);const m=1/c,v=1/d,y=1/h;return fi.elements[0]*=m,fi.elements[1]*=m,fi.elements[2]*=m,fi.elements[4]*=v,fi.elements[5]*=v,fi.elements[6]*=v,fi.elements[8]*=y,fi.elements[9]*=y,fi.elements[10]*=y,n.setFromRotationMatrix(fi),r.x=c,r.y=d,r.z=h,this}makePerspective(e,n,r,a,c,d,h=Yi){const f=this.elements,m=2*c/(n-e),v=2*c/(r-a),y=(n+e)/(n-e),x=(r+a)/(r-a);let M,w;if(h===Yi)M=-(d+c)/(d-c),w=-2*d*c/(d-c);else if(h===Ol)M=-d/(d-c),w=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return f[0]=m,f[4]=0,f[8]=y,f[12]=0,f[1]=0,f[5]=v,f[9]=x,f[13]=0,f[2]=0,f[6]=0,f[10]=M,f[14]=w,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,n,r,a,c,d,h=Yi){const f=this.elements,m=1/(n-e),v=1/(r-a),y=1/(d-c),x=(n+e)*m,M=(r+a)*v;let w,A;if(h===Yi)w=(d+c)*y,A=-2*y;else if(h===Ol)w=c*y,A=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return f[0]=2*m,f[4]=0,f[8]=0,f[12]=-x,f[1]=0,f[5]=2*v,f[9]=0,f[13]=-M,f[2]=0,f[6]=0,f[10]=A,f[14]=-w,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Us=new K,fi=new jt,ox=new K(0,0,0),ax=new K(1,1,1),yr=new K,ul=new K,Wn=new K,fm=new jt,pm=new is;class Ci{constructor(e=0,n=0,r=0,a=Ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,c=a[0],d=a[4],h=a[8],f=a[1],m=a[5],v=a[9],y=a[2],x=a[6],M=a[10];switch(n){case"XYZ":this._y=Math.asin(Rn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Rn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(f,m)):(this._y=Math.atan2(-y,c),this._z=0);break;case"ZXY":this._x=Math.asin(Rn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(f,c));break;case"ZYX":this._y=Math.asin(-Rn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(f,c)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Rn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-y,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Rn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return fm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return pm.setFromEuler(this),this.setFromQuaternion(pm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ci.DEFAULT_ORDER="XYZ";class Ug{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lx=0;const mm=new K,Is=new is,Hi=new jt,dl=new K,Bo=new K,cx=new K,ux=new is,gm=new K(1,0,0),_m=new K(0,1,0),vm=new K(0,0,1),xm={type:"added"},dx={type:"removed"},Fs={type:"childadded",child:null},Vu={type:"childremoved",child:null};class un extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=Ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const e=new K,n=new Ci,r=new is,a=new K(1,1,1);function c(){r.setFromEuler(n,!1)}function d(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new jt},normalMatrix:{value:new ft}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ug,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Is.setFromAxisAngle(e,n),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,n){return Is.setFromAxisAngle(e,n),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(gm,e)}rotateY(e){return this.rotateOnAxis(_m,e)}rotateZ(e){return this.rotateOnAxis(vm,e)}translateOnAxis(e,n){return mm.copy(e).applyQuaternion(this.quaternion),this.position.add(mm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(gm,e)}translateY(e){return this.translateOnAxis(_m,e)}translateZ(e){return this.translateOnAxis(vm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?dl.copy(e):dl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(Bo,dl,this.up):Hi.lookAt(dl,Bo,this.up),this.quaternion.setFromRotationMatrix(Hi),a&&(Hi.extractRotation(a.matrixWorld),Is.setFromRotationMatrix(Hi),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xm),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(dx),Vu.child=e,this.dispatchEvent(Vu),Vu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xm),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const d=this.children[r].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let c=0,d=a.length;c<d;c++)a[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,e,cx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,ux,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let c=0,d=a.length;c<d;c++)a[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function c(h,f){return h[f.uuid]===void 0&&(h[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const f=h.shapes;if(Array.isArray(f))for(let m=0,v=f.length;m<v;m++){const y=f[m];c(e.shapes,y)}else c(e.shapes,f)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let f=0,m=this.material.length;f<m;f++)h.push(c(e.materials,this.material[f]));a.material=h}else a.material=c(e.materials,this.material);if(this.children.length>0){a.children=[];for(let h=0;h<this.children.length;h++)a.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let h=0;h<this.animations.length;h++){const f=this.animations[h];a.animations.push(c(e.animations,f))}}if(n){const h=d(e.geometries),f=d(e.materials),m=d(e.textures),v=d(e.images),y=d(e.shapes),x=d(e.skeletons),M=d(e.animations),w=d(e.nodes);h.length>0&&(r.geometries=h),f.length>0&&(r.materials=f),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),y.length>0&&(r.shapes=y),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),w.length>0&&(r.nodes=w)}return r.object=a,r;function d(h){const f=[];for(const m in h){const v=h[m];delete v.metadata,f.push(v)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}un.DEFAULT_UP=new K(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new K,Vi=new K,Gu=new K,Gi=new K,Os=new K,ks=new K,ym=new K,ju=new K,Wu=new K,Xu=new K,Yu=new Xt,qu=new Xt,$u=new Xt;class mi{constructor(e=new K,n=new K,r=new K){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),pi.subVectors(e,n),a.cross(pi);const c=a.lengthSq();return c>0?a.multiplyScalar(1/Math.sqrt(c)):a.set(0,0,0)}static getBarycoord(e,n,r,a,c){pi.subVectors(a,n),Vi.subVectors(r,n),Gu.subVectors(e,n);const d=pi.dot(pi),h=pi.dot(Vi),f=pi.dot(Gu),m=Vi.dot(Vi),v=Vi.dot(Gu),y=d*m-h*h;if(y===0)return c.set(0,0,0),null;const x=1/y,M=(m*f-h*v)*x,w=(d*v-h*f)*x;return c.set(1-M-w,w,M)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,n,r,a,c,d,h,f){return this.getBarycoord(e,n,r,a,Gi)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(c,Gi.x),f.addScaledVector(d,Gi.y),f.addScaledVector(h,Gi.z),f)}static getInterpolatedAttribute(e,n,r,a,c,d){return Yu.setScalar(0),qu.setScalar(0),$u.setScalar(0),Yu.fromBufferAttribute(e,n),qu.fromBufferAttribute(e,r),$u.fromBufferAttribute(e,a),d.setScalar(0),d.addScaledVector(Yu,c.x),d.addScaledVector(qu,c.y),d.addScaledVector($u,c.z),d}static isFrontFacing(e,n,r,a){return pi.subVectors(r,n),Vi.subVectors(e,n),pi.cross(Vi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),pi.cross(Vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return mi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,c){return mi.getInterpolation(e,this.a,this.b,this.c,n,r,a,c)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,c=this.c;let d,h;Os.subVectors(a,r),ks.subVectors(c,r),ju.subVectors(e,r);const f=Os.dot(ju),m=ks.dot(ju);if(f<=0&&m<=0)return n.copy(r);Wu.subVectors(e,a);const v=Os.dot(Wu),y=ks.dot(Wu);if(v>=0&&y<=v)return n.copy(a);const x=f*y-v*m;if(x<=0&&f>=0&&v<=0)return d=f/(f-v),n.copy(r).addScaledVector(Os,d);Xu.subVectors(e,c);const M=Os.dot(Xu),w=ks.dot(Xu);if(w>=0&&M<=w)return n.copy(c);const A=M*m-f*w;if(A<=0&&m>=0&&w<=0)return h=m/(m-w),n.copy(r).addScaledVector(ks,h);const S=v*w-M*y;if(S<=0&&y-v>=0&&M-w>=0)return ym.subVectors(c,a),h=(y-v)/(y-v+(M-w)),n.copy(a).addScaledVector(ym,h);const _=1/(S+A+x);return d=A*_,h=x*_,n.copy(r).addScaledVector(Os,d).addScaledVector(ks,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ig={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sr={h:0,s:0,l:0},hl={h:0,s:0,l:0};function Ku(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class vt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Et.workingColorSpace){return this.r=e,this.g=n,this.b=r,Et.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Et.workingColorSpace){if(e=q0(e,1),n=Rn(n,0,1),r=Rn(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,d=2*r-c;this.r=Ku(d,c,e+1/3),this.g=Ku(d,c,e),this.b=Ku(d,c,e-1/3)}return Et.toWorkingColorSpace(this,a),this}setStyle(e,n=ni){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=a[1],h=a[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=a[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ni){const r=Ig[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return Et.fromWorkingColorSpace(Sn.copy(this),e),Math.round(Rn(Sn.r*255,0,255))*65536+Math.round(Rn(Sn.g*255,0,255))*256+Math.round(Rn(Sn.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Et.workingColorSpace){Et.fromWorkingColorSpace(Sn.copy(this),n);const r=Sn.r,a=Sn.g,c=Sn.b,d=Math.max(r,a,c),h=Math.min(r,a,c);let f,m;const v=(h+d)/2;if(h===d)f=0,m=0;else{const y=d-h;switch(m=v<=.5?y/(d+h):y/(2-d-h),d){case r:f=(a-c)/y+(a<c?6:0);break;case a:f=(c-r)/y+2;break;case c:f=(r-a)/y+4;break}f/=6}return e.h=f,e.s=m,e.l=v,e}getRGB(e,n=Et.workingColorSpace){return Et.fromWorkingColorSpace(Sn.copy(this),n),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=ni){Et.fromWorkingColorSpace(Sn.copy(this),e);const n=Sn.r,r=Sn.g,a=Sn.b;return e!==ni?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(Sr),this.setHSL(Sr.h+e,Sr.s+n,Sr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Sr),e.getHSL(hl);const r=Nu(Sr.h,hl.h,n),a=Nu(Sr.s,hl.s,n),c=Nu(Sr.l,hl.l,n);return this.setHSL(r,a,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*a,this.g=c[1]*n+c[4]*r+c[7]*a,this.b=c[2]*n+c[5]*r+c[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new vt;vt.NAMES=Ig;let hx=0;class no extends rs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=Ko(),this.name="",this.blending=Xs,this.side=Rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pd,this.blendDst=md,this.blendEquation=Zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=im,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(r.blending=this.blending),this.side!==Rr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==pd&&(r.blendSrc=this.blendSrc),this.blendDst!==md&&(r.blendDst=this.blendDst),this.blendEquation!==Zr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==im&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(c){const d=[];for(const h in c){const f=c[h];delete f.metadata,d.push(f)}return d}if(n){const c=a(e.textures),d=a(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let c=0;c!==a;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Fg extends no{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=_g,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new K,fl=new dt;class Ai{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=rm,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,c=this.itemSize;a<c;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)fl.fromBufferAttribute(this,n),fl.applyMatrix3(e),this.setXY(n,fl.x,fl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Kt.fromBufferAttribute(this,n),Kt.applyMatrix3(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Kt.fromBufferAttribute(this,n),Kt.applyMatrix4(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Kt.fromBufferAttribute(this,n),Kt.applyNormalMatrix(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Kt.fromBufferAttribute(this,n),Kt.transformDirection(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Oo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=On(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Oo(n,this.array)),n}setX(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Oo(n,this.array)),n}setY(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Oo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Oo(n,this.array)),n}setW(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=On(n,this.array),r=On(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=On(n,this.array),r=On(r,this.array),a=On(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,c){return e*=this.itemSize,this.normalized&&(n=On(n,this.array),r=On(r,this.array),a=On(a,this.array),c=On(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rm&&(e.usage=this.usage),e}}class Og extends Ai{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class kg extends Ai{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class tn extends Ai{constructor(e,n,r){super(new Float32Array(e),n,r)}}let fx=0;const ti=new jt,Zu=new un,zs=new K,Xn=new Zo,Ho=new Zo,cn=new K;class En extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=Ko(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lg(e)?kg:Og)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ft().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,n,r){return ti.makeTranslation(e,n,r),this.applyMatrix4(ti),this}scale(e,n,r){return ti.makeScale(e,n,r),this.applyMatrix4(ti),this}lookAt(e){return Zu.lookAt(e),Zu.updateMatrix(),this.applyMatrix4(Zu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,c=e.length;a<c;a++){const d=e[a];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new tn(r,3))}else{for(let r=0,a=n.count;r<a;r++){const c=e[r];n.setXYZ(r,c.x,c.y,c.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const c=n[r];Xn.setFromBufferAttribute(c),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const r=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),n)for(let c=0,d=n.length;c<d;c++){const h=n[c];Ho.setFromBufferAttribute(h),this.morphTargetsRelative?(cn.addVectors(Xn.min,Ho.min),Xn.expandByPoint(cn),cn.addVectors(Xn.max,Ho.max),Xn.expandByPoint(cn)):(Xn.expandByPoint(Ho.min),Xn.expandByPoint(Ho.max))}Xn.getCenter(r);let a=0;for(let c=0,d=e.count;c<d;c++)cn.fromBufferAttribute(e,c),a=Math.max(a,r.distanceToSquared(cn));if(n)for(let c=0,d=n.length;c<d;c++){const h=n[c],f=this.morphTargetsRelative;for(let m=0,v=h.count;m<v;m++)cn.fromBufferAttribute(h,m),f&&(zs.fromBufferAttribute(e,m),cn.add(zs)),a=Math.max(a,r.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],f=[];for(let z=0;z<r.count;z++)h[z]=new K,f[z]=new K;const m=new K,v=new K,y=new K,x=new dt,M=new dt,w=new dt,A=new K,S=new K;function _(z,P,C){m.fromBufferAttribute(r,z),v.fromBufferAttribute(r,P),y.fromBufferAttribute(r,C),x.fromBufferAttribute(c,z),M.fromBufferAttribute(c,P),w.fromBufferAttribute(c,C),v.sub(m),y.sub(m),M.sub(x),w.sub(x);const V=1/(M.x*w.y-w.x*M.y);isFinite(V)&&(A.copy(v).multiplyScalar(w.y).addScaledVector(y,-M.y).multiplyScalar(V),S.copy(y).multiplyScalar(M.x).addScaledVector(v,-w.x).multiplyScalar(V),h[z].add(A),h[P].add(A),h[C].add(A),f[z].add(S),f[P].add(S),f[C].add(S))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let z=0,P=F.length;z<P;++z){const C=F[z],V=C.start,ne=C.count;for(let Z=V,ae=V+ne;Z<ae;Z+=3)_(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const N=new K,b=new K,q=new K,L=new K;function I(z){q.fromBufferAttribute(a,z),L.copy(q);const P=h[z];N.copy(P),N.sub(q.multiplyScalar(q.dot(P))).normalize(),b.crossVectors(L,P);const V=b.dot(f[z])<0?-1:1;d.setXYZW(z,N.x,N.y,N.z,V)}for(let z=0,P=F.length;z<P;++z){const C=F[z],V=C.start,ne=C.count;for(let Z=V,ae=V+ne;Z<ae;Z+=3)I(e.getX(Z+0)),I(e.getX(Z+1)),I(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ai(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const a=new K,c=new K,d=new K,h=new K,f=new K,m=new K,v=new K,y=new K;if(e)for(let x=0,M=e.count;x<M;x+=3){const w=e.getX(x+0),A=e.getX(x+1),S=e.getX(x+2);a.fromBufferAttribute(n,w),c.fromBufferAttribute(n,A),d.fromBufferAttribute(n,S),v.subVectors(d,c),y.subVectors(a,c),v.cross(y),h.fromBufferAttribute(r,w),f.fromBufferAttribute(r,A),m.fromBufferAttribute(r,S),h.add(v),f.add(v),m.add(v),r.setXYZ(w,h.x,h.y,h.z),r.setXYZ(A,f.x,f.y,f.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let x=0,M=n.count;x<M;x+=3)a.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),d.fromBufferAttribute(n,x+2),v.subVectors(d,c),y.subVectors(a,c),v.cross(y),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)cn.fromBufferAttribute(e,n),cn.normalize(),e.setXYZ(n,cn.x,cn.y,cn.z)}toNonIndexed(){function e(h,f){const m=h.array,v=h.itemSize,y=h.normalized,x=new m.constructor(f.length*v);let M=0,w=0;for(let A=0,S=f.length;A<S;A++){h.isInterleavedBufferAttribute?M=f[A]*h.data.stride+h.offset:M=f[A]*v;for(let _=0;_<v;_++)x[w++]=m[M++]}return new Ai(x,v,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new En,r=this.index.array,a=this.attributes;for(const h in a){const f=a[h],m=e(f,r);n.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const f=[],m=c[h];for(let v=0,y=m.length;v<y;v++){const x=m[v],M=e(x,r);f.push(M)}n.morphAttributes[h]=f}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,f=d.length;h<f;h++){const m=d[h];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const m in f)f[m]!==void 0&&(e[m]=f[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const f in r){const m=r[f];e.data.attributes[f]=m.toJSON(e.data)}const a={};let c=!1;for(const f in this.morphAttributes){const m=this.morphAttributes[f],v=[];for(let y=0,x=m.length;y<x;y++){const M=m[y];v.push(M.toJSON(e.data))}v.length>0&&(a[f]=v,c=!0)}c&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const v=a[m];this.setAttribute(m,v.clone(n))}const c=e.morphAttributes;for(const m in c){const v=[],y=c[m];for(let x=0,M=y.length;x<M;x++)v.push(y[x].clone(n));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,v=d.length;m<v;m++){const y=d[m];this.addGroup(y.start,y.count,y.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sm=new jt,Xr=new uh,pl=new jl,Mm=new K,ml=new K,gl=new K,_l=new K,Qu=new K,vl=new K,Em=new K,xl=new K;class bn extends un{constructor(e=new En,n=new Fg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=a.length;c<d;c++){const h=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const h=this.morphTargetInfluences;if(c&&h){vl.set(0,0,0);for(let f=0,m=c.length;f<m;f++){const v=h[f],y=c[f];v!==0&&(Qu.fromBufferAttribute(y,e),d?vl.addScaledVector(Qu,v):vl.addScaledVector(Qu.sub(n),v))}n.add(vl)}return n}raycast(e,n){const r=this.geometry,a=this.material,c=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),pl.copy(r.boundingSphere),pl.applyMatrix4(c),Xr.copy(e.ray).recast(e.near),!(pl.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(pl,Mm)===null||Xr.origin.distanceToSquared(Mm)>(e.far-e.near)**2))&&(Sm.copy(c).invert(),Xr.copy(e.ray).applyMatrix4(Sm),!(r.boundingBox!==null&&Xr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Xr)))}_computeIntersections(e,n,r){let a;const c=this.geometry,d=this.material,h=c.index,f=c.attributes.position,m=c.attributes.uv,v=c.attributes.uv1,y=c.attributes.normal,x=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(d))for(let w=0,A=x.length;w<A;w++){const S=x[w],_=d[S.materialIndex],F=Math.max(S.start,M.start),N=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let b=F,q=N;b<q;b+=3){const L=h.getX(b),I=h.getX(b+1),z=h.getX(b+2);a=yl(this,_,e,r,m,v,y,L,I,z),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const w=Math.max(0,M.start),A=Math.min(h.count,M.start+M.count);for(let S=w,_=A;S<_;S+=3){const F=h.getX(S),N=h.getX(S+1),b=h.getX(S+2);a=yl(this,d,e,r,m,v,y,F,N,b),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}else if(f!==void 0)if(Array.isArray(d))for(let w=0,A=x.length;w<A;w++){const S=x[w],_=d[S.materialIndex],F=Math.max(S.start,M.start),N=Math.min(f.count,Math.min(S.start+S.count,M.start+M.count));for(let b=F,q=N;b<q;b+=3){const L=b,I=b+1,z=b+2;a=yl(this,_,e,r,m,v,y,L,I,z),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const w=Math.max(0,M.start),A=Math.min(f.count,M.start+M.count);for(let S=w,_=A;S<_;S+=3){const F=S,N=S+1,b=S+2;a=yl(this,d,e,r,m,v,y,F,N,b),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}}}function px(s,e,n,r,a,c,d,h){let f;if(e.side===zn?f=r.intersectTriangle(d,c,a,!0,h):f=r.intersectTriangle(a,c,d,e.side===Rr,h),f===null)return null;xl.copy(h),xl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(xl);return m<n.near||m>n.far?null:{distance:m,point:xl.clone(),object:s}}function yl(s,e,n,r,a,c,d,h,f,m){s.getVertexPosition(h,ml),s.getVertexPosition(f,gl),s.getVertexPosition(m,_l);const v=px(s,e,n,r,ml,gl,_l,Em);if(v){const y=new K;mi.getBarycoord(Em,ml,gl,_l,y),a&&(v.uv=mi.getInterpolatedAttribute(a,h,f,m,y,new dt)),c&&(v.uv1=mi.getInterpolatedAttribute(c,h,f,m,y,new dt)),d&&(v.normal=mi.getInterpolatedAttribute(d,h,f,m,y,new K),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:h,b:f,c:m,normal:new K,materialIndex:0};mi.getNormal(ml,gl,_l,x.normal),v.face=x,v.barycoord=y}return v}class Cr extends En{constructor(e=1,n=1,r=1,a=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:c,depthSegments:d};const h=this;a=Math.floor(a),c=Math.floor(c),d=Math.floor(d);const f=[],m=[],v=[],y=[];let x=0,M=0;w("z","y","x",-1,-1,r,n,e,d,c,0),w("z","y","x",1,-1,r,n,-e,d,c,1),w("x","z","y",1,1,e,r,n,a,d,2),w("x","z","y",1,-1,e,r,-n,a,d,3),w("x","y","z",1,-1,e,n,r,a,c,4),w("x","y","z",-1,-1,e,n,-r,a,c,5),this.setIndex(f),this.setAttribute("position",new tn(m,3)),this.setAttribute("normal",new tn(v,3)),this.setAttribute("uv",new tn(y,2));function w(A,S,_,F,N,b,q,L,I,z,P){const C=b/I,V=q/z,ne=b/2,Z=q/2,ae=L/2,ge=I+1,oe=z+1;let he=0,B=0;const le=new K;for(let ue=0;ue<oe;ue++){const O=ue*V-Z;for(let Q=0;Q<ge;Q++){const Ne=Q*C-ne;le[A]=Ne*F,le[S]=O*N,le[_]=ae,m.push(le.x,le.y,le.z),le[A]=0,le[S]=0,le[_]=L>0?1:-1,v.push(le.x,le.y,le.z),y.push(Q/I),y.push(1-ue/z),he+=1}}for(let ue=0;ue<z;ue++)for(let O=0;O<I;O++){const Q=x+O+ge*ue,Ne=x+O+ge*(ue+1),J=x+(O+1)+ge*(ue+1),fe=x+(O+1)+ge*ue;f.push(Q,Ne,fe),f.push(Ne,J,fe),B+=6}h.addGroup(M,B,P),M+=B,x+=he}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function eo(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function Cn(s){const e={};for(let n=0;n<s.length;n++){const r=eo(s[n]);for(const a in r)e[a]=r[a]}return e}function mx(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function zg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const gx={clone:eo,merge:Cn};var _x=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class br extends no{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_x,this.fragmentShader=vx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=eo(e.uniforms),this.uniformsGroups=mx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const d=this.uniforms[a].value;d&&d.isTexture?n.uniforms[a]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[a]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[a]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[a]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[a]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[a]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[a]={type:"m4",value:d.toArray()}:n.uniforms[a]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Bg extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Yi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mr=new K,Tm=new dt,wm=new dt;class ii extends Bg{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Jd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Il*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jd*2*Math.atan(Math.tan(Il*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z),Mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z)}getViewSize(e,n){return this.getViewBounds(e,Tm,wm),n.subVectors(wm,Tm)}setViewOffset(e,n,r,a,c,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Il*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,c=-.5*a;const d=this.view;if(this.view!==null&&this.view.enabled){const f=d.fullWidth,m=d.fullHeight;c+=d.offsetX*a/f,n-=d.offsetY*r/m,a*=d.width/f,r*=d.height/m}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Bs=-90,Hs=1;class xx extends un{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ii(Bs,Hs,e,n);a.layers=this.layers,this.add(a);const c=new ii(Bs,Hs,e,n);c.layers=this.layers,this.add(c);const d=new ii(Bs,Hs,e,n);d.layers=this.layers,this.add(d);const h=new ii(Bs,Hs,e,n);h.layers=this.layers,this.add(h);const f=new ii(Bs,Hs,e,n);f.layers=this.layers,this.add(f);const m=new ii(Bs,Hs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,c,d,h,f]=n;for(const m of n)this.remove(m);if(e===Yi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Ol)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,f,m,v]=this.children,y=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,c),e.setRenderTarget(r,1,a),e.render(n,d),e.setRenderTarget(r,2,a),e.render(n,h),e.setRenderTarget(r,3,a),e.render(n,f),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,a),e.render(n,v),e.setRenderTarget(y,x,M),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class Hg extends Bn{constructor(e,n,r,a,c,d,h,f,m,v){e=e!==void 0?e:[],n=n!==void 0?n:Ks,super(e,n,r,a,c,d,h,f,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yx extends ns{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Hg(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:wi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Cr(5,5,5),c=new br({name:"CubemapFromEquirect",uniforms:eo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:zn,blending:wr});c.uniforms.tEquirect.value=n;const d=new bn(a,c),h=n.minFilter;return n.minFilter===es&&(n.minFilter=wi),new xx(1,10,this).update(e,d),n.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,n,r,a){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,r,a);e.setRenderTarget(c)}}const Ju=new K,Sx=new K,Mx=new ft;class Er{constructor(e=new K(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Ju.subVectors(r,n).cross(Sx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Ju),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Mx.getNormalMatrix(e),a=this.coplanarPoint(Ju).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yr=new jl,Sl=new K;class dh{constructor(e=new Er,n=new Er,r=new Er,a=new Er,c=new Er,d=new Er){this.planes=[e,n,r,a,c,d]}set(e,n,r,a,c,d){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(r),h[3].copy(a),h[4].copy(c),h[5].copy(d),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Yi){const r=this.planes,a=e.elements,c=a[0],d=a[1],h=a[2],f=a[3],m=a[4],v=a[5],y=a[6],x=a[7],M=a[8],w=a[9],A=a[10],S=a[11],_=a[12],F=a[13],N=a[14],b=a[15];if(r[0].setComponents(f-c,x-m,S-M,b-_).normalize(),r[1].setComponents(f+c,x+m,S+M,b+_).normalize(),r[2].setComponents(f+d,x+v,S+w,b+F).normalize(),r[3].setComponents(f-d,x-v,S-w,b-F).normalize(),r[4].setComponents(f-h,x-y,S-A,b-N).normalize(),n===Yi)r[5].setComponents(f+h,x+y,S+A,b+N).normalize();else if(n===Ol)r[5].setComponents(h,y,A,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){return Yr.center.set(0,0,0),Yr.radius=.7071067811865476,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(Sl.x=a.normal.x>0?e.max.x:e.min.x,Sl.y=a.normal.y>0?e.max.y:e.min.y,Sl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Sl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vg(){let s=null,e=!1,n=null,r=null;function a(c,d){n(c,d),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function Ex(s){const e=new WeakMap;function n(h,f){const m=h.array,v=h.usage,y=m.byteLength,x=s.createBuffer();s.bindBuffer(f,x),s.bufferData(f,m,v),h.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:y}}function r(h,f,m){const v=f.array,y=f.updateRanges;if(s.bindBuffer(m,h),y.length===0)s.bufferSubData(m,0,v);else{y.sort((M,w)=>M.start-w.start);let x=0;for(let M=1;M<y.length;M++){const w=y[x],A=y[M];A.start<=w.start+w.count+1?w.count=Math.max(w.count,A.start+A.count-w.start):(++x,y[x]=A)}y.length=x+1;for(let M=0,w=y.length;M<w;M++){const A=y[M];s.bufferSubData(m,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}f.clearUpdateRanges()}f.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const f=e.get(h);f&&(s.deleteBuffer(f.buffer),e.delete(h))}function d(h,f){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,n(h,f));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,f),m.version=h.version}}return{get:a,remove:c,update:d}}class Wl extends En{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const c=e/2,d=n/2,h=Math.floor(r),f=Math.floor(a),m=h+1,v=f+1,y=e/h,x=n/f,M=[],w=[],A=[],S=[];for(let _=0;_<v;_++){const F=_*x-d;for(let N=0;N<m;N++){const b=N*y-c;w.push(b,-F,0),A.push(0,0,1),S.push(N/h),S.push(1-_/f)}}for(let _=0;_<f;_++)for(let F=0;F<h;F++){const N=F+m*_,b=F+m*(_+1),q=F+1+m*(_+1),L=F+1+m*_;M.push(N,b,L),M.push(b,q,L)}this.setIndex(M),this.setAttribute("position",new tn(w,3)),this.setAttribute("normal",new tn(A,3)),this.setAttribute("uv",new tn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wl(e.width,e.height,e.widthSegments,e.heightSegments)}}var Tx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ax=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Px=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Nx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ux=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ix=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ox=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Bx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Yx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$x=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Kx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ey="gl_FragColor = linearToOutputTexel( gl_FragColor );",ty=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ny=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,iy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ry=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ay=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ly=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,py=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,my=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_y=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,My=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ey=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ty=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ay=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ry=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,by=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Py=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ly=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ny=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Iy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Oy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ky=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,By=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Yy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$y=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ky=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Jy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,oS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,aS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_S=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,SS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,MS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ES=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,PS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,LS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,DS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,NS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,US=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,VS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,WS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$S=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,QS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gt={alphahash_fragment:Tx,alphahash_pars_fragment:wx,alphamap_fragment:Ax,alphamap_pars_fragment:Cx,alphatest_fragment:Rx,alphatest_pars_fragment:bx,aomap_fragment:Px,aomap_pars_fragment:Lx,batching_pars_vertex:Dx,batching_vertex:Nx,begin_vertex:Ux,beginnormal_vertex:Ix,bsdfs:Fx,iridescence_fragment:Ox,bumpmap_pars_fragment:kx,clipping_planes_fragment:zx,clipping_planes_pars_fragment:Bx,clipping_planes_pars_vertex:Hx,clipping_planes_vertex:Vx,color_fragment:Gx,color_pars_fragment:jx,color_pars_vertex:Wx,color_vertex:Xx,common:Yx,cube_uv_reflection_fragment:qx,defaultnormal_vertex:$x,displacementmap_pars_vertex:Kx,displacementmap_vertex:Zx,emissivemap_fragment:Qx,emissivemap_pars_fragment:Jx,colorspace_fragment:ey,colorspace_pars_fragment:ty,envmap_fragment:ny,envmap_common_pars_fragment:iy,envmap_pars_fragment:ry,envmap_pars_vertex:sy,envmap_physical_pars_fragment:gy,envmap_vertex:oy,fog_vertex:ay,fog_pars_vertex:ly,fog_fragment:cy,fog_pars_fragment:uy,gradientmap_pars_fragment:dy,lightmap_pars_fragment:hy,lights_lambert_fragment:fy,lights_lambert_pars_fragment:py,lights_pars_begin:my,lights_toon_fragment:_y,lights_toon_pars_fragment:vy,lights_phong_fragment:xy,lights_phong_pars_fragment:yy,lights_physical_fragment:Sy,lights_physical_pars_fragment:My,lights_fragment_begin:Ey,lights_fragment_maps:Ty,lights_fragment_end:wy,logdepthbuf_fragment:Ay,logdepthbuf_pars_fragment:Cy,logdepthbuf_pars_vertex:Ry,logdepthbuf_vertex:by,map_fragment:Py,map_pars_fragment:Ly,map_particle_fragment:Dy,map_particle_pars_fragment:Ny,metalnessmap_fragment:Uy,metalnessmap_pars_fragment:Iy,morphinstance_vertex:Fy,morphcolor_vertex:Oy,morphnormal_vertex:ky,morphtarget_pars_vertex:zy,morphtarget_vertex:By,normal_fragment_begin:Hy,normal_fragment_maps:Vy,normal_pars_fragment:Gy,normal_pars_vertex:jy,normal_vertex:Wy,normalmap_pars_fragment:Xy,clearcoat_normal_fragment_begin:Yy,clearcoat_normal_fragment_maps:qy,clearcoat_pars_fragment:$y,iridescence_pars_fragment:Ky,opaque_fragment:Zy,packing:Qy,premultiplied_alpha_fragment:Jy,project_vertex:eS,dithering_fragment:tS,dithering_pars_fragment:nS,roughnessmap_fragment:iS,roughnessmap_pars_fragment:rS,shadowmap_pars_fragment:sS,shadowmap_pars_vertex:oS,shadowmap_vertex:aS,shadowmask_pars_fragment:lS,skinbase_vertex:cS,skinning_pars_vertex:uS,skinning_vertex:dS,skinnormal_vertex:hS,specularmap_fragment:fS,specularmap_pars_fragment:pS,tonemapping_fragment:mS,tonemapping_pars_fragment:gS,transmission_fragment:_S,transmission_pars_fragment:vS,uv_pars_fragment:xS,uv_pars_vertex:yS,uv_vertex:SS,worldpos_vertex:MS,background_vert:ES,background_frag:TS,backgroundCube_vert:wS,backgroundCube_frag:AS,cube_vert:CS,cube_frag:RS,depth_vert:bS,depth_frag:PS,distanceRGBA_vert:LS,distanceRGBA_frag:DS,equirect_vert:NS,equirect_frag:US,linedashed_vert:IS,linedashed_frag:FS,meshbasic_vert:OS,meshbasic_frag:kS,meshlambert_vert:zS,meshlambert_frag:BS,meshmatcap_vert:HS,meshmatcap_frag:VS,meshnormal_vert:GS,meshnormal_frag:jS,meshphong_vert:WS,meshphong_frag:XS,meshphysical_vert:YS,meshphysical_frag:qS,meshtoon_vert:$S,meshtoon_frag:KS,points_vert:ZS,points_frag:QS,shadow_vert:JS,shadow_frag:eM,sprite_vert:tM,sprite_frag:nM},Ie={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Ti={basic:{uniforms:Cn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Cn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new vt(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Cn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Cn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Cn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new vt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Cn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Cn([Ie.points,Ie.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Cn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Cn([Ie.common,Ie.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Cn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Cn([Ie.sprite,Ie.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:Cn([Ie.common,Ie.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:Cn([Ie.lights,Ie.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Ti.physical={uniforms:Cn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Ml={r:0,b:0,g:0},qr=new Ci,iM=new jt;function rM(s,e,n,r,a,c,d){const h=new vt(0);let f=c===!0?0:1,m,v,y=null,x=0,M=null;function w(F){let N=F.isScene===!0?F.background:null;return N&&N.isTexture&&(N=(F.backgroundBlurriness>0?n:e).get(N)),N}function A(F){let N=!1;const b=w(F);b===null?_(h,f):b&&b.isColor&&(_(b,1),N=!0);const q=s.xr.getEnvironmentBlendMode();q==="additive"?r.buffers.color.setClear(0,0,0,1,d):q==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||N)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(F,N){const b=w(N);b&&(b.isCubeTexture||b.mapping===Vl)?(v===void 0&&(v=new bn(new Cr(1,1,1),new br({name:"BackgroundCubeMaterial",uniforms:eo(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(q,L,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(v)),qr.copy(N.backgroundRotation),qr.x*=-1,qr.y*=-1,qr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),v.material.uniforms.envMap.value=b,v.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(iM.makeRotationFromEuler(qr)),v.material.toneMapped=Et.getTransfer(b.colorSpace)!==Ut,(y!==b||x!==b.version||M!==s.toneMapping)&&(v.material.needsUpdate=!0,y=b,x=b.version,M=s.toneMapping),v.layers.enableAll(),F.unshift(v,v.geometry,v.material,0,0,null)):b&&b.isTexture&&(m===void 0&&(m=new bn(new Wl(2,2),new br({name:"BackgroundMaterial",uniforms:eo(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Rr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=b,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=Et.getTransfer(b.colorSpace)!==Ut,b.matrixAutoUpdate===!0&&b.updateMatrix(),m.material.uniforms.uvTransform.value.copy(b.matrix),(y!==b||x!==b.version||M!==s.toneMapping)&&(m.material.needsUpdate=!0,y=b,x=b.version,M=s.toneMapping),m.layers.enableAll(),F.unshift(m,m.geometry,m.material,0,0,null))}function _(F,N){F.getRGB(Ml,zg(s)),r.buffers.color.setClear(Ml.r,Ml.g,Ml.b,N,d)}return{getClearColor:function(){return h},setClearColor:function(F,N=1){h.set(F),f=N,_(h,f)},getClearAlpha:function(){return f},setClearAlpha:function(F){f=F,_(h,f)},render:A,addToRenderList:S}}function sM(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let c=a,d=!1;function h(C,V,ne,Z,ae){let ge=!1;const oe=y(Z,ne,V);c!==oe&&(c=oe,m(c.object)),ge=M(C,Z,ne,ae),ge&&w(C,Z,ne,ae),ae!==null&&e.update(ae,s.ELEMENT_ARRAY_BUFFER),(ge||d)&&(d=!1,b(C,V,ne,Z),ae!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function f(){return s.createVertexArray()}function m(C){return s.bindVertexArray(C)}function v(C){return s.deleteVertexArray(C)}function y(C,V,ne){const Z=ne.wireframe===!0;let ae=r[C.id];ae===void 0&&(ae={},r[C.id]=ae);let ge=ae[V.id];ge===void 0&&(ge={},ae[V.id]=ge);let oe=ge[Z];return oe===void 0&&(oe=x(f()),ge[Z]=oe),oe}function x(C){const V=[],ne=[],Z=[];for(let ae=0;ae<n;ae++)V[ae]=0,ne[ae]=0,Z[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ne,attributeDivisors:Z,object:C,attributes:{},index:null}}function M(C,V,ne,Z){const ae=c.attributes,ge=V.attributes;let oe=0;const he=ne.getAttributes();for(const B in he)if(he[B].location>=0){const ue=ae[B];let O=ge[B];if(O===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&(O=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&(O=C.instanceColor)),ue===void 0||ue.attribute!==O||O&&ue.data!==O.data)return!0;oe++}return c.attributesNum!==oe||c.index!==Z}function w(C,V,ne,Z){const ae={},ge=V.attributes;let oe=0;const he=ne.getAttributes();for(const B in he)if(he[B].location>=0){let ue=ge[B];ue===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&(ue=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&(ue=C.instanceColor));const O={};O.attribute=ue,ue&&ue.data&&(O.data=ue.data),ae[B]=O,oe++}c.attributes=ae,c.attributesNum=oe,c.index=Z}function A(){const C=c.newAttributes;for(let V=0,ne=C.length;V<ne;V++)C[V]=0}function S(C){_(C,0)}function _(C,V){const ne=c.newAttributes,Z=c.enabledAttributes,ae=c.attributeDivisors;ne[C]=1,Z[C]===0&&(s.enableVertexAttribArray(C),Z[C]=1),ae[C]!==V&&(s.vertexAttribDivisor(C,V),ae[C]=V)}function F(){const C=c.newAttributes,V=c.enabledAttributes;for(let ne=0,Z=V.length;ne<Z;ne++)V[ne]!==C[ne]&&(s.disableVertexAttribArray(ne),V[ne]=0)}function N(C,V,ne,Z,ae,ge,oe){oe===!0?s.vertexAttribIPointer(C,V,ne,ae,ge):s.vertexAttribPointer(C,V,ne,Z,ae,ge)}function b(C,V,ne,Z){A();const ae=Z.attributes,ge=ne.getAttributes(),oe=V.defaultAttributeValues;for(const he in ge){const B=ge[he];if(B.location>=0){let le=ae[he];if(le===void 0&&(he==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),he==="instanceColor"&&C.instanceColor&&(le=C.instanceColor)),le!==void 0){const ue=le.normalized,O=le.itemSize,Q=e.get(le);if(Q===void 0)continue;const Ne=Q.buffer,J=Q.type,fe=Q.bytesPerElement,Ee=J===s.INT||J===s.UNSIGNED_INT||le.gpuType===rh;if(le.isInterleavedBufferAttribute){const Me=le.data,Le=Me.stride,ke=le.offset;if(Me.isInstancedInterleavedBuffer){for(let Je=0;Je<B.locationSize;Je++)_(B.location+Je,Me.meshPerAttribute);C.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Je=0;Je<B.locationSize;Je++)S(B.location+Je);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let Je=0;Je<B.locationSize;Je++)N(B.location+Je,O/B.locationSize,J,ue,Le*fe,(ke+O/B.locationSize*Je)*fe,Ee)}else{if(le.isInstancedBufferAttribute){for(let Me=0;Me<B.locationSize;Me++)_(B.location+Me,le.meshPerAttribute);C.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Me=0;Me<B.locationSize;Me++)S(B.location+Me);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let Me=0;Me<B.locationSize;Me++)N(B.location+Me,O/B.locationSize,J,ue,O*fe,O/B.locationSize*Me*fe,Ee)}}else if(oe!==void 0){const ue=oe[he];if(ue!==void 0)switch(ue.length){case 2:s.vertexAttrib2fv(B.location,ue);break;case 3:s.vertexAttrib3fv(B.location,ue);break;case 4:s.vertexAttrib4fv(B.location,ue);break;default:s.vertexAttrib1fv(B.location,ue)}}}}F()}function q(){z();for(const C in r){const V=r[C];for(const ne in V){const Z=V[ne];for(const ae in Z)v(Z[ae].object),delete Z[ae];delete V[ne]}delete r[C]}}function L(C){if(r[C.id]===void 0)return;const V=r[C.id];for(const ne in V){const Z=V[ne];for(const ae in Z)v(Z[ae].object),delete Z[ae];delete V[ne]}delete r[C.id]}function I(C){for(const V in r){const ne=r[V];if(ne[C.id]===void 0)continue;const Z=ne[C.id];for(const ae in Z)v(Z[ae].object),delete Z[ae];delete ne[C.id]}}function z(){P(),d=!0,c!==a&&(c=a,m(c.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:h,reset:z,resetDefaultState:P,dispose:q,releaseStatesOfGeometry:L,releaseStatesOfProgram:I,initAttributes:A,enableAttribute:S,disableUnusedAttributes:F}}function oM(s,e,n){let r;function a(m){r=m}function c(m,v){s.drawArrays(r,m,v),n.update(v,r,1)}function d(m,v,y){y!==0&&(s.drawArraysInstanced(r,m,v,y),n.update(v,r,y))}function h(m,v,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,y);let M=0;for(let w=0;w<y;w++)M+=v[w];n.update(M,r,1)}function f(m,v,y,x){if(y===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let w=0;w<m.length;w++)d(m[w],v[w],x[w]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,v,0,x,0,y);let w=0;for(let A=0;A<y;A++)w+=v[A]*x[A];n.update(w,r,1)}}this.setMode=a,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function aM(s,e,n,r){let a;function c(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function d(I){return!(I!==gi&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const z=I===$o&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==$i&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Xi&&!z)}function f(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const v=f(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const y=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),F=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),q=w>0,L=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:f,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:y,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:w,maxTextureSize:A,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:F,maxVaryings:N,maxFragmentUniforms:b,vertexTextures:q,maxSamples:L}}function lM(s){const e=this;let n=null,r=0,a=!1,c=!1;const d=new Er,h=new ft,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(y,x){const M=y.length!==0||x||r!==0||a;return a=x,r=y.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(y,x){n=v(y,x,0)},this.setState=function(y,x,M){const w=y.clippingPlanes,A=y.clipIntersection,S=y.clipShadows,_=s.get(y);if(!a||w===null||w.length===0||c&&!S)c?v(null):m();else{const F=c?0:r,N=F*4;let b=_.clippingState||null;f.value=b,b=v(w,x,N,M);for(let q=0;q!==N;++q)b[q]=n[q];_.clippingState=b,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=F}};function m(){f.value!==n&&(f.value=n,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(y,x,M,w){const A=y!==null?y.length:0;let S=null;if(A!==0){if(S=f.value,w!==!0||S===null){const _=M+A*4,F=x.matrixWorldInverse;h.getNormalMatrix(F),(S===null||S.length<_)&&(S=new Float32Array(_));for(let N=0,b=M;N!==A;++N,b+=4)d.copy(y[N]).applyMatrix4(F,h),d.normal.toArray(S,b),S[b+3]=d.constant}f.value=S,f.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}function cM(s){let e=new WeakMap;function n(d,h){return h===Ed?d.mapping=Ks:h===Td&&(d.mapping=Zs),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Ed||h===Td)if(e.has(d)){const f=e.get(d).texture;return n(f,d.mapping)}else{const f=d.image;if(f&&f.height>0){const m=new yx(f.height);return m.fromEquirectangularTexture(s,d),e.set(d,m),d.addEventListener("dispose",a),n(m.texture,d.mapping)}else return null}}return d}function a(d){const h=d.target;h.removeEventListener("dispose",a);const f=e.get(h);f!==void 0&&(e.delete(h),f.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class Gg extends Bg{constructor(e=-1,n=1,r=1,a=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let c=r-e,d=r+e,h=a+n,f=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,d=c+m*this.view.width,h-=v*this.view.offsetY,f=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const js=4,Am=[.125,.215,.35,.446,.526,.582],Qr=20,ed=new Gg,Cm=new vt;let td=null,nd=0,id=0,rd=!1;const Kr=(1+Math.sqrt(5))/2,Vs=1/Kr,Rm=[new K(-Kr,Vs,0),new K(Kr,Vs,0),new K(-Vs,0,Kr),new K(Vs,0,Kr),new K(0,Kr,-Vs),new K(0,Kr,Vs),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class bm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){td=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,a,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(td,nd,id),this._renderer.xr.enabled=rd,e.scissorTest=!1,El(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ks||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),td=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:wi,minFilter:wi,generateMipmaps:!1,type:$o,format:gi,colorSpace:to,depthBuffer:!1},a=Pm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pm(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uM(c)),this._blurMaterial=dM(c,e,n)}return a}_compileMaterial(e){const n=new bn(this._lodPlanes[0],e);this._renderer.compile(n,ed)}_sceneToCubeUV(e,n,r,a){const h=new ii(90,1,n,r),f=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,x=v.toneMapping;v.getClearColor(Cm),v.toneMapping=Ar,v.autoClear=!1;const M=new Fg({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),w=new bn(new Cr,M);let A=!1;const S=e.background;S?S.isColor&&(M.color.copy(S),e.background=null,A=!0):(M.color.copy(Cm),A=!0);for(let _=0;_<6;_++){const F=_%3;F===0?(h.up.set(0,f[_],0),h.lookAt(m[_],0,0)):F===1?(h.up.set(0,0,f[_]),h.lookAt(0,m[_],0)):(h.up.set(0,f[_],0),h.lookAt(0,0,m[_]));const N=this._cubeSize;El(a,F*N,_>2?N:0,N,N),v.setRenderTarget(a),A&&v.render(w,h),v.render(e,h)}w.geometry.dispose(),w.material.dispose(),v.toneMapping=x,v.autoClear=y,e.background=S}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Ks||e.mapping===Zs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lm());const c=a?this._cubemapMaterial:this._equirectMaterial,d=new bn(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=e;const f=this._cubeSize;El(n,0,0,3*f,2*f),r.setRenderTarget(n),r.render(d,ed)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let c=1;c<a;c++){const d=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=Rm[(a-c-1)%Rm.length];this._blur(e,c-1,c,d,h)}n.autoClear=r}_blur(e,n,r,a,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,r,a,"latitudinal",c),this._halfBlur(d,e,r,r,a,"longitudinal",c)}_halfBlur(e,n,r,a,c,d,h){const f=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,y=new bn(this._lodPlanes[a],m),x=m.uniforms,M=this._sizeLods[r]-1,w=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Qr-1),A=c/w,S=isFinite(c)?1+Math.floor(v*A):Qr;S>Qr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Qr}`);const _=[];let F=0;for(let I=0;I<Qr;++I){const z=I/A,P=Math.exp(-z*z/2);_.push(P),I===0?F+=P:I<S&&(F+=2*P)}for(let I=0;I<_.length;I++)_[I]=_[I]/F;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=_,x.latitudinal.value=d==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:N}=this;x.dTheta.value=w,x.mipInt.value=N-r;const b=this._sizeLods[a],q=3*b*(a>N-js?a-N+js:0),L=4*(this._cubeSize-b);El(n,q,L,3*b,2*b),f.setRenderTarget(n),f.render(y,ed)}}function uM(s){const e=[],n=[],r=[];let a=s;const c=s-js+1+Am.length;for(let d=0;d<c;d++){const h=Math.pow(2,a);n.push(h);let f=1/h;d>s-js?f=Am[d-s+js-1]:d===0&&(f=0),r.push(f);const m=1/(h-2),v=-m,y=1+m,x=[v,v,y,v,y,y,v,v,y,y,v,y],M=6,w=6,A=3,S=2,_=1,F=new Float32Array(A*w*M),N=new Float32Array(S*w*M),b=new Float32Array(_*w*M);for(let L=0;L<M;L++){const I=L%3*2/3-1,z=L>2?0:-1,P=[I,z,0,I+2/3,z,0,I+2/3,z+1,0,I,z,0,I+2/3,z+1,0,I,z+1,0];F.set(P,A*w*L),N.set(x,S*w*L);const C=[L,L,L,L,L,L];b.set(C,_*w*L)}const q=new En;q.setAttribute("position",new Ai(F,A)),q.setAttribute("uv",new Ai(N,S)),q.setAttribute("faceIndex",new Ai(b,_)),e.push(q),a>js&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Pm(s,e,n){const r=new ns(s,e,n);return r.texture.mapping=Vl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function El(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function dM(s,e,n){const r=new Float32Array(Qr),a=new K(0,1,0);return new br({name:"SphericalGaussianBlur",defines:{n:Qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wr,depthTest:!1,depthWrite:!1})}function Lm(){return new br({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wr,depthTest:!1,depthWrite:!1})}function Dm(){return new br({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wr,depthTest:!1,depthWrite:!1})}function hh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hM(s){let e=new WeakMap,n=null;function r(h){if(h&&h.isTexture){const f=h.mapping,m=f===Ed||f===Td,v=f===Ks||f===Zs;if(m||v){let y=e.get(h);const x=y!==void 0?y.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return n===null&&(n=new bm(s)),y=m?n.fromEquirectangular(h,y):n.fromCubemap(h,y),y.texture.pmremVersion=h.pmremVersion,e.set(h,y),y.texture;if(y!==void 0)return y.texture;{const M=h.image;return m&&M&&M.height>0||v&&M&&a(M)?(n===null&&(n=new bm(s)),y=m?n.fromEquirectangular(h):n.fromCubemap(h),y.texture.pmremVersion=h.pmremVersion,e.set(h,y),h.addEventListener("dispose",c),y.texture):null}}}return h}function a(h){let f=0;const m=6;for(let v=0;v<m;v++)h[v]!==void 0&&f++;return f===m}function c(h){const f=h.target;f.removeEventListener("dispose",c);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function fM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&jo("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function pM(s,e,n,r){const a={},c=new WeakMap;function d(y){const x=y.target;x.index!==null&&e.remove(x.index);for(const w in x.attributes)e.remove(x.attributes[w]);for(const w in x.morphAttributes){const A=x.morphAttributes[w];for(let S=0,_=A.length;S<_;S++)e.remove(A[S])}x.removeEventListener("dispose",d),delete a[x.id];const M=c.get(x);M&&(e.remove(M),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function h(y,x){return a[x.id]===!0||(x.addEventListener("dispose",d),a[x.id]=!0,n.memory.geometries++),x}function f(y){const x=y.attributes;for(const w in x)e.update(x[w],s.ARRAY_BUFFER);const M=y.morphAttributes;for(const w in M){const A=M[w];for(let S=0,_=A.length;S<_;S++)e.update(A[S],s.ARRAY_BUFFER)}}function m(y){const x=[],M=y.index,w=y.attributes.position;let A=0;if(M!==null){const F=M.array;A=M.version;for(let N=0,b=F.length;N<b;N+=3){const q=F[N+0],L=F[N+1],I=F[N+2];x.push(q,L,L,I,I,q)}}else if(w!==void 0){const F=w.array;A=w.version;for(let N=0,b=F.length/3-1;N<b;N+=3){const q=N+0,L=N+1,I=N+2;x.push(q,L,L,I,I,q)}}else return;const S=new(Lg(x)?kg:Og)(x,1);S.version=A;const _=c.get(y);_&&e.remove(_),c.set(y,S)}function v(y){const x=c.get(y);if(x){const M=y.index;M!==null&&x.version<M.version&&m(y)}else m(y);return c.get(y)}return{get:h,update:f,getWireframeAttribute:v}}function mM(s,e,n){let r;function a(x){r=x}let c,d;function h(x){c=x.type,d=x.bytesPerElement}function f(x,M){s.drawElements(r,M,c,x*d),n.update(M,r,1)}function m(x,M,w){w!==0&&(s.drawElementsInstanced(r,M,c,x*d,w),n.update(M,r,w))}function v(x,M,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,x,0,w);let S=0;for(let _=0;_<w;_++)S+=M[_];n.update(S,r,1)}function y(x,M,w,A){if(w===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<x.length;_++)m(x[_]/d,M[_],A[_]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,c,x,0,A,0,w);let _=0;for(let F=0;F<w;F++)_+=M[F]*A[F];n.update(_,r,1)}}this.setMode=a,this.setIndex=h,this.render=f,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=y}function gM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,h){switch(n.calls++,d){case s.TRIANGLES:n.triangles+=h*(c/3);break;case s.LINES:n.lines+=h*(c/2);break;case s.LINE_STRIP:n.lines+=h*(c-1);break;case s.LINE_LOOP:n.lines+=h*c;break;case s.POINTS:n.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function _M(s,e,n){const r=new WeakMap,a=new Xt;function c(d,h,f){const m=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=v!==void 0?v.length:0;let x=r.get(h);if(x===void 0||x.count!==y){let P=function(){I.dispose(),r.delete(h),h.removeEventListener("dispose",P)};x!==void 0&&x.texture.dispose();const M=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],_=h.morphAttributes.normal||[],F=h.morphAttributes.color||[];let N=0;M===!0&&(N=1),w===!0&&(N=2),A===!0&&(N=3);let b=h.attributes.position.count*N,q=1;b>e.maxTextureSize&&(q=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const L=new Float32Array(b*q*4*y),I=new Ng(L,b,q,y);I.type=Xi,I.needsUpdate=!0;const z=N*4;for(let C=0;C<y;C++){const V=S[C],ne=_[C],Z=F[C],ae=b*q*4*C;for(let ge=0;ge<V.count;ge++){const oe=ge*z;M===!0&&(a.fromBufferAttribute(V,ge),L[ae+oe+0]=a.x,L[ae+oe+1]=a.y,L[ae+oe+2]=a.z,L[ae+oe+3]=0),w===!0&&(a.fromBufferAttribute(ne,ge),L[ae+oe+4]=a.x,L[ae+oe+5]=a.y,L[ae+oe+6]=a.z,L[ae+oe+7]=0),A===!0&&(a.fromBufferAttribute(Z,ge),L[ae+oe+8]=a.x,L[ae+oe+9]=a.y,L[ae+oe+10]=a.z,L[ae+oe+11]=Z.itemSize===4?a.w:1)}}x={count:y,texture:I,size:new dt(b,q)},r.set(h,x),h.addEventListener("dispose",P)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",d.morphTexture,n);else{let M=0;for(let A=0;A<m.length;A++)M+=m[A];const w=h.morphTargetsRelative?1:1-M;f.getUniforms().setValue(s,"morphTargetBaseInfluence",w),f.getUniforms().setValue(s,"morphTargetInfluences",m)}f.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),f.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function vM(s,e,n,r){let a=new WeakMap;function c(f){const m=r.render.frame,v=f.geometry,y=e.get(f,v);if(a.get(y)!==m&&(e.update(y),a.set(y,m)),f.isInstancedMesh&&(f.hasEventListener("dispose",h)===!1&&f.addEventListener("dispose",h),a.get(f)!==m&&(n.update(f.instanceMatrix,s.ARRAY_BUFFER),f.instanceColor!==null&&n.update(f.instanceColor,s.ARRAY_BUFFER),a.set(f,m))),f.isSkinnedMesh){const x=f.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return y}function d(){a=new WeakMap}function h(f){const m=f.target;m.removeEventListener("dispose",h),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:d}}class jg extends Bn{constructor(e,n,r,a,c,d,h,f,m,v=Ys){if(v!==Ys&&v!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===Ys&&(r=ts),r===void 0&&v===Js&&(r=Qs),super(null,a,c,d,h,f,v,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=h!==void 0?h:_i,this.minFilter=f!==void 0?f:_i,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Wg=new Bn,Nm=new jg(1,1),Xg=new Ng,Yg=new rx,qg=new Hg,Um=[],Im=[],Fm=new Float32Array(16),Om=new Float32Array(9),km=new Float32Array(4);function io(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let c=Um[a];if(c===void 0&&(c=new Float32Array(a),Um[a]=c),e!==0){r.toArray(c,0);for(let d=1,h=0;d!==e;++d)h+=n,s[d].toArray(c,h)}return c}function nn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function rn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Xl(s,e){let n=Im[e];n===void 0&&(n=new Int32Array(e),Im[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function xM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function yM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;s.uniform2fv(this.addr,e),rn(n,e)}}function SM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(nn(n,e))return;s.uniform3fv(this.addr,e),rn(n,e)}}function MM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;s.uniform4fv(this.addr,e),rn(n,e)}}function EM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(nn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,r))return;km.set(r),s.uniformMatrix2fv(this.addr,!1,km),rn(n,r)}}function TM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(nn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,r))return;Om.set(r),s.uniformMatrix3fv(this.addr,!1,Om),rn(n,r)}}function wM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(nn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,r))return;Fm.set(r),s.uniformMatrix4fv(this.addr,!1,Fm),rn(n,r)}}function AM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function CM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;s.uniform2iv(this.addr,e),rn(n,e)}}function RM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(nn(n,e))return;s.uniform3iv(this.addr,e),rn(n,e)}}function bM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;s.uniform4iv(this.addr,e),rn(n,e)}}function PM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function LM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;s.uniform2uiv(this.addr,e),rn(n,e)}}function DM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(nn(n,e))return;s.uniform3uiv(this.addr,e),rn(n,e)}}function NM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;s.uniform4uiv(this.addr,e),rn(n,e)}}function UM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let c;this.type===s.SAMPLER_2D_SHADOW?(Nm.compareFunction=Pg,c=Nm):c=Wg,n.setTexture2D(e||c,a)}function IM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||Yg,a)}function FM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||qg,a)}function OM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Xg,a)}function kM(s){switch(s){case 5126:return xM;case 35664:return yM;case 35665:return SM;case 35666:return MM;case 35674:return EM;case 35675:return TM;case 35676:return wM;case 5124:case 35670:return AM;case 35667:case 35671:return CM;case 35668:case 35672:return RM;case 35669:case 35673:return bM;case 5125:return PM;case 36294:return LM;case 36295:return DM;case 36296:return NM;case 35678:case 36198:case 36298:case 36306:case 35682:return UM;case 35679:case 36299:case 36307:return IM;case 35680:case 36300:case 36308:case 36293:return FM;case 36289:case 36303:case 36311:case 36292:return OM}}function zM(s,e){s.uniform1fv(this.addr,e)}function BM(s,e){const n=io(e,this.size,2);s.uniform2fv(this.addr,n)}function HM(s,e){const n=io(e,this.size,3);s.uniform3fv(this.addr,n)}function VM(s,e){const n=io(e,this.size,4);s.uniform4fv(this.addr,n)}function GM(s,e){const n=io(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function jM(s,e){const n=io(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function WM(s,e){const n=io(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function XM(s,e){s.uniform1iv(this.addr,e)}function YM(s,e){s.uniform2iv(this.addr,e)}function qM(s,e){s.uniform3iv(this.addr,e)}function $M(s,e){s.uniform4iv(this.addr,e)}function KM(s,e){s.uniform1uiv(this.addr,e)}function ZM(s,e){s.uniform2uiv(this.addr,e)}function QM(s,e){s.uniform3uiv(this.addr,e)}function JM(s,e){s.uniform4uiv(this.addr,e)}function eE(s,e,n){const r=this.cache,a=e.length,c=Xl(n,a);nn(r,c)||(s.uniform1iv(this.addr,c),rn(r,c));for(let d=0;d!==a;++d)n.setTexture2D(e[d]||Wg,c[d])}function tE(s,e,n){const r=this.cache,a=e.length,c=Xl(n,a);nn(r,c)||(s.uniform1iv(this.addr,c),rn(r,c));for(let d=0;d!==a;++d)n.setTexture3D(e[d]||Yg,c[d])}function nE(s,e,n){const r=this.cache,a=e.length,c=Xl(n,a);nn(r,c)||(s.uniform1iv(this.addr,c),rn(r,c));for(let d=0;d!==a;++d)n.setTextureCube(e[d]||qg,c[d])}function iE(s,e,n){const r=this.cache,a=e.length,c=Xl(n,a);nn(r,c)||(s.uniform1iv(this.addr,c),rn(r,c));for(let d=0;d!==a;++d)n.setTexture2DArray(e[d]||Xg,c[d])}function rE(s){switch(s){case 5126:return zM;case 35664:return BM;case 35665:return HM;case 35666:return VM;case 35674:return GM;case 35675:return jM;case 35676:return WM;case 5124:case 35670:return XM;case 35667:case 35671:return YM;case 35668:case 35672:return qM;case 35669:case 35673:return $M;case 5125:return KM;case 36294:return ZM;case 36295:return QM;case 36296:return JM;case 35678:case 36198:case 36298:case 36306:case 35682:return eE;case 35679:case 36299:case 36307:return tE;case 35680:case 36300:case 36308:case 36293:return nE;case 36289:case 36303:case 36311:case 36292:return iE}}class sE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=kM(n.type)}}class oE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=rE(n.type)}}class aE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let c=0,d=a.length;c!==d;++c){const h=a[c];h.setValue(e,n[h.id],r)}}}const sd=/(\w+)(\])?(\[|\.)?/g;function zm(s,e){s.seq.push(e),s.map[e.id]=e}function lE(s,e,n){const r=s.name,a=r.length;for(sd.lastIndex=0;;){const c=sd.exec(r),d=sd.lastIndex;let h=c[1];const f=c[2]==="]",m=c[3];if(f&&(h=h|0),m===void 0||m==="["&&d+2===a){zm(n,m===void 0?new sE(h,s,e):new oE(h,s,e));break}else{let y=n.map[h];y===void 0&&(y=new aE(h),zm(n,y)),n=y}}}class Fl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const c=e.getActiveUniform(n,a),d=e.getUniformLocation(n,c.name);lE(c,d,this)}}setValue(e,n,r,a){const c=this.map[n];c!==void 0&&c.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let c=0,d=n.length;c!==d;++c){const h=n[c],f=r[h.id];f.needsUpdate!==!1&&h.setValue(e,f.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,c=e.length;a!==c;++a){const d=e[a];d.id in n&&r.push(d)}return r}}function Bm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const cE=37297;let uE=0;function dE(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let d=a;d<c;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${n[d]}`)}return r.join(`
`)}const Hm=new ft;function hE(s){Et._getMatrix(Hm,Et.workingColorSpace,s);const e=`mat3( ${Hm.elements.map(n=>n.toFixed(4))} )`;switch(Et.getTransfer(s)){case Gl:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Vm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const d=parseInt(c[1]);return n.toUpperCase()+`

`+a+`

`+dE(s.getShaderSource(e),d)}else return a}function fE(s,e){const n=hE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function pE(s,e){let n;switch(e){case P0:n="Linear";break;case L0:n="Reinhard";break;case D0:n="Cineon";break;case N0:n="ACESFilmic";break;case I0:n="AgX";break;case F0:n="Neutral";break;case U0:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Tl=new K;function mE(){Et.getLuminanceCoefficients(Tl);const s=Tl.x.toFixed(4),e=Tl.y.toFixed(4),n=Tl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function _E(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function vE(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const c=s.getActiveAttrib(e,a),d=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),n[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:h}}return n}function Wo(s){return s!==""}function Gm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xE=/^[ \t]*#include +<([\w\d./]+)>/gm;function eh(s){return s.replace(xE,SE)}const yE=new Map;function SE(s,e){let n=gt[e];if(n===void 0){const r=yE.get(e);if(r!==void 0)n=gt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return eh(n)}const ME=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wm(s){return s.replace(ME,EE)}function EE(s,e,n,r){let a="";for(let c=parseInt(e);c<parseInt(n);c++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return a}function Xm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function TE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===mg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===gg?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ji&&(e="SHADOWMAP_TYPE_VSM"),e}function wE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ks:case Zs:e="ENVMAP_TYPE_CUBE";break;case Vl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function AE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Zs:e="ENVMAP_MODE_REFRACTION";break}return e}function CE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case _g:e="ENVMAP_BLENDING_MULTIPLY";break;case R0:e="ENVMAP_BLENDING_MIX";break;case b0:e="ENVMAP_BLENDING_ADD";break}return e}function RE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function bE(s,e,n,r){const a=s.getContext(),c=n.defines;let d=n.vertexShader,h=n.fragmentShader;const f=TE(n),m=wE(n),v=AE(n),y=CE(n),x=RE(n),M=gE(n),w=_E(c),A=a.createProgram();let S,_,F=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Wo).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Wo).join(`
`),_.length>0&&(_+=`
`)):(S=[Xm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+f:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),_=[Xm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",n.envMap?"#define "+y:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+f:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ar?"#define TONE_MAPPING":"",n.toneMapping!==Ar?gt.tonemapping_pars_fragment:"",n.toneMapping!==Ar?pE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,fE("linearToOutputTexel",n.outputColorSpace),mE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Wo).join(`
`)),d=eh(d),d=Gm(d,n),d=jm(d,n),h=eh(h),h=Gm(h,n),h=jm(h,n),d=Wm(d),h=Wm(h),n.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",n.glslVersion===sm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===sm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=F+S+d,b=F+_+h,q=Bm(a,a.VERTEX_SHADER,N),L=Bm(a,a.FRAGMENT_SHADER,b);a.attachShader(A,q),a.attachShader(A,L),n.index0AttributeName!==void 0?a.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(A,0,"position"),a.linkProgram(A);function I(V){if(s.debug.checkShaderErrors){const ne=a.getProgramInfoLog(A).trim(),Z=a.getShaderInfoLog(q).trim(),ae=a.getShaderInfoLog(L).trim();let ge=!0,oe=!0;if(a.getProgramParameter(A,a.LINK_STATUS)===!1)if(ge=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,A,q,L);else{const he=Vm(a,q,"vertex"),B=Vm(a,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(A,a.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ne+`
`+he+`
`+B)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(Z===""||ae==="")&&(oe=!1);oe&&(V.diagnostics={runnable:ge,programLog:ne,vertexShader:{log:Z,prefix:S},fragmentShader:{log:ae,prefix:_}})}a.deleteShader(q),a.deleteShader(L),z=new Fl(a,A),P=vE(a,A)}let z;this.getUniforms=function(){return z===void 0&&I(this),z};let P;this.getAttributes=function(){return P===void 0&&I(this),P};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(A,cE)),C},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=uE++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=q,this.fragmentShader=L,this}let PE=0;class LE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(a)===!1&&(d.add(a),a.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new DE(e),n.set(e,r)),r}}class DE{constructor(e){this.id=PE++,this.code=e,this.usedTimes=0}}function NE(s,e,n,r,a,c,d){const h=new Ug,f=new LE,m=new Set,v=[],y=a.logarithmicDepthBuffer,x=a.vertexTextures;let M=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(P){return m.add(P),P===0?"uv":`uv${P}`}function S(P,C,V,ne,Z){const ae=ne.fog,ge=Z.geometry,oe=P.isMeshStandardMaterial?ne.environment:null,he=(P.isMeshStandardMaterial?n:e).get(P.envMap||oe),B=he&&he.mapping===Vl?he.image.height:null,le=w[P.type];P.precision!==null&&(M=a.getMaxPrecision(P.precision),M!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",M,"instead."));const ue=ge.morphAttributes.position||ge.morphAttributes.normal||ge.morphAttributes.color,O=ue!==void 0?ue.length:0;let Q=0;ge.morphAttributes.position!==void 0&&(Q=1),ge.morphAttributes.normal!==void 0&&(Q=2),ge.morphAttributes.color!==void 0&&(Q=3);let Ne,J,fe,Ee;if(le){const at=Ti[le];Ne=at.vertexShader,J=at.fragmentShader}else Ne=P.vertexShader,J=P.fragmentShader,f.update(P),fe=f.getVertexShaderID(P),Ee=f.getFragmentShaderID(P);const Me=s.getRenderTarget(),Le=s.state.buffers.depth.getReversed(),ke=Z.isInstancedMesh===!0,Je=Z.isBatchedMesh===!0,Pt=!!P.map,pt=!!P.matcap,Dt=!!he,W=!!P.aoMap,dn=!!P.lightMap,lt=!!P.bumpMap,mt=!!P.normalMap,Ze=!!P.displacementMap,Ct=!!P.emissiveMap,qe=!!P.metalnessMap,D=!!P.roughnessMap,T=P.anisotropy>0,ee=P.clearcoat>0,_e=P.dispersion>0,xe=P.iridescence>0,pe=P.sheen>0,Fe=P.transmission>0,Ae=T&&!!P.anisotropyMap,Pe=ee&&!!P.clearcoatMap,ct=ee&&!!P.clearcoatNormalMap,we=ee&&!!P.clearcoatRoughnessMap,ze=xe&&!!P.iridescenceMap,de=xe&&!!P.iridescenceThicknessMap,$e=pe&&!!P.sheenColorMap,Be=pe&&!!P.sheenRoughnessMap,ht=!!P.specularMap,nt=!!P.specularColorMap,St=!!P.specularIntensityMap,j=Fe&&!!P.transmissionMap,De=Fe&&!!P.thicknessMap,ce=!!P.gradientMap,me=!!P.alphaMap,Ue=P.alphaTest>0,k=!!P.alphaHash,ve=!!P.extensions;let ot=Ar;P.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(ot=s.toneMapping);const Rt={shaderID:le,shaderType:P.type,shaderName:P.name,vertexShader:Ne,fragmentShader:J,defines:P.defines,customVertexShaderID:fe,customFragmentShaderID:Ee,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:M,batching:Je,batchingColor:Je&&Z._colorsTexture!==null,instancing:ke,instancingColor:ke&&Z.instanceColor!==null,instancingMorph:ke&&Z.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Me===null?s.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:to,alphaToCoverage:!!P.alphaToCoverage,map:Pt,matcap:pt,envMap:Dt,envMapMode:Dt&&he.mapping,envMapCubeUVHeight:B,aoMap:W,lightMap:dn,bumpMap:lt,normalMap:mt,displacementMap:x&&Ze,emissiveMap:Ct,normalMapObjectSpace:mt&&P.normalMapType===B0,normalMapTangentSpace:mt&&P.normalMapType===bg,metalnessMap:qe,roughnessMap:D,anisotropy:T,anisotropyMap:Ae,clearcoat:ee,clearcoatMap:Pe,clearcoatNormalMap:ct,clearcoatRoughnessMap:we,dispersion:_e,iridescence:xe,iridescenceMap:ze,iridescenceThicknessMap:de,sheen:pe,sheenColorMap:$e,sheenRoughnessMap:Be,specularMap:ht,specularColorMap:nt,specularIntensityMap:St,transmission:Fe,transmissionMap:j,thicknessMap:De,gradientMap:ce,opaque:P.transparent===!1&&P.blending===Xs&&P.alphaToCoverage===!1,alphaMap:me,alphaTest:Ue,alphaHash:k,combine:P.combine,mapUv:Pt&&A(P.map.channel),aoMapUv:W&&A(P.aoMap.channel),lightMapUv:dn&&A(P.lightMap.channel),bumpMapUv:lt&&A(P.bumpMap.channel),normalMapUv:mt&&A(P.normalMap.channel),displacementMapUv:Ze&&A(P.displacementMap.channel),emissiveMapUv:Ct&&A(P.emissiveMap.channel),metalnessMapUv:qe&&A(P.metalnessMap.channel),roughnessMapUv:D&&A(P.roughnessMap.channel),anisotropyMapUv:Ae&&A(P.anisotropyMap.channel),clearcoatMapUv:Pe&&A(P.clearcoatMap.channel),clearcoatNormalMapUv:ct&&A(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&A(P.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&A(P.iridescenceMap.channel),iridescenceThicknessMapUv:de&&A(P.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&A(P.sheenColorMap.channel),sheenRoughnessMapUv:Be&&A(P.sheenRoughnessMap.channel),specularMapUv:ht&&A(P.specularMap.channel),specularColorMapUv:nt&&A(P.specularColorMap.channel),specularIntensityMapUv:St&&A(P.specularIntensityMap.channel),transmissionMapUv:j&&A(P.transmissionMap.channel),thicknessMapUv:De&&A(P.thicknessMap.channel),alphaMapUv:me&&A(P.alphaMap.channel),vertexTangents:!!ge.attributes.tangent&&(mt||T),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!ge.attributes.color&&ge.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ge.attributes.uv&&(Pt||me),fog:!!ae,useFog:P.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:y,reverseDepthBuffer:Le,skinning:Z.isSkinnedMesh===!0,morphTargets:ge.morphAttributes.position!==void 0,morphNormals:ge.morphAttributes.normal!==void 0,morphColors:ge.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:Q,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:ot,decodeVideoTexture:Pt&&P.map.isVideoTexture===!0&&Et.getTransfer(P.map.colorSpace)===Ut,decodeVideoTextureEmissive:Ct&&P.emissiveMap.isVideoTexture===!0&&Et.getTransfer(P.emissiveMap.colorSpace)===Ut,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Wi,flipSided:P.side===zn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:ve&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&P.extensions.multiDraw===!0||Je)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Rt.vertexUv1s=m.has(1),Rt.vertexUv2s=m.has(2),Rt.vertexUv3s=m.has(3),m.clear(),Rt}function _(P){const C=[];if(P.shaderID?C.push(P.shaderID):(C.push(P.customVertexShaderID),C.push(P.customFragmentShaderID)),P.defines!==void 0)for(const V in P.defines)C.push(V),C.push(P.defines[V]);return P.isRawShaderMaterial===!1&&(F(C,P),N(C,P),C.push(s.outputColorSpace)),C.push(P.customProgramCacheKey),C.join()}function F(P,C){P.push(C.precision),P.push(C.outputColorSpace),P.push(C.envMapMode),P.push(C.envMapCubeUVHeight),P.push(C.mapUv),P.push(C.alphaMapUv),P.push(C.lightMapUv),P.push(C.aoMapUv),P.push(C.bumpMapUv),P.push(C.normalMapUv),P.push(C.displacementMapUv),P.push(C.emissiveMapUv),P.push(C.metalnessMapUv),P.push(C.roughnessMapUv),P.push(C.anisotropyMapUv),P.push(C.clearcoatMapUv),P.push(C.clearcoatNormalMapUv),P.push(C.clearcoatRoughnessMapUv),P.push(C.iridescenceMapUv),P.push(C.iridescenceThicknessMapUv),P.push(C.sheenColorMapUv),P.push(C.sheenRoughnessMapUv),P.push(C.specularMapUv),P.push(C.specularColorMapUv),P.push(C.specularIntensityMapUv),P.push(C.transmissionMapUv),P.push(C.thicknessMapUv),P.push(C.combine),P.push(C.fogExp2),P.push(C.sizeAttenuation),P.push(C.morphTargetsCount),P.push(C.morphAttributeCount),P.push(C.numDirLights),P.push(C.numPointLights),P.push(C.numSpotLights),P.push(C.numSpotLightMaps),P.push(C.numHemiLights),P.push(C.numRectAreaLights),P.push(C.numDirLightShadows),P.push(C.numPointLightShadows),P.push(C.numSpotLightShadows),P.push(C.numSpotLightShadowsWithMaps),P.push(C.numLightProbes),P.push(C.shadowMapType),P.push(C.toneMapping),P.push(C.numClippingPlanes),P.push(C.numClipIntersection),P.push(C.depthPacking)}function N(P,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),P.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reverseDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),P.push(h.mask)}function b(P){const C=w[P.type];let V;if(C){const ne=Ti[C];V=gx.clone(ne.uniforms)}else V=P.uniforms;return V}function q(P,C){let V;for(let ne=0,Z=v.length;ne<Z;ne++){const ae=v[ne];if(ae.cacheKey===C){V=ae,++V.usedTimes;break}}return V===void 0&&(V=new bE(s,C,P,c),v.push(V)),V}function L(P){if(--P.usedTimes===0){const C=v.indexOf(P);v[C]=v[v.length-1],v.pop(),P.destroy()}}function I(P){f.remove(P)}function z(){f.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:b,acquireProgram:q,releaseProgram:L,releaseShaderCache:I,programs:v,dispose:z}}function UE(){let s=new WeakMap;function e(d){return s.has(d)}function n(d){let h=s.get(d);return h===void 0&&(h={},s.set(d,h)),h}function r(d){s.delete(d)}function a(d,h,f){s.get(d)[h]=f}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:c}}function IE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ym(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function qm(){const s=[];let e=0;const n=[],r=[],a=[];function c(){e=0,n.length=0,r.length=0,a.length=0}function d(y,x,M,w,A,S){let _=s[e];return _===void 0?(_={id:y.id,object:y,geometry:x,material:M,groupOrder:w,renderOrder:y.renderOrder,z:A,group:S},s[e]=_):(_.id=y.id,_.object=y,_.geometry=x,_.material=M,_.groupOrder=w,_.renderOrder=y.renderOrder,_.z=A,_.group=S),e++,_}function h(y,x,M,w,A,S){const _=d(y,x,M,w,A,S);M.transmission>0?r.push(_):M.transparent===!0?a.push(_):n.push(_)}function f(y,x,M,w,A,S){const _=d(y,x,M,w,A,S);M.transmission>0?r.unshift(_):M.transparent===!0?a.unshift(_):n.unshift(_)}function m(y,x){n.length>1&&n.sort(y||IE),r.length>1&&r.sort(x||Ym),a.length>1&&a.sort(x||Ym)}function v(){for(let y=e,x=s.length;y<x;y++){const M=s[y];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:a,init:c,push:h,unshift:f,finish:v,sort:m}}function FE(){let s=new WeakMap;function e(r,a){const c=s.get(r);let d;return c===void 0?(d=new qm,s.set(r,[d])):a>=c.length?(d=new qm,c.push(d)):d=c[a],d}function n(){s=new WeakMap}return{get:e,dispose:n}}function OE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new K,color:new vt};break;case"SpotLight":n={position:new K,direction:new K,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new K,color:new vt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new K,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":n={color:new vt,position:new K,halfWidth:new K,halfHeight:new K};break}return s[e.id]=n,n}}}function kE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let zE=0;function BE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function HE(s){const e=new OE,n=kE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new K);const a=new K,c=new jt,d=new jt;function h(m){let v=0,y=0,x=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let M=0,w=0,A=0,S=0,_=0,F=0,N=0,b=0,q=0,L=0,I=0;m.sort(BE);for(let P=0,C=m.length;P<C;P++){const V=m[P],ne=V.color,Z=V.intensity,ae=V.distance,ge=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)v+=ne.r*Z,y+=ne.g*Z,x+=ne.b*Z;else if(V.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(V.sh.coefficients[oe],Z);I++}else if(V.isDirectionalLight){const oe=e.get(V);if(oe.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const he=V.shadow,B=n.get(V);B.shadowIntensity=he.intensity,B.shadowBias=he.bias,B.shadowNormalBias=he.normalBias,B.shadowRadius=he.radius,B.shadowMapSize=he.mapSize,r.directionalShadow[M]=B,r.directionalShadowMap[M]=ge,r.directionalShadowMatrix[M]=V.shadow.matrix,F++}r.directional[M]=oe,M++}else if(V.isSpotLight){const oe=e.get(V);oe.position.setFromMatrixPosition(V.matrixWorld),oe.color.copy(ne).multiplyScalar(Z),oe.distance=ae,oe.coneCos=Math.cos(V.angle),oe.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),oe.decay=V.decay,r.spot[A]=oe;const he=V.shadow;if(V.map&&(r.spotLightMap[q]=V.map,q++,he.updateMatrices(V),V.castShadow&&L++),r.spotLightMatrix[A]=he.matrix,V.castShadow){const B=n.get(V);B.shadowIntensity=he.intensity,B.shadowBias=he.bias,B.shadowNormalBias=he.normalBias,B.shadowRadius=he.radius,B.shadowMapSize=he.mapSize,r.spotShadow[A]=B,r.spotShadowMap[A]=ge,b++}A++}else if(V.isRectAreaLight){const oe=e.get(V);oe.color.copy(ne).multiplyScalar(Z),oe.halfWidth.set(V.width*.5,0,0),oe.halfHeight.set(0,V.height*.5,0),r.rectArea[S]=oe,S++}else if(V.isPointLight){const oe=e.get(V);if(oe.color.copy(V.color).multiplyScalar(V.intensity),oe.distance=V.distance,oe.decay=V.decay,V.castShadow){const he=V.shadow,B=n.get(V);B.shadowIntensity=he.intensity,B.shadowBias=he.bias,B.shadowNormalBias=he.normalBias,B.shadowRadius=he.radius,B.shadowMapSize=he.mapSize,B.shadowCameraNear=he.camera.near,B.shadowCameraFar=he.camera.far,r.pointShadow[w]=B,r.pointShadowMap[w]=ge,r.pointShadowMatrix[w]=V.shadow.matrix,N++}r.point[w]=oe,w++}else if(V.isHemisphereLight){const oe=e.get(V);oe.skyColor.copy(V.color).multiplyScalar(Z),oe.groundColor.copy(V.groundColor).multiplyScalar(Z),r.hemi[_]=oe,_++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_FLOAT_1,r.rectAreaLTC2=Ie.LTC_FLOAT_2):(r.rectAreaLTC1=Ie.LTC_HALF_1,r.rectAreaLTC2=Ie.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=y,r.ambient[2]=x;const z=r.hash;(z.directionalLength!==M||z.pointLength!==w||z.spotLength!==A||z.rectAreaLength!==S||z.hemiLength!==_||z.numDirectionalShadows!==F||z.numPointShadows!==N||z.numSpotShadows!==b||z.numSpotMaps!==q||z.numLightProbes!==I)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=S,r.point.length=w,r.hemi.length=_,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=F,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=b+q-L,r.spotLightMap.length=q,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=I,z.directionalLength=M,z.pointLength=w,z.spotLength=A,z.rectAreaLength=S,z.hemiLength=_,z.numDirectionalShadows=F,z.numPointShadows=N,z.numSpotShadows=b,z.numSpotMaps=q,z.numLightProbes=I,r.version=zE++)}function f(m,v){let y=0,x=0,M=0,w=0,A=0;const S=v.matrixWorldInverse;for(let _=0,F=m.length;_<F;_++){const N=m[_];if(N.isDirectionalLight){const b=r.directional[y];b.direction.setFromMatrixPosition(N.matrixWorld),a.setFromMatrixPosition(N.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(S),y++}else if(N.isSpotLight){const b=r.spot[M];b.position.setFromMatrixPosition(N.matrixWorld),b.position.applyMatrix4(S),b.direction.setFromMatrixPosition(N.matrixWorld),a.setFromMatrixPosition(N.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(S),M++}else if(N.isRectAreaLight){const b=r.rectArea[w];b.position.setFromMatrixPosition(N.matrixWorld),b.position.applyMatrix4(S),d.identity(),c.copy(N.matrixWorld),c.premultiply(S),d.extractRotation(c),b.halfWidth.set(N.width*.5,0,0),b.halfHeight.set(0,N.height*.5,0),b.halfWidth.applyMatrix4(d),b.halfHeight.applyMatrix4(d),w++}else if(N.isPointLight){const b=r.point[x];b.position.setFromMatrixPosition(N.matrixWorld),b.position.applyMatrix4(S),x++}else if(N.isHemisphereLight){const b=r.hemi[A];b.direction.setFromMatrixPosition(N.matrixWorld),b.direction.transformDirection(S),A++}}}return{setup:h,setupView:f,state:r}}function $m(s){const e=new HE(s),n=[],r=[];function a(v){m.camera=v,n.length=0,r.length=0}function c(v){n.push(v)}function d(v){r.push(v)}function h(){e.setup(n)}function f(v){e.setupView(n,v)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:h,setupLightsView:f,pushLight:c,pushShadow:d}}function VE(s){let e=new WeakMap;function n(a,c=0){const d=e.get(a);let h;return d===void 0?(h=new $m(s),e.set(a,[h])):c>=d.length?(h=new $m(s),d.push(h)):h=d[c],h}function r(){e=new WeakMap}return{get:n,dispose:r}}class GE extends no{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=k0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jE extends no{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const WE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function YE(s,e,n){let r=new dh;const a=new dt,c=new dt,d=new Xt,h=new GE({depthPacking:z0}),f=new jE,m={},v=n.maxTextureSize,y={[Rr]:zn,[zn]:Rr,[Wi]:Wi},x=new br({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:WE,fragmentShader:XE}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const w=new En;w.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new bn(w,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mg;let _=this.type;this.render=function(L,I,z){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||L.length===0)return;const P=s.getRenderTarget(),C=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),ne=s.state;ne.setBlending(wr),ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const Z=_!==ji&&this.type===ji,ae=_===ji&&this.type!==ji;for(let ge=0,oe=L.length;ge<oe;ge++){const he=L[ge],B=he.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const le=B.getFrameExtents();if(a.multiply(le),c.copy(B.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(c.x=Math.floor(v/le.x),a.x=c.x*le.x,B.mapSize.x=c.x),a.y>v&&(c.y=Math.floor(v/le.y),a.y=c.y*le.y,B.mapSize.y=c.y)),B.map===null||Z===!0||ae===!0){const O=this.type!==ji?{minFilter:_i,magFilter:_i}:{};B.map!==null&&B.map.dispose(),B.map=new ns(a.x,a.y,O),B.map.texture.name=he.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const ue=B.getViewportCount();for(let O=0;O<ue;O++){const Q=B.getViewport(O);d.set(c.x*Q.x,c.y*Q.y,c.x*Q.z,c.y*Q.w),ne.viewport(d),B.updateMatrices(he,O),r=B.getFrustum(),b(I,z,B.camera,he,this.type)}B.isPointLightShadow!==!0&&this.type===ji&&F(B,z),B.needsUpdate=!1}_=this.type,S.needsUpdate=!1,s.setRenderTarget(P,C,V)};function F(L,I){const z=e.update(A);x.defines.VSM_SAMPLES!==L.blurSamples&&(x.defines.VSM_SAMPLES=L.blurSamples,M.defines.VSM_SAMPLES=L.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new ns(a.x,a.y)),x.uniforms.shadow_pass.value=L.map.texture,x.uniforms.resolution.value=L.mapSize,x.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(I,null,z,x,A,null),M.uniforms.shadow_pass.value=L.mapPass.texture,M.uniforms.resolution.value=L.mapSize,M.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(I,null,z,M,A,null)}function N(L,I,z,P){let C=null;const V=z.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(V!==void 0)C=V;else if(C=z.isPointLight===!0?f:h,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const ne=C.uuid,Z=I.uuid;let ae=m[ne];ae===void 0&&(ae={},m[ne]=ae);let ge=ae[Z];ge===void 0&&(ge=C.clone(),ae[Z]=ge,I.addEventListener("dispose",q)),C=ge}if(C.visible=I.visible,C.wireframe=I.wireframe,P===ji?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:y[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,z.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ne=s.properties.get(C);ne.light=z}return C}function b(L,I,z,P,C){if(L.visible===!1)return;if(L.layers.test(I.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&C===ji)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,L.matrixWorld);const Z=e.update(L),ae=L.material;if(Array.isArray(ae)){const ge=Z.groups;for(let oe=0,he=ge.length;oe<he;oe++){const B=ge[oe],le=ae[B.materialIndex];if(le&&le.visible){const ue=N(L,le,P,C);L.onBeforeShadow(s,L,I,z,Z,ue,B),s.renderBufferDirect(z,null,Z,ue,L,B),L.onAfterShadow(s,L,I,z,Z,ue,B)}}}else if(ae.visible){const ge=N(L,ae,P,C);L.onBeforeShadow(s,L,I,z,Z,ge,null),s.renderBufferDirect(z,null,Z,ge,L,null),L.onAfterShadow(s,L,I,z,Z,ge,null)}}const ne=L.children;for(let Z=0,ae=ne.length;Z<ae;Z++)b(ne[Z],I,z,P,C)}function q(L){L.target.removeEventListener("dispose",q);for(const z in m){const P=m[z],C=L.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}const qE={[gd]:_d,[vd]:Sd,[xd]:Md,[$s]:yd,[_d]:gd,[Sd]:vd,[Md]:xd,[yd]:$s};function $E(s,e){function n(){let j=!1;const De=new Xt;let ce=null;const me=new Xt(0,0,0,0);return{setMask:function(Ue){ce!==Ue&&!j&&(s.colorMask(Ue,Ue,Ue,Ue),ce=Ue)},setLocked:function(Ue){j=Ue},setClear:function(Ue,k,ve,ot,Rt){Rt===!0&&(Ue*=ot,k*=ot,ve*=ot),De.set(Ue,k,ve,ot),me.equals(De)===!1&&(s.clearColor(Ue,k,ve,ot),me.copy(De))},reset:function(){j=!1,ce=null,me.set(-1,0,0,0)}}}function r(){let j=!1,De=!1,ce=null,me=null,Ue=null;return{setReversed:function(k){if(De!==k){const ve=e.get("EXT_clip_control");De?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT);const ot=Ue;Ue=null,this.setClear(ot)}De=k},getReversed:function(){return De},setTest:function(k){k?Me(s.DEPTH_TEST):Le(s.DEPTH_TEST)},setMask:function(k){ce!==k&&!j&&(s.depthMask(k),ce=k)},setFunc:function(k){if(De&&(k=qE[k]),me!==k){switch(k){case gd:s.depthFunc(s.NEVER);break;case _d:s.depthFunc(s.ALWAYS);break;case vd:s.depthFunc(s.LESS);break;case $s:s.depthFunc(s.LEQUAL);break;case xd:s.depthFunc(s.EQUAL);break;case yd:s.depthFunc(s.GEQUAL);break;case Sd:s.depthFunc(s.GREATER);break;case Md:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}me=k}},setLocked:function(k){j=k},setClear:function(k){Ue!==k&&(De&&(k=1-k),s.clearDepth(k),Ue=k)},reset:function(){j=!1,ce=null,me=null,Ue=null,De=!1}}}function a(){let j=!1,De=null,ce=null,me=null,Ue=null,k=null,ve=null,ot=null,Rt=null;return{setTest:function(at){j||(at?Me(s.STENCIL_TEST):Le(s.STENCIL_TEST))},setMask:function(at){De!==at&&!j&&(s.stencilMask(at),De=at)},setFunc:function(at,sn,qt){(ce!==at||me!==sn||Ue!==qt)&&(s.stencilFunc(at,sn,qt),ce=at,me=sn,Ue=qt)},setOp:function(at,sn,qt){(k!==at||ve!==sn||ot!==qt)&&(s.stencilOp(at,sn,qt),k=at,ve=sn,ot=qt)},setLocked:function(at){j=at},setClear:function(at){Rt!==at&&(s.clearStencil(at),Rt=at)},reset:function(){j=!1,De=null,ce=null,me=null,Ue=null,k=null,ve=null,ot=null,Rt=null}}}const c=new n,d=new r,h=new a,f=new WeakMap,m=new WeakMap;let v={},y={},x=new WeakMap,M=[],w=null,A=!1,S=null,_=null,F=null,N=null,b=null,q=null,L=null,I=new vt(0,0,0),z=0,P=!1,C=null,V=null,ne=null,Z=null,ae=null;const ge=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,he=0;const B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(B)[1]),oe=he>=1):B.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),oe=he>=2);let le=null,ue={};const O=s.getParameter(s.SCISSOR_BOX),Q=s.getParameter(s.VIEWPORT),Ne=new Xt().fromArray(O),J=new Xt().fromArray(Q);function fe(j,De,ce,me){const Ue=new Uint8Array(4),k=s.createTexture();s.bindTexture(j,k),s.texParameteri(j,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(j,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ve=0;ve<ce;ve++)j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?s.texImage3D(De,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,Ue):s.texImage2D(De+ve,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ue);return k}const Ee={};Ee[s.TEXTURE_2D]=fe(s.TEXTURE_2D,s.TEXTURE_2D,1),Ee[s.TEXTURE_CUBE_MAP]=fe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[s.TEXTURE_2D_ARRAY]=fe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ee[s.TEXTURE_3D]=fe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),Me(s.DEPTH_TEST),d.setFunc($s),lt(!1),mt(Jp),Me(s.CULL_FACE),W(wr);function Me(j){v[j]!==!0&&(s.enable(j),v[j]=!0)}function Le(j){v[j]!==!1&&(s.disable(j),v[j]=!1)}function ke(j,De){return y[j]!==De?(s.bindFramebuffer(j,De),y[j]=De,j===s.DRAW_FRAMEBUFFER&&(y[s.FRAMEBUFFER]=De),j===s.FRAMEBUFFER&&(y[s.DRAW_FRAMEBUFFER]=De),!0):!1}function Je(j,De){let ce=M,me=!1;if(j){ce=x.get(De),ce===void 0&&(ce=[],x.set(De,ce));const Ue=j.textures;if(ce.length!==Ue.length||ce[0]!==s.COLOR_ATTACHMENT0){for(let k=0,ve=Ue.length;k<ve;k++)ce[k]=s.COLOR_ATTACHMENT0+k;ce.length=Ue.length,me=!0}}else ce[0]!==s.BACK&&(ce[0]=s.BACK,me=!0);me&&s.drawBuffers(ce)}function Pt(j){return w!==j?(s.useProgram(j),w=j,!0):!1}const pt={[Zr]:s.FUNC_ADD,[d0]:s.FUNC_SUBTRACT,[h0]:s.FUNC_REVERSE_SUBTRACT};pt[f0]=s.MIN,pt[p0]=s.MAX;const Dt={[m0]:s.ZERO,[g0]:s.ONE,[_0]:s.SRC_COLOR,[pd]:s.SRC_ALPHA,[E0]:s.SRC_ALPHA_SATURATE,[S0]:s.DST_COLOR,[x0]:s.DST_ALPHA,[v0]:s.ONE_MINUS_SRC_COLOR,[md]:s.ONE_MINUS_SRC_ALPHA,[M0]:s.ONE_MINUS_DST_COLOR,[y0]:s.ONE_MINUS_DST_ALPHA,[T0]:s.CONSTANT_COLOR,[w0]:s.ONE_MINUS_CONSTANT_COLOR,[A0]:s.CONSTANT_ALPHA,[C0]:s.ONE_MINUS_CONSTANT_ALPHA};function W(j,De,ce,me,Ue,k,ve,ot,Rt,at){if(j===wr){A===!0&&(Le(s.BLEND),A=!1);return}if(A===!1&&(Me(s.BLEND),A=!0),j!==u0){if(j!==S||at!==P){if((_!==Zr||b!==Zr)&&(s.blendEquation(s.FUNC_ADD),_=Zr,b=Zr),at)switch(j){case Xs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case em:s.blendFunc(s.ONE,s.ONE);break;case tm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nm:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case Xs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case em:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case tm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nm:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}F=null,N=null,q=null,L=null,I.set(0,0,0),z=0,S=j,P=at}return}Ue=Ue||De,k=k||ce,ve=ve||me,(De!==_||Ue!==b)&&(s.blendEquationSeparate(pt[De],pt[Ue]),_=De,b=Ue),(ce!==F||me!==N||k!==q||ve!==L)&&(s.blendFuncSeparate(Dt[ce],Dt[me],Dt[k],Dt[ve]),F=ce,N=me,q=k,L=ve),(ot.equals(I)===!1||Rt!==z)&&(s.blendColor(ot.r,ot.g,ot.b,Rt),I.copy(ot),z=Rt),S=j,P=!1}function dn(j,De){j.side===Wi?Le(s.CULL_FACE):Me(s.CULL_FACE);let ce=j.side===zn;De&&(ce=!ce),lt(ce),j.blending===Xs&&j.transparent===!1?W(wr):W(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),d.setFunc(j.depthFunc),d.setTest(j.depthTest),d.setMask(j.depthWrite),c.setMask(j.colorWrite);const me=j.stencilWrite;h.setTest(me),me&&(h.setMask(j.stencilWriteMask),h.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),h.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Ct(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?Me(s.SAMPLE_ALPHA_TO_COVERAGE):Le(s.SAMPLE_ALPHA_TO_COVERAGE)}function lt(j){C!==j&&(j?s.frontFace(s.CW):s.frontFace(s.CCW),C=j)}function mt(j){j!==l0?(Me(s.CULL_FACE),j!==V&&(j===Jp?s.cullFace(s.BACK):j===c0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Le(s.CULL_FACE),V=j}function Ze(j){j!==ne&&(oe&&s.lineWidth(j),ne=j)}function Ct(j,De,ce){j?(Me(s.POLYGON_OFFSET_FILL),(Z!==De||ae!==ce)&&(s.polygonOffset(De,ce),Z=De,ae=ce)):Le(s.POLYGON_OFFSET_FILL)}function qe(j){j?Me(s.SCISSOR_TEST):Le(s.SCISSOR_TEST)}function D(j){j===void 0&&(j=s.TEXTURE0+ge-1),le!==j&&(s.activeTexture(j),le=j)}function T(j,De,ce){ce===void 0&&(le===null?ce=s.TEXTURE0+ge-1:ce=le);let me=ue[ce];me===void 0&&(me={type:void 0,texture:void 0},ue[ce]=me),(me.type!==j||me.texture!==De)&&(le!==ce&&(s.activeTexture(ce),le=ce),s.bindTexture(j,De||Ee[j]),me.type=j,me.texture=De)}function ee(){const j=ue[le];j!==void 0&&j.type!==void 0&&(s.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function _e(){try{s.compressedTexImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function xe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function pe(){try{s.texSubImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Fe(){try{s.texSubImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Pe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ct(){try{s.texStorage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function we(){try{s.texStorage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ze(){try{s.texImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function de(){try{s.texImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function $e(j){Ne.equals(j)===!1&&(s.scissor(j.x,j.y,j.z,j.w),Ne.copy(j))}function Be(j){J.equals(j)===!1&&(s.viewport(j.x,j.y,j.z,j.w),J.copy(j))}function ht(j,De){let ce=m.get(De);ce===void 0&&(ce=new WeakMap,m.set(De,ce));let me=ce.get(j);me===void 0&&(me=s.getUniformBlockIndex(De,j.name),ce.set(j,me))}function nt(j,De){const me=m.get(De).get(j);f.get(De)!==me&&(s.uniformBlockBinding(De,me,j.__bindingPointIndex),f.set(De,me))}function St(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},le=null,ue={},y={},x=new WeakMap,M=[],w=null,A=!1,S=null,_=null,F=null,N=null,b=null,q=null,L=null,I=new vt(0,0,0),z=0,P=!1,C=null,V=null,ne=null,Z=null,ae=null,Ne.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:Me,disable:Le,bindFramebuffer:ke,drawBuffers:Je,useProgram:Pt,setBlending:W,setMaterial:dn,setFlipSided:lt,setCullFace:mt,setLineWidth:Ze,setPolygonOffset:Ct,setScissorTest:qe,activeTexture:D,bindTexture:T,unbindTexture:ee,compressedTexImage2D:_e,compressedTexImage3D:xe,texImage2D:ze,texImage3D:de,updateUBOMapping:ht,uniformBlockBinding:nt,texStorage2D:ct,texStorage3D:we,texSubImage2D:pe,texSubImage3D:Fe,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Pe,scissor:$e,viewport:Be,reset:St}}function Km(s,e,n,r){const a=KE(r);switch(n){case Mg:return s*e;case Tg:return s*e;case wg:return s*e*2;case Ag:return s*e/a.components*a.byteLength;case ah:return s*e/a.components*a.byteLength;case Cg:return s*e*2/a.components*a.byteLength;case lh:return s*e*2/a.components*a.byteLength;case Eg:return s*e*3/a.components*a.byteLength;case gi:return s*e*4/a.components*a.byteLength;case ch:return s*e*4/a.components*a.byteLength;case Pl:case Ll:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Dl:case Nl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rd:case Pd:return Math.max(s,16)*Math.max(e,8)/4;case Cd:case bd:return Math.max(s,8)*Math.max(e,8)/2;case Ld:case Dd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Nd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ud:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Id:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Fd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Od:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case kd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case zd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Vd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case jd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Wd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Xd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Yd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ul:case qd:case $d:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Rg:case Kd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Zd:case Qd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function KE(s){switch(s){case $i:case xg:return{byteLength:1,components:1};case Yo:case yg:case $o:return{byteLength:2,components:1};case sh:case oh:return{byteLength:2,components:4};case ts:case rh:case Xi:return{byteLength:4,components:1};case Sg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function ZE(s,e,n,r,a,c,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new dt,v=new WeakMap;let y;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(D,T){return M?new OffscreenCanvas(D,T):kl("canvas")}function A(D,T,ee){let _e=1;const xe=qe(D);if((xe.width>ee||xe.height>ee)&&(_e=ee/Math.max(xe.width,xe.height)),_e<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const pe=Math.floor(_e*xe.width),Fe=Math.floor(_e*xe.height);y===void 0&&(y=w(pe,Fe));const Ae=T?w(pe,Fe):y;return Ae.width=pe,Ae.height=Fe,Ae.getContext("2d").drawImage(D,0,0,pe,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+pe+"x"+Fe+")."),Ae}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),D;return D}function S(D){return D.generateMipmaps}function _(D){s.generateMipmap(D)}function F(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(D,T,ee,_e,xe=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let pe=T;if(T===s.RED&&(ee===s.FLOAT&&(pe=s.R32F),ee===s.HALF_FLOAT&&(pe=s.R16F),ee===s.UNSIGNED_BYTE&&(pe=s.R8)),T===s.RED_INTEGER&&(ee===s.UNSIGNED_BYTE&&(pe=s.R8UI),ee===s.UNSIGNED_SHORT&&(pe=s.R16UI),ee===s.UNSIGNED_INT&&(pe=s.R32UI),ee===s.BYTE&&(pe=s.R8I),ee===s.SHORT&&(pe=s.R16I),ee===s.INT&&(pe=s.R32I)),T===s.RG&&(ee===s.FLOAT&&(pe=s.RG32F),ee===s.HALF_FLOAT&&(pe=s.RG16F),ee===s.UNSIGNED_BYTE&&(pe=s.RG8)),T===s.RG_INTEGER&&(ee===s.UNSIGNED_BYTE&&(pe=s.RG8UI),ee===s.UNSIGNED_SHORT&&(pe=s.RG16UI),ee===s.UNSIGNED_INT&&(pe=s.RG32UI),ee===s.BYTE&&(pe=s.RG8I),ee===s.SHORT&&(pe=s.RG16I),ee===s.INT&&(pe=s.RG32I)),T===s.RGB_INTEGER&&(ee===s.UNSIGNED_BYTE&&(pe=s.RGB8UI),ee===s.UNSIGNED_SHORT&&(pe=s.RGB16UI),ee===s.UNSIGNED_INT&&(pe=s.RGB32UI),ee===s.BYTE&&(pe=s.RGB8I),ee===s.SHORT&&(pe=s.RGB16I),ee===s.INT&&(pe=s.RGB32I)),T===s.RGBA_INTEGER&&(ee===s.UNSIGNED_BYTE&&(pe=s.RGBA8UI),ee===s.UNSIGNED_SHORT&&(pe=s.RGBA16UI),ee===s.UNSIGNED_INT&&(pe=s.RGBA32UI),ee===s.BYTE&&(pe=s.RGBA8I),ee===s.SHORT&&(pe=s.RGBA16I),ee===s.INT&&(pe=s.RGBA32I)),T===s.RGB&&ee===s.UNSIGNED_INT_5_9_9_9_REV&&(pe=s.RGB9_E5),T===s.RGBA){const Fe=xe?Gl:Et.getTransfer(_e);ee===s.FLOAT&&(pe=s.RGBA32F),ee===s.HALF_FLOAT&&(pe=s.RGBA16F),ee===s.UNSIGNED_BYTE&&(pe=Fe===Ut?s.SRGB8_ALPHA8:s.RGBA8),ee===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),ee===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function b(D,T){let ee;return D?T===null||T===ts||T===Qs?ee=s.DEPTH24_STENCIL8:T===Xi?ee=s.DEPTH32F_STENCIL8:T===Yo&&(ee=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ts||T===Qs?ee=s.DEPTH_COMPONENT24:T===Xi?ee=s.DEPTH_COMPONENT32F:T===Yo&&(ee=s.DEPTH_COMPONENT16),ee}function q(D,T){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==_i&&D.minFilter!==wi?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function L(D){const T=D.target;T.removeEventListener("dispose",L),z(T),T.isVideoTexture&&v.delete(T)}function I(D){const T=D.target;T.removeEventListener("dispose",I),C(T)}function z(D){const T=r.get(D);if(T.__webglInit===void 0)return;const ee=D.source,_e=x.get(ee);if(_e){const xe=_e[T.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&P(D),Object.keys(_e).length===0&&x.delete(ee)}r.remove(D)}function P(D){const T=r.get(D);s.deleteTexture(T.__webglTexture);const ee=D.source,_e=x.get(ee);delete _e[T.__cacheKey],d.memory.textures--}function C(D){const T=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(T.__webglFramebuffer[_e]))for(let xe=0;xe<T.__webglFramebuffer[_e].length;xe++)s.deleteFramebuffer(T.__webglFramebuffer[_e][xe]);else s.deleteFramebuffer(T.__webglFramebuffer[_e]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[_e])}else{if(Array.isArray(T.__webglFramebuffer))for(let _e=0;_e<T.__webglFramebuffer.length;_e++)s.deleteFramebuffer(T.__webglFramebuffer[_e]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let _e=0;_e<T.__webglColorRenderbuffer.length;_e++)T.__webglColorRenderbuffer[_e]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[_e]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const ee=D.textures;for(let _e=0,xe=ee.length;_e<xe;_e++){const pe=r.get(ee[_e]);pe.__webglTexture&&(s.deleteTexture(pe.__webglTexture),d.memory.textures--),r.remove(ee[_e])}r.remove(D)}let V=0;function ne(){V=0}function Z(){const D=V;return D>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+a.maxTextures),V+=1,D}function ae(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function ge(D,T){const ee=r.get(D);if(D.isVideoTexture&&Ze(D),D.isRenderTargetTexture===!1&&D.version>0&&ee.__version!==D.version){const _e=D.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(ee,D,T);return}}n.bindTexture(s.TEXTURE_2D,ee.__webglTexture,s.TEXTURE0+T)}function oe(D,T){const ee=r.get(D);if(D.version>0&&ee.__version!==D.version){J(ee,D,T);return}n.bindTexture(s.TEXTURE_2D_ARRAY,ee.__webglTexture,s.TEXTURE0+T)}function he(D,T){const ee=r.get(D);if(D.version>0&&ee.__version!==D.version){J(ee,D,T);return}n.bindTexture(s.TEXTURE_3D,ee.__webglTexture,s.TEXTURE0+T)}function B(D,T){const ee=r.get(D);if(D.version>0&&ee.__version!==D.version){fe(ee,D,T);return}n.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture,s.TEXTURE0+T)}const le={[wd]:s.REPEAT,[Jr]:s.CLAMP_TO_EDGE,[Ad]:s.MIRRORED_REPEAT},ue={[_i]:s.NEAREST,[O0]:s.NEAREST_MIPMAP_NEAREST,[rl]:s.NEAREST_MIPMAP_LINEAR,[wi]:s.LINEAR,[Du]:s.LINEAR_MIPMAP_NEAREST,[es]:s.LINEAR_MIPMAP_LINEAR},O={[H0]:s.NEVER,[Y0]:s.ALWAYS,[V0]:s.LESS,[Pg]:s.LEQUAL,[G0]:s.EQUAL,[X0]:s.GEQUAL,[j0]:s.GREATER,[W0]:s.NOTEQUAL};function Q(D,T){if(T.type===Xi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===wi||T.magFilter===Du||T.magFilter===rl||T.magFilter===es||T.minFilter===wi||T.minFilter===Du||T.minFilter===rl||T.minFilter===es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,le[T.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,le[T.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,le[T.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,ue[T.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,ue[T.minFilter]),T.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,O[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===_i||T.minFilter!==rl&&T.minFilter!==es||T.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Ne(D,T){let ee=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",L));const _e=T.source;let xe=x.get(_e);xe===void 0&&(xe={},x.set(_e,xe));const pe=ae(T);if(pe!==D.__cacheKey){xe[pe]===void 0&&(xe[pe]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,ee=!0),xe[pe].usedTimes++;const Fe=xe[D.__cacheKey];Fe!==void 0&&(xe[D.__cacheKey].usedTimes--,Fe.usedTimes===0&&P(T)),D.__cacheKey=pe,D.__webglTexture=xe[pe].texture}return ee}function J(D,T,ee){let _e=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(_e=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(_e=s.TEXTURE_3D);const xe=Ne(D,T),pe=T.source;n.bindTexture(_e,D.__webglTexture,s.TEXTURE0+ee);const Fe=r.get(pe);if(pe.version!==Fe.__version||xe===!0){n.activeTexture(s.TEXTURE0+ee);const Ae=Et.getPrimaries(Et.workingColorSpace),Pe=T.colorSpace===Tr?null:Et.getPrimaries(T.colorSpace),ct=T.colorSpace===Tr||Ae===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let we=A(T.image,!1,a.maxTextureSize);we=Ct(T,we);const ze=c.convert(T.format,T.colorSpace),de=c.convert(T.type);let $e=N(T.internalFormat,ze,de,T.colorSpace,T.isVideoTexture);Q(_e,T);let Be;const ht=T.mipmaps,nt=T.isVideoTexture!==!0,St=Fe.__version===void 0||xe===!0,j=pe.dataReady,De=q(T,we);if(T.isDepthTexture)$e=b(T.format===Js,T.type),St&&(nt?n.texStorage2D(s.TEXTURE_2D,1,$e,we.width,we.height):n.texImage2D(s.TEXTURE_2D,0,$e,we.width,we.height,0,ze,de,null));else if(T.isDataTexture)if(ht.length>0){nt&&St&&n.texStorage2D(s.TEXTURE_2D,De,$e,ht[0].width,ht[0].height);for(let ce=0,me=ht.length;ce<me;ce++)Be=ht[ce],nt?j&&n.texSubImage2D(s.TEXTURE_2D,ce,0,0,Be.width,Be.height,ze,de,Be.data):n.texImage2D(s.TEXTURE_2D,ce,$e,Be.width,Be.height,0,ze,de,Be.data);T.generateMipmaps=!1}else nt?(St&&n.texStorage2D(s.TEXTURE_2D,De,$e,we.width,we.height),j&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,we.width,we.height,ze,de,we.data)):n.texImage2D(s.TEXTURE_2D,0,$e,we.width,we.height,0,ze,de,we.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){nt&&St&&n.texStorage3D(s.TEXTURE_2D_ARRAY,De,$e,ht[0].width,ht[0].height,we.depth);for(let ce=0,me=ht.length;ce<me;ce++)if(Be=ht[ce],T.format!==gi)if(ze!==null)if(nt){if(j)if(T.layerUpdates.size>0){const Ue=Km(Be.width,Be.height,T.format,T.type);for(const k of T.layerUpdates){const ve=Be.data.subarray(k*Ue/Be.data.BYTES_PER_ELEMENT,(k+1)*Ue/Be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,k,Be.width,Be.height,1,ze,ve)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,0,Be.width,Be.height,we.depth,ze,Be.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ce,$e,Be.width,Be.height,we.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?j&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,0,Be.width,Be.height,we.depth,ze,de,Be.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ce,$e,Be.width,Be.height,we.depth,0,ze,de,Be.data)}else{nt&&St&&n.texStorage2D(s.TEXTURE_2D,De,$e,ht[0].width,ht[0].height);for(let ce=0,me=ht.length;ce<me;ce++)Be=ht[ce],T.format!==gi?ze!==null?nt?j&&n.compressedTexSubImage2D(s.TEXTURE_2D,ce,0,0,Be.width,Be.height,ze,Be.data):n.compressedTexImage2D(s.TEXTURE_2D,ce,$e,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?j&&n.texSubImage2D(s.TEXTURE_2D,ce,0,0,Be.width,Be.height,ze,de,Be.data):n.texImage2D(s.TEXTURE_2D,ce,$e,Be.width,Be.height,0,ze,de,Be.data)}else if(T.isDataArrayTexture)if(nt){if(St&&n.texStorage3D(s.TEXTURE_2D_ARRAY,De,$e,we.width,we.height,we.depth),j)if(T.layerUpdates.size>0){const ce=Km(we.width,we.height,T.format,T.type);for(const me of T.layerUpdates){const Ue=we.data.subarray(me*ce/we.data.BYTES_PER_ELEMENT,(me+1)*ce/we.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,we.width,we.height,1,ze,de,Ue)}T.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,ze,de,we.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,$e,we.width,we.height,we.depth,0,ze,de,we.data);else if(T.isData3DTexture)nt?(St&&n.texStorage3D(s.TEXTURE_3D,De,$e,we.width,we.height,we.depth),j&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,ze,de,we.data)):n.texImage3D(s.TEXTURE_3D,0,$e,we.width,we.height,we.depth,0,ze,de,we.data);else if(T.isFramebufferTexture){if(St)if(nt)n.texStorage2D(s.TEXTURE_2D,De,$e,we.width,we.height);else{let ce=we.width,me=we.height;for(let Ue=0;Ue<De;Ue++)n.texImage2D(s.TEXTURE_2D,Ue,$e,ce,me,0,ze,de,null),ce>>=1,me>>=1}}else if(ht.length>0){if(nt&&St){const ce=qe(ht[0]);n.texStorage2D(s.TEXTURE_2D,De,$e,ce.width,ce.height)}for(let ce=0,me=ht.length;ce<me;ce++)Be=ht[ce],nt?j&&n.texSubImage2D(s.TEXTURE_2D,ce,0,0,ze,de,Be):n.texImage2D(s.TEXTURE_2D,ce,$e,ze,de,Be);T.generateMipmaps=!1}else if(nt){if(St){const ce=qe(we);n.texStorage2D(s.TEXTURE_2D,De,$e,ce.width,ce.height)}j&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,ze,de,we)}else n.texImage2D(s.TEXTURE_2D,0,$e,ze,de,we);S(T)&&_(_e),Fe.__version=pe.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function fe(D,T,ee){if(T.image.length!==6)return;const _e=Ne(D,T),xe=T.source;n.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+ee);const pe=r.get(xe);if(xe.version!==pe.__version||_e===!0){n.activeTexture(s.TEXTURE0+ee);const Fe=Et.getPrimaries(Et.workingColorSpace),Ae=T.colorSpace===Tr?null:Et.getPrimaries(T.colorSpace),Pe=T.colorSpace===Tr||Fe===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const ct=T.isCompressedTexture||T.image[0].isCompressedTexture,we=T.image[0]&&T.image[0].isDataTexture,ze=[];for(let me=0;me<6;me++)!ct&&!we?ze[me]=A(T.image[me],!0,a.maxCubemapSize):ze[me]=we?T.image[me].image:T.image[me],ze[me]=Ct(T,ze[me]);const de=ze[0],$e=c.convert(T.format,T.colorSpace),Be=c.convert(T.type),ht=N(T.internalFormat,$e,Be,T.colorSpace),nt=T.isVideoTexture!==!0,St=pe.__version===void 0||_e===!0,j=xe.dataReady;let De=q(T,de);Q(s.TEXTURE_CUBE_MAP,T);let ce;if(ct){nt&&St&&n.texStorage2D(s.TEXTURE_CUBE_MAP,De,ht,de.width,de.height);for(let me=0;me<6;me++){ce=ze[me].mipmaps;for(let Ue=0;Ue<ce.length;Ue++){const k=ce[Ue];T.format!==gi?$e!==null?nt?j&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,0,0,k.width,k.height,$e,k.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,ht,k.width,k.height,0,k.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?j&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,0,0,k.width,k.height,$e,Be,k.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,ht,k.width,k.height,0,$e,Be,k.data)}}}else{if(ce=T.mipmaps,nt&&St){ce.length>0&&De++;const me=qe(ze[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,De,ht,me.width,me.height)}for(let me=0;me<6;me++)if(we){nt?j&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,ze[me].width,ze[me].height,$e,Be,ze[me].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ht,ze[me].width,ze[me].height,0,$e,Be,ze[me].data);for(let Ue=0;Ue<ce.length;Ue++){const ve=ce[Ue].image[me].image;nt?j&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,0,0,ve.width,ve.height,$e,Be,ve.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,ht,ve.width,ve.height,0,$e,Be,ve.data)}}else{nt?j&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,$e,Be,ze[me]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ht,$e,Be,ze[me]);for(let Ue=0;Ue<ce.length;Ue++){const k=ce[Ue];nt?j&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,0,0,$e,Be,k.image[me]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,ht,$e,Be,k.image[me])}}}S(T)&&_(s.TEXTURE_CUBE_MAP),pe.__version=xe.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Ee(D,T,ee,_e,xe,pe){const Fe=c.convert(ee.format,ee.colorSpace),Ae=c.convert(ee.type),Pe=N(ee.internalFormat,Fe,Ae,ee.colorSpace),ct=r.get(T),we=r.get(ee);if(we.__renderTarget=T,!ct.__hasExternalTextures){const ze=Math.max(1,T.width>>pe),de=Math.max(1,T.height>>pe);xe===s.TEXTURE_3D||xe===s.TEXTURE_2D_ARRAY?n.texImage3D(xe,pe,Pe,ze,de,T.depth,0,Fe,Ae,null):n.texImage2D(xe,pe,Pe,ze,de,0,Fe,Ae,null)}n.bindFramebuffer(s.FRAMEBUFFER,D),mt(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,xe,we.__webglTexture,0,lt(T)):(xe===s.TEXTURE_2D||xe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,_e,xe,we.__webglTexture,pe),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Me(D,T,ee){if(s.bindRenderbuffer(s.RENDERBUFFER,D),T.depthBuffer){const _e=T.depthTexture,xe=_e&&_e.isDepthTexture?_e.type:null,pe=b(T.stencilBuffer,xe),Fe=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=lt(T);mt(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,pe,T.width,T.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,pe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,pe,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Fe,s.RENDERBUFFER,D)}else{const _e=T.textures;for(let xe=0;xe<_e.length;xe++){const pe=_e[xe],Fe=c.convert(pe.format,pe.colorSpace),Ae=c.convert(pe.type),Pe=N(pe.internalFormat,Fe,Ae,pe.colorSpace),ct=lt(T);ee&&mt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,Pe,T.width,T.height):mt(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct,Pe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Pe,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Le(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _e=r.get(T.depthTexture);_e.__renderTarget=T,(!_e.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ge(T.depthTexture,0);const xe=_e.__webglTexture,pe=lt(T);if(T.depthTexture.format===Ys)mt(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0);else if(T.depthTexture.format===Js)mt(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function ke(D){const T=r.get(D),ee=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const _e=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),_e){const xe=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,_e.removeEventListener("dispose",xe)};_e.addEventListener("dispose",xe),T.__depthDisposeCallback=xe}T.__boundDepthTexture=_e}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");Le(T.__webglFramebuffer,D)}else if(ee){T.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[_e]),T.__webglDepthbuffer[_e]===void 0)T.__webglDepthbuffer[_e]=s.createRenderbuffer(),Me(T.__webglDepthbuffer[_e],D,!1);else{const xe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=T.__webglDepthbuffer[_e];s.bindRenderbuffer(s.RENDERBUFFER,pe),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,pe)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Me(T.__webglDepthbuffer,D,!1);else{const _e=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,xe),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,xe)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Je(D,T,ee){const _e=r.get(D);T!==void 0&&Ee(_e.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ee!==void 0&&ke(D)}function Pt(D){const T=D.texture,ee=r.get(D),_e=r.get(T);D.addEventListener("dispose",I);const xe=D.textures,pe=D.isWebGLCubeRenderTarget===!0,Fe=xe.length>1;if(Fe||(_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture()),_e.__version=T.version,d.memory.textures++),pe){ee.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0){ee.__webglFramebuffer[Ae]=[];for(let Pe=0;Pe<T.mipmaps.length;Pe++)ee.__webglFramebuffer[Ae][Pe]=s.createFramebuffer()}else ee.__webglFramebuffer[Ae]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Ae=0;Ae<T.mipmaps.length;Ae++)ee.__webglFramebuffer[Ae]=s.createFramebuffer()}else ee.__webglFramebuffer=s.createFramebuffer();if(Fe)for(let Ae=0,Pe=xe.length;Ae<Pe;Ae++){const ct=r.get(xe[Ae]);ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture(),d.memory.textures++)}if(D.samples>0&&mt(D)===!1){ee.__webglMultisampledFramebuffer=s.createFramebuffer(),ee.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Ae=0;Ae<xe.length;Ae++){const Pe=xe[Ae];ee.__webglColorRenderbuffer[Ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ee.__webglColorRenderbuffer[Ae]);const ct=c.convert(Pe.format,Pe.colorSpace),we=c.convert(Pe.type),ze=N(Pe.internalFormat,ct,we,Pe.colorSpace,D.isXRRenderTarget===!0),de=lt(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,de,ze,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,ee.__webglColorRenderbuffer[Ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(ee.__webglDepthRenderbuffer=s.createRenderbuffer(),Me(ee.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pe){n.bindTexture(s.TEXTURE_CUBE_MAP,_e.__webglTexture),Q(s.TEXTURE_CUBE_MAP,T);for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0)for(let Pe=0;Pe<T.mipmaps.length;Pe++)Ee(ee.__webglFramebuffer[Ae][Pe],D,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Pe);else Ee(ee.__webglFramebuffer[Ae],D,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);S(T)&&_(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Fe){for(let Ae=0,Pe=xe.length;Ae<Pe;Ae++){const ct=xe[Ae],we=r.get(ct);n.bindTexture(s.TEXTURE_2D,we.__webglTexture),Q(s.TEXTURE_2D,ct),Ee(ee.__webglFramebuffer,D,ct,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,0),S(ct)&&_(s.TEXTURE_2D)}n.unbindTexture()}else{let Ae=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ae=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ae,_e.__webglTexture),Q(Ae,T),T.mipmaps&&T.mipmaps.length>0)for(let Pe=0;Pe<T.mipmaps.length;Pe++)Ee(ee.__webglFramebuffer[Pe],D,T,s.COLOR_ATTACHMENT0,Ae,Pe);else Ee(ee.__webglFramebuffer,D,T,s.COLOR_ATTACHMENT0,Ae,0);S(T)&&_(Ae),n.unbindTexture()}D.depthBuffer&&ke(D)}function pt(D){const T=D.textures;for(let ee=0,_e=T.length;ee<_e;ee++){const xe=T[ee];if(S(xe)){const pe=F(D),Fe=r.get(xe).__webglTexture;n.bindTexture(pe,Fe),_(pe),n.unbindTexture()}}}const Dt=[],W=[];function dn(D){if(D.samples>0){if(mt(D)===!1){const T=D.textures,ee=D.width,_e=D.height;let xe=s.COLOR_BUFFER_BIT;const pe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Fe=r.get(D),Ae=T.length>1;if(Ae)for(let Pe=0;Pe<T.length;Pe++)n.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Pe=0;Pe<T.length;Pe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(xe|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(xe|=s.STENCIL_BUFFER_BIT)),Ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Fe.__webglColorRenderbuffer[Pe]);const ct=r.get(T[Pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ct,0)}s.blitFramebuffer(0,0,ee,_e,0,0,ee,_e,xe,s.NEAREST),f===!0&&(Dt.length=0,W.length=0,Dt.push(s.COLOR_ATTACHMENT0+Pe),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Dt.push(pe),W.push(pe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,W)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Dt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ae)for(let Pe=0;Pe<T.length;Pe++){n.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,Fe.__webglColorRenderbuffer[Pe]);const ct=r.get(T[Pe]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,ct,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&f){const T=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function lt(D){return Math.min(a.maxSamples,D.samples)}function mt(D){const T=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ze(D){const T=d.render.frame;v.get(D)!==T&&(v.set(D,T),D.update())}function Ct(D,T){const ee=D.colorSpace,_e=D.format,xe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||ee!==to&&ee!==Tr&&(Et.getTransfer(ee)===Ut?(_e!==gi||xe!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),T}function qe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(m.width=D.naturalWidth||D.width,m.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(m.width=D.displayWidth,m.height=D.displayHeight):(m.width=D.width,m.height=D.height),m}this.allocateTextureUnit=Z,this.resetTextureUnits=ne,this.setTexture2D=ge,this.setTexture2DArray=oe,this.setTexture3D=he,this.setTextureCube=B,this.rebindTextures=Je,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=dn,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=mt}function QE(s,e){function n(r,a=Tr){let c;const d=Et.getTransfer(a);if(r===$i)return s.UNSIGNED_BYTE;if(r===sh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===oh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Sg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===xg)return s.BYTE;if(r===yg)return s.SHORT;if(r===Yo)return s.UNSIGNED_SHORT;if(r===rh)return s.INT;if(r===ts)return s.UNSIGNED_INT;if(r===Xi)return s.FLOAT;if(r===$o)return s.HALF_FLOAT;if(r===Mg)return s.ALPHA;if(r===Eg)return s.RGB;if(r===gi)return s.RGBA;if(r===Tg)return s.LUMINANCE;if(r===wg)return s.LUMINANCE_ALPHA;if(r===Ys)return s.DEPTH_COMPONENT;if(r===Js)return s.DEPTH_STENCIL;if(r===Ag)return s.RED;if(r===ah)return s.RED_INTEGER;if(r===Cg)return s.RG;if(r===lh)return s.RG_INTEGER;if(r===ch)return s.RGBA_INTEGER;if(r===Pl||r===Ll||r===Dl||r===Nl)if(d===Ut)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Pl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ll)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Dl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Nl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Pl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ll)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Dl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Nl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Cd||r===Rd||r===bd||r===Pd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Cd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Rd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===bd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Pd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ld||r===Dd||r===Nd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Ld||r===Dd)return d===Ut?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Nd)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ud||r===Id||r===Fd||r===Od||r===kd||r===zd||r===Bd||r===Hd||r===Vd||r===Gd||r===jd||r===Wd||r===Xd||r===Yd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Ud)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Id)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Fd)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Od)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===kd)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===zd)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Bd)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Hd)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Vd)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Gd)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===jd)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Wd)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Xd)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Yd)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ul||r===qd||r===$d)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Ul)return d===Ut?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===qd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===$d)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Rg||r===Kd||r===Zd||r===Qd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Ul)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Kd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Zd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Qd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class JE extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xo extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const e1={type:"move"};class od{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,c=null,d=null;const h=this._targetRay,f=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const A of e.hand.values()){const S=n.getJointPose(A,r),_=this._getHandJoint(m,A);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const v=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],x=v.position.distanceTo(y.position),M=.02,w=.005;m.inputState.pinching&&x>M+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=M-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(f.matrix.fromArray(c.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,c.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(c.linearVelocity)):f.hasLinearVelocity=!1,c.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(c.angularVelocity)):f.hasAngularVelocity=!1));h!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&c!==null&&(a=c),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(e1)))}return h!==null&&(h.visible=a!==null),f!==null&&(f.visible=c!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Xo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const t1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class i1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Bn,c=e.properties.get(a);c.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new br({vertexShader:t1,fragmentShader:n1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new bn(new Wl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class r1 extends rs{constructor(e,n){super();const r=this;let a=null,c=1,d=null,h="local-floor",f=1,m=null,v=null,y=null,x=null,M=null,w=null;const A=new i1,S=n.getContextAttributes();let _=null,F=null;const N=[],b=[],q=new dt;let L=null;const I=new ii;I.viewport=new Xt;const z=new ii;z.viewport=new Xt;const P=[I,z],C=new JE;let V=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let fe=N[J];return fe===void 0&&(fe=new od,N[J]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(J){let fe=N[J];return fe===void 0&&(fe=new od,N[J]=fe),fe.getGripSpace()},this.getHand=function(J){let fe=N[J];return fe===void 0&&(fe=new od,N[J]=fe),fe.getHandSpace()};function Z(J){const fe=b.indexOf(J.inputSource);if(fe===-1)return;const Ee=N[fe];Ee!==void 0&&(Ee.update(J.inputSource,J.frame,m||d),Ee.dispatchEvent({type:J.type,data:J.inputSource}))}function ae(){a.removeEventListener("select",Z),a.removeEventListener("selectstart",Z),a.removeEventListener("selectend",Z),a.removeEventListener("squeeze",Z),a.removeEventListener("squeezestart",Z),a.removeEventListener("squeezeend",Z),a.removeEventListener("end",ae),a.removeEventListener("inputsourceschange",ge);for(let J=0;J<N.length;J++){const fe=b[J];fe!==null&&(b[J]=null,N[J].disconnect(fe))}V=null,ne=null,A.reset(),e.setRenderTarget(_),M=null,x=null,y=null,a=null,F=null,Ne.stop(),r.isPresenting=!1,e.setPixelRatio(L),e.setSize(q.width,q.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){c=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){h=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(J){m=J},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return y},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(J){if(a=J,a!==null){if(_=e.getRenderTarget(),a.addEventListener("select",Z),a.addEventListener("selectstart",Z),a.addEventListener("selectend",Z),a.addEventListener("squeeze",Z),a.addEventListener("squeezestart",Z),a.addEventListener("squeezeend",Z),a.addEventListener("end",ae),a.addEventListener("inputsourceschange",ge),S.xrCompatible!==!0&&await n.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(q),a.renderState.layers===void 0){const fe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(a,n,fe),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),F=new ns(M.framebufferWidth,M.framebufferHeight,{format:gi,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let fe=null,Ee=null,Me=null;S.depth&&(Me=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,fe=S.stencil?Js:Ys,Ee=S.stencil?Qs:ts);const Le={colorFormat:n.RGBA8,depthFormat:Me,scaleFactor:c};y=new XRWebGLBinding(a,n),x=y.createProjectionLayer(Le),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),F=new ns(x.textureWidth,x.textureHeight,{format:gi,type:$i,depthTexture:new jg(x.textureWidth,x.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(f),m=null,d=await a.requestReferenceSpace(h),Ne.setContext(a),Ne.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function ge(J){for(let fe=0;fe<J.removed.length;fe++){const Ee=J.removed[fe],Me=b.indexOf(Ee);Me>=0&&(b[Me]=null,N[Me].disconnect(Ee))}for(let fe=0;fe<J.added.length;fe++){const Ee=J.added[fe];let Me=b.indexOf(Ee);if(Me===-1){for(let ke=0;ke<N.length;ke++)if(ke>=b.length){b.push(Ee),Me=ke;break}else if(b[ke]===null){b[ke]=Ee,Me=ke;break}if(Me===-1)break}const Le=N[Me];Le&&Le.connect(Ee)}}const oe=new K,he=new K;function B(J,fe,Ee){oe.setFromMatrixPosition(fe.matrixWorld),he.setFromMatrixPosition(Ee.matrixWorld);const Me=oe.distanceTo(he),Le=fe.projectionMatrix.elements,ke=Ee.projectionMatrix.elements,Je=Le[14]/(Le[10]-1),Pt=Le[14]/(Le[10]+1),pt=(Le[9]+1)/Le[5],Dt=(Le[9]-1)/Le[5],W=(Le[8]-1)/Le[0],dn=(ke[8]+1)/ke[0],lt=Je*W,mt=Je*dn,Ze=Me/(-W+dn),Ct=Ze*-W;if(fe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ct),J.translateZ(Ze),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Le[10]===-1)J.projectionMatrix.copy(fe.projectionMatrix),J.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const qe=Je+Ze,D=Pt+Ze,T=lt-Ct,ee=mt+(Me-Ct),_e=pt*Pt/D*qe,xe=Dt*Pt/D*qe;J.projectionMatrix.makePerspective(T,ee,_e,xe,qe,D),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function le(J,fe){fe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(fe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(a===null)return;let fe=J.near,Ee=J.far;A.texture!==null&&(A.depthNear>0&&(fe=A.depthNear),A.depthFar>0&&(Ee=A.depthFar)),C.near=z.near=I.near=fe,C.far=z.far=I.far=Ee,(V!==C.near||ne!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),V=C.near,ne=C.far),I.layers.mask=J.layers.mask|2,z.layers.mask=J.layers.mask|4,C.layers.mask=I.layers.mask|z.layers.mask;const Me=J.parent,Le=C.cameras;le(C,Me);for(let ke=0;ke<Le.length;ke++)le(Le[ke],Me);Le.length===2?B(C,I,z):C.projectionMatrix.copy(I.projectionMatrix),ue(J,C,Me)};function ue(J,fe,Ee){Ee===null?J.matrix.copy(fe.matrixWorld):(J.matrix.copy(Ee.matrixWorld),J.matrix.invert(),J.matrix.multiply(fe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(fe.projectionMatrix),J.projectionMatrixInverse.copy(fe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Jd*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&M===null))return f},this.setFoveation=function(J){f=J,x!==null&&(x.fixedFoveation=J),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=J)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(C)};let O=null;function Q(J,fe){if(v=fe.getViewerPose(m||d),w=fe,v!==null){const Ee=v.views;M!==null&&(e.setRenderTargetFramebuffer(F,M.framebuffer),e.setRenderTarget(F));let Me=!1;Ee.length!==C.cameras.length&&(C.cameras.length=0,Me=!0);for(let ke=0;ke<Ee.length;ke++){const Je=Ee[ke];let Pt=null;if(M!==null)Pt=M.getViewport(Je);else{const Dt=y.getViewSubImage(x,Je);Pt=Dt.viewport,ke===0&&(e.setRenderTargetTextures(F,Dt.colorTexture,x.ignoreDepthValues?void 0:Dt.depthStencilTexture),e.setRenderTarget(F))}let pt=P[ke];pt===void 0&&(pt=new ii,pt.layers.enable(ke),pt.viewport=new Xt,P[ke]=pt),pt.matrix.fromArray(Je.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Je.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),ke===0&&(C.matrix.copy(pt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Me===!0&&C.cameras.push(pt)}const Le=a.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const ke=y.getDepthInformation(Ee[0]);ke&&ke.isValid&&ke.texture&&A.init(e,ke,a.renderState)}}for(let Ee=0;Ee<N.length;Ee++){const Me=b[Ee],Le=N[Ee];Me!==null&&Le!==void 0&&Le.update(Me,fe,m||d)}O&&O(J,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),w=null}const Ne=new Vg;Ne.setAnimationLoop(Q),this.setAnimationLoop=function(J){O=J},this.dispose=function(){}}}const $r=new Ci,s1=new jt;function o1(s,e){function n(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,zg(s)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function a(S,_,F,N,b){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(S,_):_.isMeshToonMaterial?(c(S,_),y(S,_)):_.isMeshPhongMaterial?(c(S,_),v(S,_)):_.isMeshStandardMaterial?(c(S,_),x(S,_),_.isMeshPhysicalMaterial&&M(S,_,b)):_.isMeshMatcapMaterial?(c(S,_),w(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),A(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(d(S,_),_.isLineDashedMaterial&&h(S,_)):_.isPointsMaterial?f(S,_,F,N):_.isSpriteMaterial?m(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,n(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,n(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===zn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,n(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===zn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,n(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,n(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const F=e.get(_),N=F.envMap,b=F.envMapRotation;N&&(S.envMap.value=N,$r.copy(b),$r.x*=-1,$r.y*=-1,$r.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),S.envMapRotation.value.setFromMatrix4(s1.makeRotationFromEuler($r)),S.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,S.aoMapTransform))}function d(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,n(_.map,S.mapTransform))}function h(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function f(S,_,F,N){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*F,S.scale.value=N*.5,_.map&&(S.map.value=_.map,n(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function m(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,n(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function v(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function y(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function x(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function M(S,_,F){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===zn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=F.texture,S.transmissionSamplerSize.value.set(F.width,F.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,S.specularIntensityMapTransform))}function w(S,_){_.matcap&&(S.matcap.value=_.matcap)}function A(S,_){const F=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(F.matrixWorld),S.nearDistance.value=F.shadow.camera.near,S.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function a1(s,e,n,r){let a={},c={},d=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function f(F,N){const b=N.program;r.uniformBlockBinding(F,b)}function m(F,N){let b=a[F.id];b===void 0&&(w(F),b=v(F),a[F.id]=b,F.addEventListener("dispose",S));const q=N.program;r.updateUBOMapping(F,q);const L=e.render.frame;c[F.id]!==L&&(x(F),c[F.id]=L)}function v(F){const N=y();F.__bindingPointIndex=N;const b=s.createBuffer(),q=F.__size,L=F.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,q,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,b),b}function y(){for(let F=0;F<h;F++)if(d.indexOf(F)===-1)return d.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(F){const N=a[F.id],b=F.uniforms,q=F.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let L=0,I=b.length;L<I;L++){const z=Array.isArray(b[L])?b[L]:[b[L]];for(let P=0,C=z.length;P<C;P++){const V=z[P];if(M(V,L,P,q)===!0){const ne=V.__offset,Z=Array.isArray(V.value)?V.value:[V.value];let ae=0;for(let ge=0;ge<Z.length;ge++){const oe=Z[ge],he=A(oe);typeof oe=="number"||typeof oe=="boolean"?(V.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,ne+ae,V.__data)):oe.isMatrix3?(V.__data[0]=oe.elements[0],V.__data[1]=oe.elements[1],V.__data[2]=oe.elements[2],V.__data[3]=0,V.__data[4]=oe.elements[3],V.__data[5]=oe.elements[4],V.__data[6]=oe.elements[5],V.__data[7]=0,V.__data[8]=oe.elements[6],V.__data[9]=oe.elements[7],V.__data[10]=oe.elements[8],V.__data[11]=0):(oe.toArray(V.__data,ae),ae+=he.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ne,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(F,N,b,q){const L=F.value,I=N+"_"+b;if(q[I]===void 0)return typeof L=="number"||typeof L=="boolean"?q[I]=L:q[I]=L.clone(),!0;{const z=q[I];if(typeof L=="number"||typeof L=="boolean"){if(z!==L)return q[I]=L,!0}else if(z.equals(L)===!1)return z.copy(L),!0}return!1}function w(F){const N=F.uniforms;let b=0;const q=16;for(let I=0,z=N.length;I<z;I++){const P=Array.isArray(N[I])?N[I]:[N[I]];for(let C=0,V=P.length;C<V;C++){const ne=P[C],Z=Array.isArray(ne.value)?ne.value:[ne.value];for(let ae=0,ge=Z.length;ae<ge;ae++){const oe=Z[ae],he=A(oe),B=b%q,le=B%he.boundary,ue=B+le;b+=le,ue!==0&&q-ue<he.storage&&(b+=q-ue),ne.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=b,b+=he.storage}}}const L=b%q;return L>0&&(b+=q-L),F.__size=b,F.__cache={},this}function A(F){const N={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(N.boundary=4,N.storage=4):F.isVector2?(N.boundary=8,N.storage=8):F.isVector3||F.isColor?(N.boundary=16,N.storage=12):F.isVector4?(N.boundary=16,N.storage=16):F.isMatrix3?(N.boundary=48,N.storage=48):F.isMatrix4?(N.boundary=64,N.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),N}function S(F){const N=F.target;N.removeEventListener("dispose",S);const b=d.indexOf(N.__bindingPointIndex);d.splice(b,1),s.deleteBuffer(a[N.id]),delete a[N.id],delete c[N.id]}function _(){for(const F in a)s.deleteBuffer(a[F]);d=[],a={},c={}}return{bind:f,update:m,dispose:_}}class l1{constructor(e={}){const{canvas:n=K0(),context:r=null,depth:a=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:y=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const w=new Uint32Array(4),A=new Int32Array(4);let S=null,_=null;const F=[],N=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ni,this.toneMapping=Ar,this.toneMappingExposure=1;const b=this;let q=!1,L=0,I=0,z=null,P=-1,C=null;const V=new Xt,ne=new Xt;let Z=null;const ae=new vt(0);let ge=0,oe=n.width,he=n.height,B=1,le=null,ue=null;const O=new Xt(0,0,oe,he),Q=new Xt(0,0,oe,he);let Ne=!1;const J=new dh;let fe=!1,Ee=!1;const Me=new jt,Le=new jt,ke=new K,Je=new Xt,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function Dt(){return z===null?B:1}let W=r;function dn(R,X){return n.getContext(R,X)}try{const R={alpha:!0,depth:a,stencil:c,antialias:h,premultipliedAlpha:f,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:y};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ih}`),n.addEventListener("webglcontextlost",me,!1),n.addEventListener("webglcontextrestored",Ue,!1),n.addEventListener("webglcontextcreationerror",k,!1),W===null){const X="webgl2";if(W=dn(X,R),W===null)throw dn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let lt,mt,Ze,Ct,qe,D,T,ee,_e,xe,pe,Fe,Ae,Pe,ct,we,ze,de,$e,Be,ht,nt,St,j;function De(){lt=new fM(W),lt.init(),nt=new QE(W,lt),mt=new aM(W,lt,e,nt),Ze=new $E(W,lt),mt.reverseDepthBuffer&&x&&Ze.buffers.depth.setReversed(!0),Ct=new gM(W),qe=new UE,D=new ZE(W,lt,Ze,qe,mt,nt,Ct),T=new cM(b),ee=new hM(b),_e=new Ex(W),St=new sM(W,_e),xe=new pM(W,_e,Ct,St),pe=new vM(W,xe,_e,Ct),$e=new _M(W,mt,D),we=new lM(qe),Fe=new NE(b,T,ee,lt,mt,St,we),Ae=new o1(b,qe),Pe=new FE,ct=new VE(lt),de=new rM(b,T,ee,Ze,pe,M,f),ze=new YE(b,pe,mt),j=new a1(W,Ct,mt,Ze),Be=new oM(W,lt,Ct),ht=new mM(W,lt,Ct),Ct.programs=Fe.programs,b.capabilities=mt,b.extensions=lt,b.properties=qe,b.renderLists=Pe,b.shadowMap=ze,b.state=Ze,b.info=Ct}De();const ce=new r1(b,W);this.xr=ce,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const R=lt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=lt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(R){R!==void 0&&(B=R,this.setSize(oe,he,!1))},this.getSize=function(R){return R.set(oe,he)},this.setSize=function(R,X,re=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=R,he=X,n.width=Math.floor(R*B),n.height=Math.floor(X*B),re===!0&&(n.style.width=R+"px",n.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(oe*B,he*B).floor()},this.setDrawingBufferSize=function(R,X,re){oe=R,he=X,B=re,n.width=Math.floor(R*re),n.height=Math.floor(X*re),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(V)},this.getViewport=function(R){return R.copy(O)},this.setViewport=function(R,X,re,se){R.isVector4?O.set(R.x,R.y,R.z,R.w):O.set(R,X,re,se),Ze.viewport(V.copy(O).multiplyScalar(B).round())},this.getScissor=function(R){return R.copy(Q)},this.setScissor=function(R,X,re,se){R.isVector4?Q.set(R.x,R.y,R.z,R.w):Q.set(R,X,re,se),Ze.scissor(ne.copy(Q).multiplyScalar(B).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(R){Ze.setScissorTest(Ne=R)},this.setOpaqueSort=function(R){le=R},this.setTransparentSort=function(R){ue=R},this.getClearColor=function(R){return R.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(R=!0,X=!0,re=!0){let se=0;if(R){let Y=!1;if(z!==null){const be=z.texture.format;Y=be===ch||be===lh||be===ah}if(Y){const be=z.texture.type,Ce=be===$i||be===ts||be===Yo||be===Qs||be===sh||be===oh,We=de.getClearColor(),Ge=de.getClearAlpha(),it=We.r,st=We.g,Xe=We.b;Ce?(w[0]=it,w[1]=st,w[2]=Xe,w[3]=Ge,W.clearBufferuiv(W.COLOR,0,w)):(A[0]=it,A[1]=st,A[2]=Xe,A[3]=Ge,W.clearBufferiv(W.COLOR,0,A))}else se|=W.COLOR_BUFFER_BIT}X&&(se|=W.DEPTH_BUFFER_BIT),re&&(se|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",me,!1),n.removeEventListener("webglcontextrestored",Ue,!1),n.removeEventListener("webglcontextcreationerror",k,!1),Pe.dispose(),ct.dispose(),qe.dispose(),T.dispose(),ee.dispose(),pe.dispose(),St.dispose(),j.dispose(),Fe.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",ss),ce.removeEventListener("sessionend",Ki),Ri.stop()};function me(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),q=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),q=!1;const R=Ct.autoReset,X=ze.enabled,re=ze.autoUpdate,se=ze.needsUpdate,Y=ze.type;De(),Ct.autoReset=R,ze.enabled=X,ze.autoUpdate=re,ze.needsUpdate=se,ze.type=Y}function k(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ve(R){const X=R.target;X.removeEventListener("dispose",ve),ot(X)}function ot(R){Rt(R),qe.remove(R)}function Rt(R){const X=qe.get(R).programs;X!==void 0&&(X.forEach(function(re){Fe.releaseProgram(re)}),R.isShaderMaterial&&Fe.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,re,se,Y,be){X===null&&(X=Pt);const Ce=Y.isMesh&&Y.matrixWorld.determinant()<0,We=ea(R,X,re,se,Y);Ze.setMaterial(se,Ce);let Ge=re.index,it=1;if(se.wireframe===!0){if(Ge=xe.getWireframeAttribute(re),Ge===void 0)return;it=2}const st=re.drawRange,Xe=re.attributes.position;let yt=st.start*it,bt=(st.start+st.count)*it;be!==null&&(yt=Math.max(yt,be.start*it),bt=Math.min(bt,(be.start+be.count)*it)),Ge!==null?(yt=Math.max(yt,0),bt=Math.min(bt,Ge.count)):Xe!=null&&(yt=Math.max(yt,0),bt=Math.min(bt,Xe.count));const xt=bt-yt;if(xt<0||xt===1/0)return;St.setup(Y,se,We,re,Ge);let pn,ut=Be;if(Ge!==null&&(pn=_e.get(Ge),ut=ht,ut.setIndex(pn)),Y.isMesh)se.wireframe===!0?(Ze.setLineWidth(se.wireframeLinewidth*Dt()),ut.setMode(W.LINES)):ut.setMode(W.TRIANGLES);else if(Y.isLine){let Ke=se.linewidth;Ke===void 0&&(Ke=1),Ze.setLineWidth(Ke*Dt()),Y.isLineSegments?ut.setMode(W.LINES):Y.isLineLoop?ut.setMode(W.LINE_LOOP):ut.setMode(W.LINE_STRIP)}else Y.isPoints?ut.setMode(W.POINTS):Y.isSprite&&ut.setMode(W.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)ut.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))ut.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Ke=Y._multiDrawStarts,ri=Y._multiDrawCounts,wt=Y._multiDrawCount,mn=Ge?_e.get(Ge).bytesPerElement:1,si=qe.get(se).currentProgram.getUniforms();for(let Zt=0;Zt<wt;Zt++)si.setValue(W,"_gl_DrawID",Zt),ut.render(Ke[Zt]/mn,ri[Zt])}else if(Y.isInstancedMesh)ut.renderInstances(yt,xt,Y.count);else if(re.isInstancedBufferGeometry){const Ke=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,ri=Math.min(re.instanceCount,Ke);ut.renderInstances(yt,xt,ri)}else ut.render(yt,xt)};function at(R,X,re){R.transparent===!0&&R.side===Wi&&R.forceSinglePass===!1?(R.side=zn,R.needsUpdate=!0,os(R,X,re),R.side=Rr,R.needsUpdate=!0,os(R,X,re),R.side=Wi):os(R,X,re)}this.compile=function(R,X,re=null){re===null&&(re=R),_=ct.get(re),_.init(X),N.push(_),re.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),R!==re&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),_.setupLights();const se=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const be=Y.material;if(be)if(Array.isArray(be))for(let Ce=0;Ce<be.length;Ce++){const We=be[Ce];at(We,re,Y),se.add(We)}else at(be,re,Y),se.add(be)}),N.pop(),_=null,se},this.compileAsync=function(R,X,re=null){const se=this.compile(R,X,re);return new Promise(Y=>{function be(){if(se.forEach(function(Ce){qe.get(Ce).currentProgram.isReady()&&se.delete(Ce)}),se.size===0){Y(R);return}setTimeout(be,10)}lt.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let sn=null;function qt(R){sn&&sn(R)}function ss(){Ri.stop()}function Ki(){Ri.start()}const Ri=new Vg;Ri.setAnimationLoop(qt),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(R){sn=R,ce.setAnimationLoop(R),R===null?Ri.stop():Ri.start()},ce.addEventListener("sessionstart",ss),ce.addEventListener("sessionend",Ki),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(X),X=ce.getCamera()),R.isScene===!0&&R.onBeforeRender(b,R,X,z),_=ct.get(R,N.length),_.init(X),N.push(_),Le.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),J.setFromProjectionMatrix(Le),Ee=this.localClippingEnabled,fe=we.init(this.clippingPlanes,Ee),S=Pe.get(R,F.length),S.init(),F.push(S),ce.enabled===!0&&ce.isPresenting===!0){const be=b.xr.getDepthSensingMesh();be!==null&&bi(be,X,-1/0,b.sortObjects)}bi(R,X,0,b.sortObjects),S.finish(),b.sortObjects===!0&&S.sort(le,ue),pt=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,pt&&de.addToRenderList(S,R),this.info.render.frame++,fe===!0&&we.beginShadows();const re=_.state.shadowsArray;ze.render(re,R,X),fe===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=S.opaque,Y=S.transmissive;if(_.setupLights(),X.isArrayCamera){const be=X.cameras;if(Y.length>0)for(let Ce=0,We=be.length;Ce<We;Ce++){const Ge=be[Ce];Lr(se,Y,R,Ge)}pt&&de.render(R);for(let Ce=0,We=be.length;Ce<We;Ce++){const Ge=be[Ce];Pr(S,R,Ge,Ge.viewport)}}else Y.length>0&&Lr(se,Y,R,X),pt&&de.render(R),Pr(S,R,X);z!==null&&(D.updateMultisampleRenderTarget(z),D.updateRenderTargetMipmap(z)),R.isScene===!0&&R.onAfterRender(b,R,X),St.resetDefaultState(),P=-1,C=null,N.pop(),N.length>0?(_=N[N.length-1],fe===!0&&we.setGlobalState(b.clippingPlanes,_.state.camera)):_=null,F.pop(),F.length>0?S=F[F.length-1]:S=null};function bi(R,X,re,se){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)re=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||J.intersectsSprite(R)){se&&Je.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Le);const Ce=pe.update(R),We=R.material;We.visible&&S.push(R,Ce,We,re,Je.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||J.intersectsObject(R))){const Ce=pe.update(R),We=R.material;if(se&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Je.copy(R.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Je.copy(Ce.boundingSphere.center)),Je.applyMatrix4(R.matrixWorld).applyMatrix4(Le)),Array.isArray(We)){const Ge=Ce.groups;for(let it=0,st=Ge.length;it<st;it++){const Xe=Ge[it],yt=We[Xe.materialIndex];yt&&yt.visible&&S.push(R,Ce,yt,re,Je.z,Xe)}}else We.visible&&S.push(R,Ce,We,re,Je.z,null)}}const be=R.children;for(let Ce=0,We=be.length;Ce<We;Ce++)bi(be[Ce],X,re,se)}function Pr(R,X,re,se){const Y=R.opaque,be=R.transmissive,Ce=R.transparent;_.setupLightsView(re),fe===!0&&we.setGlobalState(b.clippingPlanes,re),se&&Ze.viewport(V.copy(se)),Y.length>0&&Zi(Y,X,re),be.length>0&&Zi(be,X,re),Ce.length>0&&Zi(Ce,X,re),Ze.buffers.depth.setTest(!0),Ze.buffers.depth.setMask(!0),Ze.buffers.color.setMask(!0),Ze.setPolygonOffset(!1)}function Lr(R,X,re,se){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[se.id]===void 0&&(_.state.transmissionRenderTarget[se.id]=new ns(1,1,{generateMipmaps:!0,type:lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float")?$o:$i,minFilter:es,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const be=_.state.transmissionRenderTarget[se.id],Ce=se.viewport||V;be.setSize(Ce.z,Ce.w);const We=b.getRenderTarget();b.setRenderTarget(be),b.getClearColor(ae),ge=b.getClearAlpha(),ge<1&&b.setClearColor(16777215,.5),b.clear(),pt&&de.render(re);const Ge=b.toneMapping;b.toneMapping=Ar;const it=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),_.setupLightsView(se),fe===!0&&we.setGlobalState(b.clippingPlanes,se),Zi(R,re,se),D.updateMultisampleRenderTarget(be),D.updateRenderTargetMipmap(be),lt.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let Xe=0,yt=X.length;Xe<yt;Xe++){const bt=X[Xe],xt=bt.object,pn=bt.geometry,ut=bt.material,Ke=bt.group;if(ut.side===Wi&&xt.layers.test(se.layers)){const ri=ut.side;ut.side=zn,ut.needsUpdate=!0,Qo(xt,re,se,pn,ut,Ke),ut.side=ri,ut.needsUpdate=!0,st=!0}}st===!0&&(D.updateMultisampleRenderTarget(be),D.updateRenderTargetMipmap(be))}b.setRenderTarget(We),b.setClearColor(ae,ge),it!==void 0&&(se.viewport=it),b.toneMapping=Ge}function Zi(R,X,re){const se=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,be=R.length;Y<be;Y++){const Ce=R[Y],We=Ce.object,Ge=Ce.geometry,it=se===null?Ce.material:se,st=Ce.group;We.layers.test(re.layers)&&Qo(We,X,re,Ge,it,st)}}function Qo(R,X,re,se,Y,be){R.onBeforeRender(b,X,re,se,Y,be),R.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(b,X,re,se,R,be),Y.transparent===!0&&Y.side===Wi&&Y.forceSinglePass===!1?(Y.side=zn,Y.needsUpdate=!0,b.renderBufferDirect(re,X,se,Y,R,be),Y.side=Rr,Y.needsUpdate=!0,b.renderBufferDirect(re,X,se,Y,R,be),Y.side=Wi):b.renderBufferDirect(re,X,se,Y,R,be),R.onAfterRender(b,X,re,se,Y,be)}function os(R,X,re){X.isScene!==!0&&(X=Pt);const se=qe.get(R),Y=_.state.lights,be=_.state.shadowsArray,Ce=Y.state.version,We=Fe.getParameters(R,Y.state,be,X,re),Ge=Fe.getProgramCacheKey(We);let it=se.programs;se.environment=R.isMeshStandardMaterial?X.environment:null,se.fog=X.fog,se.envMap=(R.isMeshStandardMaterial?ee:T).get(R.envMap||se.environment),se.envMapRotation=se.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,it===void 0&&(R.addEventListener("dispose",ve),it=new Map,se.programs=it);let st=it.get(Ge);if(st!==void 0){if(se.currentProgram===st&&se.lightsStateVersion===Ce)return vi(R,We),st}else We.uniforms=Fe.getUniforms(R),R.onBeforeCompile(We,b),st=Fe.acquireProgram(We,Ge),it.set(Ge,st),se.uniforms=We.uniforms;const Xe=se.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Xe.clippingPlanes=we.uniform),vi(R,We),se.needsLights=Yl(R),se.lightsStateVersion=Ce,se.needsLights&&(Xe.ambientLightColor.value=Y.state.ambient,Xe.lightProbe.value=Y.state.probe,Xe.directionalLights.value=Y.state.directional,Xe.directionalLightShadows.value=Y.state.directionalShadow,Xe.spotLights.value=Y.state.spot,Xe.spotLightShadows.value=Y.state.spotShadow,Xe.rectAreaLights.value=Y.state.rectArea,Xe.ltc_1.value=Y.state.rectAreaLTC1,Xe.ltc_2.value=Y.state.rectAreaLTC2,Xe.pointLights.value=Y.state.point,Xe.pointLightShadows.value=Y.state.pointShadow,Xe.hemisphereLights.value=Y.state.hemi,Xe.directionalShadowMap.value=Y.state.directionalShadowMap,Xe.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Xe.spotShadowMap.value=Y.state.spotShadowMap,Xe.spotLightMatrix.value=Y.state.spotLightMatrix,Xe.spotLightMap.value=Y.state.spotLightMap,Xe.pointShadowMap.value=Y.state.pointShadowMap,Xe.pointShadowMatrix.value=Y.state.pointShadowMatrix),se.currentProgram=st,se.uniformsList=null,st}function Jo(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=Fl.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function vi(R,X){const re=qe.get(R);re.outputColorSpace=X.outputColorSpace,re.batching=X.batching,re.batchingColor=X.batchingColor,re.instancing=X.instancing,re.instancingColor=X.instancingColor,re.instancingMorph=X.instancingMorph,re.skinning=X.skinning,re.morphTargets=X.morphTargets,re.morphNormals=X.morphNormals,re.morphColors=X.morphColors,re.morphTargetsCount=X.morphTargetsCount,re.numClippingPlanes=X.numClippingPlanes,re.numIntersection=X.numClipIntersection,re.vertexAlphas=X.vertexAlphas,re.vertexTangents=X.vertexTangents,re.toneMapping=X.toneMapping}function ea(R,X,re,se,Y){X.isScene!==!0&&(X=Pt),D.resetTextureUnits();const be=X.fog,Ce=se.isMeshStandardMaterial?X.environment:null,We=z===null?b.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:to,Ge=(se.isMeshStandardMaterial?ee:T).get(se.envMap||Ce),it=se.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,st=!!re.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Xe=!!re.morphAttributes.position,yt=!!re.morphAttributes.normal,bt=!!re.morphAttributes.color;let xt=Ar;se.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(xt=b.toneMapping);const pn=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,ut=pn!==void 0?pn.length:0,Ke=qe.get(se),ri=_.state.lights;if(fe===!0&&(Ee===!0||R!==C)){const Tn=R===C&&se.id===P;we.setState(se,R,Tn)}let wt=!1;se.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==ri.state.version||Ke.outputColorSpace!==We||Y.isBatchedMesh&&Ke.batching===!1||!Y.isBatchedMesh&&Ke.batching===!0||Y.isBatchedMesh&&Ke.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ke.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ke.instancing===!1||!Y.isInstancedMesh&&Ke.instancing===!0||Y.isSkinnedMesh&&Ke.skinning===!1||!Y.isSkinnedMesh&&Ke.skinning===!0||Y.isInstancedMesh&&Ke.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ke.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ke.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ke.instancingMorph===!1&&Y.morphTexture!==null||Ke.envMap!==Ge||se.fog===!0&&Ke.fog!==be||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==we.numPlanes||Ke.numIntersection!==we.numIntersection)||Ke.vertexAlphas!==it||Ke.vertexTangents!==st||Ke.morphTargets!==Xe||Ke.morphNormals!==yt||Ke.morphColors!==bt||Ke.toneMapping!==xt||Ke.morphTargetsCount!==ut)&&(wt=!0):(wt=!0,Ke.__version=se.version);let mn=Ke.currentProgram;wt===!0&&(mn=os(se,X,Y));let si=!1,Zt=!1,xi=!1;const Ft=mn.getUniforms(),Yn=Ke.uniforms;if(Ze.useProgram(mn.program)&&(si=!0,Zt=!0,xi=!0),se.id!==P&&(P=se.id,Zt=!0),si||C!==R){Ze.buffers.depth.getReversed()?(Me.copy(R.projectionMatrix),Q0(Me),J0(Me),Ft.setValue(W,"projectionMatrix",Me)):Ft.setValue(W,"projectionMatrix",R.projectionMatrix),Ft.setValue(W,"viewMatrix",R.matrixWorldInverse);const qn=Ft.map.cameraPosition;qn!==void 0&&qn.setValue(W,ke.setFromMatrixPosition(R.matrixWorld)),mt.logarithmicDepthBuffer&&Ft.setValue(W,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Ft.setValue(W,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,Zt=!0,xi=!0)}if(Y.isSkinnedMesh){Ft.setOptional(W,Y,"bindMatrix"),Ft.setOptional(W,Y,"bindMatrixInverse");const Tn=Y.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Ft.setValue(W,"boneTexture",Tn.boneTexture,D))}Y.isBatchedMesh&&(Ft.setOptional(W,Y,"batchingTexture"),Ft.setValue(W,"batchingTexture",Y._matricesTexture,D),Ft.setOptional(W,Y,"batchingIdTexture"),Ft.setValue(W,"batchingIdTexture",Y._indirectTexture,D),Ft.setOptional(W,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ft.setValue(W,"batchingColorTexture",Y._colorsTexture,D));const Pi=re.morphAttributes;if((Pi.position!==void 0||Pi.normal!==void 0||Pi.color!==void 0)&&$e.update(Y,re,mn),(Zt||Ke.receiveShadow!==Y.receiveShadow)&&(Ke.receiveShadow=Y.receiveShadow,Ft.setValue(W,"receiveShadow",Y.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Yn.envMap.value=Ge,Yn.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&X.environment!==null&&(Yn.envMapIntensity.value=X.environmentIntensity),Zt&&(Ft.setValue(W,"toneMappingExposure",b.toneMappingExposure),Ke.needsLights&&ta(Yn,xi),be&&se.fog===!0&&Ae.refreshFogUniforms(Yn,be),Ae.refreshMaterialUniforms(Yn,se,B,he,_.state.transmissionRenderTarget[R.id]),Fl.upload(W,Jo(Ke),Yn,D)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Fl.upload(W,Jo(Ke),Yn,D),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Ft.setValue(W,"center",Y.center),Ft.setValue(W,"modelViewMatrix",Y.modelViewMatrix),Ft.setValue(W,"normalMatrix",Y.normalMatrix),Ft.setValue(W,"modelMatrix",Y.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const Tn=se.uniformsGroups;for(let qn=0,Pn=Tn.length;qn<Pn;qn++){const na=Tn[qn];j.update(na,mn),j.bind(na,mn)}}return mn}function ta(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function Yl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(R,X,re){qe.get(R.texture).__webglTexture=X,qe.get(R.depthTexture).__webglTexture=re;const se=qe.get(R);se.__hasExternalTextures=!0,se.__autoAllocateDepthBuffer=re===void 0,se.__autoAllocateDepthBuffer||lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,X){const re=qe.get(R);re.__webglFramebuffer=X,re.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(R,X=0,re=0){z=R,L=X,I=re;let se=!0,Y=null,be=!1,Ce=!1;if(R){const Ge=qe.get(R);if(Ge.__useDefaultFramebuffer!==void 0)Ze.bindFramebuffer(W.FRAMEBUFFER,null),se=!1;else if(Ge.__webglFramebuffer===void 0)D.setupRenderTarget(R);else if(Ge.__hasExternalTextures)D.rebindTextures(R,qe.get(R.texture).__webglTexture,qe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Xe=R.depthTexture;if(Ge.__boundDepthTexture!==Xe){if(Xe!==null&&qe.has(Xe)&&(R.width!==Xe.image.width||R.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(R)}}const it=R.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Ce=!0);const st=qe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(st[X])?Y=st[X][re]:Y=st[X],be=!0):R.samples>0&&D.useMultisampledRTT(R)===!1?Y=qe.get(R).__webglMultisampledFramebuffer:Array.isArray(st)?Y=st[re]:Y=st,V.copy(R.viewport),ne.copy(R.scissor),Z=R.scissorTest}else V.copy(O).multiplyScalar(B).floor(),ne.copy(Q).multiplyScalar(B).floor(),Z=Ne;if(Ze.bindFramebuffer(W.FRAMEBUFFER,Y)&&se&&Ze.drawBuffers(R,Y),Ze.viewport(V),Ze.scissor(ne),Ze.setScissorTest(Z),be){const Ge=qe.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ge.__webglTexture,re)}else if(Ce){const Ge=qe.get(R.texture),it=X||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ge.__webglTexture,re||0,it)}P=-1},this.readRenderTargetPixels=function(R,X,re,se,Y,be,Ce){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=qe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(We=We[Ce]),We){Ze.bindFramebuffer(W.FRAMEBUFFER,We);try{const Ge=R.texture,it=Ge.format,st=Ge.type;if(!mt.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-se&&re>=0&&re<=R.height-Y&&W.readPixels(X,re,se,Y,nt.convert(it),nt.convert(st),be)}finally{const Ge=z!==null?qe.get(z).__webglFramebuffer:null;Ze.bindFramebuffer(W.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(R,X,re,se,Y,be,Ce){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=qe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(We=We[Ce]),We){const Ge=R.texture,it=Ge.format,st=Ge.type;if(!mt.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mt.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=R.width-se&&re>=0&&re<=R.height-Y){Ze.bindFramebuffer(W.FRAMEBUFFER,We);const Xe=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Xe),W.bufferData(W.PIXEL_PACK_BUFFER,be.byteLength,W.STREAM_READ),W.readPixels(X,re,se,Y,nt.convert(it),nt.convert(st),0);const yt=z!==null?qe.get(z).__webglFramebuffer:null;Ze.bindFramebuffer(W.FRAMEBUFFER,yt);const bt=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await Z0(W,bt,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Xe),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,be),W.deleteBuffer(Xe),W.deleteSync(bt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,X=null,re=0){R.isTexture!==!0&&(jo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,R=arguments[1]);const se=Math.pow(2,-re),Y=Math.floor(R.image.width*se),be=Math.floor(R.image.height*se),Ce=X!==null?X.x:0,We=X!==null?X.y:0;D.setTexture2D(R,0),W.copyTexSubImage2D(W.TEXTURE_2D,re,0,0,Ce,We,Y,be),Ze.unbindTexture()},this.copyTextureToTexture=function(R,X,re=null,se=null,Y=0){R.isTexture!==!0&&(jo("WebGLRenderer: copyTextureToTexture function signature has changed."),se=arguments[0]||null,R=arguments[1],X=arguments[2],Y=arguments[3]||0,re=null);let be,Ce,We,Ge,it,st,Xe,yt,bt;const xt=R.isCompressedTexture?R.mipmaps[Y]:R.image;re!==null?(be=re.max.x-re.min.x,Ce=re.max.y-re.min.y,We=re.isBox3?re.max.z-re.min.z:1,Ge=re.min.x,it=re.min.y,st=re.isBox3?re.min.z:0):(be=xt.width,Ce=xt.height,We=xt.depth||1,Ge=0,it=0,st=0),se!==null?(Xe=se.x,yt=se.y,bt=se.z):(Xe=0,yt=0,bt=0);const pn=nt.convert(X.format),ut=nt.convert(X.type);let Ke;X.isData3DTexture?(D.setTexture3D(X,0),Ke=W.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(D.setTexture2DArray(X,0),Ke=W.TEXTURE_2D_ARRAY):(D.setTexture2D(X,0),Ke=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,X.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,X.unpackAlignment);const ri=W.getParameter(W.UNPACK_ROW_LENGTH),wt=W.getParameter(W.UNPACK_IMAGE_HEIGHT),mn=W.getParameter(W.UNPACK_SKIP_PIXELS),si=W.getParameter(W.UNPACK_SKIP_ROWS),Zt=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,xt.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,xt.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Ge),W.pixelStorei(W.UNPACK_SKIP_ROWS,it),W.pixelStorei(W.UNPACK_SKIP_IMAGES,st);const xi=R.isDataArrayTexture||R.isData3DTexture,Ft=X.isDataArrayTexture||X.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const Yn=qe.get(R),Pi=qe.get(X),Tn=qe.get(Yn.__renderTarget),qn=qe.get(Pi.__renderTarget);Ze.bindFramebuffer(W.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Ze.bindFramebuffer(W.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let Pn=0;Pn<We;Pn++)xi&&W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,qe.get(R).__webglTexture,Y,st+Pn),R.isDepthTexture?(Ft&&W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,qe.get(X).__webglTexture,Y,bt+Pn),W.blitFramebuffer(Ge,it,be,Ce,Xe,yt,be,Ce,W.DEPTH_BUFFER_BIT,W.NEAREST)):Ft?W.copyTexSubImage3D(Ke,Y,Xe,yt,bt+Pn,Ge,it,be,Ce):W.copyTexSubImage2D(Ke,Y,Xe,yt,bt+Pn,Ge,it,be,Ce);Ze.bindFramebuffer(W.READ_FRAMEBUFFER,null),Ze.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Ft?R.isDataTexture||R.isData3DTexture?W.texSubImage3D(Ke,Y,Xe,yt,bt,be,Ce,We,pn,ut,xt.data):X.isCompressedArrayTexture?W.compressedTexSubImage3D(Ke,Y,Xe,yt,bt,be,Ce,We,pn,xt.data):W.texSubImage3D(Ke,Y,Xe,yt,bt,be,Ce,We,pn,ut,xt):R.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Y,Xe,yt,be,Ce,pn,ut,xt.data):R.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Y,Xe,yt,xt.width,xt.height,pn,xt.data):W.texSubImage2D(W.TEXTURE_2D,Y,Xe,yt,be,Ce,pn,ut,xt);W.pixelStorei(W.UNPACK_ROW_LENGTH,ri),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,wt),W.pixelStorei(W.UNPACK_SKIP_PIXELS,mn),W.pixelStorei(W.UNPACK_SKIP_ROWS,si),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Zt),Y===0&&X.generateMipmaps&&W.generateMipmap(Ke),Ze.unbindTexture()},this.copyTextureToTexture3D=function(R,X,re=null,se=null,Y=0){return R.isTexture!==!0&&(jo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),re=arguments[0]||null,se=arguments[1]||null,R=arguments[2],X=arguments[3],Y=arguments[4]||0),jo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,X,re,se,Y)},this.initRenderTarget=function(R){qe.get(R).__webglFramebuffer===void 0&&D.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?D.setTextureCube(R,0):R.isData3DTexture?D.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?D.setTexture2DArray(R,0):D.setTexture2D(R,0),Ze.unbindTexture()},this.resetState=function(){L=0,I=0,z=null,Ze.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Et._getDrawingBufferColorSpace(e),n.unpackColorSpace=Et._getUnpackColorSpace()}}class fh{constructor(e,n=1,r=1e3){this.isFog=!0,this.name="",this.color=new vt(e),this.near=n,this.far=r}clone(){return new fh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class c1 extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class qo extends no{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zl=new K,Bl=new K,Zm=new jt,Vo=new uh,wl=new jl,ad=new K,Qm=new K;class th extends un{constructor(e=new En,n=new qo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,c=n.count;a<c;a++)zl.fromBufferAttribute(n,a-1),Bl.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=zl.distanceTo(Bl);e.setAttribute("lineDistance",new tn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,c=e.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),wl.copy(r.boundingSphere),wl.applyMatrix4(a),wl.radius+=c,e.ray.intersectsSphere(wl)===!1)return;Zm.copy(a).invert(),Vo.copy(e.ray).applyMatrix4(Zm);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),f=h*h,m=this.isLineSegments?2:1,v=r.index,x=r.attributes.position;if(v!==null){const M=Math.max(0,d.start),w=Math.min(v.count,d.start+d.count);for(let A=M,S=w-1;A<S;A+=m){const _=v.getX(A),F=v.getX(A+1),N=Al(this,e,Vo,f,_,F);N&&n.push(N)}if(this.isLineLoop){const A=v.getX(w-1),S=v.getX(M),_=Al(this,e,Vo,f,A,S);_&&n.push(_)}}else{const M=Math.max(0,d.start),w=Math.min(x.count,d.start+d.count);for(let A=M,S=w-1;A<S;A+=m){const _=Al(this,e,Vo,f,A,A+1);_&&n.push(_)}if(this.isLineLoop){const A=Al(this,e,Vo,f,w-1,M);A&&n.push(A)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=a.length;c<d;c++){const h=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Al(s,e,n,r,a,c){const d=s.geometry.attributes.position;if(zl.fromBufferAttribute(d,a),Bl.fromBufferAttribute(d,c),n.distanceSqToSegment(zl,Bl,ad,Qm)>r)return;ad.applyMatrix4(s.matrixWorld);const f=e.ray.origin.distanceTo(ad);if(!(f<e.near||f>e.far))return{distance:f,point:Qm.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Jm=new K,eg=new K;class $g extends th{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let a=0,c=n.count;a<c;a+=2)Jm.fromBufferAttribute(n,a),eg.fromBufferAttribute(n,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Jm.distanceTo(eg);e.setAttribute("lineDistance",new tn(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Hl extends En{constructor(e=1,n=1,r=1,a=32,c=1,d=!1,h=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:a,heightSegments:c,openEnded:d,thetaStart:h,thetaLength:f};const m=this;a=Math.floor(a),c=Math.floor(c);const v=[],y=[],x=[],M=[];let w=0;const A=[],S=r/2;let _=0;F(),d===!1&&(e>0&&N(!0),n>0&&N(!1)),this.setIndex(v),this.setAttribute("position",new tn(y,3)),this.setAttribute("normal",new tn(x,3)),this.setAttribute("uv",new tn(M,2));function F(){const b=new K,q=new K;let L=0;const I=(n-e)/r;for(let z=0;z<=c;z++){const P=[],C=z/c,V=C*(n-e)+e;for(let ne=0;ne<=a;ne++){const Z=ne/a,ae=Z*f+h,ge=Math.sin(ae),oe=Math.cos(ae);q.x=V*ge,q.y=-C*r+S,q.z=V*oe,y.push(q.x,q.y,q.z),b.set(ge,I,oe).normalize(),x.push(b.x,b.y,b.z),M.push(Z,1-C),P.push(w++)}A.push(P)}for(let z=0;z<a;z++)for(let P=0;P<c;P++){const C=A[P][z],V=A[P+1][z],ne=A[P+1][z+1],Z=A[P][z+1];(e>0||P!==0)&&(v.push(C,V,Z),L+=3),(n>0||P!==c-1)&&(v.push(V,ne,Z),L+=3)}m.addGroup(_,L,0),_+=L}function N(b){const q=w,L=new dt,I=new K;let z=0;const P=b===!0?e:n,C=b===!0?1:-1;for(let ne=1;ne<=a;ne++)y.push(0,S*C,0),x.push(0,C,0),M.push(.5,.5),w++;const V=w;for(let ne=0;ne<=a;ne++){const ae=ne/a*f+h,ge=Math.cos(ae),oe=Math.sin(ae);I.x=P*oe,I.y=S*C,I.z=P*ge,y.push(I.x,I.y,I.z),x.push(0,C,0),L.x=ge*.5+.5,L.y=oe*.5*C+.5,M.push(L.x,L.y),w++}for(let ne=0;ne<a;ne++){const Z=q+ne,ae=V+ne;b===!0?v.push(ae,ae+1,Z):v.push(ae+1,ae,Z),z+=3}m.addGroup(_,z,b===!0?1:2),_+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ph extends En{constructor(e=1,n=32,r=16,a=0,c=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:a,phiLength:c,thetaStart:d,thetaLength:h},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const f=Math.min(d+h,Math.PI);let m=0;const v=[],y=new K,x=new K,M=[],w=[],A=[],S=[];for(let _=0;_<=r;_++){const F=[],N=_/r;let b=0;_===0&&d===0?b=.5/n:_===r&&f===Math.PI&&(b=-.5/n);for(let q=0;q<=n;q++){const L=q/n;y.x=-e*Math.cos(a+L*c)*Math.sin(d+N*h),y.y=e*Math.cos(d+N*h),y.z=e*Math.sin(a+L*c)*Math.sin(d+N*h),w.push(y.x,y.y,y.z),x.copy(y).normalize(),A.push(x.x,x.y,x.z),S.push(L+b,1-N),F.push(m++)}v.push(F)}for(let _=0;_<r;_++)for(let F=0;F<n;F++){const N=v[_][F+1],b=v[_][F],q=v[_+1][F],L=v[_+1][F+1];(_!==0||d>0)&&M.push(N,b,L),(_!==r-1||f<Math.PI)&&M.push(b,q,L)}this.setIndex(M),this.setAttribute("position",new tn(w,3)),this.setAttribute("normal",new tn(A,3)),this.setAttribute("uv",new tn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ph(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Go extends no{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bg,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Kg extends un{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class u1 extends Kg{constructor(e,n,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new vt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const ld=new jt,tg=new K,ng=new K;class d1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dh,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;tg.setFromMatrixPosition(e.matrixWorld),n.position.copy(tg),ng.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ng),n.updateMatrixWorld(),ld.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ld),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(ld)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class h1 extends d1{constructor(){super(new Gg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class f1 extends Kg{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new h1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ig{constructor(e=1,n=0,r=0){return this.radius=e,this.phi=n,this.theta=r,this}set(e,n,r){return this.radius=e,this.phi=n,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,r){return this.radius=Math.sqrt(e*e+n*n+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Rn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class p1 extends $g{constructor(e=10,n=10,r=4473924,a=8947848){r=new vt(r),a=new vt(a);const c=n/2,d=e/n,h=e/2,f=[],m=[];for(let x=0,M=0,w=-h;x<=n;x++,w+=d){f.push(-h,0,w,h,0,w),f.push(w,0,-h,w,0,h);const A=x===c?r:a;A.toArray(m,M),M+=3,A.toArray(m,M),M+=3,A.toArray(m,M),M+=3,A.toArray(m,M),M+=3}const v=new En;v.setAttribute("position",new tn(f,3)),v.setAttribute("color",new tn(m,3));const y=new qo({vertexColors:!0,toneMapped:!1});super(v,y),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class m1 extends $g{constructor(e=1){const n=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],r=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],a=new En;a.setAttribute("position",new tn(n,3)),a.setAttribute("color",new tn(r,3));const c=new qo({vertexColors:!0,toneMapped:!1});super(a,c),this.type="AxesHelper"}setColors(e,n,r){const a=new vt,c=this.geometry.attributes.color.array;return a.set(e),a.toArray(c,0),a.toArray(c,3),a.set(n),a.toArray(c,6),a.toArray(c,9),a.set(r),a.toArray(c,12),a.toArray(c,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class g1 extends rs{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ih}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ih);const rg={type:"change"},mh={type:"start"},Zg={type:"end"},Cl=new uh,sg=new Er,_1=Math.cos(70*$0.DEG2RAD),en=new K,kn=2*Math.PI,It={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},cd=1e-6;class v1 extends g1{constructor(e,n=null){super(e,n),this.state=It.NONE,this.enabled=!0,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ws.ROTATE,MIDDLE:Ws.DOLLY,RIGHT:Ws.PAN},this.touches={ONE:Gs.ROTATE,TWO:Gs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new is,this._lastTargetPosition=new K,this._quat=new is().setFromUnitVectors(e.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ig,this._sphericalDelta=new ig,this._scale=1,this._panOffset=new K,this._rotateStart=new dt,this._rotateEnd=new dt,this._rotateDelta=new dt,this._panStart=new dt,this._panEnd=new dt,this._panDelta=new dt,this._dollyStart=new dt,this._dollyEnd=new dt,this._dollyDelta=new dt,this._dollyDirection=new K,this._mouse=new dt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=y1.bind(this),this._onPointerDown=x1.bind(this),this._onPointerUp=S1.bind(this),this._onContextMenu=R1.bind(this),this._onMouseWheel=T1.bind(this),this._onKeyDown=w1.bind(this),this._onTouchStart=A1.bind(this),this._onTouchMove=C1.bind(this),this._onMouseDown=M1.bind(this),this._onMouseMove=E1.bind(this),this._interceptControlDown=b1.bind(this),this._interceptControlUp=P1.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(rg),this.update(),this.state=It.NONE}update(e=null){const n=this.object.position;en.copy(n).sub(this.target),en.applyQuaternion(this._quat),this._spherical.setFromVector3(en),this.autoRotate&&this.state===It.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(r)&&isFinite(a)&&(r<-Math.PI?r+=kn:r>Math.PI&&(r-=kn),a<-Math.PI?a+=kn:a>Math.PI&&(a-=kn),r<=a?this._spherical.theta=Math.max(r,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+a)/2?Math.max(r,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const d=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=d!=this._spherical.radius}if(en.setFromSpherical(this._spherical),en.applyQuaternion(this._quatInverse),n.copy(this.target).add(en),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let d=null;if(this.object.isPerspectiveCamera){const h=en.length();d=this._clampDistance(h*this._scale);const f=h-d;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),c=!!f}else if(this.object.isOrthographicCamera){const h=new K(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=f!==this.object.zoom;const m=new K(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(h),this.object.updateMatrixWorld(),d=en.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;d!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(d).add(this.object.position):(Cl.origin.copy(this.object.position),Cl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Cl.direction))<_1?this.object.lookAt(this.target):(sg.setFromNormalAndCoplanarPoint(this.object.up,this.target),Cl.intersectPlane(sg,this.target))))}else if(this.object.isOrthographicCamera){const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),d!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>cd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>cd||this._lastTargetPosition.distanceToSquared(this.target)>cd?(this.dispatchEvent(rg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?kn/60*this.autoRotateSpeed*e:kn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){en.setFromMatrixColumn(n,0),en.multiplyScalar(-e),this._panOffset.add(en)}_panUp(e,n){this.screenSpacePanning===!0?en.setFromMatrixColumn(n,1):(en.setFromMatrixColumn(n,0),en.crossVectors(this.object.up,en)),en.multiplyScalar(e),this._panOffset.add(en)}_pan(e,n){const r=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;en.copy(a).sub(this.target);let c=en.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*c/r.clientHeight,this.object.matrix),this._panUp(2*n*c/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),a=e-r.left,c=n-r.top,d=r.width,h=r.height;this._mouse.x=a/d*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(kn*this._rotateDelta.x/n.clientHeight),this._rotateUp(kn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(kn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-kn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(kn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-kn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateStart.set(r,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._panStart.set(r,a)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),r=e.pageX-n.x,a=e.pageY-n.y,c=Math.sqrt(r*r+a*a);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),a=.5*(e.pageX+r.x),c=.5*(e.pageY+r.y);this._rotateEnd.set(a,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(kn*this._rotateDelta.x/n.clientHeight),this._rotateUp(kn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._panEnd.set(r,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),r=e.pageX-n.x,a=e.pageY-n.y,c=Math.sqrt(r*r+a*a);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const d=(e.pageX+n.x)*.5,h=(e.pageY+n.y)*.5;this._updateZoomParameters(d,h)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new dt,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function x1(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function y1(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function S1(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Zg),this.state=It.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function M1(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ws.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=It.DOLLY;break;case Ws.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=It.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=It.ROTATE}break;case Ws.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=It.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=It.PAN}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(mh)}function E1(s){switch(this.state){case It.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case It.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case It.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function T1(s){this.enabled===!1||this.enableZoom===!1||this.state!==It.NONE||(s.preventDefault(),this.dispatchEvent(mh),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Zg))}function w1(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function A1(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Gs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=It.TOUCH_ROTATE;break;case Gs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=It.TOUCH_PAN;break;default:this.state=It.NONE}break;case 2:switch(this.touches.TWO){case Gs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=It.TOUCH_DOLLY_PAN;break;case Gs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=It.TOUCH_DOLLY_ROTATE;break;default:this.state=It.NONE}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(mh)}function C1(s){switch(this._trackPointer(s),this.state){case It.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case It.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case It.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case It.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=It.NONE}}function R1(s){this.enabled!==!1&&s.preventDefault()}function b1(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function P1(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Rl=s=>new K(s[0]/1e3,s[2]/1e3,-s[1]/1e3);function L1({state:s,view:e="Orbit",preview:n=[]}){const r=Qe.useRef(null),a=Qe.useRef(s),c=Qe.useRef(n),d=Qe.useRef(e);return a.current=s,c.current=n,d.current=e,Qe.useEffect(()=>{if(!r.current)return;const h=r.current,f=new c1;f.background=new vt("#07111d"),f.fog=new fh("#07111d",1.7,4);const m=new ii(42,1,.01,10);m.position.set(.62,.48,.62);const v=new l1({antialias:!0});v.setPixelRatio(Math.min(devicePixelRatio,2)),h.appendChild(v.domElement),v.shadowMap.enabled=!0,v.shadowMap.type=gg;const y=new v1(m,v.domElement);y.target.set(.13,.13,0),y.enableDamping=!0,y.minDistance=.25,y.maxDistance=2.8,f.add(new u1(13953791,1188405,2.5));const x=new f1(16777215,3);x.position.set(.4,1,.3),x.castShadow=!0,x.shadow.mapSize.set(1024,1024),f.add(x);const M=new bn(new Cr(.92,.02,.82),new Go({color:1518139,roughness:.8}));M.position.set(.12,-.02,0),M.receiveShadow=!0,f.add(M);const w=new p1(1.6,32,2183543,1322819);w.position.y=-.008,f.add(w);const A=new Go({color:12965087,metalness:.65,roughness:.3}),S=new Go({color:1473503,metalness:.5,roughness:.35}),_=new Go({color:1912123,metalness:.7,roughness:.4}),F=new bn(new Hl(.05,.065,.045,32),_);F.position.y=.023,f.add(F);const N=[],b=[];for(let he=0;he<6;he++){const B=new bn(new Hl(.012,.018,1,16),A);B.castShadow=!0,f.add(B),N.push(B);const le=new bn(new ph(.025,20,20),S);le.castShadow=!0,f.add(le),b.push(le)}const q=new Xo;for(const he of[-1,1]){const B=new bn(new Cr(.009,.045,.013),_);B.position.set(he*.022,0,0),q.add(B)}f.add(q);const L={red_cube:15684189,blue_cube:1673983,green_cube:2410903,target_zone:15318326},I={};Object.entries(L).forEach(([he,B])=>{const le=new bn(new Cr(he==="target_zone"?.105:.05,he==="target_zone"?.006:.05,he==="target_zone"?.105:.05),new Go({color:B,roughness:.45,metalness:.12}));le.castShadow=!0,le.receiveShadow=!0,f.add(le),I[he]=le});const z=new m1(.12);f.add(z);const P=new th(new En,new qo({color:1235410,transparent:!0,opacity:.7}));f.add(P);const C=new th(new En,new qo({color:14922059}));f.add(C);const V=new ResizeObserver(()=>{m.aspect=h.clientWidth/h.clientHeight,m.updateProjectionMatrix(),v.setSize(h.clientWidth,h.clientHeight)});V.observe(h);let ne=0,Z="",ae="",ge="";function oe(){const he=a.current,B=he.robot.points.map(Rl);N.forEach((Q,Ne)=>{const J=B[Ne],fe=B[Ne+1];if(!J||!fe)return;const Ee=new K().subVectors(fe,J);Q.position.copy(J).add(fe).multiplyScalar(.5),Q.scale.y=Math.max(.001,Ee.length()),Q.quaternion.setFromUnitVectors(new K(0,1,0),Ee.length()?Ee.normalize():new K(0,1,0)),b[Ne].position.copy(fe)});const le=B.at(-1);q.position.copy(le),q.children.forEach((Q,Ne)=>{Q.position.x=(Ne?1:-1)*(he.robot.gripper==="close"?.014:.03)}),z.position.copy(le),he.simulation.objects.forEach(Q=>{I[Q.name]&&(I[Q.name].position.copy(Rl(Q.position)),Q.name==="target_zone"&&(I[Q.name].position.y=.004))});const ue=JSON.stringify(he.path);ue!==ae&&(P.geometry.dispose(),P.geometry=new En().setFromPoints(he.path.map(Rl)),ae=ue);const O=JSON.stringify(c.current);if(O!==ge&&(C.geometry.dispose(),C.geometry=new En().setFromPoints(c.current.map(Rl)),ge=O),Z!==d.current){Z=d.current;const Q={Top:[.1,1.2,.001],Front:[.1,.2,1.2],Side:[1.2,.2,0],Orbit:[.62,.48,.62]};m.position.fromArray(Q[Z]||Q.Orbit),y.target.set(.13,.13,0),y.update()}y.update(),v.render(f,m),ne=requestAnimationFrame(oe)}return oe(),()=>{cancelAnimationFrame(ne),V.disconnect(),y.dispose(),f.traverse(he=>{const B=he;B.geometry&&B.geometry.dispose(),B.material&&(Array.isArray(B.material)?B.material:[B.material]).forEach(le=>le.dispose())}),v.dispose(),h.replaceChildren()}},[]),g.jsx("div",{className:"robot-scene",ref:r,"aria-label":"Interactive 3D robot simulation"})}const D1="modulepreload",N1=function(s){return"/"+s},og={},U1=function(e,n,r){let a=Promise.resolve();if(n&&n.length>0){let d=function(m){return Promise.all(m.map(v=>Promise.resolve(v).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),f=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));a=d(n.map(m=>{if(m=N1(m),m in og)return;og[m]=!0;const v=m.endsWith(".css"),y=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${y}`))return;const x=document.createElement("link");if(x.rel=v?"stylesheet":D1,v||(x.as="script"),x.crossOrigin="",x.href=m,f&&x.setAttribute("nonce",f),document.head.appendChild(x),v)return new Promise((M,w)=>{x.addEventListener("load",M),x.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${m}`)))})}))}function c(d){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=d,window.dispatchEvent(h),!h.defaultPrevented)throw d}return a.then(d=>{for(const h of d||[])h.status==="rejected"&&c(h.reason);return e().catch(c)})},I1=Qe.lazy(()=>U1(()=>import("./editor-CmHCMQ7w.js").then(s=>s.e),__vite__mapDeps([0,1]))),F1={id:"pick-red",name:"Pick and place red cube",steps:[{type:"detect",target:"red_cube"},{type:"move_above",target:"red_cube",value:100},{type:"lower",value:65},{type:"gripper",action:"close"},{type:"lift",value:65},{type:"move_above",target:"target_zone",value:100},{type:"lower",value:65},{type:"gripper",action:"open"},{type:"lift",value:65},{type:"home"}]},ag={detect:{type:"detect",target:"red_cube"},move_above:{type:"move_above",target:"red_cube",value:100},move_to:{type:"move_to",position:[210,-90,160]},move_joints:{type:"move_joints",joints:[0,55,-95,40,0,0]},lower:{type:"lower",value:65},lift:{type:"lift",value:65},gripper:{type:"gripper",action:"open"},home:{type:"home"},wait:{type:"wait",value:1},speed:{type:"speed",value:.5},capture:{type:"capture"},repeat:{type:"repeat",value:2,steps:[{type:"home"}]},condition:{type:"condition",target:"red_cube",steps:[{type:"home"}],otherwise:[{type:"wait",value:1}]}};function O1({task:s,setTask:e,onRun:n,onPreview:r,notify:a}){const[c,d]=Qe.useState("Visual Builder"),[h,f]=Qe.useState(`task("Pick and place red cube")
detect("red_cube")
move_above("red_cube")
lower(65)
close_gripper()
lift(65)
move_above("target_zone")
lower(65)
open_gripper()
lift(65)
home()`),[m,v]=Qe.useState("Pick the blue cube and place it in the yellow box."),[y,x]=Qe.useState(-1),[M,w]=Qe.useState([]),[A,S]=Qe.useState("wait"),[_,F]=Qe.useState(""),N=(L,I)=>e({...s,steps:s.steps.map((z,P)=>L===P?{...z,...I}:z)});async function b(L){try{await L()}catch(I){a(I.message,!0)}}async function q(){const L=await Nt("/tasks",s);return e(L),L}return g.jsxs("div",{className:"task-builder",children:[g.jsx("div",{className:"program-tabs",children:["Visual Builder","Code Editor","Natural Language","Task JSON"].map(L=>g.jsx("button",{className:c===L?"active":"",onClick:()=>{d(L),L==="Task JSON"&&F(JSON.stringify(s,null,2))},children:L},L))}),g.jsxs("div",{className:"task-title",children:[g.jsx("input",{"aria-label":"Task name",value:s.name,onChange:L=>e({...s,name:L.target.value})}),g.jsxs("button",{onClick:()=>e({id:"new",name:"Untitled task",steps:[{type:"home"}]}),children:[g.jsx(Kp,{size:14})," New"]})]}),c==="Visual Builder"&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"blocks",children:s.steps.map((L,I)=>g.jsxs("div",{className:"block "+(L.enabled===!1?"disabled":""),draggable:!0,onDragStart:()=>x(I),onDragOver:z=>z.preventDefault(),onDrop:()=>{const z=[...s.steps];z.splice(I,0,z.splice(y,1)[0]),e({...s,steps:z})},children:[g.jsx(qv,{size:14}),g.jsx("span",{className:"step-no",children:I+1}),g.jsx("input",{"aria-label":`Enable step ${I+1}`,type:"checkbox",checked:L.enabled!==!1,onChange:z=>N(I,{enabled:z.target.checked})}),g.jsx("strong",{children:L.type.replaceAll("_"," ")}),["detect","move_above","condition"].includes(L.type)&&g.jsx("select",{"aria-label":`Target ${I+1}`,value:L.target||"red_cube",onChange:z=>N(I,{target:z.target.value}),children:["red_cube","blue_cube","green_cube","target_zone"].map(z=>g.jsx("option",{children:z},z))}),["lower","lift","wait","speed","repeat","move_above"].includes(L.type)&&g.jsx("input",{"aria-label":`Value ${I+1}`,className:"small",type:"number",step:"any",value:L.value??100,onChange:z=>N(I,{value:Number(z.target.value)})}),L.type==="gripper"&&g.jsxs("select",{value:L.action||"open",onChange:z=>N(I,{action:z.target.value}),children:[g.jsx("option",{children:"open"}),g.jsx("option",{children:"close"})]}),(L.type==="move_to"||L.type==="move_joints")&&g.jsx("input",{"aria-label":`Coordinates ${I+1}`,defaultValue:(L.position||L.joints||[]).join(", "),onBlur:z=>N(I,{[L.type==="move_to"?"position":"joints"]:z.target.value.split(",").map(Number)})}),["repeat","condition"].includes(L.type)&&g.jsx("small",{children:"Edit nested steps in Task JSON"}),g.jsx("button",{title:"Move up",disabled:I===0,onClick:()=>{const z=[...s.steps];[z[I-1],z[I]]=[z[I],z[I-1]],e({...s,steps:z})},children:"↑"}),g.jsx("button",{title:"Duplicate",onClick:()=>{const z=[...s.steps];z.splice(I,0,structuredClone(L)),e({...s,steps:z})},children:g.jsx(Xv,{size:12})}),g.jsx("button",{title:"Delete",onClick:()=>e({...s,steps:s.steps.filter((z,P)=>P!==I)}),children:g.jsx(Qp,{size:12})})]},I))}),g.jsxs("div",{className:"row",children:[g.jsx("select",{value:A,onChange:L=>S(L.target.value),children:Object.keys(ag).map(L=>g.jsx("option",{children:L},L))}),g.jsxs("button",{onClick:()=>e({...s,steps:[...s.steps,structuredClone(ag[A])]}),children:[g.jsx(Kp,{size:14})," Add block"]}),g.jsx("span",{className:"muted",children:"Drag blocks to reorder"})]})]}),c==="Code Editor"&&g.jsxs(g.Fragment,{children:[g.jsx(Qe.Suspense,{fallback:g.jsx("p",{children:"Loading local editor…"}),children:g.jsx(I1,{value:h,onChange:L=>f(L||"")})}),g.jsx("p",{className:"muted",children:"Restricted task DSL: literal function calls only. No arbitrary Python execution."}),g.jsx("button",{onClick:()=>b(async()=>{const L=await Nt("/tasks/parse/script",{text:h});e(L),d("Visual Builder"),a("Script compiled. Review the task before running.")}),children:"Compile to task"})]}),c==="Natural Language"&&g.jsxs("div",{className:"natural",children:[g.jsx("h3",{children:"Ask VisionBot"}),g.jsx("p",{children:"Offline grammar: pick a red, blue or green cube and place it in the yellow box."}),g.jsx("textarea",{value:m,onChange:L=>v(L.target.value)}),g.jsx("button",{className:"primary",onClick:()=>b(async()=>{const L=await Nt("/tasks/parse/natural",{text:m});e(L),d("Visual Builder"),a("Plan generated. Review, preview, then run.")}),children:"Generate plan"}),g.jsx("small",{children:"Generation never starts the robot."})]}),c==="Task JSON"&&g.jsxs(g.Fragment,{children:[g.jsx("textarea",{className:"json-editor",value:_,onChange:L=>F(L.target.value)}),g.jsx("button",{onClick:()=>b(async()=>{const L=JSON.parse(_);await Nt("/tasks",L),e(L),a("Task JSON validated and saved")}),children:"Apply JSON"})]}),g.jsxs("div",{className:"task-actions",children:[g.jsxs("button",{onClick:()=>b(async()=>{await q(),a("Task saved")}),children:[g.jsx(i0,{size:14}),"Save"]}),g.jsxs("button",{onClick:()=>b(async()=>{const L=await q();await Nt(`/tasks/${L.id}/validate`,{}),a("Task structure valid")}),children:[g.jsx(jv,{size:14}),"Validate"]}),g.jsx("button",{onClick:()=>b(async()=>{const L=await q(),I=await Nt(`/tasks/${L.id}/preview`,{});r(I.trajectory),a(`Trajectory preview: ${I.duration_s}s · ${I.distance_mm} mm`)}),children:"Preview path"}),g.jsxs("button",{className:"success",onClick:n,children:[g.jsx(dd,{size:14}),"Run task"]}),g.jsx("button",{onClick:()=>fd(s.id+".json",s),title:"Export",children:g.jsx(Yv,{size:14})}),g.jsxs("label",{className:"button",title:"Import",children:[g.jsx(o0,{size:14}),g.jsx("input",{type:"file",accept:".json",hidden:!0,onChange:L=>{var z;const I=(z=L.target.files)==null?void 0:z[0];I&&b(async()=>{const P=JSON.parse(await I.text()),C=await Nt("/tasks",P);e(C),a("Task imported")})}})]})]}),g.jsxs("div",{className:"row",children:[g.jsx("button",{onClick:()=>b(async()=>w(await Nt("/tasks"))),children:"Load saved task"}),g.jsxs("select",{"aria-label":"Saved tasks",defaultValue:"",onChange:L=>{const I=M.find(z=>z.id===L.target.value);I&&e(I)},children:[g.jsx("option",{value:"",children:"Select task…"}),M.map(L=>g.jsx("option",{value:L.id,children:L.name},L.id))]}),g.jsx("button",{title:"Delete saved task",onClick:()=>b(async()=>{confirm("Delete this saved task?")&&(await Nt("/tasks/"+s.id,void 0,"DELETE"),a("Saved task deleted"))}),children:g.jsx(Qp,{size:14})})]})]})}const k1=[["Dashboard",Kv],["Computer Vision",fg],["Task Builder",hd],["Simulation",ud],["Hardware Control",dg],["Trajectory & Kinematics",n0],["Performance",ug],["Logs",r0],["Settings",pg]];function Ht({title:s,icon:e,extra:n,children:r,className:a=""}){return g.jsxs("section",{className:"panel "+a,children:[g.jsxs("div",{className:"panel-head",children:[g.jsxs("h2",{children:[e,s]}),n]}),r]})}const Mn=(s,e=1)=>s===void 0?"—":s.toFixed(e);function bl({value:s,label:e,suffix:n="",color:r="cyan"}){return g.jsxs("div",{className:"metric "+r,children:[g.jsxs("strong",{children:[s,g.jsx("small",{children:n})]}),g.jsx("span",{children:e})]})}function z1(){const[s,e]=Qe.useState(null),[n,r]=Qe.useState(!1),[a,c]=Qe.useState("Dashboard"),[d,h]=Qe.useState(F1),[f,m]=Qe.useState(null),[v,y]=Qe.useState("Orbit"),[x,M]=Qe.useState([]),[w,A]=Qe.useState([]),[S,_]=Qe.useState([]),[F,N]=Qe.useState([]),[b,q]=Qe.useState(""),[L,I]=Qe.useState(.5),[z,P]=Qe.useState([]),[C,V]=Qe.useState("demo"),[ne,Z]=Qe.useState("color"),[ae,ge]=Qe.useState("models/detector.pt"),[oe,he]=Qe.useState(.5),[B,le]=Qe.useState(12),[ue,O]=Qe.useState(!1),[Q,Ne]=Qe.useState([]),[J,fe]=Qe.useState("[[100,-100],[300,-100],[300,100],[100,100]]"),[Ee,Me]=Qe.useState("workspace"),[Le,ke]=Qe.useState(25),[Je,Pt]=Qe.useState([]),[pt,Dt]=Qe.useState("210, -90, 160"),[W,dn]=Qe.useState(!1),[lt,mt]=Qe.useState(""),[Ze,Ct]=Qe.useState(null),[qe,D]=Qe.useState([]),[T,ee]=Qe.useState(!1),[_e,xe]=Qe.useState([!1,!1,!1,!1]),pe=Qe.useRef();function Fe(k,ve=!1){m({text:k,error:ve}),clearTimeout(pe.current),pe.current=setTimeout(()=>m(null),8e3)}async function Ae(k){try{return await k()}catch(ve){Fe(ve.message,!0)}}async function Pe(k,ve={}){return Ae(async()=>await Nt(k,ve))}Qe.useEffect(()=>{let k=!1,ve,ot;function Rt(){ot=new WebSocket(`${location.protocol==="https:"?"wss":"ws"}://${location.host}/ws/telemetry`),ot.onopen=()=>r(!0),ot.onmessage=at=>{const sn=JSON.parse(at.data);e(sn),P(qt=>qt.length?qt:sn.robot.joints),D(qt=>[...qt.slice(-59),sn.camera.fps])},ot.onerror=()=>ot.close(),ot.onclose=()=>{r(!1),k||(ve=setTimeout(Rt,1500))}}return Rt(),()=>{k=!0,clearTimeout(ve),clearTimeout(pe.current),ot==null||ot.close()}},[]),Qe.useEffect(()=>{let k=!1;const ve=async()=>{try{const[Rt,at]=await Promise.all([Nt("/logs"+(lt?"?level="+lt:"")),Nt("/runs")]);k||(A(Rt),_(at))}catch{}};ve();const ot=setInterval(ve,3e3);return()=>{k=!0,clearInterval(ot)}},[lt]);async function ct(){await Ae(async()=>{const k=await Nt("/tasks",d);h(k),!((s==null?void 0:s.mode)==="hardware"&&!confirm("Execute this reviewed task on the physical arm? Keep the emergency stop accessible."))&&(await Nt(`/tasks/${k.id}/execute`,{confirmed:(s==null?void 0:s.mode)==="hardware"}),Fe("Task started"))})}async function we(){await Ae(async()=>{await Nt("/camera/start",{source:C,detector:ne,model:ae,confidence:oe,fps:B,classes:[]}),Fe("Camera worker started")})}const ze=()=>Pe("/robot/emergency-stop");if(!s)return g.jsxs("div",{className:"boot",children:[g.jsx(Pu,{size:58}),g.jsx("h1",{children:"VisionBot"}),g.jsx("p",{children:"Connecting to your robotics workspace…"}),g.jsx("div",{className:"spinner"}),g.jsx("small",{children:"Start the backend on port 8000. See README.md if this screen persists."}),g.jsx("button",{onClick:()=>location.reload(),children:"Reconnect"})]});const de=s,$e=!n||de.robot.busy||de.safety.estop,Be=g.jsxs("div",{className:"metrics-grid",children:[g.jsx(bl,{value:Mn(de.camera.fps),suffix:"FPS",label:"Camera processing"}),g.jsx(bl,{value:Mn(de.camera.latency_ms),suffix:"ms",label:"Frame processing",color:"green"}),g.jsx(bl,{value:de.performance.task_success_rate===null?"—":Mn(de.performance.task_success_rate,0),suffix:de.performance.task_success_rate===null?"":"%",label:"Recorded task success",color:"green"}),g.jsx(bl,{value:String(de.performance.runs),label:"Saved runs"})]}),ht=g.jsxs(Ht,{title:"Camera Feed",icon:g.jsx(qp,{size:16}),extra:g.jsxs("span",{className:"badge "+(de.camera.status==="online"?"good":"warn"),children:[g.jsx("i",{}),de.camera.status==="online"?"Live":"Offline"," · ",de.camera.config.source==="demo"?"Virtual camera":"Camera"]}),className:"camera-panel",children:[g.jsxs("div",{className:"camera-view",children:[g.jsx("img",{src:"/api/camera/stream",alt:"Object detection camera feed"}),g.jsxs("div",{className:"feed-tag",children:[de.camera.config.detector==="yolo"?"YOLO inference":"HSV color detection",g.jsx("br",{}),g.jsxs("span",{children:[de.camera.detections.length," objects · ",Mn(de.camera.fps)," FPS"]})]}),de.camera.error&&g.jsx("div",{className:"camera-error",children:de.camera.error})]}),g.jsxs("div",{className:"panel-toolbar",children:[g.jsxs("button",{onClick:()=>Ae(async()=>{const k=await Nt("/camera/snapshot",{});window.open(k.url,"_blank")}),children:[g.jsx(qp,{size:14}),"Snapshot"]}),g.jsxs("button",{className:de.camera.recording?"recording":"",onClick:()=>Ae(async()=>{const k=await Nt("/camera/record/"+(de.camera.recording?"stop":"start"),{});k.url&&window.open(k.url,"_blank")}),children:[g.jsx(a0,{size:14}),de.camera.recording?"Stop recording":"Record"]}),g.jsxs("button",{onClick:()=>O(!0),children:[g.jsx(Zp,{size:14}),"Calibrate"]}),g.jsx("button",{title:"Fullscreen feed",onClick:()=>{var k;return(k=document.querySelector(".camera-view"))==null?void 0:k.requestFullscreen()},children:g.jsx(Zv,{size:14})})]})]}),nt=g.jsxs(Ht,{title:"3D Simulation",icon:g.jsx(ud,{size:16}),extra:g.jsxs("span",{className:"badge good",children:[g.jsx("i",{}),de.simulation.engine]}),className:"simulation-panel",children:[g.jsxs("div",{className:"scene-wrap",children:[g.jsx(L1,{state:de,view:v,preview:x}),g.jsxs("div",{className:"tcp-overlay",children:[g.jsx("strong",{children:"End Effector Pose"}),["X","Y","Z"].map((k,ve)=>g.jsxs("div",{children:[g.jsx("span",{children:k}),Mn(de.robot.tcp.position[ve])," mm"]},k)),g.jsx("small",{children:"Frame: robot base"})]}),g.jsx("div",{className:"scene-label",children:de.mode==="hardware"?"COMMAND MIRROR • NOT MEASURED":"SIMULATION • DIGITAL TWIN"})]}),g.jsxs("div",{className:"panel-toolbar",children:[g.jsx("button",{disabled:$e||de.mode!=="simulation",onClick:()=>Pe("/simulation/reset"),title:"Reset world",children:g.jsx(t0,{size:14})}),g.jsxs("button",{disabled:$e,onClick:()=>Pe("/robot/home"),children:[g.jsx($v,{size:14}),"Home"]}),g.jsx("button",{onClick:()=>Pe("/simulation/pause"),disabled:de.mode!=="simulation",children:de.safety.paused?g.jsx(dd,{size:14}):g.jsx(Jv,{size:14})}),g.jsx("select",{"aria-label":"Simulation camera",value:v,onChange:k=>y(k.target.value),children:["Orbit","Top","Front","Side"].map(k=>g.jsx("option",{children:k},k))}),g.jsx("select",{"aria-label":"Simulation speed",value:de.simulation.speed,disabled:de.mode!=="simulation",onChange:k=>Pe("/simulation/speed",{speed:Number(k.target.value)}),children:[.25,.5,1,2,5].map(k=>g.jsxs("option",{value:k,children:[k,"×"]},k))})]})]}),St=g.jsx(Ht,{title:"Robot Control",icon:g.jsx(Pu,{size:16}),children:g.jsxs("div",{className:"panel-body",children:[g.jsxs("div",{className:"segmented",children:[g.jsx("button",{className:de.mode==="simulation"?"active":"",onClick:()=>Pe("/robot/mode",{mode:"simulation"}),children:"Simulation"}),g.jsx("button",{className:de.mode==="hardware"?"hardware active":"",onClick:()=>{xe([!1,!1,!1,!1]),ee(!0)},children:"Hardware"})]}),g.jsxs("div",{className:"keyval",children:[g.jsx("span",{children:"Arduino"}),g.jsx("span",{className:de.hardware.connected?"green-text":"muted",children:de.hardware.connected?"Connected":"Not connected"})]}),g.jsxs("div",{className:"keyval",children:[g.jsx("span",{children:"Robot"}),g.jsx("span",{children:de.robot.name})]}),g.jsxs("div",{className:"row speed",children:[g.jsx("label",{children:"Manual speed"}),g.jsx("input",{"aria-label":"Motion speed",type:"range",min:".05",max:"1",step:".05",value:L,onChange:k=>I(Number(k.target.value))}),g.jsxs("span",{children:[Math.round(L*100),"%"]})]}),g.jsxs("button",{className:"emergency",onClick:ze,children:[g.jsx(Qv,{size:18}),"Emergency Stop"]}),de.safety.estop&&g.jsx("button",{className:"reset-stop",onClick:()=>Pe("/robot/reset-stop"),children:"Reset emergency latch"})]})}),j=g.jsx(Ht,{title:"Joint Angles",children:g.jsxs("div",{className:"panel-body joint-list",children:[z.map((k,ve)=>g.jsxs("div",{className:"joint",children:[g.jsxs("label",{children:["J",ve+1]}),g.jsx("input",{"aria-label":`Joint ${ve+1}`,type:"range",min:de.robot.limits[ve].min,max:de.robot.limits[ve].max,step:"1",value:k,disabled:$e,onChange:ot=>P(z.map((Rt,at)=>ve===at?Number(ot.target.value):Rt))}),g.jsxs("span",{children:[k.toFixed(0),"°"]}),g.jsxs("small",{children:[de.robot.joints[ve].toFixed(0),"°"]})]},ve)),g.jsxs("div",{className:"row",children:[g.jsx("button",{className:"primary",disabled:$e,onClick:()=>Pe("/robot/joints",{joints:z,speed:L}),children:"Apply joints"}),g.jsx("button",{onClick:()=>P([...de.robot.joints]),children:"Sync"})]}),g.jsxs("div",{className:"tcp-small",children:[g.jsx("span",{children:"TCP POSITION · mm"}),g.jsx("div",{children:["X","Y","Z"].map((k,ve)=>g.jsxs("b",{children:[g.jsx("small",{children:k}),Mn(de.robot.tcp.position[ve])]},k))})]}),g.jsxs("div",{className:"row",children:[g.jsx("button",{disabled:$e,onClick:()=>Pe("/robot/gripper/open"),children:"Open gripper"}),g.jsx("button",{disabled:$e,onClick:()=>Pe("/robot/gripper/close"),children:"Close"})]})]})}),De=g.jsxs(Ht,{title:"Object Detection",icon:g.jsx(fg,{size:15}),children:[g.jsxs("div",{className:"table-wrap",children:[g.jsxs("table",{children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx("th",{children:"ID"}),g.jsx("th",{children:"Class"}),g.jsx("th",{children:"Score¹"}),g.jsx("th",{children:"Robot XYZ (mm)"})]})}),g.jsx("tbody",{children:de.camera.detections.map(k=>g.jsxs("tr",{children:[g.jsx("td",{children:k.id}),g.jsxs("td",{children:[g.jsx("i",{className:"dot "+k.class_name}),k.class_name]}),g.jsxs("td",{children:[Mn(k.confidence*100,0),"%"]}),g.jsx("td",{children:k.robot_position?k.robot_position.map(ve=>Mn(ve,0)).join(", "):"Uncalibrated"})]},k.id))})]}),!de.camera.detections.length&&g.jsx("p",{className:"empty",children:"No current detections"})]}),g.jsx("p",{className:"footnote",children:"¹ Color mode score is contour fill ratio; YOLO mode shows model confidence."})]}),ce=g.jsx(Ht,{title:"Task Progress",icon:g.jsx(hd,{size:15}),children:g.jsxs("div",{className:"panel-body",children:[g.jsxs("div",{className:"keyval",children:[g.jsx("strong",{children:de.task.name}),g.jsxs("span",{children:[de.task.step,"/",de.task.total]})]}),g.jsx("progress",{max:Math.max(1,de.task.total),value:de.task.step}),g.jsx("ol",{className:"progress-list",children:(de.task.steps||d.steps.map(k=>k.type.replaceAll("_"," "))).map((k,ve)=>g.jsxs("li",{className:ve<de.task.step?"done":ve===de.task.step&&de.robot.busy?"current":"",children:[g.jsx("span",{children:ve<de.task.step?"✓":ve+1}),k]},ve))}),g.jsxs("div",{className:"keyval",children:[g.jsx("span",{children:"Status"}),g.jsx("b",{children:de.task.status})]}),de.task.error&&g.jsx("p",{className:"error-text",children:de.task.error})]})}),me=g.jsx(Ht,{title:"Task Programming",icon:g.jsx(hd,{size:16}),children:g.jsx(O1,{task:d,setTask:h,onRun:ct,onPreview:M,notify:Fe})}),Ue=g.jsx(Ht,{title:"Event Stream",icon:g.jsx(ug,{size:16}),extra:g.jsxs("button",{onClick:()=>c("Logs"),children:["View logs ",g.jsx($p,{size:13})]}),children:g.jsx("div",{className:"compact-logs",children:w.slice(0,5).map((k,ve)=>g.jsxs("div",{children:[g.jsx("time",{children:new Date(k.timestamp*1e3).toLocaleTimeString()}),g.jsx("span",{children:k.message}),g.jsx("i",{className:k.level==="ERROR"||k.level==="SAFETY"?"bad":"good"})]},ve))})});return g.jsxs("div",{className:"app",children:[g.jsxs("header",{children:[g.jsxs("div",{className:"brand",children:[g.jsx("div",{className:"brand-icon",children:g.jsx(Pu,{size:34})}),g.jsxs("div",{children:[g.jsxs("h1",{children:["VisionBot",g.jsx("span",{children:" / LAB"})]}),g.jsx("p",{children:"AI Robotic Arm Control Platform"}),g.jsxs("small",{children:["See ",g.jsx("b",{children:"›"})," Plan ",g.jsx("b",{children:"›"})," Control ",g.jsx("b",{children:"›"})," Execute"]})]})]}),g.jsxs("div",{className:"status-pills",children:[g.jsxs("div",{children:[g.jsx("i",{className:de.camera.status==="online"?"good":"bad"}),g.jsxs("span",{children:["Camera",g.jsx("strong",{children:de.camera.status})]})]}),g.jsxs("div",{children:[g.jsx("i",{className:n?"good":"bad"}),g.jsxs("span",{children:["Backend",g.jsx("strong",{children:n?"Connected":"Reconnecting"})]})]}),g.jsxs("div",{children:[g.jsx("i",{className:de.mode==="hardware"?"warn":"blue"}),g.jsxs("span",{children:["Mode",g.jsx("strong",{children:de.mode})]})]})]}),g.jsx("button",{className:"icon-button",onClick:()=>c("Settings"),title:"Settings",children:g.jsx(pg,{size:20})}),g.jsxs("div",{className:"profile",children:[g.jsx("div",{children:"SS"}),g.jsxs("span",{children:["Shivam Singh",g.jsx("small",{children:"Robotics Workspace"})]})]})]}),g.jsxs("aside",{children:[g.jsx("nav",{children:k1.map(([k,ve])=>g.jsxs("button",{className:a===k?"selected":"",onClick:()=>c(k),children:[g.jsx(ve,{size:17}),k]},k))}),g.jsxs("div",{className:"sidebar-bottom",children:[g.jsxs("div",{className:"resource",children:[g.jsx("h4",{children:"System Resources"}),g.jsxs("div",{children:["CPU ",g.jsxs("b",{children:[Mn(de.performance.cpu,0),"%"]})]}),g.jsx("progress",{value:de.performance.cpu,max:"100"}),g.jsxs("div",{children:["RAM ",g.jsxs("b",{children:[Mn(de.performance.ram,0),"%"]})]}),g.jsx("progress",{value:de.performance.ram,max:"100"}),g.jsx("small",{children:"CPU inference · local workspace"})]}),g.jsxs("div",{className:"quick",children:[g.jsx("h4",{children:"Quick Actions"}),g.jsxs("button",{className:"success",disabled:$e,onClick:ct,children:[g.jsx(dd,{size:17}),"Start task"]}),g.jsxs("button",{className:"stop",onClick:()=>Pe("/robot/stop"),children:[g.jsx(s0,{size:16}),"Stop"]}),g.jsxs("button",{className:"emergency",onClick:ze,children:[g.jsx(Lu,{size:17}),"Emergency stop"]})]}),g.jsxs("small",{className:"version",children:["VisionBot v",de.version,g.jsx("span",{children:"SIMULATE FIRST"})]})]})]}),g.jsxs("main",{children:[g.jsxs("div",{className:"page-heading",children:[g.jsxs("div",{children:[g.jsx("span",{className:"eyebrow",children:"ROBOTICS WORKSPACE"}),g.jsx("h2",{children:a})]}),g.jsx("span",{className:"mode-label "+(de.safety.estop?"danger":""),children:de.safety.estop?"EMERGENCY STOP LATCHED":de.mode==="simulation"?"SIMULATION ENVIRONMENT":"PHYSICAL HARDWARE ENABLED"})]}),!n&&g.jsx("div",{className:"banner danger",children:"Backend disconnected. Live controls are unavailable."}),de.mode==="hardware"&&g.jsx("div",{className:"banner",children:"Physical arm enabled. Telemetry shows commanded servo angles, not measured joint position."}),a==="Dashboard"&&g.jsxs("div",{className:"dashboard",children:[g.jsxs("div",{className:"workspace",children:[g.jsxs("div",{className:"view-grid",children:[ht,nt]}),g.jsxs("div",{className:"middle-grid",children:[De,g.jsx(Ht,{title:"Coordinate Transformation",icon:g.jsx(Zp,{size:15}),children:g.jsxs("div",{className:"panel-body",children:[g.jsxs("div",{className:"transform-flow",children:["CAMERA ",g.jsx($p,{size:16})," ROBOT"]}),g.jsx("p",{children:de.camera.calibration.name||"No active calibration"}),de.camera.detections.slice(0,1).map(k=>g.jsxs("div",{children:[g.jsx("small",{children:k.class_name}),g.jsxs("div",{className:"coordinate",children:[k.center.map(ve=>Mn(ve,0)).join(", ")," ",g.jsx("span",{children:"px"})]}),g.jsxs("div",{className:"coordinate",children:[k.robot_position?k.robot_position.map(ve=>Mn(ve)).join(", "):"Calibration needed"," ",g.jsx("span",{children:"mm"})]})]},k.id)),g.jsx("button",{onClick:()=>O(!0),children:"Calibrate workspace"})]})}),ce]}),g.jsxs("div",{className:"bottom-grid",children:[me,g.jsxs("div",{className:"stack",children:[g.jsxs(Ht,{title:"Simulation vs Hardware",children:[g.jsxs("div",{className:"comparison",children:[g.jsxs("div",{children:[g.jsx(ud,{}),g.jsx("h3",{children:"Simulation"}),g.jsx("p",{children:de.simulation.engine}),g.jsx("span",{className:"badge good",children:"Available"})]}),g.jsxs("div",{children:[g.jsx(dg,{}),g.jsx("h3",{children:"Arduino"}),g.jsx("p",{children:"Acknowledged serial protocol"}),g.jsx("span",{className:"badge "+(de.hardware.connected?"good":"warn"),children:de.hardware.connected?"Connected":"Not connected"})]})]}),g.jsx("p",{className:"comparison-note",children:"Same tasks · same planner · two controllers"})]}),Ue]})]})]}),g.jsxs("div",{className:"right-rail",children:[St,j,g.jsxs(Ht,{title:"Performance Metrics",children:[Be,g.jsx("p",{className:"footnote",children:"Accuracy and physical position error require ground truth and sensors."})]}),Ue]})]}),a==="Computer Vision"&&g.jsxs("div",{className:"two-col",children:[g.jsxs("div",{children:[ht,De]}),g.jsxs("div",{className:"stack",children:[g.jsx(Ht,{title:"Camera & Detection",children:g.jsxs("div",{className:"form panel-body",children:[g.jsxs("label",{children:["Source",g.jsx("input",{value:C,onChange:k=>V(k.target.value),placeholder:"demo, 0, RTSP URL or file path"})]}),g.jsxs("div",{className:"row",children:[g.jsx("button",{onClick:()=>{V("demo")},children:"Virtual camera"}),g.jsx("button",{onClick:()=>V("0"),children:"USB camera 0"}),g.jsxs("label",{className:"button",children:[g.jsx(B1,{}),"Upload media",g.jsx("input",{hidden:!0,type:"file",accept:"image/*,video/*",onChange:k=>{var ot;const ve=(ot=k.target.files)==null?void 0:ot[0];ve&&Ae(async()=>{const Rt=new FormData;Rt.append("file",ve);const at=await Nt("/camera/upload",Rt);V(at.source),Fe("Uploaded. Click Start camera to process it.")})}})]})]}),g.jsxs("label",{children:["Detector",g.jsxs("select",{value:ne,onChange:k=>Z(k.target.value),children:[g.jsx("option",{value:"color",children:"HSV color objects (no model needed)"}),g.jsx("option",{value:"yolo",children:"YOLO · installed model required"})]})]}),ne==="yolo"&&g.jsxs("label",{children:["Trusted model path",g.jsx("input",{value:ae,onChange:k=>ge(k.target.value)})]}),g.jsxs("label",{children:["Confidence / fill-ratio threshold",g.jsx("input",{type:"number",min:".05",max:".99",step:".05",value:oe,onChange:k=>he(Number(k.target.value))})]}),g.jsxs("label",{children:["Processing limit (FPS)",g.jsx("input",{type:"number",min:"1",max:"30",value:B,onChange:k=>le(Number(k.target.value))})]}),g.jsxs("div",{className:"row",children:[g.jsx("button",{className:"primary",onClick:we,children:"Start camera"}),g.jsx("button",{onClick:()=>Pe("/camera/stop"),children:"Stop camera"}),g.jsx("button",{onClick:()=>{le(6),Fe("CPU Saver selected. Restart camera to apply.")},children:"CPU Saver"})]}),g.jsx("p",{className:"muted",children:"Frames are normalized to 640×480. Recalibrate when the camera, crop, or source changes. Color segmentation does not identify arbitrary objects."})]})}),g.jsx(Ht,{title:"Workspace calibration",children:g.jsxs("div",{className:"panel-body",children:[g.jsx("p",{children:"Map at least four non-collinear pixel points to measured XY positions on one plane."}),g.jsx("button",{onClick:()=>O(!0),children:"Open calibration tool"}),g.jsx("button",{onClick:()=>Ae(async()=>{const k=await Nt("/calibration/markers");Fe(k.length?JSON.stringify(k):"No DICT_4X4_50 markers found")}),children:"Detect ArUco markers"}),g.jsx("button",{onClick:()=>Ae(async()=>Pt(await Nt("/calibration"))),children:"Refresh saved profiles"}),Je.map(k=>g.jsxs("div",{className:"keyval",children:[g.jsxs("span",{children:[k.name," · fit RMSE ",Mn(k.fit_rmse_mm)," mm"]}),g.jsx("button",{onClick:()=>Pe(`/calibration/${k.name}/load`),children:"Load"})]},k.name))]})})]})]}),a==="Task Builder"&&g.jsxs("div",{className:"two-col wide-left",children:[g.jsx("div",{children:me}),g.jsxs("div",{className:"stack",children:[nt,ce]})]}),a==="Simulation"&&g.jsxs("div",{className:"two-col wide-left",children:[g.jsx("div",{className:"large-scene",children:nt}),g.jsxs("div",{className:"stack",children:[St,ce,g.jsx(Ht,{title:"World Objects",children:g.jsxs("div",{className:"panel-body",children:[de.simulation.objects.map(k=>g.jsxs("div",{className:"keyval",children:[g.jsx("b",{children:k.name}),g.jsx("span",{children:k.position.map(ve=>Mn(ve,0)).join(", ")})]},k.name)),g.jsx("p",{className:"muted",children:"The demo uses proximity-based grasp attachment. PyBullet, when installed, adds rigid-body object dynamics."})]})})]})]}),a==="Hardware Control"&&g.jsxs("div",{className:"two-col",children:[g.jsxs("div",{className:"stack",children:[St,g.jsx(Ht,{title:"Arduino Connection",children:g.jsxs("div",{className:"panel-body form",children:[g.jsx("p",{children:"Flash the included firmware, commission servo mappings, and connect the normally-closed emergency interlock before enabling motion."}),g.jsx("button",{onClick:()=>Ae(async()=>{const k=await Nt("/hardware/ports");N(k),k.length?q(k[0].port):Fe("No serial ports found. Connect an Arduino and scan again.")}),children:"Scan serial ports"}),g.jsxs("select",{value:b,onChange:k=>q(k.target.value),children:[g.jsx("option",{value:"",children:"Select serial port…"}),F.map(k=>g.jsxs("option",{value:k.port,children:[k.port," — ",k.description]},k.port))]}),g.jsxs("div",{className:"row",children:[g.jsx("button",{disabled:!b,onClick:()=>Ae(async()=>{confirm("Confirm firmware, wiring, servo limits, and physical emergency stop have been checked.")&&(await Nt("/robot/connect",{port:b,baud:115200,confirmed:!0}),Fe("Connected; motors remain disabled until hardware mode is enabled."))}),children:"Connect Arduino"}),g.jsx("button",{onClick:()=>Pe("/robot/disconnect"),children:"Disconnect"})]}),g.jsx("p",{className:"error-text",children:de.hardware.error}),g.jsx("pre",{children:JSON.stringify(de.hardware.telemetry,null,2)})]})})]}),g.jsxs("div",{children:[j,g.jsx(Ht,{title:"Commissioning Checklist",children:g.jsxs("div",{className:"panel-body",children:[g.jsxs("ol",{className:"instructions",children:[g.jsx("li",{children:"Use an external servo supply with common ground."}),g.jsx("li",{children:"Set joint-to-servo calibration in firmware for your arm."}),g.jsx("li",{children:"Install a physical power-cut emergency stop. The software input alone is not a power isolator."}),g.jsx("li",{children:"Test unloaded at low speed with a clear workspace."}),g.jsx("li",{children:"Use a real camera and measured workspace calibration for object tasks."})]}),g.jsx("p",{children:"Hardware execution has not been tested on your physical arm."})]})})]})]}),a==="Trajectory & Kinematics"&&g.jsxs("div",{className:"two-col",children:[g.jsx("div",{children:nt}),g.jsxs("div",{className:"stack",children:[j,g.jsx(Ht,{title:"Cartesian Control",children:g.jsxs("div",{className:"panel-body form",children:[g.jsxs("label",{children:["Target X, Y, Z (mm)",g.jsx("input",{value:pt,onChange:k=>Dt(k.target.value)})]}),g.jsxs("label",{className:"check",children:[g.jsx("input",{type:"checkbox",checked:W,onChange:k=>dn(k.target.checked)}),"Linear TCP path (8 mm IK waypoints)"]}),g.jsxs("div",{className:"row",children:[g.jsx("button",{onClick:()=>Ae(async()=>{const k=await Nt("/kinematics/ik",{position:pt.split(",").map(Number),speed:L});P(k.joints),Fe("IK solved. Review joint angles before applying.")}),children:"Solve IK"}),g.jsx("button",{disabled:$e,className:"primary",onClick:()=>Pe("/robot/tcp",{position:pt.split(",").map(Number),speed:L,linear:W}),children:"Move TCP"}),g.jsx("button",{onClick:()=>Ae(async()=>{const k=await Nt("/kinematics/fk",{joints:z,speed:L});Fe("FK position (mm): "+k.position.map(ve=>Mn(ve)).join(", "))}),children:"Calculate FK"})]}),g.jsx("p",{className:"muted",children:"Position-only IK by default. REST API also accepts XYZ Euler orientation. Every generated sample is checked against joint, workspace, table, and forbidden-zone constraints."})]})})]})]}),a==="Performance"&&g.jsxs(g.Fragment,{children:[g.jsx(Ht,{title:"Runtime Metrics",children:Be}),g.jsxs("div",{className:"two-col",children:[g.jsx(Ht,{title:"Camera FPS · last 12 seconds",children:g.jsx("div",{className:"chart",children:g.jsxs("svg",{viewBox:"0 0 600 170",children:[g.jsx("path",{d:"M0 150H600 M0 100H600 M0 50H600",stroke:"#20344b",fill:"none"}),g.jsx("polyline",{points:qe.map((k,ve)=>`${ve*10},${150-Math.min(35,k)*4}`).join(" "),fill:"none",stroke:"#1cbded",strokeWidth:"2"})]})})}),g.jsx(Ht,{title:"Measured vs Unavailable",children:g.jsxs("div",{className:"panel-body",children:[g.jsx("p",{children:"Recorded: camera FPS, frame-processing latency, task duration, planned TCP distance, CPU and RAM usage."}),g.jsx("p",{className:"muted",children:"Detection accuracy requires a labeled evaluation set. Actual position and joint error require encoder or external tracking data. Those values remain unavailable."})]})})]}),g.jsx(Ht,{title:"Task Reports & Replay",extra:g.jsxs("button",{onClick:()=>fd("visionbot-runs.json",S),children:[g.jsx(hg,{size:14}),"Export summaries"]}),children:g.jsx("div",{className:"table-wrap",children:g.jsxs("table",{children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx("th",{children:"Task"}),g.jsx("th",{children:"Mode"}),g.jsx("th",{children:"Status"}),g.jsx("th",{children:"Duration"}),g.jsx("th",{children:"Planned path"}),g.jsx("th",{children:"Report"})]})}),g.jsx("tbody",{children:S.map(k=>g.jsxs("tr",{children:[g.jsx("td",{children:k.task}),g.jsx("td",{children:k.mode}),g.jsx("td",{children:k.status}),g.jsxs("td",{children:[k.duration_s,"s"]}),g.jsxs("td",{children:[k.distance_mm," mm"]}),g.jsxs("td",{children:[g.jsx("button",{onClick:()=>Ae(async()=>fd(k.id+".json",await Nt("/runs/"+k.id))),children:"JSON"}),g.jsx("button",{disabled:$e||de.mode!=="simulation",onClick:()=>Pe(`/runs/${k.id}/replay`),children:"Replay motion"})]})]},k.id))})]})})})]}),a==="Logs"&&g.jsx(Ht,{title:"Structured System Logs",extra:g.jsxs("div",{className:"row",children:[g.jsx("select",{value:lt,onChange:k=>mt(k.target.value),children:["","INFO","SUCCESS","WARNING","ERROR","SAFETY"].map(k=>g.jsx("option",{value:k,children:k||"All levels"},k))}),g.jsx("a",{className:"button",href:"/api/logs/export",children:"Export CSV"})]}),children:g.jsx("div",{className:"table-wrap",children:g.jsxs("table",{children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx("th",{children:"Timestamp"}),g.jsx("th",{children:"Level"}),g.jsx("th",{children:"Event"})]})}),g.jsx("tbody",{children:w.map((k,ve)=>g.jsxs("tr",{children:[g.jsx("td",{children:new Date(k.timestamp*1e3).toLocaleString()}),g.jsx("td",{children:g.jsx("span",{className:"badge "+(["ERROR","SAFETY"].includes(k.level)?"bad":"good"),children:k.level})}),g.jsx("td",{children:k.message})]},ve))})]})})}),a==="Settings"&&g.jsxs("div",{className:"two-col",children:[g.jsx(Ht,{title:"Configuration Files",children:g.jsxs("div",{className:"panel-body",children:[g.jsxs("p",{children:["Robot geometry and limits are configured in ",g.jsx("code",{children:"configs/robot.yaml"}),". Startup settings live in ",g.jsx("code",{children:"configs/config.yaml"}),". Restart the backend after edits."]}),g.jsx("button",{onClick:()=>Ae(async()=>Ct(await Nt("/config"))),children:"Read active configuration"}),Ze&&g.jsx("pre",{children:JSON.stringify(Ze,null,2)}),g.jsx("p",{className:"muted",children:"The server binds to localhost. This prototype has no multi-user authentication; do not expose it directly to a network."})]})}),g.jsx(Ht,{title:"Workspace",children:g.jsxs("div",{className:"panel-body",children:[g.jsx("h3",{children:"VisionBot v1.0.0"}),g.jsx("p",{children:"Simulation-first robotics development workspace."}),g.jsx("a",{className:"button",target:"_blank",href:"/docs",children:"Open interactive API documentation"}),g.jsxs("div",{className:"keyval",children:[g.jsx("span",{children:"Physics"}),g.jsx("b",{children:de.simulation.engine})]}),g.jsxs("div",{className:"keyval",children:[g.jsx("span",{children:"Storage"}),g.jsx("b",{children:"Local SQLite"})]}),g.jsxs("div",{className:"keyval",children:[g.jsx("span",{children:"Inference"}),g.jsx("b",{children:"CPU"})]}),g.jsxs("p",{children:["See ",g.jsx("code",{children:"docs/FEATURES.md"})," for implemented features and remaining extensions."]})]})})]}),g.jsxs("footer",{children:[g.jsxs("span",{children:[g.jsx(e0,{size:12})," ",n?"Telemetry connected · 5 Hz":"Disconnected"]}),g.jsx("span",{children:"Build once → Simulate → Validate → Control"}),g.jsx("span",{children:de.robot.busy?"● Executing motion":"● Ready"})]})]}),f&&g.jsxs("div",{role:"alert",className:"toast "+(f.error?"toast-error":""),children:[g.jsx("span",{children:f.error?g.jsx(Lu,{size:18}):g.jsx(Wv,{size:18})}),f.text,g.jsx("button",{onClick:()=>m(null),children:"×"})]}),T&&g.jsx("div",{className:"modal-backdrop",children:g.jsxs("div",{className:"modal",children:[g.jsxs("h2",{children:[g.jsx(Lu,{})," Enable physical hardware"]}),g.jsx("p",{children:"Verify all conditions before arming. This can energize servos."}),["Workspace is clear and the arm is unloaded","Physical emergency stop is accessible and tested","Servo mappings and joint limits match this arm","Robot is at its commissioned startup pose"].map((k,ve)=>g.jsxs("label",{className:"check",children:[g.jsx("input",{type:"checkbox",checked:_e[ve],onChange:ot=>xe(_e.map((Rt,at)=>ve===at?ot.target.checked:Rt))}),k]},k)),g.jsxs("div",{className:"row",children:[g.jsx("button",{onClick:()=>ee(!1),children:"Cancel"}),g.jsx("button",{className:"warning-button",disabled:!_e.every(Boolean)||!de.hardware.connected,onClick:()=>Ae(async()=>{await Nt("/robot/mode",{mode:"hardware",confirmed:!0}),ee(!1),Fe("Hardware mode enabled")}),children:"Enable hardware"})]}),!de.hardware.connected&&g.jsx("p",{children:"Connect an Arduino on the Hardware Control page first."})]})}),ue&&g.jsx("div",{className:"modal-backdrop",children:g.jsxs("div",{className:"modal calibration-modal",children:[g.jsx("h2",{children:"Planar workspace calibration"}),g.jsx("p",{children:"Click 4 or more well-spaced points, then enter corresponding measured robot XY coordinates in the same order. The display maps to the processed 640×480 frame."}),g.jsxs("div",{className:"calibration-image",onClick:k=>{const ve=k.currentTarget.getBoundingClientRect();Ne([...Q,[Math.round((k.clientX-ve.left)/ve.width*640),Math.round((k.clientY-ve.top)/ve.height*480)]])},children:[g.jsx("img",{src:"/api/camera/stream",alt:"Click calibration points"}),Q.map((k,ve)=>g.jsx("span",{style:{left:`${k[0]/640*100}%`,top:`${k[1]/480*100}%`},children:ve+1},ve))]}),g.jsxs("div",{className:"row",children:[g.jsxs("small",{children:["Pixels: ",JSON.stringify(Q)]}),g.jsx("button",{onClick:()=>Ne([]),children:"Clear points"})]}),g.jsxs("div",{className:"form",children:[g.jsxs("label",{children:["Robot XY point pairs (JSON)",g.jsx("textarea",{value:J,onChange:k=>fe(k.target.value)})]}),g.jsxs("div",{className:"row",children:[g.jsxs("label",{children:["Profile",g.jsx("input",{value:Ee,onChange:k=>Me(k.target.value)})]}),g.jsxs("label",{children:["Object center Z (mm)",g.jsx("input",{type:"number",value:Le,onChange:k=>ke(Number(k.target.value))})]})]}),g.jsx("small",{children:"Fit residual is not independent validation. Verify with a separate measured point before hardware use."}),g.jsxs("div",{className:"row",children:[g.jsx("button",{onClick:()=>O(!1),children:"Cancel"}),g.jsx("button",{className:"primary",disabled:Q.length<4,onClick:()=>Ae(async()=>{const k=await Nt("/calibration",{name:Ee,pixels:Q,robot:JSON.parse(J),z:Le});Fe(`Calibration saved · fit RMSE ${Mn(k.fit_rmse_mm,3)} mm`),O(!1)}),children:"Calculate & save"})]})]})]})})]})}function B1(){return g.jsx(hg,{size:14,style:{transform:"rotate(180deg)"}})}Bv.createRoot(document.getElementById("root")).render(g.jsx(Nv.StrictMode,{children:g.jsx(z1,{})}));export{Nv as W,U1 as _,g as j,Qe as r};
