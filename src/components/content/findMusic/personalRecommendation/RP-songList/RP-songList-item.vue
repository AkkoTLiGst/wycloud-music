<template>
  <div>
    <!-- 个性推荐 -->
    <div class="RP-song-list" v-if="father === 'RP-songList'">
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

    <!-- 歌单 -->
    <div class="RP-song-list" v-if="father === 'HQ-List-Main'">
      <div class="list-img" @mouseleave="isShow=false" @mouseenter="isShow=true">
        <transition name="el-fade-in-linear">
          <div v-show="isShow" class="floating-play">
            <i class="icon iconfont icon-play"/>
          </div>
        </transition>
        <div class="author">
          <i class="el-icon-service"/>
          {{author}}
        </div>
        <span><i class="icon iconfont icon-strokePlay"/>{{playCountS(item.playCount)}}</span>
        <img v-lazy="item.coverImgUrl" alt="歌单图无法显示">
      </div>
      <span>{{item.name}}</span>
    </div>
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
      item: Object,
      father: String
    },
    computed: {
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
      },
      author(){
        if(this.item.creator.description !== ''){
          return this.item.creator.description;
        }else {
          return this.item.creator.nickname;
        }
      }
    }
  }
</script>

<style scoped lang="less">
    div{
      // 每个歌单的样式
      .RP-song-list{
        width: 100%;

        // 图片与播放量
        .list-img{
          position: relative;

          .author{
            position: absolute;
            bottom: 5%; left: 5%;
            color: white;
            font-size: 13px;
            text-shadow: 1px 0 0 black;
          }

          // 播放量
          span{
            position: absolute;
            right: 5%; top: 5px;
            color: white;
            font-weight: bold;
          }
          img{
            width: 100%;
          }
        }
        // 歌单标题
        span{
          font-size: 14px;
        }
      }
    }
</style>