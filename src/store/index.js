import Vue from "vue";
import Vuex from 'vuex'


Vue.use(Vuex);

import login from "@/store/login";
import highQuality from "@/store/findMusic/highquality"; // 发现音乐——歌单使用

export default new Vuex.Store({
    modules: {
        highQuality,
        login
    }
});