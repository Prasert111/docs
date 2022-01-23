"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[895],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),d=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(i.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=d(t),p=o,m=f["".concat(i,".").concat(p)]||f[p]||l[p]||a;return t?r.createElement(m,s(s({ref:n},u),{},{components:t})):r.createElement(m,s({ref:n},u))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=f;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var d=2;d<a;d++)s[d]=t[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4409:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return d},toc:function(){return u},default:function(){return f}});var r=t(3117),o=t(102),a=(t(7294),t(3905)),s=["components"],c={},i="Sending ERC-721 (NFT) Tokens",d={unversionedId:"build-with-sequence/send-erc721",id:"build-with-sequence/send-erc721",title:"Sending ERC-721 (NFT) Tokens",description:"Sending an ERC-721 NFT is similar to sending an ERC-20 token.",source:"@site/docs/build-with-sequence/08-send-erc721.mdx",sourceDirName:"build-with-sequence",slug:"/build-with-sequence/send-erc721",permalink:"/build-with-sequence/send-erc721",editUrl:"https://github.com/0xsequence/docs/edit/master/docs/build-with-sequence/08-send-erc721.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"sidebar",previous:{title:"Sending ERC-20 Tokens",permalink:"/build-with-sequence/send-erc20"},next:{title:"Sending ERC-1155 (Collectible) Tokens",permalink:"/build-with-sequence/send-erc1155"}},u=[],l={toc:u};function f(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sending-erc-721-nft-tokens"},"Sending ERC-721 (NFT) Tokens"),(0,a.kt)("p",null,"Sending an ERC-721 NFT is similar to sending an ERC-20 token.\nThe only notable difference is in the contract standard itself:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const erc721Interface = new ethers.utils.Interface([\n  'function safeTransferFrom(address _from, address _to, uint256 _tokenId)'\n])\n\n// Encode the transfer of the NFT tokenId to recipient\nconst address = await wallet.getAddress()\nconst data = erc721Interface.encodeFunctionData(\n  'safeTransferFrom', [address, recipientAddress, tokenId]\n)\n\nconst transaction = {\n  to: erc721TokenAddress,\n  data\n}\n\nconst response = await wallet.sendTransaction(transaction)\nconsole.log(response)\n")),(0,a.kt)("p",null,"With batching functionality, you can send multiple token transfers in a single native transaction:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const erc721Interface = new ethers.utils.Interface([\n  'function safeTransferFrom(address _from, address _to, uint256 _tokenId)'\n])\n\n// Encode two different ERC-721 token transfers\nconst data1 = erc721Interface.encodeFunctionData(\n  'safeTransferFrom', [address, recipient1Address, amount1]\n)\nconst data2 = erc721Interface.encodeFunctionData(\n  'safeTransferFrom', [address, recipient2Address, amount2]\n)\n\nconst transaction1 = {\n  to: erc721ContractAddress,\n  data: data1\n}\n\nconst transaction2 = {\n  to: erc721ContractAddress,\n  data: data2\n}\n\nconst response = await wallet.sendTransactionBatch([transaction1, transaction2])\nconsole.log(response)\n")))}f.isMDXComponent=!0}}]);