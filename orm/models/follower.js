'use strict';

module.exports = function (sequelize, DataTypes) {
    var Followers = sequelize.define('t_Followers', {
        follower_id: {type: DataTypes.INTEGER, primaryKey: true},
        user_id: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: function (models) {
                Followers.belongsTo(models.m_Users, {foreignKey: 'follower_id'})
                Followers.belongsTo(models.m_Users, {foreignKey: 'user_id'})
            }
        }
    });
    return Followers;
};
