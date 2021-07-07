<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <song-metadata :song="song" />
      </v-flex>
      <v-flex xs6>
        <song-video-youtube :youtubeId="song.youtubeId" />
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs6> <song-lyric :lyrics="song.lyrics"> </song-lyric> </v-flex>
      <v-flex xs6> <song-tabs :tab="song.tab"> </song-tabs></v-flex>
    </v-layout>
  </div>
</template>

<script>
import SongServices from "../../services/SongsServices";
import SongMetadata from "./SongMetadata.vue";
import SongVideoYoutube from "./SongVideoYoutube.vue";
import SongLyric from "./SongLyric.vue";
import SongTabs from "./SongTabs.vue";
import RecentSongsService from "../../services/RecentSongsService";
export default {
  data() {
    return { song: {} };
  },
  async mounted() {
    try {
      // console.log(this.);
      const songId = this.$route.params.songId;
      this.song = (await SongServices.show(songId)).data;
      if (this.$store.state.isUserLoggedIn) {
        const userId = this.$store.state.user.id;
        await RecentSongsService.post({
          songId: songId,
          userId: userId,
        });
      }
    } catch (err) {
      console.log(err);
    }
  },
  components: { SongMetadata, SongVideoYoutube, SongLyric, SongTabs },
};
</script>

<style scoped>
.tab {
  height: 300px;
  width: 100%;
  overflow: auto;
  border: none;
  border-style: none;
  border-color: transparent;
}
</style>
