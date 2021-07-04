<template>
  <panel title="Song Metadata">
    <v-layout>
      <v-flex xs6>
        <br />
        <br />
        <div class="song-title">{{ song.title }}</div>
        <div class="song-artist">{{ song.artist }}</div>
        <div class="song-genre">{{ song.genre }}</div>
        <v-btn dark :to="songPage(song.id)" class="cyan"> Edit</v-btn>
        <v-btn
          dark
          class="cyan ml-5"
          v-if="isUserLoggedIn && !bookmark"
          @click="setAsBookmark"
        >
          Bookmark
        </v-btn>
        <v-btn
          dark
          class="cyan ml-5"
          v-if="isUserLoggedIn && bookmark"
          @click="setAsUnbookmark"
        >
          Unbookmark
        </v-btn>
        <br />
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
  </panel>
</template>

<script>
import { mapState } from "vuex";
import BookmarksService from "../../services/BookmarksService";
export default {
  props: ["song"],
  computed: {
    ...mapState(["isUserLoggedIn"]),
  },
  data() {
    return { bookmark: null };
  },
  async mounted() {
    if (!this.isUserLoggedIn) return;
    try {
      this.bookmark = (
        await BookmarksService.index({
          songId: this.$route.params.songId,
          userId: this.$store.state.user.id,
        })
      ).data;
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    songPage(id) {
      return `/songs/${id}/edit`;
    },
    async setAsBookmark() {
      try {
        this.bookmark = (
          await BookmarksService.post({
            songId: this.$route.params.songId,
            userId: this.$store.state.user.id,
          })
        ).data;
      } catch (err) {
        console.log(err);
      }
    },
    async setAsUnbookmark() {
      try {
        await BookmarksService.delete(this.bookmark.id);
        this.bookmark = null;
      } catch (err) {
        console.log(err);
      }
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
