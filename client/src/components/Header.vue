<template>
  <v-toolbar class="cyan" dark fluid>
    <v-toolbar-title>
      <router-link to="/">
        <v-btn class="cyan">TabTracker</v-btn>
      </router-link>
    </v-toolbar-title>
    <v-toolbar-items>
      <router-link to="/songs">
        <v-btn class="cyan mt-4"> Browse </v-btn>
      </router-link>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <router-link v-if="!$store.state.isUserLoggedIn" to="/login">
        <v-btn class="cyan mt-4"> Login </v-btn>
      </router-link>
      <router-link v-if="!$store.state.isUserLoggedIn" to="/register">
        <v-btn class="cyan mt-4"> Sign Up </v-btn>
      </router-link>
      <v-btn v-if="$store.state.isUserLoggedIn" class="cyan" @click="logout"
        >Log Out</v-btn
      >
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("setToken", { token: null });
      this.$store.dispatch("setUser", { user: null });
      this.$router.push("/");
    },
  },
};
</script>

<style scoped></style>
