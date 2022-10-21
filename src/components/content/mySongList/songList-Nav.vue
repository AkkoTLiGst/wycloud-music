<template>
  <div id="songList-Nav">
    <el-menu :default-active="$route.path" router mode="horizontal" >
      <el-menu-item v-for="(item, i) in navList" :key="i" :index="item.path">
        {{ item.name }}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "songList-Nav",
  data() {
    return {
      navList: [
        {name: '歌曲列表', path: '/songList/songListList'},
        {name: '评论', path: '/songList/songListComment'},
        {name: '收藏者', path: '/songList/songListCollector'},
      ]
    }
  },
}
</script>

<style scoped lang="less">
  #songList-Nav{
    margin-top: 20px;
  }
</style>