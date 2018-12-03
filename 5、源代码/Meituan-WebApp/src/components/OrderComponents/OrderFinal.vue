<template>
  <div class="order wrapper" ref="wrapper" style="max-height: 92vh;">
    <div class="scroller">
      <div class="download" v-if="pulldown" style="text-align: center;align-items: center;font-size: 1rem;color:#aaa;padding:.1rem;position: relative;display: flex;flex-direction: column">
        <img class="refreshImg" src="../../../static/img/refresh-1.png" width="39" height="38" style="margin: auto;">
        <img src="../../../static/img/refresh-footer.png" width="39" height="10" style="margin: auto;position: relative;top:-.05rem;">
        <div style="margin-right: auto;">
          <p style="font-size: 1.1rem;color:#777">{{pulldownsubTxt}}</p>
          {{pulldownTxt}}
        </div>
      </div>
      <order-nav class="m-nav"></order-nav>
      <order-section></order-section>
      <div class="upload" v-if="pullup" style="text-align: center;font-size: 1rem;color:#aaa">{{pullupText}}</div>
    </div>
    <h1 class="MyCollectdisnone"><p>我的收藏</p></h1>
    <order-header class="o-header"></order-header>
  </div>
</template>

<script>
  import $ from 'jquery';
  import BScroll from 'better-scroll'
  import OrderHeader from "./OrderHeader";
  import OrderNav from "./OrderNav";
  import OrderSection from "./OrderSection";
  export default {
    name: "OrderFinal",
    data() {
      return {
        high:null,
        refreshtimer:null,
        time:0,
        pulldown:false,
        pulldownTxt:"",
        pulldownsubTxt:"",
        pullup:false,
        pullupText:"获取更多....",
        pullDirection:0,
        pageIndex:1,
        lastY:0,
        list:[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
      }
    },
    components: {OrderSection, OrderNav, OrderHeader},
    methods:{
      _refreshAlert(text) {
        text = text || '操作成功'
        $(".download").stop().slideUp(500)
        //停止定时器
        clearInterval(this.refreshtimer)
        this.refreshtimer=null
        this.time=0
        //同步消失显示
        $(".m-nav").animate({
          "marginTop":this.high
        },500)
      },
      checkRouter(){
        let name=window.localStorage.getItem("username")
        if(name==""||name==null|name==undefined){
          this.$router.replace({name:'NoOrder'})
        }
      }
    },
    mounted(){
      this.checkRouter()
      this.high=$(".o-header")[0].offsetHeight
      $(".m-nav").css({
        "marginTop":this.high
      })
      this.$nextTick(()=>{
        var scroller =new BScroll(this.$refs.wrapper,{
          probeType:3,click:true
        })
        //获取上次滚动位置
        let scrollT = window.localStorage.getItem("scrollT")
       // console.log(scrollT)
       // scroller.scrollTo(0,-1*scrollT)
        scroller.hasVerticalScroll=true

        scroller.on("scrollStart", ()=> {
          //判断是下拉,还是上拉
          let translatey=$('.scroller').css('transform').replace(/[^0-9\-,]/g,'').split(',')[1]
         // console.log(translatey)
        })
        //touch滑动
        scroller.on("scroll", ()=> {
          $(".download").css({
            "marginTop":this.high
          })
          $(".m-nav").css({
            "marginTop":0
          })
          //存储滚动位置
          window.localStorage.setItem("scrollT", -1*scroller.y)
          // console.log("scrollY:"+scroller.y)
          // console.log("maxY:"+scroller.maxScrollY)
          //判断是下拉,还是上拉
          if(scroller.y > 0){
            //防止jquerybug先停止之前的动画
            $(".download").stop()
            this.pulldownTxt = ""
            this.pulldown = true;
            this.pullDirection = 1
            //改变头部样式
            $(".orderHeader").css({
              "borderBottom": "0"
            })
          }
          if(scroller.y > 10 && scroller.y <=30){
            //高度大于10再显示
            $(".download").stop().show()
            this.pulldownTxt = ""
            this.pullDirection = 1
          }
          let hg=$(".o-header")[0].offsetHeight
          let hg2=$(".m-nav")[0].offsetHeight
          let hg3=$(".odd")[0].offsetHeight
          let allhg=hg+hg2+hg3
        // console.log(allhg)
         // console.log(scroller.y)
          if(scroller.y <-1*allhg){
              $(".MyCollectdisnone").css({
                "display":"block",
                "position":"fixed",
                "top":hg,
                "left":0
              })
          }else{
            $(".MyCollectdisnone").css({
              "display":"none"
            })
          }
          // 上拉
          if(scroller.y<0){
            $(".orderHeader").css({
              "borderBottom": ".1rem solid #eee"
            })
          }
          //上拉
          if(scroller.y-scroller.maxScrollY <0){

            this.pullup = true;
            this.pullDirection = -1;
            this.pullupText="释放分页...."
            // console.log("是否在底部:"+(scroller.y-scroller.maxScrollY))
          }
          if(scroller.y-scroller.maxScrollY > -50 && scroller.y-scroller.maxScrollY < -10 ){
            this.pullup = true;
            this.pullDirection = -1;
            this.pullupText="释放分页...."
            // console.log("是否在底部:"+(scroller.y-scroller.maxScrollY))
          }
        })

        scroller.on("scrollEnd", ()=> {
          if(this.pullDirection ==1){
            this.pulldownTxt = ""
            this.refreshtimer=setInterval(()=>{
              if(this.time<8){
                this.time++
                let srcUrl="../../static/img/refresh-"+this.time+".png"
                $(".refreshImg").attr("src",srcUrl)
              }else{
                this.time=1
                let srcUrl="../../static/img/refresh-"+1+".png"
                $(".refreshImg").attr("src",srcUrl)
              }
            },45)

            setTimeout(()=>{
              /*
               * 这里发送ajax刷新数据
               * 刷新后,后台只返回第1页的数据,无论用户是否已经上拉加载了更多
              */
              // 恢复文本值
              this.pulldownTxt = '';
              // 刷新成功后的提示
              this._refreshAlert('刷新成功');
              // 刷新列表后,重新计算滚动区域高度
              //scroll.refresh();
            }, 1800);
          }else if(this.pullDirection == -1){

            //如果当前下拉的数比总的scrollerY小,获取新数据
            if(scroller.y <=scroller.maxScrollY){
              this.pullupText = "分页加载中..."
              this.pageIndex++
              for(var i=3;i<100;i++){
                this.list.push(i)
              }
              // scroller.refresh()
              console.log(`加载了第 ${this.pageIndex} 页`)
            }
          }
          // console.log("scrollEnd")
        })
      })
    }
  }
</script>

<style scoped>
  .MyCollectdisnone{
    background-color: #fff;
    padding: 1rem 1rem;
    width: 100%;
    border-bottom: 1px solid #eee;
    font-size: 1.4rem;
    color:#111;
  }
  .order{
    display: flex;
    flex-direction:column ;
    position: relative;
    background-color: #fff;
  }
</style>
