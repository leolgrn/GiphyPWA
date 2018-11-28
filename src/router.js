import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "trending_gif",
      component: () => import("./views/trendingGif.vue")
    },
    {
      path: "/random/gif",
      name: "random_gif",
      component: () => import("./views/randomGif.vue")
    },
    {
      path: "/random/sticker",
      name: "random_sticker",
      component: () => import("./views/randomSticker.vue")
    }
  ]
});
