require("dotenv").config();
const http = require("http");
const express = require("express");
const router = require("./route/index");
const errorHandler = require("./middleware/error-handler");
const cors = require("cors");


const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));
app.use(router());
app.use(errorHandler);

http.createServer(app).listen(PORT, function () {
  console.log(`App started on port ${PORT}`);
});
