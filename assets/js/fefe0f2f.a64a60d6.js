"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5640],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},20075:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),i=["components"],s={title:"Schema Generator"},l=void 0,c={unversionedId:"schema-generator",id:"version-5.0/schema-generator",title:"Schema Generator",description:"SchemaGenerator can do harm to your database. It will drop or alter tables, indexes,",source:"@site/versioned_docs/version-5.0/schema-generator.md",sourceDirName:".",slug:"/schema-generator",permalink:"/docs/5.0/schema-generator",draft:!1,editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-5.0/schema-generator.md",tags:[],version:"5.0",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1652997011,formattedLastUpdatedAt:"5/19/2022",frontMatter:{title:"Schema Generator"},sidebar:"docs",previous:{title:"Metadata Cache",permalink:"/docs/5.0/metadata-cache"},next:{title:"Entity Generator",permalink:"/docs/5.0/entity-generator"}},u={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Using SchemaGenerator programmatically",id:"using-schemagenerator-programmatically",level:2},{value:"Limitations of SQLite",id:"limitations-of-sqlite",level:2}],m={toc:p};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"SchemaGenerator can do harm to your database. It will drop or alter tables, indexes,\nsequences and such. Please use this tool with caution in development and not on a\nproduction server. It is meant for helping you develop your Database Schema, but NOT\nwith migrating schema from A to B in production. A safe approach would be generating\nthe SQL on development server and saving it into SQL Migration files that are executed\nmanually on the production server.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"SchemaGenerator assumes your project uses the given database on its own. Update and Drop\ncommands will mess with other tables if they are not related to the current project\nthat is using MikroORM. Please be careful!")),(0,o.kt)("p",null,"To generate schema from your entity metadata, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"SchemaGenerator")," helper. "),(0,o.kt)("p",null,"You can use it via CLI: "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To work with the CLI, first install ",(0,o.kt)("inlineCode",{parentName:"p"},"@mikro-orm/cli")," package locally.\nThe version needs to be aligned with the ",(0,o.kt)("inlineCode",{parentName:"p"},"@mikro-orm/core")," package.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx mikro-orm schema:create --dump   # Dumps create schema SQL\nnpx mikro-orm schema:update --dump   # Dumps update schema SQL\nnpx mikro-orm schema:drop --dump     # Dumps drop schema SQL \n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"--run")," flag to fire all queries, but be careful as it might break your\ndatabase. Be sure to always check the generated SQL first before executing. Do not use\n",(0,o.kt)("inlineCode",{parentName:"p"},"--run")," flag in production! ")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"schema:create")," will automatically create the database if it does not exist. "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"schema:update")," drops all unknown tables by default, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"--no-drop-tables"),"\nto get around it. There is also ",(0,o.kt)("inlineCode",{parentName:"p"},"--safe")," flag that will disable both table dropping as\nwell as column dropping. "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"schema:drop")," will by default drop all database tables. You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"--drop-db")," flag to drop\nthe whole database instead. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx mikro-orm schema:fresh --run     # !WARNING! Drops the database schema and recreates it\n")),(0,o.kt)("p",null,"This command can be run with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--seed")," option to seed the database after it has been created again."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx mikro-orm schema:fresh --run --seed              # seed the database with the default database seeder\nnpx mikro-orm schema:fresh --run --seed=UsersSeeder  # seed the database with the UsersSeeder\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can specify the default database seeder in the orm config with the key ",(0,o.kt)("inlineCode",{parentName:"p"},"config.seeder.defaultSeeder"))),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"We can configure the schema generator globally via the ORM config:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const orm = await MikroORM.init({\n  // default values:\n  schemaGenerator: {\n    disableForeignKeys: true, // wrap statements with `set foreign_key_checks = 0` or equivalent\n    createForeignKeyConstraints: true, // whether to generate FK constraints\n  },\n});\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that if we disable FK constraints and current schema is using them, the\nschema diffing will try to remove those that already exist.")),(0,o.kt)("h2",{id:"using-schemagenerator-programmatically"},"Using SchemaGenerator programmatically"),(0,o.kt)("p",null,"Or you can create simple script where you initialize MikroORM like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./create-schema.ts"',title:'"./create-schema.ts"'},"import { MikroORM } from '@mikro-orm/core';\n\n(async () => {\n  const orm = await MikroORM.init({\n    entities: [Author, Book, ...],\n    dbName: 'your-db-name',\n    // ...\n  });\n  const generator = orm.getSchemaGenerator();\n\n  const dropDump = await generator.getDropSchemaSQL();\n  console.log(dropDump);\n\n  const createDump = await generator.getCreateSchemaSQL();\n  console.log(createDump);\n\n  const updateDump = await generator.getUpdateSchemaSQL();\n  console.log(updateDump);\n\n  // there is also `generate()` method that returns drop + create queries\n  const dropAndCreateDump = await generator.generate();\n  console.log(dropAndCreateDump);\n\n  // or you can run those queries directly, but be sure to check them first!\n  await generator.dropSchema();\n  await generator.createSchema();\n  await generator.updateSchema();\n\n  // in tests it can be handy to use those:\n  await generator.refreshDatabase(); // ensure db exists and is fresh\n  await generator.clearDatabase(); // removes all data\n\n  await orm.close(true);\n})();\n")),(0,o.kt)("p",null,"Then run this script via ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-node")," (or compile it to plain JS and use ",(0,o.kt)("inlineCode",{parentName:"p"},"node"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ ts-node create-schema\n")),(0,o.kt)("h2",{id:"limitations-of-sqlite"},"Limitations of SQLite"),(0,o.kt)("p",null,"There are limitations of SQLite database because of which it behaves differently\nthan other SQL drivers. Namely, it is not possible to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"create foreign key constraints when altering columns"),(0,o.kt)("li",{parentName:"ul"},"create empty tables without columns"),(0,o.kt)("li",{parentName:"ul"},"alter column requires nullability")),(0,o.kt)("p",null,"Because of this, you can end up with different schema with SQLite, so it is not\nsuggested to use SQLite for integration tests of your application."))}d.isMDXComponent=!0}}]);