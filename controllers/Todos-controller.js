const Todos = require('../models/Todos');
module.exports = {

// Get All Todos
getAllTodos: async (req, res) => {
    const data = await Todos.find({});

    res.json({
      message: "Get todos success",
      data,
    });
},
// Get Todos By Id
getTodosById: (req, res) => {
    const id = req.params.id;

    Todos.findById(id)
        .then(todo => {
            if (!todo) {
                return res.json({ message: 'Todo not found' });
            }
            res.json({
                message: "Get todo by id success",
                data: todo
            });
        })
        .catch(err => {
            console.error(err);
            res.json({ message: 'Terjadi kesalahan saat mengambil Todo' });
        });

},
// Add Todos
addTodos: (req, res) => {
    const data = req.body;

    const newTodos = new Todos(data);
    newTodos.save();

    res.json({
      message: "Add Todo Success",
    });
  },
// Edit Todos
editTodosById: (req, res) => {},
// Delete Todos
deleteTodosById: (req, res) => {},

}