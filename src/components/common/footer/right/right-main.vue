<template>
  <div id="leftMain">
    <whale/>
    <volume/>
    <song-list/>
  </div>
</template>

<script>
  import volume from "@/components/common/footer/right/volume";
  import songList from "@/components/common/footer/right/song-list";
  import whale from "@/components/common/footer/right/whale";

  export default {
    name: "left-main",
    components: { volume, songList, whale}
  }
</script>

<style scoped lang="less">
  #leftMain{
    width: 250px; height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 45px;
  }
</style>