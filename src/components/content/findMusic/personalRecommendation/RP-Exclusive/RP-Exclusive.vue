<template>
  <div id="RP-Exclusive" class="RP-base">
    <span class="RP-title">独家放送</span>
    <div class="broadcast RP-son">
      <RPExclusiveItem v-for="(item, index) in list" :key="index" :item="item"/>
    </div>
  </div>
</template>

<script>
  import RPExclusiveItem from "@/components/content/findMusic/personalRecommendation/RP-Exclusive/RP-Exclusive-item";
  import {getExclusive} from "@/config/findMusic/RPConfig";

  export default {
    name: "RP-Exclusive",
    data() {
      return {
        list: []
      }
    },
    components: {RPExclusiveItem},
    created() {
      getExclusive().then(
          res => {
            this.list = res.data.result;
          }
      )
    }
  }
</script>

<style scoped lang="less">
  #RP-Exclusive{
    width: 100%;

    .broadcast{
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
</style>