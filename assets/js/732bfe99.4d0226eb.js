/*! For license information please see 732bfe99.4d0226eb.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8484,4608,9514],{88138:function(e,t,n){n.r(t),n.d(t,{default:function(){return Se}});var a=n(67294),r=n(24608),o=n(58060),l=n(86010),i=n(95999),c=n(2730),s=n(35281),u="backToTopButton_RiI4",d="backToTopButtonShow_ssHd";function m(){var e=(0,c.a)({threshold:300}),t=e.shown,n=e.scrollToTop;return a.createElement("button",{"aria-label":(0,i.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",s.k.common.backToTopButton,u,t&&d),type:"button",onClick:n})}var f=n(87524),p=n(86668),b=n(18487),v=n(83117);function h(e){return a.createElement("svg",(0,v.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var E="collapseSidebarButton_FykI",g="collapseSidebarButtonIcon_DTRl";function _(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,i.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,i.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",E),onClick:t},a.createElement(h,{className:g}))}var k=n(59689),y=n(12466),C=n(80102),I=n(44700),S=n(24575),N=n(48596),x=n(86043),Z=n(14353),O=n(39960),P=n(72389),w=["item","onItemClick","activePath","level","index"];function T(e){var t=e.categoryLabel,n=e.onClick;return a.createElement("button",{"aria-label":(0,i.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function j(e){var t=e.item,n=e.onItemClick,r=e.activePath,o=e.level,i=e.index,c=(0,C.Z)(e,w),u=t.items,d=t.label,m=t.collapsible,f=t.className,b=t.href,h=function(e){var t=(0,P.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,S.Wl)(e):void 0}),[e,t])}(t),E=(0,S._F)(t,r),g=(0,N.Mg)(b,r),_=(0,x.u)({initialState:function(){return!!m&&(!E&&t.collapsed)}}),k=_.collapsed,y=_.setCollapsed;!function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,o=(0,I.D9)(t);(0,a.useEffect)((function(){t&&!o&&n&&r(!1)}),[t,o,n,r])}({isActive:E,collapsed:k,setCollapsed:y});var j=(0,Z.f)(),L=j.expandedItem,A=j.setExpandedItem;function D(e){void 0===e&&(e=!k),A(e?null:i),y(e)}var F=(0,p.L)().docs.sidebar.autoCollapseCategories;return(0,a.useEffect)((function(){m&&L&&L!==i&&F&&y(!0)}),[m,L,i,y,F]),a.createElement("li",{className:(0,l.Z)(s.k.docs.docSidebarItemCategory,s.k.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":k},f)},a.createElement("div",{className:(0,l.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g})},a.createElement(O.default,(0,v.Z)({className:(0,l.Z)("menu__link",{"menu__link--sublist":m,"menu__link--sublist-caret":!b&&m,"menu__link--active":E}),onClick:m?function(e){null==n||n(t),b?D(!1):(e.preventDefault(),D())}:function(){null==n||n(t)},"aria-current":g?"page":void 0,"aria-expanded":m?!k:void 0,href:m?null!=h?h:"#":h},c),d),b&&m&&a.createElement(T,{categoryLabel:d,onClick:function(e){e.preventDefault(),D()}})),a.createElement(x.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:k},a.createElement(Y,{items:u,tabIndex:k?-1:0,onItemClick:n,activePath:r,level:o+1})))}var L=n(13919),A=n(90541),D="menuExternalLink_KU1_",F=["item","onItemClick","activePath","level","index"];function M(e){var t=e.item,n=e.onItemClick,r=e.activePath,o=e.level,i=(e.index,(0,C.Z)(e,F)),c=t.href,u=t.label,d=t.className,m=(0,S._F)(t,r),f=(0,L.Z)(c);return a.createElement("li",{className:(0,l.Z)(s.k.docs.docSidebarItemLink,s.k.docs.docSidebarItemLinkLevel(o),"menu__list-item",d),key:u},a.createElement(O.default,(0,v.Z)({className:(0,l.Z)("menu__link",!f&&D,{"menu__link--active":m}),"aria-current":m?"page":void 0,to:c},f&&{onClick:n?function(){return n(t)}:void 0},i),u,!f&&a.createElement(A.Z,null)))}var R="menuHtmlItem_hP_2";function B(e){var t=e.item,n=e.level,r=e.index,o=t.value,i=t.defaultStyle,c=t.className;return a.createElement("li",{className:(0,l.Z)(s.k.docs.docSidebarItemLink,s.k.docs.docSidebarItemLinkLevel(n),i&&R+" menu__list-item",c),key:r,dangerouslySetInnerHTML:{__html:o}})}var H=["item"];function W(e){var t=e.item,n=(0,C.Z)(e,H);switch(t.type){case"category":return a.createElement(j,(0,v.Z)({item:t},n));case"html":return a.createElement(B,(0,v.Z)({item:t},n));default:return a.createElement(M,(0,v.Z)({item:t},n))}}var U=["items"];function z(e){var t=e.items,n=(0,C.Z)(e,U);return a.createElement(Z.D,null,t.map((function(e,t){return a.createElement(W,(0,v.Z)({key:t,item:e,index:t},n))})))}var Y=(0,a.memo)(z),V="menu_izAj",K="menuWithAnnouncementBar_l2a_";function Q(e){var t=e.path,n=e.sidebar,r=e.className,o=function(){var e=(0,k.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,y.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}();return a.createElement("nav",{className:(0,l.Z)("menu thin-scrollbar",V,o&&K,r)},a.createElement("ul",{className:(0,l.Z)(s.k.docs.docSidebarMenu,"menu__list")},a.createElement(Y,{items:n,activePath:t,level:1})))}var q="sidebar_RiAD",X="sidebarWithHideableNavbar_d0QC",$="sidebarHidden_Lg_2",G="sidebarLogo_YUvz";function J(e){var t=e.path,n=e.sidebar,r=e.onCollapse,o=e.isHidden,i=(0,p.L)(),c=i.navbar.hideOnScroll,s=i.docs.sidebar.hideable;return a.createElement("div",{className:(0,l.Z)(q,c&&X,o&&$)},c&&a.createElement(b.Z,{tabIndex:-1,className:G}),a.createElement(Q,{path:t,sidebar:n}),s&&a.createElement(_,{onClick:r}))}var ee=a.memo(J),te=n(93163),ne=n(13102),ae=function(e){var t=e.sidebar,n=e.path,r=(0,te.e)();return a.createElement("ul",{className:(0,l.Z)(s.k.docs.docSidebarMenu,"menu__list")},a.createElement(Y,{items:t,activePath:n,onItemClick:function(e){"category"===e.type&&e.href&&r.toggle(),"link"===e.type&&r.toggle()},level:1}))};function re(e){return a.createElement(ne.Zo,{component:ae,props:e})}var oe=a.memo(re);function le(e){var t=(0,f.i)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(ee,e),r&&a.createElement(oe,e))}var ie=n(76775),ce="expandButton__5cy",se="expandButtonIcon_FlNX";function ue(e){var t=e.toggleSidebar;return a.createElement("div",{className:ce,title:(0,i.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,i.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(h,{className:se}))}var de="docSidebarContainer_UQUJ",me="docSidebarContainerHidden_f7XD",fe=n(1116);function pe(e){var t,n=e.children,r=(0,fe.V)();return a.createElement(a.Fragment,{key:null!=(t=null==r?void 0:r.name)?t:"noSidebar"},n)}function be(e){var t=e.sidebar,n=e.hiddenSidebarContainer,r=e.setHiddenSidebarContainer,o=(0,ie.TH)().pathname,i=(0,a.useState)(!1),c=i[0],u=i[1],d=(0,a.useCallback)((function(){c&&u(!1),r((function(e){return!e}))}),[r,c]);return a.createElement("aside",{className:(0,l.Z)(s.k.docs.docSidebarContainer,de,n&&me),onTransitionEnd:function(e){e.currentTarget.classList.contains(de)&&n&&u(!0)}},a.createElement(pe,null,a.createElement(le,{sidebar:t,path:o,onCollapse:d,isHidden:c})),c&&a.createElement(ue,{toggleSidebar:d}))}var ve={docMainContainer:"docMainContainer_uL0j",docMainContainerEnhanced:"docMainContainerEnhanced_oQfM",docItemWrapperEnhanced:"docItemWrapperEnhanced_HFwV"};function he(e){var t=e.hiddenSidebarContainer,n=e.children,r=(0,fe.V)();return a.createElement("main",{className:(0,l.Z)(ve.docMainContainer,(t||!r)&&ve.docMainContainerEnhanced)},a.createElement("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",ve.docItemWrapper,t&&ve.docItemWrapperEnhanced)},n))}var Ee="docPage_ualW",ge="docsWrapper_mKqt";function _e(e){var t=e.children,n=(0,fe.V)(),r=(0,a.useState)(!1),l=r[0],i=r[1];return a.createElement(o.Z,{wrapperClassName:ge},a.createElement(m,null),a.createElement("div",{className:Ee},n&&a.createElement(be,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:i}),a.createElement(he,{hiddenSidebarContainer:l},t)))}var ke=n(43320),ye=n(10833),Ce=n(74477),Ie=n(14739);function Se(e){var t=e.versionMetadata,n=(0,S.hI)(e);if(!n)return a.createElement(r.default,null);var o=n.docElement,i=n.sidebarName,c=n.sidebarItems;return a.createElement(a.Fragment,null,a.createElement(Ie.Z,{version:t.version,tag:(0,ke.os)(t.pluginId,t.version)}),a.createElement(ye.FG,{className:(0,l.Z)(s.k.wrapper.docsPages,s.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(Ce.q,{version:t},a.createElement(fe.b,{name:i,items:c},a.createElement(_e,null,o)))))}},24608:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var a=n(67294),r=n(58060),o=n(95999),l=n(10833);function i(){return a.createElement(a.Fragment,null,a.createElement(l.d,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(r.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},14353:function(e,t,n){n.d(t,{D:function(){return i},f:function(){return c}});var a=n(67294),r=n(44700),o=Symbol("EmptyContext"),l=a.createContext(o);function i(e){var t=e.children,n=(0,a.useState)(null),r=n[0],o=n[1],i=(0,a.useMemo)((function(){return{expandedItem:r,setExpandedItem:o}}),[r]);return a.createElement(l.Provider,{value:i},t)}function c(){var e=(0,a.useContext)(l);if(e===o)throw new r.i6("DocSidebarItemsExpandedStateProvider");return e}},2730:function(e,t,n){n.d(t,{a:function(){return l}});var a=n(67294),r=n(12466),o=n(85936);function l(e){var t=e.threshold,n=(0,a.useState)(!1),l=n[0],i=n[1],c=(0,a.useRef)(!1),s=(0,r.Ct)(),u=s.startScroll,d=s.cancelScroll;return(0,r.RF)((function(e,n){var a=e.scrollY,r=null==n?void 0:n.scrollY;r&&(c.current?c.current=!1:a>=r?(d(),i(!1)):a<t?i(!1):a+window.innerHeight<document.documentElement.scrollHeight&&i(!0))})),(0,o.S)((function(e){e.location.hash&&(c.current=!0,i(!1))})),{shown:l,scrollToTop:function(){return u(0)}}}},3660:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var a=n(67294).createContext({options:{banner:"",breadcrumbs:!0,gitRefName:"master",minimal:!1,pluginId:"default",scopes:[]},reflections:{}});t.ApiDataContext=a},36454:function(e,t,n){var a=["options","packages"];function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n(20060),n(98878);var c=n(67294),s=n(88138),u=n(3660),d=n(85893),m=function(e){return e&&e.__esModule?e:{default:e}}(s);function f(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}function p(e,t,n){return Object.entries(e).forEach((function(a){var r=a[0],o=a[1];if("id"===r){var l="type"in e;(!l||l&&"reference"!==e.type)&&(t[Number(o)]=e,n&&(e.parentId=n.id))}else Array.isArray(o)?o.forEach((function(n){f(n)&&p(n,t,e)})):f(o)&&p(o,t,e)})),t}function b(e){var t={};return e.forEach((function(e){e.entryPoints.forEach((function(e){p(e.reflection,t)}))})),t}e.exports=function(e){var t=e.options,n=e.packages,r=i(e,a),l=c.useMemo((function(){return{options:t,reflections:b(n)}}),[t,n]);return d.jsx(u.ApiDataContext.Provider,{value:l,children:d.jsx("div",{className:"apiPage",children:d.jsx(m.default,o({},r))})})}},20060:function(e,t,n){n.r(t)},98878:function(e,t,n){n.r(t)},75251:function(e,t,n){var a=n(67294),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var a,o={},s=null,u=null;for(a in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(u=t.ref),t)l.call(t,a)&&!c.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===o[a]&&(o[a]=t[a]);return{$$typeof:r,type:e,key:s,ref:u,props:o,_owner:i.current}}t.Fragment=o,t.jsx=s,t.jsxs=s},85893:function(e,t,n){e.exports=n(75251)}}]);