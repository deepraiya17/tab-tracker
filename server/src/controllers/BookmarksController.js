const { Bookmark, Song } = require('../models');
const _ = require('lodash');
module.exports = {
  async index(req, res) {
    try {
      const songId = req.params.songId;
      const userId = req.params.userId;
      const bookmark = await Bookmark.findOne({
        where: { SongId: songId, UserId: userId },
      });
      res.send(bookmark);
    } catch (err) {
      res
        .status(500)
        .send({ error: 'an error has occured trying to fetch the bookmar.' });
    }
  },
  async bookmarksOfUser(req, res) {
    try {
      const userId = req.params.userId;
      const bookmarks = await Bookmark.findAll({
        where: { UserId: userId },
        include: [{ model: Song }],
      });
      const responseData = [];
      let i = 0;
      while (i < bookmarks.length) {
        const obj = {
          bookmarkId: bookmarks[i].id,
          // createdAt: bookmarks[i].createdAt,
          title: bookmarks[i].Song.title,
          artist: bookmarks[i].Song.artist,
        };
        responseData.push(obj);
        console.log(obj);
        i++;
      }
      // .map((bookmark) => bookmark.toJSON());
      // .map(
      //   (bookmark) =>
      //     new Object({ bookmarkId: bookmark.id, title: bookmark.Song.title })
      // );
      res.send(responseData);
    } catch (err) {
      res
        .status(500)
        .send({ error: 'an error has occured trying to fetch the bookmar.' });
    }
  },
  async posta(req, res) {
    try {
      const songId = req.params.songId;
      const userId = req.params.userId;
      const bookmark = await Bookmark.findOne({
        where: { SongId: songId, UserId: userId },
      });
      if (bookmark) {
        return res
          .status(400)
          .send({ error: 'You already have this set as a bookmark' });
      }
      const newBookmark = await Bookmark.create({
        SongId: songId,
        UserId: userId,
      });
      res.send(newBookmark);
    } catch (err) {
      // console.log('err', err);
      res.status(500).send('Deep');
    }
  },
  async delete(req, res) {
    try {
      const bookmarkId = req.params.bookmarkId;
      console.log('Deep', bookmarkId);
      const bookmark = await Bookmark.findOne({
        where: { id: bookmarkId },
      });
      await bookmark.destroy();
      res.send(bookmark);
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
