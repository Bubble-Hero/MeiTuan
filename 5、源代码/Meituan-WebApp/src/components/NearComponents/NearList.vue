<template>
        <li>
          <div class="left-picture">
            <img :src="tp.pic1" alt="">
          </div>
          <div class="right-other">
            <div class="other-top">
              <p>{{tp.p1}}</p>
              <span>{{tp.span1}}</span>
            </div>
            <div class="other-cen">
              <img :src="tp.pic2" alt="">
              <span>{{tp.span2}}</span>
              <span>{{tp.span3}}</span>
            </div>
            <div class="sale">{{tp.sale}}</div>
            <div class="last">
              <span><img :src="tp.pic3" alt=""></span>
              <p>{{tp.p2}}</p>
            </div>
          </div>
        </li>
</template>

<script>
    export default {
        name: "NearList",
        props:["tp"]
    }
</script>

<style scoped>
  li{
    display: flex;
    border-bottom: 1px solid #ccc;
    padding: 1.2rem 0;
  }
  li .left-picture{
    width: 7.8rem;
    height: 5.8rem;
    border: 1px solid #cec3c1;
  }
  li .left-picture img{
    width: 7.8rem;
    height: 5.8rem;
  }
  li .right-other{
    flex: 1;
    padding-left: .9rem;
    /*background: #f00;*/
  }
  li .right-other .other-top{
    position: relative;
    display: flex;
  }
  li .right-other .other-top p{
    width: 12rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  li .right-other .other-top span{
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
  li .right-other .other-cen{
    display: flex;
    align-items: center;
  }
  li .right-other .other-cen img{
    width: 5rem;
    height: .9rem;
  }
  li .right-other .other-cen span{
    padding-left: .7rem;
  }
  li .right-other .sale{
    width: 4.6rem;
    text-align: center;
    line-height: 1.3rem;
    border: 1px solid #ffad70;
    color: #f75b0e;
    margin-top: .4rem;
  }
  li .right-other .last{
    display: flex;
    padding-top: .4rem;
  }
  li .right-other .last span{
    width: 1.5rem;
    height: 1.5rem;
    margin-top: .4rem;
  }
  li .right-other .last span img{
    width: 1.5rem;
    height: 1.5rem;
  }
  li .right-other .last p{
    padding-left: .3rem;
  }
</style>
