const mongoose = require ('mongoose');
const todosSchema = new mongoose.Schema({
    task: String,
    completed: Boolean,
    dueDate: String,
    priority: String
  });
  
  const Todos = mongoose.model("Todos", todosSchema);
  
  module.exports = Todos;
