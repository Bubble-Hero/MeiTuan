<template>
  <div class="find">
    <find-header></find-header>
    <find-nav></find-nav>
    <find-list></find-list>
  </div>
</template>

<script>
  import $ from "jquery";
  import Swiper from "Swiper";
  import FindHeader from "./FindHeader";
  import FindNav from "./FindNav";
  import FindList from "./FindList";

  export default {
    name: "FindFather",
    components: {FindList, FindNav, FindHeader}

  }
</script>

<style scoped>
  .find{
    max-height: 92vh;
    display: flex;
    flex-direction: column;
    position: relative;
  }
</style>
