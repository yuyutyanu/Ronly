'use strict';
module.exports = function(sequelize, DataTypes) {
  var Comments = sequelize.define('t_Comments', {
    comment: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Comments;
};