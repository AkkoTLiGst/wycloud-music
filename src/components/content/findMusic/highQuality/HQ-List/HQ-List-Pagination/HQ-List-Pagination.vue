<template>
  <div id="HQ-ListPagination" class="RP-base">
    <el-pagination
        background
        layout="prev, pager, next"
        :page-size="50"
        :total="$store.state.highQuality.playListCount"
        :current-page="$store.state.highQuality.pager"
        @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>

  import {mapMutations} from "vuex";

  export default {
    name: "HQ-List-Pagination",
    methods: {
      /*下一页*/
      handleCurrentChange(page){
        this.getPager(page);
      },
      ...mapMutations('highQuality', ['getPager'])
    }
  }
</script>

<style scoped lang="less">
  #HQ-ListPagination{
    display: flex;
    justify-content: center;
  }
</style>