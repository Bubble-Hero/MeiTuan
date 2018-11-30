<template>
    <div class="OrderSecond">
      <header>

          <router-link to="/order">
            <i class="iconfont">&#xe63c;</i>
          </router-link>
          <p>我的订单</p>
          <img src="../../../../static/img/o-c-f7.jpg" alt="">
      </header>
      <div class="orderChildNav">
          <p>全部</p>
          <p>待付款</p>
          <p>待评价</p>
          <p>待使用</p>
          <p>退款/售后</p>
      </div>
      <!-- Swiper -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><div class="orderProduct" :key="j" v-for="(i,j) in ordernavDatas">
            <div class="orderProductList"  :key="n" v-for="(m,n) in i[4].orderSecondDatas">
              <img :src="m.pic" alt="">
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
          <div class="swiper-slide"><div class="orderProduct" :key="j" v-for="(i,j) in ordernavDatas">
            <div class="orderProductList"  :key="n" v-for="(m,n) in i[4].orderSecondDatas">
              <img :src="m.pic" alt="">
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
          <div class="swiper-slide"><div class="orderProduct" :key="j" v-for="(i,j) in ordernavDatas">
            <div class="orderProductList"  :key="n" v-for="(m,n) in i[4].orderSecondDatas">
              <img :src="m.pic" alt="">
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
          <div class="swiper-slide"><div class="orderProduct" :key="j" v-for="(i,j) in ordernavDatas">
            <div class="orderProductList"  :key="n" v-for="(m,n) in i[4].orderSecondDatas">
              <img :src="m.pic" alt="">
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
          <div class="swiper-slide"><div class="orderProduct" :key="j" v-for="(i,j) in ordernavDatas">
            <div class="orderProductList"  :key="n" v-for="(m,n) in i[4].orderSecondDatas">
              <img :src="m.pic" alt="">
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
        </div>
      </div>

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
        var swiper = new Swiper('.swiper-container');
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

  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    /*text-align: center;*/
    font-size: 18px;
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
    top: 4.6rem;
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
  .orderProductList img{
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
    font-size: 1.4rem;
    line-height:2.5rem;
    padding: 0 .4rem;
    border: .1rem solid #ffc56e;
    -webkit-border-radius: .5rem;
    -moz-border-radius: .5rem;
    border-radius: .5rem;

  }
</style>
