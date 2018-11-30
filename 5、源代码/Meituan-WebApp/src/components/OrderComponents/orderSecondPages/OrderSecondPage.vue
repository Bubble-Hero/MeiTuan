<template>
    <div class="OrderSecond">
      <!--头部-->
      <header>
          <router-link to="/order">
            <i class="iconfont">&#xe63c;</i>
          </router-link>
          <p @click="showBox">我的订单</p>
          <img src="../../../../static/img/o-c-f7.jpg" alt="">
      </header>
      <!--导航-->
      <div class="orderChildNav">
          <p>全部</p>
          <p>待付款</p>
          <p>待使用</p>
          <p>待评价</p>
          <p>退款/售后</p>
      </div>
          <!-- Swiper -->
          <div class="swiper-container">
            <div class="swiper-wrapper" style="height: 100%;">
              <div class="swiper-slide">
                <div class="orderProduct" :key="j" v-for="(i,j) in ordernavDatas">
                <div class="orderProductList"  :key="n" v-for="(m,n) in i[4].orderSecondDatas">
                  <img class="orderPage1" :src="m.pic" alt="">
                  <div class="orderProductListR">
                    <div class="orderProductListRHeader">
                      <h2>{{m.h1}}</h2>
                      <h3>{{m.h2}}</h3>
                    </div>
                    <h4>数量：{{m.num}}</h4>
                    <div class="proBottom"><h5>总价：{{m.totalM}}</h5><div class="proBottomR">再来一单</div></div>
                  </div>
                </div>
              </div></div>
              <div class="swiper-slide">
                <div class="orderProPage2Box">
                  <div class="orderProPage2">
                    <img src="../../../../static/img/o-c-p2.jpg" alt="">
                    <h1>暂无订单</h1>
                    <p>可以去看看有哪些想买的</p>
                    <h2>随便逛逛</h2>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="orderProPage2Box">
                  <div class="orderProPage2">
                    <img src="../../../../static/img/o-c-p2.jpg" alt="">
                    <h1>暂无订单</h1>
                    <p>可以去看看有哪些想买的</p>
                    <h2>随便逛逛</h2>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="orderProduct" :key="j" v-for="(i,j) in ordernavDatas">
                <div class="orderProductList"  :key="n" v-for="(m,n) in i[5].orderSecondAssess">
                  <img class="orderPage3" :src="m.pic" alt="">
                  <div class="orderProductListR">
                    <div class="orderProductListRHeader">
                      <h2>{{m.h1}}</h2>
                    </div>
                    <div class="proBottom"><h5>{{m.time}}</h5><div class="proBottomR">评价</div></div>
                    <p>{{m.totalM}}</p>

                  </div>
                </div>
              </div></div>
              <div class="swiper-slide">
                <div class="orderProPage2Box">
                  <div class="orderProPage2">
                    <img src="../../../../static/img/o-c-p2.jpg" alt="">
                    <h1>暂无订单</h1>
                    <p>可以去看看有哪些想买的</p>
                    <h2>随便逛逛</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--点击上方头部弹出框框-->
          <div class="headerClickBox">
              <p>全部订单</p>
              <p>美食</p>
              <p>外卖</p>
              <p>电影</p>
              <p>酒店</p>
              <p>霸王餐</p>
              <p>抽奖单</p>
              <p>其他</p>
          </div>
          <!--遮罩层-->
          <div class="hidePage"></div>

    </div>
</template>

<script>

    import  Swiper from "swiper"
    import orderSec from "../../../apis/Apis"
    export default {
      name: "OrderSecondPage",
      data(){
        return{
          ordernavDatas:[],
        }
      },
      mounted(){
        var swiper = new Swiper('.swiper-container',{
        });

      },

      methods: {
        /**
         * 加载页面数据
         * @private
         */
        _initOrderNavData() {
          orderSec.getOrderNavData(data=>{
            this.ordernavDatas = data
            console.log(this.ordernavDatas)
          })
        },
        // 点击头部出现框框
        showBox(){
          $(".headerClickBox").stop().fadeToggle(500);
          // 毛玻璃效果
          // $(".orderChildNav").css({
          //   "-webkit-filter":"blur(.1rem)"
          // })
          // $(".swiper-container").css({
          //   "-webkit-filter":"blur(.1rem)"
          // })
          // 遮罩层
          $(".hidePage").stop().fadeToggle(500).css({
            "display":"block"
          });
          // tab切换
          $(".headerClickBox p").click(function(){
            $(this).css({
              color: "#25c8b8",
              border:".1rem solid #25c8b8",
              background:"#eafcfa"
            })
            $(this).siblings().css({
              color: "#a5a5a5",
              border: ".1rem solid #a5a5a5",
              background:"white"
            })

          })
        }
      },
      created(){
        //加载数据
        this._initOrderNavData()
      }
    }
