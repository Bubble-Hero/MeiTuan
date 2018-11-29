<template>
  <div class="findNav">
    <div class="rows swiper-container s1">
      <div class="swiper-wrapper s1-content buf1">
        <span class="footercolor"></span>
        <div class="swiper-slide first">精选</div>
        <div class="swiper-slide">关注</div>
        <div class="swiper-slide">爱美食</div>
        <div class="swiper-slide">出去浪</div>
        <div class="swiper-slide">健康生活</div>
        <div class="swiper-slide">变漂亮</div>
        <div class="swiper-slide">约电影</div>
      </div>
    </div>
  </div>

</template>

<script>
    import Swiper from 'swiper'
    export default {
        name: "FindNav",
      methods:{
          _navSwiper(){
            var swiper = new Swiper('.s1');
          }
      },
      mounted(){
        new Swiper('.swiper-container');
      }
    }

</script>

<style scoped>
  .findNav{
    margin-top: 5rem;
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
    width: auto!important;
    padding-right: 2.4rem;
    color: #8d8d8d;
  }
  .first{
    color: #0e0e0e;
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
