<template>
  <div id="fullScreen">
    <i class="icon iconfont icon-fullscreen"></i>
  </div>
</template>

<script>
export default {
  name: "full-screen"
}
</script>

<style scoped lang="less">
  #fullScreen{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;

    i{
      color: #dfd3fc;
      font-size: 20px;
    }
  }
</style>