
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
        photo: "https://motosnuevas.formulamoto.es/galeria/11788/Yamaha_MT-125_2021.jpg",
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
        photo: "https://images.unsplash.com/photo-1508094902356-db488e227d75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFyY28lMjBwaXJhdGF8ZW58MHx8MHx8&w=1000&q=80",
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
        photo: "https://cdn.shopify.com/s/files/1/0571/9919/8395/products/003_afdc570f-b91b-4c88-a0ac-7c07747353fe_696x464.jpg?v=1649251482",
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
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Riva_junior_Paris.jpg/1200px-Riva_junior_Paris.jpg",
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
        photo: "https://jjdluxecarsalicante.com/wp-content/uploads/2019/06/alquiler-de-limusina-rosa-en-alicante-chrysler-pink-bodas-eventos-rodajes-jj-dluxe-cars-5.jpg",
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
        photo: "https://www.autopista.es/uploads/s1/56/30/46/4/article-monster-jam-origen-52047-553e04fa92a94.jpeg",
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
        photo: "https://cloud.leparking.fr/2022/08/15/01/43/nissan-240sx-240sx-rb25det-cars-trucks-calgary-kijiji_8579407616.jpg",
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
        photo: "https://www.soymotero.net/sites/default/files/2012-09/050912_kawasaki_ninja_300%20%2810%29.jpg",
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
        photo: "https://m.media-amazon.com/images/I/618oxmuxzOS._AC_SL1500_.jpg",
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