const express = require("express");
const {
  getAllTodos,
  getTodosById,
  addTodos,
  editTodosById,
  deleteTodosById,
} = require("../controllers/Todos-controller");
const route = express.Router();

route.get("/", getAllTodos);
route.get("/:id", getTodosById);
route.post("/", addTodos);
route.put("/:id", editTodosById);
route.delete("/:id", deleteTodosById);

module.exports = route;