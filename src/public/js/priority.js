// Função para modificar o Href
function updateHref(taskId) {
  const taskElement = document.querySelector(`div[data-id="${taskId}"]`);
  const priority = taskElement.classList[0]; // Obtém a primeira classe da tarefa
  const linkElement = taskElement.querySelector("a"); // Seleciona o elemento <a> dentro da <div>
  linkElement.href = updateURL(linkElement.href, priority); // Atualiza o valor do atributo href
}

// Função para modificar a URL
function updateURL(str, priority) {
  // const str = "tasks/{{id}}?priority=alto";
  const delimiter = "=";
  const extractedStr = str.substring(0, str.indexOf(delimiter) + 1);
  const novaStr = extractedStr + priority;
  return novaStr;
}

// Função para modificar a prioridade das tarefas
function changePriority(taskId) {
  const taskElement = document.querySelector(`div[data-id="${taskId}"]`);
  const priority = taskElement.classList[0]; // Obtém a primeira classe da tarefa

  if (priority === "default") {
    taskElement.classList.remove("default");
    taskElement.classList.add("alto");
  } else if (priority === "alto") {
    taskElement.classList.remove("alto");
    taskElement.classList.add("medio");
  } else if (priority === "medio") {
    taskElement.classList.remove("medio");
    taskElement.classList.add("baixo");
  } else if (priority === "baixo") {
    taskElement.classList.remove("baixo");
    taskElement.classList.add("default");
  }
}

// Adiciona evento de clique em todas as tarefas
const taskElements = document.querySelectorAll("li[data-id]");
taskElements.forEach((taskElement) => {
  taskElement.addEventListener("click", () => {
    const taskId = taskElement.dataset.id;
    changePriority(taskId);
    updateHref(taskId);
  });
});
