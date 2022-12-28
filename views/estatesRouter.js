
const express = require("express");
const router = express.Router();
const authBearerMiddleware = require("../middlewares/auth")

const estatesController = require("../controllers/estatesController");

//Traer todos los inmuebles
router.get("/", authBearerMiddleware, estatesController.getAll);

//Traer inmueble por tipo
router.get("/type/:type", authBearerMiddleware, estatesController.getEstateByType);

/*
//Registrar un nuevo inmueble
router.post("/", authBearerMiddleware, estatesController.registerEstate);

//Borrar un inmueble por su id
router.delete("/:id", authBearerMiddleware, estatesController.deleteById);

//Borrar todos los inmuebles
router.delete("/", authBearerMiddleware, estatesController.deleteAll);
*/
module.exports = router;