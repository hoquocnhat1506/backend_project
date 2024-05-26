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
        User: {
          type: "object",
          properties: {
            _id: {
              type: "string",
              description: "ID của người dùng",
            },
            username: {
              type: "string",
              description: "Tên người dùng",
            },
            email: {
              type: "string",
              description: "Email của người dùng",
            },
            admin: {
              type: "boolean",
              description: "Quyền admin của người dùng",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              description: "Ngày tạo người dùng",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              description: "Ngày cập nhật người dùng",
            },
          },
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
