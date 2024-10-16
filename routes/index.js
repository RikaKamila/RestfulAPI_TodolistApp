const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
    res.json({
      message: "selamat datang di TodoList App",
    });
  });

module.exports = route;