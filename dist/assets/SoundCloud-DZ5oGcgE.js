import{r as T,a as N,b as x,g as A}from"./index-DT-2-_mt.js";function q(l,s){for(var p=0;p<s.length;p++){const n=s[p];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in l)){const d=Object.getOwnPropertyDescriptor(n,i);d&&Object.defineProperty(l,i,d.get?d:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}))}var f,g;function U(){if(g)return f;g=1;var l=Object.create,s=Object.defineProperty,p=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,i=Object.getPrototypeOf,d=Object.prototype.hasOwnProperty,v=(t,e,r)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,O=(t,e)=>{for(var r in e)s(t,r,{get:e[r],enumerable:!0})},y=(t,e,r,c)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of n(e))!d.call(t,a)&&a!==r&&s(t,a,{get:()=>e[a],enumerable:!(c=p(e,a))||c.enumerable});return t},S=(t,e,r)=>(r=t!=null?l(i(t)):{},y(!t||!t.__esModule?s(r,"default",{value:t,enumerable:!0}):r,t)),C=t=>y(s({},"__esModule",{value:!0}),t),o=(t,e,r)=>(v(t,typeof e!="symbol"?e+"":e,r),r),_={};O(_,{default:()=>h}),f=C(_);var m=S(T()),P=N(),w=x();const j="https://w.soundcloud.com/player/api.js",E="SC";class h extends m.Component{constructor(){super(...arguments),o(this,"callPlayer",P.callPlayer),o(this,"duration",null),o(this,"currentTime",null),o(this,"fractionLoaded",null),o(this,"mute",()=>{this.setVolume(0)}),o(this,"unmute",()=>{this.props.volume!==null&&this.setVolume(this.props.volume)}),o(this,"ref",e=>{this.iframe=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e,r){(0,P.getSDK)(j,E).then(c=>{if(!this.iframe)return;const{PLAY:a,PLAY_PROGRESS:D,PAUSE:R,FINISH:L,ERROR:M}=c.Widget.Events;r||(this.player=c.Widget(this.iframe),this.player.bind(a,this.props.onPlay),this.player.bind(R,()=>{this.duration-this.currentTime<.05||this.props.onPause()}),this.player.bind(D,u=>{this.currentTime=u.currentPosition/1e3,this.fractionLoaded=u.loadedProgress}),this.player.bind(L,()=>this.props.onEnded()),this.player.bind(M,u=>this.props.onError(u))),this.player.load(e,{...this.props.config.options,callback:()=>{this.player.getDuration(u=>{this.duration=u/1e3,this.props.onReady()})}})})}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,r=!0){this.callPlayer("seekTo",e*1e3),r||this.pause()}setVolume(e){this.callPlayer("setVolume",e*100)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.fractionLoaded*this.duration}render(){const{display:e}=this.props,r={width:"100%",height:"100%",display:e};return m.default.createElement("iframe",{ref:this.ref,src:`https://w.soundcloud.com/player/?url=${encodeURIComponent(this.props.url)}`,style:r,frameBorder:0,allow:"autoplay"})}}return o(h,"displayName","SoundCloud"),o(h,"canPlay",w.canPlay.soundcloud),o(h,"loopOnEnded",!0),f}var b=U();const V=A(b),I=q({__proto__:null,default:V},[b]);export{I as S};
