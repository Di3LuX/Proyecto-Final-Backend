
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('estates', [
      {
        type: "Apartamento",
        article_id: "11",

        photo: "https://i.pinimg.com/originals/d7/0f/69/d70f69f1806a912e81861eeb4cbe2a9f.jpg",
        location: "Gandia/Playa",
        surface: 200,
        conditions: "Brand new",
        info: "Apartamentazo a estrenar, enorme, al-laico de la playa",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Apartamento",
        article_id: "12",

        photo: "https://i.pinimg.com/originals/d7/0f/69/d70f69f1806a912e81861eeb4cbe2a9f.jpg",
        location: "Gandia/Playa",
        surface: 200,
        conditions: "Brand new",
        info: "Apartamentazo a estrenar, enorme, al-laico de la playa",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Apartamento",
        article_id: "13",

        photo: "https://i.pinimg.com/originals/d7/0f/69/d70f69f1806a912e81861eeb4cbe2a9f.jpg",
        location: "Gandia/Playa",
        surface: 200,
        conditions: "Brand new",
        info: "Apartamentazo a estrenar, enorme, al-laico de la playa",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Apartamento",
        article_id: "14",

        photo: "https://i.pinimg.com/originals/d7/0f/69/d70f69f1806a912e81861eeb4cbe2a9f.jpg",
        location: "Gandia/Playa",
        surface: 200,
        conditions: "Brand new",
        info: "Apartamentazo a estrenar, enorme, al-laico de la playa",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Apartamento",
        article_id: "15",

        photo: "https://i.pinimg.com/originals/d7/0f/69/d70f69f1806a912e81861eeb4cbe2a9f.jpg",
        location: "Gandia/Playa",
        surface: 200,
        conditions: "Brand new",
        info: "Apartamentazo a estrenar, enorme, al-laico de la playa",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Apartamento",
        article_id: "16",

        photo: "https://i.pinimg.com/originals/d7/0f/69/d70f69f1806a912e81861eeb4cbe2a9f.jpg",
        location: "Gandia/Playa",
        surface: 200,
        conditions: "Brand new",
        info: "Apartamentazo a estrenar, enorme, al-laico de la playa",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Apartamento",
        article_id: "17",

        photo: "https://i.pinimg.com/originals/d7/0f/69/d70f69f1806a912e81861eeb4cbe2a9f.jpg",
        location: "Gandia/Playa",
        surface: 200,
        conditions: "Brand new",
        info: "Apartamentazo a estrenar, enorme, al-laico de la playa",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Apartamento",
        article_id: "18",
        photo: "https://i.pinimg.com/originals/d7/0f/69/d70f69f1806a912e81861eeb4cbe2a9f.jpg",
        location: "Gandia/Playa",
        surface: 200,
        conditions: "Brand new",
        info: "Apartamentazo a estrenar, enorme, al-laico de la playa",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Apartamento",
        article_id: "19",
        photo: "https://i.pinimg.com/originals/d7/0f/69/d70f69f1806a912e81861eeb4cbe2a9f.jpg",
        location: "Gandia/Playa",
        surface: 200,
        conditions: "Brand new",
        info: "Apartamentazo a estrenar, enorme, al-laico de la playa",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Apartamento",
        article_id: "20",
        photo: "https://i.pinimg.com/originals/d7/0f/69/d70f69f1806a912e81861eeb4cbe2a9f.jpg",
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