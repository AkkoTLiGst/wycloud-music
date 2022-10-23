<template>
  <div id="userInfo" >
      <!--  动态、关注、粉丝、签到   -->
      <div class="userInfo-follow">
        <div class="follow-top">
          <!--动态-->
          <div class="follow-base">
            <span>{{userInfo.eventCount}}</span>
            <span>动态</span>
          </div>
          <!--关注-->
          <div class="follow-base">
            <span>{{userInfo.follows}}</span>
            <span>关注</span>
          </div>
          <!--粉丝-->
          <div class="follow-base">
            <span>{{userInfo.followeds}}</span>
            <span>粉丝</span>
          </div>
        </div>
        <!--签到-->
        <div class="follow-bottom">
          <div @click="signIn" :class="{signInIN: isSignIn}">{{signInText}}</div>
        </div>
      </div>

      <!--  会员、等级  -->
      <div class="userInfo-account userInfo-base">
        <div class="userInfo-base-son">
          <span><i class="icon iconfont icon-medal"/>等级</span>
          <span><i class="icon iconfont icon-level"/>{{userLevel}}<i class="el-icon-arrow-right"/></span>
        </div>
      </div>
      <!--  退出登录  -->
      <div class="loginOut userInfo-base" @click="logout">
        <div><i class="el-icon-switch-button"/>退出登录</div>
      </div>
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";
  import {loginOut} from "@/config/login/login";
  import {setItem} from "@/config/utils";
/*
  import {dailySignIn} from "@/config/login/userdata";
*/

export default {
    name: "userInfo",
  data() {
    return {
      isSignIn: false,
      signInText: '签到'
    }
  },
    computed: {
      ...mapState('login', ['userInfo', 'userLevel'])
    },
    methods: {
      logout(){
        alert('成功退出');
        loginOut();
        /*清空cookie*/
        setItem('userInfo', '');
        setItem('cookie', '');
        setItem('isLogin', false);
        setItem('userLevel', 0);
        /*重制vuex*/
        this.initialState()
      },
      async signIn(){
        /*const res = await dailySignIn();
        console.log(res);
        this.isSignIn = true;*/
        alert('签到接口目前有BUG');

      },
      ...mapMutations('login', ['initialState'])
    }
  }
</script>

<style scoped lang="less">
  #userInfo{
    margin-top: 10px;

    .userInfo-follow{
      margin-bottom: 10px;

      .follow-top{
        display: flex;
        justify-content: space-around;
        margin-bottom: 10px;

        .follow-base{
          display: flex;
          flex-direction: column;
          align-items: center;

          span:first-child{
            font-weight: bold;
            font-size: 18px;
          }
          span:last-child{
            font-size: 12px;
            color: var(--translucent);
          }
        }
      }

      .follow-bottom{
        display: flex;
        justify-content: center;

        div{
          border: 1px solid rgba(0, 0, 0, .1);
          padding: 5px 25px;
          border-radius: 53px;
        }

        div:hover{
          cursor: pointer;
          background-color: rgba(0, 0, 0, .1);
        }

        .signInIN{
          color: rgba(0, 0, 0, .3);
          //pointer-events: none; // 禁止单击
        }
      }
    }

    .userInfo-account{
      margin-bottom: 10px;

      span{
        font-size: 13px;
        .icon-medal{
          margin-right: 5px;
        }
        .icon-level{
          margin-right: 2px;
        }

        .el-icon-arrow-right{
          margin-left: 5px;
        }
      }
      span:last-child{
        color: var(--translucent);
      }
    }

    .loginOut{
      div{
        font-size: 13px;
        i{margin-right: 6px; margin-left: 1px}
      }
    }

    .userInfo-base{
      padding: 10px 5px;
      border-radius: 10px;

      .userInfo-base-son{
        display: flex;
        justify-content: space-between;

      }

      &:hover{
        cursor: pointer;
        background-color: var(--hoverGray);
      }
    }
  }
</style>