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
    <section>
      <!--------商家列表-------------->
      <ul class="goodslist">
        <li :key="i" v-for="(p,i) in prode.product">
          <a href="#">
            <dl>
              <dt class="goodslist-img"><img :src="p.pic"></dt>
              <dd class="goodslist-con">
                <div class="goodslist-con-one">
                  <div class="goodslist-onee">
                    <h3>{{p.title}}</h3>
                    <span><img :src="p.icon"/></span>
                  </div>
                  <p>2.5km</p>
                </div>
                <div><img :src="p.good"></div>
                <div><p>{{p.pro}}</p></div>
              </dd>
            </dl>
          </a>
        </li>
      </ul>
    </section>
  </div>

</template>

<script>
    import meData from "../../../apis/Apis"
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
        }
      },
      created () {
        this.__initPageData()
      }
    }
</script>

<style scoped>
  header{
    height: 9.2rem;
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
  }
  .header-top-r{
    text-align: center;
    font-size: 1.4rem;
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
  .goodslist li dl{
    height: 100%;
    display: flex;
  }
  .goodslist li dt {
    width: 30%;
    margin: auto 0;

  }
  .goodslist li dt img{
    margin: auto;
  }
  .goodslist li dd{
    margin: auto 0;
  }
  .goodslist-con-one{
    display: flex;
  }
  .goodslist li dd h3{
    line-height: 3rem;
    font-size: 1.6rem;
  }
  .goodslist-onee{
    display: flex;
  }
</style>
