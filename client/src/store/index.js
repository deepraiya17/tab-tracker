import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false,
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload.token;
      if (state.token) state.isUserLoggedIn = true;
      else state.isUserLoggedIn = false;
    },
    setUser(state, payload) {
      state.user = payload.user;
    },
  },
  actions: {
    setToken(context, payload) {
      context.commit("setToken", payload);
    },
    setUser(context, payload) {
      context.commit("setUser", payload);
    },
  },
});
