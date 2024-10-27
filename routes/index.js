const express = require("express");
const route = express.Router();
const todosRoute = require('./todos-route');
const authRoute = require('./auth-route');


route.use('/todos', todosRoute );
route.use('/auth', authRoute);

module.exports = route;