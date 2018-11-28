<template>
    <div>
      <!-----------------nearnav------------->
      <div class="nearnav">
        <ul>
          <li><a href="">享美食</a></li>
          <li><a href="">惠生活</a></li>
          <li><a href="">爱玩乐</a></li>
          <li><a href="">住酒店</a></li>
          <li><a href="">全部</a></li>
        </ul>
      </div>
      <!---------------nearswipernav------------>
      <div class="nearswipernav">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(p,index) in nearnav.swipernavs">{{p.title}}</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    import Apis from "../../apis/Apis";
    export default {
        name: "NearNav",
        data(){
          return{
            nearnav:[]
          }
        },
        methods:{
          _initPageData() {
            Apis.getNearnavData(data=>{
              this.nearnav = data
              console.log(this.nearnav)

              this.$nextTick(()=>{
                var swiper = new Swiper('.swiper-container', {
                  slidesPerView: 5,
                  spaceBetween: 50,
                  // init: false,
                  pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                  },
                  breakpoints: {
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 40
                    }
                  }
                })
              })
            })
          }
        },
        created(){
          //首页加载数据
          this._initPageData()
        }
    }
</script>

<style scoped>
  @import'../../../static/css/swiper.css';
  .nearnav ul{
    display: flex;
    padding: 1rem;
    justify-content: space-around;
  }
  .nearnav ul li a{
     font-size: 1.4rem;
  }
  .nearswipernav{
    padding: .5rem 1rem;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: left;
    font-size: 12px;
    background: #fff;

    /* Center slide text vertically */
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
