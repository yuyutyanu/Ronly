'use strict';
module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define('m_Users', {
            name:DataTypes.STRING,
            profile_message: DataTypes.TEXT,
            samune: DataTypes.STRING,
            password: DataTypes.STRING,
        },
        {
            classMethods: {
                associate: function (models) {
                     Users.hasMany(models.t_Tweets)
                     Users.hasMany(models.t_Followers, {as: 'Follow', foreignKey: 'user_id'})
                     Users.hasMany(models.t_Followers, {as: 'Follower', foreignKey: 'follower_id'})
                }
            }
        });

    return Users;
};
