const express = require("express");
const router = express.Router();
const authBearerMiddleware = require("../middlewares/auth")

const variousController = require("../controllers/variousController");

//Traer todos los inmuebles
router.get("/", authBearerMiddleware, variousController.getAll);

//Traer inmueble por tipo
router.get("/type/:type", authBearerMiddleware, variousController.getVariousByType);

/*
//Registrar un nuevo inmueble
router.post("/", authBearerMiddleware, variousController.registerVarious);

//Borrar un inmueble por su id
router.delete("/:id", authBearerMiddleware, variousController.deleteById);

//Borrar todos los inmuebles
router.delete("/", authBearerMiddleware, variousController.deleteAll);
*/
module.exports = router;