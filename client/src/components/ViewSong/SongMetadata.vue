<template>
  <panel title="Song Metadata">
    <v-layout>
      <v-flex xs6>
        <br />
        <br />
        <div class="song-title">{{ song.title }}</div>
        <div class="song-artist">{{ song.artist }}</div>
        <div class="song-genre">{{ song.genre }}</div>
        <router-link :to="songPage(song.id)">
          <v-btn dark class="cyan"> Edit</v-btn>
        </router-link>
        <br />
      </v-flex>
      <v-flex xs6>
        <img :src="song.albumImageUrl" height="300px" class="mb-5" />
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import Panel from "../Panel.vue";
export default {
  props: ["song"],
  components: { Panel },
  methods: {
    songPage(id) {
      return `/songs/${id}/edit`;
    },
  },
};
</script>

<style scoped>
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 18px;
}
</style>
