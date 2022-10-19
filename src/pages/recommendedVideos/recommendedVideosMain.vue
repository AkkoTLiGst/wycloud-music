<template>
  <div id="recommendedVideosMain">
    <!-- 顶部导航条 -->
    <TopNav :nav-list="navList"/>

    <!-- 展示区 -->
    <div class="main-view-baseW">
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
    name: "recommendedVideosMain",
    data() {
      return {
        navList: [
          {name: '视频', path: '/recommendedVideos/videos', id: 'first'},
          {name: 'MV', path: '/recommendedVideos/MV', id: 'second'},
        ],
      }
    },
    components: {TopNav}
  }
</script>

<style scoped>

</style>