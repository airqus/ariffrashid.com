(self.webpackChunkcalvin_me=self.webpackChunkcalvin_me||[]).push([[969],{7789:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(3552),r=n(7294),s=n(5444),i=n(9285),l=n(1153),o=n(2797),c=function(e){function t(){return e.apply(this,arguments)||this}(0,a.Z)(t,e);var n=t.prototype;return n.getPostList=function(){var e=this.props.postEdges,t=""===o.pathPrefix?"/":o.pathPrefix;return e.map((function(e){return{path:t+e.node.fileAbsolutePath.split("/").slice(-2)[0].substr(11),tags:e.node.frontmatter.tags,thumbnail:e.node.frontmatter.thumbnail,title:e.node.frontmatter.title,date:(0,l.p)(e.node.fileAbsolutePath.split("/").slice(-2)[0].substr(0,10)),excerpt:e.node.excerpt,timeToRead:e.node.timeToRead,categories:e.node.frontmatter.categories}}))},n.render=function(){var e=this.getPostList();return r.createElement("section",{className:"posts"},e.map((function(e){var t;return e.thumbnail&&(t=e.thumbnail.childImageSharp.gatsbyImageData),r.createElement(s.Link,{to:e.path,key:e.title},r.createElement("div",{className:"each"},t?r.createElement(i.G,{image:t}):r.createElement("div",null),r.createElement("div",{className:"each-list-item"},r.createElement("h2",null,e.title),r.createElement("div",{className:"datetime"},e.date))))})))},t}(r.Component)},5847:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var a=n(3552),r=n(7294),s=n(5414),i=n(7366),l=n(7789),o=n(2797),c=n.n(o),u=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){var e=this.props.pageContext.tag,t=this.props.data.allMarkdownRemark.edges;return r.createElement(i.Z,null,r.createElement(s.q,{title:'Posts tagged as "'+e+'" – '+c().siteTitle}),r.createElement("div",{className:"container"},r.createElement("h1",null,"Posts tagged as"," ",r.createElement("u",null,r.createElement("strong",null,e))),r.createElement(l.Z,{postEdges:t})))},t}(r.Component)}}]);
//# sourceMappingURL=component---src-templates-tag-js-518d546729df5961d0a7.js.map