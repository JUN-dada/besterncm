import Vue from 'vue'
import App from './App.vue'
import store from "@/store/main";
import router from "./router";
import './css/index.css';
import axios from "axios";
import VueRouter from "vue-router";
import Vuex from "vuex";
import ElementUI from 'element-ui';

Vue.use(ElementUI);
import {Slider, Message} from "element-ui";

Vue.use(Slider);
Vue.use(Message);

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex);
Vue.use(store);
const vm = new Vue({
    store,
    router,
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this;
    }
}).$mount('#app')
