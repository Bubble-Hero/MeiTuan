<template>
  <div class="orderSectionBox">
    <div class="orderSection">
        <h1>最近订单</h1>
        <order-nearby :key="w" :ind="w" :nearby="q" v-for="(q,w) in ordernavDatas"></order-nearby>
        <h2>查看全部<i class="orderSecIcon iconfont">&#xe63b;</i></h2>
    </div>
    <div class="orderSection orderSection2">
      <h1 class="orderMyCollect"><p>我的收藏</p></h1>
      <order-collect  :key="ind1" :ind2="ind1" :a2="a1" v-for="(a1,ind1) in ordernavDatas"></order-collect>
      <h2>查看全部<i class="orderSecIcon iconfont">&#xe63b;</i></h2>
    </div>
    <div class="orderSection">
      <h1>最近浏览</h1>
      <order-visits  :key="ind1" :ind2="ind1" :a2="a1" v-for="(a1,ind1) in ordernavDatas"></order-visits>
      <h2>查看全部<i class="orderSecIcon iconfont">&#xe63b;</i></h2>
    </div>
  </div>
</template>

<script>

    import orderSectionData from "../../apis/Apis"
    import OrderNearby from "./OrderNearby";
    import OrderCollect from "./OrderCollect";
    import OrderVisits from "./OrderVisits";

    export default {
        name: "OrderSection",
      components: {OrderVisits, OrderCollect, OrderNearby},
      mounted(){

      },
      data(){
          return{
            ordernavDatas:[],
          }
        },
      methods: {
        /**
         * 加载页面数据
         * @private
         */
        _initOrderNavData() {
          orderSectionData.getOrderNavData(data=>{
            this.ordernavDatas = data
            console.log(this.ordernavDatas)
          })
        }


      },
      created(){
        //加载数据
        this._initOrderNavData()
      }
    }
</script>

<style scoped>
  .orderSectionBox{
    display: flex;
    flex-direction:column ;
    margin-bottom: 1rem;
  }
.orderSection{
  padding:0 1rem;
  background: #ffffff;

}
.orderSection h1{
  font-size: 1.5rem;
  line-height:4.4rem ;
  color: black;
  background: white;
  width: 100%;
}
.orderSection h2{
  font-size: 1.3rem;
  line-height:4.4rem ;
  color: #3c4889;
  text-align:center;
  font-weight: normal;
}
.orderSecIcon{
  font-size: 1.2rem;
  line-height:4.4rem ;
  color: #3c4889;
  text-align:center;
}
</style>
