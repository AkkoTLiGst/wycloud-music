<template>
  <div id="mySongList-Main"  class="RP-base">
    <div class="plz" v-if="$store.state.login.isLogin === false">
    </div>
    <div class="isLogin" v-if="$store.state.login.isLogin === true">
      <song-list-banner/>
      <songListNav/>
      <div class="songList-view">
        <transition name="el-fade-in-linear">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import songListBanner from "@/components/content/mySongList/songList-banner";
  import songListNav from "@/components/content/mySongList/songList-Nav";
  import {getAllSong, playList} from "@/config/songlist/userSongList";
  import {mapMutations, mapState} from "vuex";
  import {setItem} from "@/config/utils";

  export default {
    name: "mySongList-Main",
    components: {songListBanner, songListNav},
    data() {
      return {
        playList: {},
        listAllSong: []
      }
    },
    computed: {
      ...mapState('userSongList', ['userSongList', 'selectedList', 'allSong', 'offset', 'limit'])
    },
    created() {
      if(this.allSong.length === 0 && this.$store.state.login.isLogin){ // 判断是不是第一次进歌单路由界面，防止每次进入都重新执行下面两个函数
        this.getUserSongList();
        this.getSelectedList(this.$route.query.title);
      }
    },
    methods: {
      // 获取用户的所有歌单
      async getUserSongList(){
        const res = await playList(this.$store.state.login.userInfo.userId);
        setItem('userSongList', res.data.playlist);
        this.updateUserSongList(res.data.playlist); // 保存至vuex
      },
      // 获取当前选择的歌单
      async getSelectedList(title){
        // 我喜欢的音乐
        if(title === 'musicILike'){
          setItem('selectedList', this.userSongList[0])
          this.updateSelectedList(this.userSongList[0]); // 保存至vuex

          // 获取当前选择歌单的前100首歌
          const allMusic = await getAllSong(this.selectedList.id, this.limit, this.offset);
          setItem('allSong', allMusic.data.songs);
          this.updateAllSong(allMusic.data.songs); // 保存至vuex
        }
      },
      ...mapMutations('userSongList', ['updateUserSongList', 'updateSelectedList', 'updateAllSong'])
    }
  }
</script>

<style scoped>

</style>