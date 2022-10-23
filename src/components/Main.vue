<template>
  <div id="main">
    <main-aside/>
    <main-view/>
    <playingSong/>
  </div>
</template>

<script>
  import mainAside from "@/components/common/main/main-aside";
  import mainView from "@/components/common/main/main-view";
  import playingSong from "@/components/common/main/playingSong";

  export default {
    name: "m-main",
    components: {mainAside, mainView, playingSong}
  }
</script>

<style scoped lang="less">
  #main{
    width: 100%; height: calc(100% - 130px);
    display: flex;
  }
</style>