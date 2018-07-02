import Vue from "vue";
import Router from "vue-router";
import DefaultLayout from "./layouts/Default.vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Quiz from "./views/Quiz.vue";
import Data from "./views/Data.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: DefaultLayout,
      children: [
        {
          path: "",
          name: "home",
          component: Home
        },
        {
          path: "/about",
          name: "about",
          component: About
        },
        {
          path: "/quiz",
          name: "quiz",
          component: Quiz
        },
        {
          path: "/data",
          name: "data",
          component: Data
        }
      ]
    }
  ]
});
