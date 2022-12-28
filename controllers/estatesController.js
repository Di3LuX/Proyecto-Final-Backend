
const { sequelize } = require("../models/index");
const { send } = require('express/lib/response');
const { Op } = require("sequelize");
const res = require('express/lib/response');


const estatesController = {};

// Traer todos los inmuebles

estatesController.getAll = (req, res) => {
  sequelize.query('SELECT id, type, photo, location, surface, conditions, info, createdAt, updatedAt')
    .then(data => {
      res.send(data)
    })
};


// Traer inmueble por tipo:

estatesController.getEstateByType = async (req, res) => {
  try {
    let { type } = req.params;
    let res = await estate.findOne({
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

// Registro de un nuevo inmueble

estatesController.registerEstate = (req, res) => {

  let type = req.body.type;
  let photo = req.body.photo;  
  let brand = req.body.brand;
  let manufacturing = req.body.manufacturing;
  let registration = req.body.registration;
  let conditions = req.body.conditions;
  let info = req.body.info;

  estate.findAll({
    where: {
      [Op.or]: [{
          id: {
            [Op.like]: id
          }}]}
  })
  .then(duplicateInfo => {
    if (duplicateInfo == 0) {
      estate.create({
        type: type,
        photo: photo,
        brand: brand,
        manufacturing: manufacturing,
        registration: registration,
        conditions: conditions,
        info: info
      })
      .then(estate => {
        res.send(`Your ${estate.type} with registration: ${estate.registration} is now available for sale!`);
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


// Borrar un inmueble

estatesController.deleteById = (req, res) => {
  let id = req.params.id;

  try {
    estate.destroy({
      where: { id: id },
      truncate: false
    })

      .then(estateDeleted => {
        console.log(estateDeleted);
        res.send(`The estate with the id: ${id} was deleted successfully`);
      })
  }
  catch (error) {
    send.error(error);
  }
};
*/
module.exports = estatesController;