// En un archivo llamado ordersHandler.js
const { createOrder, getOrderById } = require('../controllers/ordersController');

async function createOrderHandler(req, res) {
    try {
        await createOrder(req, res);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function getOrderByIdHandler(req, res) {
    try {
        await getOrderById(req, res);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    createOrderHandler,
    getOrderByIdHandler
};
