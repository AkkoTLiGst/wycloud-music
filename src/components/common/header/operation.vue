<template>
  <div id="operation">
    <span class="icon iconfont icon-back"></span>
    <span class="icon iconfont icon-forward"></span>
  </div>
</template>

<script>
export default {
  name: "o-operation"
}
</script>

<style scoped lang="less">
  #operation{
    width: 60px; height: 100%;
    min-width: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-left: 55px;

    span{
      width: 25px; height: 25px;
      display: flex;
      align-items: center; justify-content: center;
      border-radius:  50%;
      background-color: var(--searchColor);
      color: rgba(255, 255, 255, .2);
    }
  }
</style>