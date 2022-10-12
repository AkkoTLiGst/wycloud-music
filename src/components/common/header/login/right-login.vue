<template>
  <div id="right-login">
    <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" alt="图片无法显示">
    <span>未登录<i class="el-icon-caret-bottom"></i></span>
  </div>
</template>

<script>
  export default {
    name: "right-login"
  }
</script>

<style scoped lang="less">
  #right-login{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;


    img{
      width: 25px; height: 25px;
    }
    span{
      font-size: 10px;
      color: #dfd3fc;
      margin-left: 8px;
    }
  }
</style>