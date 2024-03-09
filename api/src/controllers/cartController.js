const { ProductoCarrito} = require('../db');


async function getCartByUser(req, res) {
    try {
        const userId = req.user.id; // Obteniendo el ID del usuario autenticado desde el middleware de autenticación
        const cartItems = await ProductoCarrito.findAll({ where: { userId } });
        res.status(200).json(cartItems);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function removeFromCart(req, res) {
    try {
        const { itemId } = req.params;
        const userId = req.user.id; // Obteniendo el ID del usuario autenticado desde el middleware de autenticación
        const item = await ProductoCarrito.findOne({ where: { id: itemId, userId } });
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
   
    getCartByUser,
    removeFromCart
};