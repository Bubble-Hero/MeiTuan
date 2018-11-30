<template>
    <router-view></router-view>
</template>

<script>
  import $ from "jquery"
  import NearSwiper from "../components/NearComponents/NearSwiper";
  import NearNav from "../components/NearComponents/NearNav";
  import NearList from "../components/NearComponents/NearList";
  import Apis from "../apis/Apis";

  export default {
    name: "near",
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
      },
      scrolltop(){
        $("main").scroll(function () {
          let a = $("main").scrollTop();
          if (a>190){
            $(".nearnav").css({
              "position":"fixed",
            })
          }
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
      this.scrolltop()
    }
</script>

<style scoped>

</style>
