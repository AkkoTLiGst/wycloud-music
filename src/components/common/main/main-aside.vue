<template>
  <div id="mainAside" class="clearfix">
    <div class="findMusic">
      <span><i class="icon iconfont icon-yinfu"/>发现音乐</span>
    </div>
    <div>
      <span><i class="icon iconfont icon-video"/>视频推荐</span>
    </div>
    <div >
      <span><i class="icon iconfont icon-FM"/>私人FM</span>
    </div>
    <span class="myMusic">我的音乐</span>
    <div>
      <span><i class="icon iconfont icon-shoucang"/>我的歌单</span>
    </div>
    <div>
      <span><i class="icon iconfont icon-zuijinbofang"/>最近播放</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "main-aside"
  }
</script>

<style scoped lang="less">
  #mainAside{
    width: 200px; height: 100%;
    border-right: 1px solid rgba(128, 128, 128, .2);

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
        border-radius: 2px;
        font-size: 15px;

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

    .myMusic{
      font-size: 10px;
      display: block;
      margin: 20px 0 0 10px;
      color: rgba(128, 128, 128, .8);
    }
  }
</style>