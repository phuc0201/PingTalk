const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const cors = require("cors");
const routes = require("./routes/v1");
const helmet = require("helmet");
const compression = require("compression");
const passport = require("passport");
const { jwtStrategy } = require("./config/passport");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "PingTalk",
      version: "1.0.0",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ["./src/routes/v1/*.js"],
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use(helmet());

app.use(
  cors({
    origin: true,
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(compression());

app.use(passport.initialize());
passport.use("jwt", jwtStrategy);

app.use("/api/v1", routes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.redirect("/api-docs");
});

module.exports = app;
