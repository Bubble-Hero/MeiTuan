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
          <li class="sublist-li">
            <a href="#">
              <p>商家</p>
            </a>
          </li>
          <li class="sublist-li">
            <a href="#">
              <p>商品</p>
            </a>
          </li>
          <li class="sublist-li">
            <a href="#"><p>内容</p></a>
          </li>
        </ul>
      </div>
    </header>
    <div class="swiper-container">
      <div class="swiper-wrapper buf2">
        <div class="swiper-slide"><section>
          <!--------商家列表-------------->
          <ul class="goodslist">
            <li :key="i" v-for="(p,i) in prode.product1">
              <a href="#"  class="flex-box">
                <div class="goodslist-img"><img :src="p.pic"></div>
                <div class="goodslist-con">
                  <div class="goodslist-con-one">
                    <div class="goodslist-onee">
                      <h3>{{p.title}}</h3>
                      <span><img v-for="(is,ts) in p.icon" :src="is"/></span>
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
            <li :key="i" v-for="(p,i) in prode.product2">
              <a href="#" class="flex-box">
                <div class="goodslist-img"><img :src="p.pic"></div>
                <div class="goodslist-con">
                  <div class="goodslist-con-one">
                    <div class="goodslist-onee">
                      <h3>{{p.title}}</h3>
                      <span><img v-for="(is,ts) in p.icon" :src="is"/></span>
                    </div>
                    <p>{{p.range}}</p>
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
            <li :key="i" v-for="(p,i) in prode.product3">
              <a href="#"  class="flex-box">
                <div class="goodslist-img"><img :src="p.pic"></div>
                <div class="goodslist-con">
                  <div class="goodslist-con-one">
                    <div class="goodslist-onee">
                      <h3>{{p.title}}</h3>
                      <span><img v-for="(is,ts) in p.icon" :src="is"/></span>
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
          //导航点击事件
          $(".sublist-li").click(function () {
            let index=$(this).index()
            $(this).css({
                "border-bottom":"3px solid #48c0aa",
                "color": "#48c0aa"
            })
            $(this).siblings().css({
              "border-bottom":"none",
              "color":" #5b5b5b"
            })
            let width= $("header")[0].offsetWidth
            console.log(width)
          // 页面滑动
            $(".buf2").css({//"translate3d(-375px,0px,0px)",
              transform:function(){
                let transX=index*width*-1;
                return "translate3d("+transX+"px,0px,0px)"    //拼接字符串
              },
              transitionDuration:"300ms"
            })
          })
          //页面滑动事件
          new Swiper ('.swiper-container', {
            //direction: 'vertical', // 垂直切换选项
            on: {
              transitionStart: function () {
                ss(this.activeIndex)       //导航栏同步滑动 底线与字体颜色的同步改变
              }
            }
          })
          function ss(num) {
            $(".sublist-li").eq(num).css({
              "border-bottom":"3px solid #48c0aa",
              "color": "#48c0aa"
            })
            $(".sublist-li").eq(num).siblings().css({
              "border-bottom":"none",
              "color":" #5b5b5b"
            })
          }

        }
      },
      mounted(){
        this.change()
      },
     created() {
        this.__initPageData()
      }
    }
</script>

<style lang="scss" scoped>
  header{
    width: 100%;
    height: 9.2rem;
    position: fixed;
    background: #f6f6f6;
    z-index: 100;
  }
  .flex-box{
    display: flex;
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
    width: 10rem;
    height: 11rem;
    display: flex;
    margin-right: 1rem;
  }
  .goodslist-img img{
    width: 100%;
    padding: .5rem;

  }
  .goodslist-con{
    margin: 2rem 0;
    float: right;flex:1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
 }
  .goodslist-con-one{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    margin-top: -1rem;
  }

  .goodslist-onee{
    display: flex;
    img{
        width:1.5rem;
    }
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
