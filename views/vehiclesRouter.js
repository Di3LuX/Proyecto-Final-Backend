
const express = require("express");
const router = express.Router();
const authBearerMiddleware = require("../middlewares/authMiddleware")
const userRegistred = require("../middlewares/authMiddleware")

const vehiclesController = require("../controllers/vehiclesController");

//Traer todos los vehiculos
router.get("/article/:id", vehiclesController.getAll);

//Traer vehiculos por tipo
router.get("/type/:type", vehiclesController.getVehicleByType);

//Registrar un nuevo vehiculo
router.post("/", vehiclesController.registerVehicle);

/*
//Borrar un vehiculo por su id
router.delete("/:id", authBearerMiddleware, vehiclesController.deleteById);

//Borrar todos los vehiculos
router.delete("/", authBearerMiddleware, vehiclesController.deleteAll);
*/
module.exports = router;