import {getPlayList, getTopHQ} from "@/config/findMusic/HQConfig";

export default {
    namespaced: true,
    actions: {

    },
    mutations: {
        /*更换分类触发函数*/
        getInitialPlaylist(state, value){
            state.selected = value;

            /*更换分类时更新精品歌单和精选歌单*/
            // 精品歌单第一个
            if(state.selected !== '综艺'){ // 综艺没有精品歌单
                getTopHQ(state.selected).then(
                    res => {
                        state.hqTop = res.data.playlists[0];
                    }
                );
            }

            // 网友精选歌单, 使用新分类的第一页
            getPlayList(state.selected, 1).then(
                res => {
                    state.playList = res.data.playlists;
                }
            );
        },
        /*更换页数触发函数*/
        getPager(state, value){
            state.pager = value;

            const offset = (state.pager - 1) * 50;

            /*使用当前分类的新页数*/
            getPlayList(state.selected, offset).then(
                res => {
                    state.playList = res.data.playlists;
                    state.playListCount = res.data.total;
                }
            )
        }
    },
    getters: {},
    state: {
        hotTags: [], // 热门歌单标签
        hqTop: {}, // 精品歌单第一个
        allTags: [], // 所有歌单标签
        playList: [], // 网友精选歌单
        selected: '华语', // 当前选中的歌单分类
        pager: 1, // 当前第几页
        playListCount: 0

    }
}