<template>
  <div id="songLyrics">
    <div class="lyricsMain songLyrics-base">
      <div class="record">
        <img :class="{'cp1': true, 'cp1Reg': isPlayingMusic}" :src="require('../../../assets/img/cp1.png')" alt="无法显示"/>
        <div class="record-bottom" :class="{'rotate360': isPlayingMusic}">
          <img :src="playingSong.al.picUrl" alt="">
          <img :src="require('../../../assets/img/cp2.png')" alt="无法显示"/>
        </div>
      </div>
      <div class="lyrics">
        <!--作者和专辑名-->
        <div class="lyrics-title">
          <div class="lyrics-name">{{playingSong.name}}</div>
          <div class="Subheading" v-if="playingSong.alia.length > 0">{{playingSong.alia[0]}}</div>
          <div class="author">
            <span>{{authors}} - {{playingSong.al.name}}</span>
          </div>
        </div>
        <!--歌词-->
        <div class="showLyrics">
          <p v-for="item in lyricsObj" :key="item.uid">
            {{item.lyric}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex";
  export default {
    name: "songLyrics",
    computed: {
      ...mapState('nowPlaying', ['playingSong', 'lyricsObj', 'isPlayingMusic']),
      authors(){
        let author = '';
        if(this.playingSong.ar.length > 1){
          this.playingSong.ar.forEach((item, index) => {
            if(index + 1 !== this.playingSong.ar.length){
              author = author + item.name + ' \\ ';
            }else {
              author += item.name;
            }
          });
        }
        return author;
      }
    }

  }
</script>

<style scoped lang="less">
  #songLyrics{
    width: 100%; height: 600px;
    display: flex;
    justify-content: center;
    margin-top: 60px;
    .lyricsMain{
      display: flex;
      justify-content: space-around;

      .record{
        width: 40%; height: 600px;
        display: flex; flex-direction: column;
        align-items: center; justify-content: center;
        position: relative;
        .cp1{
          width: 40%; max-width: 130px;
          position: absolute; z-index: 10;
          left: 50%; top: 10%;
          transform-origin: 0 0; // 设置变形原点
        }

        .cp1Reg{
          transform: rotateZ(25deg);
        }
        .record-bottom{
          width: 100%; max-width: 300px;
          border-radius: 50%;
          position: relative;
          overflow: hidden;

          img:first-child{
            width: calc(100% - 80px);
            border-radius: 50%;
            position: absolute;
            top: 40px; left: 40px;
            z-index: -1;
          }
          img:last-child{
            width: 100%;
            border-radius: 50%;
            border: 15px solid rgba(128, 128, 128, .5);
          }
        }
      }
      .lyrics{
        width: 60%; height: 600px;
        margin-left: 20px;

        .lyrics-title, .showLyrics{
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .lyrics-name{font-size: 30px;}
        .Subheading, .author{
          font-size: 14px;
          margin-top: 8px;
          color: var(--translucent);
        }
        .showLyrics{
          height: 400px;
          overflow: auto;
          &::-webkit-scrollbar{width: 5px !important;}
          &::-webkit-scrollbar-thumb {background-color: transparent !important;}
          &:hover::-webkit-scrollbar-thumb {background-color: #eaecf1 !important; width: 5px !important;}
          margin-top: 30px;
          p{
            margin: 10px 0;
          }
        }
      }
    }

    /*实现动画无限循环*/
    .rotate360{
      animation: rotate360 40s linear 0.2s infinite;
    }
    @keyframes rotate360 {
      100% {
        transform: rotate(360deg);
      }
    }

  }
</style>