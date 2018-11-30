<template>
    <!-----------------nearnav------------->
    <div class="nearnav fixed">
      <ul>
        <li class="cli" v-for="(p,index) in nav1"><p>{{p.title}}</p><span></span></li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: "NearNav",
    props:["nav1"]
  }
</script>

<style lang="scss" scoped>
  /*.selected{*/
    /*position: relative;*/
    /*color:#f94024;*/
    /*!*border-bottom: 1px solid red;*!*/
    /*font-size: 1.6rem!important;*/
    /*top:-.1rem;*/
    /*font-weight: 800;*/
  /*}*/

  .nearnav ul{
    display: flex;
    padding: 1rem;
    justify-content: space-around;
  }
  .nearnav ul li{
    font-size: 1.3rem;
    color:#111;
    position: relative;
    display: flex;flex-direction: column;
    span{
      height:.2rem;
      width: 2rem;
      margin: auto;
      border-radius: 1rem;
    }
  }
  .active{
    color:red!important;
    font-size:1.4rem!important;
    font-weight: bold;
    position: relative;
    top:-.15rem;
    span{
      display: block;
      background-color: red;

    }
  }
</style>
