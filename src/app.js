const express = require("express");
const path = require("path");

const app = express();

// Configuração do mecanismo de templates Mustache
const mustacheExpress = require("mustache-express");
app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", path.join(__dirname, "views"));

// Configuração do middleware de sessão
const session = require("express-session");
require("dotenv").config();
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// Middleware para tratar dados do corpo da requisição
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Middleware de validação dos dados recebidos
const validationMiddleware = require("./utils/validationMiddleware");

// Rotas relacionadas às tarefas
const taskRoutes = require("./routes/taskRoutes");
app.use("/", validationMiddleware, taskRoutes);

module.exports = app;
