<template>
  <div>
    <div class="swiper-container s1">
      <div class="swiper-wrapper"  v-for="(i,s) in sliderImg">
        <div class="swiper-slide">
          <img :src="i[0].img">
        </div>
        <div class="swiper-slide" >
          <img :src="i[1].img">
        </div>
        <div class="swiper-slide" >
          <img :src="i[2].img">
        </div>
        <div class="swiper-slide" >
          <img :src="i[3].img">
        </div>
        <div class="swiper-slide" >
          <img :src="i[4].img">
        </div>
        <div class="swiper-slide">
          <img :src="i[5].img">
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="blur"></div>
  </div>
</template>

<script>
    import Swiper from 'swiper'
    import sliderImg from '../../apis/Apis'
    export default {
        name: "silder",
        data(){
          return{
            sliderImg:[]
          }
        },
      methods: {
        _getData() {
          sliderImg.getSliderImg(data => {
            this.sliderImg = data//是初始化数据
            this.$nextTick(() => { // 下一个UI帧再初始化swiper
              this._initSwiper();
            });
           // console.log(this.sliderImg)
          })
        },
        //图片自动轮播
        _initSwiper (){
          var swiper = new Swiper('.s1', {
            loop: true,
            slidesPerView: 'auto',
            centeredSlides: true,
            autoplay: {
              delay: 2000,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            preventLinksPropagation: false,   // 阻止点击事件冒泡(防止手动快速来回滑动后自动滑动紊乱)
            //observer:true,                //修改swiper自己或子元素时，自动初始化swiper
            //observeParents:true           //修改swiper的父元素时，自动初始化swiper
          })
        }
      },
      mounted(){
        this._initSwiper()
        this._getData()
      },
      updated(){

      }
    }
</script>

<style lang="scss">
    @import "../../assets/css/indexScss/index.slider.scss";
</style>
