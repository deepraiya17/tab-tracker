<template>
  <v-app-bar app color="cyan" dark>
    <div class="ml-5 mr-5" @click="changeRoute('/abc')">
      <v-app-bar-title>TAB TRACKER</v-app-bar-title>
    </div>
    <div @click="changeRoute('/songs')" class="ml-5 mr-5">Browse</div>
    <v-spacer></v-spacer>
    <div
      class="ml-5 mr-5"
      v-if="!$store.state.isUserLoggedIn"
      @click="changeRoute('/login')"
    >
      Login
    </div>
    <div
      class="ml-5 mr-5"
      v-if="!$store.state.isUserLoggedIn"
      @click="changeRoute('/register')"
    >
      Sign Up
    </div>
    <div class="ml-5 mr-5" v-if="$store.state.isUserLoggedIn" @click="logout">
      Log Out
    </div>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("setUser", { user: null });
      this.$router.push("login");
    },
    changeRoute(route) {
      if (this.$route.path !== route) {
        this.$router.push(route);
      }
    },
  },
};
</script>

<style scoped></style>
