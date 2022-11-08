<template>
        <div>
            <h1>Корзина</h1>
        <other-cart :cartData="getCartProducts"/>
    </div>
</template>

<script>
import OtherCart from'@/components/Cart.vue';
import {mapGetters} from "vuex";
    export default {
        name:"CartView",
        components:{
            OtherCart,
        },
        computed: {
            ...mapGetters(['getCartProducts']),
        },
        
    }
</script>

<style lang="scss" scoped>

</style>