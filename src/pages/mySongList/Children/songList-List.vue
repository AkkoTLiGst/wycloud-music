<template>
  <div id="songList-List">
    <div class="infinite-list-wrapper">
      <ul class="list-top">
        <li>
          <div class="operate">操作</div>
          <div class="title">标题</div>
          <div class="singer">歌手</div>
          <div class="album">专辑</div>
          <div class="time">时间</div>
        </li>
      </ul>
      <ul class="list"
          v-infinite-scroll="load" infinite-scroll-disabled="disabled"
          infinite-scroll-distance="1"
      > <!--注意：infinite-scroll-distance="0" 必须设置，并且必须为0-->
        <li v-for="(item, index) in allSong" class="list-item" @dblclick="getPlaying(item)" :key="index">
          <div class="operate">
            {{index+1}}
            <div>
              <span class="icon iconfont icon-redHeart" :style="{color: $store.state.color.themeColor}"></span>
              <i class="icon iconfont icon-download"/>
            </div>
          </div>
          <div class="title">{{item.name}}</div>
          <div class="singer">{{item.ar[0].name}}</div>
          <div class="album">{{item.al.name}}</div>
          <div class="time">{{songTime(index)}}</div>
        </li>
      </ul>
      <p v-if="loading">加载中...</p>
      <p v-if="noMore">没有更多了</p>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapState} from "vuex";
import {getAllSong, getComment, getLyric} from "@/config/songlist/userSongList";
import {setItem} from "@/config/utils";

  export default {
    name: "songList-List",
    data () {
      return {
        loading: false
      }
    },
    computed: {
      noMore () {
        return this.allSong.length >= this.selectedList.trackCount;
      },
      disabled () {
        return this.loading || this.noMore
      },
      ...mapState('userSongList', ['allSong', 'selectedList', 'limit' , 'offset']),
      ...mapState('nowPlaying', ['playingSong', 'lyric', 'timeComment', 'hotComment', 'commentTotal', 'commentPager', 'lyricsObj']),
      ...mapGetters('userSongList', ['songTime'])
    },
    methods: {
      /*每次滑到底的时候会被14行调用该函数*/
      load () {
        // console.log(1)
        this.loading = true
        setTimeout(async () => {
          /*
          * 思路：
          *     初次加载mySongList-Main的时候获取歌单的前100首
          *     每次滑倒底部的时候，触发addOffset，使offset偏移量增加100（初始值为0）
          *     （下面假设只触发一次addOffset）
          *     然后getAllSong() 根据新的offset偏移量(100)获取新的100首歌曲
          *     然后将新的100首歌曲和初始的前100首合并数组
          *     然后页面就会继续加载新的100首歌
          * */
          this.addOffset();
          const newList = await getAllSong(this.selectedList.id, this.limit, this.offset);
          this.updateAllSong(newList.data.songs);
          setItem('allSong', this.allSong);
          this.loading = false
        }, 2000)
      },
      ...mapMutations('userSongList', ['addOffset', 'updateAllSong']),
      ...mapMutations('nowPlaying', ['updatePlayingSong', 'updateLyric', 'updateHotComment', 'updateTimeComment', 'updateTotalCount', 'rewriteLyrics']),
      async getPlaying(item){
        await this.updatePlayingSong(item); // 获取正在播放
        setItem('playingSong', this.playingSong); // 正在播放写入cookie

        // axios获取歌词
        const lyricRes = await getLyric(this.playingSong.id);
        // console.log('歌词res',lyricRes.data.lrc);
        setItem('lyric', lyricRes.data.lrc); // 歌词写入cookie
        await this.updateLyric(lyricRes.data.lrc); // 歌词写入vuex

        // 加工歌词
        this.rewriteLyrics();
        setItem('lyricsObj', this.lyricsObj); // 加工后的歌词写入cookie


        // 获取热门评论
        const hotCommentRes = await getComment(this.playingSong.id, 0, 1, 10, 2);
        // console.log('热门评论res', hotCommentRes.data.data.comments);
        setItem('hotComment', hotCommentRes.data.data.comments); // 热评写入cookie
        this.updateHotComment(hotCommentRes.data.data.comments); // 热评写入vuex

        // 存储评论总数
        setItem('commentTotal', hotCommentRes.data.data.totalCount); // 评论总数写入cookie
        this.updateTotalCount(hotCommentRes.data.data.totalCount); // 评论总数写入vuex


        // 获取时间评论
        const timeCommentRes = await getComment(this.playingSong.id, 0, this.commentPager, 20, 3);
        // console.log('时间评论res', timeCommentRes.data.data.comments);
        setItem('timeComment', timeCommentRes.data.data.comments); // 时评写入cookie
        this.updateTimeComment(timeCommentRes.data.data.comments); // 时评写入vuex
      }
    }
  }
</script>

<style scoped lang="less">
  #songList-List{
    margin-top: 20px;
    .infinite-list-wrapper{
      ul{
        li{
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          height: 26px;
          border-radius: 2px;
          color: var(--translucent);

          .operate{width: 100px}
          .title{width: 35%}
          .singer{width: 17%}
          .album{width: 23%}
          .time{width: 90px}

          div{
            overflow: hidden;  /*超出部分隐藏*/
            white-space: nowrap;  /*禁止换行*/
            text-overflow: ellipsis; /*省略号*/
          }

        }
      }

      /*列表表名*/
      .list-top{
        li{
          height: 26px;
          .operate{padding-left: 50px}
        }
      }

      /*列表内容*/
      .list{
        li:nth-last-child(even){
          background-color: rgba(211, 211, 211, .2);
        }
        li{
          height: 34px;
          padding: 8px 0;
        }
        li:hover{
          background-color: rgba(211, 211, 211, .3);
          cursor: pointer;
        }
        .operate{
          display: flex;
          justify-content: space-between;
          padding-left: 30px;
          color: rgba(0, 0, 0, .3);
          i{margin-left: 10px}
        }
        .title{color: black}
      }
    }
  }
</style>