import Vuex from 'vuex';
import Vue from 'vue'
import axios from "axios";

Vue.use(Vuex)

const actions = {
    async getlovemassage(countx, value) {
        try {
            const res = await axios.get('https://api.mcloc.cn/love');
            countx.commit('setlove', res.data);
        } catch (err) {
            console.log(err);
        }
    },
};
const mutations = {
    setlove(state, value) {
        console.log(value)
        state.lovemassage = value
    },
};

const state = {
    lovemassage: '',

};
const store = new Vuex.Store({
    actions: actions,
    mutations: mutations,
    state: state,
    strict: true,
})

export default store


