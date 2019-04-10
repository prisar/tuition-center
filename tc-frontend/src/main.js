import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

Vue.config.productionTip = false;

// Setup axios to be available globally through Vue
Vue.axios = Vue.prototype.$http = axios.create({
  baseURL: "http://localhost:3030/api"
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
