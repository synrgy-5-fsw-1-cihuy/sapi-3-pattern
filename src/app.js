const express = require("express");
const router = require("./routes");

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const app = express();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Binar Synrgy Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Binar Synrgy",
        url: "https://binaracademy.com",
        email: "binaracademy.com",
      },
    },
    servers: [
      {
        url: "http://localhost:8001/api/",
      },
    ],
  },
  apis: ["./router/post.router.js"],
};
const specs = swaggerJsDoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

module.exports = app;
