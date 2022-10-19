<template>
  <div>
    <div id="right-login" @click="showPop" v-if="isLogin === false">
      <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" alt="图片无法显示">
      <span>未登录<i class="el-icon-caret-bottom"></i></span>
    </div>

    <div id="right-login" v-if="isLogin === true">
      <img :src="userInfo.avatarUrl" alt="图片无法显示">
      <span>{{userInfo.nickname}}<i class="el-icon-caret-bottom" @click="showUserInfo"></i></span>
      <userInfo v-show="isShowUserInfo"/>
    </div>
  </div>
</template>

<script>
  import {mapMutations, mapState} from "vuex";
  import userInfo from "@/components/common/header/login/userInfo";

  export default {
    name: "right-login",
    components: {userInfo},
    computed: {
      ...mapState('login', ['isLogin', 'userInfo', 'isShowUserInfo'])
    },
    methods: {
      ...mapMutations('login', ['showPop', 'showUserInfo'])
    }
  }
</script>

<style scoped lang="less">
  #right-login{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative; // 给userInfo定位


    img{
      width: 25px; height: 25px;
      border-radius: 50%;
    }
    span{
      font-size: 10px;
      color: #dfd3fc;
      margin-left: 8px;

      i{
        margin-left: 2px;
      }
    }
    span:hover{
      cursor: pointer;
      color: white;
    }
  }
</style>