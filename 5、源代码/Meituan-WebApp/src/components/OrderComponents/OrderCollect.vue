<template>
  <div>
    <div class="orderCollectBox" :key="j" v-for="(i,j) in a2[2].orderSection2">
      <img :src="i.pic3" alt="">
      <div class="orderCollectBoxR">
        <h1>{{i.hh1}}<img :src="i.pic4" alt=""></h1>
        <h2>
          <p>
            <i class="iconfont">&#xe622;</i>
            <i class="iconfont">&#xe622;</i>
            <i class="iconfont">&#xe622;</i>
            <i class="iconfont">&#xe622;</i>
            <i class="iconfont">&#xe622;</i>
          </p>
          人均：{{i.money}}
        </h2>
        <h3>{{i.hh2}}&nbsp;&nbsp;{{i.hh3}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "OrderCollect",
      props:["ind2","a2"]
    }
</script>

<style scoped>
  .orderCollectBox{
    display: flex;
    border-top: .2rem solid #f7f7f7;
    padding: 1.4rem 0;
    background: #ffffff;
  }
  .orderCollectBox img{
    width:7.7rem;
    height: 5.8rem;
    margin: auto 0;
    margin-right: 1rem;
  }
  .orderCollectBoxR{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .orderCollectBoxR h1{
    font-size:1.5rem ;
    font-weight:100 ;
    display: flex;
    align-items: center;
  }
  .orderCollectBoxR h1 img{
    width: 1.5rem;
    height: 1.5rem;
    margin-left:1rem;
  }
  .orderCollectBoxR h2{
    font-size:1.2rem ;
    font-weight:100 ;
    display: flex;
    align-items: center;
  }
  .orderCollectBoxR h2 p{
    font-size:1rem ;
    color: #ffc94f;
    margin-right: .5rem;
  }
  .orderCollectBoxR h3{
    font-size:1.2rem ;
    font-weight:100 ;
  }
</style>
