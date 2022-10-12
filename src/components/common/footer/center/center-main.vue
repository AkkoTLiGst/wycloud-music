<template>
  <div id="centerMain">
  <div class="centerMainTop">
      <!--  循环方式   -->
      <song-loop/>
      <!--  播放歌曲   -->
      <play-music/>
      <!--  歌词   -->
      <lyrics/>
    </div>
    <progress-bar/>
  </div>
</template>

<script>
  import playMusic from "@/components/common/footer/center/play-music";
  import progressBar from "@/components/common/footer/center/progress-bar";
  import songLoop from "@/components/common/footer/center/song-loop";
  import lyrics from "@/components/common/footer/center/lyrics";

  export default {
    name: "center-main",
    components: {playMusic, progressBar, songLoop, lyrics}
  }
</script>

<style scoped lang="less">
  #centerMain{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .centerMainTop{
      width: 200px; height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>