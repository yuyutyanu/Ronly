'use strict';
module.exports = function (sequelize, DataTypes) {
    var Comments = sequelize.define('t_Comments', {
        comment: DataTypes.TEXT,
        tweet_id: DataTypes.INTEGER
    },{
        classMethods: {
            associate: function (models) {
                Comments.belongsTo(models.t_Tweets)
            }
        }
    });
    return Comments;
};