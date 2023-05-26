const express = require("express");
const router = express.Router();

// Importar o controlador das tarefas
const taskController = require("../controllers/taskController");

// Rota para exibir a página inicial
router.get("/", (req, res) => {
  const tasks = taskController.getTasks();
  let state_default = "";

  let params = {
    tasks: tasks,
    state: [
      {
        name: "Aguardando",
        value: "aguardando",
        selected: state_default == "aguardando",
      },
      {
        name: "Andamento",
        value: "andamento",
        selected: state_default == "andamento",
      },
    ],
  };

  res.render("index", params);
});

// Rota para criar uma nova tarefa
router.post("/tasks", (req, res) => {
  taskController.createTask(req, res);
});

// Rota para mudar o estado de uma tarefa
router.get("/tasks/:id", (req, res) => {
  taskController.updateTaskState(req, res);
});

// Rota para finalizar uma tarefa
router.get("/tasks/del/:id", (req, res) => {
  taskController.finishTask(req, res);
});

module.exports = router;
