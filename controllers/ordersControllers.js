
const { Op } = require("sequelize");
const models = require("../models/index");
const ordersController = {};
const jsonwebtoken = require("jsonwebtoken");
const { sequelize } = require("../models/index");
const { orders } = require("../models/index");


ordersController.newOrder = async (req, res) => {
  try {
    let data = req.body;

    let resp = await models.order.create({
      article_id: data.article_id,
      user_id: data.user_id,
    });

    res.send(resp);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

ordersController.myOrder = async (req, res) => {
  try {
    let id = req.params.id;
    let resp = await models.order.findAll({
      where: { uder_id: id },
      include: {
        model: models.order,
      },
    });
    
    res.send(resp);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

ordersController.returnOrder = async (req, res) => {
  let id = req.params.id;
  let resp = await models.order.destroy({
    where: { user_id: id },
  });

  if (resp == 1) {
    res.send("Se ha eliminado el spot");
  } else {
    res.send("No se ha podido eliminar el spot");
  }
};
// Creamos una nueva orden de compra. Hay que pasarle el body, que será el article
/*
ordersController.newOrder = async (req, res) => {
  const { authorization } = req.headers;
  const [jwt] = authorization.split(" ");
  const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET);
  const data = req.body;
  const actualDate = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
  try {
    await models.order.create({
      date_of_order: actualDate,
      user_id: payload.user_id,
      article_id: data.article_id,
    }),
      res.send(`Your purchase was successful`);
  } catch (error) {
    res.send(error);
  }
}
*/
/*
// Mostramos los pedidos hechos por el usuario.

ordersController.myOrder = async (req, res) => {
  const { authorization } = req.headers;
  const [strategy, jwt] = authorization.split(" ");
  const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET);
  try {
    let id = payload.user_id;
    let res = await models.order.findAll({
      where: {
        user_id: id,
      },
    });
    if (res === []) {
    }
    res.send(res);
  } catch (error) {
    res.send(error)
  }
}

// Modificamos una orden. Hay que pasarle el body, que sera el "nuevo articulo" y el "articulo viejo"

ordersController.modifyOrder = async (req, res) => {
  const { authorization } = req.headers;
  const [strategy, jwt] = authorization.split(" ");
  const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET);
  let data = req.body;
  try {
    let res = await models.order.update({
      article_id: data.newArticle,
    }, { where: { user_id: payload.user_id, article_id: data.oldArticle } })
    res.send(`Your previous order ${data.oldArticle}, has been updated to ${data.newArticle}`)
  } catch (error) {
    res.send(error)
  }
}


/*
ordersController.myVehicleOrder = async (req, res) => {
  const { authorization } = req.headers;
  const [strategy, jwt] = authorization.split(" ");
  const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET);
  try {
    let id = payload.user_id;
    let res = await sequelize.query(
      `SELECT orders.date_of_order, orders.date_of_return, orders.id_order, series.title, series.summary, series.poster
        FROM articles
        Join orders ON orders.articles_id = articles.id_articles
        Join series on series.articles_id = articles.id_articles
        WHERE orders.user_id = ${id} AND orders.returned = 0`, { type: sequelize.QueryTypes.SELECT }
    )
    res.send(res);
  } catch (error) {
    res.send(error)
  }
}

ordersController.myEstateOrder = async (req, res) => {
  const { authorization } = req.headers;
  const [strategy, jwt] = authorization.split(" ");
  const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET);
  try {
    let id = payload.user_id;
    let res = await sequelize.query(
      `SELECT orders.date_of_order, orders.date_of_return, orders.id_order, movies.title, movies.summary, movies.poster
        FROM articles
        Join orders ON orders.articles_id = articles.id_articles
        Join movies on movies.articles_id = articles.id_articles
        WHERE orders.user_id = ${id} AND orders.returned = 0`, { type: sequelize.QueryTypes.SELECT });
    res.send(res);
  } catch (error) {
    res.send(error)
  }
}

ordersController.myVariousOrder = async (req, res) => {
  const { authorization } = req.headers;
  const [strategy, jwt] = authorization.split(" ");
  const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET);
  try {
    let id = payload.user_id;
    let res = await sequelize.query(
      `SELECT orders.date_of_order, orders.date_of_return, orders.id_order, movies.title, movies.summary, movies.poster
        FROM articles
        Join orders ON orders.articles_id = articles.id_articles
        Join movies on movies.articles_id = articles.id_articles
        WHERE orders.user_id = ${id} AND orders.returned = 0`, { type: sequelize.QueryTypes.SELECT });
    res.send(res);
  } catch (error) {
    res.send(error)
  }
}

// Mostramos todos los pedidos (solo el admin lo puede hacer)
ordersController.allOrders = async (req, res) => {
  try {
    let res = await models.order.findAll();
    res.send(res);
  } catch (error) {
    res.send(error)
  }
}
*/
module.exports = ordersController;
