<template>
  <div style="display: flex;flex-direction: column;min-height: 100vh;">
    <router-view class="swiper-slide" style="overflow:auto;flex: 1;"/>



    <BottomNav v-show="$route.meta.navShow"></BottomNav>
    <!--v-show="$route.meta.navShow"控制底部显示隐藏-->

    <BottomNav v-if="$route.meta.navShow"></BottomNav>
    <BottomNav></BottomNav>
  </div>
</template>
<script>
  import BottomNav from '@/components/BottomNav'
  export default {
    name: 'App',
    components:{
      BottomNav
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
