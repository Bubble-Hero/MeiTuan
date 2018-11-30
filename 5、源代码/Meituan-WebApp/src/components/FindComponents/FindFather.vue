<template>
  <div class="find">
    <find-header></find-header>
    <find-nav></find-nav>
    <find-list></find-list>
    <!----返回顶部----->
    <!--<div class="back">^</div>-->
  </div>
</template>

<script>
  import $ from "jquery";
  import Swiper from "Swiper";
  import FindHeader from "./FindHeader";
  import FindNav from "./FindNav";
  import FindList from "./FindList";

  export default {
    name: "FindFather",
    components: {FindList, FindNav, FindHeader},
    methods:{
        // goBack(){
        //   let elm = $(".back");
        //   let startPos = (elm).offset().top;
        //   // $.event.add(window, "scroll", function() {
        //   let p = $(window).scrollTop();
        //   if((p) > startPos){
        //     (elm).css({right:'1',opacity:'.5'});
        //   }else{
        //     (elm).css({right:'-3.5rem',opacity:'.8'});
        //   }
        // }

      }

  }
</script>

<style scoped>
  .find{
    max-height: 92vh;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .back{
    display: block;
    width: 4rem;
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    border: .1rem solid #c1c1c1;
    border-radius: 50%;
    font-size: 2rem;
    font-weight: bold;
    color: black;
    background: #fdc336;
    opacity: 0.7;
    position: fixed;
    bottom: 10rem;
    right: -3.5rem;
    z-index: 100;
  }
</style>
