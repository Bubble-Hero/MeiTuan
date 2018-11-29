<template>
  <div class="find">
      <find-header></find-header>
      <find-nav></find-nav>
      <find-list></find-list>
  </div>
</template>

<script>
    import FindHeader from "../components/FindComponents/FindHeader";
    import FindNav from "../components/FindComponents/FindNav";
    import FindList from "../components/FindComponents/FindList";

    export default {
        name: "find",
      components: {FindList, FindNav, FindHeader,}
    }
</script>

<style scoped>
.find{
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>
