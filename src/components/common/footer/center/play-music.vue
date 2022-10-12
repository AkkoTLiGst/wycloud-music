<template>
  <div id="playMusic">
    <div><i class="icon iconfont icon-shangyishou"/></div>
    <div class="play"><i class="icon iconfont icon-play"/></div>
    <div><i class="icon iconfont icon-xiayishou"/></div>
  </div>
</template>

<script>
  export default {
    name: "play-music"
  }
</script>

<style scoped lang="less">
  #playMusic{
    width: 125px; height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div{
      width: 25px; height: 25px;
      display: flex;
      justify-content: center;
      align-items: center;

      i{
        font-size: 25px;
      }
    }
    .play{
      width: 35px; height: 35px;
      background-color: #f4f4f4;
      border-radius: 35px;
    }
  }
</style>