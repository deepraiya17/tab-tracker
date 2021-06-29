<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <v-btn
          slot="action"
          medium
          absolute
          right
          dark
          depressed
          class="cyan accent-5 white--text"
        >
          <router-link to="/songs/create">
            <span class="add">+</span>
          </router-link>
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
              <router-link :to="songPage(song.id)">
                <v-btn dark class="cyan"> View</v-btn>
              </router-link>
            </v-flex>
            <v-flex xs6>
              <img :src="song.albumImageUrl" height="300px" class="mb-5" />
            </v-flex>
          </v-layout>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongServices from "../services/SongsServices.js";
import Panel from "./Panel.vue";
export default {
  components: { Panel },
  methods: {
    songPage(id) {
      return `/songs/${id}`;
    },
  },
  data() {
    return { songs: null };
  },
  async mounted() {
    this.songs = (await SongServices.index()).data;
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
.add {
  color: white;
}
</style>
