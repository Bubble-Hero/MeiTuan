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
      <div class="orderProductList">
        <img src="../../../../static/img/o-c-f1.jpg" alt="">
        <div class="orderProductListR">
          <div class="orderProductListRHeader">
            <h2>鹿鸣驿火锅代金券</h2>
            <h3>已评价</h3>
          </div>
          <h4>数量：1</h4>
          <div class="proBootom"><h5>总价：￥85.0</h5><div>再来一单</div></div>
        </div>
      </div>
      <div class="orderProductList">
        <img src="../../../../static/img/o-c-f2.jpg" alt="">
        <div class="orderProductListR">
          <div class="orderProductListRHeader">
            <h2>鹿鸣驿火锅代金券</h2>
            <h3>已评价</h3>
          </div>
          <h4>数量：1</h4>
          <h5>总价：￥85.0</h5>
        </div>
      </div>
      <div class="orderProductList">
        <img src="../../../../static/img/o-c-f3.jpg" alt="">
        <div class="orderProductListR">
          <div class="orderProductListRHeader">
            <h2>鹿鸣驿火锅代金券</h2>
            <h3>已评价</h3>
          </div>
          <h4>数量：1</h4>
          <h5>总价：￥85.0</h5>
        </div>
      </div>
      <div class="orderProductList">
        <img src="../../../../static/img/o-c-f4.jpg" alt="">
        <div class="orderProductListR">
          <div class="orderProductListRHeader">
            <h2>鹿鸣驿火锅代金券</h2>
            <h3>已评价</h3>
          </div>
          <h4>数量：1</h4>
          <h5>总价：￥85.0</h5>
        </div>
      </div>
    </div>
</template>

<script>

    export default {
        name: "OrderSecondPage"
    }
</script>

<style scoped>
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
    display: flex;
    margin-top: 4.6rem;
    justify-content: space-around;
    margin-bottom: .8rem;
    background: white;
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
</style>
