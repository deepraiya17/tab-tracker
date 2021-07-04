const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthentictionControllerPolicy');
const SongsController = require('./controllers/SongsController');
const BookmarksController = require('./controllers/BookmarksController');
const RecentSongsController = require('./controllers/RecentSongsController');
module.exports = (app) => {
  app.post(
    '/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  );
  app.post('/login', AuthenticationController.login);

  app.get('/songs', SongsController.index);
  app.get('/songs/:songId', SongsController.show);
  app.put('/songs/:songId', SongsController.puta);
  app.post('/songs', SongsController.post);

  app.get('/bookmarks/:songId/:userId', BookmarksController.index);
  app.get('/bookmarksOfUser/:userId', BookmarksController.bookmarksOfUser);
  app.post('/bookmarks/:songId/:userId', BookmarksController.posta);
  app.delete('/bookmarks/:bookmarkId', BookmarksController.delete);

  app.get(
    '/recentSongsOfUser/:userId',
    RecentSongsController.recentSongsOfUser
  );
  app.post('/recentSongs/:songId/:userId', RecentSongsController.post);
};
