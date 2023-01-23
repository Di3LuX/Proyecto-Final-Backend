
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('articles', [
      {
        id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('articles');
  }
};
