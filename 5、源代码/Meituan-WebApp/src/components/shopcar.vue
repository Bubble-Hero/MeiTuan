<template>
    <div class="allshop">
      <header>
        <ul class="one">
            <li @click="gotoBack"><i class="iconfont">&#xe63c;</i></li>
        </ul>
        <span class="title">我的订单</span>
        <ul class="two">
          <li><i class="iconfont">&#xe659;</i></li>
          <li><i class="iconfont">&#xe61a;</i></li>
          <li><i class="iconfont">&#xe62b;</i></li>
        </ul>
      </header>
      <div class="Bigtitle">我的订单</div>
      <div class="shop-car">
        <div class="shop-car-listBox">
          <form class="cake-form">
            <table>
              <tbody>
              <tr class="first-tr">
                <th class="desc">商品</th>
                <th class="unit-price">单价</th>
                <th class="num">数量</th>
                <th class="total-price allp">总价</th>
              </tr>
              <!--<tr>
                                  <td>
                                      <a href="">miss蛋糕:水果蛋糕</a>
                                  </td>
                                  <td>￥<span class="D-price">98</span></td>
                                  <td>
                                      <div class="input-number" >
                                          <button class="min-btn" type="button"><i class="iconfont">&#xe675;</i></button>
                                          <input type="text" class="num-input input" value="1" onkeypress="return event.keyCode>=49&&event.keyCode<=57"/>
                                          <button class="max-btn" type="button"><i class="iconfont">&#xe64f;</i></button>
                                      </div>
                                  </td>
                                  <td>
                                      ￥<span class="D-Allprice">98</span>
                                  </td>
                              </tr>-->
              </tbody>
            </table>
            <div class="row discount"></div>
            <div class="row rowprice">
							<span class="total-price">
								应付金额：
								<span class="total-price-right">
									<b>￥</b><span class="sum-price"></span>
								</span>
							</span>
            </div>
            <div class="row send-phone">
              将发送美团券密码至手机号：{{name}}
              <a href="javascript:void(0)">绑定新手机号</a>
            </div>
            <div class="btn-box">
              <input class="sub-btn" type="button" value="提交订单"/>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "shopcar",
      data(){
          return{
            name:""
          }
      },
      methods:{
        gotoBack(){
          let url=this.$route.query.from
          this.$router.push({name:url})
        },
          getname(){
            this.name=window.localStorage.getItem("username")
          },

          getData(){
            if(!this.name==""){
              this.$http.post("http://localhost/MeiYuan-webapp-php/getShoppingCart.php", {//这里是将表单的数据提交到该地址
                "vipName":this.name,
              },{
                emulateJSON:true
              }).then((res)=> {
                //获取商品
                console.log(res.data)
                this.showshopcar(res.data);
              })
            }
          },
        showshopcar(obj){
            let his=this
          for(let i in obj){
            $("tbody").append("<tr class=addTrbox>"+
              "<td>"+
              "<a class=shop-Name href=>miss蛋糕:水果蛋糕</a><label class=deleteshop style=cursor:pointer;color:#28c0ac;font-size:12px;>删除</label>"+
              "</td>"+
              "<td class=secondtd><span class=D-price>98</span></td>"+
              "<td>"+
              "<div class=input-number>"+
              "<button class=min-btn type=button><i class=iconfont>&#xe506;</i></button>"+
              "<input type=text class=num-input input value=1>"+
              "<button class=max-btn type=button><i class=iconfont>&#xe61d;</i></button>"+
              "</div>"+
              "</td>"+
              "<td>"+
              "￥<span class=D-Allprice>98</span>"+
              "</td>"+
              "</tr>")

            $(".first-tr").nextAll().addClass("tr-style");
            $("tr").last().removeClass("tr-style");
            $($(".shop-Name")[i]).html(obj[i].p1);
            $($(".D-price")[i]).html(obj[i].span1);
            $($(".num-input")[i]).val(obj[i].goodsCount);
            allPrice(obj);
            //增减商品
            $(".min-btn")[i].onclick=function(){	//减
              let utNum=parseInt($(".num-input")[i].value);
              if(utNum>0){
                utNum--;
                $(".num-input")[i].value=utNum;
                //计算总价
                allPrice(obj)
                his.$http.post("http://localhost/MeiYuan-webapp-php/updateGoodsCount.php", {
                  "vipName":his.name,
                  "goodsId":obj[i].goodsId,
                  "goodsCount":$(".num-input")[i].value
                },{
                  emulateJSON:true
                }).then((res)=> {
                  if(res.data==1){
                    console.log("减ok")
                  }
                })
              }
            }
            $(".max-btn")[i].onclick=function(){	//加
              let utNum=parseInt($(".num-input")[i].value);
              if(utNum<99){
                utNum++;
                $(".num-input")[i].value=utNum;
                allPrice(obj)
                his.$http.post("http://localhost/MeiYuan-webapp-php/updateGoodsCount.php", {
                  "vipName":his.name,
                  "goodsId":obj[i].goodsId,
                  "goodsCount":$(".num-input")[i].value
                },{
                  emulateJSON:true
                }).then((res)=> {
                  if(res.data==1){
                    console.log("加ok")
                  }
                })
              }
            }
            $(".num-input")[i].onkeyup=function(){
              let utNum=parseInt($(".num-input")[i].value);
              if(utNum<99){
                allPrice(obj)
              }
            }

            $(".num-input")[i].onblur=function(){		//数字失去焦点
              let utNum=parseInt($(".num-input")[i].value);
              if(utNum<99){
                his.$http.post("http://localhost/MeiYuan-webapp-php/updateGoodsCount.php", {
                  "vipName":his.name,
                  "goodsId":obj[i].goodsId,
                  "goodsCount":$(".num-input")[i].value
                },{
                  emulateJSON:true
                }).then((res)=> {
                  if(res.data==1){
                    console.log("改ok")
                  }
                })
              }
            }
            $(".deleteshop")[i].onclick=function(){		//删除商品
              //后台删除
              his.$http.post("http://localhost/MeiYuan-webapp-php/deleteGoods.php", {
                "vipName":his.name,
                "goodsId":obj[i].goodsId,
              },{
                emulateJSON:true
              }).then((res)=> {
                if(res.data==1){
                  console.log("delete ok")
                }
              })
              //页面删除
              $($(".addTrbox")[i]).fadeOut(400,function(){
                $(this)[i].style.display="none";
              })
            }
          }
          function allPrice(obj){
            var allprice=0;			//所有商品价格总计
            var money=0;			//单种商品价格总计
            for(let i in obj){
              let utNum=parseInt($($(".num-input")[i]).val());	//单种商品数量
              let utPrice=Number($($(".D-price")[i]).html())	//该商品单价
              money=utNum*utPrice;
              $($(".D-Allprice")[i]).html((money).toFixed(2));
              allprice+=money
            }
            $(".sum-price").html((allprice).toFixed(2))
          }
            $(".addTrbox ").find(":last-child").css({textAlign:"center"})
          $(".addTrbox ").find("td").css({fontSize:"1.3rem",verticalAlign:"top"})
          $(".num-input ").css({width:"40%",textAlign:"center",border:0,backgroundColor:"#eee",padding:".1rem",margin:"0 .2rem"})
          $(".min-btn").css({backgroundColor:"#fff",border:0})
          $(".max-btn").css({backgroundColor:"#fff",border:0})
          $("button").find(".iconfont").css({fontSize:"1.2rem"})
          $(".secondtd").css({textAlign:"center"})
        }
      },
      mounted(){
          this.$nextTick(()=>{
            //获取用户名
            this.getname()
            //获取用户商品
            this.getData()
            console.log(this.$route.query.from)
          })

      }
    }
