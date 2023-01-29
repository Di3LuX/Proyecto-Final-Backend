
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
        type: "Casa",
        article_id: "12",
        photo: "https://i.pinimg.com/originals/d7/0f/69/d70f69f1806a912e81861eeb4cbe2a9f.jpg",
        location: "Gandia/Playa",
        surface: 180,
        conditions: "Brand new",
        info: "Casita con piscina",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Chalet",
        article_id: "13",
        photo: "https://i.pinimg.com/originals/d7/0f/69/d70f69f1806a912e81861eeb4cbe2a9f.jpg",
        location: "Aldaia",
        surface: 500,
        conditions: "Brand new",
        info: "Chaletaco a las afueras de VLC",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Piso",
        article_id: "14",
        photo: "https://i.pinimg.com/originals/d7/0f/69/d70f69f1806a912e81861eeb4cbe2a9f.jpg",
        location: "Gandia",
        surface: 80,
        conditions: "Brand new",
        info: "Pisito centrico, mercadona a 5 minutos",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Cochera",
        article_id: "15",
        photo: "https://i.pinimg.com/originals/d7/0f/69/d70f69f1806a912e81861eeb4cbe2a9f.jpg",
        location: "Gandia/Playa",
        surface: 50,
        conditions: "Brand new",
        info: "Cochera pequeñita, coche y moto/bici",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Trastero",
        article_id: "16",
        photo: "https://i.pinimg.com/originals/d7/0f/69/d70f69f1806a912e81861eeb4cbe2a9f.jpg",
        location: "Gandia/Playa",
        surface: 50,
        conditions: "Brand new",
        info: "Se vende trastero, pa meter trastos",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Duplex",
        article_id: "17",
        photo: "https://i.pinimg.com/originals/d7/0f/69/d70f69f1806a912e81861eeb4cbe2a9f.jpg",
        location: "Playa",
        surface: 300,
        conditions: "Brand new",
        info: "Ojito con los vecinos, dupletaco de 2 pisos",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Chalet",
        article_id: "18",
        photo: "https://i.pinimg.com/originals/d7/0f/69/d70f69f1806a912e81861eeb4cbe2a9f.jpg",
        location: "Cullera",
        surface: 500,
        conditions: "Brand new",
        info: "Apartamentazo a estrenar, enorme, al-laico de la playa",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Casa",
        article_id: "19",
        photo: "https://i.pinimg.com/originals/d7/0f/69/d70f69f1806a912e81861eeb4cbe2a9f.jpg",
        location: "Gandia",
        surface: 120,
        conditions: "Brand new",
        info: "Casita muy mona al lado de pipiCan",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Hotel",
        article_id: "20",
        photo: "https://i.pinimg.com/originals/d7/0f/69/d70f69f1806a912e81861eeb4cbe2a9f.jpg",
        location: "Miami",
        surface: 2000,
        conditions: "Brand new",
        info: "Se vende hotel al completo, apañate",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('estates', null, {});

  }
};