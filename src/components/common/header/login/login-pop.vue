<template>
  <div id="loginPop" v-if="$store.state.login.isShowPop">
    <div class="closeLoginPop" @click="showPop">
        <i class="el-icon-close"/>
    </div>
    <el-card shadow="always" body-style="width: 380px; height: 530px;" >
      <!-- 扫码登录 -->
      <div class="QRCodeLogin" v-if="howLogin === 1">
        <div class="qrCode">
          <span>扫码登录</span>
          <img :src="base64"/>
          <span>使用<a href="https://music.163.com/#/download">网易云APP</a>扫码登录</span>
        </div>

        <div class="qrMsg" v-show="failQr === true || successQr === true">
          <span v-show="failQr" @click="createQr">二维码失效，点击刷新</span>
          <span v-show="successQr">扫码成功，请确认</span>
        </div>

        <span @click="changeLoginModel">选择其他登录模式 <i class="el-icon-arrow-right"/></span>
      </div>

      <!-- 游客登录 -->
      <div class="visitorLogin" v-if="howLogin === 2">
        <div @click="createVisitor"><i class="icon iconfont icon-visitors"></i>点击游客登录</div>
        <span @click="changeLoginModel">选择其他登录模式 <i class="el-icon-arrow-right"/></span>
      </div>

    </el-card>
  </div>
</template>

<script>

  import {mapMutations, mapState} from "vuex";
  import {checkQrCode, createQrCode, getQrKey} from "@/config/login/login";
  import { userDetail, userID} from "@/config/login/userdata";
  import {setItem} from "@/config/utils";

  export default {
    name: "login-pop",
    data() {
      return {
        howLogin: 2, // 展示哪种登录方式，1: 二维码， 2: 游客
        base64: '',  // 二维码
        timer: '', // 定时器
        successQr: false, // 扫码是否成功
        failQr: false // 二维码是否失效
      }
    },
    computed: {
      ...mapState('login', ['isShowPop'])
    },
    watch: {
      isShowPop(){
        /* 当显示登录框并是二维码界面时，开始获取二维码 */
        if(this.howLogin === 1 && this.isShowPop === true){
          this.createQr();
        }
        if(this.isShowPop === false){
          clearInterval(this.timer);
        }
      }
    },
    methods: {
      /*切换登录模式*/
      changeLoginModel(){
        if(this.howLogin === 1){
          // 如果是二维码，切换成游客并清除定时器
          this.howLogin = 2;
          clearInterval(this.timer);
        }else {
          // 如果是游客，切换成二维码并创建二维码
          this.howLogin = 1;
          this.createQr();
        }
      },
      ...mapMutations('login', ['changeIsLogin', 'updateUserInfo', 'updateUserLevel', 'showPop']),
      createVisitor(){
        alert('游客登录成功，注意：大部分功能受限');
      },
      async createQr(){
        /* 获取二维码key */
        let keyRes = await getQrKey();
        const key = keyRes.data.data.unikey;
        // console.log(key);

        /* 根据 key 生成二维码 base64信息 */
        let qrcodeRes = await createQrCode(key);
        this.base64 = qrcodeRes.data.data.qrimg;
        // console.log(this.base64);

        /* 监测二维码状态 */
        this.timer = setInterval(async ()=>{
          let statusRes = await checkQrCode(key);
          let statusCode = statusRes.data.code;
          /*失效*/
          if(statusCode === 800){
            clearInterval(this.timer);
            this.failQr = true;
          }

          /*待确认*/
          if(statusCode === 802){
            this.successQr = true;
          }

          /*成功*/
          if(statusCode === 803){
            // 登录成功会返回cookie
            clearInterval(this.timer); // 登录成功清除定时器
            setItem('cookie', statusRes.cookie) // 将cookie缓存本地
            this.getUid(); // 存储信息
            this.successQr = false;
          }
        }, 2000);
      },

      /* 获取用户账号uid并根据uid获取用户信息 */
      getUid(){
        userID().then(
            res => {
              // console.log("UID",res);
              let uid = res.data.account.id;

              /* 获取用户信息 */
              userDetail(uid).then(
                  res1 => {
                    // console.log("用户信息", res1);
                    this.saveUserData(res1);
                  }
              );

              /*dailySignIn().then(
                  res => {
                    this.saveUserIsSignIn(res);
                  }
              );*/
            }
        );
      },

      /* 存储用户信息 */
      saveUserData(res){
        this.changeIsLogin(true); // 切换登录状态，关闭登录框
        setItem('isLogin', true); // 登录状态缓存本地

        this.updateUserInfo(res.data.profile); // 用户信息发送vuex
        setItem('userInfo', res.data.profile); // 用户信息缓存本地

        this.updateUserLevel(res.data.level); // 用户等级发送vuex
        setItem('userLevel', res.data.level); // 用户等级存储本地

        window.location.reload(); // 刷新界面
      },

      /* 存储用户是否签到 */
      /*saveUserIsSignIn(res){
        console.log(res);
      }*/
    }
  }
</script>

<style scoped lang="less">
  #loginPop{
    position: absolute;
    left: 40%; top: 20%;
    z-index: 10000;

    .closeLoginPop{
      position: absolute;
      right: 15px; top: 15px;
      font-size: 30px;

      &:hover{
        cursor: pointer;
      }
    }

    .QRCodeLogin{
      width: 100%; height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      .qrCode{
        display: flex;
        flex-direction: column;
        align-items: center;

        img{
          width: 180px;
        }

        span{
          margin-top: 10px;
          font-size: 14px;

          a{
            color: var(--themeColor);
          }
        }

        span:first-child{
          font-size: 30px;
          margin-bottom: 20px;
        }
      }

      .qrMsg{
        width: 180px; height: 180px;
        position: absolute;
        left: 101px; top: 140px;
        background-color: rgba(0, 0, 0, .8);

        span{
          color: white;
          font-size: 14px;
          display: block;
          width: 100%; height: 100%;
          display: flex; justify-content: center; align-items: center;
        }
        span:hover, &:hover{
          cursor: pointer;
        }
      }

      span{
        font-size: 12px;
        cursor: pointer;
      }

    }

    .visitorLogin{
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center; align-items: center;


      span{
        font-size: 12px;
        cursor: pointer;
      }

      div{
        width: 150px; height: 100px;
        text-align: center;
        line-height: 100px;
        i{margin-right: 10px}
      }
      div:hover{
        cursor: pointer;
      }
    }
  }
</style>