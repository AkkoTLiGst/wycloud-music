<template>
  <div id="RP-lm-item">
    <div class="RP-lm-img">
     <span><i class="icon iconfont icon-play"/></span>
      <img v-lazy="item.picUrl"/>
    </div>
    <div class="RP-lm-msg">
      <span>{{item.song.name}}</span>
      <span class="artists">{{item.song.artists[0].name}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RP-latest-item",
    props: {
      item: Object
    }
  }
</script>

<style scoped lang="less">
  #RP-lm-item{
    display: flex; height: 100%;

    .RP-lm-img{
      width: 15%; height: 100%;
      flex-shrink: 1;
      position: relative;

      span{
        width: 50%; height: 50%;
        background-color: rgba(255, 255, 255, .8);
        border-radius: 50%;
        display: flex;
        justify-content: center;align-items: center;
        position: absolute;
        top: 25%; left: 25%;

        i{
          font-size: 23px;
          color: var(--themeColor);
        }
      }
    }

    .RP-lm-msg{
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 10px;
      flex-shrink: 1000;

      span{
        font-size: 14px;
      }
      .artists{
        font-size: 12px;
        color: rgba(0, 0, 0, .4);
        margin-top: 10px;
      }
    }
 }
</style>