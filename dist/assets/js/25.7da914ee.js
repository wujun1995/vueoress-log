(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{162:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"对象着手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象着手"}},[t._v("#")]),t._v(" 对象着手")]),t._v(" "),a("p",[t._v("在谈原型链之前，先了解对象。")]),t._v(" "),a("ul",[a("li",[t._v("所有引用类型（函数，数组，对象）都拥有__proto__属性（隐式原型）")]),t._v(" "),a("li",[t._v("所有函数拥有prototype属性（显式原型）（仅限函数）")]),t._v(" "),a("li",[t._v("原型对象：拥有prototype属性的对象，在定义函数时就被创建")])]),t._v(" "),a("p",[a("strong",[t._v("prototype与__proto__两个概念")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("prototype")]),t._v("：此属性只有构造函数才有，它指向的是当前构造函数的原型对象。")]),t._v(" "),a("li",[a("code",[t._v("__proto__")]),t._v("：此属性是任何对象在创建时都会有的一个属性，它指向了产生当前对象的构造函数的原型对象，由于并非标准规定属性，不要随便去更改这个属性的值，以免破坏原型链，但是可以借助这个属性来学习，所谓的原型链就是由__proto__连接而成的链。")])]),t._v(" "),a("h2",{attrs:{id:"原型链详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型链详解"}},[t._v("#")]),t._v(" 原型链详解")]),t._v(" "),a("p",[t._v("在js代码中 通过对象创建(下面一段简单的代码)详细分析原型链 一段简单代码:")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("z"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//调用")]),t._v("\n  obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1")]),t._v("\n  obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2")]),t._v("\n\n\n  obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("z"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//3")]),t._v("\n\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//'function'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'z'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n  obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasOwnProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'z'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\n\n\n  obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("z"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("z"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//5")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'z'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n  obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasOwnProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'z'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n  foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("z"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//3")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br")])]),a("p",[a("strong",[t._v("代码简单分析")])]),t._v(" "),a("p",[t._v("上面一段代码，声明第一个函数foo的时候，它就会带一个foo.prototype的属性，这个属性是一个对象属性，用new foo();构造器的方式构造一个新的对象obj。这时候这个obj的原型会指向foo的prototype属性。 对于这个foo函数的原型也会指向Object.prototype,这个Object.prototype也是有原型的，它的原型指向null。")]),t._v(" "),a("p",[a("strong",[t._v("代码对象原型链图:")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://camo.githubusercontent.com/bca984b0376f5458b52b30f49c09c3d57f513962/68747470733a2f2f757365722d676f6c642d63646e2e786974752e696f2f323031392f362f31392f313662366261333366326666656430323f773d34363626683d34383826663d706e6726733d3236303336",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("对象访问属性顺序")])]),t._v(" "),a("p",[t._v("对象访问属性的顺序，是采用向上查找，如果当前对象没有，它会一直向上原型链中查找，一直找到null，如果还没有会返回undefind。")]),t._v(" "),a("p",[a("strong",[t._v("对象中值修改说明")])]),t._v(" "),a("p",[t._v("代码中修改obj.z的值后，再次输出obj.z的时候是5,foo.prototype.z是3，说明我们在修改或添加对象的属性的时候，只是修改了对象本身obj.prototype.z中的值，而原型链中foo.prototype.z的值并不会修改。")]),t._v(" "),a("p",[a("strong",[t._v("in，hasOwnProperty等方法的出现")])]),t._v(" "),a("p",[t._v("首先查看整个原型链，会想这两个方法是怎么来的，在foo的的proto指向上一级Object.prototype的时候，就可以访问Object中的一些函数和属性了，其中就包括这两个方法。")]),t._v(" "),a("p",[t._v("第一次调用")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'z'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true  ")]),t._v("\nobj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasOwnProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'z'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("表示的是z并不是obj这个对象上的，而是对象的原型链上的。")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'z'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n  obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasOwnProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'z'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n  foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("z"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//3")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("第二次修改了obj.z的值，z就是obj这个对象上的了，但是也并没有修改原型链中的z的值。")]),t._v(" "),a("p",[a("strong",[t._v("特殊说明")])]),t._v(" "),a("p",[t._v("_proto_是每一个对象都有的属性，它的指向会有一个特殊说明，大多数情况下 _proto_指向了"),a("strong",[t._v("产生当前对象的构造函数的原型对象")]),t._v("，也就是那个 prototype。但是会有特殊的情况")]),t._v(" "),a("ul",[a("li",[t._v("特殊情况")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("object.create是创建了一个空对象，空对象的原型指向a，a也是空对象，这其中不存在prototype;Object.create在继承中也常被使用，创建一个空对象指向()内的对象，这这样实现了b继承a，也不会篡改a中的内容，在这里就不具体说明了。")]),t._v(" "),a("p",[t._v("原理图分析\n"),a("img",{attrs:{src:"https://camo.githubusercontent.com/93d38d91dfb1c8c02c9dd7c76b79ba7f8d688a72/68747470733a2f2f757365722d676f6c642d63646e2e786974752e696f2f323031392f362f31392f313662366261333366326137383165623f773d34333026683d33363726663d706e6726733d3234343633",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("h3",{attrs:{id:"到底什么是原型链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#到底什么是原型链"}},[t._v("#")]),t._v(" 到底什么是原型链?")]),t._v(" "),a("p",[t._v("proto是任何对象都有的属性，在js中会形成一条proto连起来的链条，递归访问proto必须最终到头，并且值是null。")]),t._v(" "),a("h3",{attrs:{id:"误区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#误区"}},[t._v("#")]),t._v(" 误区")]),t._v(" "),a("p",[t._v("写这篇总结的过程中，发现很多文章都写了“JS中万物皆对象”。难道真的是这样吗？ 错，JS世界很大，并不只有对象")])])}),[],!1,null,null,null);s.default=e.exports}}]);