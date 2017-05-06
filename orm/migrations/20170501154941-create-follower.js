'use strict';


module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('t_Followers', {
            follower_id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            user_id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('t_Followers');
    }
};