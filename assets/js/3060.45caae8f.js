/*! For license information please see 3060.45caae8f.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3060],{14353:function(e,n,r){r.d(n,{D:function(){return c},f:function(){return a}});var t=r(67294),u=r(44700),o=Symbol("EmptyContext"),i=t.createContext(o);function c(e){var n=e.children,r=(0,t.useState)(null),u=r[0],o=r[1],c=(0,t.useMemo)((function(){return{expandedItem:u,setExpandedItem:o}}),[u]);return t.createElement(i.Provider,{value:c},n)}function a(){var e=(0,t.useContext)(i);if(e===o)throw new u.i6("DocSidebarItemsExpandedStateProvider");return e}},2730:function(e,n,r){r.d(n,{a:function(){return i}});var t=r(67294),u=r(12466),o=r(85936);function i(e){var n=e.threshold,r=(0,t.useState)(!1),i=r[0],c=r[1],a=(0,t.useRef)(!1),s=(0,u.Ct)(),l=s.startScroll,f=s.cancelScroll;return(0,u.RF)((function(e,r){var t=e.scrollY,u=null==r?void 0:r.scrollY;u&&(a.current?a.current=!1:t>=u?(f(),c(!1)):t<n?c(!1):t+window.innerHeight<document.documentElement.scrollHeight&&c(!0))})),(0,o.S)((function(e){e.location.hash&&(a.current=!0,c(!1))})),{shown:i,scrollToTop:function(){return l(0)}}}},96841:function(e,n,r){r.d(n,{S:function(){return a}});var t=r(67294),u=r(86668);function o(e){var n=e.getBoundingClientRect();return n.top===n.bottom?o(e.parentNode):n}function i(e,n){var r,t,u=n.anchorTopOffset,i=e.find((function(e){return o(e).top>=u}));return i?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(i))?i:null!=(t=e[e.indexOf(i)-1])?t:null:null!=(r=e[e.length-1])?r:null}function c(){var e=(0,t.useRef)(0),n=(0,u.L)().navbar.hideOnScroll;return(0,t.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function a(e){var n=(0,t.useRef)(void 0),r=c();(0,t.useEffect)((function(){if(!e)return function(){};var t=e.linkClassName,u=e.linkActiveClassName,o=e.minHeadingLevel,c=e.maxHeadingLevel;function a(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(t),a=function(e){for(var n=e.minHeadingLevel,r=e.maxHeadingLevel,t=[],u=n;u<=r;u+=1)t.push("h"+u+".anchor");return Array.from(document.querySelectorAll(t.join()))}({minHeadingLevel:o,maxHeadingLevel:c}),s=i(a,{anchorTopOffset:r.current}),l=e.find((function(e){return s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,r){if(r){var t;n.current&&n.current!==e&&(null==(t=n.current)||t.classList.remove(u)),e.classList.add(u),n.current=e}else e.classList.remove(u)}(e,e===l)}))}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),function(){document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}),[e,r])}},6497:function(e,n,r){r.r(n),r.d(n,{AnnouncementBarProvider:function(){return C.pl},Collapsible:function(){return h.z},ColorModeProvider:function(){return _.S},DEFAULT_SEARCH_TAG:function(){return l.HX},DocSidebarItemsExpandedStateProvider:function(){return u.D},DocsPreferredVersionContextProvider:function(){return p.L5},DocsSidebarProvider:function(){return i.b},DocsVersionProvider:function(){return o.q},HtmlClassNameProvider:function(){return H.FG},NavbarProvider:function(){return I.V},NavbarSecondaryMenuFiller:function(){return j.Zo},PageMetadata:function(){return H.d},PluginHtmlClassNameProvider:function(){return H.VC},ReactContextError:function(){return F.i6},ScrollControllerProvider:function(){return E.OC},TabGroupChoiceProvider:function(){return M.z},ThemeClassNames:function(){return b.k},containsLineNumbers:function(){return s.nt},createStorageSlot:function(){return c.W},docVersionSearchTag:function(){return l.os},duplicates:function(){return g.l},findFirstCategoryLink:function(){return f.Wl},findSidebarCategory:function(){return f.em},getPrismCssVariables:function(){return s.QC},isActiveSidebarItem:function(){return f._F},isDocsPluginEnabled:function(){return f.cE},isMultiColumnFooterLinks:function(){return T},isRegexpStringMatch:function(){return O.F},isSamePath:function(){return D.Mg},keyboardFocusedClassName:function(){return V.h},listStorageKeys:function(){return c._},listTagsByLetters:function(){return P.P},parseCodeBlockTitle:function(){return s.bc},parseLanguage:function(){return s.Vo},parseLines:function(){return s.nZ},splitNavbarItems:function(){return I.A},translateTagsPageTitle:function(){return P.M},uniq:function(){return g.j},useAlternatePageUtils:function(){return a.l},useAnnouncementBar:function(){return C.nT},useBackToTopButton:function(){return w.a},useCodeWordWrap:function(){return W.F},useCollapsible:function(){return h.u},useColorMode:function(){return _.I},useContextualSearchFilters:function(){return l._q},useCurrentSidebarCategory:function(){return f.jA},useDocById:function(){return f.xz},useDocRouteMetadata:function(){return f.hI},useDocSidebarItemsExpandedState:function(){return u.f},useDocsPreferredVersion:function(){return p.J},useDocsPreferredVersionByPluginId:function(){return p.Oh},useDocsSidebar:function(){return i.V},useDocsVersion:function(){return o.E},useDocsVersionCandidates:function(){return f.lO},useDynamicCallback:function(){return F.ed},useFilteredAndTreeifiedTOC:function(){return L.b},useHideableNavbar:function(){return R.c},useHistoryPopHandler:function(){return y.R},useHomePageRoute:function(){return D.Ns},useIsomorphicLayoutEffect:function(){return F.LI},useKeyboardNavigation:function(){return V.t},useLayoutDoc:function(){return f.vY},useLayoutDocsSidebar:function(){return f.oz},useLocalPathname:function(){return S.b},useLocationChange:function(){return v.S},useLockBodyScroll:function(){return B.N},useNavbarMobileSidebar:function(){return N.e},useNavbarSecondaryMenu:function(){return k.Y},usePluralForm:function(){return m.c},usePrevious:function(){return F.D9},usePrismTheme:function(){return A.p},useScrollController:function(){return E.sG},useScrollPosition:function(){return E.RF},useScrollPositionBlocker:function(){return E.o5},useSearchPage:function(){return U.O},useSidebarBreadcrumbs:function(){return f.s1},useSkipToContent:function(){return q.a},useSmoothScrollTo:function(){return E.Ct},useTOCHighlight:function(){return x.S},useTabGroupChoice:function(){return M.U},useThemeConfig:function(){return t.L},useTitleFormatter:function(){return d.p},useTreeifiedTOC:function(){return L.a},useWindowSize:function(){return z.i}});var t=r(86668),u=r(14353),o=r(74477),i=r(1116),c=r(50012),a=r(94711),s=r(37016),l=r(43320),f=r(24575),d=r(82128),m=r(88824),v=r(85936),h=r(86043),p=r(60373),g=r(67392),b=r(35281),C=r(59689),S=r(51753),P=r(35155),y=r(91980),x=r(96841),L=r(39665);function T(e){return"title"in e[0]}var E=r(12466),F=r(44700),O=r(98022),D=r(48596),H=r(10833),_=r(92949),I=r(58978),M=r(7094),N=r(93163),j=r(13102),k=r(76857),w=r(2730),R=r(99445),V=r(19727),A=r(66412),B=r(69800),z=r(87524),U=r(66177),W=r(35866),q=r(68721)},35155:function(e,n,r){r.d(n,{M:function(){return u},P:function(){return o}});var t=r(95999),u=function(){return(0,t.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};function o(e){var n={};return Object.values(e).forEach((function(e){var r=function(e){return e[0].toUpperCase()}(e.label);null!=n[r]||(n[r]=[]),n[r].push(e)})),Object.entries(n).sort((function(e,n){var r=e[0],t=n[0];return r.localeCompare(t)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,n){return e.label.localeCompare(n.label)}))}}))}},39665:function(e,n,r){r.d(n,{a:function(){return c},b:function(){return s}});var t=r(80102),u=r(67294),o=["parentIndex"];function i(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),r=Array(7).fill(-1);n.forEach((function(e,n){var t=r.slice(2,e.level);e.parentIndex=Math.max.apply(Math,t),r[e.level]=n}));var u=[];return n.forEach((function(e){var r=e.parentIndex,i=(0,t.Z)(e,o);r>=0?n[r].children.push(i):u.push(i)})),u}function c(e){return(0,u.useMemo)((function(){return i(e)}),[e])}function a(e){var n=e.toc,r=e.minHeadingLevel,t=e.maxHeadingLevel;return n.flatMap((function(e){var n=a({toc:e.children,minHeadingLevel:r,maxHeadingLevel:t});return function(e){return e.level>=r&&e.level<=t}(e)?[Object.assign({},e,{children:n})]:n}))}function s(e){var n=e.toc,r=e.minHeadingLevel,t=e.maxHeadingLevel;return(0,u.useMemo)((function(){return a({toc:i(n),minHeadingLevel:r,maxHeadingLevel:t})}),[n,r,t])}},88824:function(e,n,r){r.d(n,{c:function(){return s}});var t=r(67294),u=r(52263),o=["zero","one","two","few","many","other"];function i(e){return o.filter((function(n){return e.includes(n)}))}var c={locale:"en",pluralForms:i(["one","other"]),select:function(e){return 1===e?"one":"other"}};function a(){var e=(0,u.default)().i18n.currentLocale;return(0,t.useMemo)((function(){try{return n=e,r=new Intl.PluralRules(n),{locale:n,pluralForms:i(r.resolvedOptions().pluralCategories),select:function(e){return r.select(e)}}}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+t.message+"\n"),c}var n,r}),[e])}function s(){var e=a();return{selectMessage:function(n,r){return function(e,n,r){var t=e.split("|");if(1===t.length)return t[0];t.length>r.pluralForms.length&&console.error("For locale="+r.locale+", a maximum of "+r.pluralForms.length+" plural forms are expected ("+r.pluralForms+"), but the message contains "+t.length+": "+e);var u=r.select(n),o=r.pluralForms.indexOf(u);return t[Math.min(o,t.length-1)]}(r,n,e)}}}},25845:function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),r(67294);var t=r(85893);n.Footer=function(){return t.jsxs("footer",{className:"tsd-footer",children:["Powered by"," ",t.jsx("a",{href:"https://github.com/milesj/docusaurus-plugin-typedoc-api",children:"docusaurus-plugin-typedoc-api"})," ","and ",t.jsx("a",{href:"https://typedoc.org/",children:"TypeDoc"})]})}},37850:function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0});var t=r(67294),u=r(39960),o=r(65551),i=r(6497),c=r(85893),a=function(e){return e&&e.__esModule?e:{default:e}}(u);n.VersionBanner=function(e){var n=e.versionMetadata,r=n.banner,u=n.pluginId,s=n.version,l=o.useDocVersionSuggestions(u).latestVersionSuggestion,f=i.useDocsPreferredVersion(u).savePreferredVersionName,d=t.useCallback((function(){f(l.name)}),[l.name,f]);if(!r||!l)return null;var m=n.docs[l.label];return c.jsx("div",{className:i.ThemeClassNames.docs.docVersionBanner+" alert alert--warning margin-bottom--md",role:"alert",children:c.jsxs("div",{children:["unreleased"===r&&c.jsx(c.Fragment,{children:"This is documentation for an unreleased version."}),"unmaintained"===r&&c.jsxs(c.Fragment,{children:["This is documentation for version ",c.jsx("b",{children:s}),"."]})," ","For the latest API, see version"," ",c.jsx("b",{children:c.jsx(a.default,{to:m.id,onClick:d,children:m.title})}),"."]})})}},75251:function(e,n,r){var t=r(67294),u=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(e,n,r){var t,o={},s=null,l=null;for(t in void 0!==r&&(s=""+r),void 0!==n.key&&(s=""+n.key),void 0!==n.ref&&(l=n.ref),n)i.call(n,t)&&!a.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:u,type:e,key:s,ref:l,props:o,_owner:c.current}}n.Fragment=o,n.jsx=s,n.jsxs=s},85893:function(e,n,r){e.exports=r(75251)}}]);