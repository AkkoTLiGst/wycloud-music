<template>
  <div id="songInformation">
    <!--  初始信息展示  -->
    <div class="initial" v-if="Object.keys(playingSong).length === 0">
      <i @click="changeShowWindow" class="icon iconfont icon-wangyiyun" :style="{color: $store.state.color.themeColor}"></i>
      <span>暂无音乐</span>
    </div>

    <div class="song" v-if="Object.keys(playingSong).length !== 0">
      <div class="song-msg">
        <div class="song-left" @click="changeShowWindow" >
          <i :class="{'el-icon-arrow-up': showWindow === false, 'el-icon-arrow-down': showWindow === true}" />
          <img class="musicPic" :src="playingSong.al.picUrl" alt="无法显示"/>
        </div>
        <div class="song-right">
          <span>{{playingSong.name}}</span>
          <span>{{playingSong.ar[0].name}}</span>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";

  export default {
    name: "song-information",
    computed: {
      ...mapState('nowPlaying', ['playingSong', 'showWindow'])
    },
    methods: {
      ...mapMutations('nowPlaying', ['changeShowWindow'])
    }
  }
</script>

<style scoped lang="less">
  #songInformation{
    width: 250px; height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .initial{
      display: flex;
      justify-content: center;
      align-items: center;

      i{
        font-size: 40px;
      }
      span{
        margin-left: 6px;
      }
    }
  }
  .song{
    width: 250px;height: 100%;
    display: flex;
    align-items: center; justify-content: center;
    position: relative;
    .song-msg{
      display: flex;
      align-items: center; justify-content: center;
      .song-left{
        i{
          width: 50px; height: 50px;
          font-size: 20px;
          color: transparent;
          line-height: 50px; text-align: center;
          display: block;
          border-radius: 5px;
          position: absolute;
        }
        i:hover{
          color: white;
          background-color: var(--translucent);
          backdrop-filter: blur(1px)
        }
        .musicPic{
          height: 50px;
        }
      }
      .song-right{
        display: flex;
        flex-direction: column;
        margin-left: 8px;
        span{
          width: 155px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        span:last-child{
          font-size: 13px;
        }
      }
    }
  }

</style>