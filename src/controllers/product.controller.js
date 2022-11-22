const { Product } = require("../db/models");

// CRUD

// create a method/function to get all products
exports.getAllProduct = async (request, response) => {
  try {
    const product = await Product.findAll();
    if (!product) {
      response.status(404).json({ message: "Not found" });
      return;
    }
    response.status(200).json({product});
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Internal server error" });
  }
};

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

// create a method/function to delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Product.delete(id, res);
    if (!data) {
      response.status(404).json({ message: "Not found" });
      return;
    }
    data.destroy();
    res.status(200).json({ message: "Delete"});
  } catch (error) {
    res.status(500).json({ messag: "Internal Server Error" });
  }
};