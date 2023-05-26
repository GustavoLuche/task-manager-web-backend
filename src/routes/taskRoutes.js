const express = require("express");
const router = express.Router();

// Importar o controlador das tarefas
const taskController = require("../controllers/taskController");

// Rota para exibir a página inicial
router.get("/", (req, res) => {
    
    const tasks = taskController.getTasks();

    let params = {
        tasks: tasks
    }

    res.render('index', params);
});

module.exports = router;
