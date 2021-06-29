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
        <v-btn color="cyan" dark @click="saveSong">Save</v-btn>
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
      song: {},
      error: null,
    };
  },
  async mounted() {
    const songId = this.$route.params.songId;
    this.song = (await SongsServices.show(songId)).data;
  },
  methods: {
    async saveSong() {
      const areAllFieldsFilledIn = Object.keys(this.song).every(
        (key) => !!this.song[key]
      );
      if (!areAllFieldsFilledIn) {
        this.error = "Please fill in all the fields";
        return;
      }
      try {
        await SongsServices.put(this.song);
        this.$router.push(`/songs/${this.song.id}`);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped></style>
