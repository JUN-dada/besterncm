import VueRouter from "vue-router";
import principalpage from "@/components/pages/principalpage.vue";
import homepage from "@/components/homepage.vue";
import login from "@/components/login.vue";

const routes = [
    {
        path: '/login',
        name:'login',
        component: login,
    },
    {
        path: '/',
        redirect:'/login',
    },
    {
        path: '/homepage',
        name: 'homepage',
        component: homepage,
        children: [
            {
                path: '',
                name: 'PrincipalPage',
                component: principalpage,
            },
            {
                path: '/homepage/singlistpage',
                name: 'singlistpage',
                component: () => import('@/components/pages/singlistpage.vue')
            },
            {
                path: '/homepage/hotartists',
                name: 'hotartists',
                component: () => import('@/components/pages/hotartists.vue')
            },
            {
                path: '/homepage/search',
                name: 'search',
                component: ()=>import('@/components/pages/search.vue')
            },
            {
                path:'/homepage/userhome',
                name: "userhome",
                component: ()=>import('@/components/pages/userhome.vue')
            },
            {
                path:'/homepage/songpages',
                name: "songpages",
                component: ()=>import('@/components/pages/songpages.vue')
            },
            {
                path:'/homepage/hottopic',
                name: "listennumb",
                component: ()=>import('@/components/pages/hottopic.vue')
            },
            {
                path:'/homepage/buyzhuanji',
                name: "buyzhuanji",
                component: ()=>import('@/components/pages/buyzhuanji.vue')
            },
            {
                path:'/homepage/zhuanjipage',
                name: "zhuanjipage",
                component: ()=>import('@/components/pages/zhuanjipage.vue')
            },
            {
                path:'/homepage/singerintroduction',
                name: "singerintroduction",
                component: ()=>import('@/components/pages/singerintroduction.vue')
            }
        ]
    },

]

const router = new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes,
});



//如果本地存储中的usermasg和usermasgcookie是空的，那么就跳转到登录页面
router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        next();
    } else {
        let usermasg = localStorage.getItem('usermasg');
        let usermasgcookie = localStorage.getItem('usermasgcookie');
        if (usermasg == null || usermasgcookie == null) {
            next('/login');
        } else {
            next();
        }
    }
})


export default router
