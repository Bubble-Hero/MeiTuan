<template>
  <div class="order"  style="max-height: 92vh;">
    <order-header></order-header>
    <order-nav></order-nav>
    <order-section></order-section>
  </div>
</template>

<script>
  import $ from 'jquery';
  import OrderHeader from "./OrderHeader";
  import OrderNav from "./OrderNav";
  import OrderSection from "./OrderSection";
  export default {
    name: "OrderFinal",
    components: {OrderSection, OrderNav, OrderHeader},
    mounted(){
      $(".order").scroll(function() {
        let offSetTop = $(".order").scrollTop();
        if (offSetTop > 0) {
          $(".orderHeader").css({
            "border-bottom": ".1rem solid #cccccc"
          })
          if(offSetTop > 555){
            $(".orderMyCollect").css({
              "position": "fixed",
              "left":"0",
              "top":"5rem",
              "padding":"0 1rem"
            })
            $(".orderMyCollect p").css({
              "border-bottom":".1rem solid #cccccc"
            })
          }else{
            $(".orderMyCollect").css({
              "position": "static",
              "padding-left":"0",
              "border-bottom":"0"
            })
          }
        }else {
          $(".orderHeader").css({
            "border-bottom": "0"
          })
        }



      })
    }
  }
</script>

<style scoped>
  .order{
    display: flex;
    flex-direction:column ;
    position: relative;
  }
</style>
