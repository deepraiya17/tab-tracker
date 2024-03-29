const { User } = require('../models');
const config = require('../config/config');

function jwtSignUser(user) {
  const ONE_WEEKK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEKK,
  });
}

module.exports = {
  async register(req, res) {
    try {
      const user = await User.create(req.body);
      const userJson = user.toJSON();
      res.send({
        user: userJson,
      });
    } catch (err) {
      res.status(400).send({
        error: 'This email account is already in use.',
      });
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: { email: email },
      });

      if (!user) {
        return res.status(403).send({
          error: 'The login information was incorrect',
        });
      }

      const isPasswordValid = password === user.password;
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'The login information was incorrect',
        });
      }

      const userJson = user.toJSON();
      res.send({
        user: userJson,
      });
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to log in.',
      });
    }
  },
};
