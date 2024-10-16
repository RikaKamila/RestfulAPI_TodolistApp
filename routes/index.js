const express = require("express");
const route = express.Router();
const todosRoute = require('./todos-route');
const authRoute = require('./auth-route');
const { validateToken} = require('../middleware/auth');

route.use((req, res, next) => {
    console.log('middleware untuk semua route');
    next();
  });
  
route.get("/", (req, res) => {
    res.json({
      message: "selamat datang di TodoList App",
    });
  });

route.use('/todos', validateToken, todosRoute );
route.use('/auth', authRoute);

module.exports = route;