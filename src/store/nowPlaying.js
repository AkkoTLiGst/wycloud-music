import {getComment} from "@/config/songlist/userSongList";
import {setItem} from "@/config/utils";

export default {
    namespaced: true,
    mutations: {
        // 更新正在播放
        updatePlayingSong(state, value){
            state.playingSong = value;
        },
        // 更新评论
        updateLyric(state, value){
            state.lyric = value;
        },

        // 更新热门评论
        updateHotComment(state, value){
            state.hotComment = value
        },

        // 更新时间评论
        updateTimeComment(state, value){
            state.timeComment = value
        },

        // 更新评论总数
        updateTotalCount(state, value){
            state.commentTotal = value;
        },

        // 是否显示播放
        changeShowWindow(state){
            state.showWindow = !state.showWindow;
        },

        // 加工歌词
        rewriteLyrics(state) {
            if(state.lyricsObj.length > 0){
                state.lyricsObj = []; // 如果已经有歌词就清空

                /*将歌词的每一行拆分放进数组*/
                const regNewLine = /\n/;
                const lineArr = state.lyric.lyric.split(regNewLine);
                // console.log(lineArr);

                const regTime = /\[\d{2}:\d{2}.\d{2,3}\]/; // 匹配每行歌词的时间部分


                /*对歌词数据遍历*/
                lineArr.forEach(item => {
                    if(item === '') return;

                    const obj = {};
                    const time = item.match(regTime); // 拆分时间

                    obj.lyric = item.split(']')[1].trim() === '' ? '' : item.split(']')[1].trim(); // 根据 ] 拆分每一行的歌词
                    obj.time = time ? formatLyricsTime(time[0].slice(1, time[0].length - 1)) : 0; // 重写时间
                    obj.uid = Math.random().toString().toString().slice(-6); // 为每句歌词匹配UID
                    if(obj.lyric !== ''){
                        state.lyricsObj.push(obj);
                    }
                });
            }

            /*转换时间函数*/
            function formatLyricsTime(time){
                const regMin = /.*:/; // 匹配分钟
                const regSec = /:.*\./; // 匹配秒
                const regMs =/\./; // 去除中括号

                const min = parseInt(time.match(regMin)[0].slice(0, 2));
                let sec = parseInt(time.match(regSec)[0].slice(1, 3));
                const ms = time.slice(time.match(regMs).index + 1, time.match(regMs).index + 3);
                if(min !== 0){
                    sec += min * 60;
                }
                return Number(sec + '.' + ms);
            }
            // console.log(state.lyricObj);
        },

        // 更新页数
        async getPager(state, value){
            state.commentPager = value;

            const timeCommentRes = await getComment(state.playingSong.id, 0, state.commentPager, 20, 3, state.timeComment[19].time);
            console.log(timeCommentRes);
            state.timeComment = timeCommentRes.data.data.comments;
            setItem('timeComment', timeCommentRes.data.data.comments); // 时评写入cookie
        }

    },
    state: {
        playingSong: localStorage.getItem("playingSong") ? JSON.parse(localStorage.getItem("playingSong")) : {}, // 正在播放的音乐
        playingVideo: [], // 正在播放的视频
        showWindow: false, // 是否显示播放界面

        lyric: localStorage.getItem("lyric") ? JSON.parse(localStorage.getItem("lyric")) : {}, // 歌词
        lyricsObj: localStorage.getItem("lyricsObj") ? JSON.parse(localStorage.getItem("lyricsObj")) : [], // 加工后的歌词

        timeComment: localStorage.getItem("timeComment") ? JSON.parse(localStorage.getItem("timeComment")) : [], // 时间排序评论
        commentTotal: localStorage.getItem("commentTotal") ? JSON.parse(localStorage.getItem("commentTotal")) : 0, // 时间评论总数
        commentPager: 1, // 时间评论第几页

        hotComment: localStorage.getItem("hotComment") ? JSON.parse(localStorage.getItem("hotComment")) : [], // 热门排序评论

        isPlayingMusic: true // 是否正在播放音乐
    }
}