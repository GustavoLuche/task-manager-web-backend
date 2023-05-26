const express = require("express");
const path = require("path");

const app = express();

// Middleware para tratar dados do corpo da requisição
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// Rotas relacionadas às tarefas
const taskRoutes = require("./routes/taskRoutes");
app.use("/", taskRoutes);

module.exports = app;
