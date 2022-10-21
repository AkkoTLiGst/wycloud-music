import VueRouter from "vue-router";

/*发现音乐及其子组件*/
import findMusic from "@/pages/findMusic/findMusic"; // 发现音乐组件
import PRMain from "@/pages/findMusic/children/PR-main"; // 个性推荐组件
import HQMain from "@/pages/findMusic/children/HQ-main"; // 歌单

/*视频推荐及其子组件*/
import recommendedVideosMain from "@/pages/recommendedVideos/recommendedVideosMain";
import videosMain from "@/components/content/recommendedVideos/Videos/Videos-Main";

/*我喜欢的音乐*/
import mySongListMain from "@/pages/mySongList/mySongList-Main";
import songListList from "@/pages/mySongList/Children/songList-List"; // 歌单列表
import songListComment from "@/pages/mySongList/Children/songList-Comment"; // 评论
import songListCollector from "@/pages/mySongList/Children/songList-Collector"; // 收藏者

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
        },
        {
            name: 'songList',
            path: '/songList',
            component: mySongListMain,
            redirect: '/songList/songListList',
            children: [
                {
                    name: 'songListList',
                    path: 'songListList',
                    component: songListList
                },
                {
                    name: 'songListComment',
                    path: 'songListComment',
                    component: songListComment
                },
                {
                    name: 'songListCollector',
                    path: 'songListCollector',
                    component: songListCollector
                }
            ]
        }
    ]
})