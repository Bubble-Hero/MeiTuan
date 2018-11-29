<template>
  <div>
    <div class="orderNav" v-for="(t,s) in ordernavDatas">

      <div class="orderNavBox1"  :key="index" v-for="(i,index) in t[0].ordernav">

        <!--点击图标跳转到子页面2-->
        <router-link to="/order/order2">
            <img :src="i.navImg" alt=""><span>{{i.spanP}}</span><div class="redCircle">1</div>
        </router-link>
      </div>

    </div>
  </div>

</template>

<script>
    import ordernavData from "../../apis/Apis";
    export default {
        name: "OrderNav",
      data(){
          return{
            ordernavDatas:[],
          }
      },
      methods: {
        /**
         * 加载页面数据
         * @private
         */
        _initOrderNavData() {
          ordernavData.getOrderNavData(data=>{
            this.ordernavDatas = data
            console.log(this.ordernavDatas)
          })
        }


      },
      created(){
        //加载数据
        this._initOrderNavData()
      },
      mounted(){
        //  console.log()
      }

    }
</script>

<style scoped>
  .orderNav{
    display: flex;
    padding: 5.8rem 0 .8rem;
    /*padding: .1rem .1rem 0;*/
    background: #f7f8fb;

  }
  .orderNavBox1{
    flex: 1;
    text-align: center;
    position: relative;
  }

  .orderNavBox1 img{
    width:3.1rem;
    height:2.8rem;
    margin: 0 auto;
  }
  .orderNavBox1 span{
    display: block;
    font-size: 1.2rem;
    line-height: 2.8rem;
  }
  .redCircle{
    width:1.5rem;
    height:1.5rem;
    background:red ;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    color: white;
    position: absolute;
    top:0;
    right: 1.4rem;
  }
</style>
