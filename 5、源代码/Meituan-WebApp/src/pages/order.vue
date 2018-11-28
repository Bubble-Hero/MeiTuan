<template>
    <div class="order">
        <order-header></order-header>
        <order-nav></order-nav>
    </div>
</template>

<script>
    import OrderHeader from "../components/OrderComponents/OrderHeader";
    import OrderNav from "../components/OrderComponents/OrderNav";
    export default {
        name: "order",
      components: {OrderNav, OrderHeader}
    }
</script>

<style scoped>
.order{
  display: flex;
  flex-direction:column ;
}
</style>
