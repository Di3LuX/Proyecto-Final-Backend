
const { sequelize } = require("../models/index");
const { send } = require('express/lib/response');
const { Op } = require("sequelize");
const res = require('express/lib/response');
const vehicle = require("../models/vehicle");

const vehiclesController = {};

// Traer todos los vehiculos

vehiclesController.getAll = (req, res) => {
  sequelize.query('SELECT id, articles_id, type, photo, brand, model, manufacturing, registration, conditions, info, createdAt, updatedAt article_id FROM vehicles AS vehicle')
    .then(data => {
      res.send(data)
    })
}

// Traer vehiculo por tipo:

vehiclesController.getVehicleByType = async (req, res) => {
  try {
    let { type } = req.params;
    let res = await models.vehicle.findAll({
      where: {
        type: {
          [Op.like]: `%${type}%`,
        },
      },
    });
    res.status(200).send(resp);
  } catch (error) {
    res.send(error);
  }
};

// Registro de un nuevo vehiculo

vehiclesController.registerVehicle = (req, res) => {

  let type = req.body.type;
  let photo = req.body.photo;  
  let brand = req.body.brand;
  let manufacturing = req.body.manufacturing;
  let registration = req.body.registration;
  let conditions = req.body.conditions;
  let info = req.body.info;

  vehicle.findAll({
    where: {
      [Op.or]: [{
          id: {
            [Op.like]: id
          }}]}
  })
  .then(duplicateInfo => {
    if (duplicateInfo == 0) {
      vehicle.create({
        type: type,
        photo: photo,
        brand: brand,
        manufacturing: manufacturing,
        registration: registration,
        conditions: conditions,
        info: info
      })
      .then(vehicle => {
        res.send(`Your ${vehicle.type} with registration: ${vehicle.registration} is now available for sale!`);
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
vehiclesController.registerVehicle = (req, res) => {

  let type = req.body.type;
  let photo = req.body.photo;
  let brand = req.body.brand;
  let manufacturing = req.body.manufacturing;
  let registration = req.body.registration;
  let conditions = req.body.conditions;
  let info = req.body.info;

        vehicle.create({
          type: type,
          photo: photo,
          brand: brand,
          manufacturing: manufacturing,
          registration: registration,
          conditions: conditions,
          info: info
        })
          .then(vehicle => {
            res.send(`Your ${vehicle.type} with registration: ${vehicle.registration} is now available for sale!`);
          })
          .catch((error) => {
            res.send(error);
          });
      }
/*

// Borrar un vehiculo

vehiclesController.deleteById = (req, res) => {
  let id = req.params.id;

  try {
    vehicle.destroy({
      where: { id: id },
      truncate: false
    })

      .then(vehicleDeleted => {
        console.log(vehicleDeleted);
        res.send(`The vehicle with the id: ${id} was deleted successfully`);
      })
  }
  catch (error) {
    send.error(error);
  }
};
*/
module.exports = vehiclesController;