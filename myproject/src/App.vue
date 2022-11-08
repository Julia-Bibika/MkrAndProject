<template>
  <div class="wrapper">
    <header class="header">
      <div class="logotype"><a href="#"><img class="img-logotype" src="@/assets/logotype.png" /></a></div>
      
    <p class="links">
      <router-link class="link" to="/">Home</router-link>
      <router-link class="link" to="/products-list">Products</router-link>
      <router-link class="link" to="/about">About</router-link>
      <router-link class="link" to="/cart">Cart</router-link>
    </p>
        <ul>
            <li><router-link class="link1" to="/sign-in">Sign In</router-link></li>
            <li><router-link class="link1" to="/sign-up">Sign Up</router-link></li>
        </ul>
    </header>
    <router-view></router-view>
    <a href='#' class="arrowUp">
      <i class="fa-solid fa-arrow-up"></i>
    </a>
    <footer class="footer">
      <div class="inner-footer">
      <h2>Соц.мережі автора сайту</h2>
      <div class="social-links">
        <ul>
          <li class="social-items"><a href="#"><i class="fa fa-vk"></i></a></li>
          <li class="social-items"><a href="#"><i class="fa fa-telegram"></i></a></li>
          <li class="social-items"><a href="#"><i class="fa fa-google"></i></a></li>
        </ul>
      </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
}
</script>

<style lang="scss">
@import "./assets/styles";
h1{
  color: rgb(22, 204, 143);
}
.links{
  position: relative;
  left: 55%;
  top:22px;
}
.link{
  position: relative;
  right: 130px;
  color: #2ab486;
  padding: 6px;
  font-size: 20px;
  background: #333;
  margin: 5px;
  text-decoration: none;
  transition: 0.3s;
  justify-content: center;
  align-items: center;
  letter-spacing: 1px;
  font-weight: 500;
  text-transform: uppercase;
}
.link::before{
  position: absolute;
  top: 0;
  left: 0;
  background: #009261;
  transform: scaleX(0);
  transition:transform 0.5s ease-in-out;
  transform-origin: right;
}
.link:hover::before{
  transform: scaleX(1);
  transform-origin: left;
  color:#dd3e54;
  font-size: 21px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  padding: 0;
  margin: 0;
  background: linear-gradient(to bottom ,#0F2027,#203A43,#f7797d);
  background-size: 600% 600%;
}
</style>
