import Vue from "vue";
import App from "./App.vue";

//导入css
import "./styles/normalize.css";
import "./styles/todo.css";



Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
