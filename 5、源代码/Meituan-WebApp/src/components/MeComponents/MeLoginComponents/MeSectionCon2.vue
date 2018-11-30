<template>
  <div class="section-con">
    <div class="section-pass">
      <input :type="this.registration_data.pwdType"
             placeholder="请输入密码" @on-change="changeType"/>
      　<img :src="this.registration_data.src" @click="changeType"/>
      <!--<input type="password" placeholder="请输入密码"/>-->
      <!--<i class="iconfont icon-icon-copy"></i>-->
    </div>
    <button>登录</button>
    <div class="login-type">
      <router-link to="/me/meLogin/meSectionCon1">
      <p class="ft">验证码登录</p>
      </router-link>
      <p class="ft">忘记密码</p>
    </div>
  </div>

</template>

<script>
    export default {
        name: "MeSectionCon2",
      data () {
        return {
          registration_data:{
            pwdType:"password",
            src:"../../../../static/img/m_m1.gif"
          }
        }
      },
      methods:{
        changeType(){
          if(this.registration_data.pwdType=="password"){
            this.registration_data.pwdType="text"
          }else{
            this.registration_data.pwdType="password"
          }
          this.registration_data.src=this.registration_data.src
          ==require("../../../../static/img/m_m2.gif")?
            require("../../../../static/img/m_m1.gif")
            :require("../../../../static/img/m_m2.gif");
        }
      }
    }

</script>

<style scoped>

  .section-pass{
    position: relative;
    height: 5.6rem;
    line-height: 5.6rem;
    background: #fff;
    border-bottom: 2px solid #dfdfdf;
  }
  .section-pass img{
    position: absolute;
    right: .8rem;
    top: 50%;
    font-size: 1.2rem;
  }
  .ft{
    font-size: 1.4rem;
  }
    input{
    width: 100%;
    color: #111;
    font-size: 1.6rem;
      height: 5.6rem;
    border:none;
      outline: none;
  }
  .section-con button{
    width:100%;
    height: 4.6rem;
    line-height: 4.6rem;
    outline: none;
    border-radius: 3rem;
    border: none;
    background: #b1f2ee;
    color: #fff;
    font-size: 1.6rem;
    margin-top: 2rem;
  }
  .login-type{
    display: flex;
    justify-content: space-between;
    height: 6.2rem;
    line-height: 6.2rem;
  }

</style>
