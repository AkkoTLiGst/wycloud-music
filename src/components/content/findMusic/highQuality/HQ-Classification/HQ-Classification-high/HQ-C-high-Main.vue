<template>
  <div id="HQ-C-high-Main">
    <div  :class="{highTags: true, tagsSelected: selected === item}"
          v-for="(item, index) in hotList" :key="index"
          @click="changeSelected(item)"
    >
<!--      <div class="high-tags-item">-->
        {{item}}
<!--      </div>-->
    </div>
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";

  export default {
    name: "HQ-C-high-Main",
    data() {
      return {
        hotList: ['华语', '流行', '摇滚', '民谣', '电子', '另类/独立', '轻音乐', '综艺', '影视原声', 'ACG']
      }
    },
    computed: {
      ...mapState('highQuality', ['selected'])
    },
    methods: {
      ...mapMutations('highQuality', ['getInitialPlaylist']),
      changeSelected(item) {
        this.getInitialPlaylist(item);
      }
    }

  }
</script>

<style scoped lang="less">
  #HQ-C-high-Main{
    width: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: rgba(0, 0, 0, .5);

    .highTags{
      border-radius: 10px;
      padding: 0 10px;
    }

    .tagsSelected{
      background-color: var(--themeColorTM);
      color: var(--themeColor);
    }

    .highTags:hover{
      cursor: pointer;
    }
  }
</style>