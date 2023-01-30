
const express = require("express");
const router = express.Router();
const authBearerMiddleware = require("../middlewares/authMiddleware")
const userRegistred = require("../middlewares/authMiddleware")

const variousController = require("../controllers/variousController");

//Traer todos los objetos
router.get("/article/:id", variousController.getAll);

//Traer objetos por tipo
router.get("/type/:type", variousController.getVariousByType);

//Registrar un nuevo objeto
router.post("/", variousController.registerVarious);
/*

//Borrar un objeto por su id
router.delete("/:id", authBearerMiddleware, variousController.deleteById);

//Borrar todos los objetos
router.delete("/", authBearerMiddleware, variousController.deleteAll);
*/
module.exports = router;