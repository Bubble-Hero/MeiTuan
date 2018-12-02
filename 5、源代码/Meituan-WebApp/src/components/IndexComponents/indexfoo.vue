<template>
    <div class="foo">
      <div class="foo-header">
        — 猜你喜欢 —
      </div>
      <div class="list-box" v-for="(items,index) in datas">
        <div class="img-left">
          <img :src="items.img">
        </div>
        <div class="tt-right">
          <div class="tt-row1">
            <h2>{{items.bigtitle}}</h2><span>{{items.dis}}</span>
          </div>
          <p class="tt-row2">{{items.subtitle}}</p>
          <div class="tt-row3">
            <p>
              <span>￥</span><span>{{items.price}}</span><span v-for="(is,ss) in items.dtitle" class="dtitle">{{is}}</span>
            </p>
            <span>{{items.grade}}</span>
          </div>
          <div class="tt-row4">
            <span v-for="(is,ts) in items.jtitle1">{{is}}</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "indexfoo",
      props:["datas"],
      mounted(){
       // console.log(this.datas)
      }
    }
</script>

<style lang="scss" scoped>
  @import "../../assets/css/indexScss/indexfoo";
</style>
