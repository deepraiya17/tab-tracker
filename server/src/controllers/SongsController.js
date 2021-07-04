const { Song } = require('../models');

module.exports = {
  async index(req, res) {
    try {
      // let songs = null;
      // const search = req.query.search;
      // if (search) {
      //   songs = await Song.findAll({
      //     where: {
      //       $or: ['title', 'artist', 'genre', 'album'].map((key) => ({
      //         [key]: search,
      //       })),
      //     },
      //   });
      // } else {
      const songs = await Song.findAll({ limit: 10 });
      // }
      res.send(songs);
    } catch (err) {
      // console.log(err);
      res.status(500).send({
        error: 'An error has occured trying to fetch songs.',
      });
    }
  },
  async show(req, res) {
    try {
      // console.log(req.params.songId);
      const song = await Song.findOne({
        where: { id: req.params.songId },
      });
      res.send(song);
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch songs.',
      });
    }
  },
  async post(req, res) {
    try {
      const song = await Song.create(req.body);
      res.send(song);
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create the song.',
      });
    }
  },
  async puta(req, res) {
    try {
      console.log(req.params.songId);
      const song = await Song.findOne({
        where: { id: req.params.songId },
      });
      song.title = req.body.title;
      song.artist = req.body.artist;
      song.genre = req.body.genre;
      song.album = req.body.album;
      song.albumImageUrl = req.body.albumImageUrl;
      song.youtubeId = req.body.youtubeId;
      song.lyrics = req.body.lyrics;
      song.tab = req.body.tab;
      await song.save();
      res.send(song);
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
