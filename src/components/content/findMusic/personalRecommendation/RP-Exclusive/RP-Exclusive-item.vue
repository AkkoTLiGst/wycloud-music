<template>
  <div class="RP-E-item">
    <div class="RP-E-item-img">
      <img v-lazy="item.picUrl"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RP-Exclusive-item",
    props: {
      item: Object
    }
  }
</script>

<style scoped lang="less">
  .RP-E-item{
    width: 32%;
  }

</style>