import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
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
