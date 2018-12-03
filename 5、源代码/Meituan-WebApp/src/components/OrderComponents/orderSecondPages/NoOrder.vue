<template>
  <div class="all">
    <div class="No-header">我的订单</div>
    <div class="main">
          <div>
            <img src="../../../../static/img/no-order.jpg">
          </div>
          <p>登录后可查看订单、收藏记录</p>
          <div class="login-btn" @click="goLogin">登录</div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "NoOrder",
      methods:{
          goLogin(){
            this.$router.push({name:'MeSectionCon1'})
          }
      }
    }
</script>

<style lang="scss" scoped>
  .all{
    display: flex;
    width: 100%;
    height: 100%;
  }
    .No-header{
      width: 100%;
      position: fixed;
      top:0;
      left:0;
      text-align: center;
      background-color:#eee;
      font-size: 1.6rem;
      color: #000;
      padding: 1rem;
    }
  .main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    img{
      width: 10rem;
      height: 10rem;
      border-radius: 50%;
    }
    p{
      font-size: 1.4rem;
      color: #999;
    }
    .login-btn{
      padding: .8rem 5rem;
      background-color:#28c0ac;
      margin-top:1rem;
      color: #fff;
      font-size: 1.4rem;
    }
  }
</style>
