<template>
  <div id="main">
    <main-aside/>
    <main-view/>
  </div>
</template>

<script>
  import mainAside from "@/components/common/main/main-aside";
  import mainView from "@/components/common/main/main-view";

  export default {
    name: "m-main",
    components: {mainAside, mainView}
  }
</script>

<style scoped lang="less">
  #main{
    width: 100%; height: calc(100% - 130px);
  }
</style>