</script>

<style scoped>
  /*swiper*/

  .orderProPage2Box{
    margin-top: 25rem;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .swiper-container {
    width: 100%;
    height: 100%;

  }
  .swiper-slide {
    /*text-align: center;*/
    width: 100%;
    height: 100%;
    font-size: 18px;
    /*background: #fff;*/
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

  .OrderSecond{
    background: #f0f0f0;
  }
  header{
    width: 100%;
    line-height:4.4rem;
    font-size: 1.7rem;
    background: #f9f9f9;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    display:flex;
    align-items: center;
    padding: 0 1rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border-bottom: .1rem solid #dedede;
  }
  header img{
    width: .8rem;
    height: 1.4rem;
    margin-left: .5rem;
  }
  header p{
    margin-left: 1rem;
  }
  .orderChildNav{
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: .8rem;
    background: white;
    position: fixed;
    left:0;
    top: 4.5rem;
    z-index: 2;
  }
  .orderChildNav p{
    flex: 1;
    font-size: 1.5rem;
    line-height: 4.2rem;
    text-align: center;

  }
  .orderChildNav p:first-child{
    color: #0cac9a;
    border-bottom:.2rem solid #0cac9a;
  }
  .orderProduct{
    width: 100%;
    margin-top: 9.6rem;
  }
  .orderProductList{
    background: white;
    padding: 1.6rem 1rem 1.2rem;
    display: flex;
    border-bottom: .2rem solid #f5f5f5;

  }
  .orderPage1{
    width:3.8rem ;
    height:3.8rem;
    margin-right:1rem ;
  }
  .orderProductListR{
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .orderProductListRHeader{
    display: flex;
    justify-content: space-between;
  }
  .orderProductListR h2{
    font-size: 1.5rem;
    color: #131313;
    /*font-weight: 100;*/
  }
  .orderProductListR h3{
    font-size: 1.2rem;
    color: #74dace;
    /*font-weight: 100;*/
  }
  .orderProductListR h4{
    font-size: 1.2rem;
    color: #a1a1a1;
    /*font-weight: 100;*/
  }
  .orderProductListR h5{
    font-size: 1.2rem;
    color: #a1a1a1;
    font-weight: 100;
  }
  .proBottom{
    display: flex;
    justify-content: space-between;
  }
  .proBottomR{
    color: #ffc56e;
    width: 6.4rem;
    text-align: center;
    font-size: 1.4rem;
    line-height:2.5rem;
    border: .1rem solid #ffc56e;
    -webkit-border-radius: .5rem;
    -moz-border-radius: .5rem;
    border-radius: .5rem;

  }
  .orderProPage2{
    margin-top: auto;
    /*background: white;*/
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column ;
    align-items: center;
    justify-content: center;
  }
  .orderProPage2 img{
    width:10.5rem ;
    height: 13.5rem;
    margin: 0 auto;
    margin-bottom: 1.5rem;
  }
  .orderProPage2 h1{
    font-size:1.7rem ;
    line-height: 3rem;

  }
  .orderProPage2 p{
    font-size:1.3rem ;
    line-height: 2.4rem;
    color: #9a9a9a;
    margin-bottom: 1.5rem;
  }
  .orderProPage2 h2{
    font-size:1.4rem ;
    line-height: 3rem;
    color: #40cdbe;
    text-align: center;
    border: .2rem solid #40cdbe;
    -webkit-border-radius: .5rem;
    -moz-border-radius: .5rem;
    border-radius: .5rem;
    width: 10rem;
    font-weight: 100;
  }
  .orderPage3{
    width: 9rem;
    height: 5.3rem;
    margin-right:1rem ;
  }
  .orderProductListR p{
    font-size: 1.2rem;
    color: #2ac7b6;
    font-weight: 100;
  }
  .headerClickBox{
    display: none;
    position: fixed;
    top: 4.5rem;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 11.6rem;
    background: white;
    padding: 2.2rem 1rem;
  }
  .headerClickBox p{
    float: left;
    display:inline-block;
    font-size:1.2rem ;
    line-height: 2.8rem;
    color: #a5a5a5;
    width: 23%;
    text-align: center;
    border: .1rem solid #a5a5a5;
    -webkit-border-radius: .5rem;
    -moz-border-radius: .5rem;
    border-radius: .5rem;
    margin-right: 2.5%;
    margin-bottom: 1rem;
  }
  .headerClickBox p:nth-of-type(1){
    color: #25c8b8;
    border: .1rem solid #25c8b8;
    background: #eafcfa;
  }
  .headerClickBox p:nth-of-type(4){
    margin-right: 0;
  }
  .headerClickBox p:nth-of-type(8){
    margin-right: 0;
  }
  .hidePage{
    width: 100%;
    height: 100%;
    background: black;
    opacity: .5;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    display: none;
  }
</style>
