<template>
  <div id="mainAside" class="clearfix">
    <div class="publicList">
      <!--登录前-->
      <div v-for="(item, index) in asideNavItem[0]" :key="index">
        <router-link
            :to="item.path"
            tag="span"
            active-class="active"
        ><i :class="item.iconfont"/>{{item.name}}</router-link>

      </div>
      <span class="myMusic">我的音乐</span>
      <div v-for="(item) in asideNavItem[1]" :key="item.name">
        <router-link
            :to="item.path"
            tag="span"
            active-class="active"
        ><i :class="item.iconfont"/>{{item.name}}</router-link>
      </div>

      <!--登陆后-->
    </div>
  </div>
</template>

<script>
  export default {
    name: "main-aside",
    data() {
      return {
        asideNavItem: [
          [
            {name: '发现音乐', path:'/findMusic', iconfont: 'icon iconfont icon-yinfu'},
            {name: '视频推荐', path:'/recommendedVideos', iconfont: 'icon iconfont icon-video'},
            {name: '私人FM', path:'/privateFM', iconfont: 'icon iconfont icon-FM'}
          ],
          [
            {name: '我的歌单', path:'/mySongList', iconfont: 'icon iconfont icon-shoucang'},
            {name: '最近播放', path:'/recentlyPlayed', iconfont: 'icon iconfont icon-zuijinbofang'},
          ]
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  #mainAside{
    width: 200px; height: 100%;
    min-width: 127px;
    border-right: 1px solid rgba(128, 128, 128, .2);

    .publicList{
      div{
        width: 100%; height: 45px;
        //border: 1px solid red;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 5px 0 10px;

        span{
          width: 100%; height: 35px;
          line-height: 35px;
          border-radius: 4px;
          font-size: 15px;
          padding-left: 5px;

          i{
            margin-right: 5px;
          }
        }
        span:hover{
          background-color: #f5f5f6;
        }
      }
      .findMusic{
        margin-top: 10px;
      }
    }


    .myMusic{
      font-size: 10px;
      display: block;
      margin: 20px 0 0 10px;
      color: rgba(128, 128, 128, .8);
    }
  }
  .active{
    background-color: #f5f5f6;
    font-weight: bold;
  }
</style>