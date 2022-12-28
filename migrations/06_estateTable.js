
'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('estates', {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      id_articles: {
        type: Sequelize.INTEGER,
        references: {
          model: 'articles',
          key: 'id_articles'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.STRING
      },
      location: {
        allowNull: false,
        type: Sequelize.STRING
      },
      surface: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      conditions: {
        allowNull: false,
        type: Sequelize.STRING
      },
      info: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('estates');
  }
};