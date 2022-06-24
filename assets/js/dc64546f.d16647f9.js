"use strict";(self.webpackChunkutopia_os_github_io=self.webpackChunkutopia_os_github_io||[]).push([[3269],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(a),f=n,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||o;return a?r.createElement(d,i(i({ref:t},s),{},{components:a})):r.createElement(d,i({ref:t},s))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7990:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={},i="Map UI",l={unversionedId:"tutorial-basics/map-ui",id:"tutorial-basics/map-ui",title:"Map UI",description:"Map UI is a JavaScript Map Library to create nice and easy to use Map Apps.",source:"@site/docs/tutorial-basics/map-ui.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/map-ui",permalink:"/docs/tutorial-basics/map-ui",draft:!1,editUrl:"https://github.com/utopia-os/utopia-os.github.io/tree/main/docs/tutorial-basics/map-ui.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Congratulations!",permalink:"/docs/tutorial-basics/congratulations"},next:{title:"Utopia p2p",permalink:"/docs/category/utopia-p2p"}},p={},c=[{value:"Why a package was created?",id:"why-a-package-was-created",level:3},{value:"How the package solves the problem!",id:"how-the-package-solves-the-problem",level:3},{value:"technically",id:"technically",level:5},{value:"functionally",id:"functionally",level:5},{value:"All valid configurations/props of the package",id:"all-valid-configurationsprops-of-the-package",level:3},{value:"Example snippets",id:"example-snippets",level:3},{value:"Demos of the package in action",id:"demos-of-the-package-in-action",level:3},{value:"Instructions for contributors",id:"instructions-for-contributors",level:3}],s={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"map-ui"},"Map UI"),(0,n.kt)("p",null,"Map UI is a JavaScript Map Library to create nice and easy to use Map Apps."),(0,n.kt)("p",null,"The Map Component is the crystallization point of Utopia OS where everything comes together. But there will be more UI Components like Calendar, Market, Profiles, Friends, Groups, Gamification, etc."),(0,n.kt)("h3",{id:"why-a-package-was-created"},"Why a package was created?"),(0,n.kt)("p",null,"What problem the package solves?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Find people, places, events, ressources, help in your area"),(0,n.kt)("li",{parentName:"ul"},"Fokus on Real Life Interaction"),(0,n.kt)("li",{parentName:"ul"},"Get away from your screen")),(0,n.kt)("h3",{id:"how-the-package-solves-the-problem"},"How the package solves the problem!"),(0,n.kt)("h5",{id:"technically"},"technically"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Leaflet"),(0,n.kt)("li",{parentName:"ul"},"React"),(0,n.kt)("li",{parentName:"ul"},"npm Package")),(0,n.kt)("h5",{id:"functionally"},"functionally"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Layer"),(0,n.kt)("li",{parentName:"ul"},"Marker"),(0,n.kt)("li",{parentName:"ul"},"Popups"),(0,n.kt)("li",{parentName:"ul"},"Colors"),(0,n.kt)("li",{parentName:"ul"},"Tags")),(0,n.kt)("h3",{id:"all-valid-configurationsprops-of-the-package"},"All valid configurations/props of the package"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"How to pass data")),(0,n.kt)("h3",{id:"example-snippets"},"Example snippets"),(0,n.kt)("h3",{id:"demos-of-the-package-in-action"},"Demos of the package in action"),(0,n.kt)("h3",{id:"instructions-for-contributors"},"Instructions for contributors"))}u.isMDXComponent=!0}}]);