</script>

<style lang="scss" scoped>
  .title{
    margin: auto;
  }
  .desc{
    width:50%;
  }
  .unit-price{
    width: 20%;
    text-align: center;
  }
  .num{
    width: 20%;
    text-align: center;
  }
  .allp{
    width: 10%;
    text-align: center;
  }
  .input-number{
    width: 20% !important
  }
  .num-input{
    width: 10rem !important;
    border: 0;
  }
  .allshop{
    background-color: #fff;
  }
  header{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: 4.8rem;
    position: fixed;
    top: 0;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: #fff;
    z-index: 1000;
    width: 100%;
    border-bottom: 1px solid #eee;
    .one{
      width: 10rem;
      padding-left: 2rem;
    }
    .two{
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      width: 10rem;
      justify-content: space-around;
    }
    .iconfont{
      font-size: 2rem;
      color: #24a29e;
    }
  }
  .shop-car{
    margin-top:4.8rem;
  }
  table{
    width: 100%;
  }
  .first-tr{
    width: 100%;border-bottom: 1px solid #eee;font-size: 1.3rem;
  }
  form{
    padding: 1rem;background-color:#fff;padding-top: 0;
  }
 .discount {
    font-size: 14px;
    letter-spacing: 1px;
    color: #666;
  }
 .total-price {
    font-size: 1.2rem;
    font-weight: bolder;
    color: #666;
    line-height: 30px;
   margin-left: auto;
   padding: .5rem .2rem;
  }
.total-price-right {
    font-size: 1.6rem;
    color: #f76120;
  }
 .send-phone {
    text-align: left;
    font-size: 1.2rem;
    color: #222;
   padding: .5rem 0;
  }
 .send-phone a {
    color: #2bb8aa;margin-left: 1rem;
  }
  .btn-box{
    width: 100%;height: 4rem;margin-top: 3rem;
       input {
         display: inline-block;
         padding: .5rem 1rem .5rem;
         font-size: 1.4rem;
         font-weight: 400;
         color: #fff;
         background-color: #2db3a6;
         background-image: linear-gradient(to bottom, #2ec3b4, #2db3a6);
         border: 0;
         border-bottom: 1px solid #008177;
         border-radius: 2px;
         cursor: pointer;
         letter-spacing: 2px;
         float: right;
       }
  }
</style>
