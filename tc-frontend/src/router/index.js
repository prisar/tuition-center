import Vue from "vue";
import Router from "vue-router";
import home from "../components/Home.vue";
import tuitioncenters from "../components/TuitionCenters.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/tuitioncenters",
      name: "tuitioncenters",
      component: tuitioncenters
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
