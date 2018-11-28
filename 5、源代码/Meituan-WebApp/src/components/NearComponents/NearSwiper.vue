<template>
    <div class="sliderBox">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../../../static/img/n-s-1.png" alt=""></div>
          <div class="swiper-slide"><img src="../../../static/img/n-s-2.png" alt=""></div>
        </div>
      </div>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    export default {
        name: "NearSwiper",
        mounted(){
          this.$nextTick(()=>{
            var swiper = new Swiper('.swiper-container', {
              loop:true,
              spaceBetween: 30,
              centeredSlides: true,
              autoplay: {
                delay: 2500,
                disableOnInteraction: false,
              },
              pagination: {
                el: '.swiper-pagination'
              }
            })
          })
        }
    }
</script>

<style scoped>
  @import'../../../static/css/swiper.css';
  .sliderBox{
    height: 16rem;
    padding: 1.5rem 1rem 1rem;
    background: #fff;

  }
  .sliderBox img{
    width: 100%;
    height: 100%;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
</style>
