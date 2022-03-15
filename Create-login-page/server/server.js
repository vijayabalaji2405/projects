const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userroute = require("./router/userroute");
const app = express();
const cors = require("cors");
const globalErrorHandler = require("./controller/errorController");

app.use(express.json());

app.use(cors({ origin: true }));

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => console.log("DB connection successful!"));

// app.get("/test", (req, res) => {
//   res.status(200).send("hi");
// });

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

app.use("/api", userroute);

app.all("*", (req, res, next) => {
  next({
    status: `Can't find ${req.originalUrl} on this server!`,
    code: 404,
  });
});

app.use(globalErrorHandler);
