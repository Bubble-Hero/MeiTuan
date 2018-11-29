<template>
  <div>
  <div class="orderVistsBox"  :key="j" v-for="(i,j) in a2[3].orderSection3">
    <img :src="i.pic5" alt="">
    <div class="orderVistsBoxR">
      <div class="hh1"><h1>{{i.hh1}}</h1><p>{{i.hhRight}}km</p></div>
      <h2>
        {{i.hh2}}
      </h2>
      <h3><p>{{i.bmoney}}</p>&nbsp;&nbsp;{{i.hh3}}</h3>
    </div>
  </div>
  </div>
</template>

<script>
    export default {
        name: "OrderVisits",
      props:["ind2","a2"]
    }
</script>

<style scoped>
  .orderVistsBox{
    display: flex;
    border-top: .2rem solid #f7f7f7;
    padding: 1.4rem 0;
    background: #ffffff;
  }
  .orderVistsBox img{
    width:7.7rem;
    height: 5.8rem;
    margin: auto 0;
    margin-right: 1rem;
  }
  .orderVistsBoxR{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .orderVistsBoxR .hh1 {
    display: flex;
    justify-content: space-between;
  }
  .orderVistsBoxR h1{
    font-size:1.5rem ;
    font-weight:100 ;
  }
  .orderVistsBoxR h1 img{
    width: 1.5rem;
    height: 1.5rem;
    /*margin-top:1rem;*/
  }
  .orderVistsBoxR h2{
    font-size:1.2rem ;
    font-weight:100 ;
    display: flex;
  }

  .orderVistsBoxR h3{
    font-size:1.2rem ;
    font-weight:100 ;
    display: flex;
    align-items: center;
  }
  .orderVistsBoxR h3 p{
    font-size:1.6rem ;
    color: #ff5a15;
  }
</style>
