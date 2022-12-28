
'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('vehicles', {
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
      brand: {
        allowNull: false,
        type: Sequelize.STRING
      },
      model: {
        allowNull: false,
        type: Sequelize.STRING
      },
      manufacturing: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      registration: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('vehicles');
  }
};