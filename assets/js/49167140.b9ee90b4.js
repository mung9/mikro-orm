"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8326],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var o=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),s=c(r),f=i,k=s["".concat(l,".").concat(f)]||s[f]||p[f]||n;return r?o.createElement(k,a(a({ref:t},u),{},{components:r})):o.createElement(k,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,a=new Array(n);a[0]=s;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m.mdxType="string"==typeof e?e:i,a[1]=m;for(var c=2;c<n;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}s.displayName="MDXCreateElement"},73937:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return m},toc:function(){return c}});var o=r(83117),i=r(80102),n=(r(67294),r(3905)),a=["components"],m={},l=void 0,c=[{value:"5.1.3 (2022-04-27)",id:"513-2022-04-27",level:2},{value:"5.1.2 (2022-04-10)",id:"512-2022-04-10",level:2},{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"Features",id:"features",level:3},{value:"5.1.1 (2022-03-20)",id:"511-2022-03-20",level:2},{value:"Bug Fixes",id:"bug-fixes-1",level:3},{value:"Features",id:"features-1",level:3},{value:"5.0.5 (2022-02-27)",id:"505-2022-02-27",level:2},{value:"5.0.4 (2022-02-22)",id:"504-2022-02-22",level:2},{value:"5.0.3 (2022-02-20)",id:"503-2022-02-20",level:2},{value:"Bug Fixes",id:"bug-fixes-2",level:3},{value:"Features",id:"features-2",level:3}],u={toc:c};function p(e){var t=e.components,r=(0,i.Z)(e,a);return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"All notable changes to this project will be documented in this file.\nSee ",(0,n.kt)("a",{parentName:"p",href:"https://conventionalcommits.org"},"Conventional Commits")," for commit guidelines."),(0,n.kt)("h2",{id:"513-2022-04-27"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/mikro-orm/mikro-orm/compare/v5.1.2...v5.1.3"},"5.1.3")," (2022-04-27)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @mikro-orm/better-sqlite"),(0,n.kt)("h2",{id:"512-2022-04-10"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/mikro-orm/mikro-orm/compare/v5.1.1...v5.1.2"},"5.1.2")," (2022-04-10)"),(0,n.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"postgres:")," do not ignore custom PK constraint names (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm/issues/2931"},"#2931"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm/commit/24bf10e668dd2d3b4b6cc4c52ed215fbffcc9d45"},"24bf10e"),")")),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"schema:")," support mysql 8 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm/issues/2961"},"#2961"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm/commit/acc960ebc694c61a959f48e89a9fee5513f6bdfa"},"acc960e"),")")),(0,n.kt)("h2",{id:"511-2022-03-20"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/mikro-orm/mikro-orm/compare/v5.1.0...v5.1.1"},"5.1.1")," (2022-03-20)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @mikro-orm/better-sqlite"),(0,n.kt)("h1",{id:"510-2022-03-13"},(0,n.kt)("a",{parentName:"h1",href:"https://github.com/mikro-orm/mikro-orm/compare/v5.0.5...v5.1.0"},"5.1.0")," (2022-03-13)"),(0,n.kt)("h3",{id:"bug-fixes-1"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"core:")," do not alias JSON conditions on update/delete queries (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm/commit/5c0674e61d97f9b143b48ae5314e5e7d1eeb4529"},"5c0674e"),"), closes ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm/issues/2839"},"#2839"))),(0,n.kt)("h3",{id:"features-1"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"core:")," map check constraint failures to specific error type (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm/commit/ebcbdfff43cdc4069fc1c70de516493782619123"},"ebcbdff"),"), closes ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm/issues/2836"},"#2836"))),(0,n.kt)("h2",{id:"505-2022-02-27"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/mikro-orm/mikro-orm/compare/v5.0.4...v5.0.5"},"5.0.5")," (2022-02-27)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @mikro-orm/better-sqlite"),(0,n.kt)("h2",{id:"504-2022-02-22"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/mikro-orm/mikro-orm/compare/v5.0.3...v5.0.4"},"5.0.4")," (2022-02-22)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @mikro-orm/better-sqlite"),(0,n.kt)("h2",{id:"503-2022-02-20"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/mikro-orm/mikro-orm/compare/v5.0.2...v5.0.3"},"5.0.3")," (2022-02-20)"),(0,n.kt)("h3",{id:"bug-fixes-2"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"sqlite:")," respect ",(0,n.kt)("inlineCode",{parentName:"li"},"autoincrement: false")," in schema diffing (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm/commit/b39b6ada0e276a21c3089558a996092174b546fc"},"b39b6ad"),"), closes ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm/issues/2800"},"#2800"))),(0,n.kt)("h3",{id:"features-2"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"add better-sqlite driver (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm/issues/2792"},"#2792"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm/commit/1b39d6687fc2db64e85a45f6a964cf1776a374aa"},"1b39d66"),")")))}p.isMDXComponent=!0}}]);