import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { routes } from "./router";

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const router = new VueRouter({
    routes,
    mode: "history",
});

const app = new Vue({
    el: "#app",
    router,
    render: (h) => h(App),
});
