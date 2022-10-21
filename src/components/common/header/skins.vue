<template>
  <div id="skins">
    <i class="icon iconfont icon-skin" @click="changeIsShowSkins"></i>
    <div class="choseSkins"  v-if="$store.state.color.isShowSkins">
      <el-card shadow="always" body-style="width: 330px;">
        <div class="allSkins">
          <span class="skinTitle">主题</span>
          <div class="skinColors">

            <div  @click="changeSkins(1)" class="skinColor black">
              <span>炫酷黑</span>
              <div v-show="1 === $store.state.color.colorCode" class="skinIcon" :style="{backgroundColor: $store.state.color.themeColor}">
                <i class="el-icon-check" style="color: white; font-size: 14px"></i>
              </div>
            </div>

            <div  @click="changeSkins(2)" class="skinColor red">
              <span>官方红</span>
              <div v-show="2 === $store.state.color.colorCode" class="skinIcon" :style="{backgroundColor: $store.state.color.themeColor}">
                <i class="el-icon-check" style="color: white; font-size: 14px"></i>
              </div>
            </div>

            <div  @click="changeSkins(3)" class="skinColor pink">
              <span>可爱粉</span>
              <div v-show="3 === $store.state.color.colorCode" class="skinIcon" :style="{backgroundColor: $store.state.color.themeColor}">
                <i class="el-icon-check" style="color: white; font-size: 14px"></i>
              </div>
            </div>

            <div  @click="changeSkins(4)" class="skinColor blue">
              <span>天际蓝</span>
              <div v-show="4 === $store.state.color.colorCode" class="skinIcon" :style="{backgroundColor: $store.state.color.themeColor}">
                <i class="el-icon-check" style="color: white; font-size: 14px"></i>
              </div>
            </div>

            <div  @click="changeSkins(5)" class="skinColor green">
              <span>清新绿</span>
              <div v-show="5 === $store.state.color.colorCode" class="skinIcon" :style="{backgroundColor: $store.state.color.themeColor}">
                <i class="el-icon-check" style="color: white; font-size: 14px"></i>
              </div>
            </div>

            <div  @click="changeSkins(6)" class="skinColor deepBlue">
              <span>深海蓝</span>
              <div v-show="6 === $store.state.color.colorCode" class="skinIcon" :style="{backgroundColor: $store.state.color.themeColor}">
                <i class="el-icon-check" style="color: white; font-size: 14px"></i>
              </div>
            </div>

          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from "vuex";

  export default {
    name: "s-skins",
    methods: {
      changeSkins(value){
        this.changeThemeColor(value);
      },
      ...mapMutations('color', ['changeThemeColor', 'changeIsShowSkins'])
    }
  }
</script>

<style scoped lang="less">
  #skins{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    position: relative;

    i{
      color: #dfd3fc;
      font-size: 18px;
    }

  }

  .choseSkins{
    position: absolute; z-index: 100;
    top: 61px; left: -255px;
    width: 330px;

    .allSkins{

      .skinTitle{
        margin-left: 5px;
      }

      .skinColors{
        display: flex;
        flex-wrap: wrap;

        .skinColor{
          width: 86px; height: 86px;
          //background-color: black;
          margin: 5px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          position: relative;
          border-radius: 5px;

          span{
            width: 100%;
            display: block;
            text-align: center;
            color: white;
            background-color: rgba(0, 0, 0, .3);
            border-radius: 0 0 5px 5px;
          }

          .skinIcon{
            position: absolute;
            right: -8px; bottom: -8px;
            width: 18px; height: 18px;
            text-align: center;
            line-height: 18px;
            border-radius: 18px;
            border: 3px solid white;
            box-sizing: content-box;
          }
        }

        .black{
          background-color: var(--themeColorBlack);
        }
        .red{
          background-color: var(--themeColorRed);
        }
        .pink{
          background-color: var(--themeColorPink);
        }
        .green{
          background-color: var(--themeColorGreen);
        }
        .blue{
          background-color: var(--themeColor);
        }
        .deepBlue{
          background-color: var(--themeColorMidnightBlue);
        }


        span:hover, div:hover{
          cursor: pointer;
        }
      }
    }
  }
</style>