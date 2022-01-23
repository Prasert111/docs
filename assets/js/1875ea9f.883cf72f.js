"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[443],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(t),p=s,f=d["".concat(c,".").concat(p)]||d[p]||g[p]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function p(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,a=new Array(i);a[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2880:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=t(3117),s=t(102),i=(t(7294),t(3905)),a=["components"],o={},c="Signing & Verifying Messages",l={unversionedId:"build-with-sequence/sign-message",id:"build-with-sequence/sign-message",title:"Signing & Verifying Messages",description:"Signing Messages",source:"@site/docs/build-with-sequence/04-sign-message.mdx",sourceDirName:"build-with-sequence",slug:"/build-with-sequence/sign-message",permalink:"/build-with-sequence/sign-message",editUrl:"https://github.com/0xsequence/docs/edit/master/docs/build-with-sequence/04-sign-message.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"sidebar",previous:{title:"Get Wallet Account Address",permalink:"/build-with-sequence/get-address"},next:{title:"Signing & Verifying Transactions",permalink:"/build-with-sequence/sign-transaction"}},u=[{value:"Signing Messages",id:"signing-messages",children:[],level:2},{value:"Verifying Messages",id:"verifying-messages",children:[],level:2}],g={toc:u};function d(e){var n=e.components,t=(0,s.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"signing--verifying-messages"},"Signing & Verifying Messages"),(0,i.kt)("h2",{id:"signing-messages"},"Signing Messages"),(0,i.kt)("p",null,"Sequence wallets are able to sign arbitrary messages because they conform to a standard defined by EIP-1271."),(0,i.kt)("p",null,"To request a user's signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const signer = wallet.getSigner()\nconst message = 'Hello World!'\n\nconst signature = await signer.signMessage(message)\nconsole.log(signature)\n")),(0,i.kt)("h2",{id:"verifying-messages"},"Verifying Messages"),(0,i.kt)("p",null,"Given a message and signature, you can check if a particular wallet signed that message:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const address = await wallet.getAddress()\nconst chainId = await wallet.getChainId()\n\nconst isValid = await wallet.commands.isValidMessageSignature(address, message, signature, chainId)\nconsole.log(isValid)\n")))}d.isMDXComponent=!0}}]);