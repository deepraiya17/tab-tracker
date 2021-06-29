<template>
  <v-layout row>
    <v-flex xs4>
      <panel class="ml-5" title="Song Metadata">
        <v-text-field v-model="song.title" label="Title" />
        <v-text-field v-model="song.artist" label="Artist" />
        <v-text-field v-model="song.genre" label="Genre" />
        <v-text-field v-model="song.album" label="Album" />
        <v-text-field v-model="song.albumImageUrl" label="Album Image Url" />
        <v-text-field v-model="song.youtubeId" label="Youtube ID" />
      </panel>
    </v-flex>

    <v-flex xs7 offset-xs1>
      <panel class="mr-5" title="Song Structure">
        <v-textarea v-model="song.tab" label="Tab" />
        <v-textarea v-model="song.lyrics" label="Lyrics" />
      </panel>
      <br />
      <div class="text-center mr-5">
        <div class="error white--text mb-5" v-html="error" />
        <v-btn color="cyan" dark @click="create">Create</v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from "./Panel.vue";
import SongsServices from "../services/SongsServices";
export default {
  components: { Panel },
  data() {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null,
      },
      error: null,
    };
  },
  methods: {
    async create() {
      const areAllFieldsFilledIn = Object.keys(this.song).every(
        (key) => !!this.song[key]
      );
      if (!areAllFieldsFilledIn) {
        this.error = "Please fill in all the fields";
        return;
      }
      try {
        await SongsServices.post(this.song);
        this.$router.push("/songs");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped></style>
