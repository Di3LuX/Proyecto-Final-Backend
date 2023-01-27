
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('various', [
      {
        type: "Guitarra",
        article_id: "21",

        photo: "https://www.culturasonora.es/wp-content/uploads/2019/09/Yamaha-C40-1.jpg",
        conditions: "Heavily used",
        info: "Una guitarrita to wapa pal flamenkito",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Guitarra",
        article_id: "22",

        photo: "https://www.culturasonora.es/wp-content/uploads/2019/09/Yamaha-C40-1.jpg",
        conditions: "Heavily used",
        info: "Una guitarrita to wapa pal flamenkito",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Guitarra",
        article_id: "23",

        photo: "https://www.culturasonora.es/wp-content/uploads/2019/09/Yamaha-C40-1.jpg",
        conditions: "Heavily used",
        info: "Una guitarrita to wapa pal flamenkito",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Guitarra",
        article_id: "24",

        photo: "https://www.culturasonora.es/wp-content/uploads/2019/09/Yamaha-C40-1.jpg",
        conditions: "Heavily used",
        info: "Una guitarrita to wapa pal flamenkito",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Guitarra",
        article_id: "25",

        photo: "https://www.culturasonora.es/wp-content/uploads/2019/09/Yamaha-C40-1.jpg",
        conditions: "Heavily used",
        info: "Una guitarrita to wapa pal flamenkito",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Guitarra",
        article_id: "26",

        photo: "https://www.culturasonora.es/wp-content/uploads/2019/09/Yamaha-C40-1.jpg",
        conditions: "Heavily used",
        info: "Una guitarrita to wapa pal flamenkito",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Guitarra",
        article_id: "27",

        photo: "https://www.culturasonora.es/wp-content/uploads/2019/09/Yamaha-C40-1.jpg",
        conditions: "Heavily used",
        info: "Una guitarrita to wapa pal flamenkito",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Guitarra",
        article_id: "28",
        photo: "https://www.culturasonora.es/wp-content/uploads/2019/09/Yamaha-C40-1.jpg",
        conditions: "Heavily used",
        info: "Una guitarrita to wapa pal flamenkito",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Guitarra",
        article_id: "29",
        photo: "https://www.culturasonora.es/wp-content/uploads/2019/09/Yamaha-C40-1.jpg",
        conditions: "Heavily used",
        info: "Una guitarrita to wapa pal flamenkito",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Guitarra",
        article_id: "30",
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