/**
 * 在这里我们使用es6的import语法进行导入
 */
import Vue from '../node_modules/vue/dist/vue';
import VueRouter from '../node_modules/vue-router/dist/vue-router'
import loginForm from './js/login'  //对应js中要使用export语句进行导出
import registerForm from './js/register'
//引入css
import './css/main.css'

//vue-router使用模块话加载后，必须增加一句：Vue.use(VueRouter)
Vue.use(VueRouter)

const router = new VueRouter({
    routes:[ //编写多个路由规则
        {
            path:"/login",// 请求路径
            component:loginForm// 组件名称
        },
        {
            path:"/register",
            component:registerForm
        }
    ]
})

var vm = new Vue({
    el:"#app",
    components:{ //引用登录和注册组件
        loginForm,
        registerForm
    },
    router  // 引用上面定义的router对象
})
