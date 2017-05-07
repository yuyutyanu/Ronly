'use strict';

module.exports = function (sequelize, DataTypes) {
    var Followers = sequelize.define('t_Follows', {
        follow_id: {type: DataTypes.STRING, primaryKey: true},
        user_id: {type:DataTypes.STRING,primaryKey:true}
    }, {
        classMethods: {
            associate: function (models) {
                Followers.belongsTo(models.m_Users, {foreignKey: 'follow_id'})
                Followers.belongsTo(models.m_Users, {foreignKey: 'user_id'})
            }
        }
    });
    return Followers;
};
