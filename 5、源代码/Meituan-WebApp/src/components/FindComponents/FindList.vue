<template>
  <div class="findCont">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :key="index" v-for="(i,index) in findDatas">
           <find-cont :key="inde" :m="j"  :ind="inde"  v-for="(j,inde) in i.slide"></find-cont>
        </div>
        <!--<div class="swiper-slide">-->
          <!--<find-cont></find-cont>-->
        <!--</div>-->
        <!--<div class="swiper-slide" v-for="(i,index) in findDatas">-->
           <!--<find-cont :key="inde" :m="j"  :ind="inde"  v-for="(j,inde) in i.slide3"></find-cont>-->
        <!--</div>-->
        <!--<div class="swiper-slide">Slide 4</div>-->
        <!--<div class="swiper-slide">Slide 5</div>-->
        <!--<div class="swiper-slide">Slide 6</div>-->
        <!--<div class="swiper-slide">Slide 7</div>-->
      </div>
    </div>
  </div>

</template>

<script>
   import findData from "../../apis/Apis"
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
            console.log(this.findDatas)
          })
        }

      },
      created(){
        //首页加载数据
        this._initFindData()
      }
    }
</script>

<style scoped>
.findCont {
    position: relative;
    height: 100%;
  }
  body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color:#000;
    margin: 0;
    padding: 0;
  }
  .swiper-container {
    width: 100%;
    overflow-x: scroll;
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
