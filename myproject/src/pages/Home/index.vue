<template>
  <div>
    <h1>Категорії наших продуктів</h1>
    <div class="categories">
        <ul>
          <li class="category"><i class="fa-solid fa-tablet"></i>
          <div class="text">Планшети</div>
          </li>
          <li class="category"><i class="fa-solid fa-mobile"></i>
          <div class="text">Телефони</div>
          </li>
          <li class="category"><i class="fa-solid fa-laptop"></i>
          <div class="text">Ноутбуки</div>
          </li>
          <li class="category"><i class="fa-solid fa-tv"></i>
          <div class="text">Телевізори</div>
          </li>
        </ul>
      </div>
      <h1>У нас існують акції!!</h1>
      <div>Заходьте до нашого магазину,та перевірте чи є акції на потрібні Вам товари.<br>
        А для знижок просто зареєструйтесь у нашому магазині</div>
        <div class="container">
          <ul>
            <li>
              <img src="@/assets/icon_12.png" class="icons"><h3 class="title">FREE DELIVERY</h3><div class="under-icons-text">For all order over $120</div>
            </li>
            <li>
              <img src="@/assets/icon_13.png" class="icons"><h3 class="title">Safe payment</h3><div class="under-icons-text">100% secure payment</div>
            </li>
            <li>
              <img src="@/assets/icon_14.png" class="icons"><h3 class="title">Shop with confidence</h3><div class="under-icons-text">If goods have problems</div>
            </li>
            <li>
              <img src="@/assets/icon_15.png" class="icons"><h3 class="title">24/7 help center</h3><div class="under-icons-text">Dedicated 24/7 support</div>
            </li>
            <li>
              <img src="@/assets/icon_16.png" class="icons"><h3 class="">Friendly services</h3><div class="under-icons-text">30 day satisfaction guarantee</div>
            </li>
          </ul>
        </div>
  </div>
</template>

<script>

export default {
  name: 'MyHome',
   components: {
   },
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/pages/home.scss";
</style>