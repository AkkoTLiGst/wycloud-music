<template>
  <div class="header-logo disabledSelection">
    <span class="icon iconfont icon-wangyiyun"></span>
    <a href="#">CloudMusic</a>
  </div>
</template>

<script>
export default {
  name: "l-logo"
}
</script>

<style scoped lang="less">
  .header-logo{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 15px;

    .icon-wangyiyun{
      font-size: 40px;
      color: white;
    }
    a{
      font-size:20px;
      color: white;
      width: 100%; height: 60px;
      display: block;
      line-height: 60px;
      margin-left: 5px;
    }
  }
</style>