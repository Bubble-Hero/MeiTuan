<template>
  <div class="all">
    <header>
      <p>
        <router-link to="/me">
        <i class="iconfont icon-guanbi1" style="color: #88dad3;"></i>
        </router-link>
      </p>
      <p>帮助</p>
    </header>
    <section>
      <div class="section-content">
      <h2>欢迎登录美团</h2>
      <div class="section-tel">
        <div class="area">
          <p>+86</p>
          <i class="iconfont icon-icon-copy"></i>
        </div>
        <div class="tel"><input type="tel" placeholder="请输入手机号"/></div>
      </div>
      <router-view></router-view>
      </div>
    </section>
  </div>

</template>

<script>
    import "../../../assets/css/base.scss"
    import "../../../../static/font/iconfont.css"
    export default {
        name: "MeLogin"
    }
</script>

<style scoped>
  header{
    height: 5rem;
    background:#fff;
    display: flex;
    justify-content: space-between;
  }
  header p{
    width: 5rem;
    text-align: center;
    font-size: 1.4rem;
    color: #10bba9;
    margin: auto 0;
  }
  section{
    background: #fff;
  }
  .section-content {
    background: #fff;
    padding-top: 4rem;
    margin: 0 2rem;

  }
  section h2{
    height: 8rem;
    text-align: center;
    font-size: 2.6rem;
    background: #fff;
    letter-spacing:0.2rem ;
  }
  .section-tel{
    height: 5.6rem;
    line-height: 5.6rem;
    background: #fff;
    border-bottom: 1px solid #dfdfdf;
    display: flex;
    justify-content:space-between;
  }
  .area{
    display: flex;
    justify-content: space-between;
    color: #575757;
  }
  .area i{
    margin: auto 0;
    font-size: 1.2rem;
  }
  .tel{
    width: 96%;
    height: 5.6rem;
  }
  .tel input{
    width: 100%;
    height: 100%;
    padding-left: 1.2rem;
    color: #111;
    font-size: 1.4rem;
    height: 2.6rem;
    border:none
  }


</style>
