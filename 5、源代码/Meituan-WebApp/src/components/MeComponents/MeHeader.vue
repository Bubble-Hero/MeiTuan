<template>
  <!-------------我的头部--------------->
  <header>
    <div class="header-set">
      <i class="iconfont icon-shezhi" @click="goSet"></i>
    </div>
    <div class="header-km">
      <i class="iconfont icon-kefu"></i>
      <i class="iconfont icon-p-emial"></i>
    </div>
  </header>
</template>

<script>
    export default {
        name: "MeHeader",
      methods:{
          goSet(){
            let name=window.localStorage.getItem("username")
            if(!name==""||!name==null|!name==undefined){
              this.$router.push({name:'exit'});
            }
            else{
              this.$router.push({name:'MeSectionCon1'});
            }
          }
      }
    }
</script>

<style scoped>
  header{
    height: 5.6rem;
    background:linear-gradient(to right,#17ceb8,#29c7c8,#3bb9da);
    display: flex;
    justify-content: space-between;
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
