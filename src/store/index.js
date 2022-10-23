import Vue from "vue";
import Vuex from 'vuex'


Vue.use(Vuex);

import color from "@/store/color";
import login from "@/store/login";
import highQuality from "@/store/findMusic/highquality"; // 发现音乐——歌单使用
import userSongList from "@/store/userSongList"; // 用户歌单
import nowPlaying from "@/store/nowPlaying"; // 正在播放
export default new Vuex.Store({
    modules: {
        color,
        highQuality,
        login,
        userSongList,
        nowPlaying
    }
});