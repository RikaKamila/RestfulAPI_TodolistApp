const express = require("express");
const route = express.Router();
const todosRoute = require('./todos-route');
const authRoute = require('./auth-route');
// const {validateToken} = require('../middleware/auth')

route.get("/", (req, res) => {
    res.json({
      message: "Welcome RestfullAPI TodoList App",
    });
  });

// route.use('/todos', validateToken, todosRoute );
route.use('/todos', todosRoute );
route.use('/auth', authRoute);

module.exports = route;