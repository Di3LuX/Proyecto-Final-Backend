
const express = require("express");
const router = express.Router();
const authBearerMiddleware = require("../middlewares/auth")

const vehiclesController = require("../controllers/vehiclesController");

//Traer todos los vehiculos
router.get("/", authBearerMiddleware, vehiclesController.getAll);

//Traer vehiculos por tipo
router.get("/type/:type", authBearerMiddleware, vehiclesController.getVehicleByType);

/*
//Registrar un nuevo vehiculo
router.post("/", authBearerMiddleware, vehiclesController.registerVehicle);

//Borrar un vehiculo por su id
router.delete("/:id", authBearerMiddleware, vehiclesController.deleteById);

//Borrar todos los vehiculos
router.delete("/", authBearerMiddleware, vehiclesController.deleteAll);
*/
module.exports = router;