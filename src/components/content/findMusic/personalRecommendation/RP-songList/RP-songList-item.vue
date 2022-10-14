<template>
    <div class="RP-song-list">
      <div class="list-img" @mouseleave="isShow=false" @mouseenter="isShow=true">
        <transition name="el-fade-in-linear">
          <div v-show="isShow" class="floating-play">
            <i class="icon iconfont icon-play"/>
          </div>
        </transition>
        <span><i class="icon iconfont icon-strokePlay"/>{{playCountS(item.playCount)}}</span>
        <img v-lazy="item.picUrl" alt="歌单图无法显示">
      </div>
      <span>{{item.name}}</span>
    </div>
</template>

<script>
  export default {
    name: "RP-songList-item",
    data() {
      return {
        isShow: false
      }
    },
    props: {
      item: Object
    },computed: {
      playCountS() {
        return function (value){
          let param = '';
          let k = 10000,
              sizes = ['', '万', '亿', '万一'],
              i;
          if(value < k){
            param = value;
          }else{
            i = Math.floor(Math.log(value) / Math.log(k));

            param = Math.trunc((value / Math.pow(k, i))) + sizes[i] + "";
          }
          return param;
        }
      }
    }
  }
</script>

<style scoped lang="less">

    // 每个歌单的样式
    .RP-song-list{
      width: 100%;

      // 图片与播放量
      .list-img{
        position: relative;

        // 播放量
        span{
          position: absolute;
          left: 69%; top: 5px;
          color: white;
          font-weight: bold;

        }
      }
      // 歌单标题
      span{
        font-size: 14px;
      }
    }
</style>