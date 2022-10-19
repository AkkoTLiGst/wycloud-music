<template>
  <div id="HQ-main" class="mainW">
    <HQBanner/>
    <HQClassification/>
    <HQListMain/>
    <HQListPagination/>
  </div>
</template>

<script>
  import {getAllTags, getHotTags, getTopHQ} from "@/config/findMusic/HQConfig";
  import HQBanner from "@/components/content/findMusic/highQuality/HQ-Banner";
  import HQClassification from "@/components/content/findMusic/highQuality/HQ-Classification/HQ-Classification";
  import HQListMain from "@/components/content/findMusic/highQuality/HQ-List/HQ-List-Main/HQ-List-Main";
  import HQListPagination
    from "@/components/content/findMusic/highQuality/HQ-List/HQ-List-Pagination/HQ-List-Pagination";
  import {mapMutations} from "vuex";

  export default {
    name: "HQ-main",
    data() {
      return {
      }
    },
    created() {
      /*初次获取所有信息*/
      // 热门歌单标签
      getHotTags().then(
          res => {
            this.$store.state.highQuality.hotTags = res.data.tags;
          }
      );

      // 精品歌单第一个
      getTopHQ(this.$store.state.highQuality.selected).then(
          res => {
            this.$store.state.highQuality.hqTop = res.data.playlists[0];
          }
      );

      // 所有歌单标签
      getAllTags().then(
          res => {
            this.$store.state.highQuality.allTags = res.data.sub;
          }
      );

      // 网友精选歌单
      this.getPager(this.$store.state.highQuality.pager);
    },
    components: {HQBanner, HQClassification, HQListMain, HQListPagination},
    methods: {
      ...mapMutations('highQuality', ['getPager'])
    }
  }
</script>

<style scoped lang="less">
  #HQ-main{
    width: 100%;
  }
</style>