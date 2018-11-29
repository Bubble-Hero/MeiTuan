<template>
  <div class="all">
    <me-header></me-header>
    <me-section></me-section>
  </div>
</template>

<script>
    import "../assets/css/base.scss"
    import  "../assets/font/iconfont.css"
    import MeHeader from "../components/MeComponents/MeHeader";
    import MeSection from "../components/MeComponents/MeSection";
    export default {
        name: "me",
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
