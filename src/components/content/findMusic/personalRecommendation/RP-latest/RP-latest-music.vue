<template>
  <div id="RP-latest-music" class="RP-base">
    <span class="RP-title">最新音乐</span>
    <div class="music RP-son">
      <RPLatestItem v-for="(item, index) in list" :key="index" :item="item"/>
    </div>
  </div>
</template>

<script>
  import RPLatestItem from "@/components/content/findMusic/personalRecommendation/RP-latest/RP-latest-item";
  import {getLatest} from "@/config/findMusic/RPConfig";

  export default {
    name: "RP-latest-music",
    data() {
      return {
        list: []
      }
    },
    components: {RPLatestItem},
    created() {
      getLatest(12).then(
          res => {
            this.list = res.data.result;
          }
      )
    }
  }
</script>

<style scoped lang="less">
  #RP-latest-music{
    .music{
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 30%);
      grid-template-rows: repeat(4, 1fr);
      grid-column-gap: 5%;
      grid-row-gap: 15px;
    }
  }
</style>