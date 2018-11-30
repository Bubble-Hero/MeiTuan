<template>
    <div class="centerImgbox">
      <img :src="datas.img">
    </div>
</template>

<script>
     import indexNav from '../../apis/Apis'
    export default {
        name: "centerImg",
      props:["datas"]
    }
</script>

<style lang="scss" scoped>
  .centerImgbox {
    height: 10.3rem;border-bottom: 1rem solid #f5f5f5;
    img{
      width: 100%;height: 100%;
    }
  }

</style>
