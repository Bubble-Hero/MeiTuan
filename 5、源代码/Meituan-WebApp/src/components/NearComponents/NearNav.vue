<template>
  <div>
    <!-----------------nearnav------------->
    <div class="nearnav">
      <ul>
        <li v-for="(p,index) in nav1"><a href="">{{p.title}}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NearNav",
    props:["nav1"]
  }
</script>

<style scoped>
  .nearnav ul{
    display: flex;
    padding: 1rem;
    justify-content: space-around;
  }
  .nearnav ul li a{
    font-size: 1.4rem;
  }
</style>
