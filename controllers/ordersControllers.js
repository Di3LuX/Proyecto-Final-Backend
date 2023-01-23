
const { Op } = require("sequelize");
const models = require("../models/index");
const ordersController = {};
const jsonwebtoken = require("jsonwebtoken");
const { sequelize } = require("../models/index");
const { orders } = require("../models/index");


// Creamos una nueva orden de compra. Hay que pasarle el body, que será el article

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
      article_id: data.article,
    }),
      res.send(`Your purchase was successful`);
  } catch (error) {
    res.send(error);
  }
}

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

ordersController.returnOrder = async (req, res) => {
  const { authorization } = req.headers;
  const [strategy, jwt] = authorization.split(" ");
  const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET);
  let data = req.body;
  console.log(data);
  try {
    let res = await models.order.update({
      returned: true,
    }, { where: { userIdUser: payload.id_user, id_order: data.id_order } })
    res.send(`The content has been returned`)
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
    let id = payload.id_user;
    let res = await sequelize.query(
      `SELECT orders.date_of_order, orders.date_of_return, orders.id_order, series.title, series.summary, series.poster
        FROM articles
        Join orders ON orders.ArticleIdArticles = articles.id_articles
        Join series on series.articleIdArticles = articles.id_articles
        WHERE orders.userIdUser = ${id} AND orders.returned = 0`, { type: sequelize.QueryTypes.SELECT }
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
    let id = payload.id_user;
    let res = await sequelize.query(
      `SELECT orders.date_of_order, orders.date_of_return, orders.id_order, movies.title, movies.summary, movies.poster
        FROM articles
        Join orders ON orders.ArticleIdArticles = articles.id_articles
        Join movies on movies.articleIdArticles = articles.id_articles
        WHERE orders.userIdUser = ${id} AND orders.returned = 0`, { type: sequelize.QueryTypes.SELECT });
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
    let id = payload.id_user;
    let res = await sequelize.query(
      `SELECT orders.date_of_order, orders.date_of_return, orders.id_order, movies.title, movies.summary, movies.poster
        FROM articles
        Join orders ON orders.ArticleIdArticles = articles.id_articles
        Join movies on movies.articleIdArticles = articles.id_articles
        WHERE orders.userIdUser = ${id} AND orders.returned = 0`, { type: sequelize.QueryTypes.SELECT });
    res.send(res);
  } catch (error) {
    res.send(error)
  }
}
*/

// Mostramos todos los pedidos (solo el admin lo puede hacer)

ordersController.allOrders = async (req, res) => {
  try {
    let res = await models.order.findAll();
    res.send(res);
  } catch (error) {
    res.send(error)
  }
}
module.exports = ordersController;
