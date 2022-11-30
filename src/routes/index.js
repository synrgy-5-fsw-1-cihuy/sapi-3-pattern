const { Router } = require("express");
const ProductController = require("../controllers/product.controller");
/**
 * @swagger
 *  components:
 *   schemas:
 *     Post:
 *      type: object
 *      required:
 *        - title
 *        - description
 *      properties:
 *        id:
 *          type: integer
 *          description: The generated ID's Post model
 *        title:
 *          type: string
 *          description: The title your post
 *        description:
 *          type: string
 *          description: The description your post
 *        createdAt:
 *          type: string
 *          format: date-time
 *          description: The Created data date
 *        updatedAt:
 *          type: string
 *          format: date-time
 *          description: The Updated data date
 */

const router = Router();

/**
 * @swagger
 *   /products/:
 *      get:
 *        summary: Get all products
 *        tags: [Products]
 *        responses:
 *          "200":
 *            description: Retrieve all posts
 *            content:
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Post'
 */

router.get("/api/products", ProductController.getAllProduct);

/**
 * @swagger
 *   /products/:
 *      post:
 *        summary: Create a new product
 *        tags: [Products]
 *        parameters:
 *         - in: body
 *           name: product
 *           description: The product to create.
 *           schema:
 *            type: object
 *            required:
 *            - title
 *            - description
 *            properties:
 *              title:
 *                type: string
 *                description: The title your post
 *              description:
 *                type: string
 *                description: The description your post
 *        responses:
 *          "200":
 *            content:
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Post'
 */

router.post("/api/products", ProductController.createProduct);

/**
 * @swagger
 *   /products/{id}:
 *      put:
 *        summary: Update a product
 *        tags: [Products]
 *        parameters:
 *         - in: path
 *           description: The id of the product
 *           name: id
 *           required: true
 *           schema:
 *            type: integer
 *         - in: body
 *           name: product
 *           description: The product to update.
 *           schema:
 *           type: object
 *           properties:
 *            title:
 *              type: string
 *              description: The title your post
 *            description:
 *              type: string
 *              description: The description your post
 *        responses:
 *          "200":
 *            content:
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Post'
 */

router.put("/api/products/:id", ProductController.updateProduct);

/**
 * @swagger
 *   /products/{id}:
 *      delete:
 *        summary: Delete a product
 *        tags: [Products]
 *        parameters:
 *         - in: path
 *           description: The id of the product
 *           name: id
 *           required: true
 *           schema:
 *            type: integer
 *        responses:
 *          "204":
 *            content:
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Post'
 */

router.delete("/api/products/:id", ProductController.deleteProduct);

module.exports = router;
