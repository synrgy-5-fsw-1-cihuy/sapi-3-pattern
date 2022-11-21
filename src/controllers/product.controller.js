const { Product } = require("../db/models");

// CRUD

// create a method/function to get all products

// create a method/function to get a single product

// create a method/function to create a product

// create a method/function to update a product
// UPDATE a product
exports.updateProduct = async (request, response) => {
  try {
    const product = await Product.findByPk(request.params.id);
    if (!product) {
      response.status(404).json({ message: "Not found" });
      return;
    }
    const { name, description, price } = request.body;
    if (!name && !description && !price) {
      response.status(400).json({ message: "Bad request" });
      return;
    }
    await product.update(request.body);
    response.json({ message: "OK" });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Internal server error" });
  }
};

// create a method/function to delete a product
