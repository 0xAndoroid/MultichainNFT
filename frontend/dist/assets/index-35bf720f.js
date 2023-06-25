import{a as We,g as Dt,h as qr,j as Dr,E as Ft}from"./index-e70b2140.js";import{h as Fr,x as $r,b as jr,y as Hr,z as zr,A as Wr,c as Vr,B as Jr,C as Qr,D as Kr,E as Yr,F as Gr,e as Zr,m as Xr,i as eo,g as to,G as no,s as ro,f as oo,a as io,d as so,k as ie,I as ao,n as vt,J as Et,H as co}from"./http-9cf5eb5a.js";import{b as j,l as N,y as O,k as ne,S as B,D as he,E as lo,F as uo,a as we,c as Ve,d as Je,V as $t,s as jt,_ as Ht,A as zt,e as Wt,T as Vt,q as Jt,x as Qt,G as Kt,f as Yt,P as fo}from"./hooks.module-44effd41.js";const Te="Session currently connected",$="Session currently disconnected",ho="Session Rejected",go="Missing JSON RPC response",_o='JSON-RPC success response must include "result" field',po='JSON-RPC error response must include "error" field',mo='JSON RPC request must have valid "method" value',wo='JSON RPC request must have valid "id" value',yo="Missing one of the required parameters: bridge / uri / session",Ct="JSON RPC response format is invalid",bo="URI format is invalid",vo="QRCode Modal not provided",St="User close QRCode Modal",Eo=["session_request","session_update","exchange_key","connect","disconnect","display_uri","modal_closed","transport_open","transport_close","transport_error"],Co=["wallet_addEthereumChain","wallet_switchEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode"],Qe=["eth_sendTransaction","eth_signTransaction","eth_sign","eth_signTypedData","eth_signTypedData_v1","eth_signTypedData_v2","eth_signTypedData_v3","eth_signTypedData_v4","personal_sign",...Co],Ue="WALLETCONNECT_DEEPLINK_CHOICE",So={1:"mainnet",3:"ropsten",4:"rinkeby",5:"goerli",42:"kovan"};var Gt=Ke;Ke.strict=Zt;Ke.loose=Xt;var Io=Object.prototype.toString,Ro={"[object Int8Array]":!0,"[object Int16Array]":!0,"[object Int32Array]":!0,"[object Uint8Array]":!0,"[object Uint8ClampedArray]":!0,"[object Uint16Array]":!0,"[object Uint32Array]":!0,"[object Float32Array]":!0,"[object Float64Array]":!0};function Ke(t){return Zt(t)||Xt(t)}function Zt(t){return t instanceof Int8Array||t instanceof Int16Array||t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Uint16Array||t instanceof Uint32Array||t instanceof Float32Array||t instanceof Float64Array}function Xt(t){return Ro[Io.call(t)]}const ko=We(Gt);var To=Gt.strict,No=function(e){if(To(e)){var n=Buffer.from(e.buffer);return e.byteLength!==e.buffer.byteLength&&(n=n.slice(e.byteOffset,e.byteOffset+e.byteLength)),n}else return Buffer.from(e)};const xo=We(No),Ye="hex",Ge="utf8",Mo="binary",Ao="buffer",Oo="array",Lo="typed-array",Bo="array-buffer",ye="0";function W(t){return new Uint8Array(t)}function Ze(t,e=!1){const n=t.toString(Ye);return e?se(n):n}function Xe(t){return t.toString(Ge)}function en(t){return t.readUIntBE(0,t.length)}function G(t){return xo(t)}function U(t,e=!1){return Ze(G(t),e)}function tn(t){return Xe(G(t))}function nn(t){return en(G(t))}function et(t){return Buffer.from(V(t),Ye)}function P(t){return W(et(t))}function Uo(t){return Xe(et(t))}function Po(t){return nn(P(t))}function tt(t){return Buffer.from(t,Ge)}function rn(t){return W(tt(t))}function qo(t,e=!1){return Ze(tt(t),e)}function Do(t){const e=parseInt(t,10);return ri(ni(e),"Number can only safely store up to 53 bits"),e}function Fo(t){return zo(nt(t))}function $o(t){return rt(nt(t))}function jo(t,e){return Wo(nt(t),e)}function Ho(t){return`${t}`}function nt(t){const e=(t>>>0).toString(2);return it(e)}function zo(t){return G(rt(t))}function rt(t){return new Uint8Array(Go(t).map(e=>parseInt(e,2)))}function Wo(t,e){return U(rt(t),e)}function Vo(t){return!(typeof t!="string"||!new RegExp(/^[01]+$/).test(t)||t.length%8!==0)}function on(t,e){return!(typeof t!="string"||!t.match(/^0x[0-9A-Fa-f]*$/)||e&&t.length!==2+2*e)}function be(t){return Buffer.isBuffer(t)}function ot(t){return ko.strict(t)&&!be(t)}function sn(t){return!ot(t)&&!be(t)&&typeof t.byteLength<"u"}function Jo(t){return be(t)?Ao:ot(t)?Lo:sn(t)?Bo:Array.isArray(t)?Oo:typeof t}function Qo(t){return Vo(t)?Mo:on(t)?Ye:Ge}function Ko(...t){return Buffer.concat(t)}function an(...t){let e=[];return t.forEach(n=>e=e.concat(Array.from(n))),new Uint8Array([...e])}function Yo(t,e=8){const n=t%e;return n?(t-n)/e*e+e:t}function Go(t,e=8){const n=it(t).match(new RegExp(`.{${e}}`,"gi"));return Array.from(n||[])}function it(t,e=8,n=ye){return Zo(t,Yo(t.length,e),n)}function Zo(t,e,n=ye){return oi(t,e,!0,n)}function V(t){return t.replace(/^0x/,"")}function se(t){return t.startsWith("0x")?t:`0x${t}`}function Xo(t){return t=V(t),t=it(t,2),t&&(t=se(t)),t}function ei(t){const e=t.startsWith("0x");return t=V(t),t=t.startsWith(ye)?t.substring(1):t,e?se(t):t}function ti(t){return typeof t>"u"}function ni(t){return!ti(t)}function ri(t,e){if(!t)throw new Error(e)}function oi(t,e,n,r=ye){const o=e-t.length;let i=t;if(o>0){const s=r.repeat(o);i=n?s+t:t+s}return i}function ge(t){return G(new Uint8Array(t))}function ii(t){return tn(new Uint8Array(t))}function cn(t,e){return U(new Uint8Array(t),!e)}function si(t){return nn(new Uint8Array(t))}function ai(...t){return P(t.map(e=>U(new Uint8Array(e))).join("")).buffer}function ln(t){return W(t).buffer}function ci(t){return Xe(t)}function li(t,e){return Ze(t,!e)}function ui(t){return en(t)}function di(...t){return Ko(...t)}function fi(t){return rn(t).buffer}function hi(t){return tt(t)}function gi(t,e){return qo(t,!e)}function _i(t){return Do(t)}function pi(t){return et(t)}function un(t){return P(t).buffer}function mi(t){return Uo(t)}function wi(t){return Po(t)}function yi(t){return Fo(t)}function bi(t){return $o(t).buffer}function vi(t){return Ho(t)}function dn(t,e){return jo(Number(t),!e)}const Ei=Hr,Ci=zr,Si=Wr,Ii=Vr,Ri=Jr,fn=jr,ki=Qr,hn=Fr,Ti=Kr,Ni=Yr,xi=Gr,ve=$r;function Ee(t){return Zr(t)}function Ce(){const t=Ee();return t&&t.os?t.os:void 0}function gn(){const t=Ce();return t?t.toLowerCase().includes("android"):!1}function _n(){const t=Ce();return t?t.toLowerCase().includes("ios")||t.toLowerCase().includes("mac")&&navigator.maxTouchPoints>1:!1}function pn(){return Ce()?gn()||_n():!1}function mn(){const t=Ee();return t&&t.name?t.name.toLowerCase()==="node":!1}function wn(){return!mn()&&!!fn()}const yn=Xr,bn=eo;function st(t,e){const n=bn(e),r=ve();r&&r.setItem(t,n)}function at(t){let e=null,n=null;const r=ve();return r&&(n=r.getItem(t)),e=n&&yn(n),e}function ct(t){const e=ve();e&&e.removeItem(t)}function Pe(){return to()}function Mi(t){return Xo(t)}function Ai(t){return se(t)}function Oi(t){return V(t)}function Li(t){return ei(se(t))}const vn=no;function fe(){return((e,n)=>{for(n=e="";e++<36;n+=e*51&52?(e^15?8^Math.random()*(e^20?16:4):4).toString(16):"-");return n})()}function Bi(){console.warn("DEPRECATION WARNING: This WalletConnect client library will be deprecated in favor of @walletconnect/client. Please check docs.walletconnect.org to learn more about this migration!")}function En(t,e){let n;const r=So[t];return r&&(n=`https://${r}.infura.io/v3/${e}`),n}function Cn(t,e){let n;const r=En(t,e.infuraId);return e.custom&&e.custom[t]?n=e.custom[t]:r&&(n=r),n}function Ui(t,e){const n=encodeURIComponent(t);return e.universalLink?`${e.universalLink}/wc?uri=${n}`:e.deepLink?`${e.deepLink}${e.deepLink.endsWith(":")?"//":"/"}wc?uri=${n}`:""}function Pi(t){const e=t.href.split("?")[0];st(Ue,Object.assign(Object.assign({},t),{href:e}))}function Sn(t,e){return t.filter(n=>n.name.toLowerCase().includes(e.toLowerCase()))[0]}function qi(t,e){let n=t;return e&&(n=e.map(r=>Sn(t,r)).filter(Boolean)),n}function Di(t,e){return async(...r)=>new Promise((o,i)=>{const s=(a,c)=>{(a===null||typeof a>"u")&&i(a),o(c)};t.apply(e,[...r,s])})}function In(t){const e=t.message||"Failed or Rejected Request";let n=-32e3;if(t&&!t.code)switch(e){case"Parse error":n=-32700;break;case"Invalid request":n=-32600;break;case"Method not found":n=-32601;break;case"Invalid params":n=-32602;break;case"Internal error":n=-32603;break;default:n=-32e3;break}const r={code:n,message:e};return t.data&&(r.data=t.data),r}const Rn="https://registry.walletconnect.com";function Fi(){return Rn+"/api/v2/wallets"}function $i(){return Rn+"/api/v2/dapps"}function kn(t,e="mobile"){var n;return{name:t.name||"",shortName:t.metadata.shortName||"",color:t.metadata.colors.primary||"",logo:(n=t.image_url.sm)!==null&&n!==void 0?n:"",universalLink:t[e].universal||"",deepLink:t[e].native||""}}function ji(t,e="mobile"){return Object.values(t).filter(n=>!!n[e].universal||!!n[e].native).map(n=>kn(n,e))}var lt={};(function(t){const e=io,n=so,r=ro,o=oo,i=l=>l==null;function s(l){switch(l.arrayFormat){case"index":return d=>(f,u)=>{const g=f.length;return u===void 0||l.skipNull&&u===null||l.skipEmptyString&&u===""?f:u===null?[...f,[h(d,l),"[",g,"]"].join("")]:[...f,[h(d,l),"[",h(g,l),"]=",h(u,l)].join("")]};case"bracket":return d=>(f,u)=>u===void 0||l.skipNull&&u===null||l.skipEmptyString&&u===""?f:u===null?[...f,[h(d,l),"[]"].join("")]:[...f,[h(d,l),"[]=",h(u,l)].join("")];case"comma":case"separator":return d=>(f,u)=>u==null||u.length===0?f:f.length===0?[[h(d,l),"=",h(u,l)].join("")]:[[f,h(u,l)].join(l.arrayFormatSeparator)];default:return d=>(f,u)=>u===void 0||l.skipNull&&u===null||l.skipEmptyString&&u===""?f:u===null?[...f,h(d,l)]:[...f,[h(d,l),"=",h(u,l)].join("")]}}function a(l){let d;switch(l.arrayFormat){case"index":return(f,u,g)=>{if(d=/\[(\d*)\]$/.exec(f),f=f.replace(/\[\d*\]$/,""),!d){g[f]=u;return}g[f]===void 0&&(g[f]={}),g[f][d[1]]=u};case"bracket":return(f,u,g)=>{if(d=/(\[\])$/.exec(f),f=f.replace(/\[\]$/,""),!d){g[f]=u;return}if(g[f]===void 0){g[f]=[u];return}g[f]=[].concat(g[f],u)};case"comma":case"separator":return(f,u,g)=>{const y=typeof u=="string"&&u.includes(l.arrayFormatSeparator),m=typeof u=="string"&&!y&&_(u,l).includes(l.arrayFormatSeparator);u=m?_(u,l):u;const S=y||m?u.split(l.arrayFormatSeparator).map(R=>_(R,l)):u===null?u:_(u,l);g[f]=S};default:return(f,u,g)=>{if(g[f]===void 0){g[f]=u;return}g[f]=[].concat(g[f],u)}}}function c(l){if(typeof l!="string"||l.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function h(l,d){return d.encode?d.strict?e(l):encodeURIComponent(l):l}function _(l,d){return d.decode?n(l):l}function v(l){return Array.isArray(l)?l.sort():typeof l=="object"?v(Object.keys(l)).sort((d,f)=>Number(d)-Number(f)).map(d=>l[d]):l}function b(l){const d=l.indexOf("#");return d!==-1&&(l=l.slice(0,d)),l}function w(l){let d="";const f=l.indexOf("#");return f!==-1&&(d=l.slice(f)),d}function E(l){l=b(l);const d=l.indexOf("?");return d===-1?"":l.slice(d+1)}function C(l,d){return d.parseNumbers&&!Number.isNaN(Number(l))&&typeof l=="string"&&l.trim()!==""?l=Number(l):d.parseBooleans&&l!==null&&(l.toLowerCase()==="true"||l.toLowerCase()==="false")&&(l=l.toLowerCase()==="true"),l}function I(l,d){d=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},d),c(d.arrayFormatSeparator);const f=a(d),u=Object.create(null);if(typeof l!="string"||(l=l.trim().replace(/^[?#&]/,""),!l))return u;for(const g of l.split("&")){if(g==="")continue;let[y,m]=r(d.decode?g.replace(/\+/g," "):g,"=");m=m===void 0?null:["comma","separator"].includes(d.arrayFormat)?m:_(m,d),f(_(y,d),m,u)}for(const g of Object.keys(u)){const y=u[g];if(typeof y=="object"&&y!==null)for(const m of Object.keys(y))y[m]=C(y[m],d);else u[g]=C(y,d)}return d.sort===!1?u:(d.sort===!0?Object.keys(u).sort():Object.keys(u).sort(d.sort)).reduce((g,y)=>{const m=u[y];return m&&typeof m=="object"&&!Array.isArray(m)?g[y]=v(m):g[y]=m,g},Object.create(null))}t.extract=E,t.parse=I,t.stringify=(l,d)=>{if(!l)return"";d=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},d),c(d.arrayFormatSeparator);const f=m=>d.skipNull&&i(l[m])||d.skipEmptyString&&l[m]==="",u=s(d),g={};for(const m of Object.keys(l))f(m)||(g[m]=l[m]);const y=Object.keys(g);return d.sort!==!1&&y.sort(d.sort),y.map(m=>{const S=l[m];return S===void 0?"":S===null?h(m,d):Array.isArray(S)?S.reduce(u(m),[]).join("&"):h(m,d)+"="+h(S,d)}).filter(m=>m.length>0).join("&")},t.parseUrl=(l,d)=>{d=Object.assign({decode:!0},d);const[f,u]=r(l,"#");return Object.assign({url:f.split("?")[0]||"",query:I(E(l),d)},d&&d.parseFragmentIdentifier&&u?{fragmentIdentifier:_(u,d)}:{})},t.stringifyUrl=(l,d)=>{d=Object.assign({encode:!0,strict:!0},d);const f=b(l.url).split("?")[0]||"",u=t.extract(l.url),g=t.parse(u,{sort:!1}),y=Object.assign(g,l.query);let m=t.stringify(y,d);m&&(m=`?${m}`);let S=w(l.url);return l.fragmentIdentifier&&(S=`#${h(l.fragmentIdentifier,d)}`),`${f}${m}${S}`},t.pick=(l,d,f)=>{f=Object.assign({parseFragmentIdentifier:!0},f);const{url:u,query:g,fragmentIdentifier:y}=t.parseUrl(l,f);return t.stringifyUrl({url:u,query:o(g,d),fragmentIdentifier:y},f)},t.exclude=(l,d,f)=>{const u=Array.isArray(d)?g=>!d.includes(g):(g,y)=>!d(g,y);return t.pick(l,u,f)}})(lt);function Tn(t){const e=t.indexOf("?")!==-1?t.indexOf("?"):void 0;return typeof e<"u"?t.substr(e):""}function Nn(t,e){let n=ut(t);return n=Object.assign(Object.assign({},n),e),t=xn(n),t}function ut(t){return lt.parse(t)}function xn(t){return lt.stringify(t)}function Mn(t){return typeof t.bridge<"u"}function An(t){const e=t.indexOf(":"),n=t.indexOf("?")!==-1?t.indexOf("?"):void 0,r=t.substring(0,e),o=t.substring(e+1,n);function i(v){const b="@",w=v.split(b);return{handshakeTopic:w[0],version:parseInt(w[1],10)}}const s=i(o),a=typeof n<"u"?t.substr(n):"";function c(v){const b=ut(v);return{key:b.key||"",bridge:b.bridge||""}}const h=c(a);return Object.assign(Object.assign({protocol:r},s),h)}function Hi(t){return t===""||typeof t=="string"&&t.trim()===""}function zi(t){return!(t&&t.length)}function Wi(t){return be(t)}function Vi(t){return ot(t)}function Ji(t){return sn(t)}function Qi(t){return Jo(t)}function Ki(t){return Qo(t)}function Yi(t,e){return on(t,e)}function Gi(t){return typeof t.params=="object"}function On(t){return typeof t.method<"u"}function H(t){return typeof t.result<"u"}function re(t){return typeof t.error<"u"}function qe(t){return typeof t.event<"u"}function Ln(t){return Eo.includes(t)||t.startsWith("wc_")}function Bn(t){return t.method.startsWith("wc_")?!0:!Qe.includes(t.method)}const Zi=Object.freeze(Object.defineProperty({__proto__:null,addHexPrefix:Ai,appendToQueryString:Nn,concatArrayBuffers:ai,concatBuffers:di,convertArrayBufferToBuffer:ge,convertArrayBufferToHex:cn,convertArrayBufferToNumber:si,convertArrayBufferToUtf8:ii,convertBufferToArrayBuffer:ln,convertBufferToHex:li,convertBufferToNumber:ui,convertBufferToUtf8:ci,convertHexToArrayBuffer:un,convertHexToBuffer:pi,convertHexToNumber:wi,convertHexToUtf8:mi,convertNumberToArrayBuffer:bi,convertNumberToBuffer:yi,convertNumberToHex:dn,convertNumberToUtf8:vi,convertUtf8ToArrayBuffer:fi,convertUtf8ToBuffer:hi,convertUtf8ToHex:gi,convertUtf8ToNumber:_i,detectEnv:Ee,detectOS:Ce,formatIOSMobile:Ui,formatMobileRegistry:ji,formatMobileRegistryEntry:kn,formatQueryString:xn,formatRpcError:In,getClientMeta:Pe,getCrypto:Ni,getCryptoOrThrow:Ti,getDappRegistryUrl:$i,getDocument:Ii,getDocumentOrThrow:Si,getEncoding:Ki,getFromWindow:Ei,getFromWindowOrThrow:Ci,getInfuraRpcUrl:En,getLocal:at,getLocalStorage:ve,getLocalStorageOrThrow:xi,getLocation:hn,getLocationOrThrow:ki,getMobileLinkRegistry:qi,getMobileRegistryEntry:Sn,getNavigator:fn,getNavigatorOrThrow:Ri,getQueryString:Tn,getRpcUrl:Cn,getType:Qi,getWalletRegistryUrl:Fi,isAndroid:gn,isArrayBuffer:Ji,isBrowser:wn,isBuffer:Wi,isEmptyArray:zi,isEmptyString:Hi,isHexString:Yi,isIOS:_n,isInternalEvent:qe,isJsonRpcRequest:On,isJsonRpcResponseError:re,isJsonRpcResponseSuccess:H,isJsonRpcSubscription:Gi,isMobile:pn,isNode:mn,isReservedEvent:Ln,isSilentPayload:Bn,isTypedArray:Vi,isWalletConnectSession:Mn,logDeprecationWarning:Bi,parseQueryString:ut,parseWalletConnectUri:An,payloadId:vn,promisify:Di,removeHexLeadingZeros:Li,removeHexPrefix:Oi,removeLocal:ct,safeJsonParse:yn,safeJsonStringify:bn,sanitizeHex:Mi,saveMobileLinkInfo:Pi,setLocal:st,uuid:fe},Symbol.toStringTag,{value:"Module"}));class Xi{constructor(){this._eventEmitters=[],typeof window<"u"&&typeof window.addEventListener<"u"&&(window.addEventListener("online",()=>this.trigger("online")),window.addEventListener("offline",()=>this.trigger("offline")))}on(e,n){this._eventEmitters.push({event:e,callback:n})}trigger(e){let n=[];e&&(n=this._eventEmitters.filter(r=>r.event===e)),n.forEach(r=>{r.callback()})}}const es=typeof global.WebSocket<"u"?global.WebSocket:require("ws");class ts{constructor(e){if(this.opts=e,this._queue=[],this._events=[],this._subscriptions=[],this._protocol=e.protocol,this._version=e.version,this._url="",this._netMonitor=null,this._socket=null,this._nextSocket=null,this._subscriptions=e.subscriptions||[],this._netMonitor=e.netMonitor||new Xi,!e.url||typeof e.url!="string")throw new Error("Missing or invalid WebSocket url");this._url=e.url,this._netMonitor.on("online",()=>this._socketCreate())}set readyState(e){}get readyState(){return this._socket?this._socket.readyState:-1}set connecting(e){}get connecting(){return this.readyState===0}set connected(e){}get connected(){return this.readyState===1}set closing(e){}get closing(){return this.readyState===2}set closed(e){}get closed(){return this.readyState===3}open(){this._socketCreate()}close(){this._socketClose()}send(e,n,r){if(!n||typeof n!="string")throw new Error("Missing or invalid topic field");this._socketSend({topic:n,type:"pub",payload:e,silent:!!r})}subscribe(e){this._socketSend({topic:e,type:"sub",payload:"",silent:!0})}on(e,n){this._events.push({event:e,callback:n})}_socketCreate(){if(this._nextSocket)return;const e=ns(this._url,this._protocol,this._version);if(this._nextSocket=new es(e),!this._nextSocket)throw new Error("Failed to create socket");this._nextSocket.onmessage=n=>this._socketReceive(n),this._nextSocket.onopen=()=>this._socketOpen(),this._nextSocket.onerror=n=>this._socketError(n),this._nextSocket.onclose=()=>{setTimeout(()=>{this._nextSocket=null,this._socketCreate()},1e3)}}_socketOpen(){this._socketClose(),this._socket=this._nextSocket,this._nextSocket=null,this._queueSubscriptions(),this._pushQueue()}_socketClose(){this._socket&&(this._socket.onclose=()=>{},this._socket.close())}_socketSend(e){const n=JSON.stringify(e);this._socket&&this._socket.readyState===1?this._socket.send(n):(this._setToQueue(e),this._socketCreate())}async _socketReceive(e){let n;try{n=JSON.parse(e.data)}catch{return}if(this._socketSend({topic:n.topic,type:"ack",payload:"",silent:!0}),this._socket&&this._socket.readyState===1){const r=this._events.filter(o=>o.event==="message");r&&r.length&&r.forEach(o=>o.callback(n))}}_socketError(e){const n=this._events.filter(r=>r.event==="error");n&&n.length&&n.forEach(r=>r.callback(e))}_queueSubscriptions(){this._subscriptions.forEach(n=>this._queue.push({topic:n,type:"sub",payload:"",silent:!0})),this._subscriptions=this.opts.subscriptions||[]}_setToQueue(e){this._queue.push(e)}_pushQueue(){this._queue.forEach(n=>this._socketSend(n)),this._queue=[]}}function ns(t,e,n){var r,o;const s=(t.startsWith("https")?t.replace("https","wss"):t.startsWith("http")?t.replace("http","ws"):t).split("?"),a=wn()?{protocol:e,version:n,env:"browser",host:((r=hn())===null||r===void 0?void 0:r.host)||""}:{protocol:e,version:n,env:((o=Ee())===null||o===void 0?void 0:o.name)||""},c=Nn(Tn(s[1]||""),a);return s[0]+"?"+c}class rs{constructor(){this._eventEmitters=[]}subscribe(e){this._eventEmitters.push(e)}unsubscribe(e){this._eventEmitters=this._eventEmitters.filter(n=>n.event!==e)}trigger(e){let n=[],r;On(e)?r=e.method:H(e)||re(e)?r=`response:${e.id}`:qe(e)?r=e.event:r="",r&&(n=this._eventEmitters.filter(o=>o.event===r)),(!n||!n.length)&&!Ln(r)&&!qe(r)&&(n=this._eventEmitters.filter(o=>o.event==="call_request")),n.forEach(o=>{if(re(e)){const i=new Error(e.error.message);o.callback(i,null)}else o.callback(null,e)})}}class os{constructor(e="walletconnect"){this.storageId=e}getSession(){let e=null;const n=at(this.storageId);return n&&Mn(n)&&(e=n),e}setSession(e){return st(this.storageId,e),e}removeSession(){ct(this.storageId)}}const is="walletconnect.org",ss="abcdefghijklmnopqrstuvwxyz0123456789",Un=ss.split("").map(t=>`https://${t}.bridge.walletconnect.org`);function as(t){let e=t.indexOf("//")>-1?t.split("/")[2]:t.split("/")[0];return e=e.split(":")[0],e=e.split("?")[0],e}function cs(t){return as(t).split(".").slice(-2).join(".")}function ls(){return Math.floor(Math.random()*Un.length)}function us(){return Un[ls()]}function ds(t){return cs(t)===is}function fs(t){return ds(t)?us():t}class hs{constructor(e){if(this.protocol="wc",this.version=1,this._bridge="",this._key=null,this._clientId="",this._clientMeta=null,this._peerId="",this._peerMeta=null,this._handshakeId=0,this._handshakeTopic="",this._connected=!1,this._accounts=[],this._chainId=0,this._networkId=0,this._rpcUrl="",this._eventManager=new rs,this._clientMeta=Pe()||e.connectorOpts.clientMeta||null,this._cryptoLib=e.cryptoLib,this._sessionStorage=e.sessionStorage||new os(e.connectorOpts.storageId),this._qrcodeModal=e.connectorOpts.qrcodeModal,this._qrcodeModalOptions=e.connectorOpts.qrcodeModalOptions,this._signingMethods=[...Qe,...e.connectorOpts.signingMethods||[]],!e.connectorOpts.bridge&&!e.connectorOpts.uri&&!e.connectorOpts.session)throw new Error(yo);e.connectorOpts.bridge&&(this.bridge=fs(e.connectorOpts.bridge)),e.connectorOpts.uri&&(this.uri=e.connectorOpts.uri);const n=e.connectorOpts.session||this._getStorageSession();n&&(this.session=n),this.handshakeId&&this._subscribeToSessionResponse(this.handshakeId,"Session request rejected"),this._transport=e.transport||new ts({protocol:this.protocol,version:this.version,url:this.bridge,subscriptions:[this.clientId]}),this._subscribeToInternalEvents(),this._initTransport(),e.connectorOpts.uri&&this._subscribeToSessionRequest(),e.pushServerOpts&&this._registerPushServer(e.pushServerOpts)}set bridge(e){e&&(this._bridge=e)}get bridge(){return this._bridge}set key(e){if(!e)return;const n=un(e);this._key=n}get key(){return this._key?cn(this._key,!0):""}set clientId(e){e&&(this._clientId=e)}get clientId(){let e=this._clientId;return e||(e=this._clientId=fe()),this._clientId}set peerId(e){e&&(this._peerId=e)}get peerId(){return this._peerId}set clientMeta(e){}get clientMeta(){let e=this._clientMeta;return e||(e=this._clientMeta=Pe()),e}set peerMeta(e){this._peerMeta=e}get peerMeta(){return this._peerMeta}set handshakeTopic(e){e&&(this._handshakeTopic=e)}get handshakeTopic(){return this._handshakeTopic}set handshakeId(e){e&&(this._handshakeId=e)}get handshakeId(){return this._handshakeId}get uri(){return this._formatUri()}set uri(e){if(!e)return;const{handshakeTopic:n,bridge:r,key:o}=this._parseUri(e);this.handshakeTopic=n,this.bridge=r,this.key=o}set chainId(e){this._chainId=e}get chainId(){return this._chainId}set networkId(e){this._networkId=e}get networkId(){return this._networkId}set accounts(e){this._accounts=e}get accounts(){return this._accounts}set rpcUrl(e){this._rpcUrl=e}get rpcUrl(){return this._rpcUrl}set connected(e){}get connected(){return this._connected}set pending(e){}get pending(){return!!this._handshakeTopic}get session(){return{connected:this.connected,accounts:this.accounts,chainId:this.chainId,bridge:this.bridge,key:this.key,clientId:this.clientId,clientMeta:this.clientMeta,peerId:this.peerId,peerMeta:this.peerMeta,handshakeId:this.handshakeId,handshakeTopic:this.handshakeTopic}}set session(e){e&&(this._connected=e.connected,this.accounts=e.accounts,this.chainId=e.chainId,this.bridge=e.bridge,this.key=e.key,this.clientId=e.clientId,this.clientMeta=e.clientMeta,this.peerId=e.peerId,this.peerMeta=e.peerMeta,this.handshakeId=e.handshakeId,this.handshakeTopic=e.handshakeTopic)}on(e,n){const r={event:e,callback:n};this._eventManager.subscribe(r)}off(e){this._eventManager.unsubscribe(e)}async createInstantRequest(e){this._key=await this._generateKey();const n=this._formatRequest({method:"wc_instantRequest",params:[{peerId:this.clientId,peerMeta:this.clientMeta,request:this._formatRequest(e)}]});this.handshakeId=n.id,this.handshakeTopic=fe(),this._eventManager.trigger({event:"display_uri",params:[this.uri]}),this.on("modal_closed",()=>{throw new Error(St)});const r=()=>{this.killSession()};try{const o=await this._sendCallRequest(n);return o&&r(),o}catch(o){throw r(),o}}async connect(e){if(!this._qrcodeModal)throw new Error(vo);return this.connected?{chainId:this.chainId,accounts:this.accounts}:(await this.createSession(e),new Promise(async(n,r)=>{this.on("modal_closed",()=>r(new Error(St))),this.on("connect",(o,i)=>{if(o)return r(o);n(i.params[0])})}))}async createSession(e){if(this._connected)throw new Error(Te);if(this.pending)return;this._key=await this._generateKey();const n=this._formatRequest({method:"wc_sessionRequest",params:[{peerId:this.clientId,peerMeta:this.clientMeta,chainId:e&&e.chainId?e.chainId:null}]});this.handshakeId=n.id,this.handshakeTopic=fe(),this._sendSessionRequest(n,"Session update rejected",{topic:this.handshakeTopic}),this._eventManager.trigger({event:"display_uri",params:[this.uri]})}approveSession(e){if(this._connected)throw new Error(Te);this.chainId=e.chainId,this.accounts=e.accounts,this.networkId=e.networkId||0,this.rpcUrl=e.rpcUrl||"";const n={approved:!0,chainId:this.chainId,networkId:this.networkId,accounts:this.accounts,rpcUrl:this.rpcUrl,peerId:this.clientId,peerMeta:this.clientMeta},r={id:this.handshakeId,jsonrpc:"2.0",result:n};this._sendResponse(r),this._connected=!0,this._setStorageSession(),this._eventManager.trigger({event:"connect",params:[{peerId:this.peerId,peerMeta:this.peerMeta,chainId:this.chainId,accounts:this.accounts}]})}rejectSession(e){if(this._connected)throw new Error(Te);const n=e&&e.message?e.message:ho,r=this._formatResponse({id:this.handshakeId,error:{message:n}});this._sendResponse(r),this._connected=!1,this._eventManager.trigger({event:"disconnect",params:[{message:n}]}),this._removeStorageSession()}updateSession(e){if(!this._connected)throw new Error($);this.chainId=e.chainId,this.accounts=e.accounts,this.networkId=e.networkId||0,this.rpcUrl=e.rpcUrl||"";const n={approved:!0,chainId:this.chainId,networkId:this.networkId,accounts:this.accounts,rpcUrl:this.rpcUrl},r=this._formatRequest({method:"wc_sessionUpdate",params:[n]});this._sendSessionRequest(r,"Session update rejected"),this._eventManager.trigger({event:"session_update",params:[{chainId:this.chainId,accounts:this.accounts}]}),this._manageStorageSession()}async killSession(e){const n=e?e.message:"Session Disconnected",r={approved:!1,chainId:null,networkId:null,accounts:null},o=this._formatRequest({method:"wc_sessionUpdate",params:[r]});await this._sendRequest(o),this._handleSessionDisconnect(n)}async sendTransaction(e){if(!this._connected)throw new Error($);const n=e,r=this._formatRequest({method:"eth_sendTransaction",params:[n]});return await this._sendCallRequest(r)}async signTransaction(e){if(!this._connected)throw new Error($);const n=e,r=this._formatRequest({method:"eth_signTransaction",params:[n]});return await this._sendCallRequest(r)}async signMessage(e){if(!this._connected)throw new Error($);const n=this._formatRequest({method:"eth_sign",params:e});return await this._sendCallRequest(n)}async signPersonalMessage(e){if(!this._connected)throw new Error($);const n=this._formatRequest({method:"personal_sign",params:e});return await this._sendCallRequest(n)}async signTypedData(e){if(!this._connected)throw new Error($);const n=this._formatRequest({method:"eth_signTypedData",params:e});return await this._sendCallRequest(n)}async updateChain(e){if(!this._connected)throw new Error("Session currently disconnected");const n=this._formatRequest({method:"wallet_updateChain",params:[e]});return await this._sendCallRequest(n)}unsafeSend(e,n){return this._sendRequest(e,n),this._eventManager.trigger({event:"call_request_sent",params:[{request:e,options:n}]}),new Promise((r,o)=>{this._subscribeToResponse(e.id,(i,s)=>{if(i){o(i);return}if(!s)throw new Error(go);r(s)})})}async sendCustomRequest(e,n){if(!this._connected)throw new Error($);switch(e.method){case"eth_accounts":return this.accounts;case"eth_chainId":return dn(this.chainId);case"eth_sendTransaction":case"eth_signTransaction":e.params;break;case"personal_sign":e.params;break}const r=this._formatRequest(e);return await this._sendCallRequest(r,n)}approveRequest(e){if(H(e)){const n=this._formatResponse(e);this._sendResponse(n)}else throw new Error(_o)}rejectRequest(e){if(re(e)){const n=this._formatResponse(e);this._sendResponse(n)}else throw new Error(po)}transportClose(){this._transport.close()}async _sendRequest(e,n){const r=this._formatRequest(e),o=await this._encrypt(r),i=typeof(n==null?void 0:n.topic)<"u"?n.topic:this.peerId,s=JSON.stringify(o),a=typeof(n==null?void 0:n.forcePushNotification)<"u"?!n.forcePushNotification:Bn(r);this._transport.send(s,i,a)}async _sendResponse(e){const n=await this._encrypt(e),r=this.peerId,o=JSON.stringify(n),i=!0;this._transport.send(o,r,i)}async _sendSessionRequest(e,n,r){this._sendRequest(e,r),this._subscribeToSessionResponse(e.id,n)}_sendCallRequest(e,n){return this._sendRequest(e,n),this._eventManager.trigger({event:"call_request_sent",params:[{request:e,options:n}]}),this._subscribeToCallResponse(e.id)}_formatRequest(e){if(typeof e.method>"u")throw new Error(mo);return{id:typeof e.id>"u"?vn():e.id,jsonrpc:"2.0",method:e.method,params:typeof e.params>"u"?[]:e.params}}_formatResponse(e){if(typeof e.id>"u")throw new Error(wo);const n={id:e.id,jsonrpc:"2.0"};if(re(e)){const r=In(e.error);return Object.assign(Object.assign(Object.assign({},n),e),{error:r})}else if(H(e))return Object.assign(Object.assign({},n),e);throw new Error(Ct)}_handleSessionDisconnect(e){const n=e||"Session Disconnected";this._connected||(this._qrcodeModal&&this._qrcodeModal.close(),ct(Ue)),this._connected&&(this._connected=!1),this._handshakeId&&(this._handshakeId=0),this._handshakeTopic&&(this._handshakeTopic=""),this._peerId&&(this._peerId=""),this._eventManager.trigger({event:"disconnect",params:[{message:n}]}),this._removeStorageSession(),this.transportClose()}_handleSessionResponse(e,n){n?n.approved?(this._connected?(n.chainId&&(this.chainId=n.chainId),n.accounts&&(this.accounts=n.accounts),this._eventManager.trigger({event:"session_update",params:[{chainId:this.chainId,accounts:this.accounts}]})):(this._connected=!0,n.chainId&&(this.chainId=n.chainId),n.accounts&&(this.accounts=n.accounts),n.peerId&&!this.peerId&&(this.peerId=n.peerId),n.peerMeta&&!this.peerMeta&&(this.peerMeta=n.peerMeta),this._eventManager.trigger({event:"connect",params:[{peerId:this.peerId,peerMeta:this.peerMeta,chainId:this.chainId,accounts:this.accounts}]})),this._manageStorageSession()):this._handleSessionDisconnect(e):this._handleSessionDisconnect(e)}async _handleIncomingMessages(e){if(![this.clientId,this.handshakeTopic].includes(e.topic))return;let r;try{r=JSON.parse(e.payload)}catch{return}const o=await this._decrypt(r);o&&this._eventManager.trigger(o)}_subscribeToSessionRequest(){this._transport.subscribe(this.handshakeTopic)}_subscribeToResponse(e,n){this.on(`response:${e}`,n)}_subscribeToSessionResponse(e,n){this._subscribeToResponse(e,(r,o)=>{if(r){this._handleSessionResponse(r.message);return}H(o)?this._handleSessionResponse(n,o.result):o.error&&o.error.message?this._handleSessionResponse(o.error.message):this._handleSessionResponse(n)})}_subscribeToCallResponse(e){return new Promise((n,r)=>{this._subscribeToResponse(e,(o,i)=>{if(o){r(o);return}H(i)?n(i.result):i.error&&i.error.message?r(i.error):r(new Error(Ct))})})}_subscribeToInternalEvents(){this.on("display_uri",()=>{this._qrcodeModal&&this._qrcodeModal.open(this.uri,()=>{this._eventManager.trigger({event:"modal_closed",params:[]})},this._qrcodeModalOptions)}),this.on("connect",()=>{this._qrcodeModal&&this._qrcodeModal.close()}),this.on("call_request_sent",(e,n)=>{const{request:r}=n.params[0];if(pn()&&this._signingMethods.includes(r.method)){const o=at(Ue);o&&(window.location.href=o.href)}}),this.on("wc_sessionRequest",(e,n)=>{e&&this._eventManager.trigger({event:"error",params:[{code:"SESSION_REQUEST_ERROR",message:e.toString()}]}),this.handshakeId=n.id,this.peerId=n.params[0].peerId,this.peerMeta=n.params[0].peerMeta;const r=Object.assign(Object.assign({},n),{method:"session_request"});this._eventManager.trigger(r)}),this.on("wc_sessionUpdate",(e,n)=>{e&&this._handleSessionResponse(e.message),this._handleSessionResponse("Session disconnected",n.params[0])})}_initTransport(){this._transport.on("message",e=>this._handleIncomingMessages(e)),this._transport.on("open",()=>this._eventManager.trigger({event:"transport_open",params:[]})),this._transport.on("close",()=>this._eventManager.trigger({event:"transport_close",params:[]})),this._transport.on("error",()=>this._eventManager.trigger({event:"transport_error",params:["Websocket connection failed"]})),this._transport.open()}_formatUri(){const e=this.protocol,n=this.handshakeTopic,r=this.version,o=encodeURIComponent(this.bridge),i=this.key;return`${e}:${n}@${r}?bridge=${o}&key=${i}`}_parseUri(e){const n=An(e);if(n.protocol===this.protocol){if(!n.handshakeTopic)throw Error("Invalid or missing handshakeTopic parameter value");const r=n.handshakeTopic;if(!n.bridge)throw Error("Invalid or missing bridge url parameter value");const o=decodeURIComponent(n.bridge);if(!n.key)throw Error("Invalid or missing key parameter value");const i=n.key;return{handshakeTopic:r,bridge:o,key:i}}else throw new Error(bo)}async _generateKey(){return this._cryptoLib?await this._cryptoLib.generateKey():null}async _encrypt(e){const n=this._key;return this._cryptoLib&&n?await this._cryptoLib.encrypt(e,n):null}async _decrypt(e){const n=this._key;return this._cryptoLib&&n?await this._cryptoLib.decrypt(e,n):null}_getStorageSession(){let e=null;return this._sessionStorage&&(e=this._sessionStorage.getSession()),e}_setStorageSession(){this._sessionStorage&&this._sessionStorage.setSession(this.session)}_removeStorageSession(){this._sessionStorage&&this._sessionStorage.removeSession()}_manageStorageSession(){this._connected?this._setStorageSession():this._removeStorageSession()}_registerPushServer(e){if(!e.url||typeof e.url!="string")throw Error("Invalid or missing pushServerOpts.url parameter value");if(!e.type||typeof e.type!="string")throw Error("Invalid or missing pushServerOpts.type parameter value");if(!e.token||typeof e.token!="string")throw Error("Invalid or missing pushServerOpts.token parameter value");const n={bridge:this.bridge,topic:this.clientId,type:e.type,token:e.token,peerName:"",language:e.language||""};this.on("connect",async(r,o)=>{if(r)throw r;if(e.peerMeta){const i=o.params[0].peerMeta.name;n.peerName=i}try{if(!(await(await fetch(`${e.url}/new`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)})).json()).success)throw Error("Failed to register in Push Server")}catch{throw Error("Failed to register in Push Server")}})}}function gs(t){return ie.getBrowerCrypto().getRandomValues(new Uint8Array(t))}const Pn=256,qn=Pn,_s=Pn,q="AES-CBC",ps=`SHA-${qn}`,De="HMAC",ms="encrypt",ws="decrypt",ys="sign",bs="verify";function vs(t){return t===q?{length:qn,name:q}:{hash:{name:ps},name:De}}function Es(t){return t===q?[ms,ws]:[ys,bs]}async function dt(t,e=q){return ie.getSubtleCrypto().importKey("raw",t,vs(e),!0,Es(e))}async function Cs(t,e,n){const r=ie.getSubtleCrypto(),o=await dt(e,q),i=await r.encrypt({iv:t,name:q},o,n);return new Uint8Array(i)}async function Ss(t,e,n){const r=ie.getSubtleCrypto(),o=await dt(e,q),i=await r.decrypt({iv:t,name:q},o,n);return new Uint8Array(i)}async function Is(t,e){const n=ie.getSubtleCrypto(),r=await dt(t,De),o=await n.sign({length:_s,name:De},r,e);return new Uint8Array(o)}function Rs(t,e,n){return Cs(t,e,n)}function ks(t,e,n){return Ss(t,e,n)}async function Dn(t,e){return await Is(t,e)}async function Fn(t){const e=(t||256)/8,n=gs(e);return ln(G(n))}async function $n(t,e){const n=P(t.data),r=P(t.iv),o=P(t.hmac),i=U(o,!1),s=an(n,r),a=await Dn(e,s),c=U(a,!1);return V(i)===V(c)}async function Ts(t,e,n){const r=W(ge(e)),o=n||await Fn(128),i=W(ge(o)),s=U(i,!1),a=JSON.stringify(t),c=rn(a),h=await Rs(i,r,c),_=U(h,!1),v=an(h,i),b=await Dn(r,v),w=U(b,!1);return{data:_,hmac:w,iv:s}}async function Ns(t,e){const n=W(ge(e));if(!n)throw new Error("Missing key: required for decryption");if(!await $n(t,n))return null;const o=P(t.data),i=P(t.iv),s=await ks(i,n,o),a=tn(s);let c;try{c=JSON.parse(a)}catch{return null}return c}const xs=Object.freeze(Object.defineProperty({__proto__:null,decrypt:Ns,encrypt:Ts,generateKey:Fn,verifyHmac:$n},Symbol.toStringTag,{value:"Module"}));class Ms extends hs{constructor(e,n){super({cryptoLib:xs,connectorOpts:e,pushServerOpts:n})}}const As=Dt(Zi);var ae={},Os=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},jn={},M={};let ft;const Ls=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];M.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};M.getSymbolTotalCodewords=function(e){return Ls[e]};M.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e};M.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');ft=e};M.isKanjiModeEnabled=function(){return typeof ft<"u"};M.toSJIS=function(e){return ft(e)};var Se={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+n)}}t.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},t.from=function(r,o){if(t.isValid(r))return r;try{return e(r)}catch{return o}}})(Se);function Hn(){this.buffer=[],this.length=0}Hn.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let n=0;n<e;n++)this.putBit((t>>>e-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var Bs=Hn;function ce(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}ce.prototype.set=function(t,e,n,r){const o=t*this.size+e;this.data[o]=n,r&&(this.reservedBit[o]=!0)};ce.prototype.get=function(t,e){return this.data[t*this.size+e]};ce.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n};ce.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var Us=ce,zn={};(function(t){const e=M.getSymbolSize;t.getRowColCoords=function(r){if(r===1)return[];const o=Math.floor(r/7)+2,i=e(r),s=i===145?26:Math.ceil((i-13)/(2*o-2))*2,a=[i-7];for(let c=1;c<o-1;c++)a[c]=a[c-1]-s;return a.push(6),a.reverse()},t.getPositions=function(r){const o=[],i=t.getRowColCoords(r),s=i.length;for(let a=0;a<s;a++)for(let c=0;c<s;c++)a===0&&c===0||a===0&&c===s-1||a===s-1&&c===0||o.push([i[a],i[c]]);return o}})(zn);var Wn={};const Ps=M.getSymbolSize,It=7;Wn.getPositions=function(e){const n=Ps(e);return[[0,0],[n-It,0],[0,n-It]]};var Vn={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},t.from=function(o){return t.isValid(o)?parseInt(o,10):void 0},t.getPenaltyN1=function(o){const i=o.size;let s=0,a=0,c=0,h=null,_=null;for(let v=0;v<i;v++){a=c=0,h=_=null;for(let b=0;b<i;b++){let w=o.get(v,b);w===h?a++:(a>=5&&(s+=e.N1+(a-5)),h=w,a=1),w=o.get(b,v),w===_?c++:(c>=5&&(s+=e.N1+(c-5)),_=w,c=1)}a>=5&&(s+=e.N1+(a-5)),c>=5&&(s+=e.N1+(c-5))}return s},t.getPenaltyN2=function(o){const i=o.size;let s=0;for(let a=0;a<i-1;a++)for(let c=0;c<i-1;c++){const h=o.get(a,c)+o.get(a,c+1)+o.get(a+1,c)+o.get(a+1,c+1);(h===4||h===0)&&s++}return s*e.N2},t.getPenaltyN3=function(o){const i=o.size;let s=0,a=0,c=0;for(let h=0;h<i;h++){a=c=0;for(let _=0;_<i;_++)a=a<<1&2047|o.get(h,_),_>=10&&(a===1488||a===93)&&s++,c=c<<1&2047|o.get(_,h),_>=10&&(c===1488||c===93)&&s++}return s*e.N3},t.getPenaltyN4=function(o){let i=0;const s=o.data.length;for(let c=0;c<s;c++)i+=o.data[c];return Math.abs(Math.ceil(i*100/s/5)-10)*e.N4};function n(r,o,i){switch(r){case t.Patterns.PATTERN000:return(o+i)%2===0;case t.Patterns.PATTERN001:return o%2===0;case t.Patterns.PATTERN010:return i%3===0;case t.Patterns.PATTERN011:return(o+i)%3===0;case t.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(i/3))%2===0;case t.Patterns.PATTERN101:return o*i%2+o*i%3===0;case t.Patterns.PATTERN110:return(o*i%2+o*i%3)%2===0;case t.Patterns.PATTERN111:return(o*i%3+(o+i)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}t.applyMask=function(o,i){const s=i.size;for(let a=0;a<s;a++)for(let c=0;c<s;c++)i.isReserved(c,a)||i.xor(c,a,n(o,c,a))},t.getBestMask=function(o,i){const s=Object.keys(t.Patterns).length;let a=0,c=1/0;for(let h=0;h<s;h++){i(h),t.applyMask(h,o);const _=t.getPenaltyN1(o)+t.getPenaltyN2(o)+t.getPenaltyN3(o)+t.getPenaltyN4(o);t.applyMask(h,o),_<c&&(c=_,a=h)}return a}})(Vn);var Ie={};const L=Se,ue=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],de=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];Ie.getBlocksCount=function(e,n){switch(n){case L.L:return ue[(e-1)*4+0];case L.M:return ue[(e-1)*4+1];case L.Q:return ue[(e-1)*4+2];case L.H:return ue[(e-1)*4+3];default:return}};Ie.getTotalCodewordsCount=function(e,n){switch(n){case L.L:return de[(e-1)*4+0];case L.M:return de[(e-1)*4+1];case L.Q:return de[(e-1)*4+2];case L.H:return de[(e-1)*4+3];default:return}};var Jn={},Re={};const ee=new Uint8Array(512),_e=new Uint8Array(256);(function(){let e=1;for(let n=0;n<255;n++)ee[n]=e,_e[e]=n,e<<=1,e&256&&(e^=285);for(let n=255;n<512;n++)ee[n]=ee[n-255]})();Re.log=function(e){if(e<1)throw new Error("log("+e+")");return _e[e]};Re.exp=function(e){return ee[e]};Re.mul=function(e,n){return e===0||n===0?0:ee[_e[e]+_e[n]]};(function(t){const e=Re;t.mul=function(r,o){const i=new Uint8Array(r.length+o.length-1);for(let s=0;s<r.length;s++)for(let a=0;a<o.length;a++)i[s+a]^=e.mul(r[s],o[a]);return i},t.mod=function(r,o){let i=new Uint8Array(r);for(;i.length-o.length>=0;){const s=i[0];for(let c=0;c<o.length;c++)i[c]^=e.mul(o[c],s);let a=0;for(;a<i.length&&i[a]===0;)a++;i=i.slice(a)}return i},t.generateECPolynomial=function(r){let o=new Uint8Array([1]);for(let i=0;i<r;i++)o=t.mul(o,new Uint8Array([1,e.exp(i)]));return o}})(Jn);const Qn=Jn;function ht(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}ht.prototype.initialize=function(e){this.degree=e,this.genPoly=Qn.generateECPolynomial(this.degree)};ht.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const n=new Uint8Array(e.length+this.degree);n.set(e);const r=Qn.mod(n,this.genPoly),o=this.degree-r.length;if(o>0){const i=new Uint8Array(this.degree);return i.set(r,o),i}return r};var qs=ht,Kn={},D={},gt={};gt.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var A={};const Yn="[0-9]+",Ds="[A-Z $%*+\\-./:]+";let oe="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";oe=oe.replace(/u/g,"\\u");const Fs="(?:(?![A-Z0-9 $%*+\\-./:]|"+oe+`)(?:.|[\r
]))+`;A.KANJI=new RegExp(oe,"g");A.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");A.BYTE=new RegExp(Fs,"g");A.NUMERIC=new RegExp(Yn,"g");A.ALPHANUMERIC=new RegExp(Ds,"g");const $s=new RegExp("^"+oe+"$"),js=new RegExp("^"+Yn+"$"),Hs=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");A.testKanji=function(e){return $s.test(e)};A.testNumeric=function(e){return js.test(e)};A.testAlphanumeric=function(e){return Hs.test(e)};(function(t){const e=gt,n=A;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(i,s){if(!i.ccBits)throw new Error("Invalid mode: "+i);if(!e.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?i.ccBits[0]:s<27?i.ccBits[1]:i.ccBits[2]},t.getBestModeForData=function(i){return n.testNumeric(i)?t.NUMERIC:n.testAlphanumeric(i)?t.ALPHANUMERIC:n.testKanji(i)?t.KANJI:t.BYTE},t.toString=function(i){if(i&&i.id)return i.id;throw new Error("Invalid mode")},t.isValid=function(i){return i&&i.bit&&i.ccBits};function r(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+o)}}t.from=function(i,s){if(t.isValid(i))return i;try{return r(i)}catch{return s}}})(D);(function(t){const e=M,n=Ie,r=Se,o=D,i=gt,s=7973,a=e.getBCHDigit(s);function c(b,w,E){for(let C=1;C<=40;C++)if(w<=t.getCapacity(C,E,b))return C}function h(b,w){return o.getCharCountIndicator(b,w)+4}function _(b,w){let E=0;return b.forEach(function(C){const I=h(C.mode,w);E+=I+C.getBitsLength()}),E}function v(b,w){for(let E=1;E<=40;E++)if(_(b,E)<=t.getCapacity(E,w,o.MIXED))return E}t.from=function(w,E){return i.isValid(w)?parseInt(w,10):E},t.getCapacity=function(w,E,C){if(!i.isValid(w))throw new Error("Invalid QR Code version");typeof C>"u"&&(C=o.BYTE);const I=e.getSymbolTotalCodewords(w),l=n.getTotalCodewordsCount(w,E),d=(I-l)*8;if(C===o.MIXED)return d;const f=d-h(C,w);switch(C){case o.NUMERIC:return Math.floor(f/10*3);case o.ALPHANUMERIC:return Math.floor(f/11*2);case o.KANJI:return Math.floor(f/13);case o.BYTE:default:return Math.floor(f/8)}},t.getBestVersionForData=function(w,E){let C;const I=r.from(E,r.M);if(Array.isArray(w)){if(w.length>1)return v(w,I);if(w.length===0)return 1;C=w[0]}else C=w;return c(C.mode,C.getLength(),I)},t.getEncodedBits=function(w){if(!i.isValid(w)||w<7)throw new Error("Invalid QR Code version");let E=w<<12;for(;e.getBCHDigit(E)-a>=0;)E^=s<<e.getBCHDigit(E)-a;return w<<12|E}})(Kn);var Gn={};const Fe=M,Zn=1335,zs=21522,Rt=Fe.getBCHDigit(Zn);Gn.getEncodedBits=function(e,n){const r=e.bit<<3|n;let o=r<<10;for(;Fe.getBCHDigit(o)-Rt>=0;)o^=Zn<<Fe.getBCHDigit(o)-Rt;return(r<<10|o)^zs};var Xn={};const Ws=D;function J(t){this.mode=Ws.NUMERIC,this.data=t.toString()}J.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};J.prototype.getLength=function(){return this.data.length};J.prototype.getBitsLength=function(){return J.getBitsLength(this.data.length)};J.prototype.write=function(e){let n,r,o;for(n=0;n+3<=this.data.length;n+=3)r=this.data.substr(n,3),o=parseInt(r,10),e.put(o,10);const i=this.data.length-n;i>0&&(r=this.data.substr(n),o=parseInt(r,10),e.put(o,i*3+1))};var Vs=J;const Js=D,Ne=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Q(t){this.mode=Js.ALPHANUMERIC,this.data=t}Q.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};Q.prototype.getLength=function(){return this.data.length};Q.prototype.getBitsLength=function(){return Q.getBitsLength(this.data.length)};Q.prototype.write=function(e){let n;for(n=0;n+2<=this.data.length;n+=2){let r=Ne.indexOf(this.data[n])*45;r+=Ne.indexOf(this.data[n+1]),e.put(r,11)}this.data.length%2&&e.put(Ne.indexOf(this.data[n]),6)};var Qs=Q;const Ks=qr,Ys=D;function K(t){this.mode=Ys.BYTE,typeof t=="string"&&(t=Ks(t)),this.data=new Uint8Array(t)}K.getBitsLength=function(e){return e*8};K.prototype.getLength=function(){return this.data.length};K.prototype.getBitsLength=function(){return K.getBitsLength(this.data.length)};K.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)};var Gs=K;const Zs=D,Xs=M;function Y(t){this.mode=Zs.KANJI,this.data=t}Y.getBitsLength=function(e){return e*13};Y.prototype.getLength=function(){return this.data.length};Y.prototype.getBitsLength=function(){return Y.getBitsLength(this.data.length)};Y.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let n=Xs.toSJIS(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),t.put(n,13)}};var ea=Y;(function(t){const e=D,n=Vs,r=Qs,o=Gs,i=ea,s=A,a=M,c=Dr;function h(l){return unescape(encodeURIComponent(l)).length}function _(l,d,f){const u=[];let g;for(;(g=l.exec(f))!==null;)u.push({data:g[0],index:g.index,mode:d,length:g[0].length});return u}function v(l){const d=_(s.NUMERIC,e.NUMERIC,l),f=_(s.ALPHANUMERIC,e.ALPHANUMERIC,l);let u,g;return a.isKanjiModeEnabled()?(u=_(s.BYTE,e.BYTE,l),g=_(s.KANJI,e.KANJI,l)):(u=_(s.BYTE_KANJI,e.BYTE,l),g=[]),d.concat(f,u,g).sort(function(m,S){return m.index-S.index}).map(function(m){return{data:m.data,mode:m.mode,length:m.length}})}function b(l,d){switch(d){case e.NUMERIC:return n.getBitsLength(l);case e.ALPHANUMERIC:return r.getBitsLength(l);case e.KANJI:return i.getBitsLength(l);case e.BYTE:return o.getBitsLength(l)}}function w(l){return l.reduce(function(d,f){const u=d.length-1>=0?d[d.length-1]:null;return u&&u.mode===f.mode?(d[d.length-1].data+=f.data,d):(d.push(f),d)},[])}function E(l){const d=[];for(let f=0;f<l.length;f++){const u=l[f];switch(u.mode){case e.NUMERIC:d.push([u,{data:u.data,mode:e.ALPHANUMERIC,length:u.length},{data:u.data,mode:e.BYTE,length:u.length}]);break;case e.ALPHANUMERIC:d.push([u,{data:u.data,mode:e.BYTE,length:u.length}]);break;case e.KANJI:d.push([u,{data:u.data,mode:e.BYTE,length:h(u.data)}]);break;case e.BYTE:d.push([{data:u.data,mode:e.BYTE,length:h(u.data)}])}}return d}function C(l,d){const f={},u={start:{}};let g=["start"];for(let y=0;y<l.length;y++){const m=l[y],S=[];for(let R=0;R<m.length;R++){const k=m[R],F=""+y+R;S.push(F),f[F]={node:k,lastCount:0},u[F]={};for(let Z=0;Z<g.length;Z++){const x=g[Z];f[x]&&f[x].node.mode===k.mode?(u[x][F]=b(f[x].lastCount+k.length,k.mode)-b(f[x].lastCount,k.mode),f[x].lastCount+=k.length):(f[x]&&(f[x].lastCount=k.length),u[x][F]=b(k.length,k.mode)+4+e.getCharCountIndicator(k.mode,d))}}g=S}for(let y=0;y<g.length;y++)u[g[y]].end=0;return{map:u,table:f}}function I(l,d){let f;const u=e.getBestModeForData(l);if(f=e.from(d,u),f!==e.BYTE&&f.bit<u.bit)throw new Error('"'+l+'" cannot be encoded with mode '+e.toString(f)+`.
 Suggested mode is: `+e.toString(u));switch(f===e.KANJI&&!a.isKanjiModeEnabled()&&(f=e.BYTE),f){case e.NUMERIC:return new n(l);case e.ALPHANUMERIC:return new r(l);case e.KANJI:return new i(l);case e.BYTE:return new o(l)}}t.fromArray=function(d){return d.reduce(function(f,u){return typeof u=="string"?f.push(I(u,null)):u.data&&f.push(I(u.data,u.mode)),f},[])},t.fromString=function(d,f){const u=v(d,a.isKanjiModeEnabled()),g=E(u),y=C(g,f),m=c.find_path(y.map,"start","end"),S=[];for(let R=1;R<m.length-1;R++)S.push(y.table[m[R]].node);return t.fromArray(w(S))},t.rawSplit=function(d){return t.fromArray(v(d,a.isKanjiModeEnabled()))}})(Xn);const ke=M,xe=Se,ta=Bs,na=Us,ra=zn,oa=Wn,$e=Vn,je=Ie,ia=qs,pe=Kn,sa=Gn,aa=D,Me=Xn;function ca(t,e){const n=t.size,r=oa.getPositions(e);for(let o=0;o<r.length;o++){const i=r[o][0],s=r[o][1];for(let a=-1;a<=7;a++)if(!(i+a<=-1||n<=i+a))for(let c=-1;c<=7;c++)s+c<=-1||n<=s+c||(a>=0&&a<=6&&(c===0||c===6)||c>=0&&c<=6&&(a===0||a===6)||a>=2&&a<=4&&c>=2&&c<=4?t.set(i+a,s+c,!0,!0):t.set(i+a,s+c,!1,!0))}}function la(t){const e=t.size;for(let n=8;n<e-8;n++){const r=n%2===0;t.set(n,6,r,!0),t.set(6,n,r,!0)}}function ua(t,e){const n=ra.getPositions(e);for(let r=0;r<n.length;r++){const o=n[r][0],i=n[r][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?t.set(o+s,i+a,!0,!0):t.set(o+s,i+a,!1,!0)}}function da(t,e){const n=t.size,r=pe.getEncodedBits(e);let o,i,s;for(let a=0;a<18;a++)o=Math.floor(a/3),i=a%3+n-8-3,s=(r>>a&1)===1,t.set(o,i,s,!0),t.set(i,o,s,!0)}function Ae(t,e,n){const r=t.size,o=sa.getEncodedBits(e,n);let i,s;for(i=0;i<15;i++)s=(o>>i&1)===1,i<6?t.set(i,8,s,!0):i<8?t.set(i+1,8,s,!0):t.set(r-15+i,8,s,!0),i<8?t.set(8,r-i-1,s,!0):i<9?t.set(8,15-i-1+1,s,!0):t.set(8,15-i-1,s,!0);t.set(r-8,8,1,!0)}function fa(t,e){const n=t.size;let r=-1,o=n-1,i=7,s=0;for(let a=n-1;a>0;a-=2)for(a===6&&a--;;){for(let c=0;c<2;c++)if(!t.isReserved(o,a-c)){let h=!1;s<e.length&&(h=(e[s]>>>i&1)===1),t.set(o,a-c,h),i--,i===-1&&(s++,i=7)}if(o+=r,o<0||n<=o){o-=r,r=-r;break}}}function ha(t,e,n){const r=new ta;n.forEach(function(c){r.put(c.mode.bit,4),r.put(c.getLength(),aa.getCharCountIndicator(c.mode,t)),c.write(r)});const o=ke.getSymbolTotalCodewords(t),i=je.getTotalCodewordsCount(t,e),s=(o-i)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const a=(s-r.getLengthInBits())/8;for(let c=0;c<a;c++)r.put(c%2?17:236,8);return ga(r,t,e)}function ga(t,e,n){const r=ke.getSymbolTotalCodewords(e),o=je.getTotalCodewordsCount(e,n),i=r-o,s=je.getBlocksCount(e,n),a=r%s,c=s-a,h=Math.floor(r/s),_=Math.floor(i/s),v=_+1,b=h-_,w=new ia(b);let E=0;const C=new Array(s),I=new Array(s);let l=0;const d=new Uint8Array(t.buffer);for(let m=0;m<s;m++){const S=m<c?_:v;C[m]=d.slice(E,E+S),I[m]=w.encode(C[m]),E+=S,l=Math.max(l,S)}const f=new Uint8Array(r);let u=0,g,y;for(g=0;g<l;g++)for(y=0;y<s;y++)g<C[y].length&&(f[u++]=C[y][g]);for(g=0;g<b;g++)for(y=0;y<s;y++)f[u++]=I[y][g];return f}function _a(t,e,n,r){let o;if(Array.isArray(t))o=Me.fromArray(t);else if(typeof t=="string"){let h=e;if(!h){const _=Me.rawSplit(t);h=pe.getBestVersionForData(_,n)}o=Me.fromString(t,h||40)}else throw new Error("Invalid data");const i=pe.getBestVersionForData(o,n);if(!i)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=i;else if(e<i)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+i+`.
`);const s=ha(e,n,o),a=ke.getSymbolSize(e),c=new na(a);return ca(c,e),la(c),ua(c,e),Ae(c,n,0),e>=7&&da(c,e),fa(c,s),isNaN(r)&&(r=$e.getBestMask(c,Ae.bind(null,c,n))),$e.applyMask(r,c),Ae(c,n,r),{modules:c,version:e,errorCorrectionLevel:n,maskPattern:r,segments:o}}jn.create=function(e,n){if(typeof e>"u"||e==="")throw new Error("No input text");let r=xe.M,o,i;return typeof n<"u"&&(r=xe.from(n.errorCorrectionLevel,xe.M),o=pe.from(n.version),i=$e.from(n.maskPattern),n.toSJISFunc&&ke.setToSJISFunction(n.toSJISFunc)),_a(e,o,r,i)};var er={},_t={};(function(t){function e(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let r=n.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+n);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(i){return[i,i]}))),r.length===6&&r.push("F","F");const o=parseInt(r.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+r.slice(0,6).join("")}}t.getOptions=function(r){r||(r={}),r.color||(r.color={});const o=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,i=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:i,scale:i?4:s,margin:o,color:{dark:e(r.color.dark||"#000000ff"),light:e(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},t.getScale=function(r,o){return o.width&&o.width>=r+o.margin*2?o.width/(r+o.margin*2):o.scale},t.getImageWidth=function(r,o){const i=t.getScale(r,o);return Math.floor((r+o.margin*2)*i)},t.qrToImageData=function(r,o,i){const s=o.modules.size,a=o.modules.data,c=t.getScale(s,i),h=Math.floor((s+i.margin*2)*c),_=i.margin*c,v=[i.color.light,i.color.dark];for(let b=0;b<h;b++)for(let w=0;w<h;w++){let E=(b*h+w)*4,C=i.color.light;if(b>=_&&w>=_&&b<h-_&&w<h-_){const I=Math.floor((b-_)/c),l=Math.floor((w-_)/c);C=v[a[I*s+l]?1:0]}r[E++]=C.r,r[E++]=C.g,r[E++]=C.b,r[E]=C.a}}})(_t);(function(t){const e=_t;function n(o,i,s){o.clearRect(0,0,i.width,i.height),i.style||(i.style={}),i.height=s,i.width=s,i.style.height=s+"px",i.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(i,s,a){let c=a,h=s;typeof c>"u"&&(!s||!s.getContext)&&(c=s,s=void 0),s||(h=r()),c=e.getOptions(c);const _=e.getImageWidth(i.modules.size,c),v=h.getContext("2d"),b=v.createImageData(_,_);return e.qrToImageData(b.data,i,c),n(v,h,_),v.putImageData(b,0,0),h},t.renderToDataURL=function(i,s,a){let c=a;typeof c>"u"&&(!s||!s.getContext)&&(c=s,s=void 0),c||(c={});const h=t.render(i,s,c),_=c.type||"image/png",v=c.rendererOpts||{};return h.toDataURL(_,v.quality)}})(er);var tr={};const pa=_t;function kt(t,e){const n=t.a/255,r=e+'="'+t.hex+'"';return n<1?r+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function Oe(t,e,n){let r=t+e;return typeof n<"u"&&(r+=" "+n),r}function ma(t,e,n){let r="",o=0,i=!1,s=0;for(let a=0;a<t.length;a++){const c=Math.floor(a%e),h=Math.floor(a/e);!c&&!i&&(i=!0),t[a]?(s++,a>0&&c>0&&t[a-1]||(r+=i?Oe("M",c+n,.5+h+n):Oe("m",o,0),o=0,i=!1),c+1<e&&t[a+1]||(r+=Oe("h",s),s=0)):o++}return r}tr.render=function(e,n,r){const o=pa.getOptions(n),i=e.modules.size,s=e.modules.data,a=i+o.margin*2,c=o.color.light.a?"<path "+kt(o.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",h="<path "+kt(o.color.dark,"stroke")+' d="'+ma(s,i,o.margin)+'"/>',_='viewBox="0 0 '+a+" "+a+'"',b='<svg xmlns="http://www.w3.org/2000/svg" '+(o.width?'width="'+o.width+'" height="'+o.width+'" ':"")+_+' shape-rendering="crispEdges">'+c+h+`</svg>
`;return typeof r=="function"&&r(null,b),b};const wa=Os,He=jn,nr=er,ya=tr;function pt(t,e,n,r,o){const i=[].slice.call(arguments,1),s=i.length,a=typeof i[s-1]=="function";if(!a&&!wa())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(o=n,n=e,e=r=void 0):s===3&&(e.getContext&&typeof o>"u"?(o=r,r=void 0):(o=r,r=n,n=e,e=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(n=e,e=r=void 0):s===2&&!e.getContext&&(r=n,n=e,e=void 0),new Promise(function(c,h){try{const _=He.create(n,r);c(t(_,e,r))}catch(_){h(_)}})}try{const c=He.create(n,r);o(null,t(c,e,r))}catch(c){o(c)}}ae.create=He.create;ae.toCanvas=pt.bind(null,nr.render);ae.toDataURL=pt.bind(null,nr.renderToDataURL);ae.toString=pt.bind(null,function(t,e,n){return ya.render(t,n)});var ba=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,n=[],r=0;r<t.rangeCount;r++)n.push(t.getRangeAt(r));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return t.removeAllRanges(),function(){t.type==="Caret"&&t.removeAllRanges(),t.rangeCount||n.forEach(function(o){t.addRange(o)}),e&&e.focus()}},va=ba,Tt={"text/plain":"Text","text/html":"Url",default:"Text"},Ea="Copy to clipboard: #{key}, Enter";function Ca(t){var e=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}function Sa(t,e){var n,r,o,i,s,a,c=!1;e||(e={}),n=e.debug||!1;try{o=va(),i=document.createRange(),s=document.getSelection(),a=document.createElement("span"),a.textContent=t,a.ariaHidden="true",a.style.all="unset",a.style.position="fixed",a.style.top=0,a.style.clip="rect(0, 0, 0, 0)",a.style.whiteSpace="pre",a.style.webkitUserSelect="text",a.style.MozUserSelect="text",a.style.msUserSelect="text",a.style.userSelect="text",a.addEventListener("copy",function(_){if(_.stopPropagation(),e.format)if(_.preventDefault(),typeof _.clipboardData>"u"){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var v=Tt[e.format]||Tt.default;window.clipboardData.setData(v,t)}else _.clipboardData.clearData(),_.clipboardData.setData(e.format,t);e.onCopy&&(_.preventDefault(),e.onCopy(_.clipboardData))}),document.body.appendChild(a),i.selectNodeContents(a),s.addRange(i);var h=document.execCommand("copy");if(!h)throw new Error("copy command was unsuccessful");c=!0}catch(_){n&&console.error("unable to copy using execCommand: ",_),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),c=!0}catch(v){n&&console.error("unable to copy using clipboardData: ",v),n&&console.error("falling back to prompt"),r=Ca("message"in e?e.message:Ea),window.prompt(r,t)}}finally{s&&(typeof s.removeRange=="function"?s.removeRange(i):s.removeAllRanges()),a&&document.body.removeChild(a),o()}return c}var Ia=Sa;function rr(t,e){for(var n in e)t[n]=e[n];return t}function ze(t,e){for(var n in t)if(n!=="__source"&&!(n in e))return!0;for(var r in e)if(r!=="__source"&&t[r]!==e[r])return!0;return!1}function Le(t,e){return t===e&&(t!==0||1/t==1/e)||t!=t&&e!=e}function me(t){this.props=t}function or(t,e){function n(o){var i=this.props.ref,s=i==o.ref;return!s&&i&&(i.call?i(null):i.current=null),e?!e(this.props,o)||!s:ze(this.props,o)}function r(o){return this.shouldComponentUpdate=n,O(t,o)}return r.displayName="Memo("+(t.displayName||t.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(me.prototype=new j).isPureReactComponent=!0,me.prototype.shouldComponentUpdate=function(t,e){return ze(this.props,t)||ze(this.state,e)};var Nt=N.__b;N.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),Nt&&Nt(t)};var Ra=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function ir(t){function e(n){var r=rr({},n);return delete r.ref,t(r,n.ref||null)}return e.$$typeof=Ra,e.render=e,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(t.displayName||t.name)+")",e}var xt=function(t,e){return t==null?null:B(B(t).map(e))},sr={map:xt,forEach:xt,count:function(t){return t?B(t).length:0},only:function(t){var e=B(t);if(e.length!==1)throw"Children.only";return e[0]},toArray:B},ka=N.__e;N.__e=function(t,e,n,r){if(t.then){for(var o,i=e;i=i.__;)if((o=i.__c)&&o.__c)return e.__e==null&&(e.__e=n.__e,e.__k=n.__k),o.__c(t,e)}ka(t,e,n,r)};var Mt=N.unmount;function ar(t,e,n){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),t.__c.__H=null),(t=rr({},t)).__c!=null&&(t.__c.__P===n&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(r){return ar(r,e,n)})),t}function cr(t,e,n){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(r){return cr(r,e,n)}),t.__c&&t.__c.__P===e&&(t.__e&&n.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=n)),t}function te(){this.__u=0,this.t=null,this.__b=null}function lr(t){var e=t.__.__c;return e&&e.__a&&e.__a(t)}function ur(t){var e,n,r;function o(i){if(e||(e=t()).then(function(s){n=s.default||s},function(s){r=s}),r)throw r;if(!n)throw e;return O(n,i)}return o.displayName="Lazy",o.__f=!0,o}function z(){this.u=null,this.o=null}N.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&t.__h===!0&&(t.type=null),Mt&&Mt(t)},(te.prototype=new j).__c=function(t,e){var n=e.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var o=lr(r.__v),i=!1,s=function(){i||(i=!0,n.__R=null,o?o(a):a())};n.__R=s;var a=function(){if(!--r.__u){if(r.state.__a){var h=r.state.__a;r.__v.__k[0]=cr(h,h.__c.__P,h.__c.__O)}var _;for(r.setState({__a:r.__b=null});_=r.t.pop();)_.forceUpdate()}},c=e.__h===!0;r.__u++||c||r.setState({__a:r.__b=r.__v.__k[0]}),t.then(s,s)},te.prototype.componentWillUnmount=function(){this.t=[]},te.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=ar(this.__b,n,r.__O=r.__P)}this.__b=null}var o=e.__a&&O(ne,null,t.fallback);return o&&(o.__h=null),[O(ne,null,e.__a?null:t.children),o]};var At=function(t,e,n){if(++n[1]===n[0]&&t.o.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.o.size))for(n=t.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.u=n=n[2]}};function Ta(t){return this.getChildContext=function(){return t.context},t.children}function Na(t){var e=this,n=t.i;e.componentWillUnmount=function(){he(null,e.l),e.l=null,e.i=null},e.i&&e.i!==n&&e.componentWillUnmount(),t.__v?(e.l||(e.i=n,e.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),e.i.appendChild(r)},insertBefore:function(r,o){this.childNodes.push(r),e.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),e.i.removeChild(r)}}),he(O(Ta,{context:e.context},t.__v),e.l)):e.l&&e.componentWillUnmount()}function dr(t,e){var n=O(Na,{__v:t,i:e});return n.containerInfo=e,n}(z.prototype=new j).__a=function(t){var e=this,n=lr(e.__v),r=e.o.get(t);return r[0]++,function(o){var i=function(){e.props.revealOrder?(r.push(o),At(e,t,r)):o()};n?n(i):i()}},z.prototype.render=function(t){this.u=null,this.o=new Map;var e=B(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var n=e.length;n--;)this.o.set(e[n],this.u=[1,0,this.u]);return t.children},z.prototype.componentDidUpdate=z.prototype.componentDidMount=function(){var t=this;this.o.forEach(function(e,n){At(t,n,e)})};var fr=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,xa=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Ma=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Aa=/[A-Z0-9]/g,Oa=typeof document<"u",La=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(t)};function hr(t,e,n){return e.__k==null&&(e.textContent=""),he(t,e),typeof n=="function"&&n(),t?t.__c:null}function gr(t,e,n){return lo(t,e),typeof n=="function"&&n(),t?t.__c:null}j.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(j.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var Ot=N.event;function Ba(){}function Ua(){return this.cancelBubble}function Pa(){return this.defaultPrevented}N.event=function(t){return Ot&&(t=Ot(t)),t.persist=Ba,t.isPropagationStopped=Ua,t.isDefaultPrevented=Pa,t.nativeEvent=t};var mt,qa={enumerable:!1,configurable:!0,get:function(){return this.class}},Lt=N.vnode;N.vnode=function(t){typeof t.type=="string"&&function(e){var n=e.props,r=e.type,o={};for(var i in n){var s=n[i];if(!(i==="value"&&"defaultValue"in n&&s==null||Oa&&i==="children"&&r==="noscript"||i==="class"||i==="className")){var a=i.toLowerCase();i==="defaultValue"&&"value"in n&&n.value==null?i="value":i==="download"&&s===!0?s="":a==="ondoubleclick"?i="ondblclick":a!=="onchange"||r!=="input"&&r!=="textarea"||La(n.type)?a==="onfocus"?i="onfocusin":a==="onblur"?i="onfocusout":Ma.test(i)?i=a:r.indexOf("-")===-1&&xa.test(i)?i=i.replace(Aa,"-$&").toLowerCase():s===null&&(s=void 0):a=i="oninput",a==="oninput"&&o[i=a]&&(i="oninputCapture"),o[i]=s}}r=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=B(n.children).forEach(function(c){c.props.selected=o.value.indexOf(c.props.value)!=-1})),r=="select"&&o.defaultValue!=null&&(o.value=B(n.children).forEach(function(c){c.props.selected=o.multiple?o.defaultValue.indexOf(c.props.value)!=-1:o.defaultValue==c.props.value})),n.class&&!n.className?(o.class=n.class,Object.defineProperty(o,"className",qa)):(n.className&&!n.class||n.class&&n.className)&&(o.class=o.className=n.className),e.props=o}(t),t.$$typeof=fr,Lt&&Lt(t)};var Bt=N.__r;N.__r=function(t){Bt&&Bt(t),mt=t.__c};var Ut=N.diffed;N.diffed=function(t){Ut&&Ut(t);var e=t.props,n=t.__e;n!=null&&t.type==="textarea"&&"value"in e&&e.value!==n.value&&(n.value=e.value==null?"":e.value),mt=null};var _r={ReactCurrentDispatcher:{current:{readContext:function(t){return mt.__n[t.__c].props.value}}}},Da="17.0.2";function pr(t){return O.bind(null,t)}function wt(t){return!!t&&t.$$typeof===fr}function mr(t){return wt(t)?uo.apply(null,arguments):t}function wr(t){return!!t.__k&&(he(null,t),!0)}function yr(t){return t&&(t.base||t.nodeType===1&&t)||null}var br=function(t,e){return t(e)},vr=function(t,e){return t(e)},Er=ne;function yt(t){t()}function Cr(t){return t}function Sr(){return[!1,yt]}var Ir=we;function Rr(t,e){var n=e(),r=Ve({h:{__:n,v:e}}),o=r[0].h,i=r[1];return we(function(){o.__=n,o.v=e,Le(o.__,e())||i({h:o})},[t,n,e]),Je(function(){return Le(o.__,o.v())||i({h:o}),t(function(){Le(o.__,o.v())||i({h:o})})},[t]),n}var Fa={useState:Ve,useId:$t,useReducer:jt,useEffect:Je,useLayoutEffect:we,useInsertionEffect:Ir,useTransition:Sr,useDeferredValue:Cr,useSyncExternalStore:Rr,startTransition:yt,useRef:Ht,useImperativeHandle:zt,useMemo:Wt,useCallback:Vt,useContext:Jt,useDebugValue:Qt,version:"17.0.2",Children:sr,render:hr,hydrate:gr,unmountComponentAtNode:wr,createPortal:dr,createElement:O,createContext:Kt,createFactory:pr,cloneElement:mr,createRef:Yt,Fragment:ne,isValidElement:wt,findDOMNode:yr,Component:j,PureComponent:me,memo:or,forwardRef:ir,flushSync:vr,unstable_batchedUpdates:br,StrictMode:Er,Suspense:te,SuspenseList:z,lazy:ur,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:_r};const $a=Object.freeze(Object.defineProperty({__proto__:null,Children:sr,Component:j,Fragment:ne,PureComponent:me,StrictMode:Er,Suspense:te,SuspenseList:z,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:_r,cloneElement:mr,createContext:Kt,createElement:O,createFactory:pr,createPortal:dr,createRef:Yt,default:Fa,findDOMNode:yr,flushSync:vr,forwardRef:ir,hydrate:gr,isValidElement:wt,lazy:ur,memo:or,render:hr,startTransition:yt,unmountComponentAtNode:wr,unstable_batchedUpdates:br,useCallback:Vt,useContext:Jt,useDebugValue:Qt,useDeferredValue:Cr,useEffect:Je,useErrorBoundary:fo,useId:$t,useImperativeHandle:zt,useInsertionEffect:Ir,useLayoutEffect:we,useMemo:Wt,useReducer:jt,useRef:Ht,useState:Ve,useSyncExternalStore:Rr,useTransition:Sr,version:Da},Symbol.toStringTag,{value:"Module"})),ja=Dt($a);function kr(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var T=As,Tr=kr(ae),Ha=kr(Ia),p=ja;function za(t){Tr.toString(t,{type:"terminal"}).then(console.log)}var Wa=`:root {
  --animation-duration: 300ms;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.animated {
  animation-duration: var(--animation-duration);
  animation-fill-mode: both;
}

.fadeIn {
  animation-name: fadeIn;
}

.fadeOut {
  animation-name: fadeOut;
}

#walletconnect-wrapper {
  -webkit-user-select: none;
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  user-select: none;
  width: 100%;
  z-index: 99999999999999;
}

.walletconnect-modal__headerLogo {
  height: 21px;
}

.walletconnect-modal__header p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  align-items: flex-start;
  display: flex;
  flex: 1;
  margin-left: 5px;
}

.walletconnect-modal__close__wrapper {
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 10000;
  background: white;
  border-radius: 26px;
  padding: 6px;
  box-sizing: border-box;
  width: 26px;
  height: 26px;
  cursor: pointer;
}

.walletconnect-modal__close__icon {
  position: relative;
  top: 7px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(45deg);
}

.walletconnect-modal__close__line1 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
}

.walletconnect-modal__close__line2 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
  transform: rotate(90deg);
}

.walletconnect-qrcode__base {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background: rgba(37, 41, 46, 0.95);
  height: 100%;
  left: 0;
  pointer-events: auto;
  position: fixed;
  top: 0;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  width: 100%;
  will-change: opacity;
  padding: 40px;
  box-sizing: border-box;
}

.walletconnect-qrcode__text {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 10px 0 20px 0;
  text-align: center;
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .walletconnect-qrcode__text {
    font-size: 4vw;
  }
}

@media only screen and (max-width: 320px) {
  .walletconnect-qrcode__text {
    font-size: 14px;
  }
}

.walletconnect-qrcode__image {
  width: calc(100% - 30px);
  box-sizing: border-box;
  cursor: none;
  margin: 0 auto;
}

.walletconnect-qrcode__notification {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 16px;
  padding: 16px 20px;
  border-radius: 16px;
  text-align: center;
  transition: all 0.1s ease-in-out;
  background: white;
  color: black;
  margin-bottom: -60px;
  opacity: 0;
}

.walletconnect-qrcode__notification.notification__show {
  opacity: 1;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__header {
    height: 130px;
  }
  .walletconnect-modal__base {
    overflow: auto;
  }
}

@media only screen and (min-device-width: 415px) and (max-width: 768px) {
  #content {
    max-width: 768px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 375px) and (max-width: 415px) {
  #content {
    max-width: 414px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 320px) and (max-width: 375px) {
  #content {
    max-width: 375px;
    box-sizing: border-box;
  }
}

