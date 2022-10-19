import VueRouter from "vue-router";

/*发现音乐及其子组件*/
import findMusic from "@/pages/findMusic/findMusic"; // 发现音乐组件
import PRMain from "@/pages/findMusic/children/PR-main"; // 个性推荐组件
import HQMain from "@/pages/findMusic/children/HQ-main"; // 歌单

/*视频推荐及其子组件*/
import recommendedVideosMain from "@/pages/recommendedVideos/recommendedVideosMain";
import videosMain from "@/components/content/recommendedVideos/Videos/Videos-Main";

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
                },
                {
                    name: 'HQMain',
                    path: 'HQMain',
                    component: HQMain
                }
            ]
        },
        // 推荐视频
        {
            name: 'recommendedVideos',
            path: '/recommendedVideos',
            component: recommendedVideosMain,
            redirect: '/recommendedVideos/videos',
            children: [
                {
                    name: 'videos',
                    path: 'videos',
                    component: videosMain
                }
            ]
        }
    ]
})