const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "Documentation for all APIs",
    },
    servers: [
      {
        url: "https://backend-project-xm9m.onrender.com",
        description: "Development server",
      },
    ],
    components: {
      schemas: {
        Device: {
          type: "object",
          properties: {},
        },
      },
    },
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);

module.exports = {
  specs,
  swaggerUi,
};
