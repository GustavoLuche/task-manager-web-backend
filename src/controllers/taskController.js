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
};

module.exports = taskController;
