"use strict";(self.webpackChunkcalvin_me=self.webpackChunkcalvin_me||[]).push([[678],{4403:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(1721),r=a(7294),i=a(1597),l=a(396),s=a(838),c=a(4479),o=function(e){function t(){return e.apply(this,arguments)||this}(0,n.Z)(t,e);var a=t.prototype;return a.getPostList=function(){var e=this.props.postEdges,t=""===c.pathPrefix?"/":c.pathPrefix;return e.map((function(e){return{path:t+e.node.fileAbsolutePath.split("/").slice(-2)[0].substr(11),tags:e.node.frontmatter.tags,thumbnail:e.node.frontmatter.thumbnail,title:e.node.frontmatter.title,date:(0,s.p)(e.node.fileAbsolutePath.split("/").slice(-2)[0].substr(0,10)),excerpt:e.node.excerpt,timeToRead:e.node.timeToRead,categories:e.node.frontmatter.categories}}))},a.render=function(){var e=this.getPostList();return r.createElement("section",{className:"posts"},e.map((function(e){var t;return e.thumbnail&&(t=e.thumbnail.childImageSharp?r.createElement(l.G,{image:e.thumbnail.childImageSharp.gatsbyImageData}):r.createElement("div",{className:"gatsby-image-wrapper"},r.createElement("img",{src:e.thumbnail.publicURL,alt:""}))),r.createElement(i.Link,{to:e.path,key:e.title},r.createElement("div",{className:"each"},t||r.createElement("div",null),r.createElement("div",{className:"each-list-item"},r.createElement("h2",null,e.title),r.createElement("div",{className:"datetime"},e.date))))})))},t}(r.Component)},8454:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(1721),r=a(7294),i=a(5414),l=a(396),s=a(8594),c=a.n(s),o=a(4479),m=a.n(o),p=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){var e,t,a,n,s=this.props,o=s.postNode,p=s.postPath,u=s.postSEO,h="";if(u){var d=o.frontmatter;e=d.title,t=d.description?d.description:o.excerpt,d.thumbnail&&(h=d.thumbnail.childImageSharp?(0,l.e)(d.thumbnail.childImageSharp.gatsbyImageData):d.thumbnail.publicURL),a=c()(m().siteUrl,"/"===(n=p)?n:n.replace(/\/$/,""))}else e=m().siteTitle,t=m().siteDescription,h=m().siteLogo;h=c()(m().siteUrl,h);var g=c()(m().siteUrl,m().pathPrefix),f=[{"@context":"http://schema.org","@type":"WebSite",url:g,name:e,alternateName:m().siteTitleAlt?m().siteTitleAlt:""}];return u&&f.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":a,name:e,image:h}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:g,name:e,alternateName:m().siteTitleAlt?m().siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:h},description:t}),r.createElement(i.q,null,r.createElement("meta",{name:"description",content:t}),r.createElement("meta",{name:"image",content:h}),r.createElement("script",{type:"application/ld+json"},JSON.stringify(f)),r.createElement("meta",{property:"og:url",content:u?a:g}),u&&r.createElement("meta",{property:"og:type",content:"article"}),r.createElement("meta",{property:"og:title",content:e}),r.createElement("meta",{property:"og:description",content:t}),r.createElement("meta",{property:"og:image",content:h}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:creator",content:m().userTwitter}),r.createElement("meta",{name:"twitter:title",content:e}),r.createElement("meta",{name:"twitter:description",content:t}),r.createElement("meta",{name:"twitter:image",content:h}))},t}(r.Component)},6558:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(1721),r=a(7294),i=a(5414),l=a(1597),s=a(9013),c=a(4403),o=a(8454),m=a(4479),p=a.n(m),u=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleChange=function(e){var t,n=e.target,r=n.name,i=n.value;a.setState(((t={})[r]=i,t),(function(){return a.filterPosts()}))},a.filterPosts=function(){var e=a.state,t=e.posts,n=e.searchTerm,r=t.filter((function(e){return n.split(/\s+/).every((function(t){return e.node.frontmatter.title.toLowerCase().includes(t.toLowerCase())}))}));a.setState({filteredPosts:r})},a.state={searchTerm:"",posts:a.props.data.posts.edges,filteredPosts:a.props.data.posts.edges},a}return(0,n.Z)(t,e),t.prototype.render=function(){var e=this.state,t=e.filteredPosts,a=e.searchTerm,n=t.length,m=this.props.data.categories.group;return r.createElement(s.Z,null,r.createElement(i.q,{title:p().siteTitle+" – Tech Blog"}),r.createElement(o.Z,null),r.createElement("div",{className:"container"},r.createElement("div",{className:"lead"},r.createElement("div",{className:"elevator"},r.createElement("h1",null,"Hi, I'm Calvin 👋"),r.createElement("p",null,"I'm a DevOps Engineer passionate about IT as a career and hobby!")))),r.createElement("div",{className:"container front-page"},r.createElement("div",{className:"category-container"},m.map((function(e){return r.createElement(l.Link,{to:"/categories/"+e.fieldValue.toLowerCase(),className:"category-filter",key:e.fieldValue},e.fieldValue)}))),r.createElement("label",{htmlFor:"searchTerm"},"Filter posts"),r.createElement("div",{className:"search-container"},r.createElement("input",{id:"searchTerm",className:"search",type:"text",name:"searchTerm",value:a,placeholder:"Type here to filter posts...",onChange:this.handleChange}),r.createElement("div",{className:"filter-count"},n)),r.createElement(c.Z,{postEdges:t})))},t}(r.Component)}}]);
//# sourceMappingURL=component---src-pages-index-js-516cce48fdada454cafb.js.map