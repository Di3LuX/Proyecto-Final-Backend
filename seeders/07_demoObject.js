
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('various', [
      {
        type: "Guitarra",
        photo: "https://www.culturasonora.es/wp-content/uploads/2019/09/Yamaha-C40-1.jpg",
        conditions: "Heavily used",
        info: "Una guitarrita to wapa pal flamenkito",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('various', null, {});

  }
};