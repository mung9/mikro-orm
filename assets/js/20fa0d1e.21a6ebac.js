"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8351],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),g=a,h=c["".concat(s,".").concat(g)]||c[g]||d[g]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},46429:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var o=n(83117),a=n(80102),r=(n(67294),n(3905)),i=["components"],l={title:"Relationship Loading Strategies",sidebar_label:"Loading Strategies"},s=void 0,p={unversionedId:"loading-strategies",id:"version-5.0/loading-strategies",title:"Relationship Loading Strategies",description:"JOINED loading strategy is SQL only feature.",source:"@site/versioned_docs/version-5.0/loading-strategies.md",sourceDirName:".",slug:"/loading-strategies",permalink:"/docs/5.0/loading-strategies",draft:!1,editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-5.0/loading-strategies.md",tags:[],version:"5.0",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1652843839,formattedLastUpdatedAt:"5/18/2022",frontMatter:{title:"Relationship Loading Strategies",sidebar_label:"Loading Strategies"},sidebar:"docs",previous:{title:"Propagation",permalink:"/docs/5.0/propagation"},next:{title:"Serializing",permalink:"/docs/5.0/serializing"}},u={},d=[{value:"Changing the loading strategy globally",id:"changing-the-loading-strategy-globally",level:2},{value:"Population where condition",id:"population-where-condition",level:2}],c={toc:d};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"JOINED")," loading strategy is SQL only feature.")),(0,r.kt)("p",null,"Controls how relationships get loaded when querying. By default, populated relationships\nare loaded via the ",(0,r.kt)("inlineCode",{parentName:"p"},"select-in")," strategy. This strategy issues one additional ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT"),"\nstatement per relation being loaded."),(0,r.kt)("p",null,"The loading strategy can be specified both at mapping time and when loading entities."),(0,r.kt)("p",null,"For example, given the following entities:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Entity, LoadStrategy, OneToMany, ManyToOne } from '@mikro-orm/core';\n\n@Entity()\nexport class Author {\n  @OneToMany(() => Book, b => b.author)\n  books = new Collection<Book>(this);\n}\n\n@Entity()\nexport class Book {\n  @ManyToOne()\n  author: Author;\n}\n")),(0,r.kt)("p",null,"The following will issue two SQL statements.\nOne to load the author and another to load all the books belonging to that author:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const author = await orm.em.findOne(Author, 1, { populate: ['books'] });\n")),(0,r.kt)("p",null,"If we update the ",(0,r.kt)("inlineCode",{parentName:"p"},"Author.books")," mapping to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Entity, LoadStrategy, OneToMany } from '@mikro-orm/core';\n\n@Entity()\nexport class Author {\n  @OneToMany({\n    entity: () => Book,\n    mappedBy: b => b.author,\n    strategy: LoadStrategy.JOINED,\n  })\n  books = new Collection<Book>(this);\n}\n")),(0,r.kt)("p",null,"The following will issue ",(0,r.kt)("strong",{parentName:"p"},"one")," SQL statement:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const author = await orm.em.findOne(Author, 1, { populate: ['books'] });\n")),(0,r.kt)("p",null,"You can also specify the load strategy as needed. This will override whatever strategy is declared in the mapping.\nThis also works for nested populates:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const author = await orm.em.findOne(Author, 1, {\n  populate: ['books.publisher'],\n  strategy: LoadStrategy.JOINED\n});\n")),(0,r.kt)("h2",{id:"changing-the-loading-strategy-globally"},"Changing the loading strategy globally"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"loadStrategy")," option in the ORM config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"MikroORM.init({\n  loadStrategy: LoadStrategy.JOINED,\n});\n")),(0,r.kt)("p",null,"This value will be used as the default, specifying the loading strategy on\nproperty level has precedence, as well as specifying it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"FindOptions"),"."),(0,r.kt)("h2",{id:"population-where-condition"},"Population where condition"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This applies only to SELECT_IN strategy, as JOINED strategy implies the inference.")),(0,r.kt)("p",null,"In v4, when we used populate hints in ",(0,r.kt)("inlineCode",{parentName:"p"},"em.find()")," and similar methods, the\nquery for our entity would be analysed and parts of it extracted and used for\nthe population. Following example would find all authors that have books with\ngiven IDs, and populate their books collection, again using this PK condition,\nresulting in only such books being in those collections."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// this would end up with `Author.books` collections having only books of PK 1, 2, 3\nconst a = await em.find(Author, { books: [1, 2, 3] }, { populate: ['books'] });\n")),(0,r.kt)("p",null,"Following this example, if we wanted to load all books, we would need a separate\n",(0,r.kt)("inlineCode",{parentName:"p"},"em.populate()")," call:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const a = await em.find(Author, { books: [1, 2, 3] });\nawait em.populate(a, ['books']);\n")),(0,r.kt)("p",null,"This behaviour changed and is now configurable both globally and locally, via\n",(0,r.kt)("inlineCode",{parentName:"p"},"populateWhere")," option. Globally we can specify one of ",(0,r.kt)("inlineCode",{parentName:"p"},"PopulateHint.ALL")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"PopulateHint.INFER"),", the former being the default in v5, the latter being the\ndefault behaviour in v4. Locally (via ",(0,r.kt)("inlineCode",{parentName:"p"},"FindOptions"),") we can also specify custom\nwhere condition that will be passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"em.populate()")," call."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"await em.find(Author, { ... }, {\n  // defaults to PopulateHint.ALL in v5\n  populateWhere: PopulateHint.INFER, // revert to v4 behaviour\n\n  // or we can specify custom condition for the population:\n  // populateWhere: { ... },\n});\n")))}g.isMDXComponent=!0}}]);