<template>
  <div class="all" style="max-height: 92vh;">
    <me-header></me-header>
    <me-section></me-section>
  </div>
</template>

<script>
  import "../../assets/css/base.scss"
  import "../../assets/font/iconfont.css"
  import MeHeader from "./MeHeader";
  import MeSection from "./MeSection";
    export default {
        name: "MeAll",
      components: {MeSection, MeHeader}
    }
</script>

<style scoped>
  .all{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>
