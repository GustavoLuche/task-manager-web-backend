let tasks = [];
let taskIdCounter = 0;

tasks = [
  {
    id: ++taskIdCounter,
    name: "Tarefa A",
    state: "aguardando",
  },
  {
    id: ++taskIdCounter,
    name: "Tarefa B",
    state: "aguardando",
  },
  {
    id: ++taskIdCounter,
    name: "Tarefa C",
    state: "andamento",
  },
];

// Controlador das tarefas
const taskController = {
  // Obter todas as tarefas
  getTasks() {
    return tasks;
  },

  // Criar uma nova tarefa
  createTask(req, res) {
    const { name, state } = req.body;

    const task = {
      id: ++taskIdCounter,
      name: name,
      state: state,
    };

    tasks.push(task);

    res.redirect("/");
  },

  // Mudar o estado de uma tarefa
  updateTaskState(req, res) {
    const task = tasks.find((task) => task.id === parseInt(req.params.id));
    if (!task) {
      return res.status(404).send("Tarefa não encontrada.");
    }

    if (task.state === "aguardando") {
      task.state = "andamento";
    } else {
      return res.status(400).send("A tarefa já está em andamento.");
    }

    res.redirect("/");
  }
};

module.exports = taskController;
