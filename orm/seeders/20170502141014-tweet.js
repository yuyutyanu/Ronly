'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      var faker = require('faker');
      var items = [];

      for(var i = 0 ; i<10;i++){
          items.push({
              tweet: faker.random.words(),
              user_id: faker.random.number(),
              createdAt: "2017-01-01 19:00:00",
              updatedAt: "2017-01-01 19:00:00"
          })
      }

      return queryInterface.bulkInsert('t_Tweets', items, {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('t_Tweets', null, {});
  }
};
