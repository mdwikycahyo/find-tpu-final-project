require("dotenv").config();
// if(process.env.NODE_ENV !== "production"){
//     require("dotenv").config()
// }

const cors = require("cors");
const express = require("express");
const app = express();
const router = require("./routes/index");
const errorHandler = require("./middlewares/errorHandler");
// const errorHandler = require('./middlewares/errorHandlers')
//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ pesan: "Masuk" });
});
app.use(router);
app.use(errorHandler);

// app.use(errorHandler)
module.exports = app;
