(self.webpackChunkcalvin_me=self.webpackChunkcalvin_me||[]).push([[159],{8797:function(e,t,n){var r="[object Symbol]",a=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,u=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i="\\u2700-\\u27bf",o="a-z\\xdf-\\xf6\\xf8-\\xff",c="A-Z\\xc0-\\xd6\\xd8-\\xde",l="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",f="['’]",m="["+l+"]",s="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",p="\\d+",d="[\\u2700-\\u27bf]",g="["+o+"]",x="[^\\ud800-\\udfff"+l+p+i+o+c+"]",E="(?:\\ud83c[\\udde6-\\uddff]){2}",y="[\\ud800-\\udbff][\\udc00-\\udfff]",h="["+c+"]",b="(?:"+g+"|"+x+")",v="(?:"+h+"|"+x+")",A="(?:['’](?:d|ll|m|re|s|t|ve))?",j="(?:['’](?:D|LL|M|RE|S|T|VE))?",O="(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",I="[\\ufe0e\\ufe0f]?",T=I+O+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",E,y].join("|")+")"+I+O+")*"),Z="(?:"+[d,E,y].join("|")+")"+T,L=RegExp(f,"g"),S=RegExp(s,"g"),U=RegExp([h+"?"+g+"+"+A+"(?="+[m,h,"$"].join("|")+")",v+"+"+j+"(?="+[m,h+b,"$"].join("|")+")",h+"?"+b+"+"+A,h+"+"+j,p,Z].join("|"),"g"),N=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,k="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,w="object"==typeof self&&self&&self.Object===Object&&self,C=k||w||Function("return this")();var z,R=(z={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(e){return null==z?void 0:z[e]});var D=Object.prototype.toString,V=C.Symbol,G=V?V.prototype:void 0,_=G?G.toString:void 0;function J(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&D.call(e)==r}(e))return _?_.call(e):"";var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t}function P(e){return null==e?"":J(e)}var Y,$=(Y=function(e,t,n){return e+(n?"-":"")+t.toLowerCase()},function(e){return function(e,t,n,r){var a=-1,u=e?e.length:0;for(r&&u&&(n=e[++a]);++a<u;)n=t(n,e[a],a,e);return n}(function(e,t,n){return e=P(e),void 0===(t=n?void 0:t)?function(e){return N.test(e)}(e)?function(e){return e.match(U)||[]}(e):function(e){return e.match(a)||[]}(e):e.match(t)||[]}(function(e){return(e=P(e))&&e.replace(u,R).replace(S,"")}(e).replace(L,"")),Y,"")});e.exports=$},2248:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(3552),a=n(7294),u=n(5414),i=n(3217),o=n(8594),c=n.n(o),l=n(2797),f=n.n(l),m=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e,t,n,r,o=this.props,l=o.postNode,m=o.postPath,s=o.postSEO,p="";if(s){var d=l.frontmatter;e=d.title,t=d.description?d.description:l.excerpt,d.thumbnail&&(p=(0,i.e)(d.thumbnail.childImageSharp.gatsbyImageData)),n=c()(f().siteUrl,"/"===(r=m)?r:r.replace(/\/$/,""))}else e=f().siteTitle,t=f().siteDescription,p=f().siteLogo;p=c()(f().siteUrl,p);var g=c()(f().siteUrl,f().pathPrefix),x=[{"@context":"http://schema.org","@type":"WebSite",url:g,name:e,alternateName:f().siteTitleAlt?f().siteTitleAlt:""}];return s&&x.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n,name:e,image:p}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:g,name:e,alternateName:f().siteTitleAlt?f().siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:p},description:t}),a.createElement(u.q,null,a.createElement("meta",{name:"description",content:t}),a.createElement("meta",{name:"image",content:p}),a.createElement("script",{type:"application/ld+json"},JSON.stringify(x)),a.createElement("meta",{property:"og:url",content:s?n:g}),s&&a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"og:title",content:e}),a.createElement("meta",{property:"og:description",content:t}),a.createElement("meta",{property:"og:image",content:p}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:creator",content:f().userTwitter}),a.createElement("meta",{name:"twitter:title",content:e}),a.createElement("meta",{name:"twitter:description",content:t}),a.createElement("meta",{name:"twitter:image",content:p}))},t}(a.Component)},1973:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(3552),a=n(7294),u=n(5414),i=n(5444),o=n(8797),c=n.n(o),l=n(7366),f=n(2248),m=n(2797),s=n.n(m),p=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.group;return a.createElement(l.Z,null,a.createElement(f.Z,null),a.createElement(u.q,{title:"Tags – "+s().siteTitle}),a.createElement("div",{className:"container"},a.createElement("h1",null,"Tags"),a.createElement("div",{className:"tag-container"},e.map((function(e){return a.createElement(i.Link,{key:e.fieldValue,to:"/tags/"+c()(e.fieldValue)},a.createElement("span",{key:e.fieldValue},e.fieldValue," ",a.createElement("strong",{className:"count"},e.totalCount)))})))))},t}(a.Component)}}]);
//# sourceMappingURL=component---src-pages-tags-js-ab690e9650046ecf8533.js.map