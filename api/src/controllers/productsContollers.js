const { Televisores, Celulares, Muebles } = require("../db");
async function getProductById(id) {
  try {
    // Aquí necesitas implementar la lógica para obtener un producto por su ID
    // Puedes buscar en todos los modelos Televisores, Celulares y Muebles
    const productDB = await Promise.all([
      Televisores.findByPk(id),
      Celulares.findByPk(id),
      Muebles.findByPk(id),
    ]);

    // Concatenamos todos los resultados en un solo array
    const products = productDB.reduce((acc, curr) => acc || curr, null);

    // Si no se encuentra ningún producto con ese ID, devolver un mensaje
    if (!products) {
      return { message: "Producto no encontrado" };
    }

    // Devolvemos el producto encontrado
    return products;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getProductsByCategory(req, res) {
  const { category } = req.query;

  try {
    let products = [];

    switch (category) {
      case "televisores":
        products = await Televisores.findAll();
        break;
      case "celulares":
        products = await Celulares.findAll();
        break;
      case "muebles":
        products = await Muebles.findAll();
        break;
      default:
        // Si no se proporciona una categoría válida, devolver un error
        return res.status(400).json({ error: "Categoría no válida" });
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function createProduct(req, res) {
  try {
    const { type, name, description, price, image, category } = req.body;
    let product;

    switch (type) {
      case "televisor":
        product = await Televisores.create({
          name,
          description,
          price,
          image,
          category,
        });
        break;
      case "mueble":
        product = await Muebles.create({
          name,
          description,
          price,
          image,
          category,
        });
        break;
      case "celular":
        product = await Celulares.create({
          name,
          description,
          price,
          image,
          category,
        });
        break;
      default:
        return res.status(400).json({ error: "Tipo de producto no válido" });
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
      Muebles.findAll({ where: { name: name } }),
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
      Muebles.findAll(),
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
  getProductByName,
  getProductsByCategory,
  getProductById
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
