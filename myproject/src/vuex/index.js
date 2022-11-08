import { createStore } from "vuex";

const store = createStore({
    state:{
            listData: [
                {
                    id: 1,
                    imgSrc:
                      'https://s.ek.ua/jpg_zoom1/1652336.jpg',
                    title: 'Xiaomi Redmi 10',
                    price: 5000,
                    sales: true,
                  },
                  {
                    id: 2,
                    imgSrc:
                      'https://content2.rozetka.com.ua/goods/images/big/278089722.jpg',
                    title: 'Ноутбук ASUS VivoBook 17 X712EA-BX817',
                    price: 20000,
                    sales: false,
                  },
                  {
                    id: 3,
                    imgSrc:
                      'https://content1.rozetka.com.ua/goods/images/big/253826353.jpg',
                    title: 'Ноутбук Prestigio SmartBook 141 С7',
                    price: 9000,
                    sales: true,
                  },
                  {
                    id: 4,
                    imgSrc:
                      'https://content1.rozetka.com.ua/goods/images/preview/231359985.png',
                    title: 'Смарт-годинник Amazfit GTR 3 Pro Brown Leather',
                    price: 1000,
                    sales: false,
                  },
                    {
                    id: 5,
                    imgSrc:
                      'https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/a/c/acer-aspire-3-a315-56-wp-win10-black-01.jpg/w_600',
                    title: 'Ноутбук Acer Aspire 3 A315-56 Black',
                    price: 21999,
                    sales: true,
                  },
                    {
                    id: 6,
                    imgSrc:
                      'https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/u/a/ua-galaxy-a53-5g-a536-sm-a536ezkhsek-531826029_1__1.jpg/w_600',
                    title: 'Смартфон Samsung Galaxy A53 5G',
                    price: 15999,
                    sales: false,
                  },
                    {
                    id: 7,
                    imgSrc:
                      'https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/n/o/note_11_gray_6.jpg/w_600',
                    title: 'Смартфон Xiaomi Redmi Note 11 4/64Gb Graphite Gray',
                    price: 7799,
                    sales: false,
                  },
                    {
                    id: 8,
                    imgSrc:
                      'https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/l/e/lenovo_v14_g2_itl_82kas03800_black_1__1.jpg/w_600',
                    title: 'Ноутбук Lenovo V14 G2ITL Iron Grey',
                    price: 17777,
                    sales: true,
                  },
                  {
                    id: 9,
                    imgSrc:
                      'https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/p/a/pad_5_grey_1__1.jpg/w_600',
                    title: 'Планшет Xiaomi Pad 5 10.9 6/128Gb Cosmic Gray',
                    price: 14999,
                    sales: true,
                  },
                  {
                    id: 10,
                    imgSrc:
                      'https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/g/a/galaxy_tab_a8_dark_gray_vfront.jpg.jpg/w_600',
                    title: 'Планшет Samsung Galaxy Tab A8 WiFi 3/32 Dark Grey',
                    price: 7999,
                    sales: false,
                  },
                  {
                    id: 11,
                    imgSrc:
                      'https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/g/3/g35tf_001_front_black_1.jpg/w_600',
                    title: 'Монітор ігровий Samsung Odyssey G3',
                    price: 9299,
                    sales: true,
                  },
                  {
                    id: 12,
                    imgSrc:
                      'https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/g/i/gigabyte_g24f.jpg/w_600',
                    title: 'Монітор ігровий Gigabyte G24F',
                    price: 8199,
                    sales: true,
                  },
              ],
              cartList: [],
    },
    getters:{
        getProductList(state){return state.listData},

        getProductById:(state) => (id) =>
        id ? state.listData.find((item) => item.id == id) : {},
        getCartProducts(state) {return state.cartList},
    },

    mutations:{
      addToCart(state, id) {
        for (let i = 0; i < state.listData.length; i++) {
          if (id == state.listData[i].id) {
            state.cartList.push(state.listData[i]);
            break;
          }
        }
      },
      removeToCart(state, id){
        for(let i = 0; i < state.cartList.length; i++){
          if(id == state.cartList[i].id){
            state.cartList.splice(i,1);
          }
        }
      },
    },
    actions: {
      addToCart({ commit }, id) {
        commit("addToCart", id);
      },
      removeToCart({ commit},id){
        commit("removeToCart",id)
      }
    },

});

export default store