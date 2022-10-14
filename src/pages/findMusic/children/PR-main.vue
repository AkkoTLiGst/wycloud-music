<template>
  <div id="PR-main" class="mainW">
    <!-- banner -->
    <RPBanner/>
    <!-- 歌单 -->
    <RPSongList/>
    <!-- 个性推荐 -->
    <RPExclusive/>
    <!-- 最新音乐 -->
    <RPLatestMusic/>
    <!-- 推荐MV -->
    <PRmv/>

  </div>
</template>

<script>
  import RPBanner from "@/components/content/findMusic/personalRecommendation/RP-banner";
  import RPSongList from "@/components/content/findMusic/personalRecommendation/RP-songList/RP-songList";
  import RPExclusive from "@/components/content/findMusic/personalRecommendation/RP-Exclusive/RP-Exclusive";
  import RPLatestMusic from "@/components/content/findMusic/personalRecommendation/RP-latest/RP-latest-music";
  import PRmv from "@/components/content/findMusic/personalRecommendation/PR-MV/PR-MV";
  export default {
    name: "PR-main",
    components: {RPBanner, RPSongList, RPExclusive, RPLatestMusic, PRmv}
  }
</script>

<style scoped>
  #PR-main{
  }
</style>