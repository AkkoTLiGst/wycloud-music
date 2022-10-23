<template>
  <div id="songComment" class="songComment-base">

    <span>全部评论({{commentTotal}})</span>
    <!--  热评  -->
    <div class="hotComment">
      <div class="Comment-son" v-for="(item, index) in hotComment" :key="item.commentId">
        <div class="comment">
          <!--  头像  -->
          <img v-lazy="item.user.avatarUrl" class="avatar"/>
          <!--  评论内容  -->
          <div class="commentContent">
            <div class="commentContent-top">
              <a>{{item.user.nickname}}: </a>
              <span>{{item.content}}</span>
            </div>
            <div class="commentContent-bottom">
              <span>{{item.timeStr}}</span>
              <span><i class="icon iconfont icon-like"/>{{item.likedCount}}</span>
            </div>
          </div>
        </div>
        <!-- 分割线   -->
        <div class="division" v-if="index !== hotComment.length-1"></div>
      </div>
    </div>

    <div class="newComment">最新评论({{commentTotal}})</div>
    <!-- 时间评论   -->
    <div class="timeComment">
      <div class="Comment-son" v-for="(item, index) in timeComment" :key="item.commentId">
        <div class="comment">
          <!--  头像  -->
          <img v-lazy="item.user.avatarUrl" class="avatar"/>
          <!--  评论内容  -->
          <div class="commentContent">
            <div class="commentContent-top">
              <a>{{item.user.nickname}}: </a>
              <span>{{item.content}}</span>
            </div>
            <div class="commentContent-bottom">
              <span>{{item.timeStr}}</span>
              <span><i class="icon iconfont icon-like"/>{{item.likedCount}}</span>
            </div>
          </div>
        </div>
        <!-- 分割线   -->
        <div class="division" v-if="index !== timeComment.length-1"></div>
      </div>
    </div>


    <div class="Pagination">
      <el-pagination
          background
          layout="prev, pager, next"
          :page-size="20"
          :total="commentTotal"
          :current-page="commentPager"
          @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>


  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";

  export default {
    name: "songComment",
    computed: {
      ...mapState('nowPlaying', ['commentTotal', 'timeComment' ,'hotComment', 'commentPager'])
    },
    methods: {
      /*下一页*/
      handleCurrentChange(page){
        this.getPager(page);
      },
      ...mapMutations('nowPlaying', ['getPager'])
    }
  }
</script>

<style scoped lang="less">
  #songComment{
    margin-top: 100px;
    span{font-weight: bold}
    .newComment{
      font-weight: bold;
      margin-top: 80px;
    }
    img{
      width: 40px; height: 40px;
      border-radius: 50%;
    }
    .hotComment, .timeComment{
      margin-top: 8px;
      span, a{font-weight: normal; font-size: 12px}

      .Comment-son{
        width: 100%;

        .comment{
          width: 100%; height: 80px;
          display: flex;
          align-items: center;
          margin: 10px 0;
          .commentContent{
            width: calc(100% - 60px);
            flex-shrink: 0;
            margin-left: 20px;
            a{color: #6c79ee}

            .commentContent-bottom{
              margin-top: 5px;
              display: flex;
              justify-content: space-between;
              span:first-child{
                color: var(--translucent);
              }
              i{
                margin-right: 5px;
              }
            }
          }
        }

        .division{
          width: 100%; height: 0;
          border-bottom: 1px solid rgba(128, 128, 128, .2);
        }
      }
    }
    .Pagination{
      margin-top: 10px;
      display: flex;
      justify-content: center;
    }

  }
</style>