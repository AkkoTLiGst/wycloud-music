<template>
  <div id="PR-MV" class="RP-base">
    <span class="RP-title">推荐MV</span>
    <div class="PR-MV-item RP-son">
      <PRItem v-for="(item, index) in list" :key="index" :item="item"/>
    </div>
  </div>
</template>

<script>
  import PRItem from "@/components/content/findMusic/personalRecommendation/PR-MV/PR-item";
  import {getPrMv} from "@/config/findMusic/RPConfig";

  export default {
    name: "PR-MV",
    data() {
      return {
        list: []
      }
    },
    components: {PRItem},
    created() {
      getPrMv().then(
          res => {
            this.list = res.data.result;
          }
      )
    }

  }
</script>

<style scoped lang="less">
  #PR-MV{
    width: 100%;

    .PR-MV-item{
      display: flex;
      justify-content: space-between;
    }
  }
</style>