
const { sequelize } = require("../models/index");
const { send } = require('express/lib/response');
const { Op } = require("sequelize");
const res = require('express/lib/response');


const variousController = {};

// Traer todos los objetos varios

variousController.getAll = (req, res) => {
  sequelize.query('SELECT id, type, photo, conditions, info, createdAt, updatedAt article_id FROM various AS object')
    .then(data => {
      res.send(data)
    })
};


// Traer objetos varios por tipo:

variousController.getVariousByType = async (req, res) => {
  try {
    let { type } = req.params;
    let res = await various.findOne({
      where: {
        type: type,
      }
    });
    res.status(200).send(res);
  } catch (error) {
    console.error(error)
    res.status(500).send(error);
  }
}
/*

// Registro de un nuevo objeto

variousController.registerVarious = (req, res) => {

  let type = req.body.type;
  let photo = req.body.photo;  
  let conditions = req.body.conditions;
  let info = req.body.info;

  various.findAll({
    where: {
      [Op.or]: [{
          id: {
            [Op.like]: id
          }}]}
  })
  .then(duplicateInfo => {
    if (duplicateInfo == 0) {
      various.create({
        type: type,
        photo: photo,
        conditions: conditions,
        info: info
      })
      .then(various => {
        res.send(`Your ${various.type} is now available for sale!`);
      })
        .catch((error) => {
          res.send(error);
        });
    } else {
      res.send("There's already an article with that info on the market");
    }
  }).catch(error => {
    res.send(error)
  });
};


// Borrar un vehiculo

variousController.deleteById = (req, res) => {
  let id = req.params.id;

  try {
    various.destroy({
      where: { id: id },
      truncate: false
    })

      .then(variousDeleted => {
        console.log(variousDeleted);
        res.send(`The object with the id: ${id} was deleted successfully`);
      })
  }
  catch (error) {
    send.error(error);
  }
};
*/
module.exports = variousController;