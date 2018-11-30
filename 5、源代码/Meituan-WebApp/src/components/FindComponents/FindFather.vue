<template>
      <div id="find" class="wrapper" ref="wrapper">
          <div class="scroller">
              <div class="download" v-if="pulldown" style="text-align: center;align-items: center;font-size: 1rem;color:#aaa;padding:.1rem;position: relative;display: flex;flex-direction: column">
                <img class="refreshImg" src="../../../static/img/refresh-1.png" width="39" height="38" style="margin: auto;">
                <img src="../../../static/img/refresh-footer.png" width="39" height="10" style="margin: auto;position: relative;top:-.05rem;">
                <div style="margin-right: auto;">
                  <p style="font-size: 1.1rem;color:#777">{{pulldownsubTxt}}</p>
                  {{pulldownTxt}}
                </div>
              </div>
              <find-nav class="mg-nav"></find-nav>
              <find-list></find-list>
              <!----返回顶部----->
              <!--<div class="back">^</div>-->
              <div class="upload" v-if="pullup" style="text-align: center;font-size: 1rem;color:#aaa">{{pullupText}}</div>
          </div>
          <find-header></find-header>
          <find-nav class="disblock"></find-nav>
      </div>
</template>

<script>
  import $ from "jquery";
  import BScroll from 'better-scroll'
  import Swiper from "Swiper";
  import FindHeader from "./FindHeader";
  import FindNav from "./FindNav";
  import FindList from "./FindList";

  export default {
    name: "FindFather",
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
    components: {FindList, FindNav, FindHeader},
    methods:{
      _scrollChange() {
        let his = this
        //子盒子发生滚动事件时
        $(".wrapper").scroll((event)=>{
          let scrollT = $(this).scrollTop()
          //存储滚动位置
          window.localStorage.setItem("scrollT", scrollT)
          //如果向上滚动，就让fixed的头部显示，否则消失
          if($(".wrapper").scrollTop() > 0) {
            $(".disblock").css({
              "display":"block",
              "position":"fixed",
              "left":0,
              "top":this.high,
              "zIndex":1000
            })
          }
          else {
            $(".disblock").css({
              "display":"none"
            })
          }
        })
      },
      _refreshAlert(text) {
        text = text || '操作成功'

        $(".download").stop().slideUp(500)
        //停止定时器
        clearInterval(this.refreshtimer)
        this.refreshtimer=null
        this.time=0
        //盒子加margin-top
        //设置动画和图片盒子同步
        $(".findNav").animate({
          "marginTop":this.high
        },500)
      }
      },
    mounted(){
     this.high=$("header")[0].offsetHeight
      console.log(this.high)
      $(".mg-nav").css({
        "marginTop":this.high
      })
      $(".disblock").css({
        "display":"none"
      })
      //
      this._scrollChange()
      //下拉与上拉
      this.$nextTick(()=>{
        var scroller =new BScroll(this.$refs.wrapper,{
          probeType:3,click:true
        })
        //获取上次滚动位置
        let scrollT = window.localStorage.getItem("scrollT")
        console.log(scrollT)
        scroller.scrollTo(0,-1*scrollT)
        scroller.hasVerticalScroll=true

        scroller.on("scrollStart", ()=> {
          //判断是下拉,还是上拉
          let translatey=$('.scroller').css('transform').replace(/[^0-9\-,]/g,'').split(',')[1]
          console.log(translatey)
        })
        //touch滑动
        scroller.on("scroll", ()=> {
          $(".download").css({
            "marginTop":this.high
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
            //隐藏头部
            $(".disblock").css({
              "display":"none"
            })
            $(".findNav").css({
              "marginTop":0
            })
          }

          if(scroller.y > 10 && scroller.y <=30){
            //高度大于10再显示
            $(".download").stop().show()
            this.pulldownTxt = ""
            this.pullDirection = 1
          }
          // 上拉
          if(scroller.y<0){
            $(".disblock").css({
              "display":"flex",
              "position":"fixed",
              "left":0,
              "top":this.high,
              "zIndex":1000
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
              console.log(1)
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

  #find{
    display: flex;
    flex-direction: column;
    position: relative;
    max-height: 92vh;
    background-color: #fff;
  }

  .back{
    display: block;
    width: 4rem;
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    border: .1rem solid #c1c1c1;
    border-radius: 50%;
    font-size: 2rem;
    font-weight: bold;
    color: black;
    background: #fdc336;
    opacity: 0.7;
    position: fixed;
    bottom: 10rem;
    right: -3.5rem;
    z-index: 100;
  }
</style>
