const http = require("http");
const config = require("./src/config/config");
const app = require("./src/app");
const mongoose = require("mongoose");
let server;
mongoose
  .connect(config.mongoose.url)
  .then(() => {
    console.log("Connected to MongoDB");

    server = http.createServer({}, app);

    server.listen(config.port, () => {
      console.info(`http://localhost:${config.port}`);
    });
  })
  .catch(console.error);
