<template>
  <v-layout row>
    <v-flex xs6 v-if="isUserLoggedIn">
      <songs-bookmarks class="ml-2 mr-2" />
      <recent-songs class="ml-2 mr-2 mt-2" />
    </v-flex>
    <v-flex class="xs6" :class="!isUserLoggedIn ? 'offset-xs3' : ''">
      <!-- <search-panel></search-panel> -->
      <songs-panel class="ml-2 mr-2"></songs-panel>
    </v-flex>
  </v-layout>
</template>

<script>
// import SearchPanel from "./SearchPanel.vue";
// import { mapState } from "vuex";
import SongsPanel from "./SongsPanel.vue";
import SongsBookmarks from "./SongsBookmarks.vue";
import RecentSongs from "./RecentSongs.vue";
export default {
  components: {
    SongsPanel,
    SongsBookmarks,
    RecentSongs,
    // SearchPanel
  },
  data() {
    return {
      isUserLoggedIn: this.$store.state.isUserLoggedIn,
    };
  },
};
</script>

<style scoped></style>
