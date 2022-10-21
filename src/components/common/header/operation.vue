<template>
  <div id="operation">
    <span class="icon iconfont icon-back" @click="backJump"></span>
    <span class="icon iconfont icon-forward" @click="forwardJump"></span>
  </div>
</template>

<script>
export default {
  name: "o-operation",
  methods: {
    backJump(){
      this.$router.back();
    },
    forwardJump(){
      this.$router.forward();
    }
  }
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
      background-color: rgba(0, 0, 0, .1);
      color: white;
    }
  }
</style>