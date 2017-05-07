'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('t_Comments', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING
            },
            comment: {
                type: Sequelize.TEXT
            },
            tweet_id: {
                allowNull: false,
                type:Sequelize.STRING
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
        return queryInterface.dropTable('t_Comments');
    }
};