<template>
  <div id="RP-songList" class="RP-base">
    <span class="RP-title">推荐歌单</span>
    <div class="RP-song RP-son">
      <RPSongListItem v-for="(item, index) in list" :key="index" :item="item" :father="'RP-songList'"/>
    </div>
  </div>
</template>

<script>
  import {getRPSongList} from "@/config/findMusic/RPConfig";
  import RPSongListItem from "@/components/content/findMusic/personalRecommendation/RP-songList/RP-songList-item";

  export default {
    name: "RP-songList",
    data() {
      return {
        list: []
      }
    },
    components: {RPSongListItem},
    created() {
      getRPSongList(10).then(
          res => {
            this.list = res.data.result;
          }
      );
    }
  }
</script>

<style scoped lang="less">
  #RP-songList{
    width: 100%;

    // 推荐歌单整体
    .RP-song {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: 50% 50%;
      grid-column-gap: 2.5%;
      grid-row-gap: 15px;
    }

  }
</style>