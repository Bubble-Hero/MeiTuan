<template>
    <!-----------------nearnav------------->
    <div class="nearnav fixed">
      <ul>
        <li class="cli" v-for="(p,index) in nav1"><p>{{p.title}}</p><span></span></li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: "NearNav",
    props:["nav1"],
    mounted(){
      this.$nextTick(()=> {
        $('.cli').click(function () {
          $(this).addClass('active').siblings('li').removeClass('active');
          var i = $(this).index();
          $('.nearnav-li').eq(i).show().siblings('.nearnav-li').hide();
          $('.nearnav-li').eq(i).find('.secondNav-a').eq(0).addClass('changeStyle')
          //让点过的所有li里的a样式都消失 只保证当前进来的第一个有样式
          $('.nearnav-li').eq(i).siblings().find('.secondNav-a').removeClass('changeStyle')
          //再次点击当前让当前其他li里文字样式消失
          $('.nearnav-li').eq(i).find('.secondNav-a').not($('.nearnav-li').eq(i).find('.secondNav-a').eq(0)).removeClass('changeStyle')
          //页面同步
          $(".buf3").css({//"translate3d(-375px,0px,0px)",
            transform:function(){
              return "translate3d("+0+"px,0px,0px)"    //拼接字符串
            },
            transitionDuration:"300ms"
          })
          //滑到最左边
          $(".nav-ul").animate({
            scrollLeft:0+"px"
          },200)
        })
      })
    }
  }
</script>

<style lang="scss" scoped>
  .nearnav{
    background: #fff;
    z-index: 10000;
    width: 100%;
  }

  .nearnav ul{
    display: flex;
    padding: 1rem;
    justify-content: space-around;
  }
  .nearnav ul li{
    font-size: 1.3rem;
    color:#111;
    position: relative;
    display: flex;flex-direction: column;
    span{
      height:.2rem;
      width: 2rem;
      margin: auto;
      border-radius: 1rem;
    }
  }
  .active{
    color:red!important;
    font-size:1.4rem!important;
    font-weight: bold;
    position: relative;
    top:-.15rem;
    span{
      display: block;
      background-color: red;

    }
  }
</style>
