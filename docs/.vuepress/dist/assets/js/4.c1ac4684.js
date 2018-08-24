(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{59:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"插件中获取vue绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件中获取vue绑定","aria-hidden":"true"}},[t._v("#")]),t._v(" 插件中获取vue绑定")]),a("p",[t._v("我们需要在"),a("code",[t._v("axios")]),t._v("的插件中配置"),a("code",[t._v("Loading")]),t._v("加载效果，例如使用"),a("code",[t._v("element-ui")]),t._v("框架作为示例：")]),a("h2",{attrs:{id:"创建插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建插件","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建插件")]),a("p",[t._v("在文件根目录创建(或已经存在)"),a("code",[t._v("plugins/")]),t._v("目录，创建名为："),a("code",[t._v("axios.js")]),t._v("的文件，内容如下：")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" vm "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),a("span",{attrs:{class:"token comment"}},[t._v("//获取vue实例")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" $axios"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" redirect "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  $axios"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("onRequest")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("browser"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("    "),a("span",{attrs:{class:"token comment"}},[t._v("//判断是否为客户端（必须）")]),t._v("\n        vm"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("$loading")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  $axios"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("onResponse")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("browser"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("    "),a("span",{attrs:{class:"token comment"}},[t._v("//判断是否为客户端（必须）")]),t._v("\n          "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" load "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("$loading")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          load"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("close")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  $axios"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("onError")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" code "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" error"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("code "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("400")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token function"}},[t._v("redirect")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'/400'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("如官方所说，并不需要像"),a("strong",[t._v("原生")]),a("code",[t._v("axios")]),t._v("一样，去"),a("code",[t._v("return")]),t._v("一个"),a("code",[t._v("config")]),t._v("出来。")]),a("h2",{attrs:{id:"配置nuxt-config-js文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置nuxt-config-js文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置nuxt.config.js文件")]),a("p",[t._v("在"),a("code",[t._v("plugins")]),t._v("选项添加：")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("plugins"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'~/plugins/axios'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),a("p",[t._v("添加"),a("code",[t._v("modules")]),t._v("选项并添加如下示例：")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("modules"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'@/nuxtjs/axios'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),a("p",[t._v("配置防止多次打包：")]),a("p",[t._v("在build选项中("),a("code",[t._v("nuxt.config.js")]),t._v("会默认配置)添加"),a("code",[t._v("vendor")]),t._v("配置项：")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("build"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    vendor"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'axios'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("这样就可以调用loading加载方法,并且愉快的使用了。")]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),a("p",[t._v("在插件中获取vue绑定还有很多种方式，这只是其中一种，根据个人习惯不同，使用方式不同来决定。")])])])}],!1,null,null,null);s.default=o.exports}}]);