'use strict';
module.exports = function(sequelize, DataTypes) {
  var Tweets = sequelize.define('t_Tweets', {
    tweet: DataTypes.TEXT,
    user_id: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
         Tweets.belongsTo(models.m_Users,{foreignKey:'user_id',targetKey: 'id'})
         Tweets.hasMany(models.t_Comments)
      }
    }
  });
  return Tweets;
};