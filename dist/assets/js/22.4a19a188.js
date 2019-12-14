(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{160:function(s,e,a){"use strict";a.r(e);var r=a(0),t=Object(r.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"面试会问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试会问"}},[s._v("#")]),s._v(" 面试会问")]),s._v(" "),a("blockquote",[a("p",[s._v("require 的运行机制和缓存策略你了解吗？")])]),s._v(" "),a("blockquote",[a("p",[s._v("require 加载模块的是同步还是异步？谈谈你的理解")])]),s._v(" "),a("blockquote",[a("p",[s._v("exports 和 module.exports 的区别是什么？")])]),s._v(" "),a("blockquote",[a("p",[s._v("require 加载模块的时候加载的究竟是什么？")])]),s._v(" "),a("h2",{attrs:{id:"require"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#require"}},[s._v("#")]),s._v(" require")]),s._v(" "),a("p",[s._v("提到 exports 和 module.exports 我们不得不提到 require 关键字。大家都知道 Node.js 遵循 CommonJS 规范，使用 require 关键字来加载模块。")]),s._v(" "),a("h3",{attrs:{id:"require-重复引入问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#require-重复引入问题"}},[s._v("#")]),s._v(" require 重复引入问题")]),s._v(" "),a("p",[s._v("问题：不知道小伙伴们在使用 require 引入模块的时候有没有想过，多个代码文件中多次引入相同的模块会不会造成重复呢？")]),s._v(" "),a("p",[s._v("因为在 C++ 中通常使用#IFNDEF等关键字来避免文件的重复引入，但是在 Node.js 中无需关心这一点，因为 Node.js 默认先从缓存中加载模块，一个模块被加载一次之后，就会在缓存中维持一个副本，如果遇到重复加载的模块会直接提取缓存中的副本，也就是说在任何时候每个模块都只在缓存中有一个实例。")]),s._v(" "),a("h3",{attrs:{id:"require-加载模块的时候是同步还是异步？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#require-加载模块的时候是同步还是异步？"}},[s._v("#")]),s._v(" require 加载模块的时候是同步还是异步？")]),s._v(" "),a("p",[s._v("先回答问题，同步的！\n但是面试官要是问你为什么是同步或是异步的呢？"),a("br"),s._v("\n其实这个答案并不是固定的，但是小伙伴们可以通过这几方面给面试官解释。")]),s._v(" "),a("ol",[a("li",[s._v("一个作为公共依赖的模块，当然想一次加载出来，同步更好")]),s._v(" "),a("li",[s._v("模块的个数往往是有限的，而且 Node.js 在 require 的时候会自动缓存已经加载的模块，再加上访问的都是本地文件，产生的IO开销几乎可以忽略。")])]),s._v(" "),a("h3",{attrs:{id:"require-的缓存策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#require-的缓存策略"}},[s._v("#")]),s._v(" require() 的缓存策略")]),s._v(" "),a("p",[s._v("Node.js 会自动缓存经过 require 引入的文件，使得下次再引入不需要经过文件系统而是直接从缓存中读取。不过这种缓存方式是经过文件路径定位的，即使两个完全相同的文件，但是位于不同的路径下，会在缓存中维持两份。\n可以通过")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("console.log(require.cache)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("获取目前在缓存中的所有文件。")]),s._v(" "),a("h2",{attrs:{id:"exports-与-module-exports-区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exports-与-module-exports-区别"}},[s._v("#")]),s._v(" exports 与 module.exports 区别")]),s._v(" "),a("h3",{attrs:{id:"js文件启动时"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js文件启动时"}},[s._v("#")]),s._v(" js文件启动时")]),s._v(" "),a("p",[s._v("在一个 node 执行一个文件时，会给这个文件内生成一个 exports 和 module 对象，\n而module又有一个 exports 属性。他们之间的关系如下图，都指向一块{}内存区域。")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("看一张图理解这里更清楚：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/8/16/16c98da07872f7f3?w=1072&h=238&f=jpeg&s=32824",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"require-加载模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#require-加载模块"}},[s._v("#")]),s._v(" require()加载模块")]),s._v(" "),a("p",[s._v("require()加载模块的时候我们来看一段实例代码")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("//koala.js\nlet a = '程序员成长指北';\n\nconsole.log(module.exports); //能打印出结果为：{}\nconsole.log(exports); //能打印出结果为：{}\n\nexports.a = '程序员成长指北哦哦'; //这里辛苦劳作帮 module.exports 的内容给改成 {a : '程序员成长指北哦哦'}\n\nexports = '指向其他内存区'; //这里把exports的指向指走\n\n//test.js\n\nconst a = require('/koala');\nconsole.log(a) // 打印为 {a : '程序员成长指北哦哦'}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("看上面代码的打印结果，应该能得到这样的结论：")]),s._v(" "),a("blockquote",[a("p",[s._v("require导出的内容是module.exports的指向的内存块内容，并不是exports的。\n简而言之，区分他们之间的区别就是 exports 只是 module.exports的引用，辅助后者添加内容用的。用内存指向的方式更好理解。")])]),s._v(" "),a("h3",{attrs:{id:"官网中的一个例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#官网中的一个例子"}},[s._v("#")]),s._v(" 官网中的一个例子")]),s._v(" "),a("p",[s._v("看一下官方文档中exports的应用")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/8/16/16c98dda5a72c686?w=1612&h=818&f=jpeg&s=129715",alt:""}}),s._v("\n我们经常看到这样的写法：")]),s._v(" "),a("div",{staticClass:"language-javaScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" somethings\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("上面的代码等价于:")]),s._v(" "),a("div",{staticClass:"language-javaScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" somethings\nexports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("原理很简单，即 module.exports 指向新的对象时，exports 断开了与 module.exports 的引用，那么通过 exports = module.exports 让 exports 重新指向 module.exports 即可。")]),s._v(" "),a("h3",{attrs:{id:"使用的一点建议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用的一点建议"}},[s._v("#")]),s._v(" 使用的一点建议")]),s._v(" "),a("blockquote",[a("p",[s._v("建议：在使用的时候更建议大家使用module.exports（根据下面的例子也能得出）")])]),s._v(" "),a("p",[s._v("Node.js 认为每个文件都是一个独立的模块。如果你的包有两个文件，假设是“a.js” 和“b.js”，然后“b.js” 要使用“a.js” 的功能，“a.js” 必须要通过给 exports 对象增加属性来暴露这些功能：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// a.js\nexports.verifyPassword = function(user, password, done) { ... }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("完成这步后，所有需要“a.js” 的都会获得一个带有“verifyPassword” 函数属性的对象：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// b.js\nrequire(‘a.js’) // { verifyPassword: function(user, password, done) { ... } } \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("然而，如果我们想直接暴露这个函数，而不是让它作为某些对象的属性呢？我们可以覆写 exports 来达到目的，但是我们绝对不能把它当做一个全局变量：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// a.js\nmodule.exports = function(user, password, done) { ... }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("注意到我们是把“exports” 当做 module 对象的一个属性。“module.exports” 和“exports” 这之间区别是很重要的，而且经常会使 Node.js 新手踩坑。")]),s._v(" "),a("p",[s._v("加入我们一起学习吧！\n"),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/25/16b8a3d23a52b7d0?w=940&h=400&f=jpeg&s=217901",alt:""}}),s._v("\nnode学习交流群")]),s._v(" "),a("p",[s._v("交流群满100人不能自动进群, 请添加群助手微信号:【coder_qi】备注node，自动拉你入群。")])])}),[],!1,null,null,null);e.default=t.exports}}]);