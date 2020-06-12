import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css"; // Note this
import "./assets/css/tailwind.css";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.config.productionTip = false;

//creating global directive
Vue.directive("Bold", {
  bind: function(el) {
    el.style.fontWeight = "bolder";
  }
});
Vue.filter("shorten", function(v) {
  return v.substring(0, 90) + " ...";
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
