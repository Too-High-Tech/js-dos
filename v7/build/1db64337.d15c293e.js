(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{62:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),o=n(6),r=(n(0),n(74)),s={id:"overview",title:"Overview",sidebar_label:"Overview"},i={unversionedId:"overview",id:"overview",isDocsHomePage:!0,title:"Overview",description:"js-dos v7 is still under development and some features are not ready;",source:"@site/docs/overview.md",permalink:"/v7/build/docs/",editUrl:"https://github.com/caiiiycuk/js-dos/edit/gh-pages/v7/docs/overview.md",sidebar_label:"Overview",sidebar:"someSidebar",next:{title:"Releases",permalink:"/v7/build/docs/releases"}},l=[{value:"js-dos bundle",id:"js-dos-bundle",children:[]},{value:"Run jsdos file",id:"run-jsdos-file",children:[{value:"1. Use player hosted on dos.zone",id:"1-use-player-hosted-on-doszone",children:[]},{value:"2. Use js-dos api",id:"2-use-js-dos-api",children:[]},{value:"3. Using emulators",id:"3-using-emulators",children:[]}]}],c={rightToc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"js-dos v7 is still under development and some features are not ready;\nfor example you can't use a mouse yet. Please use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://js-dos.com"}),"js-dos 6.22")," for production\nprojects."))),Object(r.b)("p",null,"The new version of js-dos is more modular, you can use parts of it. It consists of:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"js-dos bundle - universal package that js-dos understands"),Object(r.b)("li",{parentName:"ul"},"emulators - ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com/package/emulators"}),"npm package"),", that provides just the DOS emulator that can run in different environments"),Object(r.b)("li",{parentName:"ul"},"emulators-ui - ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com/package/emulators-ui"}),"npm package"),", a set of ui and sound components to render emulator output in browser"),Object(r.b)("li",{parentName:"ul"},"js-dos - ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com/package/js-dos/v/beta"}),"npm package")," that combines everything to run a DOS program in browser")),Object(r.b)("h2",{id:"js-dos-bundle"},"js-dos bundle"),Object(r.b)("p",null,"js-dos 6.22 has a very easy API to run a DOS program in browser. Before starting it you need to perform some setup:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"download game archive (usually zip)"),Object(r.b)("li",{parentName:"ul"},"extract it"),Object(r.b)("li",{parentName:"ul"},"configure dos file system"),Object(r.b)("li",{parentName:"ul"},"configure dosbox options (cycles, renderer type, etc.)"),Object(r.b)("li",{parentName:"ul"},"configure controllers (mouse, keyboard type, etc.)")),Object(r.b)("p",null,"Often gameplay quality depends on good configuration."),Object(r.b)("p",null,"Starting from js-dos 7, the API expects a ",Object(r.b)("inlineCode",{parentName:"p"},"js-dos bundle")," that already contains all configuration needed to start the DOS program.\n",Object(r.b)("inlineCode",{parentName:"p"},"js-dos bundle")," is just a ",Object(r.b)("strong",{parentName:"p"},"ZIP")," archive that contains the game itself and a js-dos config file (same as dosbox.conf file).\nFor example, ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://talks.dos.zone/t/digger-may-06-1999/1922"}),"digger.jsdos")," contains: "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),".jsdos\\dosbox.conf - dosbox configuration file\nDIGGER.COM         - game file\n")),Object(r.b)("p",null,"You can generate a ",Object(r.b)("inlineCode",{parentName:"p"},"js-dos bundle")," programmatically. But, we recommend you use our ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://dos.zone/en/studio"}),"bundle generator"),"\nMoreover you can search ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://talks.dos.zone/search?expanded=true&q=%23en%20tags%3Ajsdos"}),"our database")," to see if someone already uploaded a ",Object(r.b)("inlineCode",{parentName:"p"},"js-dos bundle")," for a program."),Object(r.b)("p",null,"Read the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://dos.zone/en/guide/studio"}),"guide")," about creating ",Object(r.b)("inlineCode",{parentName:"p"},"js-dos bundle"),"."),Object(r.b)("h2",{id:"run-jsdos-file"},"Run jsdos file"),Object(r.b)("p",null,"Once you have ",Object(r.b)("inlineCode",{parentName:"p"},"jsdos bundle")," you can easily run it in browser. There are several options:"),Object(r.b)("h3",{id:"1-use-player-hosted-on-doszone"},"1. Use player hosted on dos.zone"),Object(r.b)("p",null,"Fastest way to embed jsdos on your page. You just need the url of a ",Object(r.b)("inlineCode",{parentName:"p"},"jsdos bundle")," (you can get it from our game database)."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<iframe\n  id="jsdos"\n  src="https://dos.zone/en/player/https%3A%2F%2Fdoszone-uploads.s3.dualstack.eu-central-1.amazonaws.com%2Foriginal%2F2X%2F9%2F9ed7eb9c2c441f56656692ed4dc7ab28f58503ce.jsdos"\n/>\n')),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"src")," can be composed like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const src = "https://dos.zone/en/player/" + encodeURIComponent(bundleUrl);\n')),Object(r.b)("p",null,"To receive input you should focus the iframe:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'document.getElementById("jsdos").focus();\n')),Object(r.b)("p",null,"Complete example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html",metastring:'title="examples/iframe.html"',title:'"examples/iframe.html"'}),"{}\n")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("ol",{parentName:"div"},Object(r.b)("li",{parentName:"ol"},"Drag with mouse to play without keyboard!"),Object(r.b)("li",{parentName:"ol"},"Open top menu to type records name on mobile.")))),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Iframe integration didn't support for fullscreen button yet, if you need it look forward."))),Object(r.b)("h3",{id:"2-use-js-dos-api"},"2. Use js-dos api"),Object(r.b)("p",null,"js-dos v7 is even simple then 6.22, to run ",Object(r.b)("inlineCode",{parentName:"p"},"bundle")," you just need a one line of code:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'Dos(document.getElementById("jsdos")).run("some.jsdos");\n')),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Dos")," receives HTMLDivElement and uses it to create the player UI. To run ",Object(r.b)("inlineCode",{parentName:"p"},"jsdos bundle"),"\njust use its method ",Object(r.b)("inlineCode",{parentName:"p"},"run")," specifying the url of ",Object(r.b)("inlineCode",{parentName:"p"},"jsdos bundle"),"."),Object(r.b)("p",null,"To use js-dos you need to add ",Object(r.b)("inlineCode",{parentName:"p"},"js-dos.js")," script, and ",Object(r.b)("inlineCode",{parentName:"p"},"js-dos.css")," style.\nAlso you need to specify path prefix os js-dos installation:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<script src="/v7/build/releases/latest/js-dos/js-dos.js"><\/script>\n<link href="/v7/build/releases/latest/js-dos/js-dos.css" rel="stylesheet">\n// ...\n<script>\n  emulators.pathPrefix = "/v7/build/releases/latest/js-dos/";\n  Dos(/*element*/).run(/*bundleUrl*/);\n')),Object(r.b)("p",null,"Complete example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html",metastring:'title="examples/dos.html"',title:'"examples/dos.html"'}),"{}\n")),Object(r.b)("h3",{id:"3-using-emulators"},"3. Using emulators"),Object(r.b)("p",null,"Most flexible way. The emulators package contains core that can run DOS programs in wasm environment. It now supports two execution modes:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"direct - run DOS emulation inside main browser thread."),Object(r.b)("li",{parentName:"ul"},"worker - run DOS emulation inside worker thread.")),Object(r.b)("p",null,"Read the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"estimating-performance"}),"guide")," to how we use emulators to estimate js-dos performance."))}b.isMDXComponent=!0},74:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),b=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=b(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=b(n),u=a,m=d["".concat(s,".").concat(u)]||d[u]||p[u]||r;return n?o.a.createElement(m,i(i({ref:t},c),{},{components:n})):o.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);