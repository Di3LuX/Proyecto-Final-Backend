
const express = require("express");
const router = express.Router();
const authBearerMiddleware = require("../middlewares/authMiddleware")

const userController = require("../controllers/usersController");


//Registro
router.post("/register", userController.register);

//Login
router.post("/login", userController.login);

//Modificar
router.put("/modify", userController.modify);

//Borrar usuario
router.delete("/delete", userController.delete);
/*
//Ver todos los usuarios
router.get("/", authBearerMiddleware, userController.findAll);

//Buscar usuario por ID
router.get("/:id", authBearerMiddleware, userController.findCurrentUser);

*/

module.exports = router;