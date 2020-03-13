const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./db");
const app = express();
const apiPort = 3000;

const movieRouter = require("./routes/movie-router");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("Hello World! " + req.query.param1);
});

app.get("/api", (req, res) => {
    res.send("Hello World! " + req.query.param1);
  });

app.use("/api", movieRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
