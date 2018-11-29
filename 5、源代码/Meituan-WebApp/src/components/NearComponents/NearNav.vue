<template>
  <div>
    <!-----------------nearnav------------->
    <div class="nearnav">
      <ul>
        <li class="cli" v-for="(p,index) in nav1"><span></span>{{p.title}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NearNav",
    props:["nav1"]
  }
</script>

<style scoped>
  /*.selected{*/
    /*position: relative;*/
    /*color:#f94024;*/
    /*!*border-bottom: 1px solid red;*!*/
    /*font-size: 1.6rem!important;*/
    /*top:-.1rem;*/
    /*font-weight: 800;*/
  /*}*/
  span{
    display: block;
    width: 2rem;
    border-bottom: 2px solid #f94024;
    top: -.6rem;
    left: .7rem;
    height: 3rem;
    position: absolute;
  }
  .nearnav ul{
    display: flex;
    padding: 1rem;
    justify-content: space-around;
  }
  .nearnav ul li{
    font-size: 1.4rem;
  }
</style>
