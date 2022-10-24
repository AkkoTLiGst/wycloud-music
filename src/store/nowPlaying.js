import {getComment} from "@/config/songlist/userSongList";
import {getMin, setItem} from "@/config/utils";

export default {
    namespaced: true,
    mutations: {
        // 更新正在播放
        updatePlayingSong(state, value){
            state.playingSong = value;
        },

        // 更新歌曲url
        updateSongUrl(state, value){
            state.songUrl = value
        },

        // 更新歌曲时长
        updateMusicDuration(state, value){
            state.musicDuration = value
        },

        // 更新是否播放
        // value=1 播放, value=2 暂停
        updateIsPlaySong(state, value){
            if(value === 1){
                state.isPlayingMusic = true
            }else if(value === 2){
                state.isPlayingMusic = false
            }

        },

        // 更新是否拖动
        updateIsChange(state){
            state.isChange = !state.isChange;
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
            }
            /*将歌词的每一行拆分放进数组*/
            const regNewLine = /\n/;
            const lineArr = state.lyric.lyric.split(regNewLine);
            // console.log(lineArr);

            const regTime = /\[\d{2}:\d{2}.\d{2,3}\]/; // 匹配每行歌词的时间部分

            const obj = [];

            /*对歌词数据遍历*/
            lineArr.forEach(item => {
                if(item === '') return;

                const innerObj = {}
                const time = item.match(regTime); // 拆分时间

                innerObj.lyric = item.split(']')[1].trim() === '' ? '' : item.split(']')[1].trim(); // 根据 ] 拆分每一行的歌词
                innerObj.time = Math.round(time ? formatLyricsTime(time[0].slice(1, time[0].length - 1)) : 0); // 重写时间
                innerObj.uid = Math.random().toString().toString().slice(-6); // 为每句歌词匹配UID
                if(innerObj.lyric !== ''){
                    obj.push(innerObj);
                }
            });

            obj.forEach((item, index) => {
                if(index > 0){
                    if(index === obj.length-1){
                        obj[index].keepTime = state.musicDuration - obj[index].time;
                    }else {
                        obj[index].keepTime = obj[index+1].time - obj[index].time -1;
                    }
                }
            });

            state.lyricsObj = [...state.lyricsObj, ...obj];

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
        },

        // 更新歌曲进度
        updateMusicProgress(state, value){
            state.musicProgress = getMin(value, 60);
            const remaining = state.musicDuration - value;
            state.musicRemaining = getMin(remaining, 60);
            // console.log(state.isPlayingMusic, value);

            state.musicProgressSec = Math.round(value);
        },

        // 将当前时长加工为px
        returnLeftPx(state){
            state.leftPx = (Math.floor(600 / Math.floor(state.musicDuration)) * (state.musicProgress.int * 60 + state.musicProgress.dec));
        },


    },
    getters: {
        // 当前时长加工
        returnMusicProgress(state){
            if(state.musicProgress.int > 10){
                return (state.musicProgress.int + ':' + state.musicProgress.dec);
            }else{
                if(state.musicProgress.dec < 10){
                    return ('0' + state.musicProgress.int + ':0' + state.musicProgress.dec);
                }else {
                    return ('0' + state.musicProgress.int + ':' + state.musicProgress.dec);
                }
            }
        },

        // 剩余时长加工
        returnMusicRemaining(state){
            if(state.musicRemaining.int > 10){
                return (state.musicRemaining.int + ':' + state.musicRemaining.dec);
            }else{
                if(state.musicRemaining.dec < 10){
                    return ('0' + state.musicRemaining.int + ':0' + state.musicRemaining.dec);
                }else {
                    return ('0' + state.musicRemaining.int + ':' + state.musicRemaining.dec);
                }
            }
        }
    },
    state: {
        playingSong: localStorage.getItem("playingSong") ? JSON.parse(localStorage.getItem("playingSong")) : {}, // 正在播放的音乐
        playingVideo: [], // 正在播放的视频
        showWindow: false, // 是否显示播放界面

        songUrl: localStorage.getItem("songUrl") ? localStorage.getItem("songUrl") : '', // 歌曲url
        isPlayingMusic: false, // 是否开始播放

        musicDuration: 0, // 歌曲时长
        musicProgressSec: 0,// 歌曲进度（秒数）
        musicProgress: {}, // 歌曲进度
        musicRemaining: {}, // 歌曲剩余时长
        isChange: false, // 是否拖动
        leftPx: 0,


        lyric: localStorage.getItem("lyric") ? JSON.parse(localStorage.getItem("lyric")) : {}, // 歌词
        lyricsObj: localStorage.getItem("lyricsObj") ? JSON.parse(localStorage.getItem("lyricsObj")) : [], // 加工后的歌词

        timeComment: localStorage.getItem("timeComment") ? JSON.parse(localStorage.getItem("timeComment")) : [], // 时间排序评论
        commentTotal: localStorage.getItem("commentTotal") ? JSON.parse(localStorage.getItem("commentTotal")) : 0, // 时间评论总数
        commentPager: 1, // 时间评论第几页

        hotComment: localStorage.getItem("hotComment") ? JSON.parse(localStorage.getItem("hotComment")) : [], // 热门排序评论

    }
}