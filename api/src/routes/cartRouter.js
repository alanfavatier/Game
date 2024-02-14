const express = require('express');
const router = express.Router();
const { addToCartHandler, removeFromCartHandler } = require('../handlers/cartHandler');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, addToCartHandler);
router.delete('/:itemId', authMiddleware, removeFromCartHandler);

module.exports = router