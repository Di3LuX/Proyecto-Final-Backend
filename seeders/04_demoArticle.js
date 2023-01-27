
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('articles', [
      {
        article_id: 1,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        article_id: 2,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        article_id: 3,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        article_id: 4,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        article_id: 5,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        article_id: 6,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        article_id: 7,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        article_id: 8,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        article_id: 9,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        article_id: 10,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        article_id: 11,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        article_id: 12,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        article_id: 13,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        article_id: 14,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        article_id: 15,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        article_id: 16,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        article_id: 17,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        article_id: 18,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        article_id: 19,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        article_id: 20,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        article_id: 21,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        article_id: 22,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        article_id: 23,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        article_id: 24,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        article_id: 25,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        article_id: 26,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        article_id: 27,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        article_id: 28,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        article_id: 29,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        article_id: 30,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('articles');
  }
};
