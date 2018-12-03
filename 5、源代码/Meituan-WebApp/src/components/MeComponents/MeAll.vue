<template>
  <div class="all" style="max-height: 92vh;">
    <me-header></me-header>
    <me-section></me-section>
  </div>
</template>

<script>
  import "../../assets/css/base.scss"
  import "../../assets/font/iconfont.css"
  import MeHeader from "./MeHeader";
  import MeSection from "./MeSection";
    export default {
        name: "MeAll",
      data(){
          return{
            name:""
          }
      },
      components: {MeSection, MeHeader},
      methods:{
          checkuser(){
            if(!(this.name==""||this.name==null)){
              $(".username").html(this.name)
              $(".defphoto").css({display:"none"})
              $(".ueserphoto").css({display:"block"})
              //取消点击头像和文字跳转
              $(".loginBox").click(()=> {
                this.$router.push({name:'MeAll'});
              })
            }
          }
      },
      mounted(){
          //获取子路由登陆后的用户名
        //this.name=this.$route.params.name
        this.name=window.localStorage.getItem("username")
       // console.log(this.name)
        //改变当前名字和头像
        this.checkuser()

      }
    }
</script>

<style scoped>
  .all{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>
