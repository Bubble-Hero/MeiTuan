<template>
    <div class="order">
        <order-header></order-header>
        <order-nav></order-nav>
        <order-section></order-section>
    </div>
</template>

<script>

    import OrderHeader from "../components/OrderComponents/OrderHeader";
    import OrderNav from "../components/OrderComponents/OrderNav";
    import OrderSection from "../components/OrderComponents/OrderSection";
    export default {
        name: "order",
      components: {OrderSection, OrderNav, OrderHeader}
    }
</script>

<style scoped>
.order{
  display: flex;
  flex-direction:column ;
}
</style>
