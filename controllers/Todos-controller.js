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
            res.json({ message: 'Error when get todo' });
        });

},
// Add Todo
addTodos: (req, res) => {
    const data = req.body;

    const newTodos = new Todos(data);
    newTodos.save();

    res.json({
      message: "Add Todo Success",
    });
  },
// Edit Todos
editTodosById: (req, res) => {
    const id = req.params.id;

    Todos.findByIdAndUpdate(id, req.body, {new: true})
    .then(todo => {
        if (!todo) {
            return res.json({ message: 'Todo not found' });
        }
        res.json({
            message: "Edit Todo By Id Success",
            data: todo
        });
    })
    .catch(err => {
        console.error(err);
        res.json({ message: 'Error when edit Todo' });
    });

},
// Delete Todos
deleteTodosById: (req, res) => {
    const id = req.params.id;

    Todos.findByIdAndDelete(id)
    .then(todo => {
      if (!todo) {
          return res.json({ message: 'Todo Not Found' });
      }
      res.json({
          message: "Delete Todo Success",
          data: todo
      });
  })
  .catch(err => {
      console.error(err);
      res.json({ message: 'Error when Delete Todo' });
  });
},


// Delete All todos
deleteAllTodos: async (req, res) => {
    await Todo.deleteMany({});

    res.json({
      message: "All todos clear",
    });
  },

}