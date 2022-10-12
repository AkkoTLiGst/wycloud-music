<template>
  <div id="volume">
    <!--  音量条  -->
    <div class="v-progress"></div>
    <!-- 音量图标   -->
    <div class="voice">
      <i class="icon iconfont icon-yinlianggao"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-volume"
}
</script>

<style scoped lang="less">
  #volume{
    width: 30px; height: 30px;

    i{
      font-size: 25px;
      font-weight: bold;
    }
  }
</style>