<template>
  <header>
    <div class="header-set"><i class="iconfont icon-shezhi"></i></div>
    <div class="header-km">
      <i class="iconfont icon-kefu"></i>
      <i class="iconfont icon-p-emial"></i>
    </div>
  </header>
</template>

<script>
    export default {
        name: "MeHeader"
    }
</script>

<style scoped>
  header{
    width: 100%;
    height: 5rem;
    background: #24a9b0;
    display: flex;
    justify-content: space-between;
    opacity:.9;
  }
  header i{font-size: 2.2rem;
    color:#fff}
  .header-set{
    width: 5rem;
    margin: auto 0;
    text-align: center;

  }
  .header-km{
    width: 11.6rem;
    margin: auto 0 ;
    display: flex;
    text-align: center;

  }
  .header-km i:nth-child(1){
    margin:auto 3.0rem;
  }
  .header-km i:nth-child(2){
    margin-right: 1.4rem;
  }
</style>
