<template>
  <div class="findNav">
    <div class="rows swiper-container s1">
      <div class="swiper-wrapper">
        <div class="swiper-slide cl">精选</div>
        <div class="swiper-slide cl">关注</div>
        <div class="swiper-slide cl">爱美食</div>
        <div class="swiper-slide cl">出去浪</div>
        <div class="swiper-slide cl">健康生活</div>
        <span class="footercolor cl"></span>
      </div>
    </div>
  </div>

</template>

<script>
  import $ from "jquery"
    import Swiper from 'swiper'
    export default {
        name: "FindNav",
      mounted(){
        //new Swiper('.swiper-container');
        // let high=$("header")[0].offsetHeight
        // $(".findNav").css({
        //   "top":"51px"
        // })
      }
    }

</script>

<style scoped>
  .active{
    color: #0e0e0e!important;
  }
  .rows {
    width: 100%;
    /*overflow-x: scroll;*/
    font-size: 1.4rem;
    letter-spacing: .2rem;
    line-height: 4rem;
    padding: 0 3rem;
    background: white;
    border: 1px solid #f6f6f6;

  }
  .swiper-slide{
    margin-right: 2.4rem;
    color: #8d8d8d;
    flex: 1;
    white-space: nowrap;
  }
  .footercolor{
    display: block;
    width: 2.8rem;
    height: 1.8px;
    background-color: #00c8b0;
    position: absolute;
    bottom: 0;
    left:0;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
  }
</style>
