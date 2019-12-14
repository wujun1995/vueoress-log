/*
 * @Author: wujun
 * @Date: 2019-12-13 10:44:39
 * @LastEditors: wujun
 * @LastEditTime: 2019-12-13 13:52:06
 * @Description: 头部注释
 */
module.exports = {
    title: 'Cuteboy Blog',
    description: '滴水能把石穿透，万事功到自然成。努力吧。',
    dest: './dist',// 默认在.vuepress下
    port: '7777',
    head: [
        ['link', { rel: 'icon', href: '/img/logo.jpg' }],
        ["link", { rel: "stylesheet", href: "/css/style.css" }],
        ["script", { charset: "utf-8", src: "/js/main.js" }],//新加入
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: require('./nav.js'),
        sidebar: require('./sidebar.js'),
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}