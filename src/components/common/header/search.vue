<template>
  <div id="search">
    <el-input placeholder="搜索"
              prefix-icon="el-icon-search"
              v-model="userInput"
    ></el-input>

    <div class="hotSearchList">

    </div>
  </div>
</template>

<script>
export default {
  name: "s-search",
  data() {
    return {
      userInput: ''
    }
  },
}
</script>

<style scoped lang="less">
  #search{
    display: flex;
    height: 100%;
    align-items: center;
    margin-left: 15px;

    .el-input /deep/ .el-input__inner { // 样式穿透.el-input__inner
      height: 30px;
      background-color: rgba(0, 0, 0, .1);
      border: 0;
      border-radius: 30px 30px;
      color: white;
      font-size: 10px;
    }

    /deep/.el-input__icon{
      line-height: 30px;
    }

  }
</style>