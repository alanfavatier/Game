// En un archivo llamado cartHandler.js
const { addToCart, removeFromCart } = require('../controllers/cartController');

async function addToCartHandler(req, res) {
    try {
        await addToCart(req, res);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function removeFromCartHandler(req, res) {
    try {
        await removeFromCart(req, res);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    addToCartHandler,
    removeFromCartHandler
};
