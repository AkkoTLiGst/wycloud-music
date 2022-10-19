<template>
 <div id="findMusicMain">
    <!-- 顶部导航条 -->
    <TopNav :navList="navList"/>
    <!--  展示区  -->
    <div class="music-content main-view-baseW">
      <transition name="el-fade-in-linear">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
 </div>
</template>

<script>
  import TopNav from "@/components/common/main/viewChildren/TopNav";

  export default {
    name: "f-findMusic",
    data() {
      return {
        navList: [
          {name: '个性推荐', path: '/findMusic/prMain', id: 'first'},
          {name: '歌单', path: '/findMusic/HQMain', id: 'second'},
          {name: '排行榜', path: '', id: 'third'},
          {name: '歌手', path: '', id: 'fourth'},
          {name: '最新音乐', path: '', id: 'fifth'}
        ]
      }
    },
    components: {TopNav}
  }
</script>

<style scoped lang="less">
  #findMusicMain{
    .music-content{
      //overflow-y: scroll;
    }
  }
</style>