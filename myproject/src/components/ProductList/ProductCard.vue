<template>
  <div
    class="card-container"
  >
  <div class="card">
    <span v-show="sales" class="card-sales">Акція</span>
    <div class="card-image">
      <img :src="imgSrc" />
    </div>
    <div class="card-title">
      {{ title }}
    </div>
    <div class="card-price">
      {{ priceToShow }}
    </div>
    <div class="card-header">
      
      <div ><button v-on:click="addToCart(id)" class="buttonAdd">
        Корзина
      </button></div>
    </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: 'ProductCard',

  props: {
    imgSrc: {
      type: String,
      default:
        'https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg',
    },
    title: {
      type: String,
      default: 'No title',
    },
    price: {
      type: Number,
      default: 0,
    },
    sales: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    priceToShow() {
      return `${this.price} грн.`
    },
  },

  methods: {
    ...mapActions(["addToCart"]),
  },
}
</script>

<style lang="css" scoped>
.card-container {
  display: block;
  width: 275px;
  height: 350px;
  background-color: #122936;
  color: #fff;
  border-radius: 20px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 25px;
  padding-bottom: 10px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.card-container::before{
  content: '';
  display: block;
  width: 125%;
  height: 100%;
  background-color: #2196f3;
  transform: skewY(345deg);

  position: absolute;
  top: -50%;
  transition: 0.5s;

}
.card-container:hover:before{
  transform: skewY(390deg);
  top: -70%;
  
}
.card-container:hover .card-image img{
  width: 125px;
  height: 130px;
  border-radius: 10px;
  box-shadow: 2px  white;
  padding: 0;
}
.card-container:hover .buttonAdd{
  top: 0;
}

.card-sales {
  background-color: rgb(255, 47, 99);
  position: relative;
  top:10px;
  left: 80px;
  color: white;
  margin-left: 10px;
  border-radius: 8px;
  padding: 8px;
}
.card-image {
  margin-top: 30px;
  width: 100%;
  padding: 5px;
  position: relative;

}
.card-image img {
  width: 145px;
  height: 150px;
  position: relative;
  transition: 0.5s;
    border-radius: 7px;
}
.buttonAdd{
  position: relative;
  text-decoration: none;
  border: none;
  cursor: pointer;
  background-color: #02a717;
  padding: 15px;
  border-radius: 30px;
  color: inherit;
  text-transform: inherit;
  font-weight: inherit;
}
.buttonAdd:hover{
background-color: #066d25;
}
.card-title{
  font-size: 18px;
  margin: 0 0 10px;
  position: relative;
}
.card-price{
  font-size: 24px;
  margin: 0 0 30px;
  position: relative;
}

</style>