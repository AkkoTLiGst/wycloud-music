import VueRouter from "vue-router";

/*发现音乐及其子组件*/
import findMusic from "@/pages/findMusic/findMusic"; // 发现音乐组件
import PRMain from "@/pages/findMusic/children/PR-main"; //

export default new VueRouter({
    mode: 'hash',
    routes: [
        //默认路由
        {
            path: '/',
            redirect: '/findMusic'
        },
        // 发现音乐
        {
            name: 'findMusic',
            path: '/findMusic',
            component: findMusic,
            redirect: '/findMusic/prMain',
            children: [
                {
                    name: 'prMain',
                    path: 'prMain',
                    component: PRMain
                }
            ]
        }
    ]
})