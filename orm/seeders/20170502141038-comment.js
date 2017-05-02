'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        var faker = require('faker');
        var items = [];

        for(var i = 0 ; i<10;i++){
            items.push({
                comment: faker.random.words(),
                tweet_id: i+1,
                createdAt: "2017-01-01 19:00:00",
                updatedAt: "2017-01-01 19:00:00"
            })
        }

        return queryInterface.bulkInsert('t_Comments', items, {});
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('t_Comments', null, {});
    }
};
