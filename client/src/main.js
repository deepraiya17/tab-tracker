import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueYouTubeEmbed from "vue-youtube-embed";
import Panel from "./components/globals/Panel.vue";

Vue.use(VueYouTubeEmbed);
Vue.component("panel", Panel);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
