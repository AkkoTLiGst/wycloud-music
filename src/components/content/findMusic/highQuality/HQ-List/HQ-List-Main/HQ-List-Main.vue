<template>
  <div id="HQ-List-Main">
    <div class="HQ-ListItem">
      <RPSongListItem v-for="(item, index) in list" :key="index" :item="item" :father="'HQ-List-Main'"/>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex";
  import RPSongListItem from "@/components/content/findMusic/personalRecommendation/RP-songList/RP-songList-item";

  export default {
    name: "HQ-List-Main",
    data() {
      return {
        list: []
      }
    },
    components: {RPSongListItem},
    computed: {
      ...mapState('highQuality', ['playList'])
    },
    mounted() {
      setTimeout(()=>{
        this.list = this.$store.state.highQuality.playList;
      }, 500);
    },
    watch: {
      playList(){
        this.list = this.playList;
      }
    }
  }
</script>

<style scoped lang="less">
  #HQ-List-Main{
    width: 100%;

    .HQ-ListItem{
      width: 100%;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      /*grid-template-rows: repeat(10, 1fr);*/
      grid-column-gap: 2.5%;
      grid-row-gap: 15px;

      margin-top: 20px;
    }
  }
</style>