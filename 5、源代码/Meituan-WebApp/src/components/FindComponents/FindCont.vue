<template>
  <!--<div>-->
    <router-link to="/find/findChild" class="add">
    <div class="findCont">
      <div class="up">
        <span class="name">{{m.name}}</span>
        <span class="attention"><p>{{m.attention}}</p></span>
      </div>
      <p class="p">{{m.title}}</p>
      <div class="contImg">
        <!--<video controls width="100%" height="60%">-->
          <!--<source :src="m.vid1" type="video/mp4"/>-->
        <!--</video>-->
        <img :src="m.tip1">
        <img :src="m.tip2">
        <img :src="m.tip3">
      </div>
      <div class="message">
        <span class="userId">{{m.userId}}</span>
        <span class="see">{{m.see}}人看过</span>
      </div>
    </div>
    </router-link>
  <!--</div>-->
</template>

<script>

    export default {
      name: "FindCont",
      props: ["ind", "m"],
      mounted(){
        //alert(1)
      }
    }
</script>

<style scoped>
  .add{
    width: 100%;
  }
  .up{
    display: flex;
    justify-content: space-between;
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
    color: white;
    font-size: 1.4rem;
    padding: 0 2rem ;
  }
.findCont{
  width: 100%;
  height: auto;
  padding: 1.4rem 1rem  1.2rem 1rem;
  border: 1px solid #f3f3f3;
}
  .p{
    color: #222a35;
    font-size: 1.6rem;
    text-align: left;
  }
.contImg{
  width: 100%;
  padding-top: 1rem;
  display: flex;
}
  .contImg img{
    width: 10rem;
    margin:auto;
    border:0;
    height: 10rem;
  }
  .message{
    display: flex;
    justify-content: flex-start;
  }
  .message span{
    font-size: 1.2rem;
    color: #a4a4a4;
    margin-right: 1.5rem;
  }
</style>
