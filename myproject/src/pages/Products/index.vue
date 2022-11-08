<template>
  <div>
    <h1>Наші продукти</h1>
    <product-card
      v-if="receivedProductId"
      :img-src="currentProduct.imgSrc"
      :title="currentProduct.title"
      :price="currentProduct.price"
      :sales="currentProduct.sales"
    />
    <product-list v-else :product-list-data="getProductList" />
  </div>
</template>

<script>
import ProductList from '@/components/ProductList'
import ProductCard from '@/components/ProductList/ProductCard'
import { mapGetters } from "vuex";
export default {
  name: 'MyProducts',

  components: {
    ProductList,
    ProductCard,
  },

  computed: {
    ...mapGetters(['getProductList']),
    receivedProductId() {
      return this.$route.params.id
    },
    currentProduct() {
      return this.receivedProductId
        ? this.listData.find((item) => item.id == this.receivedProductId)
        : {}
    },
  },
}
</script>

<style lang="scss" scoped>
</style>