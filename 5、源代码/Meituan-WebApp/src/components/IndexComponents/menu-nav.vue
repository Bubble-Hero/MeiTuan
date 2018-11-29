<template>
  <div class="menu-nav pul m-b">
        <div>
          <ul v-for="(is,ts) in menus" class="row">
            <li v-for="(iss,tss) in is.row"><a href="#">
              <span class="none" :style="{backgroundImage:'url(' + iss.bg + ')', backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundSize: 'contain'}"></span>
              <i class="iconfont fir" :style="{color:iss.color}"></i>
              <span>{{iss.title}}</span></a></li>
          </ul>
        </div>
  </div>
</template>

<script>
    import $ from 'jquery'
    import Menu from '../../apis/Apis'

    export default {
        name: "menu-nav",
        data(){
          return {
            p:null,
            bb:null,
            bb2:null,
            count:1,
            t:0,
            menus:[]
          }
        },
      methods:{
        _getData() {
          Menu.getIndexMenu(data => {
            this.menus=data;   //初始化数据
            //数据更新后再次刷新dom
            this.$nextTick(()=>{
              //循环显示小图标！！！！因为异步加载 这里不用foreach 因为foreach是根据数据调函数来操作dom，但此时dom已经创建
              //所以循环dom 赋值html("&#xe757;"
              let his=this;
              $(".row").each(function (i) { //i此时的下标
                $(this).find(".fir").each(function (t) {
                  $(this).html(his.menus[i].row[t].ico)
                  console.log($(this))
                })
              })
            })
            console.log(this.menus)
          })
        },
      },
        mounted(){
          this._getData();
        }
    }
</script>

<style lang="scss" scoped>
  @import "../../assets/css/indexScss/indexMenu";
</style>
