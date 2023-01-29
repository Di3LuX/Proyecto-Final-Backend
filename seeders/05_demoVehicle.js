
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('vehicles', [
      {
        type: "Coche",
        article_id: "1",
        photo: "https://www.irmscher.com/media/catalog/category/62.jpg",
        brand: "Opel",
        model: "Astra",
        manufacturing: "1990-12-24",
        registration: "Yes",
        conditions: "Sadly destroyed",
        info: "Un opel astra to flama del 90, to tuning y con bombo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Moto",
        article_id: "2",
        photo: "https://www.irmscher.com/media/catalog/category/62.jpg",
        brand: "Yamaha",
        model: "3000",
        manufacturing: "1990-12-24",
        registration: "No",
        conditions: "Sadly destroyed",
        info: "Motet de segona ma",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Barco",
        article_id: "3",
        photo: "https://www.irmscher.com/media/catalog/category/62.jpg",
        brand: "Boate",
        model: "ZX",
        manufacturing: "1990-12-24",
        registration: "Yes",
        conditions: "NEW",
        info: "Tremendo barco pa pes-K",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Bici",
        article_id: "4",
        photo: "https://www.irmscher.com/media/catalog/category/62.jpg",
        brand: "Carrefour",
        model: "BMX",
        manufacturing: "1990-12-24",
        registration: "Yes",
        conditions: "Sadly destroyed",
        info: "Bici sin manillar",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Lancha",
        article_id: "5",
        photo: "https://www.irmscher.com/media/catalog/category/62.jpg",
        brand: "LanchonXL",
        model: "3000GT",
        manufacturing: "1990-12-24",
        registration: "Yes",
        conditions: "Sadly destroyed",
        info: "Tremenda lancha, madrid/vlc en 10 minutos",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Limousine",
        article_id: "6",
        photo: "https://www.irmscher.com/media/catalog/category/62.jpg",
        brand: "Limo",
        model: "Sine",
        manufacturing: "1990-12-24",
        registration: "Yes",
        conditions: "Sadly destroyed",
        info: "Para hacer fiestas y cosas varias",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Monter TRUCK",
        article_id: "7",
        photo: "https://www.irmscher.com/media/catalog/category/62.jpg",
        brand: "Monster",
        model: "SMASH",
        manufacturing: "1990-12-24",
        registration: "Yes",
        conditions: "NEW",
        info: "Para aplastar a los vecinos que no saben aparcar",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Coche",
        article_id: "8",
        photo: "https://www.irmscher.com/media/catalog/category/62.jpg",
        brand: "Nissan",
        model: "240sx",
        manufacturing: "1990-12-24",
        registration: "Yes",
        conditions: "Sadly destroyed",
        info: "Nissan que consume mas que gremlin",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Moto",
        article_id: "9",
        photo: "https://www.irmscher.com/media/catalog/category/62.jpg",
        brand: "Zaibatsu",
        model: "Ninja",
        manufacturing: "1990-12-24",
        registration: "Yes",
        conditions: "Sadly destroyed",
        info: "Moto 40000 caballos, cuidao",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Triciclo",
        article_id: "10",
        photo: "https://www.irmscher.com/media/catalog/category/62.jpg",
        brand: "Leroy Merlin",
        model: "Astra",
        manufacturing: "1990-12-24",
        registration: "Yes",
        conditions: "0 KM",
        info: "Por partes, necesita montaje",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('vehicles', null, {});

  }
};