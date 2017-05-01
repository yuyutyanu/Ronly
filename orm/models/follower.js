'use strict';
module.exports = function(sequelize, DataTypes) {
  var Followers = sequelize.define('t_Followers', {
    follower_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Followers;
};
