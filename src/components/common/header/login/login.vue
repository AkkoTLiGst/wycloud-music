<template>
  <div id="login">
    <right-login/>
    <login-pop/>
  </div>
</template>

<script>
  import rightLogin from "@/components/common/header/login/right-login";
  import loginPop from "@/components/common/header/login/login-pop";

  export default {
    name: "l-login",
    components: {rightLogin, loginPop},
    data() {
      return {
      }
    },
    methods: {

    }
  }
</script>

<style scoped lang="less">

</style>