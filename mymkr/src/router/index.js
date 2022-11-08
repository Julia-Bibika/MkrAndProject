import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import ContactPage from "@/pages/ContactPage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/About",
    component: AboutPage,
  },
  {
    path: "/Contact",
    component: ContactPage,
  },
];
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});
export default router;
