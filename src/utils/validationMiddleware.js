// Middleware de validação dos dados recebidos
function validationMiddleware(req, res, next) {
  const { name, state } = req.body;

  if (name && name.trim().length < 3) {
    return res
      .status(400)
      .send("O nome da tarefa deve ter pelo menos 3 letras.");
  }

  if (state && state !== "aguardando" && state !== "andamento") {
    req.body.state = "aguardando"; // Define o estado padrão como 'aguardando' se o valor for inválido
  }

  next();
}

module.exports = validationMiddleware;
