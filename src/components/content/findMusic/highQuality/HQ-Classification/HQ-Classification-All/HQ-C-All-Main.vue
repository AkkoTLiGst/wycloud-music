<template>
  <div id="HQ-C-All-Main">
    <button class="title" @click="showSon" @blur="showSon">
      {{$store.state.highQuality.selected}} <i class="el-icon-arrow-right"/>
    </button>

    <transition name="el-fade-in">
      <HQCAllSon v-show="isShow"/>
    </transition>
  </div>
</template>

<script>
  import HQCAllSon
    from "@/components/content/findMusic/highQuality/HQ-Classification/HQ-Classification-All/HQ-C-All-Son";

  export default {
    name: "HQ-C-All-Main",
    components: {HQCAllSon},
    data() {
      return {
        isShow: false
      }
    },
    methods: {
      showSon(){
        this.isShow = !this.isShow;
      }
    }
  }
</script>

<style scoped lang="less">
  #HQ-C-All-Main{
    position: relative;

    .title{
      width: 100px;
      text-align: center;
      border: 1px solid rgba(0, 0, 0, .3);
      border-radius: 50px;
      background-color: white;

      padding: 3px;
    }
  }
</style>