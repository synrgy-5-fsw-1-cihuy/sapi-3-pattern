const { Product } = require("../db/models");

// CRUD

// create a method/function to get all products
// READ all product
exports.getAllProducts = async (request, response) => {
  try {
    const result = await Product.findAll();
    response.json({ message: "OK", data: result });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Internal server error" });
  }
};

// create a method/function to get a single product
// READ a product
exports.getProduct = async (request, response) => {
  try {
    const result = await Product.findByPk(request.params.id);

    if (!result) {
      res.status(404).json({ message: "Not Found" });
      return;
    }

    response.json({ message: "OK", data: result });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Internal server error" });
  }
};

// create a method/function to create a product
// CREATE a product
exports.createProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    if (!name || !description || !price) {
      res.status(404).json({ message: "Bad Request" });
      return;
    }
    const result = await Product.create(req.body);
    res.status(200).json({ message: "OK", Data: result });
  } catch (error) {
    res.status(500).json({ messag: "Internal Server Error" });
  }
};

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
// DELETE a product
exports.deleteProduct = async (request, response) => {
  try {
    const result = await Product.destroy({ where: { id: request.params.id } });
    if (!result) {
      response.status(404).json({ message: "Car not found" });
      return;
    }

    response.json({
      message: "OK",
    });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Internal server error" });
  }
};
