<template>
  <div id="HQ-Banner">
    <!--  用于展示背景  -->
    <div class="cover-bgImg" :style="{backgroundImage: 'url(' + cover + ')'}"></div>
    <!--  精品歌单头像  -->
    <img v-lazy="$store.state.highQuality.hqTop.coverImgUrl" class="coverImg" alt="图片无法显示"/>
    <!--  精品歌单描述  -->
    <div class="coverMsg">
      <div class="coverMsg-top">
        <i class="icon iconfont icon-hg"/>
        精品歌单
      </div>
      <div class="coverMsg-bottom">
        {{$store.state.highQuality.hqTop.name}}
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "HQ-Banner",
    data() {
      return {
        cover: ''
      }
    },
    updated() {
      // 背景图
      this.cover = this.$store.state.highQuality.hqTop.coverImgUrl
    }
  }
</script>

<style scoped lang="less">
  #HQ-Banner{
    width: 100%; height: 170px;
    padding: 15px;
    display: flex;
    margin-top: 20px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, .3);
    overflow: hidden;
    position: relative; // 给cover-bgImg定位用

    .cover-bgImg{
      width: 100%; height: 100%;
      background-position: center;
      background-size: cover;

      position: absolute;
      top: 0; left: 0;
      z-index: -1;

      // 毛玻璃效果
      -webkit-backdrop-filter: blur(5px);
      filter: blur(20px);
    }
    img {
      height: 100%;
    }
    .coverMsg{
      margin-left: 10px;

      .coverMsg-top{
        width: 100px;
        color: #c79351;
        border: 1px solid #c79351;
        text-align: center;
        padding: 5px;
        border-radius: 100px;
        font-size: 13px;

        margin-top: 20px;
      }

      .coverMsg-bottom{
        margin-top: 15px;
        color: white;
      }

    }
  }
</style>