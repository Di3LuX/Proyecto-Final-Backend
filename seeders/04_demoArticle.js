
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('articles', [
      {
        id_articles: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_articles: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_articles: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_articles: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_articles: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('articles');
  }
};
