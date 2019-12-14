(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{159:function(s,e,n){"use strict";n.r(e);var a=n(0),r=Object(a.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"为什么出现promise"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#为什么出现promise"}},[s._v("#")]),s._v(" 为什么出现Promise")]),s._v(" "),n("p",[s._v("在javascript开发过程中，代码是单线程执行的，同步操作，彼此之间不会等待，这可以说是它的优势，但是也有它的弊端，如一些网络操作，浏览器事件，文件等操作等，都必须异步执行，针对这些情况，起初的操作都是使用回调函数实现。")]),s._v(" "),n("p",[s._v("实现方式如下（伪代码）：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function One(callback) {\n    if (success) {\n        callback(err, result);\n    } else {\n        callback(err, null);\n    }\n}\n\nOne(function (err, result) {\n    //执行完One函数内的内容，成功的结果回调回来向下执行\n})\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("上述代码只是一层级回调，如果代码复杂后，会出现多层级的回调，代码可读性也会很差，那有没有一种方式，不用考虑里面的内容，直接根据结果成功还是失败执行下面的代码呢？有的，Promise（承诺），在ES6中对Promise进行了统一的规范。")]),s._v(" "),n("h2",{attrs:{id:"promise的含义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#promise的含义"}},[s._v("#")]),s._v(" Promise的含义")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("书上这么说：")]),s._v(" "),n("p",[s._v("Promise 是异步编程的一种解决方案，比传统的解决方案–回调函数和事件－－更合理和更强大。它由社区最早提出和实现，ES6将其写进了语言标准，统一了语法，原生提供了Promise")]),s._v(" "),n("p",[s._v("所谓Promise ，简单说就是一个容器，里面保存着某个未来才会结束的事件 (通常是一个异步操作）的结果。从语法上说，Promise是一个对象，从它可以获取异步操作的消息。\nPromise 对象的状态不受外界影响")])]),s._v(" "),n("li",[n("p",[s._v("Promise/a+ 官方网站给出的定义\nA promise represents the eventual result of an asyncchronous operation")]),s._v(" "),n("p",[s._v("翻译:表示一个异步操作的最终结果。")])]),s._v(" "),n("li",[n("p",[s._v("我的理解：")]),s._v(" "),n("p",[s._v("Promise是"),n("strong",[s._v("回调函数")]),s._v("可以"),n("strong",[s._v("规范")]),s._v("的"),n("strong",[s._v("链式")]),s._v("调用")])])]),s._v(" "),n("h2",{attrs:{id:"promise原理与讲解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#promise原理与讲解"}},[s._v("#")]),s._v(" Promise原理与讲解")]),s._v(" "),n("h5",{attrs:{id:"原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[s._v("#")]),s._v(" 原理")]),s._v(" "),n("ol",[n("li",[s._v("Promise的三种状态\n"),n("ul",[n("li",[s._v("pending：进行中")]),s._v(" "),n("li",[s._v("fulfilled :执行成功")]),s._v(" "),n("li",[s._v("rejected ：执行失败")])])])]),s._v(" "),n("p",[s._v("注意Promise在某一时刻只能处于一种状态")]),s._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[s._v("Promise的状态改变\n"),n("ul",[n("li",[s._v("pending------》fulfilled（resolved）")]),s._v(" "),n("li",[s._v("pending------》rejected")])])])]),s._v(" "),n("p",[s._v("Promise的状态改变，状态只能由pending转换为fulfilled（resolved）或者rejected，一旦状态改变完成后将无法改变（不可逆性）")]),s._v(" "),n("h5",{attrs:{id:"用代码讲原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#用代码讲原理"}},[s._v("#")]),s._v(" 用代码讲原理")]),s._v(" "),n("ol",[n("li",[s._v("创建一个Promise")])]),s._v(" "),n("p",[s._v("创建Promise需要用到Promise的构造函数来实现，代码如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var promise=new Promise(function(resolve,reject){\n   // ...some async code \n   \n   if(/* 一些异步操作成功*/)\n   {\n       resolve(value);\n   }else\n   {\n       reject(error);\n   }\n\n})\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("代码分析：")]),s._v(" "),n("ul",[n("li",[s._v("在异步操作完成之后，会针对不同的返回结果调用resolve和reject。")]),s._v(" "),n("li",[s._v("resolve和reject是两个函数，resolve是异步操作成功时候被调用，将异步操作的返回值作为参数传递到外部；reject是异步操作出异常时候被调用，将错误信息作为参数传递出去。")]),s._v(" "),n("li",[n("font",{attrs:{color:"red"}},[s._v("Promise其实没有做任何实质的代码操作，它只是对异步操作回调函数的不同结果定义了不同状态。")])],1),s._v(" "),n("li",[s._v("resolve函数和reject函数只是把异步结果传递出去")])]),s._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[s._v("异步结果传递出去后，then来接\nPromise对象将结果传递出来后，使用then方法来获取异步操作的值：\n代码如下：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("promise.then(function(value){\n   //success\n   \n},function(error){\n\n});\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("代码分析：")]),s._v(" "),n("ul",[n("li",[s._v("then方法将两个匿名函数作为参数，接收resolve和reject这两个函数的值。")]),s._v(" "),n("li",[s._v("value是执行成功的值，error是执行出错时的错误信息。")]),s._v(" "),n("li",[s._v("对于error错误异常结果出现的时候，可以不单独写匿名错误的函数，可以直接用catch抛出")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("promise.then(function (data){\n    //success\n})\n.catch(function(error){\n    //error  \n})\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("ul",[n("li",[s._v("注意then方法"),n("font",{attrs:{color:"red"}},[s._v("只是")]),s._v("用来获取异步操作的值。")],1)]),s._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[s._v("then的返回值又是怎样呢？\n先看一段调用两次then的代码：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("//之前创建promise操作后\npromise.then(function(value){\n    conlose.log(value);  //有值\n}).then(function(value)\n{\n   conlose.log(value);   //未定义\n});\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("代码分析：")]),s._v(" "),n("ul",[n("li",[s._v("上面的第二个then方法中的值虽然是未定义，但是每一个then一定会"),n("font",{attrs:{color:"red"}},[s._v("返回一个新的promise对象")]),s._v("，但是默认是一个空对象。")],1),s._v(" "),n("li",[s._v("对于这个空对象我们如果想继续做一些什么，需要进行处理，可以用非空Promise对这个空的进行赋值覆盖，然后继续then的链式调用。")]),s._v(" "),n("li",[s._v("then 中的"),n("font",{attrs:{color:"red"}},[s._v("return")]),s._v("关键字很重要，联系着下一个then的调用。")],1)]),s._v(" "),n("h5",{attrs:{id:"几个常用api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#几个常用api"}},[s._v("#")]),s._v(" 几个常用api")]),s._v(" "),n("ul",[n("li",[s._v("Promise.resolve"),n("br"),s._v("\nresolve方法用来将一个非Promise对象转化为Promise对象")])]),s._v(" "),n("p",[s._v("转换的对象是一个常量或者不具备状态的语句，转换后的对象自动处于resolve状态。\n转换的后的结果和原来一样")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('var promise =Promise.resolve("hello world");\npromise.then(function(result){\n  console.log(result);   //输出结果 hello world\n})\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("转换的对象如果直接是一个异步方法，不可以这么使用。")]),s._v(" "),n("ul",[n("li",[s._v("Promise.all(常用api)"),n("br"),s._v("\n多个promise需要执行的时候，可以使用promise.all方法统一声明，该方法可以将多个Promise对象包装成一个Promise。")])]),s._v(" "),n("p",[s._v("代码如下")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("promise.all(\n//一系列promise操作\n).then(function(results){\n    \n    \n}).catch(function(error){\n    \n});\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("代码分析：")]),s._v(" "),n("ul",[n("li",[s._v("promise.all对多个执行结果做一个包装传给了then")]),s._v(" "),n("li",[s._v("promise.all中的执行顺序是怎么样的，Promise的执行顺序是从被创建开始的，也就是在调用all的时候，"),n("font",{attrs:{color:"red"}},[s._v("所有的promise都已经开始执行")]),s._v("了，all方法只是等到"),n("font",{attrs:{color:"red"}},[s._v("所有的对象都执行完成")]),s._v("，才会把结果"),n("font",{attrs:{color:"red"}},[s._v("传递给then")]),s._v("。")],1),s._v(" "),n("li",[s._v("all中的promise，如果有一个状态变成了reject那么转换后的Promise字节变成reject，错误信息传递给catch，不会传递给then。（但是并不是说all这里面刚开始执行成功的操作就不算数了）")])]),s._v(" "),n("h2",{attrs:{id:"promise在开发中的应用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#promise在开发中的应用"}},[s._v("#")]),s._v(" Promise在开发中的应用")]),s._v(" "),n("p",[s._v("项目开发中promise的应用代码：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Promise.all([\n            self.count({phoneNumber: mobile, createdOn: {$gt: hour}}),\n            self.count({ip: ip, createdOn: {$gt: hour}})\n        ]).then(function (results) {\n            if (results[0] >= 5) {\n                return callback({code: -1, message: '短信发送频率过快，每手机号1小时内只能发送5次'});\n            }\n            if (results[1] >= 5) {\n                return callback({code: -1, message: '短信发送频率过快，每IP1小时内只能发送5次'});\n            }\n            let code = {\n                phoneNumber: mobile,\n                code: tool.makeRandomStr(4, 1).toLowerCase(),\n                createdOn: new Date(),\n                expiredOn: new Date(new Date().getTime() + (20 * 60 * 1000)),\t\t\t//20分钟失效\n                ip: ip,\n                isUsed: false\n            };\n            self.create(code, function (err, newCode) {\n                if (newCode) {\n                    sms.sendSMS(mobile, newCode.code, 'ali', function (err, body) {\n                        console.log(body);\n                        if (err)\n                            console.log(\"短信验证码发送失败：\", err);\n                    });\n                    callback({code: 0, message: \"验证码已经发送\"});\n                } else {\n                    callback({code: -1, message: \"验证码发送失败，请重试\"});\n                }\n            })\n        })\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br")])]),n("p",[s._v("项目开发过程中使用promise.all的代码，当时是为了实现短信验证码发送前的校验功能。\nall中的两个promise，第一个是统计时间内该手机号发送验证码数量;第二个是统计时间内该ip发送验证码的数量。")]),s._v(" "),n("h2",{attrs:{id:"promise使用过程中注意事项与误区"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#promise使用过程中注意事项与误区"}},[s._v("#")]),s._v(" Promise使用过程中注意事项与误区")]),s._v(" "),n("p",[s._v("注意事项在上面原理讲解过程中，基本都提到过，只是重要的事情多说两遍。")]),s._v(" "),n("ul",[n("li",[s._v("状态不可逆性")]),s._v(" "),n("li",[s._v("resolve函数和reject函数只是传递异步结果")]),s._v(" "),n("li",[s._v("then进行层级调用的时候，每次的返回值都是一个空promise对象，如果想继续使用，赋值替换掉空promise对象，但是返回的时候return关键字很重要，不要忘了。")]),s._v(" "),n("li",[s._v("promise.all中的执行顺序是并行的，但是会等全部完成的结果传递给then")]),s._v(" "),n("li",[n("font",{attrs:{color:"red"}},[s._v("执行顺序")]),s._v("，promise是then方法调用之后才会执行吗？还是从创建那一刻就开始执行？\npromise从创建那一刻就开始执行，只是把结果传递给了then，then与promise的执行无关。")],1)]),s._v(" "),n("h2",{attrs:{id:"promise的反思"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#promise的反思"}},[s._v("#")]),s._v(" Promise的反思")]),s._v(" "),n("p",[s._v("Promise的讲解就到这里，但是大家在开发过程中，会发现有些时候多次操作异步会出现很多层级的调用，也就是")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("promise.then(...)\n\n.then(...)\n\n.then(...)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("这种情况，代码虽然看起来会比callback的回调简介和规范了很多，但是还是感觉一些复杂，有没有更好的解决办法呢?请看下一篇博客")]),s._v(" "),n("p",[s._v("回调的终极使用--"),n("router-link",{attrs:{to:"/javascript/async-await.html"}},[s._v("async和await的讲解")])],1)])}),[],!1,null,null,null);e.default=r.exports}}]);