<template>
  <v-layout row mt-5>
    <v-flex xs6 offset-xs3>
      <div class="mt-5 white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 py-5 text-center">
          <v-text-field v-model="email" label="Email" />
          <br />
          <v-text-field label="Password" v-model="password" type="password" />
          <br />
          <div class="error white--text" v-html="error" />
          <br />
          <v-btn color="cyan" dark @click="login">Login</v-btn>
        </div>
      </div>
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
        // console.log({ token: response.data.token });
        this.$store.dispatch("setToken", { token: response.data.token });
        this.$store.dispatch("setUser", { user: response.data.user });
      } catch (err) {
        this.error = err.response.data.error;
      }
    },
  },
};
</script>
<style></style>
