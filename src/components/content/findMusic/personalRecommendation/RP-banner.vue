<template>
  <div id="RP-banner">
    <el-carousel :interval="4000" type="card" height="250px">
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <img v-lazy="item.imageUrl" alt="图片无法显示"/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  import {getRPBanner} from "@/config/findMusic/RPConfig";

  export default {
    name: "RP-banner",
    data() {
      return {
        banners: []
      }
    },
    created() {
      getRPBanner().then(
          res => {
            this.banners = res.data.banners;
          }
      );
    }
  }
</script>

<style scoped lang="less">
  #RP-banner{
    margin-top: 20px;
    .el-carousel__item img{
      width: 100%; height: 100%;
      border-radius: 5px;
    }

    // 轮播图进度改成圆点
    /deep/ .el-carousel__button{
      background-color: black;
      width: 10px; height: 10px;
      border-radius: 50%;
    }
  }
</style>