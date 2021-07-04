import Api from "@/services/Api.js";

export default {
  post(recentSong) {
    return Api().post(`recentSongs/${recentSong.songId}/${recentSong.userId}`);
  },
  getAllOfUser(userId) {
    return Api().get(`recentSongsOfUser/${userId}`);
  },
};
