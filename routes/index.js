const express = require("express");
const route = express.Router();
const todosRoute = require('./todos-route');

route.get("/", (req, res) => {
    res.json({
      message: "selamat datang di TodoList App",
    });
  });

route.use('/todos', todosRoute );

module.exports = route;