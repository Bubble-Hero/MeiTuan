<template>
  <div>
    <div class="index-nav">
      <div class="index-nav-header">
        <div class="nav-row1">
          <h3>{{datas.row1.title}}</h3><span>{{datas.row1.subtitle1}}</span>
        </div>
        <div class="nav-row2">
          <span class="many">{{datas.row1.subtitle2}}</span><span class="bgfont" :style="{backgroundImage: 'url('+ datas.row1.img+')',backgroundRepeat:'no-repeat',backgroundSize:'contain'}"></span><i class="iconfont">&#xe63b;</i>
        </div>
      </div>
      <div class="index-nav-img">
        <div class="nav-imgbox" v-for="(iss,tss) in datas.row2">
          <img :src="iss.img">
          <p><span>{{iss.pri}}</span>{{iss.title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import indexNav from '../../apis/Apis'
    export default {
      name: "navImg",
      props:["datas"]
    }
</script>

<style lang="scss" scoped>
  @import "../../assets/css/indexScss/navImg";
</style>
