<template>
  <div class="con">
    <p>未注册的手机号验证后自动创建美团账户</p>
    <button>获取短信验证码</button>
    <router-link to="/me/meLogin/meSectionCon2">
      <p style="color: #6d6d6d;">密码登录</p>
    </router-link>
    <div class="type">
      <img src="../../../../static/img/m_l1.gif">
      <img src="../../../../static/img/m_l2.gif">
    </div>
    <p class="tip">登录代表你已同意<span>美团用户协议</span>、<span>隐私政策</span></p>
  </div>
</template>

<script>
    export default {
        name: "MeSectionCon1"
    }
</script>

<style scoped>
  section .con p{
    color: #bababa;
    height: 3.8rem;
    line-height: 3.8rem;
  }
  section .con button{
    width:100%;
    height: 4.6rem;
    line-height: 4.6rem;
    outline: none;
    border-radius: 0.5rem;
    border: none;
    background: #b1f2ee;
    color: #fff;
    font-size: 1.6rem;
    margin: 1.5rem 0;
  }
  .type{
    height: 11.5rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    margin: 0 3rem;
    margin-top:2.5rem;
  }
  .type img{
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
    margin: auto 0;
  }
  section .tip{
    color: #8c8c8c;
  }
  section .tip span{
    color: #1bbfb3;
  }
</style>
