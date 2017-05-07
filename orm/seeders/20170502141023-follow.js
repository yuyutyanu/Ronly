'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        var faker = require('faker');
        var items = [];

        for(var i = 0 ; i<10;i++){
            items.push({
                user_id: i+1,
                follow_id: i+1,
                createdAt: "2017-01-01 19:00:00",
                updatedAt: "2017-01-01 19:00:00"
            })
        }

        return queryInterface.bulkInsert('t_Follows', items, {});
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('t_Follows', null, {});
    }
};
