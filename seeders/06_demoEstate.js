
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('estates', [
      {
        type: "Apartamento",
        photo: "",
        location: "Gandia/Playa",
        surface: 200,
        conditions: "Brand new",
        info: "Apartamentazo a estrenar, enorme, al-laico de la playa",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('estates', null, {});

  }
};