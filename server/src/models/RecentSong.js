module.exports = (sequelize, DataTypes) => {
  const RecentSong = sequelize.define('RecentSong', {});

  RecentSong.associate = function (models) {
    RecentSong.belongsTo(models.User);
    RecentSong.belongsTo(models.Song);
  };
  return RecentSong;
};