@media only screen and (max-width: 320px) {
  #content {
    max-width: 320px;
    box-sizing: border-box;
  }
}

.walletconnect-modal__base {
  -webkit-font-smoothing: antialiased;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);
  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,
    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: 41px;
  padding: 24px 24px 22px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  will-change: transform;
  overflow: visible;
  transform: translateY(-50%);
  top: 50%;
  max-width: 500px;
  margin: auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__base {
    padding: 24px 12px;
  }
}

.walletconnect-modal__base .hidden {
  transform: translateY(150%);
  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);
}

.walletconnect-modal__header {
  align-items: center;
  display: flex;
  height: 26px;
  left: 0;
  justify-content: space-between;
  position: absolute;
  top: -42px;
  width: 100%;
}

.walletconnect-modal__base .wc-logo {
  align-items: center;
  display: flex;
  height: 26px;
  margin-top: 15px;
  padding-bottom: 15px;
  pointer-events: auto;
}

.walletconnect-modal__base .wc-logo div {
  background-color: #3399ff;
  height: 21px;
  margin-right: 5px;
  mask-image: url("images/wc-logo.svg") center no-repeat;
  width: 32px;
}

.walletconnect-modal__base .wc-logo p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.walletconnect-modal__base h2 {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 0 0 19px 0;
  text-align: center;
  width: 100%;
}

