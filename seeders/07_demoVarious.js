
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('various', [
      {
        "type": "Guitarra",
        "photo": "",
        "conditions": "Heavily used",
        "info": "Una guitarrita to wapa pal flamenkito",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('various', null, {});

  }
};