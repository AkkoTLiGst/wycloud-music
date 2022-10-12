<template>
  <div id="progress">
    <span>00:00</span>
    <div class="progressMain">
      <!--   总进度条   -->
      <div class="progressBar">
        <!--  进度条进度  -->
        <div class="activeBarr"></div>
      </div>
      <!-- 圆点 -->
      <div class="radiusBtn"></div>
      <!-- 显示鼠标当前进度 -->
      <div class="tooltip"></div>
    </div>
    <span>00:00</span>
  </div>
</template>

<script>
export default {
  name: "progress-bar",
  data() {
    return {
      sliderValue: 0
    }
  },
}
</script>

<style scoped lang="less">
  #progress{
    display: flex;
    justify-content: center;

    .progressMain{
      width: 600px;
    }
  }
</style>