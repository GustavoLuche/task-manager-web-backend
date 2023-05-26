let tasks = [];
let taskIdCounter = 0;

tasks = [
  {
    id: ++taskIdCounter,
    name: "Tarefa A",
    state: "aguardando"
  },
  {
    id: ++taskIdCounter,
    name: "Tarefa B",
    state: "aguardando"
  },
  {
    id: ++taskIdCounter,
    name: "Tarefa C",
    state: "andamento"
  }
];

// Controlador das tarefas
const taskController = {
  // Obter todas as tarefas
  getTasks() {
    return tasks;
  },

  // Criar uma nova tarefa
  createTask(req, res) {
    const {name, state} = req.body;

    const task = {
      id: ++taskIdCounter,
      name: name,
      state: state
    };

    tasks.push(task);

    res.redirect('/');
  },
};

module.exports = taskController;
