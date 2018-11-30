<template>
  <div class="all" style="background: #fff;">
    <header>
      <ul class="one">
        <router-link to="/near">
          <li><i class="iconfont">&#xe63c;</i></li>
        </router-link>
      </ul>
      <ul class="two">
        <li><i class="iconfont">&#xe659;</i></li>
        <li><i class="iconfont">&#xe61a;</i></li>
        <li><i class="iconfont">&#xe62b;</i></li>
      </ul>
    </header>
    <main v-for="(i,s) in nearchild">
        <div class="detail">
          <p class="mai">{{i.detail.p1}}</p>
          <img :src="i.detail.pic1" alt="" class="pic">
          <div class="two">
            <img :src="i.detail.pic2" alt="">
            <p>{{i.detail.p2}}</p>
          </div>
          <div class="three">
            <span><img :src="i.detail.pic3" alt=""></span>
            <p>{{i.detail.p3}}</p>
          </div>
          <div class="four">
            <i class="iconfont">&#xf0132;</i>
            <p>{{i.detail.p4}} <span>{{i.detail.span1}}</span></p>
            <span><img :src="i.detail.pic4" alt=""></span>
          </div>
          <div class="five">
            <span><img :src="i.detail.pic5" alt=""></span>
            <p>{{i.detail.p5}}<span>{{i.detail.span2}}</span></p>
            <i class="iconfont">&#xe63b;</i>
          </div>
        </div>
        <div class="nav">
          <ul>
            <li>优惠信息</li>
            <li>用户评论</li>
            <li>商家信息</li>
          </ul>
        </div>
        <div class="sale">
          <p>代金券</p>
          <img :src="i.detail.pic6" alt="">
          <span>更多两张代金券</span>
        </div>

        <div class="combo">
          <p class="title">食堂套餐</p>
          <ul>
            <li v-for="(p,index) in i.combo">
              <img :src="p.pic1" alt="">
              <div class="left">
                <p>{{p.p1}}</p>
                <p>{{p.p2}}</p>
                <p>{{p.p3}}</p>
                <div class="last">
                  <span>{{p.span1}}</span>
                  <span>{{p.span2}}</span>
                  <span>{{p.span3}}</span>
                  <span></span>
                  <span>{{p.span4}}</span>
                </div>
                <!----接口--->
                <div class="buy">{{p.buy}}</div>
              </div>
            </li>
          </ul>
        </div>

        <div class="eval">
          <div class="title">
            <span>餐厅评价</span>
            <span>更多评论{{i.title.tit}}</span>
          </div>
          <ul>
            <li v-for="(c,index) in i.evall">
              <img :src="c.pic1" alt="" class="img">
              <div class="left">
                <div>
                <p class="pt">{{c.p1}}<span>{{c.span2}}</span></p>
                <img :src="c.pic2" alt="" class="one">
                <p>{{c.p2}}</p>
                <div class="pict">
                  <img :src="c.pic3" alt="">
                  <img :src="c.pic4" alt="">
                  <img :src="c.pic5" alt="">
                  <img :src="c.pic6" alt="">
                </div>
                <p>{{c.p3}}</p>
                <p>{{c.p4}}</p>
                </div>
              </div>
            </li>
          </ul>
          <p class="la">{{i.more.look}}</p>
        </div>

        <div class="busin">
          <p>商家信息</p>
          <p>营业时间</p>
          <p>{{i.time.ti}}</p>
          <p>营业许可资质<i class="iconfont">&#xe63b;</i></p>
        </div>

      <div class="combo near">
        <p class="title">附近吃喝玩乐</p>
        <ul>
          <li v-for="(d,index) in i.near">
            <img :src="d.pic1" alt="">
            <div class="left">
              <p>{{d.p1}}</p>
              <p>{{d.p2}}</p>
              <p>{{d.p3}}</p>
              <div class="last">
                <span>{{d.span1}}</span>
                <span>{{d.span2}}</span>
                <span>{{d.span3}}</span>
                <span></span>
                <span>{{d.span4}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>

    </main>
  </div>
</template>

<script>
    import Apis from "../../../apis/Apis";
    export default {
        name: "NearChild",
        data(){
          return{
            nearchild:[]
          }
        },
        methods:{
          _initPageData() {
            Apis.getNearchildData(data=>{
              this.nearchild = data
              console.log(this.nearchild)
            })
          }
        },
        mounted(){

        },
        created(){
          //首页加载数据
          this._initPageData()
        }
    }
</script>

<style lang="scss" scoped>
  .all{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  header{
    display: flex;
    justify-content: space-between;
    height: 4.8rem;
    position: fixed;
    top: 0;
    align-items: center;
    background: #fff;
    z-index: 1000;
    width: 100%;
  }
  header .one{
    width: 5rem;
    text-align: center;
  }
  header .two{
    display: flex;
    width: 10rem;
    justify-content: space-around;
  }
  header .iconfont{
    font-size: 2rem;
    color: #24a29e;
  }
  /*===============main============*/
  main {
    margin-top: 4.8rem;
    overflow: auto;
    height: 100%;

    .detail {
      position: relative;
      padding-bottom: .5rem;
      padding: 0 1rem;
      .mai{
        font-size: 1.8rem;
        color: #000;
        font-weight: bold;
      }
      .pic{
        width: 8.6rem;
        height: 6.6rem;
        position: absolute;
        right: 1rem;
        top: 0;
      }
      .two{
        display: flex;
        img{
          width: 5.7rem;
          height: .9rem;
          margin-top: .2rem;
        }
        p{
          padding-left: .5rem;
          color: #585858;
        }
      }
      .three{
        display: flex;
        span{
          width: 1.4rem;
          height: 1.4rem;
        }
        p{
          padding-left: .6rem;
          color: #585858;
        }
      }
      .four{
        display: flex;
        position: relative;
        .iconfont{
          font-size: 2rem;
          margin-top: .3rem;
        }
        p{
          font-size: 13px;
          width: 20rem;
          white-space: pre-wrap;
          span{
            color: #888;
          }
        }
        span img{
          width: 1.7rem;
          height: 1.8rem;
          position: absolute;
          right: 1rem;
          top: 1rem;
        }
      }
      .five{
        display: flex;
        margin-top: .7rem;
        span img{
          width: 1.6rem;
          height: 1.6rem;
        }
        p{
          padding-left: .5rem;
          span{
            padding-left: .4rem;
            color: #949494;
          }
        }
        .iconfont{
          line-height: 2rem;
        }
      }
    }
    .nav ul{
      display: flex;
      margin-left: 1rem;
      li{
        padding: .6rem 1rem;
        color: #000;
        font-size: 13px;
        /*line-height: 2.3rem;*/
      }
      li:nth-of-type(1){
        border-bottom: 1px solid #24a29e;
        color: #24a29e;
      }
    }
    .sale{
      padding: 0 1rem;
      margin-top: 1.3rem;
       p{
        color: #000;
        font-size: 18px;
        font-weight: 600;
         margin-bottom: 1rem;
      }
    }
    img{
      width: 100%;
    }
    .sale span{
      text-align: center;
      display: block;
      color: #24a29e;
      font-size: 1.3rem;
      padding-top: .4rem;
    }
    .combo {
      padding-left: 1rem;
      .title {
        font-size: 1.8rem;
        font-weight: 600;
      }
      li {
        display: flex;
        padding-top: 1.3rem;
        img {
          width: 8rem;
          height: 7.5rem;
        }
        .left {
          margin-left: 1rem;
          position: relative;
          flex: 1;
          padding-bottom: 1rem;
          border-bottom: .05rem solid #ccc;
          p:nth-of-type(1){
            font-size: 1.4rem;
            color: #000;
          }
          .last{
            position: relative;
            width: 100%;
            span:nth-of-type(1){
              color: #ff8a0e;
              font-weight: 500;
            }
            span:nth-of-type(2){
              color: #ff8a0e;
              border: 1px solid #ffc681;
              margin-left: .3rem;
              display: inline-block;
              width: 3.4rem;
              line-height: 1.6rem;
              text-align: center;
            }
            span:nth-of-type(3){
              text-decoration: line-through;
            }
            span:nth-of-type(5){
              position: absolute;
              right: 1rem;
            }
          }
          .buy{
            width: 4.9rem;
            line-height: 2.7rem;
            position: absolute;
            right: 1rem;
            top: 2rem;
            text-align: center;
            color: #fff;
            background: #fe9900;
            font-weight: 700;
            border-radius: .4rem;
          }
        }
      }
    }
    .eval{
      padding-left: 1rem;
      margin-top: 2rem;
      margin-bottom: 3rem;
      .title {
        position: relative;
        span:nth-of-type(1){
          font-size: 1.8rem;
          font-weight: 600;
        }
        span:nth-of-type(2){
          font-size: 1.2rem;
          color: #24a29e;
          position: absolute;
          right: 1rem;
        }
      }
      ul li{
        display: flex;
        padding-top: 1.3rem;
        .img{
          width: 4.5rem;
          height: 4.5rem;
        }
        .left{
          flex: 1;
          margin-left: 1rem;
          /*position: relative;*/
          padding-bottom: 1rem;
          border-bottom: .05rem solid #ccc;
          div{
            padding-right: 1rem;

            .pt{
              position: relative;
              span{
                position: absolute;
                right: 0rem;
              }
            }
            .one{
              width: 5.5rem;
              height: .9rem;
            }
            .pict{
             display: flex;
              /*justify-content: space-around;*/
              img{
                width: 6.1rem;
                height: 6.1rem;
                flex: 1;
                padding-right: .5rem;
              }
            }
            p:nth-last-of-type(1){
              margin-top: .8rem;
            }
          }
        }
      }
      .la{
        line-height: 4rem;
        border-bottom: .05rem solid #ccc;
        padding-left: 5.5rem;
        color: #000;
      }
    }
    .busin{
      padding-left: 1rem;
      padding-bottom: 3.5rem;
      color: #000;
      p:nth-of-type(1){
        font-size: 1.7rem;
        font-weight: 900;
      }
      p:nth-of-type(2){
        font-size: 1.5rem;
        font-weight: 700;
        margin-top: .8rem;
      }
      p:nth-of-type(3){
        padding-bottom: 1.5rem;
      }
      p:nth-of-type(4){
        line-height: 4rem;
        border-top: .05rem solid #ccc;
        border-bottom: .05rem solid #ccc;
        position: relative;
        .iconfont{
          position: absolute;
          right: 1rem;
          top: 1.5rem;
        }
      }
    }
    .near{
      margin-bottom: 3rem;
      li .left{

        .last span:nth-of-type(1) {
          color: red;
          font-weight: 700;
        }
       .last span:nth-of-type(2) {
         color: red;
         border: .05rem solid red;
         border-radius: .03rem;
        }
      }
    }
  }
</style>
