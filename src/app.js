const express = require("express");
const path = require("path");

const app = express();

// Configuração do mecanismo de templates Mustache
const mustacheExpress = require("mustache-express")
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));

// Middleware para tratar dados do corpo da requisição
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware de validação dos dados recebidos
const validationMiddleware = require('./utils/validationMiddleware');

// Rotas relacionadas às tarefas
const taskRoutes = require("./routes/taskRoutes");
app.use("/", validationMiddleware, taskRoutes);

module.exports = app;
