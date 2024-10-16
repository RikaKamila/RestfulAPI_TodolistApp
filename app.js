const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

const allRoutes = require('./routes');
const db = require("./db");

db.then(() => {
    console.log("connection db success");
  }).catch(() => {
    console.log("connection failed");
  });

app.use(express.json());
app.use(allRoutes);

app.listen(PORT, () => {
    console.log("server running on PORT " + 3001);
  });