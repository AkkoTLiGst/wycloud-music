<template>
  <div id="footer" class="disabledSelection">
    <!--  歌曲信息  -->
    <song-information/>
    <!--  底部中间部分  -->
    <center-main/>
    <!--  底部右侧  -->
    <right-main/>
    <!-- 播放列表   -->
    <playing-song-list/>

  </div>
</template>

<script>
  import songInformation from "@/components/common/footer/left/song-information";
  import centerMain from "@/components/common/footer/center/center-main";
  import rightMain from "@/components/common/footer/right/right-main";
  import playingSongList from "@/components/common/footer/playing-song-list";
  import {mapState} from "vuex";
  export default {
    name: "f-footer",
    components: {songInformation, centerMain, rightMain, playingSongList},
    data() {
      return {
        show: true
      };
    },
    computed: {
      ...mapState('nowPlaying', ['showWindow', 'songUrl'])
    }
  }
</script>

<style scoped lang="less">
  #footer{
    width: 100%; height: 70px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid rgba(128, 128, 128, .2);
    position: relative; z-index: 3;

  }
</style>