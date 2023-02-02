const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersControllers');
const  authBearerMiddleware  = require("../middlewares/authMiddleware")
const  userRegistred  = require("../middlewares/authMiddleware")



// Crear una nueva orden.
router.post('/neworder', ordersController.newOrder);

// Traemos el pedido realizado por el usuario
router.get('/myorder', ordersController.myOrder);

// Devolver una orden
router.delete('/myorder/return', ordersController.returnOrder);

// // Modificar una orden ya existente.
// router.put('/modifyorder', authBearerMiddleware, ordersController.modifyOrder);


// // (Only admin) Traer todas las ordenes 
// router.get('/allorders/', authBearerMiddleware, ordersController.allOrders);

// // Traer las ordenes solo de vehiculos
// router.get('/myorder/vehicles', authBearerMiddleware, ordersController.myVehicleOrder);

// // Traer las ordenes solo de inmuebles
// router.get('/myorder/estates', authBearerMiddleware, ordersController.myEstateOrder);

// // Traer las ordenes solo de objetos varios
// router.get('/myorder/various', authBearerMiddleware, ordersController.myVariousOrder);



module.exports = router;
