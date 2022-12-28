
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        "username": "Di3LuX",
        "email": "diego_w@hotmail.com",
        "password": "1111a",
        role_id: 1,
        "name": "Diego",
        "location": "Valencia",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('users', null, {});

  }
};