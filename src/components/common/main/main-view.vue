<template>
  <div id="mainView">
    <!--  main路由展示区  -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "main-view"
  }
</script>

<style scoped lang="less">
  #mainView{
    width: 100%;
    padding: 0 30px;
    min-width: 830px;
    overflow-y: scroll;
  }
</style>