
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('vehicles', [
      {
        "type": "Coche",
        "photo": "",
        "brand": "Opel",
        "model": "Astra",
        "manufacturing": "1990-12-24",
        "registration": "Yes",
        "conditions": "Sadly destroyed",
        "info": "Un opel astra to flama del 90, to tuning y con bombo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('vehicles', null, {});

  }
};