<template>
  <div id="songList-Banner">
    <!--  歌单图像  -->
    <div class="coverImg">
      <img :src="selectedList.coverImgUrl" alt="">
    </div>
    <!--  banner右侧  -->
    <div class="songList-banner-left">
      <div class="listTitle">
        <span :style="{ color: $store.state.color.themeColor,
                        borderColor: $store.state.color.themeColor}">
          歌单
        </span>
        <span>{{selectedList.name}}</span>
      </div>
      <div class="listAuthor base">
        <img :src="selectedList.creator.avatarUrl" alt="图片无法显示"/>
        <span :style="{ color: $store.state.color.themeColor}">{{selectedList.creator.nickname}}</span>
        <span>{{songListCreateDate}}创建</span>
      </div>
      <div class="playAndShare base">
        <div class="play" :style="{ backgroundColor: $store.state.color.themeColor}"><i class="icon iconfont icon-play"/>播放全部</div>
        <div class="collect"><i class="icon iconfont icon-collect"/>收藏</div>
        <div class="share"><i class="icon iconfont icon-share"/>分享</div>
        <div class="download"><i class="icon iconfont icon-download"/>下载全部</div>
      </div>
      <div class="listMsg base">
        <span>歌曲 : {{selectedList.trackCount}}</span>
        <span>播放 : {{selectedList.playCount}}</span>
      </div>
    </div>

  </div>
</template>

<script>
import {mapGetters, mapState} from "vuex";

  export default {
    name: "songList-banner",
    computed: {
      ...mapState('userSongList', ['selectedList']),
      ...mapGetters('userSongList', ['songListCreateDate'])
    }
  }
</script>

<style scoped lang="less">
  #songList-Banner{
    display: flex;
    .coverImg{
      img{
        width: 183px; height: 183px;
      }
    }
    .songList-banner-left{
      margin-left: 15px;
      .listTitle{
        display: flex;
        align-items: center;
        span:first-child{
          width: 38px; height: 22px;
          display: flex; align-items: center; justify-content: center;
          font-size: 15px;
          border: 1px solid;
          border-radius: 3px;
          &:hover{cursor: default}
        }

        span:last-child{
          font-size: 20px;
          font-weight: bold;
          margin-left: 5px;
        }
      }
    }
    .listAuthor{
      display: flex;
      align-items: center;
      img:hover,span:hover{
        cursor: pointer;
      }
      img{
        width: 25px; height: 25px;
        border-radius: 50%;
      }
      span{
        font-size: 12px;
        margin-left: 8px;
      }
    }
    .playAndShare{
      display: flex;
      div{
        border: 1px solid rgba(128, 128, 128, .4);
        width: 106px; height: 30px;
        display: flex; align-items: center; justify-content: center;
        font-size: 14px;
        border-radius: 106px;
        margin-right: 10px;
        padding-right: 5px;
        &:hover{cursor: pointer; background-color: rgba(128, 128, 128, .1)}

        i{
          margin-right: 5px;
        }
      }
      .play{
        color: white;
      }
    }
    .listMsg{
      font-size: 14px;
      color: var(--translucent2);
      span{margin-right: 15px; &:hover{cursor: default}}
    }


    .base{
      margin-top: 15px;
    }
  }
</style>