<template>
  <div id="PR-item">
    <div class="PR-item-img">
<!--      <span><i class="icon iconfont icon-strokePlay"/>{{playCountS(item.playCount)}}</span>-->
      <img v-lazy="item.picUrl"/>
    </div>
    <div class="PR-item-msg">
      <span>{{item.name}}</span>
      <span class="artists">{{mvArtists}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PR-item",
  props: {
    item: Object
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
    /*返回所有作者的姓名*/
    mvArtists(){
      let name = '';
      this.item.artists.forEach((element, index) => {
        if(index < this.item.artists.length-1){
          name = element.name + " / " + name;
        }else {
          name += element.name;
        }
      });

      return name;
    }
  }
}
</script>

<style scoped lang="less">
  #PR-item{
    width: 23%;

    .PR-item-img{
      img{
        height: 150px;
      }
    }

    .PR-item-msg{
      span{
        display: block;
        font-size: 14px;
        margin-top: 5px;
      }
      .artists{
        font-size: 12px;
      }
    }
  }
</style>