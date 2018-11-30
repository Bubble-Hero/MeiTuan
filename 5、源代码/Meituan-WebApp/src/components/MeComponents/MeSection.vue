<template>
  <section>
    <!---->
    <div class="section-login">
      <div class="bg"></div>
      <div class="radius">
        <router-link to="/me/meLogin" class="loginBox">
          <div>
            <img src="../../../static/img/m_touxiang.gif">
          </div>
        </router-link>
      </div>
      <router-link to="/me/meLogin">
        <p>请点击登录</p>
      </router-link>
      <!--<img src="../../../static/img/m_banner.gif"/>-->
      <!--<p style="line-height: 2.8rem;font-size: 1.6rem;font-weight: bolder;">请点击登录</p>-->
      <!--<span><img src="../../../static/img/m_touxiamg.gif"></span>-->
    </div>
    <div class="section-con">
      <ul class="section-spz">
        <li>
          <router-link to="/me/meCollect">
            <img src="../../../static/img/m_s.gif">
            <p>收藏</p>
          </router-link>
        </li>
        <li>
          <img src="../../../static/img/m_p.gif">
          <p>收藏</p>
        </li>
        <li>
          <img src="../../../static/img/m_z.gif">
          <p>最近评价</p>
        </li>
      </ul>
      <!----------美团钱包-------------->
      <div class="mt-wallet">
        <h2>美团钱包</h2>
        <ul class="wallet-list">
          <li :key ="i" v-for="(w,i) in prode.Mewallet">
            <img :src="w.pic">
            <p>{{w.title}}</p>
          </li>

        </ul>
      </div>
      <!----------美团服务-------------->
      <div class="mt-service">
        <h2>美团服务</h2>
        <ul class="service-list">
          <li v-for="s in prode.Service">
            <img :src="s.pic">
            <p>{{s.title}}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
  import meData from "../../apis/Apis"
  export default {
    name: "MeSection",
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
          }
        },
        created () {
          this.__initPageData()
        }


  }
</script>

<style scoped>
  section{
    background: #fff;
    flex: 1;
    overflow: auto;
  }
  .section-login{
    position: relative;
    width: 100%;
    background:linear-gradient(to right,#17ceb8,#29c7c8,#3bb9da);
    height: 6rem;
    top:-.1rem;
  }
  .bg{
    height: 4rem;
  }
  .radius{
    height: 2.2rem;
    width:100%;
    display: flex;
    background: #fff;
    position: relative;
    border-top-left-radius: 65%;
    border-top-right-radius: 65%;
  }
  .radius div{
    margin: auto;
    margin-top: -3rem;
    border-radius: 50%;
    border: none;
  }
  .radius img{
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
  }
  .section-login p{
    text-align: center;
    font-size: 1.4rem;
    font-weight: bolder;
    margin: 0 auto ;
    white-space: nowrap;
    margin-top: 1rem;

  }
  .loginBox{
    margin: auto;
  }
  .section-login span{
    position: absolute;
    top:0 ;
    left: 13rem
  }
  .section-con{
    padding: 0 1rem;
    margin-top:4rem;
  }
  .section-spz{
    background: #fff;
    height: 8.4rem;
    border-bottom: 1px solid #f6f6f6;
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
  .section-spz li{
    margin: auto 0;
    flex: 1;
  }
  .section-spz li img{
    width: 2.4rem;
    height: 2.4rem;
  }
  .mt-wallet{
    margin-top: 1.5rem;
    background: #fff;
  }
  .mt-wallet h2{
    height: 3.4rem;
  }
  .wallet-list{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1.6rem;
    border-bottom: 1px solid #f6f6f6;
    justify-content: space-between;
    text-align: center;
  }
  .wallet-list li{
    width: 25%;
    height: 5.0rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 1.4rem;
  }
  .wallet-list li img{
    margin: 0 auto;
  }
  .mt-service{
    margin-top: 1.5rem;
    background: #fff;
  }
  .mt-service h2{
    height: 3.4rem;
  }
  .service-list{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1.6rem;
    border-bottom: 1px solid #f6f6f6;
  }
  .service-list li{
    width: 25%;
    height: 5.0rem;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 1.4rem;
  }
  .service-list li img{
    margin: 0 auto;
  }
</style>
