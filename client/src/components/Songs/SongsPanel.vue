<template>
  <panel title="Songs">
    <v-btn
      slot="action"
      medium
      absolute
      right
      dark
      depressed
      to="/songs/create"
      class="cyan accent-5 white--text"
    >
      <span class="add">+</span>
    </v-btn>
    <div v-for="song in songs" :key="song.id">
      <v-layout>
        <v-flex xs6>
          <br />
          <br />
          <div class="song-title">{{ song.title }}</div>
          <div class="song-artist">{{ song.artist }}</div>
          <div class="song-genre">{{ song.genre }}</div>
          <br />
          <v-btn dark :to="songPage(song.id)" class="cyan"> View</v-btn>
        </v-flex>
        <v-flex xs6>
          <img
            :src="song.albumImageUrl"
            height="300px"
            width="auto"
            class="mb-5"
          />
        </v-flex>
      </v-layout>
    </div>
  </panel>
</template>

<script>
import SongServices from "../../services/SongsServices.js";
export default {
  methods: {
    songPage(id) {
      return `/songs/${id}`;
    },
  },
  watch: {
    "$route.query.search": {
      immediate: true,
      async handler(value) {
        this.songs = (await SongServices.index(value)).data;
      },
    },
  },
  data() {
    return { songs: [] };
  },
  // async mounted() {
  //   this.songs = (await SongServices.index()).data;
  // },
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
.add {
  color: white;
}
</style>
