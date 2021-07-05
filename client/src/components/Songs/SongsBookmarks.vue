<template>
  <panel title="Bookmarks">
    <v-text-field v-model="search" label="Search by title/artist">
    </v-text-field>
    <v-data-table
      :headers="headers"
      :items="bookmarks"
      :sort-by="['bookmarkId']"
      :sort-desc="[true]"
      :search="search"
    >
      <template slot="items" scope="props">
        <td @click="clicked">{{ props.item.title }}</td>
        <td>{{ props.item.artist }}</td>
      </template>
    </v-data-table>
  </panel>
</template>
<script>
import { mapState } from "vuex";
import BookmarksService from "../../services/BookmarksService";
export default {
  data() {
    return {
      search: "",
      headers: [
        { text: "Title", value: "title" },
        { text: "Artist", value: "artist" },
      ],
      bookmarks: [],
    };
  },
  computed: {
    ...mapState(["isUserLoggedIn", "user"]),
  },
  async mounted() {
    if (this.isUserLoggedIn) {
      this.bookmarks = (await BookmarksService.getAllOfUser(this.user.id)).data;
    }
  },
  methods: {
    clicked() {
      console.log("Deep");
    },
  },
};
</script>
<style scoped></style>
