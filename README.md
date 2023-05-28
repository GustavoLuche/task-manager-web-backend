# Task Manager Web Backend

Este é o backend para uma aplicação web de gerenciamento de tarefas. O sistema permite criar, atualizar e finalizar tarefas, além de gerenciar sua situação e prioridade. O backend foi desenvolvido utilizando HTML, CSS, JavaScript e Node.js, juntamente com as bibliotecas Express e Mustache.

## Funcionalidades

- Criação de novas tarefas com nome, situação ("aguardando" ou "em andamento") e prioridade padrão.
- Mudança de uma tarefa no estado "aguardando" para o estado "em andamento".
- Finalização de uma tarefa que está "em andamento".
- Modificação da prioridade de uma tarefa por meio de cores de fundo.
- Validação de nome da tarefa (mínimo de 3 letras) e situação da tarefa (valor válido).
- Armazenamento das tarefas e suas respectivas situações na sessão do usuário.

## Requisitos de Instalação
- Node.js (v12.0.0 ou superior)
- NPM (v6.0.0 ou superior)

## Instalação
1. Clone o repositório para sua máquina local:
```bash
git clone https://github.com/GustavoLuche/task-manager-web-backend.git
```
2. Navegue até o diretório do projeto:
```bash
cd task-manager-web-backend\src
```
3. Instale as dependências do projeto:
```bash
npm install
```

## Configuração
1. Crie um arquivo .env na raiz do projeto e defina a variável de ambiente SECRET com uma chave secreta para a sessão. Por exemplo:
```env
SECRET=chave-secreta-aqui
```
2. Execute o comando a seguir para iniciar o aplicativo:
```bash
npm start
```

3. Acesse o aplicativo em seu navegador em [http://localhost:3000](http://localhost:3000).

## Estrutura do Projeto
A estrutura do projeto está organizada da seguinte forma:
```bash
src/
  ├── config/
  │   └── server.js
  ├── controllers/
  │   └── taskController.js
  ├── public/
  │   ├── css/
  │   │   └── style.css
  │   └── js/
  │       └── priority.js
  ├── routes/
  │   └── taskRoutes.js
  ├── utils/
  │   └── validationMiddleware.js
  ├── views/
  │   └── index.mustache
  ├── .env
  ├── app.js
  ├── package.js
  └── .gitignore
```

- O diretório `config/` contém o arquivo `server.js`, responsável por criar o servidor HTTP e definir a porta para o aplicativo.
- O diretório `controllers/` contém o arquivo `taskController.js`, onde estão definidos os controladores das tarefas, incluindo funções para obter todas as tarefas, criar uma nova tarefa, atualizar o estado de uma tarefa e finalizar uma tarefa.
- O diretório `public/` contém os arquivos estáticos do aplicativo, como os estilos CSS (`css/style.css`) e os scripts JavaScript (`js/priority.js`).
- O diretório `routes/` contém o arquivo `taskRoutes.js`, onde estão definidas as rotas do aplicativo, incluindo as rotas para exibir a página inicial, criar uma nova tarefa, atualizar o estado de uma tarefa e finalizar uma tarefa.
- O diretório `utils/` contém o arquivo `validationMiddleware.js`, que é um middleware de validação dos dados recebidos nas requisições.
- O diretório `views/` contém o arquivo `index.mustache`, que é o template Mustache para a página inicial do aplicativo.
- O arquivo `.env` é usado para armazenar as variáveis de ambiente do aplicativo, como a chave secreta para a sessão.
- O arquivo `app.js` é o arquivo principal da aplicação, que configura o servidor Express e os middlewares.
- O arquivo `package.js` é o arquivo de manifesto do projeto, contendo as dependências do Node.js.
- O arquivo `.gitignore` lista os arquivos e diretórios que devem ser ignorados pelo controle de versão Git.

## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões, melhorias ou encontrar algum problema, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).



