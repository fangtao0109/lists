# 项目总结
 1. 这是电信通集团长城宽带项目，主要是人员管理，整个项目使用了VUE框架结合VUEX进行数据管理，还有使用VUE-Router进行路由管理，以及elementUI的组件进行开发

 2. 基于官方的vue-cli脚手架,官方配置较全，没有自定义配置
 3. 路由搭建
    
    {

        routes: [
            { 
                path: '/',
                name: 'HelloWorld',
                component: HelloWorld
            },
            {
                path: '/list',
                name: 'List',
                component: List,
                children:[
                    {
                    name:'employee_admin',
                    path:'employee_admin',
                    component:employee_admin
                    }
                ]
            }
        ]

    }

    * 使用了二级子路由进行相关页面的跳转，结合vue内置的router-link和router-view完成页面的跳转
 4. 代表性的模块
    * Container布局
    * 表格
    * form表单
    * 弹出框
    * 树形控件
 5. 遇到的问题：

    * 比如路由使用children进行子路由的跳转，
    * vuex通过dispatch触发actions实现数据的改变
    * elementui原生组件与所要实现原型不符，自己封装所需要的组件
    * mockjs的数据需要放到静态文件夹static下，或者在webpack.dev.conf.js文件夹中配置
    
        setup (app) {

            app.get('/servers/menus.json', (req, res) => {
                const routerLink = require('../servers/menus.json')
                res.json(routerLink)
            })
            app.get('/servers/group.json', (req, res) => {
                const routerLink = require('../servers/group.json')
                res.json(routerLink)
            })
            app.get('/servers/user.json', (req, res) => {
                const routerLink = require('../servers/user.json')
                res.json(routerLink)
            })

        }

    这两种方式都可以获取到自己mock的数据
    

