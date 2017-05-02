'use strict';
module.exports = function(sequelize, DataTypes) {
  var Tweets = sequelize.define('t_Tweets', {
    tweet: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate: function(models) {
         Tweets.hasMany(models.t_Comments)
         Tweets.belongsTo(models.m_Users)
      }
    }
  });
  return Tweets;
};