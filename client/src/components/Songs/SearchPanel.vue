<template>
  <panel title="Search Song">
    <v-text-field
      label="Search song by song tile, album, artist or genre"
      v-model="searchTerm"
    />
  </panel>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: "",
    };
  },
  watch: {
    searchTerm() {
      const route = { path: "/songs" };
      if (this.searchTerm !== "") {
        route.query = { search: this.searchTerm };
      }
      this.$router.push(route);
    },
    "$route.query.search": {
      immediate: true,
      handler(value) {
        this.searchTerm = value;
      },
    },
  },
};
</script>

<style scoped></style>
