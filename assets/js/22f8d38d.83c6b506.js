"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4923],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,y=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35912:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],s={title:"Identity Map and Request Context"},l=void 0,c={unversionedId:"identity-map",id:"version-2.7/identity-map",title:"Identity Map and Request Context",description:"MikroORM uses identity map in background so you will always get the same instance of",source:"@site/versioned_docs/version-2.7/identity-map.md",sourceDirName:".",slug:"/identity-map",permalink:"/docs/2.7/identity-map",draft:!1,editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-2.7/identity-map.md",tags:[],version:"2.7",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1652843839,formattedLastUpdatedAt:"5/18/2022",frontMatter:{title:"Identity Map and Request Context"},sidebar:"version-2.7/docs",previous:{title:"Entity Repository",permalink:"/docs/2.7/repositories"},next:{title:"Entity References",permalink:"/docs/2.7/entity-references"}},u={},p=[{value:"Forking Entity Manager",id:"forking-entity-manager",level:2},{value:'<a name="request-context"></a> RequestContext helper for DI containers',id:"-requestcontext-helper-for-di-containers",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MikroORM")," uses identity map in background so you will always get the same instance of\none entity."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const authorRepository = orm.em.getRepository(Author);\nconst jon = await authorRepository.findOne({ name: 'Jon Snow' }, ['books']);\nconst authors = await authorRepository.findAll(['books']);\n\n// identity map in action\nconsole.log(jon === authors[0]); // true\n")),(0,a.kt)("p",null,"If you want to clear this identity map cache, you can do so via ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager.clear()")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"orm.em.clear();\n")),(0,a.kt)("p",null,"You should always keep unique identity map per each request. This basically means that you need\nto clone entity manager and use the clone in request context. There are two ways to achieve this:"),(0,a.kt)("h2",{id:"forking-entity-manager"},"Forking Entity Manager"),(0,a.kt)("p",null,"With ",(0,a.kt)("inlineCode",{parentName:"p"},"fork()")," method you can simply get clean entity manager with its own context and identity map:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const em = orm.em.fork();\n")),(0,a.kt)("h2",{id:"-requestcontext-helper-for-di-containers"},(0,a.kt)("a",{name:"request-context"})," RequestContext helper for DI containers"),(0,a.kt)("p",null,"If you use dependency injection container like ",(0,a.kt)("inlineCode",{parentName:"p"},"inversify")," or the one in ",(0,a.kt)("inlineCode",{parentName:"p"},"nestjs")," framework, it\ncan be hard to achieve this, because you usually want to access your repositories via DI container,\nbut it will always provide you with the same instance, rather than new one for each request. "),(0,a.kt)("p",null,"To solve this, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"RequestContext")," helper, that will use ",(0,a.kt)("inlineCode",{parentName:"p"},"node"),"'s Domain API in the\nbackground to isolate the request context. MikroORM will always use request specific (forked)\nentity manager if available, so all you need to do is to create new request context preferably\nin middle:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"app.use((req, res, next) => {\n  RequestContext.create(orm.em, next);\n});\n")),(0,a.kt)("p",null,"You should register this middleware as the last one just before request handlers and before\nany of your custom middleware that is using the ORM. There might be issues when you register\nit before request processing middleware like ",(0,a.kt)("inlineCode",{parentName:"p"},"queryParser")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"bodyParser"),", so definitely\nregister the context after them."))}m.isMDXComponent=!0}}]);