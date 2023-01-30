const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersControllers');
const  authBearerMiddleware  = require("../middlewares/authMiddleware")
const  userRegistred  = require("../middlewares/authMiddleware")



// // Crear una nueva orden.
// router.post('/neworder', authBearerMiddleware, ordersController.newOrder);

// // Traemos el pedido realizado por el usuario
// router.get('/myorder', authBearerMiddleware, ordersController.myOrder);

// // Modificar una orden ya existente.
// router.put('/modifyorder', authBearerMiddleware, ordersController.modifyOrder);

// // Devolver una orden
// router.patch('/myorder/return', authBearerMiddleware, ordersController.returnOrder);

// // (Only admin) Traer todas las ordenes 
// router.get('/allorders/', authBearerMiddleware, ordersController.allOrders);

// // Traer las ordenes solo de vehiculos
// router.get('/myorder/vehicles', authBearerMiddleware, ordersController.myVehicleOrder);

// // Traer las ordenes solo de inmuebles
// router.get('/myorder/estates', authBearerMiddleware, ordersController.myEstateOrder);

// // Traer las ordenes solo de objetos varios
// router.get('/myorder/various', authBearerMiddleware, ordersController.myVariousOrder);



module.exports = router;
