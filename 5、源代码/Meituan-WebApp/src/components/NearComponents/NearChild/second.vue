<template>
  <div class="all" style="background: #fff;max-height: 92vh;">
    <!-----------------header------------->
    <header>
      <p class="header-title"><i class="iconfont">&#xe64f;</i>蜀留香<i class="iconfont">&#xe505;</i></p>
      <div class="header-input">
        <input type="text" value="找附近的吃喝玩乐">
        <span></span>
      </div>
    </header>
    <!----------------main---------------->
    <main v-for="(is,ts) in nearlist">
      <near-swiper></near-swiper>
      <!--<div class="navbox">-->
        <near-nav :nav1="is.nav"></near-nav>
        <!------------------nearlist------------>
        <near-list v-for="(i,s) in nearlist[0].box" :items="i"></near-list>
      <!--</div>-->
    </main>
  </div>
</template>

<script>
  import $ from "jquery"
  import NearSwiper from "../NearSwiper";
  import NearNav from "../NearNav";
  import NearList from "../NearList";
  import Apis from "../../../apis/Apis";
  export default {
    name: "second",
    components: {NearList, NearNav, NearSwiper},
    data(){
      return{
        nearlist:[]
      }
    },
    methods:{
      _initPageData() {
        Apis.getNearlistData(data=>{
          this.nearlist = data
          console.log(this.nearlist)
        })
      }
    },
    created(){
      //首页加载数据
      this._initPageData()
    },
    mounted(){
      $(function(){
        // alert(1)
        $('.nearnav-li').eq(0).show();
        $(".cli").eq(0).addClass('active');
        $('.cli').click(function(){
          $(this).addClass('active').siblings('li').removeClass('active');
          var i = $(this).index();
          $('.nearnav-li').eq(i).show().siblings('.nearnav-li').hide();
        })
      }),
        $(function () {
          $("main").scroll(function() {
            let offSetTop = $("main").scrollTop();
            if(offSetTop > 192){
              $(".nearnav").css({
                "position": "fixed",
                "left":"0",
                "top":"4.8rem",
                "border-bottom":".1rem solid #ccc",
              })
              $(".nearnav-li").css({
                "marginTop":"51.39px"
              })
            }else{
              $(".nearnav").css({
                "position": "static",
                "border-bottom":"0rem solid #ccc"
              })
              $(".nearnav-li").css({
                "marginTop":"0"
              })
            }
          })
        })
    }
  }
</script>

<style lang="scss" scoped>
  /*.navbox{*/
    /*position: relative;*/
  /*}*/

  .all{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  main{
    flex: 1;
    overflow: auto;
  }
  header{
    position: fixed;
    z-index: 10000;
    width: 100%;
    height: 4.8rem;
    display: flex;
    align-items: center;
    padding: 0 10px;
    background: #f9f9f9;
    border-bottom: .5px solid #b3b3b3;
  }
  header .header-title{
    font-size:1.2rem;display: flex;align-items: center;
    .iconfont:first-child{
      color:#aaa;font-size: 1.3rem;margin-right: .5rem;
    }
    .iconfont:last-child{
      margin-left: .4rem;font-size: 2rem;
    }
  }
  header .header-input{
    flex: 1;
    padding-right: 2.3rem;
    position: relative;
  }
  header .header-input span{
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    background: url("../../../../static/img/n-search.png");
    background-size: 1.5rem 100%;
    top: 1rem;
    left: 6.2rem;
  }
  header .header-input input{
    width: 100%;
    height: 2.9rem;
    margin-left: .8rem;
    text-align: center;
    background: #e6e7e8;
    border: 0;
    color: #919294;
    border-radius: 50px;
  }

</style>
