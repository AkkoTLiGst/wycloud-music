<template>
  <div id="HQ-Classification">
    <HQCAllMain/>
    <HQCHighMain/>
  </div>
</template>

<script>
  import HQCAllMain
    from "@/components/content/findMusic/highQuality/HQ-Classification/HQ-Classification-All/HQ-C-All-Main";
  import HQCHighMain
    from "@/components/content/findMusic/highQuality/HQ-Classification/HQ-Classification-high/HQ-C-high-Main";
  export default {
    name: "HQ-Classification",
    components: {HQCAllMain, HQCHighMain}
  }
</script>

<style scoped lang="less">
  #HQ-Classification{
    display: flex;
    justify-content: space-between;

    margin-top: 20px;
  }
</style>