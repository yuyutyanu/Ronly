'use strict';
module.exports = function(sequelize, DataTypes) {
  var Tweets = sequelize.define('t_Tweets', {
    tweet: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    comment_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Tweets;
};