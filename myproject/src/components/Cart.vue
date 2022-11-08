<template>
    <div class="container-cart">
        <i class="fa-solid fa-cart-shopping">Корзина</i>
        <CartItem
        v-for="item in cartData"
        :key="item.id"
        :id="item.id"
        :imgSrc ="item.imgSrc"
        :title ="item.title"
        :price ="item.price"
        :sales ="item.sales"
        />
    </div>
</template>


<script>
import CartItem from "@/components/CartItem.vue"
    export default {
         name:"OtherCart",
         components:{
            CartItem, 
         },
        props: {
            cartData: {
                type: Array,
                default: () => [],
            },
        },
};
</script>

<style lang="scss" scoped>

</style>