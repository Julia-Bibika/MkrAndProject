<template>
  <div>
    <div class="list-container">
      <product-card
        v-for="item in productListData"
        :key="item.id"
        :img-src="item.imgSrc"
        :title="item.title"
        :price="item.price"
        :sales="item.sales"
        @delete-item="onDelete(item.id)"
      />
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex"
import ProductCard from './ProductCard.vue'
export default {
  name: 'ProductList',

  components: {
    ProductCard,
  },

  props: {
    productListData: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
    }
  },

  methods: {
    ...mapActions(['deleteItem']),
    onDelete(itemId) {
      this.deleteItem(itemId)
    },
    onAdd(priceValue) {
      this.totalSum += priceValue
    },
  },
}
</script>

<style lang="css" scoped>
.list-container {
  width: 100%;
  display: grid;
  column-gap: 3%;
  grid-template-columns: 275px 275px 275px 275px;
}
</style>
