
const express = require("express");
const router = express.Router();
const authBearerMiddleware = require("../middlewares/auth")

const userController = require("../controllers/usersController");


//Registro
router.post("/register", userController.register);

//Login
router.post("/login", userController.login);

//Modificar
router.put("/modify", authBearerMiddleware, userController.modify);

/*
//Ver todos los usuarios
router.get("/", authBearerMiddleware, userController.findAll);

//Buscar usuario por ID
router.get("/:id", authBearerMiddleware, userController.findCurrentUser);

//Borrar usuario
router.delete("/delete", authBearerMiddleware, userController.delete);
*/

module.exports = router;