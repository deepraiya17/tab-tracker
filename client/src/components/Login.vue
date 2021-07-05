<template>
  <v-layout row mt-5>
    <v-flex xs6 offset-xs3>
      <panel title="Log In">
        <v-text-field v-model="email" label="Email" />
        <br />
        <v-text-field label="Password" v-model="password" type="password" />
        <br />
        <div class="error white--text" v-html="error" />
        <br />
        <v-btn color="cyan" dark @click="login">Login</v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>
<script>
import AuthenticationService from "../services/AuthenticationService.js";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password,
        });
        this.$store.dispatch("setUser", { user: response.data.user });
        this.$router.push("/songs");
      } catch (err) {
        this.error = err.response.data.error;
      }
    },
  },
};
</script>
<style></style>
