let tasks = [];
let taskIdCounter = 0;

// Controlador das tarefas
const taskController = {
  // Obter todas as tarefas
  getTasks(req) {
    return req.session.tasks || [];
  },

  // Criar uma nova tarefa
  createTask(req, res) {
    const { name, state } = req.body;

    const task = {
      id: ++taskIdCounter,
      name: name,
      state: state,
    };

    req.session.tasks = req.session.tasks || [];
    req.session.tasks.push(task);

    res.redirect("/");
  },

  // Mudar o estado de uma tarefa
  updateTaskState(req, res) {
    const taskId = parseInt(req.params.id);
    console.log(taskId);
    const task = req.session.tasks.find((task) => task.id === taskId);

    if (!task) {
      return res.status(404).send("Tarefa não encontrada.");
    }

    if (task.state === "aguardando") {
      task.state = "andamento";
    } else {
      return res.status(400).send("A tarefa já está em andamento.");
    }

    res.redirect("/");
  },

  // Finalizar uma tarefa
  finishTask(req, res) {
    const taskId = parseInt(req.params.id);
    const task = req.session.tasks.find((task) => task.id === taskId);
    if (!task) {
      return res.status(404).send("Tarefa não encontrada.");
    }

    if (task.state === "aguardando") {
      return res
        .status(400)
        .send("A tarefa está aguardando e não pode ser finalizada.");
    }
    task.state = "finalizado";
    res.redirect("/");
  },
};

module.exports = taskController;
