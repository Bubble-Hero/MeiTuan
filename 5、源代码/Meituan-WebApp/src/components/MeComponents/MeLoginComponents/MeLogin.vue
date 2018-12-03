<template>
  <div class="all">
    <div class="logining" style="display: none">
      <div class="loading">
        <span class="logintxt">登录中...</span>
      </div>
    </div>
    <header>
      <p>
        <router-link to="/me">
        <i class="iconfont" style="color: #88dad3;">&#xe66b;</i>
        </router-link>
      </p>
      <p>帮助</p>
    </header>
    <section>
      <div class="section-content">
      <h2 class="Big-title">欢迎登录美团</h2>
      <div class="section-tel">
        <div class="area">
          <p class="eightsix">+86</p>
          <i class="iconfont">&#xe63b;</i>
        </div>
        <div class="tel"><input id="t1" type="text" placeholder="请输入手机号"/></div>
      </div>
      <router-view ></router-view>
      </div>
      <div class="login-footer">
        <div class="type">
          <img src="../../../../static/img/m_l1.gif">
          <img src="../../../../static/img/m_l2.gif">
        </div>
        <p class="tip">登录代表你已同意<a href="https://www.meituan.com/about/terms"><span>美团用户协议</span>、<span>隐私政策</span></a></p>
      </div>
    </section>

  </div>

</template>

<script>
  //Vue.http.options.emulateJSON = true;//这个的设置了提交的方式的是post的方式提交
    export default {
        name: "MeLogin",
      data(){
          return {
           // name:""
          }
      },

    }
</script>

<style scoped>
  .logining{

    position: fixed;
    background-color: rgba(0,0,0,.2);
    height: 100%;
    width: 100%;
    z-index: 100000;
    display: flex;
  }
  .loading{
    margin: auto;
    display: flex;
    background-color: rgba(0,0,0,0.3);
    flex-direction: column;
    justify-content: space-between;
    width: 7rem;
    height: 8rem;
    text-align: center;
    border-radius: .8rem;
    color: #fff;
    padding: .5rem;

  }
  .loading span{
   margin: auto;font-size: 1.2rem;
  }
  .all{
    background-color: #fff;
  }
  .login-footer{
    margin-top: 25rem;
    width: 100%;

  }
  .type{
    height: 11.5rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    margin: 0 8rem;
  }
  .tip{
    color: #8c8c8c;
    height: 2.8rem;
    text-align: center;
    font-size: 1.4rem;
  }
  .type img{
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
    margin: auto 0;
  }
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
    position: relative;
  }
  .section-content {
    background: #fff;
    padding-top: 4rem;
    margin: 0 2rem;

  }

  section .tip span{
    color: #1bbfb3;
  }
  .eightsix{
    font-size: 1.6rem;white-space: nowrap;
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
    align-items: center;
  }
  .area i{
    margin-left: .5rem;
    font-size: 1.2rem;
    margin-top: .3rem;
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
    font-size: 1.6rem;
    height: 2.6rem;
    border:none
  }


</style>
