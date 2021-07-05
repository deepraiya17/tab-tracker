import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  state: {
    user: null,
    isUserLoggedIn: false,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload.user;
      state.isUserLoggedIn = !!state.user;
    },
  },
  actions: {
    setUser(context, payload) {
      context.commit("setUser", payload);
    },
  },
});
