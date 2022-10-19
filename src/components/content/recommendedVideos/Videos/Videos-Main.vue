<template>
  <div id="VideosMain">
    <videos-banner/>
    <videos-view/>
  </div>
</template>

<script>
  import videosBanner from "@/components/content/recommendedVideos/Videos/Videos-Banner";
  import videosView from "@/components/content/recommendedVideos/Videos/Videos-View";
  import {getHotVideoTags} from "@/config/recommendedVideos/videos";

  export default {
    name: "Videos-Main",
    components: {videosBanner, videosView},
    data() {
      return {
        hotVideosTags: []
      }
    },
    created() {
      getHotVideoTags().then(
          res => {
            this.hotVideosTags = res.data;
          }
      )
    }
  }
</script>

<style scoped>

</style>