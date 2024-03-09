const express = require('express');
const router = express.Router();
const { addToCartHandler, removeFromCartHandler  } = require('../handlers/cartHandler');
const { getCartByUser  } = require('../controllers/cartController');

const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, addToCartHandler);
router.get('/', authMiddleware, getCartByUser); // Nueva ruta para obtener el carrito del usuario
router.delete('/:itemId', authMiddleware, removeFromCartHandler);

module.exports = router