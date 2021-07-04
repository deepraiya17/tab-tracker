import Api from "@/services/Api.js";

export default {
  index(bookmark) {
    return Api().get(`bookmarks/${bookmark.songId}/${bookmark.userId}`);
  },
  post(bookmark) {
    return Api().post(`bookmarks/${bookmark.songId}/${bookmark.userId}`);
  },
  delete(bookmarkId) {
    return Api().delete(`bookmarks/${bookmarkId}`);
  },
  getAllOfUser(userId) {
    return Api().get(`bookmarksOfUser/${userId}`);
  },
};
