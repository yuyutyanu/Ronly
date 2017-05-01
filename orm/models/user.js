'use strict';
module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('m_Users', {
    profile_message: DataTypes.TEXT,
    samune: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Users;
};