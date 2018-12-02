<template>
  <div class="findList">
    <div class="swiper-container s2">
      <div class="swiper-wrapper buf1" v-for="(i,index) in findDatas">
        <div class="swiper-slide" >
          <find-cont :m="j" :ind="inde"  v-for="(j,inde) in i[0].slide"></find-cont>
        </div>
        <div class="swiper-slide">
          <find-cont :m="j" :ind="inde"  v-for="(j,inde) in i[1].slide"></find-cont>
        </div>
        <div class="swiper-slide">
          <find-cont :m="j" :ind="inde"  v-for="(j,inde) in i[2].slide"></find-cont>
        </div>
        <div class="swiper-slide">
          <find-cont :m="j" :ind="inde"  v-for="(j,inde) in i[3].slide"></find-cont>
        </div>
        <div class="swiper-slide">
          <find-cont :m="j" :ind="inde"  v-for="(j,inde) in i[4].slide"></find-cont>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
   import findData from "../../apis/Apis"
   import Swiper from "swiper";
   import FindCont from "./FindCont";
    export default {
        name: "FindList",
      components: {FindCont},
      data(){
        return {
          findDatas:[],
        }
      },
      methods: {

        /**
         * 加载页面数据
         * @private
         */
        _initFindData() {
          findData.getFindData(data=>{
            this.findDatas = data;
            this.$nextTick(()=>{
              this.initSwiper()
            })
           //console.log(this.findDatas)
          })
        },
        initSwiper(){
          new Swiper('.s2',{
            slidesPerView: 'auto',
            centeredSlides: true,
            preventLinksPropagation: false,   // 阻止点击事件冒泡(防止手动快速来回滑动后自动滑动紊乱)
            observer:true,                //修改swiper自己或子元素时，自动初始化swiper
            observeParents:true,        //修改swiper的父元素时，自动初始化swiper
            on:{
              transitionStart: function () {
                ss(this.activeIndex)       //导航栏同步滑动 底线与字体颜色的同步改变
                function ss(num){
                  $(".footercolor").animate({
                    "left": $(".cl").eq(num)[0].offsetLeft,
                    "width":$(".cl").eq(num)[0].offsetWidth
                  },150)
                  //字体颜色
                  $(".cl").eq(num).addClass("active")
                  $(".cl").eq(num).siblings().removeClass("active")
                }
              }
            }
          });
        }

      },
      mounted(){
        //首页加载数据
        this._initFindData()
        this.initSwiper()
      },
      updated(){
        this.initSwiper()
      }
    }
</script>

<style lang="scss" scoped>
  .active{
    color: #0e0e0e!important;
  }
.findList {
    width: 100%;
    position: relative;
    height: 100%;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
  }

</style>
