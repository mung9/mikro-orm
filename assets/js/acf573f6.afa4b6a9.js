(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4553],{39649:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var r=t(83117),a=t(80102),s=t(67294),i=t(86010),c=t(95999),o=t(86668),l="anchorWithStickyNavbar_mojV",u="anchorWithHideOnScrollNavbar_R0VQ",d=["as","id"];function f(e){var n=e.as,t=e.id,f=(0,a.Z)(e,d),m=(0,o.L)().navbar.hideOnScroll;return"h1"!==n&&t?s.createElement(n,(0,r.Z)({},f,{className:(0,i.Z)("anchor",m?u:l),id:t}),f.children,s.createElement("a",{className:"hash-link",href:"#"+t,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):s.createElement(n,(0,r.Z)({},f,{id:void 0}))}},35866:function(e,n,t){"use strict";t.d(n,{F:function(){return a}});var r=t(67294);function a(){var e=(0,r.useState)(!1),n=e[0],t=e[1],a=(0,r.useState)(!1),s=a[0],i=a[1],c=(0,r.useRef)(null),o=(0,r.useCallback)((function(){var e=c.current.querySelector("code");n?e.removeAttribute("style"):e.style.whiteSpace="pre-wrap",t((function(e){return!e}))}),[c,n]),l=(0,r.useCallback)((function(){var e=c.current,n=e.scrollWidth>e.clientWidth||c.current.querySelector("code").hasAttribute("style");i(n)}),[c]);return(0,r.useEffect)((function(){l()}),[n,l]),(0,r.useEffect)((function(){return window.addEventListener("resize",l,{passive:!0}),function(){window.removeEventListener("resize",l)}}),[l]),{codeBlockRef:c,isEnabled:n,isCodeScrollable:s,toggle:o}}},66412:function(e,n,t){"use strict";t.d(n,{p:function(){return s}});var r=t(92949),a=t(86668);function s(){var e=(0,a.L)().prism,n=(0,r.I)().colorMode,t=e.theme,s=e.darkTheme||t;return"dark"===n?s:t}},37016:function(e,n,t){"use strict";t.d(n,{QC:function(){return h},Vo:function(){return f},bc:function(){return u},nZ:function(){return m},nt:function(){return d}});var r=t(28900),a=t(87594),s=t.n(a),i=(0,r.Z)(/title=(["'])(.*?)\1/,{quote:1,title:2}),c=(0,r.Z)(/\{([\d,-]+)\}/,{range:1}),o={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function l(e,n){var t=e.map((function(e){var t=o[e],r=t.start,a=t.end;return"(?:"+r+"\\s*("+n.flatMap((function(e){var n,t;return[e.line,null==(n=e.block)?void 0:n.start,null==(t=e.block)?void 0:t.end].filter(Boolean)})).join("|")+")\\s*"+a+")"})).join("|");return new RegExp("^\\s*(?:"+t+")\\s*$")}function u(e){var n,t;return null!=(n=null==e||null==(t=e.match(i))?void 0:t.groups.title)?n:""}function d(e){return(null==e?void 0:e.includes("showLineNumbers"))||!1}function f(e){var n=e.split(" ").find((function(e){return e.startsWith("language-")}));return null==n?void 0:n.replace(/language-/,"")}function m(e,n){var t=e.replace(/\n$/,""),r=n.language,a=n.magicComments,i=n.metastring;if(i&&c.test(i)){var u=i.match(c).groups.range;if(0===a.length)throw new Error("A highlight range has been given in code block's metastring (``` "+i+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var d=a[0].className,f=s()(u).filter((function(e){return e>0})).map((function(e){return[e-1,[d]]}));return{lineClassNames:Object.fromEntries(f),code:t}}if(void 0===r)return{lineClassNames:{},code:t};for(var m=function(e,n){switch(e){case"js":case"javascript":case"ts":case"typescript":return l(["js","jsBlock"],n);case"jsx":case"tsx":return l(["js","jsBlock","jsx"],n);case"html":return l(["js","jsBlock","html"],n);case"python":case"py":case"bash":return l(["bash"],n);case"markdown":case"md":return l(["html","jsx","bash"],n);default:return l(Object.keys(o),n)}}(r,a),h=t.split("\n"),p=Object.fromEntries(a.map((function(e){return[e.className,{start:0,range:""}]}))),v=Object.fromEntries(a.filter((function(e){return e.line})).map((function(e){var n=e.className;return[e.line,n]}))),g=Object.fromEntries(a.filter((function(e){return e.block})).map((function(e){var n=e.className;return[e.block.start,n]}))),j=Object.fromEntries(a.filter((function(e){return e.block})).map((function(e){var n=e.className;return[e.block.end,n]}))),b=0;b<h.length;){var k=h[b].match(m);if(k){var x=k.slice(1).find((function(e){return void 0!==e}));v[x]?p[v[x]].range+=b+",":g[x]?p[g[x]].start=b:j[x]&&(p[j[x]].range+=p[j[x]].start+"-"+(b-1)+","),h.splice(b,1)}else b+=1}t=h.join("\n");var N={};return Object.entries(p).forEach((function(e){var n=e[0],t=e[1].range;s()(t).forEach((function(e){null!=N[e]||(N[e]=[]),N[e].push(n)}))})),{lineClassNames:N,code:t}}function h(e){var n={color:"--prism-color",backgroundColor:"--prism-background-color"},t={};return Object.entries(e.plain).forEach((function(e){var r=e[0],a=e[1],s=n[r];s&&"string"==typeof a&&(t[s]=a)})),t}},70538:function(e,n,t){"use strict";var r=t(67294),a=t(39960),s=t(6497),i=t(39649),c=t(96892),o=t(25845),l=t(37850),u=t(85893),d=function(e){return e&&e.__esModule?e:{default:e}},f=d(a),m=d(i);function h(e,n,t){if(!e.match(/api\/([\d.]+)/)&&!e.includes("api/next")&&t&&t.name!==n.label){var r="current"===t.name?"next":t.name;return e.endsWith("/api")?e+"/"+r:e.replace("/api/","/api/"+r+"/")}return e}e.exports=function(e){var n=e.options,t=e.packages,a=e.history,i=e.versionMetadata,d=s.useDocsVersion(),p=s.useDocsPreferredVersion(i.pluginId).preferredVersion;return r.useEffect((function(){1===t.length?a.replace(h(t[0].entryPoints[0].reflection.permalink,d,p)):p&&a.replace(h(a.location.pathname,d,p))}),[t,a,d,p]),u.jsx("div",{className:"row",children:u.jsxs("div",{className:"col apiItemCol",children:[n.banner&&u.jsx("div",{className:"alert alert--info margin-bottom--md",role:"alert",children:u.jsx("div",{dangerouslySetInnerHTML:{__html:n.banner}})}),u.jsx(l.VersionBanner,{versionMetadata:i}),u.jsx("div",{className:"apiItemContainer",children:u.jsxs("article",{children:[u.jsxs("div",{className:"markdown",children:[u.jsx("header",{children:u.jsx(m.default,{as:"h1",children:"API"})}),u.jsxs("section",{className:"tsd-panel",children:[u.jsx("h3",{className:"tsd-panel-header",children:"Packages"}),u.jsx("div",{className:"tsd-panel-content",children:u.jsx("ul",{className:"tsd-index-list",children:t.map((function(e){return u.jsx("li",{className:"tsd-truncate",children:u.jsxs(f.default,{className:"tsd-kind-icon",to:e.entryPoints[0].reflection.permalink,children:[u.jsxs("span",{className:"tsd-signature-symbol",children:["v",e.packageVersion]})," ",u.jsx("span",{children:c.removeScopes(e.packageName,n.scopes)})]})},e.packageName)}))})})]})]}),u.jsx(o.Footer,{})]})})]})})}},96892:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.removeScopes=function(e,n){return 0===n.length?e:n.reduce((function(e,n){return e.replace(new RegExp("^("+n+"-|@"+n+"/)"),"")}),e)}},87594:function(e,n){function t(e){let n,t=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))t.push(parseInt(r,10));else if(n=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,s]=n;if(r&&s){r=parseInt(r),s=parseInt(s);const e=r<s?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(s+=e);for(let n=r;n!==s;n+=e)t.push(n)}}return t}n.default=t,e.exports=t}}]);