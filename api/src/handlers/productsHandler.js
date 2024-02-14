// En un archivo llamado productsHandler.js
const { getAllProducts,  createProduct, getProductByName} = require('../controllers/productsContollers');


async function createProductHandler(req, res) {
    try {
      const response=  await createProduct(req, res);
      res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

const getProductsHandler = async (req, res) => {
    const { name } = req.query;
    try {
        if (name) {
            const productByName = await getProductByName(name); // si recibo un nombre hago la búsqueda y me devuelve dicho nombre
            if (productByName.message) {
                // Si el resultado es un objeto con un mensaje, significa que no se encontró el nombre. y muestra el mensaje 
                res.status(404).json({ message: productByName.message });
            } else{

            }
            res.status(200).json(productByName);
        } else {
            const response = await getAllProducts(); // si no me devuelve todos los nombres
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    getProductsHandler,
    createProductHandler
};


