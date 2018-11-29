<template>
  <div class="nearnav-li">
    <ul class="nav-ul">
      <li v-for="(bb,index) in items[0]">{{bb.title}}</li>
    </ul>
    <ul class="life-ul">
      <li v-for="(cc,index) in items[1]">
        <div class="left-picture">
          <img :src="cc.pic1" alt="">
        </div>
        <div class="right-other">
          <div class="other-top">
            <p>{{cc.p1}}</p>
            <span>{{cc.span1}}</span>
          </div>
          <div class="other-cen">
            <img :src="cc.pic2" alt="">
            <span>{{cc.span2}}</span>
            <span>{{cc.span3}}</span>
          </div>
          <div class="sale">{{cc.sale}}</div>
          <div class="last">
            <span><img :src="cc.pic3" alt=""></span>
            <p>{{cc.p2}}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "NearList",
    props:["items"]
  }
</script>

<style scoped>
  ::-webkit-scrollbar{
    display:none;
  }
  .selected{
    color: #f94024;
    border-radius: 50px;
    background: #ffe9e6;
  }
  .nearnav-li{
    display: none;
  }
  .nearnav-li .life-ul{
    padding: 1.5rem 1rem;
  }
  .nearnav-li .nav-ul{
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    padding-left: 1.6rem;
    line-height: 2rem;
    display: flex;
  }
  .nearnav-li .nav-ul li{
    flex: 1;
    padding:0 2.6rem;
    white-space: nowrap;
  }

  .nearnav-li .life-ul li{
    display: flex;
    border-bottom: 1px solid #ccc;
    padding: 1.2rem 0;
  }
  .nearnav-li .life-ul li .left-picture{
    width: 7.8rem;
    height: 5.8rem;
    border: 1px solid #cec3c1;
  }
  .nearnav-li .life-ul li .left-picture img{
    width: 7.8rem;
    height: 5.8rem;
  }
  .nearnav-li .life-ul li .right-other{
    flex: 1;
    padding-left: .9rem;
    /*background: #f00;*/
  }
  .nearnav-li .life-ul li .right-other .other-top{
    position: relative;
    display: flex;
  }
  .nearnav-li .life-ul li .right-other .other-top p{
    width: 12rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .nearnav-li .life-ul li .right-other .other-top span{
    display: inline-block;
    position: absolute;
    width: 4.1rem;
    height: 1.6rem;
    right: 0;
    background: #f4f4f6;
    text-align: center;
    border-bottom-left-radius: .9rem;
    color: #727274;
  }
  .nearnav-li .life-ul li .right-other .other-cen{
    display: flex;
    align-items: center;
  }
  .nearnav-li .life-ul li .right-other .other-cen img{
    width: 5rem;
    height: .9rem;
  }
  .nearnav-li .life-ul li .right-other .other-cen span{
    padding-left: .7rem;
  }
  .nearnav-li .life-ul li .right-other .sale{
    width: 4.6rem;
    text-align: center;
    line-height: 1.3rem;
    border: 1px solid #ffad70;
    color: #f75b0e;
    margin-top: .4rem;
  }
  .nearnav-li .life-ul li .right-other .last{
    display: flex;
    padding-top: .4rem;
  }
  .nearnav-li .life-ul li .right-other .last span{
    width: 1.5rem;
    height: 1.5rem;
    margin-top: .4rem;
  }
  .nearnav-li .life-ul li .right-other .last span img{
    width: 1.5rem;
    height: 1.5rem;
  }
  .nearnav-li .life-ul li .right-other .last p{
    padding-left: .3rem;
  }
</style>
