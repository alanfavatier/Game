const {Router}= require("express")
const { getProductsHandler, createProductHandler } = require('../handlers/productsHandler');
const productRouter = Router(); 
// Ruta para obtener todos los productos
productRouter.get('/', getProductsHandler);
productRouter.post('/create', createProductHandler);

module.exports = productRouter;
