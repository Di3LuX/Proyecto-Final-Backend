
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
        type: "Mueble de cocina",
        article_id: "22",
        photo: "https://www.culturasonora.es/wp-content/uploads/2019/09/Yamaha-C40-1.jpg",
        conditions: "Heavily used",
        info: "Mueble de 4 puertas para cocina",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Vitroceramica",
        article_id: "23",
        photo: "https://www.culturasonora.es/wp-content/uploads/2019/09/Yamaha-C40-1.jpg",
        conditions: "New",
        info: "Vitro a estrenar",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Bajo",
        article_id: "24",
        photo: "https://www.culturasonora.es/wp-content/uploads/2019/09/Yamaha-C40-1.jpg",
        conditions: "Heavily used",
        info: "Un bajo para tus mejores riffs",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Cochesito radiocontrol",
        article_id: "25",
        photo: "https://www.culturasonora.es/wp-content/uploads/2019/09/Yamaha-C40-1.jpg",
        conditions: "Used",
        info: "Vehiculo RC a gasolina, no puedes conducirlo en madrid",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "M4",
        article_id: "26",
        photo: "https://www.culturasonora.es/wp-content/uploads/2019/09/Yamaha-C40-1.jpg",
        conditions: "Heavily used",
        info: "Por si te apetece pegar unos tiritos al aire (herir o matar a otros usuarios va contra la politica de esta pagina)",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Botella de licor de Betula",
        article_id: "27",
        photo: "https://www.culturasonora.es/wp-content/uploads/2019/09/Yamaha-C40-1.jpg",
        conditions: "New",
        info: "2 litracos de tu mejor licor",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Mando XBOX 360",
        article_id: "28",
        photo: "https://www.culturasonora.es/wp-content/uploads/2019/09/Yamaha-C40-1.jpg",
        conditions: "Heavily used",
        info: "Mando de videoconsola Xbox360",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Consola",
        article_id: "29",
        photo: "https://www.culturasonora.es/wp-content/uploads/2019/09/Yamaha-C40-1.jpg",
        conditions: "Heavily used",
        info: "Family COM",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Comic serie AtomicsComics",
        article_id: "30",
        photo: "https://www.culturasonora.es/wp-content/uploads/2019/09/Yamaha-C40-1.jpg",
        conditions: "New",
        info: "Comic del videojuego Fallout4",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('various', null, {});

  }
};