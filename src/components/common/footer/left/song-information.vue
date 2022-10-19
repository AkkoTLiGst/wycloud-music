<template>
  <div id="songInformation">
    <!--  初始信息展示  -->
    <div class="initial">
      <i class="icon iconfont icon-wangyiyun"></i>
      <span>暂无音乐</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "song-information"
  }
</script>

<style scoped lang="less">
  #songInformation{
    width: 200px; height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .initial{
      display: flex;
      justify-content: center;
      align-items: center;

      i{
        color: var(--themeColor);
        font-size: 40px;
      }
      span{
        margin-left: 6px;
      }
    }
  }
</style>