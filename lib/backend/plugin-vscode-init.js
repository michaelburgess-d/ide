(()=>{var e,r,n={30391:(e,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.DEFAULT_SUPPORTED_API_VERSION=void 0,r.DEFAULT_SUPPORTED_API_VERSION="1.82.0"},1604:(e,r,n)=>{e.exports=n(30391)},65818:(e,r,n)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.VSX_REGISTRY_URL_DEFAULT=r.VSCODE_DEFAULT_API_VERSION=void 0;const i=n(1604);r.VSCODE_DEFAULT_API_VERSION=i.DEFAULT_SUPPORTED_API_VERSION,r.VSX_REGISTRY_URL_DEFAULT="https://open-vsx.org"},38143:(e,r,n)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.doInitialization=void 0;const i=n(14240),t=n(65818);process.env.VSCODE_PID=process.env.THEIA_PARENT_PID;const o=new Map,u=new Array;let l,s,d=!1;function c(e,r){const n=e(r);return n.version=process.env.VSCODE_API_VERSION||t.VSCODE_DEFAULT_API_VERSION,n}r.doInitialization=(e,r)=>{o.set(r.model.id,c(e,r)),u.push(r),s=e,d||(!function(){const e=n(98188),r="vscode",t=e._load;e._load=function(e,n,d){if(e!==r)return t.apply(this,arguments);const a=(P=n.filename,u.find((e=>P.startsWith(e.pluginFolder))));var P;if(a){return o.get(a.model.id)}return l||(console.warn(`Could not identify plugin for 'Theia' require call from ${n.filename}`),l=c(s,i.emptyPlugin)),l}}(),d=!0)}},14240:function(e,r,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,r,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return r[n]}})}:function(e,r,n,i){void 0===i&&(i=n),e[i]=r[n]}),t=this&&this.__exportStar||function(e,r){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(r,n)||i(r,e,n)};Object.defineProperty(r,"__esModule",{value:!0}),t(n(31566),r),t(n(70216),r),t(n(49108),r);(0,n(57590).registerMsgPackExtensions)()},49108:(e,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.MainPluginApiProvider=r.ExtPluginApiProvider=void 0,r.ExtPluginApiProvider="extPluginApi",r.MainPluginApiProvider=Symbol("mainPluginApi")},68290:(e,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.PluginIdentifiers=void 0,function(e){function r({publisher:r=e.UNPUBLISHED,name:n}){return`${r.toLowerCase()}.${n.toLowerCase()}`}e.UNPUBLISHED="<unpublished>",e.componentsToUnversionedId=r,e.componentsToVersionedId=function({publisher:r=e.UNPUBLISHED,name:n,version:i}){return`${r.toLowerCase()}.${n.toLowerCase()}@${i}`},e.componentsToVersionWithId=function(e){return{id:r(e),version:e.version}},e.idAndVersionToVersionedId=function({id:e,version:r}){return`${e}@${r}`},e.unversionedFromVersioned=function(e){const r=e.indexOf("@");return e.slice(0,r)},e.identifiersFromVersionedId=function(e){const r=e.indexOf("."),n=e.indexOf("@",r);if(-1!==r&&-1!==n)return{publisher:e.slice(0,r),name:e.slice(r+1,n),version:e.slice(n+1)}},e.idAndVersionFromVersionedId=function(e){const r=e.indexOf("."),n=e.indexOf("@",r);if(-1!==r&&-1!==n)return{id:e.slice(0,n),version:e.slice(n+1)}}}(r.PluginIdentifiers||(r.PluginIdentifiers={}))},31566:(e,r,n)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.PluginHostEnvironmentVariable=r.ServerPluginRunner=r.PluginServer=r.pluginServerJsonRpcPath=r.PLUGIN_HOST_BACKEND=r.HostedPluginServer=r.PluginDeployerHandler=r.HostedPluginClient=r.buildFrontendModuleName=r.getPluginId=r.MetadataProcessor=r.IconContribution=r.PluginType=r.PluginDeployerEntryType=r.PluginDeployerParticipant=r.PluginDeployer=r.PluginDeployerFileHandler=r.PluginDeployerDirectoryHandler=r.PluginDeployerResolver=r.PluginScanner=r.PluginViewType=r.CustomEditorPriority=r.PluginPackage=r.hostedServicePath=r.PluginIdentifiers=void 0;const i=n(68290);function t(e){return`${e.publisher}_${e.name}`.replace(/\W/g,"_")}Object.defineProperty(r,"PluginIdentifiers",{enumerable:!0,get:function(){return i.PluginIdentifiers}}),r.hostedServicePath="/services/hostedPlugin",function(e){e.toPluginUrl=function(e,r){return`hostedPlugin/${t(e)}/${encodeURIComponent(r)}`}}(r.PluginPackage||(r.PluginPackage={})),function(e){e.default="default",e.builtin="builtin",e.option="option"}(r.CustomEditorPriority||(r.CustomEditorPriority={})),function(e){e.Tree="tree",e.Webview="webview"}(r.PluginViewType||(r.PluginViewType={})),r.PluginScanner=Symbol("PluginScanner"),r.PluginDeployerResolver=Symbol("PluginDeployerResolver"),r.PluginDeployerDirectoryHandler=Symbol("PluginDeployerDirectoryHandler"),r.PluginDeployerFileHandler=Symbol("PluginDeployerFileHandler"),r.PluginDeployer=Symbol("PluginDeployer"),r.PluginDeployerParticipant=Symbol("PluginDeployerParticipant"),function(e){e[e.FRONTEND=0]="FRONTEND",e[e.BACKEND=1]="BACKEND"}(r.PluginDeployerEntryType||(r.PluginDeployerEntryType={})),function(e){e[e.System=0]="System",e[e.User=1]="User"}(r.PluginType||(r.PluginType={})),function(e){e.isIconDefinition=function(e){return"fontCharacter"in e}}(r.IconContribution||(r.IconContribution={})),r.MetadataProcessor=Symbol("MetadataProcessor"),r.getPluginId=t,r.buildFrontendModuleName=function(e){return`${e.publisher}_${e.name}`.replace(/\W/g,"_")},r.HostedPluginClient=Symbol("HostedPluginClient"),r.PluginDeployerHandler=Symbol("PluginDeployerHandler"),r.HostedPluginServer=Symbol("HostedPluginServer"),r.PLUGIN_HOST_BACKEND="main",r.pluginServerJsonRpcPath="/services/plugin-ext",r.PluginServer=Symbol("PluginServer"),r.ServerPluginRunner=Symbol("ServerPluginRunner"),r.PluginHostEnvironmentVariable=Symbol("PluginHostEnvironmentVariable")},7492:e=>{function r(e){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}r.keys=()=>[],r.resolve=r,r.id=7492,e.exports=r},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},57147:e=>{"use strict";e.exports=require("fs")},98188:e=>{"use strict";e.exports=require("module")},41808:e=>{"use strict";e.exports=require("net")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},71576:e=>{"use strict";e.exports=require("string_decoder")},73837:e=>{"use strict";e.exports=require("util")},42374:e=>{"use strict";e.exports={version:"1.43.1"}}},i={};function t(e){var r=i[e];if(void 0!==r)return r.exports;var o=i[e]={exports:{}};return n[e].call(o.exports,o,o.exports,t),o.exports}t.m=n,t.x=()=>{var e=t.O(void 0,[252,216],(()=>t(38143)));return e=t.O(e)},e=[],t.O=(r,n,i,o)=>{if(!n){var u=1/0;for(c=0;c<e.length;c++){for(var[n,i,o]=e[c],l=!0,s=0;s<n.length;s++)(!1&o||u>=o)&&Object.keys(t.O).every((e=>t.O[e](n[s])))?n.splice(s--,1):(l=!1,o<u&&(u=o));if(l){e.splice(c--,1);var d=i();void 0!==d&&(r=d)}}return r}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,i,o]},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((r,n)=>(t.f[n](e,r),r)),[])),t.u=e=>e+".js",t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={709:1};t.O.require=r=>e[r];t.f.require=(r,n)=>{e[r]||(r=>{var n=r.modules,i=r.ids,o=r.runtime;for(var u in n)t.o(n,u)&&(t.m[u]=n[u]);o&&o(t);for(var l=0;l<i.length;l++)e[i[l]]=1;t.O()})(require("./"+t.u(r)))}})(),r=t.x,t.x=()=>(t.e(252),t.e(216),r());var o=t.x();module.exports=o})();