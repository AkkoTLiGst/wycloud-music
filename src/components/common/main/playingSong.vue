<template>
  <transition name="show">
    <div id="playingSong" v-show="$store.state.nowPlaying.showWindow">
      <div class="songImg" :style="{'background-image': `url(${$store.state.nowPlaying.playingSong.al.picUrl})`}"></div>
      <song-lyrics/>
      <song-comment/>
      <i class="el-icon-arrow-down" @click="changeShowWindow"/>
    </div>
  </transition>
</template>

<script>
    import songLyrics from "@/components/content/playingSong/songLyrics";
  import songComment from "@/components/content/playingSong/songComment";
    import {mapMutations} from "vuex";

  export default {
    name: "playingSong",
    components: {songLyrics, songComment},
    methods: {
      ...mapMutations('nowPlaying', ['changeShowWindow'])
    }
  }
</script>

<style scoped lang="less">
  #playingSong{
    width: 100%; height: calc(100% - 70px);
    background-color: white;
    position: absolute; z-index: 2;
    top: 0;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .songImg{
      width: 100%; height: 30%;

      background-size: 100%;
      background-repeat: no-repeat;
      background-attachment: local;
      position: absolute; z-index: -1;
      -webkit-backdrop-filter: blur(500px);
      filter: blur(500px);
    }
    i{
      font-size: 25px;
      position: absolute;
      left: 40px; top: 40px;
      z-index: 10;
    }
  }
  /*进入时的起始位置 和 离开时的终端位置 的样式*/
  .show-enter, .show-leave-to{
    transform: translateY(100%);
  }
  /*进入时 和 离开时 的样式*/
  .show-enter-active, .show-leave-active{
    transition: .5s linear;
  }
  /*进入时的终点位置 和 离开时的起始位置 的样式*/
  .show-enter-to, .show-leave{
    transform: translateY(0);
  }
</style>