// En un archivo llamado ordersController.js
const { Orden, ProductoCarrito } = require('../db');

async function createOrder(req, res) {
    try {
        // Aquí puedes implementar la lógica para crear una nueva orden
        // y asociar los productos del carrito a la orden
        // por ejemplo:
        const { userId, items } = req.body;
        const newOrder = await Orden.create({ userId });
        await Promise.all(items.map(async (item) => {
            await ProductoCarrito.create({
                productId: item.productId,
                quantity: item.quantity,
                orderId: newOrder.id
            });
        }));
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function getOrderById(req, res) {
    try {
        const { orderId } = req.params;
        const order = await Orden.findByPk(orderId, { include: ProductoCarrito });
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    createOrder,
    getOrderById
};
