(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7743:function(e,t,n){Promise.resolve().then(n.bind(n,1243))},4981:function(e,t,n){"use strict";n.d(t,{o:function(){return d}});var r=n(7437),s=n(2553),l=n(2265),i=n(2290),c=n(8787),a=n(6463),o=n(3375);let d=e=>{let{useContinueButton:t=!1}=e,[n,d]=(0,l.useState)("");(0,a.useRouter)(),decodeURIComponent((0,a.useSearchParams)().get("rid")||"");let[u,h]=(0,l.useState)(()=>"true"===localStorage.getItem("isNormalSearch"));(0,l.useEffect)(()=>{localStorage.setItem("isNormalSearch",String(u))},[u]);let x=e=>{if(e.preventDefault(),n){d("");let e=(0,i.x0)();window.location.href=(0,s.T)(encodeURIComponent(n),e,u?"SIMPLE":"DEEP")}};return(0,r.jsx)("form",{onSubmit:x,children:(0,r.jsxs)("label",{className:"border-2 border-blue-500 relative bg-white flex flex-col justify-end border ring-8 ring-zinc-300/20 py-2 px-2 rounded-lg gap-2 focus-within:border-zinc-300",htmlFor:"search-bar",children:[(0,r.jsx)("textarea",{id:"search-bar",value:n,onChange:e=>d(e.target.value),autoFocus:!0,placeholder:o.ZP.Search.placeholder,className:"rounded-md px-2 w-full outline-none flex-1 pr-6 bg-white h-32 resize-none",onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||x(e)}}),(0,r.jsx)("div",{className:"absolute bottom-2 right-2",children:(0,r.jsx)(c.Z,{checked:!u,onChange:()=>h(!u),checkedChildren:o.ZP.Type.deep,unCheckedChildren:o.ZP.Type.simple,defaultChecked:!1})})]})})}},3375:function(e,t,n){"use strict";n.d(t,{nW:function(){return l},DC:function(){return s},t4:function(){return o},ZP:function(){return c},VQ:function(){return a}});let r={en:{Type:{simple:"SIMPLE",deep:"DEEP"},Title:{return:"Return"},Search:{placeholder:"Based on kOS Intelligent Search..."},Footer:{statement:"The above content is searched and summarized by kFind AI, please carefully check."},Answer:{answer:"Answer"},Sources:{sources:"Answers from the Internet"},Err:{429:"Thanks for the many questions kFind needs to answer, but too often, let me take a break.",500:"Hello, kFind is in a bit of a mess, let him rest for a while, thank you!"}},cn:{Type:{simple:"普通",deep:"深度"},Title:{return:"返回"},Search:{placeholder:"基于kOS智能搜索..."},Footer:{statement:"上述内容由kFind AI搜索并总结，请仔细甄别。"},Answer:{answer:"回答"},Sources:{sources:"答案来自网页"},Err:{429:"感谢有很多问题需要kFind解答，但过于频繁，容我休息一下",500:"您好，kFind这会有点手忙脚乱，容他休息一会，谢谢！"}}},s=Object.keys(r),l={en:"English",cn:"简体中文"},i="lang";var c=r[a()];function a(){let e=function(e){try{return localStorage.getItem(e)}catch(e){return null}}(i);if(s.includes(null!=e?e:""))return e;let t=function(){try{return navigator.language.toLowerCase()}catch(e){return"en"}}();for(let e of s)if(t.includes(e))return e;return"en"}function o(e){!function(e,t){try{localStorage.setItem(e,t)}catch(e){}}(i,e),location.reload()}},1243:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(7437),s=n(3375);let l=()=>(0,r.jsxs)("div",{className:"fixed bottom-20 left-0 right-0 text-center flex flex-col items-center text-xs text-zinc-700 gap-1",children:[(0,r.jsx)("div",{className:"hidden md:block text-zinc-400",children:s.ZP.Footer.statement}),(0,r.jsxs)("div",{className:"hidden md:flex gap-2 justify-center",children:[(0,r.jsx)("div",{children:(0,r.jsx)("a",{className:"text-blue-500 font-medium inline-flex gap-1 items-center flex-nowrap text-nowrap",href:"https://hikos.cn/",children:"Powered by kOS"})}),(0,r.jsx)("div",{})]}),(0,r.jsx)("div",{className:"hidden md:flex items-center justify-center flex-wrap gap-x-4 gap-y-2 mt-2 text-zinc-400",children:"All rights reserved. 版权所有 \xa9半个宇宙 2023浙ICP备2023017311号 用户协议 隐私政策"})]});var i=n(2265);let c=()=>(0,r.jsxs)("div",{className:"flex gap-4 items-center justify-center cursor-default select-none relative",children:[(0,r.jsx)("div",{className:"h-10 w-10",children:(0,r.jsx)("img",{src:"logo.svg",alt:"Search Icon",width:"40",height:"40",className:"icon icon-tabler icon-tabler-search"})}),(0,r.jsx)("div",{className:"relative text-nowrap font-medium text-2xl md:text-3xl text-center text-zinc-950 ",children:"kFind"})]});var a=n(2553),o=n(2290),d=n(7138);let u=()=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 inline-block ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 5l7 7-7 7"})}),h=e=>{let{query:t}=e,n=(0,i.useMemo)(()=>(0,o.x0)(),[]);return(0,r.jsxs)(d.default,{prefetch:!1,title:t,href:(0,a.T)(t,n,"SIMPLE"),className:"flex items-center border border-zinc-200/50 text-ellipsis overflow-hidden text-nowrap rounded-lg bg-zinc-100 hover:bg-zinc-200/80 hover:text-zinc-950 px-2 py-1 text-xs font-medium text-zinc-600",children:[t,(0,r.jsx)(u,{})]})};var x=n(4981);function f(){return(0,r.jsxs)("div",{className:"absolute inset-0 min-h-[500px] flex items-center justify-center",children:[(0,r.jsx)("div",{className:"absolute top-0 right-0 m-4",children:(0,r.jsx)("select",{className:"rounded border border-gray-300 text-zinc-400 bg-white p-1 shadow-sm text-sm",value:(0,s.VQ)(),onChange:e=>{(0,s.t4)(e.target.value)},children:s.DC.map(e=>(0,r.jsxs)("option",{value:e,children:[" ",s.nW[e]," "]},e))})}),(0,r.jsxs)("div",{className:"relative flex flex-col gap-8 px-4 -mt-24",children:[(0,r.jsx)(c,{}),(0,r.jsx)(x.o,{}),(0,r.jsxs)("div",{className:"flex flex-col gap-1.5",children:[(0,r.jsxs)("div",{className:"flex gap-1 flex-wrap justify-right",children:[(0,r.jsx)(h,{query:"美国阿波罗登月造假?"}),(0,r.jsx)(h,{query:"胖猫事件惊天大反转！谭竹被冤枉，姐姐引导舆论?"}),(0,r.jsx)(h,{query:"伊朗总统坠机身亡，事件时间线?"})]}),(0,r.jsxs)("div",{className:"flex gap-1 flex-wrap justify-right",children:[(0,r.jsx)(h,{query:"《庆余年2》在线播放地址?"}),(0,r.jsx)(h,{query:"特斯拉将在华建立自动驾驶数据中心?"}),(0,r.jsx)(h,{query:"全网一周热点事件梳理，时间线、观点一键打尽"})]})]}),(0,r.jsx)(l,{})]})]})}},2553:function(e,t,n){"use strict";n.d(t,{T:function(){return r}});let r=(e,t,n)=>"".concat("/search.html","?q=").concat(encodeURIComponent(e),"&search_type=").concat(n,"&rid=").concat(t)}},function(e){e.O(0,[60,138,971,23,744],function(){return e(e.s=7743)}),_N_E=e.O()}]);