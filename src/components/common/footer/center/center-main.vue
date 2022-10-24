<template>
  <div id="centerMain">
    <div class="centerMainTop">
      <!--  循环方式   -->
      <song-loop/>

      <!--  播放歌曲   -->
      <div id="playMusic">
      <div><i class="icon iconfont icon-shangyishou"/></div>
      <div class="play"
            v-if="isPlayingMusic === false"
            @click="playSong"
      ><i class="icon iconfont icon-play" /></div>

      <div class="pause"
            v-if="isPlayingMusic === true"
            @click="pauseSong"
      ><i class="icon iconfont icon-pause" /></div>

      <div><i class="icon iconfont icon-xiayishou"/></div>

      <audio ref="audio" :src="songUrl" controls @canplay="getDur" @timeupdate="updateTime" @ended="overSong"></audio>
    </div>

      <!--  歌词   -->
      <lyrics/>
    </div>

    <!-- 进度条   -->
    <div id="progress">
      <span v-show="Object.keys(musicProgress).length">{{returnMusicProgress}}</span>
      <div class="progressMain">
        <!--   总进度条   -->
        <div class="progressBar" @mouseup="radiusMouseUp" @click="getClickPosition">
          <!--  进度条进度  -->
          <div class="activeBar" :style="{backgroundColor: $store.state.color.themeColor, width: leftPx+'px'}"></div>
        </div>
        <!-- 圆点 -->
        <div class="radiusBtn"
              :style="{left: leftPx+'px'}"
              v-drag="playingSong"
              @mouseup="radiusMouseUp"
              ref="radiusBtn"
        >
          <div class="radiosInner" :style="{backgroundColor: $store.state.color.themeColor}"></div>
        </div>
        <!-- 显示鼠标当前进度 -->
        <div class="tooltip"></div>
      </div>
      <span v-show="Object.keys(musicProgress).length">{{returnMusicRemaining}}</span>
    </div>
  </div>
</template>

<script>
import songLoop from "@/components/common/footer/center/song-loop";
import lyrics from "@/components/common/footer/center/lyrics";
import {mapGetters, mapMutations, mapState} from "vuex";

export default {
    name: "center-main",
    components: { songLoop, lyrics},
    computed: {
    ...mapState('nowPlaying', ['isPlayingMusic', 'songUrl', 'leftPx', 'musicProgress', 'playingSong', 'musicRemaining', 'musicDuration']),
    ...mapGetters('nowPlaying', ['returnMusicProgress', 'returnMusicRemaining'])

    },
  watch: {
    isPlayingMusic(){
      if(this.isPlayingMusic === true){
        setTimeout(()=>{
          this.$refs.audio.play(); // 播放歌曲
        }, 500);
      }
    }
  },
    methods: {
      ...mapMutations('nowPlaying', ['updateMusicDuration', 'updateIsChange', 'updateIsPlaySong', 'updateMusicProgress', 'returnLeftPx']),
      // 获取当前播放歌曲时长
      getDur(){
        this.updateMusicDuration(this.$refs.audio.duration);
      },

      // 播放音乐
      playSong(){
        // 如果没有歌曲url，就返回没有可播放的提示
        if (!this.songUrl) {
          const h = this.$createElement;
          this.$message.error({
            message: h('p', null, [
              h('span', null, '列表中没有可播放的歌曲'),
              h('i', {
                style: 'color: red'
              }, '')
            ]),
            offset: 280,
            center: true,
            showClose: true
          });
          return
        }

        this.updateIsPlaySong(1); // 更新播放歌曲状态-播放
        this.$refs.audio.play(); // 播放歌曲
      },

      // 暂停播放
      pauseSong(){
        this.updateIsPlaySong(2); // 更新播放歌曲状态-暂停
        this.$refs.audio.pause(); // 暂停歌曲
      },

      // 结束播放时
      overSong(){
        this.updateIsPlaySong(2);
      },

      // 获取进度
      async updateTime(e){
        await this.updateMusicProgress(e.target.currentTime);
        this.returnLeftPx();
      },

      // 进度条单击事件
      getClickPosition(e){
        /*当点击进度条时更新圆点和进度条进度为鼠标点击的位置*/
        this.$refs.audio.currentTime = e.offsetX / (600 / Math.floor(this.musicDuration));
      },

      // 圆点拖动松开事件
      radiusMouseUp(){
        /*当拖动圆点后送开鼠标时，将进度条进度更新到圆点的位置*/
        this.$refs.audio.currentTime = parseInt(this.$refs.radiusBtn.style.left) / (600 / Math.floor(this.musicDuration));
      },

      // 防止主页面触发drag & drop操作
      handler(e){
        e.preventDefault();
        e.stopPropagation();
      },

    },
    mounted() {
      window.addEventListener('dragstart', this.handler);
    },
    beforeDestroy() {
      window.removeEventListener('dragstart', this.handler);
    },
    directives: {
      /*实现拖动圆点的自定义事件*/
      drag: function(el, playingSong) {
        let dragBox = el;
        dragBox.onmousedown = e => {
          //算出鼠标相对元素的位置
          let disX = e.clientX - dragBox.offsetLeft;
          document.onmousemove = e => {
            //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
            let left = e.clientX - disX;
            if(left >= 0 && left <= 600 && Object.keys(playingSong.value).length > 0){
              //移动当前元素
              dragBox.style.left = left + "px";
            }
          };
          document.onmouseup = () => {
            //鼠标弹起来的时候不再移动
            document.onmousemove = null;
            //预防鼠标弹起来后还会循环（即预防鼠标放上去的时候还会移动）
            document.onmouseup = null;
          };
        }
      }
    },
  }
</script>

<style scoped lang="less">
  #centerMain{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .centerMainTop{
      width: 200px; height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  #playMusic{
    width: 125px; height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div{
      width: 25px; height: 25px;
      display: flex;
      justify-content: center;
      align-items: center;

      i{
        font-size: 25px;
      }
    }
    .play, .pause{
      width: 35px; height: 35px;
      background-color: #f4f4f4;
      border-radius: 35px;
    }

    audio{
      display: none;
      //position: absolute;
    }
  }


  #progress{
    display: flex;
    justify-content: center; align-items: center;
    margin-bottom: 8px;

    span{
      font-size: 12px;
      color: rgba(0, 0, 0, .5);
    }
    .progressMain{
      width: 600px; height: 8px;
      border-radius: 8px;
      margin: 0 12px;
      position: relative;

      .progressBar{
        width: 100%; height: 100%;
        border-radius: 8px;
        background-color:  rgba(0, 0, 0, .1);
        .activeBar{
          height: 100%;
          border-radius: 8px;
        }
      }
      .radiusBtn{
        width: 70px; height: 70px;
        position: absolute;
        top: -50px;
        background-color: transparent;
        .radiosInner{
          width: 16px; height: 16px;
          position: absolute;
          bottom: 8px; left: -8px;
          border-radius: 50%;
        }
      }
    }
  }
</style>