const express = require("express");
const {
  getAllTodos,
  getTodosById,
  addTodos,
  editTodosById,
  deleteTodosById,
  deleteTodos,
} = require("../controllers/Todos-controller");
const route = express.Router();

route.get("/", getAllTodos);
route.get("/:id", getTodosById);
route.post("/", addTodos);
route.put("/:id", editTodosById);
route.delete("/:id", deleteTodosById);
route.delete("/todos", deleteTodos);


module.exports = route;