<template>
    <div class="order">
        <order-header></order-header>
    </div>
</template>

<script>
    import OrderHeader from "../components/OrderComponents/OrderHeader";
    export default {
        name: "order",
      components: {OrderHeader}
    }
</script>

<style scoped>
.order{
  display: flex;
  flex-direction:column ;
}
</style>
