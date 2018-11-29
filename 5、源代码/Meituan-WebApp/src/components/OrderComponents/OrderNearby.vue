<template>
  <div>
    <div class="orderNearByBox" :key="r" v-for="(e,r) in nearby[1].orderSection1">
      <div class="orderNearByBoxHeader">
        <div class="orderNearByBoxHeaderL">
          <img :src="e.pic1" alt="">
          <p>{{e.header1}}</p>
        </div>
        <div class="orderNearByBoxHeaderR">
          <p>{{e.headerRight}}</p>
        </div>
      </div>
      <div class="orderNearByBoxContent">
        <img :src="e.pic2" alt="">
        <div class="orderNearByBoxContentR">
          <h1>{{e.header2}}<i class="iconfont">&#xe63b;</i></h1>
          <h2>数量：{{e.num}}</h2>
          <h3>总价：{{e.money}}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "OrderNearby",
        props:["ind","nearby"]
    }
</script>

<style scoped>
 .orderNearByBox{
   border:.2rem solid #f6f6f7;
   -webkit-border-radius: 1rem;
   -moz-border-radius: 1rem;
   border-radius: 1rem;
   background: #ffffff;
   padding: 1.3rem 1.3rem 1.6rem;
   box-shadow:0rem 1rem 1.8rem #fee7d2 ;
   margin-bottom: 3rem;
 }
.orderNearByBox:last-child{
  box-shadow:0rem 1rem 1.8rem #fef1ce;
}
  .orderNearByBoxHeader{
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.6rem;
  }
  .orderNearByBoxHeaderL{
    display: flex;
  }
  .orderNearByBoxHeaderL img{
    width:2.2rem;
    height:2.2rem;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    margin-right: .5rem;
  }
  .orderNearByBoxHeaderL p{
    font-size:1.4rem ;
    lne-height:2.2rem;
  }
 .orderNearByBoxHeaderR p{
   font-size:1.3rem ;
   lne-height:2.2rem;
 }
  .orderNearByBoxContent{
    display: flex;
  }
  .orderNearByBoxContent img{
    width:3.2rem;
    height: 3.2rem;
    margin-right: 1rem;
  }
  .orderNearByBoxContentR h1{
    font-size:1.5rem ;
    line-height: 3.2rem;
    font-weight: 100;
  }
 .orderNearByBoxContentR h2{
   font-size:1.2rem ;
   line-height: 2.5rem;
   font-weight: 100;
 }
 .orderNearByBoxContentR h3{
   font-size:1.2rem ;
   line-height: 2.5rem;
   font-weight: 100;
 }
  .orderNearByBoxContentR i{
    font-size:1.1rem ;
    color: #7a7a7a;
    margin-left: .5rem;
  }
</style>
