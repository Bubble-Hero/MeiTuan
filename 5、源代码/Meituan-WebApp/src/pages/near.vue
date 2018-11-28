<template>
  <div class="all" style="background: #fff;">
    <!-----------------header------------->
    <header>
      <p>蜀留香<i class="iconfont">&#xe604;</i></p>
      <div class="header-input">
        <input type="text" value="找附近的吃喝玩乐">
        <span></span>
      </div>
    </header>
    <!----------------main---------------->
    <main>
      <near-swiper></near-swiper>
      <near-nav></near-nav>
    </main>
  </div>
</template>

<script>
  import NearSwiper from "../components/NearComponents/NearSwiper";
  import NearNav from "../components/NearComponents/NearNav";
  export default {
    name: "near",
    components: {NearNav, NearSwiper}
  }
</script>

<style scoped>
  .all{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  main{
    flex: 1;
    overflow: auto;
  }
  header{
    height: 4.8rem;
    display: flex;
    align-items: center;
    padding: 0 10px;
    background: #f9f9f9;
    border-bottom: .5px solid #b3b3b3;
  }
  header .header-input{
    flex: 1;
    padding-right: 2.3rem;
    position: relative;
  }
  header .header-input span{
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    background: url("../../static/img/n-search.png");
    background-size: 1.5rem 100%;
    top: 1rem;
    left: 6.2rem;
  }
  header .header-input input{
    width: 100%;
    height: 2.9rem;
    margin-left: .8rem;
    text-align: center;
    background: #e6e7e8;
    border: 0;
    color: #919294;
    border-radius: 4px;
  }
</style>
