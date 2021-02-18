(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,g=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(g,c(c({ref:t},l),{},{components:n})):o.a.createElement(g,c({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(112)),i={id:"useToggleButton",title:"useToggleButton"},c={unversionedId:"useToggleButton",id:"useToggleButton",isDocsHomePage:!1,title:"useToggleButton",description:"Provides the behavior and accessibility implementation for a toggle button component. ToggleButtons allow users to toggle a selection on or off, for example switching between two states or modes.",source:"@site/docs/useToggleButton.md",slug:"/useToggleButton",permalink:"/react-native-aria/docs/useToggleButton",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/useToggleButton.md",version:"current",sidebar:"someSidebar",previous:{title:"useSwitch",permalink:"/react-native-aria/docs/useSwitch"},next:{title:"useHover (Web only)",permalink:"/react-native-aria/docs/useHover"}},u=[{value:"Install",id:"install",children:[]},{value:"Import",id:"import",children:[]},{value:"API",id:"api",children:[]},{value:"Usage",id:"usage",children:[]}],l={toc:u};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Provides the behavior and accessibility implementation for a toggle button component. ToggleButtons allow users to toggle a selection on or off, for example switching between two states or modes."),Object(a.b)("h3",{id:"install"},"Install"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"yarn add @react-native-aria/button\n")),Object(a.b)("h3",{id:"import"},"Import"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"import {useToggleButton} from '@react-native-aria/button'\n")),Object(a.b)("h3",{id:"api"},"API"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"useToggleButton(\n  props: AriaToggleButtonProps<ElementType>,\n  state: ToggleState,\n  ref: RefObject<any>\n): ButtonAria<HTMLAttributes<any>>\n")),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("iframe",{src:"https://snack.expo.io/embedded/@nishanbende/togglebutton?preview=true&platform=web&theme=dark",height:"500",width:"100%"}))}s.isMDXComponent=!0}}]);