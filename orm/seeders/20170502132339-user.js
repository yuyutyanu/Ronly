'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        /*
         Add altering commands here.
         Return a promise to correctly handle asynchronicity.

         Example:
         */
        var faker = require('faker');
        var items = [];

        for(var i = 0 ; i<10;i++){
            items.push({
                profile_message: faker.random.words(),
                samune: faker.image.image(),
                password: faker.random.word(),
                createdAt: "2017-01-01 19:00:00",
                updatedAt: "2017-01-01 19:00:00"
            })
        }

       return queryInterface.bulkInsert('m_Users', items, {});


    },
    down: function (queryInterface, Sequelize) {
        /*
         Add reverting commands here.
         Return a promise to correctly handle asynchronicity.

         Example:
         */
        return queryInterface.bulkDelete('m_Users', null, {});
    }
};
