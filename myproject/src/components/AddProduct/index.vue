<template>
    <div class="input-container">
    <div>
      <label>
        Силка до зображення
        <input type="text" v-model="imgSrc" />
      </label>
    </div>
    <div>
      <label>
        Назва товару
        <input type="text" v-model="title" />
      </label>
    </div>
    <div>
      <label>
        Ціна товару
        <input type="number" v-model.number="price" />
      </label>
    </div>
    <div>
      <label>
        Акційний товар
        <input type="checkbox" v-model="sales" />
      </label>
    </div>
    <button @click="onChange">{{ buttonTitle }}</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
    export default {
        name:"AddProduct",
        data() {
             return {
                imgSrc: null,
                title: null,
                price: 0,
                sales: false,
            }
        },
         computed: {
    ...mapGetters(['getProductById']),
    receivedProductId() {
      return this.$route.params.id
    },
    isEditMode() {
      return this.receivedProductId
    },
    buttonTitle() {
      return this.receivedProductId ? 'Save' : 'Add'
    },
  },
        methods: {
            ...mapActions(['addNewProduct', 'updateProduct']),
            onChange() {
                if (this.isEditMode)
                    this.updateProduct({
                    id: this.receivedProductId,
                    imgSrc: this.imgSrc,
                    title: this.title,
                    price: this.price,
                    sales: this.sales,
                    })
                else
                    this.addNewProduct({
                    imgSrc: this.imgSrc,
                    title: this.title,
                    price: this.price,
                    sales: this.sales,
                    })
                this.$router.push({
                    name: 'products',
                })
                },
              onAddNewProduct() {
                this.addNewProduct({
                imgSrc: this.imgSrc,
                title: this.title,
                price: this.price,
                sales: this.sales,
                })
            }
        },
        mounted() {
        if (this.isEditMode) {
        const product = this.getProductById(this.receivedProductId)
        if (product) {
            this.imgSrc = product.imgSrc
            this.title = product.title
            this.price = product.price
            this.sales = product.sales
        }
    }
  },
}
</script>

<style lang="scss" scoped>
.input-container{
  margin-top: 50px;
}
input{
  background: #45f3ff;
  border:none;
}
button{
    border: none;
    outline: none;
    background: #45f3ff;
    padding: 11px 25px;
    width: 100px;
    margin-top: 10px;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
}
</style>