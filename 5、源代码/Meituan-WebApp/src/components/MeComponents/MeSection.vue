<template>
    <section>
      <div class="section-login">
        <img src="../../../static/img/m_banner.gif"/>
        <p style="line-height: 2.8rem;font-size: 1.6rem;font-weight: bolder;">请点击登录</p>
        <span><img src="../../../static/img/m_touxiamg.gif"></span>
      </div>
      <div class="section-con">
        <ul class="section-spz">
          <li>
            <img src="../../../static/img/m_s.gif">
            <p>收藏</p>
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
        <div class="mt-wallet">
          <h2>美团钱包</h2>
          <ul class="wallet-list">
          <li v-for="w in wallet">
            <img :src="w.pic">
            <p>{{w.title}}</p>
          </li>

        </ul>
        </div>
        <div class="mt-service">
          <h2>美团服务</h2>
          <ul class="service-list">
            <li v-for="s in service">
              <img :src="s.pic">
              <p>{{s.title}}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
</template>

<script>
    export default {
        name: "MeSection",
      data(){
          return{
            wallet:[{"pic":"../../../static/img/m_q.gif","title":"我的钱包"},
            {"pic":"../../../static/img/m_h.gif","title":"红包/卡券"},
            {"pic":"../../../static/img/m_y.gif","title":"余额"},
            {"pic":"../../../static/img/m_l.gif","title":"理财"},
            {"pic":"../../../static/img/m_c.gif","title":"手机充值"},
            ],
            service:[
              {"pic":"../../../static/img/m_h.gif","title":"会员中心"},
              {"pic":"../../../static/img/m_m.gif","title":"美团公益"},
              {"pic":"../../../static/img/m_y.gif","title":"免流用美团"},
              {"pic":"../../../static/img/m_f.gif","title":"发票助手"},
              {"pic":"../../../static/img/m_w.gif","title":"我要合作"},
              {"pic":"../../../static/img/m_g.gif","title":"关于美团"},
            ]
          }
      }
    }
</script>

<style scoped>
  section{
    background: #fff;
  }
  .section-login{
    position: relative;
    width: 100%;
  }
  .section-login p{
    width: 8.4rem;
    margin: 0 auto;
    font-weight: bolder;
  }
  .section-login span{
    position: absolute;
    top:0 ;
    left: 13rem
  }
  .section-con{
    padding: 0 1rem;
    margin-top:1.2rem;
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
    padding-left: 1.4rem;
    flex-wrap: wrap;
    margin-bottom: 1.6rem;
    border-bottom: 1px solid #f6f6f6;
    justify-content: space-between;
  }
  .wallet-list li{
    margin-right: 2.6rem;
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
    padding-left: 1.4rem;
    flex-wrap: wrap;
    margin-bottom: 1.6rem;
    border-bottom: 1px solid #f6f6f6;
  }
  .service-list li{
    margin-right: 2.6rem;
    height: 5.0rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 1.4rem;
  }
  .service-list li img{
    margin: 0 auto;
  }
</style>
