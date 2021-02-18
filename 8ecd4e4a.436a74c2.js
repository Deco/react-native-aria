(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{112:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=s(r),b=n,m=l["".concat(i,".").concat(b)]||l[b]||d[b]||a;return r?o.a.createElement(m,c(c({ref:t},p),{},{components:r})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},91:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(112)),i={id:"useRadioGroup",title:"useRadioGroup"},c={unversionedId:"useRadioGroup",id:"useRadioGroup",isDocsHomePage:!1,title:"useRadioGroup",description:"Provides the behavior and accessibility implementation for a radio group component. Radio groups allow users to select a single item from a list of mutually exclusive options.",source:"@site/docs/useRadioGroup.md",slug:"/useRadioGroup",permalink:"/react-native-aria/docs/useRadioGroup",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/useRadioGroup.md",version:"current",sidebar:"someSidebar",previous:{title:"useCheckboxGroup",permalink:"/react-native-aria/docs/useCheckboxGroup"},next:{title:"useSwitch",permalink:"/react-native-aria/docs/useSwitch"}},u=[{value:"Install",id:"install",children:[]},{value:"Import",id:"import",children:[]},{value:"API",id:"api",children:[]},{value:"Usage",id:"usage",children:[]}],p={toc:u};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Provides the behavior and accessibility implementation for a radio group component. Radio groups allow users to select a single item from a list of mutually exclusive options."),Object(a.b)("h3",{id:"install"},"Install"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"yarn add @react-native-aria/radio\n")),Object(a.b)("h3",{id:"import"},"Import"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"import {useRadioGroup, useRadio} from '@react-native-aria/radio'\n")),Object(a.b)("h3",{id:"api"},"API"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"useRadioGroup(props: AriaRadioGroupProps, state: RadioGroupState): RadioGroupAria\nuseRadio(\n  props: RadioAriaProps,\n  state: RadioGroupState,\n  ref: RefObject<HTMLElement>\n): RadioAria\n")),Object(a.b)("h3",{id:"usage"},"Usage"),Object(a.b)("iframe",{src:"https://snack.expo.io/embedded/@nishanbende/radiogroup?preview=true&platform=web&theme=dark",height:"500",width:"100%"}))}s.isMDXComponent=!0}}]);