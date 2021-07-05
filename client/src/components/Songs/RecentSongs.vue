<template>
  <panel title="Recent Songs">
    <v-text-field
      v-model="search"
      label="Search by title/artist"
    ></v-text-field>
    <v-data-table
      :headers="headers"
      :items="recentSongs"
      :sort-by="['recentSongId']"
      :sort-desc="[true]"
      :search="search"
    >
      <template slot="items" scope="props">
        <td>{{ props.item.title }}</td>
        <td>{{ props.item.artist }}</td>
      </template>
    </v-data-table>
  </panel>
</template>
<script>
import { mapState } from "vuex";
import RecentSongsService from "../../services/RecentSongsService";
export default {
  data() {
    return {
      search: "",
      headers: [
        { text: "Title", value: "title" },
        { text: "Artist", value: "artist" },
      ],
      recentSongs: [],
    };
  },
  computed: {
    ...mapState(["isUserLoggedIn", "user"]),
  },
  async mounted() {
    if (this.isUserLoggedIn) {
      this.recentSongs = (
        await RecentSongsService.getAllOfUser(this.user.id)
      ).data;
    }
  },
};
</script>
<style scoped></style>
