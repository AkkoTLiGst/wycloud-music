<template>
  <div id="topNav">
<!--    <el-tabs v-model="activeName" class="navTabs">
      <el-tab-pane
          :to="navList.path"
          v-for="(item) in navList" :key="item.id"
          :label="item.name" :name="item.id"
      ></el-tab-pane>
    </el-tabs>-->
    <el-menu :default-active="$route.path" router mode="horizontal">
      <el-menu-item v-for="(item, i) in navList" :key="i" :index="item.path">
        {{ item.name }}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "t-TopNav",
  data() {
    return {
      activeName: 'first'
    }
  },
  props: {
    navList: Array
  }
}
</script>

<style scoped lang="less">
  #topNav{
    // 标题栏的默认样式
    /deep/.is-top{
      font-size: 16px;
      color: rgba(0, 0, 0, .7);
    }
    /deep/.is-top:hover{
      color: black;
    }
    // 标题栏选中时的样式
    /deep/.is-active{
      font-size: 18px;
      font-weight: bold;
    }

    /deep/.el-tabs__nav-wrap::after{
      background-color: white;
    }

    /deep/.el-menu--horizontal{
      border: 0;

    }
  }
</style>