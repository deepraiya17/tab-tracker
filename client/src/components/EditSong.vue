<template>
  <v-layout row>
    <v-flex xs4>
      <panel class="ml-5" title="Song Metadata">
        <v-text-field v-model="song.title" class="required"
          ><template #label
            >Title<span class="red--text"><strong>* </strong></span></template
          ></v-text-field
        >
        <v-text-field v-model="song.artist"
          ><template #label
            >Artist<span class="red--text"><strong>* </strong></span></template
          ></v-text-field
        >
        <v-text-field v-model="song.genre"
          ><template #label
            >Genre<span class="red--text"><strong>* </strong></span></template
          ></v-text-field
        >
        <v-text-field v-model="song.album"
          ><template #label
            >Album<span class="red--text"><strong>* </strong></span></template
          ></v-text-field
        >
        <v-text-field v-model="song.albumImageUrl"
          ><template #label
            >Album Image Url<span class="red--text"
              ><strong>* </strong></span
            ></template
          ></v-text-field
        >
        <v-text-field v-model="song.youtubeId"
          ><template #label
            >Youtube Id<span class="red--text"
              ><strong>* </strong></span
            ></template
          ></v-text-field
        >
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
import SongsServices from "../services/SongsServices";
export default {
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
      const areAllRequiredFieldsFilledIn =
        !!this.song.title &&
        !!this.song.artist &&
        !!this.song.album &&
        !!this.song.albumImageUrl &&
        !!this.song.youtubeId;
      if (!areAllRequiredFieldsFilledIn) {
        this.error = "Please fill in all the required fields(marked with *)";
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
