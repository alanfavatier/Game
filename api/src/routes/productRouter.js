const {Router}= require("express")
const { getProductsHandler, createProductHandler , getProductsByIdHandler} = require('../handlers/productsHandler');
const productRouter = Router(); 
// Ruta para obtener todos los productos
productRouter.get('/', getProductsHandler);
productRouter.get('/:id', getProductsByIdHandler);
productRouter.post('/create', createProductHandler);

module.exports = productRouter;
