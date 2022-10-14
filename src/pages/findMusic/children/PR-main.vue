<template>
  <div id="PR-main">
    <!-- banner -->
    <RPBanner/>
    <!-- 歌单 -->
    <RPSongList/>
  </div>
</template>

<script>
  import RPBanner from "@/components/content/findMusic/personalRecommendation/RP-banner";
  import RPSongList from "@/components/content/findMusic/personalRecommendation/RP-songList";

  export default {
    name: "PR-main",
    components: {RPBanner, RPSongList}
  }
</script>

<style scoped>
  #PR-main{
  }
</style>