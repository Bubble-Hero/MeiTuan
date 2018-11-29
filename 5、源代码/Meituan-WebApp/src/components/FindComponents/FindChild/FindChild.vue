<template>
  <div>
  <div :key="index" v-for="(i,index) in findDatas">
  <div  :key="index"  v-for="(m,index) in i[7].child">
    <!--....header...-->
    <header>
      <router-link to="/find"><i class="iconfont headeri">&#xe63c;</i></router-link>
      <span>美团头条</span>
      <a href=""><i class="iconfont headeri">&#xe6d4;</i></a>
    </header>

    <section class="cont">
      <h3>{{m.title}}</h3>
      <div class="up">
        <span class="name">{{m.name}}</span>
        <span class="attention"><p>{{m.attention}}</p></span>
      </div>
      <p class="pCont">{{m.p01}}</p>
      <img :src="m.tip1"/>
      <p class="pCont">{{m.p02}}</p>
      <img :src="m.tip2"/>
      <p class="pCont">{{m.p03}}</p>
      <img :src="m.tip3"/>
    </section>

    <!--。。。more。。。、-->
    <section class="more">
      <div class="moreTitle">
        <h4>更多阅读</h4>
      </div>
      <div class="moreList">
      <div class="moreText">
        <h5>{{m.moreTitle}}</h5>
        <span>{{m.moreName}}</span>
      </div>
      <img :src="m.tip4"/>
    </div>
      <div class="moreList">
        <div class="moreText">
          <h5>{{m.moreTitle}}</h5>
          <span>{{m.moreName}}</span>
        </div>
        <img :src="m.tip4"/>
      </div>
      <div class="moreList">
        <div class="moreText">
          <h5>{{m.moreTitle}}</h5>
          <span>{{m.moreName}}</span>
        </div>
        <img :src="m.tip4"/>
      </div>

    </section>

    <!--...footer...-->
    <footer>
      <input type="text" placeholder="评论一下"/>
      <div class="share">
        <a href="">
          <i class="iconfont footeri">&#xe6d4;</i>
          <span>分享</span>
        </a>
        <a href="">
          <i class="iconfont footeri">&#xe5e3;</i>
          <span>评论</span>
        </a>
        <a href="">
          <i class="iconfont footeri">&#xe637;</i>
          <span>收藏</span>
        </a>
      </div>
    </footer>

  </div>
  </div>
  </div>
</template>

<script>
  import findData from "../../../apis/Apis"
    export default {
      name: "FindChild",
      data() {
        return {
          findDatas: [],
        }
      },
      methods: {
        /**
         * 加载页面数据
         * @private
         */
        _initFindData() {
          findData.getFindData(data => {
            this.findDatas = data;
            console.log(this.findDatas)
          })
        }
      },
      created(){
        this._initFindData()
      }
    }
</script>

<style scoped>
  /*..header..*/
  header{
    width: 100%;
    line-height: 5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f9f9f9;
    border-bottom: 1px solid #bdbdbd;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 2;
    padding: 0 1.2rem;
  }
  .headeri{
    font-size: 2.4rem;
    color: #292929;
    height: 100%;
    line-height: 5rem;
  }
  header span{
    color: black;
    font-size: 1.6rem;
  }

  /*..cont...*/
  .cont{
    padding: 1.4rem 1rem ;
    background: white;
    margin-top: 5.2rem;
  }
  .cont h3{
    font-size: 2rem;
    line-height: 3.2rem;
    color: black;
    margin-top: 0.8rem;
    padding-right: 2rem;
  }
  .cont img{
    width: 90%;
    margin-left:5%;
  }
  .up{
    display: flex;
    justify-content: space-between;
    padding: .8rem 0;
  }
  .name{
    color: #5aa1aa;
    font-size: 1.6rem;
  }
  .attention{
    background: #00c8b0;
    border-radius: 1.3rem;
  }
  .attention p{
    height: 100%;
    line-height: 2.8rem;
    color: white;
    font-size: 1.2rem;
    padding: 0 2rem ;

  }
  .pCont{
    font-size: 1.4rem;
    line-height: 2.8rem;
    color: #343434;
    padding: 1rem;
  }

  /*...more...*/
  .more{
    margin-top: 1.5rem;
    background: white;
    margin-bottom: 5.2rem;
  }
  .moreTitle{
    width: 100%;
    padding: 1rem;

  }
  .moreTitle h4{
    font-size: 1.6rem;
    color: #828282;
    border-left: .2rem solid #00af95;
    font-weight: 100;
    padding-left: 1.5rem;
  }
  .moreList{
    padding: 1.4rem 1rem;
    border-top: .1rem solid #ebeaea;
    display:flex ;

  }
  .moreList img{
    width: 29%;
    height: 8rem;
  }
  .moreText{
    width: 70%;
    display: flex;
    flex-direction: column;
    padding: 0 3.5rem 0 .5rem;
  }
  .moreText h5{
    font-size:1.6rem ;
    color: #252525;
    line-height: 2.4rem;
  }
  .moreText span{
    font-size:1.3rem ;
    color: #bababa;
    margin-top: .8rem;
  }

  /*...footer..*/
  footer{
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: .8rem 1.2rem;
    background: #fafafa;
    border-top: .1rem solid #f4f4f4;
    position: fixed;
    left: 0;
    bottom: 0;
  }
  footer input{
    width: 20.4rem;
    height: 3.4rem;
    border: .1rem solid #e3e3e3;
    border-radius:.6rem ;
    color: #cdcdcd;
    font-size: 1.4rem;
    text-indent: .6rem;
  }
  .share{
    width: 100%;
    display:flex ;
    justify-content: space-between;
    padding: 0  1.2rem;
  }
  .share span{
    font-size: 1.2rem;
    color: #848484;
  }
  .share a{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .footeri{
    font-size: 1.4rem;
    color: #838383;
    text-align: center;
  }
</style>
