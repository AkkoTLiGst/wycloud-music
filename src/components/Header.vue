<template>
  <div id="header" :style="{backgroundColor: $store.state.color.themeColor}">
    <div class="header-left">
      <logo/>
      <operation/>
      <search/>
    </div>
    <div class="header-right">
      <login/>
      <skins/>
      <full-screen/>
    </div>
  </div>
</template>

<script>
  import logo from "@/components/common/header/logo";
  import operation from "@/components/common/header/operation";
  import search from "@/components/common/header/search";
  import login from "@/components/common/header/login/login";
  import skins from "@/components/common/header/skins";
  import fullScreen from "@/components/common/header/full-screen";

  export default {
    name: "h-header",
    components: {logo, operation, search, login, skins, fullScreen},
  }
</script>

<style scoped lang="less">
  #header{
    width: 100%; height: 60px;
    display: flex;
    justify-content: space-between;

    div{
      display: flex;
    }
    .header-right{
      width: 150px;
      display: flex;
      justify-content: space-between;
      margin-right: 30px;
    }
  }
</style>