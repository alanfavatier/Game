const express = require('express');
const router = express.Router();
const { createOrderHandler, getOrderByIdHandler } = require('../handlers/ordersHandler');

// Ruta para crear una nueva orden
router.post('/', createOrderHandler);

// Ruta para obtener una orden por ID
router.get('/:orderId', getOrderByIdHandler);

module.exports = router;
