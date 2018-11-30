<template>
    <div class="fourImgbox">
      <div v-for="(i,s) in datas" class="f-imgbox">
        <div>
          <img :src="i[0].img">
        </div>
        <div>
          <img :src="i[1].img">
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "FourIMgBox",
      props:["datas"],
      mounted(){
          console.log(this.datas)
      }
    }
</script>

<style lang="scss" scoped>
    .fourImgbox{
      display: flex;flex-wrap: wrap;flex-direction: column;padding:1rem;background-color: #fff;border-bottom: 1rem solid #f5f5f5;
      .f-imgbox{
        display: flex; margin-bottom: .5rem;
        div{
          flex:50%;height:12.5rem;margin-right: .5rem;
          img{
            width:100%;height: 100%;
          }
        }
        div:last-child{
          margin-right:0;
        }
      }
      .f-imgbox:last-child{
        margin-bottom: 0;
      }
    }
</style>