.walletconnect-modal__base__row {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  height: 56px;
  justify-content: space-between;
  padding: 0 15px;
  position: relative;
  margin: 0px 0px 8px;
  text-align: left;
  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
  text-decoration: none;
}

.walletconnect-modal__base__row:hover {
  background: rgba(60, 66, 82, 0.06);
}

.walletconnect-modal__base__row:active {
  background: rgba(60, 66, 82, 0.06);
  transform: scale(0.975);
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.walletconnect-modal__base__row__h3 {
  color: #25292e;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  padding-bottom: 3px;
}

.walletconnect-modal__base__row__right {
  align-items: center;
  display: flex;
  justify-content: center;
}

.walletconnect-modal__base__row__right__app-icon {
  border-radius: 8px;
  height: 34px;
  margin: 0 11px 2px 0;
  width: 34px;
  background-size: 100%;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-modal__base__row__right__caret {
  height: 18px;
  opacity: 0.3;
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  width: 8px;
  will-change: opacity;
}

.walletconnect-modal__base__row:hover .caret,
.walletconnect-modal__base__row:active .caret {
  opacity: 0.6;
}

.walletconnect-modal__mobile__toggle {
  width: 80%;
  display: flex;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 18px;
  background: #d4d5d9;
}

.walletconnect-modal__single_wallet {
  display: flex;
  justify-content: center;
  margin-top: 7px;
  margin-bottom: 18px;
}

.walletconnect-modal__single_wallet a {
  cursor: pointer;
  color: rgb(64, 153, 255);
  font-size: 21px;
  font-weight: 800;
  text-decoration: none !important;
  margin: 0 auto;
}

.walletconnect-modal__mobile__toggle_selector {
  width: calc(50% - 8px);
  background: white;
  position: absolute;
  border-radius: 5px;
  height: calc(100% - 8px);
  top: 4px;
  transition: all 0.2s ease-in-out;
  transform: translate3d(4px, 0, 0);
}

.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {
  transform: translate3d(calc(100% + 12px), 0, 0);
}

.walletconnect-modal__mobile__toggle a {
  font-size: 12px;
  width: 50%;
  text-align: center;
  padding: 8px;
  margin: 0;
  font-weight: 600;
  z-index: 1;
}

.walletconnect-modal__footer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__footer {
    margin-top: 5vw;
  }
}

.walletconnect-modal__footer a {
  cursor: pointer;
  color: #898d97;
  font-size: 15px;
  margin: 0 auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__footer a {
    font-size: 14px;
  }
}

.walletconnect-connect__buttons__wrapper {
  max-height: 44vh;
}

.walletconnect-connect__buttons__wrapper__android {
  margin: 50% 0;
}

.walletconnect-connect__buttons__wrapper__wrap {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 10px 0;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__buttons__wrapper__wrap {
    margin-top: 40px;
  }
}

.walletconnect-connect__button {
  background-color: rgb(64, 153, 255);
  padding: 12px;
  border-radius: 8px;
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-weight: 500;
}

.walletconnect-connect__button__icon_anchor {
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 8px;
  width: 42px;
  justify-self: center;
  flex-direction: column;
  text-decoration: none !important;
}

@media only screen and (max-width: 320px) {
  .walletconnect-connect__button__icon_anchor {
    margin: 4px;
  }
}

.walletconnect-connect__button__icon {
  border-radius: 10px;
  height: 42px;
  margin: 0;
  width: 42px;
  background-size: cover !important;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-connect__button__text {
  color: #424952;
  font-size: 2.7vw;
  text-decoration: none !important;
  padding: 0;
  margin-top: 1.8vw;
  font-weight: 600;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__button__text {
    font-size: 16px;
    margin-top: 12px;
  }
}

.walletconnect-search__input {
  border: none;
  background: #d4d5d9;
  border-style: none;
  padding: 8px 16px;
  outline: none;
  font-style: normal;
  font-stretch: normal;
  font-size: 16px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  border-radius: 8px;
  width: calc(100% - 16px);
  margin: 0;
  margin-bottom: 8px;
}
`;typeof Symbol<"u"&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")));typeof Symbol<"u"&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function Va(t,e){try{var n=t()}catch(r){return e(r)}return n&&n.then?n.then(void 0,e):n}var Ja="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='300px' height='185px' viewBox='0 0 300 185' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3EWalletConnect%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='walletconnect-logo-alt' fill='%233B99FC' fill-rule='nonzero'%3E %3Cpath d='M61.4385429,36.2562612 C110.349767,-11.6319051 189.65053,-11.6319051 238.561752,36.2562612 L244.448297,42.0196786 C246.893858,44.4140867 246.893858,48.2961898 244.448297,50.690599 L224.311602,70.406102 C223.088821,71.6033071 221.106302,71.6033071 219.883521,70.406102 L211.782937,62.4749541 C177.661245,29.0669724 122.339051,29.0669724 88.2173582,62.4749541 L79.542302,70.9685592 C78.3195204,72.1657633 76.337001,72.1657633 75.1142214,70.9685592 L54.9775265,51.2530561 C52.5319653,48.8586469 52.5319653,44.9765439 54.9775265,42.5821357 L61.4385429,36.2562612 Z M280.206339,77.0300061 L298.128036,94.5769031 C300.573585,96.9713 300.573599,100.85338 298.128067,103.247793 L217.317896,182.368927 C214.872352,184.763353 210.907314,184.76338 208.461736,182.368989 C208.461726,182.368979 208.461714,182.368967 208.461704,182.368957 L151.107561,126.214385 C150.496171,125.615783 149.504911,125.615783 148.893521,126.214385 C148.893517,126.214389 148.893514,126.214393 148.89351,126.214396 L91.5405888,182.368927 C89.095052,184.763359 85.1300133,184.763399 82.6844276,182.369014 C82.6844133,182.369 82.684398,182.368986 82.6843827,182.36897 L1.87196327,103.246785 C-0.573596939,100.852377 -0.573596939,96.9702735 1.87196327,94.5758653 L19.7936929,77.028998 C22.2392531,74.6345898 26.2042918,74.6345898 28.6498531,77.028998 L86.0048306,133.184355 C86.6162214,133.782957 87.6074796,133.782957 88.2188704,133.184355 C88.2188796,133.184346 88.2188878,133.184338 88.2188969,133.184331 L145.571,77.028998 C148.016505,74.6345347 151.981544,74.6344449 154.427161,77.028798 C154.427195,77.0288316 154.427229,77.0288653 154.427262,77.028899 L211.782164,133.184331 C212.393554,133.782932 213.384814,133.782932 213.996204,133.184331 L271.350179,77.0300061 C273.79574,74.6355969 277.760778,74.6355969 280.206339,77.0300061 Z' id='WalletConnect'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E",Qa="WalletConnect",Ka=300,Ya="rgb(64, 153, 255)",Nr="walletconnect-wrapper",Pt="walletconnect-style-sheet",xr="walletconnect-qrcode-modal",Ga="walletconnect-qrcode-close",Mr="walletconnect-qrcode-text",Za="walletconnect-connect-button";function Xa(t){return p.createElement("div",{className:"walletconnect-modal__header"},p.createElement("img",{src:Ja,className:"walletconnect-modal__headerLogo"}),p.createElement("p",null,Qa),p.createElement("div",{className:"walletconnect-modal__close__wrapper",onClick:t.onClose},p.createElement("div",{id:Ga,className:"walletconnect-modal__close__icon"},p.createElement("div",{className:"walletconnect-modal__close__line1"}),p.createElement("div",{className:"walletconnect-modal__close__line2"}))))}function ec(t){return p.createElement("a",{className:"walletconnect-connect__button",href:t.href,id:Za+"-"+t.name,onClick:t.onClick,rel:"noopener noreferrer",style:{backgroundColor:t.color},target:"_blank"},t.name)}var tc="data:image/svg+xml,%3Csvg width='8' height='18' viewBox='0 0 8 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.586301 0.213898C0.150354 0.552968 0.0718197 1.18124 0.41089 1.61719L5.2892 7.88931C5.57007 8.25042 5.57007 8.75608 5.2892 9.11719L0.410889 15.3893C0.071819 15.8253 0.150353 16.4535 0.586301 16.7926C1.02225 17.1317 1.65052 17.0531 1.98959 16.6172L6.86791 10.3451C7.7105 9.26174 7.7105 7.74476 6.86791 6.66143L1.98959 0.38931C1.65052 -0.0466374 1.02225 -0.125172 0.586301 0.213898Z' fill='%233C4252'/%3E %3C/svg%3E";function nc(t){var e=t.color,n=t.href,r=t.name,o=t.logo,i=t.onClick;return p.createElement("a",{className:"walletconnect-modal__base__row",href:n,onClick:i,rel:"noopener noreferrer",target:"_blank"},p.createElement("h3",{className:"walletconnect-modal__base__row__h3"},r),p.createElement("div",{className:"walletconnect-modal__base__row__right"},p.createElement("div",{className:"walletconnect-modal__base__row__right__app-icon",style:{background:"url('"+o+"') "+e,backgroundSize:"100%"}}),p.createElement("img",{src:tc,className:"walletconnect-modal__base__row__right__caret"})))}function rc(t){var e=t.color,n=t.href,r=t.name,o=t.logo,i=t.onClick,s=window.innerWidth<768?(r.length>8?2.5:2.7)+"vw":"inherit";return p.createElement("a",{className:"walletconnect-connect__button__icon_anchor",href:n,onClick:i,rel:"noopener noreferrer",target:"_blank"},p.createElement("div",{className:"walletconnect-connect__button__icon",style:{background:"url('"+o+"') "+e,backgroundSize:"100%"}}),p.createElement("div",{style:{fontSize:s},className:"walletconnect-connect__button__text"},r))}var oc=5,Be=12;function ic(t){var e=T.isAndroid(),n=p.useState(""),r=n[0],o=n[1],i=p.useState(""),s=i[0],a=i[1],c=p.useState(1),h=c[0],_=c[1],v=s?t.links.filter(function(u){return u.name.toLowerCase().includes(s.toLowerCase())}):t.links,b=t.errorMessage,w=s||v.length>oc,E=Math.ceil(v.length/Be),C=[(h-1)*Be+1,h*Be],I=v.length?v.filter(function(u,g){return g+1>=C[0]&&g+1<=C[1]}):[],l=!e&&E>1,d=void 0;function f(u){o(u.target.value),clearTimeout(d),u.target.value?d=setTimeout(function(){a(u.target.value),_(1)},1e3):(o(""),a(""),_(1))}return p.createElement("div",null,p.createElement("p",{id:Mr,className:"walletconnect-qrcode__text"},e?t.text.connect_mobile_wallet:t.text.choose_preferred_wallet),!e&&p.createElement("input",{className:"walletconnect-search__input",placeholder:"Search",value:r,onChange:f}),p.createElement("div",{className:"walletconnect-connect__buttons__wrapper"+(e?"__android":w&&v.length?"__wrap":"")},e?p.createElement(ec,{name:t.text.connect,color:Ya,href:t.uri,onClick:p.useCallback(function(){T.saveMobileLinkInfo({name:"Unknown",href:t.uri})},[])}):I.length?I.map(function(u){var g=u.color,y=u.name,m=u.shortName,S=u.logo,R=T.formatIOSMobile(t.uri,u),k=p.useCallback(function(){T.saveMobileLinkInfo({name:y,href:R})},[I]);return w?p.createElement(rc,{color:g,href:R,name:m||y,logo:S,onClick:k}):p.createElement(nc,{color:g,href:R,name:y,logo:S,onClick:k})}):p.createElement(p.Fragment,null,p.createElement("p",null,b.length?t.errorMessage:t.links.length&&!v.length?t.text.no_wallets_found:t.text.loading))),l&&p.createElement("div",{className:"walletconnect-modal__footer"},Array(E).fill(0).map(function(u,g){var y=g+1,m=h===y;return p.createElement("a",{style:{margin:"auto 10px",fontWeight:m?"bold":"normal"},onClick:function(){return _(y)}},y)})))}function sc(t){var e=!!t.message.trim();return p.createElement("div",{className:"walletconnect-qrcode__notification"+(e?" notification__show":"")},t.message)}var ac=function(t){try{var e="";return Promise.resolve(Tr.toString(t,{margin:0,type:"svg"})).then(function(n){return typeof n=="string"&&(e=n.replace("<svg",'<svg class="walletconnect-qrcode__image"')),e})}catch(n){return Promise.reject(n)}};function cc(t){var e=p.useState(""),n=e[0],r=e[1],o=p.useState(""),i=o[0],s=o[1];p.useEffect(function(){try{return Promise.resolve(ac(t.uri)).then(function(c){s(c)})}catch(c){Promise.reject(c)}},[]);var a=function(){var c=Ha(t.uri);c?(r(t.text.copied_to_clipboard),setInterval(function(){return r("")},1200)):(r("Error"),setInterval(function(){return r("")},1200))};return p.createElement("div",null,p.createElement("p",{id:Mr,className:"walletconnect-qrcode__text"},t.text.scan_qrcode_with_wallet),p.createElement("div",{dangerouslySetInnerHTML:{__html:i}}),p.createElement("div",{className:"walletconnect-modal__footer"},p.createElement("a",{onClick:a},t.text.copy_to_clipboard)),p.createElement(sc,{message:n}))}function lc(t){var e=T.isAndroid(),n=T.isMobile(),r=n?t.qrcodeModalOptions&&t.qrcodeModalOptions.mobileLinks?t.qrcodeModalOptions.mobileLinks:void 0:t.qrcodeModalOptions&&t.qrcodeModalOptions.desktopLinks?t.qrcodeModalOptions.desktopLinks:void 0,o=p.useState(!1),i=o[0],s=o[1],a=p.useState(!1),c=a[0],h=a[1],_=p.useState(!n),v=_[0],b=_[1],w={mobile:n,text:t.text,uri:t.uri,qrcodeModalOptions:t.qrcodeModalOptions},E=p.useState(""),C=E[0],I=E[1],l=p.useState(!1),d=l[0],f=l[1],u=p.useState([]),g=u[0],y=u[1],m=p.useState(""),S=m[0],R=m[1],k=function(){c||i||r&&!r.length||g.length>0||p.useEffect(function(){var Z=function(){try{if(e)return Promise.resolve();s(!0);var x=Va(function(){var X=t.qrcodeModalOptions&&t.qrcodeModalOptions.registryUrl?t.qrcodeModalOptions.registryUrl:T.getWalletRegistryUrl();return Promise.resolve(fetch(X)).then(function(Lr){return Promise.resolve(Lr.json()).then(function(Br){var Ur=Br.listings,Pr=n?"mobile":"desktop",le=T.getMobileLinkRegistry(T.formatMobileRegistry(Ur,Pr),r);s(!1),h(!0),R(le.length?"":t.text.no_supported_wallets),y(le);var bt=le.length===1;bt&&(I(T.formatIOSMobile(t.uri,le[0])),b(!0)),f(bt)})})},function(X){s(!1),h(!0),R(t.text.something_went_wrong),console.error(X)});return Promise.resolve(x&&x.then?x.then(function(){}):void 0)}catch(X){return Promise.reject(X)}};Z()})};k();var F=n?v:!v;return p.createElement("div",{id:xr,className:"walletconnect-qrcode__base animated fadeIn"},p.createElement("div",{className:"walletconnect-modal__base"},p.createElement(Xa,{onClose:t.onClose}),d&&v?p.createElement("div",{className:"walletconnect-modal__single_wallet"},p.createElement("a",{onClick:function(){return T.saveMobileLinkInfo({name:g[0].name,href:C})},href:C,rel:"noopener noreferrer",target:"_blank"},t.text.connect_with+" "+(d?g[0].name:"")+" ›")):e||i||!i&&g.length?p.createElement("div",{className:"walletconnect-modal__mobile__toggle"+(F?" right__selected":"")},p.createElement("div",{className:"walletconnect-modal__mobile__toggle_selector"}),n?p.createElement(p.Fragment,null,p.createElement("a",{onClick:function(){return b(!1),k()}},t.text.mobile),p.createElement("a",{onClick:function(){return b(!0)}},t.text.qrcode)):p.createElement(p.Fragment,null,p.createElement("a",{onClick:function(){return b(!0)}},t.text.qrcode),p.createElement("a",{onClick:function(){return b(!1),k()}},t.text.desktop))):null,p.createElement("div",null,v||!e&&!i&&!g.length?p.createElement(cc,Object.assign({},w)):p.createElement(ic,Object.assign({},w,{links:g,errorMessage:S})))))}var uc={choose_preferred_wallet:"Wähle bevorzugte Wallet",connect_mobile_wallet:"Verbinde mit Mobile Wallet",scan_qrcode_with_wallet:"Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",connect:"Verbinden",qrcode:"QR-Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"In die Zwischenablage kopieren",copied_to_clipboard:"In die Zwischenablage kopiert!",connect_with:"Verbinden mit Hilfe von",loading:"Laden...",something_went_wrong:"Etwas ist schief gelaufen",no_supported_wallets:"Es gibt noch keine unterstützten Wallet",no_wallets_found:"keine Wallet gefunden"},dc={choose_preferred_wallet:"Choose your preferred wallet",connect_mobile_wallet:"Connect to Mobile Wallet",scan_qrcode_with_wallet:"Scan QR code with a WalletConnect-compatible wallet",connect:"Connect",qrcode:"QR Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"Copy to clipboard",copied_to_clipboard:"Copied to clipboard!",connect_with:"Connect with",loading:"Loading...",something_went_wrong:"Something went wrong",no_supported_wallets:"There are no supported wallets yet",no_wallets_found:"No wallets found"},fc={choose_preferred_wallet:"Elige tu billetera preferida",connect_mobile_wallet:"Conectar a billetera móvil",scan_qrcode_with_wallet:"Escanea el código QR con una billetera compatible con WalletConnect",connect:"Conectar",qrcode:"Código QR",mobile:"Móvil",desktop:"Desktop",copy_to_clipboard:"Copiar",copied_to_clipboard:"Copiado!",connect_with:"Conectar mediante",loading:"Cargando...",something_went_wrong:"Algo salió mal",no_supported_wallets:"Todavía no hay billeteras compatibles",no_wallets_found:"No se encontraron billeteras"},hc={choose_preferred_wallet:"Choisissez votre portefeuille préféré",connect_mobile_wallet:"Se connecter au portefeuille mobile",scan_qrcode_with_wallet:"Scannez le QR code avec un portefeuille compatible WalletConnect",connect:"Se connecter",qrcode:"QR Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"Copier",copied_to_clipboard:"Copié!",connect_with:"Connectez-vous à l'aide de",loading:"Chargement...",something_went_wrong:"Quelque chose a mal tourné",no_supported_wallets:"Il n'y a pas encore de portefeuilles pris en charge",no_wallets_found:"Aucun portefeuille trouvé"},gc={choose_preferred_wallet:"원하는 지갑을 선택하세요",connect_mobile_wallet:"모바일 지갑과 연결",scan_qrcode_with_wallet:"WalletConnect 지원 지갑에서 QR코드를 스캔하세요",connect:"연결",qrcode:"QR 코드",mobile:"모바일",desktop:"데스크탑",copy_to_clipboard:"클립보드에 복사",copied_to_clipboard:"클립보드에 복사되었습니다!",connect_with:"와 연결하다",loading:"로드 중...",something_went_wrong:"문제가 발생했습니다.",no_supported_wallets:"아직 지원되는 지갑이 없습니다",no_wallets_found:"지갑을 찾을 수 없습니다"},_c={choose_preferred_wallet:"Escolha sua carteira preferida",connect_mobile_wallet:"Conectar-se à carteira móvel",scan_qrcode_with_wallet:"Ler o código QR com uma carteira compatível com WalletConnect",connect:"Conectar",qrcode:"Código QR",mobile:"Móvel",desktop:"Desktop",copy_to_clipboard:"Copiar",copied_to_clipboard:"Copiado!",connect_with:"Ligar por meio de",loading:"Carregamento...",something_went_wrong:"Algo correu mal",no_supported_wallets:"Ainda não há carteiras suportadas",no_wallets_found:"Nenhuma carteira encontrada"},pc={choose_preferred_wallet:"选择你的钱包",connect_mobile_wallet:"连接至移动端钱包",scan_qrcode_with_wallet:"使用兼容 WalletConnect 的钱包扫描二维码",connect:"连接",qrcode:"二维码",mobile:"移动",desktop:"桌面",copy_to_clipboard:"复制到剪贴板",copied_to_clipboard:"复制到剪贴板成功！",connect_with:"通过以下方式连接",loading:"正在加载...",something_went_wrong:"出了问题",no_supported_wallets:"目前还没有支持的钱包",no_wallets_found:"没有找到钱包"},mc={choose_preferred_wallet:"کیف پول مورد نظر خود را انتخاب کنید",connect_mobile_wallet:"به کیف پول موبایل وصل شوید",scan_qrcode_with_wallet:"کد QR را با یک کیف پول سازگار با WalletConnect اسکن کنید",connect:"اتصال",qrcode:"کد QR",mobile:"سیار",desktop:"دسکتاپ",copy_to_clipboard:"کپی به کلیپ بورد",copied_to_clipboard:"در کلیپ بورد کپی شد!",connect_with:"ارتباط با",loading:"...بارگذاری",something_went_wrong:"مشکلی پیش آمد",no_supported_wallets:"هنوز هیچ کیف پول پشتیبانی شده ای وجود ندارد",no_wallets_found:"هیچ کیف پولی پیدا نشد"},qt={de:uc,en:dc,es:fc,fr:hc,ko:gc,pt:_c,zh:pc,fa:mc};function wc(){var t=T.getDocumentOrThrow(),e=t.getElementById(Pt);e&&t.head.removeChild(e);var n=t.createElement("style");n.setAttribute("id",Pt),n.innerText=Wa,t.head.appendChild(n)}function yc(){var t=T.getDocumentOrThrow(),e=t.createElement("div");return e.setAttribute("id",Nr),t.body.appendChild(e),e}function Ar(){var t=T.getDocumentOrThrow(),e=t.getElementById(xr);e&&(e.className=e.className.replace("fadeIn","fadeOut"),setTimeout(function(){var n=t.getElementById(Nr);n&&t.body.removeChild(n)},Ka))}function bc(t){return function(){Ar(),t&&t()}}function vc(){var t=T.getNavigatorOrThrow().language.split("-")[0]||"en";return qt[t]||qt.en}function Ec(t,e,n){wc();var r=yc();p.render(p.createElement(lc,{text:vc(),uri:t,onClose:bc(e),qrcodeModalOptions:n}),r)}function Cc(){Ar()}var Or=function(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"};function Sc(t,e,n){console.log(t),Or()?za(t):Ec(t,e,n)}function Ic(){Or()||Cc()}var Rc={open:Sc,close:Ic},kc=Rc;const Tc=We(kc);class Nc extends ao{constructor(e){super(),this.events=new Ft,this.accounts=[],this.chainId=1,this.pending=!1,this.bridge="https://bridge.walletconnect.org",this.qrcode=!0,this.qrcodeModalOptions=void 0,this.opts=e,this.chainId=(e==null?void 0:e.chainId)||this.chainId,this.wc=this.register(e)}get connected(){return typeof this.wc<"u"&&this.wc.connected}get connecting(){return this.pending}get connector(){return this.wc=this.register(this.opts),this.wc}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}off(e,n){this.events.off(e,n)}removeListener(e,n){this.events.removeListener(e,n)}async open(e){if(this.connected){this.onOpen();return}return new Promise((n,r)=>{this.on("error",o=>{r(o)}),this.on("open",()=>{n()}),this.create(e)})}async close(){typeof this.wc>"u"||(this.wc.connected&&this.wc.killSession(),this.onClose())}async send(e){this.wc=this.register(this.opts),this.connected||await this.open(),this.sendPayload(e).then(n=>this.events.emit("payload",n)).catch(n=>this.events.emit("payload",vt(e.id,n.message)))}register(e){if(this.wc)return this.wc;this.opts=e||this.opts,this.bridge=e!=null&&e.connector?e.connector.bridge:(e==null?void 0:e.bridge)||"https://bridge.walletconnect.org",this.qrcode=typeof(e==null?void 0:e.qrcode)>"u"||e.qrcode!==!1,this.chainId=typeof(e==null?void 0:e.chainId)<"u"?e.chainId:this.chainId,this.qrcodeModalOptions=e==null?void 0:e.qrcodeModalOptions;const n={bridge:this.bridge,qrcodeModal:this.qrcode?Tc:void 0,qrcodeModalOptions:this.qrcodeModalOptions,storageId:e==null?void 0:e.storageId,signingMethods:e==null?void 0:e.signingMethods,clientMeta:e==null?void 0:e.clientMeta};if(this.wc=typeof(e==null?void 0:e.connector)<"u"?e.connector:new Ms(n),typeof this.wc>"u")throw new Error("Failed to register WalletConnect connector");return this.wc.accounts.length&&(this.accounts=this.wc.accounts),this.wc.chainId&&(this.chainId=this.wc.chainId),this.registerConnectorEvents(),this.wc}onOpen(e){this.pending=!1,e&&(this.wc=e),this.events.emit("open")}onClose(){this.pending=!1,this.wc&&(this.wc=void 0),this.events.emit("close")}onError(e,n="Failed or Rejected Request",r=-32e3){const o={id:e.id,jsonrpc:e.jsonrpc,error:{code:r,message:n}};return this.events.emit("payload",o),o}create(e){this.wc=this.register(this.opts),this.chainId=e||this.chainId,!(this.connected||this.pending)&&(this.pending=!0,this.registerConnectorEvents(),this.wc.createSession({chainId:this.chainId}).then(()=>this.events.emit("created")).catch(n=>this.events.emit("error",n)))}registerConnectorEvents(){this.wc=this.register(this.opts),this.wc.on("connect",e=>{var n,r;if(e){this.events.emit("error",e);return}this.accounts=((n=this.wc)===null||n===void 0?void 0:n.accounts)||[],this.chainId=((r=this.wc)===null||r===void 0?void 0:r.chainId)||this.chainId,this.onOpen()}),this.wc.on("disconnect",e=>{if(e){this.events.emit("error",e);return}this.onClose()}),this.wc.on("modal_closed",()=>{this.events.emit("error",new Error("User closed modal"))}),this.wc.on("session_update",(e,n)=>{const{accounts:r,chainId:o}=n.params[0];(!this.accounts||r&&this.accounts!==r)&&(this.accounts=r,this.events.emit("accountsChanged",r)),(!this.chainId||o&&this.chainId!==o)&&(this.chainId=o,this.events.emit("chainChanged",o))})}async sendPayload(e){this.wc=this.register(this.opts);try{const n=await this.wc.unsafeSend(e);return this.sanitizeResponse(n)}catch(n){return this.onError(e,n.message)}}sanitizeResponse(e){return typeof e.error<"u"&&typeof e.error.code>"u"?vt(e.id,e.error.message,e.error.data):e}}class Oc{constructor(e){this.events=new Ft,this.rpc={infuraId:e==null?void 0:e.infuraId,custom:e==null?void 0:e.rpc},this.signer=new Et(new Nc(e));const n=this.signer.connection.chainId||(e==null?void 0:e.chainId)||1;this.http=this.setHttpProvider(n),this.registerEventListeners()}get connected(){return this.signer.connection.connected}get connector(){return this.signer.connection.connector}get accounts(){return this.signer.connection.accounts}get chainId(){return this.signer.connection.chainId}get rpcUrl(){var e;return((e=this.http)===null||e===void 0?void 0:e.connection).url||""}async request(e){switch(e.method){case"eth_requestAccounts":return await this.connect(),this.signer.connection.accounts;case"eth_accounts":return this.signer.connection.accounts;case"eth_chainId":return this.signer.connection.chainId}if(Qe.includes(e.method))return this.signer.request(e);if(typeof this.http>"u")throw new Error(`Cannot request JSON-RPC method (${e.method}) without provided rpc url`);return this.http.request(e)}sendAsync(e,n){this.request(e).then(r=>n(null,r)).catch(r=>n(r,void 0))}async enable(){return await this.request({method:"eth_requestAccounts"})}async connect(){this.signer.connection.connected||await this.signer.connect()}async disconnect(){this.signer.connection.connected&&await this.signer.disconnect()}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}removeListener(e,n){this.events.removeListener(e,n)}off(e,n){this.events.off(e,n)}get isWalletConnect(){return!0}registerEventListeners(){this.signer.connection.on("accountsChanged",e=>{this.events.emit("accountsChanged",e)}),this.signer.connection.on("chainChanged",e=>{this.http=this.setHttpProvider(e),this.events.emit("chainChanged",e)}),this.signer.on("disconnect",()=>{this.events.emit("disconnect")})}setHttpProvider(e){const n=Cn(e,this.rpc);return typeof n>"u"?void 0:new Et(new co(n))}}export{Oc as default};
