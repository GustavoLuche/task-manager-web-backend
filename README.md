# Task Manager Web Backend

Este é o backend para uma aplicação web de gerenciamento de tarefas. O sistema permite criar, atualizar e finalizar tarefas, além de gerenciar sua situação e prioridade. O backend foi desenvolvido utilizando HTML, CSS, JavaScript e Node.js, juntamente com as bibliotecas Express e Mustache.

## Configuração do Ambiente

Certifique-se de ter o Node.js instalado em seu sistema. Para instalar as dependências do projeto, execute o seguinte comando:

```bash
npm install
```


## Executando a Aplicação

Para iniciar o servidor, utilize o seguinte comando:

```bash
npm start
```


O servidor estará disponível em [http://localhost:3000](http://localhost:3000).

## Funcionalidades

- Criação de novas tarefas com nome, situação ("aguardando" ou "em andamento") e prioridade padrão.
- Mudança de uma tarefa no estado "aguardando" para o estado "em andamento".
- Finalização de uma tarefa que está "em andamento".
- Modificação da prioridade de uma tarefa por meio de cores de fundo.
- Validação de nome da tarefa (mínimo de 3 letras) e situação da tarefa (valor válido).
- Armazenamento das tarefas e suas respectivas situações na sessão do usuário.

## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões, melhorias ou encontrar algum problema, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).



