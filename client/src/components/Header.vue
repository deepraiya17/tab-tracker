<template>
  <v-toolbar class="cyan" dark fluid>
    <v-toolbar-items>
      <v-btn class="cyan mr-3" to="/">TabTracker</v-btn>
      <v-btn class="cyan" to="/songs"> Browse </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn class="cyan mr-3" v-if="!$store.state.isUserLoggedIn" to="/login">
        Login
      </v-btn>
      <v-btn v-if="!$store.state.isUserLoggedIn" to="/register" class="cyan">
        Sign Up
      </v-btn>
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
      this.$store.dispatch("setUser", { user: null });
      this.$router.push("login");
    },
  },
};
</script>

<style scoped></style>
