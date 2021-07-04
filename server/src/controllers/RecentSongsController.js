const { RecentSong, Song, User } = require('../models');
const _ = require('lodash');
module.exports = {
  async recentSongsOfUser(req, res) {
    try {
      const userId = req.params.userId;
      const recentSongs = await RecentSong.findAll({
        where: { UserId: userId },
        include: [{ model: Song }],
      });
      const responseData = [];
      let i = 0;
      while (i < recentSongs.length) {
        const obj = {
          recentSongId: recentSongs[i].id,
          // createdAt: recentSongs[i].createdAt,
          title: recentSongs[i].Song.title,
          artist: recentSongs[i].Song.artist,
        };
        responseData.push(obj);
        // console.log(obj);
        i++;
      }
      // .map((recentSong) => recentSong.toJSON());
      // .map(
      //   (recentSong) =>
      //     new Object({ recentSongId: recentSong.id, title: recentSong.Song.title })
      // );
      res.send(responseData);
    } catch (err) {
      res
        .status(500)
        .send({ error: 'an error has occured trying to fetch the bookmar.' });
    }
  },
  async post(req, res) {
    try {
      const songId = req.params.songId;
      const userId = req.params.userId;
      const recentSong = await RecentSong.findOne({
        where: { SongId: songId, UserId: userId },
      });
      if (recentSong) {
        await recentSong.destroy();
      }
      const newRecentSong = await RecentSong.create({
        SongId: songId,
        UserId: userId,
      });
      res.send(newRecentSong);
    } catch (err) {
      // console.log('err', err);
      res.status(500).send('Deep');
    }
  },
};
