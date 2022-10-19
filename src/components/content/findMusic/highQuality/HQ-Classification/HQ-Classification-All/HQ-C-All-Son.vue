<template>
  <div class="allTags">
    <div class="tagsList" v-for="(item, index) in tags" :key="index"
          @click="changeSelected(item.name)"
    >
      <div :class='{tagsSelected: selected === item.name}'>
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  name: "HQ-C-All-Son",
  data() {
    return {
      tags: [],
      // test: ['综艺', '流行', '影视原声', '华语', '清晨', '怀旧', '夜晚', '摇滚', '欧美', '清新', 'ACG', '浪漫', '民谣', '日语', '学习', '儿童', '电子', '韩语', '校园', '工作', '午休', '伤感', '粤语', '游戏', '舞曲', '说唱', '70后', '治愈', '下午茶', '放松', '轻音乐', '80后', '地铁', '90后', '孤独', '驾车', '爵士', '感动', '乡村', '网络歌曲', '运动', '兴奋', 'KTV', 'R&B/Soul', '旅行', '古典', '快乐', '经典', '散步', '民族', '翻唱', '酒吧', '安静', '吉他', '英伦', '思念', '金属', '钢琴', '器乐', '朋克', '蓝调', '榜单', '00后', '雷鬼', '世界音乐', '拉丁', 'New Age', '古风', '后摇', 'Bossa Nova']
    }
  },
  watch: {
    // 2.监听 allTags
    allTags(){
      this.handleInit()
    }
  },
  computed: {
    // 1.获取 Vuex 中的 allTags
    ...mapState('highQuality', ['allTags', 'selected']),
  },
  methods: {
    ...mapMutations('highQuality', ['getInitialPlaylist']),
    // 3. 当allTags变化时触发此函数
    handleInit() {
      // 4. 使 Vuex 中的 allTags中的值赋值给 data 中的 tags
      this.tags = this.allTags;
    },

    // 切换选中
    changeSelected(item){
      this.getInitialPlaylist(item);
    }
  }
}
</script>

<style scoped lang="less">
  .allTags{
    width: 500px; height: 560px;
    background-color: white;
    display: grid;
    grid-template-columns: repeat(5, 100px);
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, .2);
    margin-top: 10px;
    border-radius: 5px;
    position: absolute;
    z-index: 100;

    .tagsList{
      height: 40px;
      text-align: center;
      line-height: 30px;
      font-size: 12px;
      display: flex;
      justify-content: center; align-items: center;

      .tagsSelected{
        width: 80px; height: 30px;
        background-color: var(--themeColorTM);
        color: var(--themeColor);
        border-radius: 40px;
      }
    }
    .tagsList:hover{
      color: var(--themeColor);
      cursor: pointer;
    }
  }
</style>