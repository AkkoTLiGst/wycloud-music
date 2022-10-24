import {getMin} from "@/config/utils";

export default {
    namespaced: true,
    actions: {},
    mutations: {
        updateUserSongList(state, value) {
            state.userSongList = value;
            // console.log(state.userSongList);
        },
        updateSelectedList(state, value){
            state.selectedList = value
            // console.log(state.selectedList);
        },
        updateAllSong(state, value){
            state.allSong = [...state.allSong, ...value];
        },

        // 更新offset的时候,offset+100
        addOffset(state){
            state.offset += 100;
        }
    },
    getters: {
        // 返回歌单创建日期
        songListCreateDate(state){
            const date = new Date(state.selectedList.createTime);
            const   Y = date.getFullYear() + '-',
                    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-',
                    D = date.getDate();
            return (Y + M + D);
        },
        // 返回每首歌的时长
        songTime(){
            return getMin;
        }
    },
    state: {
        userSongList: localStorage.getItem("userSongList") ? JSON.parse(localStorage.getItem("userSongList")) : [], // 用户所有歌单
        selectedList: localStorage.getItem("selectedList") ? JSON.parse(localStorage.getItem("selectedList")) : {}, // 当前选泽的歌单（从用户歌单中获取的或者其他歌单）
        allSong: localStorage.getItem("allSong") ? JSON.parse(localStorage.getItem("allSong")) : [], // 选择的歌单中的所有歌曲
        offset: 0, // 获取歌曲的偏移量
        limit: 100 // 每次获取歌曲的数量
    }
}