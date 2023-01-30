
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
        photo: "https://media.adeo.com/marketplace/LMES/84950609/3084894.jpeg?width=750&height=750&format=jpg&quality=80&fit=bounds",
        conditions: "Heavily used",
        info: "Mueble de 4 puertas para cocina",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Vitroceramica",
        article_id: "23",
        photo: "https://www.compramejor.es/wp-content/uploads/2020/04/mejores-vitroceramicas.jpg",
        conditions: "New",
        info: "Vitro a estrenar",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Bajo",
        article_id: "24",
        photo: "https://images.static-thomann.de/pics/bdb/342593/14622503_800.jpg",
        conditions: "Heavily used",
        info: "Un bajo para tus mejores riffs",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Cochesito radiocontrol",
        article_id: "25",
        photo: "https://m.media-amazon.com/images/I/71LkDT3mDvL._AC_SL1500_.jpg",
        conditions: "Used",
        info: "Vehiculo RC de rayo Mcqueen a gasolina, no puedes conducirlo en madrid",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "M4",
        article_id: "26",
        photo: "https://m.media-amazon.com/images/I/517LnkYS4VL._AC_SL1500_.jpg",
        conditions: "Heavily used",
        info: "Por si te apetece pegar unos tiritos al aire (herir o matar a otros usuarios va contra la politica de esta pagina)",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Botella de licor de Betula",
        article_id: "27",
        photo: "https://admin.bodeboca.com/sites/default/files/bot-havaldsen-aquavit.jpg",
        conditions: "New",
        info: "2 litracos de tu mejor licor",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Mando XBOX 360",
        article_id: "28",
        photo: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_98657799/fee_786_587_png",
        conditions: "Heavily used",
        info: "Mando de videoconsola Xbox360",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Consola",
        article_id: "29",
        photo: "https://i.ebayimg.com/images/g/wOkAAOSwo4NjWigb/s-l640.jpg",
        conditions: "Heavily used",
        info: "Family COM",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Comic serie AtomicsComics",
        article_id: "30",
        photo: "https://i.pinimg.com/736x/ae/84/fc/ae84fc8eb01a42bc083b580c544b3e8f--old-fashioned-candy-atomic-age.jpg",
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