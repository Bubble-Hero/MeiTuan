<template>
  <div class="findList">
    <div class="swiper-container s2">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(i,index) in findDatas[0]">
            <find-cont :m="j" :ind="inde"  v-for="(j,inde) in i.slide"></find-cont>
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
            console.log(this.findDatas)
          })
        },
        initSwiper(){
          new Swiper('.s2',{
            slidesPerView: 'auto',
            centeredSlides: true,
            preventLinksPropagation: false,   // 阻止点击事件冒泡(防止手动快速来回滑动后自动滑动紊乱)
            observer:true,                //修改swiper自己或子元素时，自动初始化swiper
            observeParents:true           //修改swiper的父元素时，自动初始化swiper
          });
        }

      },
      mounted(){
        //首页加载数据
        this._initFindData()
        this.initSwiper()
      }
    }
</script>

<style scoped>
.findList {
    width: 100%;
    position: relative;
    height: 100%;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 1.6rem;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
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
