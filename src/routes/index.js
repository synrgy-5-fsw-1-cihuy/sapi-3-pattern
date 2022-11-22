const { Router } = require("express");
const ProductController = require("../controllers/product.controller");

const router = Router();

// create a route to get all products with GET method and /api/products path and ProductController.getAllProducts as a callback
router.get("/api/products", ProductController.getAllProduct);
// create a route to get a single product with GET method and /api/products/:id path and ProductController.getProduct as a callback

// create a route to create a product with POST method and /api/products path and ProductController.createProduct as a callback
router.post("/api/products", ProductController.createProduct);
// create a route to update a product with PUT method and /api/products/:id path and ProductController.updateProduct as a callback
router.put("/api/products/:id", ProductController.updateProduct);

// create a route to delete a product with DELETE method and /api/products/:id path and ProductController.deleteProduct as a callback
router.delete("/api/products/:id", ProductController.deleteProduct);

module.exports = router;
