// En un archivo llamado cartController.js
const { ProductoCarrito } = require('../db');

async function addToCart(req, res) {
    try {
        const { productId, quantity } = req.body;
        const newItem = await ProductoCarrito.create({ productId, quantity });
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function removeFromCart(req, res) {
    try {
        const { itemId } = req.params;
        const item = await ProductoCarrito.findByPk(itemId);
        if (!item) {
            return res.status(404).json({ error: 'Item not found in cart' });
        }
        await item.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    addToCart,
    removeFromCart
};
