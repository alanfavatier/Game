const { Televisores, Celulares, Muebles } = require('../db');


async function createProduct(req, res) {
    try {
        const { type, name, description, price, image } = req.body;
        let product;

        switch (type) {
            case 'televisor':
                product = await Televisores.create({ name, description, price, image });
                break;
            case 'mueble':
                product = await Muebles.create({ name, description, price, image });
                break;
            case 'celular':
                product = await Celulares.create({ name, description, price, image });
                break;
            default:
                return res.status(400).json({ error: 'Tipo de producto no válido' });
        }

        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
async function getProductByName(name) {
    try {
        // Aquí no necesitas un switch ya que solo estás filtrando por nombre
        // Puedes buscar en todos los modelos
        const productDB = await Promise.all([
            Televisores.findAll({ where: { name: name } }),
            Celulares.findAll({ where: { name: name } }),
            Muebles.findAll({ where: { name: name } })
        ]);

        // Concatenamos todos los resultados en un solo array
        const products = productDB.reduce((acc, curr) => acc.concat(curr), []);

        // Devolvemos los resultados
        return products;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function getAllProducts(req, res) {
    
    
    try {
        // Aquí obtenemos todos los productos disponibles
        const allProducts = await Promise.all([
            Televisores.findAll(),
            Celulares.findAll(),
            Muebles.findAll()
        ]);
        const productos = allProducts.reduce((acc, curr) => acc.concat(curr), []);
        // Unimos todos los productos en un solo array
       
        return productos;

    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    getAllProducts,
    createProduct,
    getProductByName
};



/* const { Televisores, Celulares, Muebles } = require('../db');

async function createProduct(productData) {
    try {
        const { type, name, description, price } = productData;

        // Asegúrate de que el tipo de producto sea válido
        if (!['televisor', 'mueble', 'celular'].includes(type)) {
            throw new Error('Tipo de producto no válido');
        }

        let product;

        // Dependiendo del tipo de producto, crea una instancia del modelo respectivo
        switch (type) {
            case 'televisor':
                product = await Televisores.create({ name, description, price });
                break;
            case 'mueble':
                product = await Muebles.create({ name, description, price });
                break;
            case 'celular':
                product = await Celulares.create({ name, description, price });
                break;
        }

        return product;
    } catch (error) {
        throw new Error('Error al crear el producto: ' + error.message); // Lanza un error con un mensaje más descriptivo
    }
}
async function getAllProducts(req, res) {
    try {
        // Aquí obtienes todos los productos disponibles, incluyendo televisores, celulares y muebles
        const productos = await Promise.all([
            Televisores.findAll(),
            Celulares.findAll(),
            Muebles.findAll()
        ]);
        res.status(200).json(productos);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    getAllProducts,
    createProduct
}; */