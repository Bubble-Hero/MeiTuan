<template>
    <div>
        <div class="set-header">
          <router-link to="/me/meAll" class="backBox">
            <i class="iconfont">&#xe63c;</i>
          </router-link>
            <span>设置</span>
        </div>
        <div class="set-row1">
          <div class="rowbox"><span>个人信息</span><i class="iconfont">&#xe63b;</i></div>
          <div class="rowbox"><span>换绑手机</span><div><span class="username">{{name}}</span><i class="iconfont">&#xe63b;</i></div></div>
          <div class="rowbox"><span>社交账号绑定</span><div><span class="username">绑定/解绑</span><i class="iconfont">&#xe63b;</i></div></div>
          <div class="rowbox"><span>登录密码</span><div><span class="username">修改</span><i class="iconfont">&#xe63b;</i></div></div>
          <div class="rowbox"><span>支付设置</span><i class="iconfont">&#xe63b;</i></div>
        </div>
        <div class="set-row1 set-row2">
          <div class="rowbox"><span>换肤</span><i class="iconfont">&#xe63b;</i></div>
          <div class="rowbox"><span>安全中心</span><div><span class="username"></span><i class="iconfont">&#xe63b;</i></div></div>
          <div class="rowbox"><span>通用</span><div><span class="username"></span><i class="iconfont">&#xe63b;</i></div></div>
          <div class="rowbox"><span>关于美团</span><div><span class="username"></span><i class="iconfont">&#xe63b;</i></div></div>
        </div>
      <div class="exit-btn" @click="exit">退出账号</div>
    </div>
</template>

<script>
    export default {
        name: "exit",
      data(){
          return{
            name:""
          }
      },
      methods:{
          getName(){
            this.name=window.localStorage.getItem("username")
          },
        exit(){
              window.localStorage.removeItem("username")
              this.$router.replace({name:'MeAll'})
        }
      },
      mounted(){
          this.getName()
      }
    }
</script>

<style lang="scss" scoped>
    .set-header{
      background-color: #fff;
      display: flex;
      align-items: center;
      position: relative;
      font-size: 1.7rem;
      padding: .5rem;
      margin-bottom: 1rem;
      .backBox{
        position: absolute;
        left: 1.5rem;
      }
      .iconfont{
        color: #28c0ac;
        font-size: 1.8rem;
      }
      span{
        margin: auto;
      }
    }
  .set-row1{
    background-color: #fff;
    margin-bottom: 1rem;
    color: #111;
    .rowbox{
      width: 100%;
      text-align: left;
      padding: .8rem;
      font-size: 1.4rem;
      margin-left: 1.2rem;
      border-bottom: 1px solid #eee;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .iconfont{
          margin-right: 1rem;
        margin-left: 1rem;
          color: #888;
        font-size: 1.2rem;
      }
    .username,.smallspan{
      font-size: 1.2rem;
      color: #888;
      }
    }
  }
  .exit-btn{
    background-color: #fff;
    margin:3rem 1rem;
    font-size:1.4rem;
    text-align: center;
    padding: .8rem;
    border: 1px solid #ddd;
    border-radius: 1rem;
    color: #111;
  }
</style>
