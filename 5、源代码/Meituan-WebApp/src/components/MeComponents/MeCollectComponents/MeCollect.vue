<template>
  <div class="all">
    <header>
      <div class="header-top">
        <div style="width:13rem">
          <router-link to="/me/meAll">
            <i class="iconfont icon-icon-copy"></i>
          </router-link>
          <p>我的收藏</p>
        </div>
        <div class="header-top-r">编辑</div>
      </div>
      <div class="header-down">
        <ul class="sublist">
          <li class="sublist-li" @click="change">
            <a href="#">
              <p>商家</p>
            </a>
          </li>
          <li class="sublist-li" @click="change">
            <a href="#">
              <p>商品</p>
            </a>
          </li>
          <li class="sublist-li" @click="change">
            <a href="#"><p>内容</p></a>
          </li>
        </ul>
      </div>
    </header>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><section>
          <!--------商家列表-------------->
          <ul class="goodslist">
            <li :key="i" v-for="(p,i) in prode.product">
              <a href="#">
                <div class="goodslist-img"><img :src="p.pic"></div>
                <div class="goodslist-con">
                  <div class="goodslist-con-one">
                    <div class="goodslist-onee">
                      <h3>{{p.title}}</h3>
                      <span><img :src="p.icon"/></span>
                    </div>
                    <p>2.5km</p>
                  </div>
                  <div class="goods">
                    <img class="goodsimg" :src="p.good">
                    <p>{{p.price}}</p>
                  </div>
                  <div><p>{{p.pro}}</p></div>
                </div>
              </a>
            </li>
          </ul>
        </section></div>
        <div class="swiper-slide"><section>
          <!--------商家列表-------------->
          <ul class="goodslist">
            <li :key="i" v-for="(p,i) in prode.product">
              <a href="#">
                <div class="goodslist-img"><img :src="p.pic"></div>
                <div class="goodslist-con">
                  <div class="goodslist-con-one">
                    <div class="goodslist-onee">
                      <h3>{{p.title}}</h3>
                      <span><img :src="p.icon"/></span>
                    </div>
                    <p>2.5km</p>
                  </div>
                  <div class="goods">
                    <img class="goodsimg" :src="p.good">
                    <p>{{p.price}}</p>
                  </div>
                  <div><p>{{p.pro}}</p></div>
                </div>
              </a>
            </li>
          </ul>
        </section></div>
        <div class="swiper-slide"><section>
          <!--------商家列表-------------->
          <ul class="goodslist">
            <li :key="i" v-for="(p,i) in prode.product">
              <a href="#">
                <div class="goodslist-img"><img :src="p.pic"></div>
                <div class="goodslist-con">
                  <div class="goodslist-con-one">
                    <div class="goodslist-onee">
                      <h3>{{p.title}}</h3>
                      <span><img :src="p.icon"/></span>
                    </div>
                    <p>2.5km</p>
                  </div>
                  <div class="goods">
                    <img class="goodsimg" :src="p.good">
                    <p>{{p.price}}</p>
                  </div>
                  <div><p>{{p.pro}}</p></div>
                </div>
              </a>
            </li>
          </ul>
        </section></div>
      </div>
    </div>
  </div>

</template>

<script>
    import meData from "../../../apis/Apis"
    import $ from "jquery"
    import Swiper from "swiper"
    export default {
        name: "MeCollect",
      data () {
        return {
          prode:[]
        }
      },
      methods: {
        __initPageData () {
          meData.getMeData(data => {
            this.prode = data
            console.log(this.prode)
          })
        },
        change(){
          $(".sublist-li").click(function () {
            $(this).css({
                "border-bottom":"3px solid #48c0aa",
                "color": "#48c0aa"
            })
            $(this).siblings().css({
              "border-bottom":"none",
              "color":" #5b5b5b"
            })
          })
        }
      },
      mounted(){
        new Swiper ('.swiper-container', {
          //direction: 'vertical', // 垂直切换选项
          })
      },
      created () {
        this.__initPageData()
      }
    }
</script>

<style scoped>
  header{
    width: 100%;
    height: 9.2rem;
    position: fixed;
    background: #f6f6f6;
    z-index: 100;
  }
  .header-top{
    width: 100%;
    height: 5rem;
    display: flex;
    font-size: 1.4rem;
    justify-content: space-between;
    border-bottom: 1px solid #e3e3e3;
  }
  .header-top div {
    width: 5rem;
    height: 5rem;
    display: flex;
    line-height: 5rem;
    justify-content: space-between;
  }
  .header-top div i{
    width: 50%;
  text-align: center;
    font-size: 2rem;
    margin: auto 0;
    margin-left: 1rem;
  }
  .header-top-r{
    text-align: center;
    font-size: 1.4rem;
  }
  section{
    margin-top: 9.2rem;
   background: #fff;
  }
  .sublist{
    height: 4.2rem;
    background: #fff;
    display: flex;

  }
  .sublist li{
    color: #5b5b5b;
    width: 35%;
    height:4.2rem;
    line-height: 4.2rem;
    text-align: center;
    font-size: 1.6rem;

  }
  .sublist li:first-child{
    border-bottom: 3px solid #48c0aa;
    color: #48c0aa;
  }

  .goodslist li{
    height: 11rem;
    border-bottom: 1px solid #e3e3e3;
    padding: 0 1rem;
  }
  .goodslist-img{
    float: left;
    width: 30%;
    height: 11rem;
    display: flex;
  }
  .goodslist-img img{
    margin: auto;

  }
  .goodslist-con{
    margin: 2rem 0;
    float: right;width: 66%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
 }
  .goodslist-con-one{
    display: flex;
    justify-content: space-between;
  }

  .goodslist-onee{
    display: flex;
  }
  .goodslist-onee h3{
    line-height: 1.4rem;
    margin-right:0.5rem;
  }
  .goods{
    display: flex;

  }
  .goods p{
    margin: auto 0;
  }
  .goodsimg{
    margin: 0.5rem 0;
    margin-right: 2%;
  }
</style>
