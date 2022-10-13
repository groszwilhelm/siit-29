
/**
 * 1. We should list (read) all todos that are stored on the server (GET /todos)
 * 2. Create todo functionality (POST /todos)
 * 3. Delete todo (DELETE /todos/:id)
 * 4. Update todo (PATCH/PUT /todos/:id)
 */

const url = 'http://localhost:3000';
const endpoint = '/todos';

fetch(url + endpoint)
  .then((response) => response.json())
  .then((todos) => listTodos(todos))

function listTodos(todos) {
  const template = document.querySelector('#todo-card');
  const output = document.querySelector('[data-todoList]');
  
  for (const todo of todos) {
    const clonedTemplate = template.content.cloneNode(true);
    
    const h3 = clonedTemplate.querySelector('[data-todoTitle]');
    h3.textContent = todo.title;

    const description = clonedTemplate.querySelector('[data-todoDescription]');
    description.textContent = todo.description;
    
    const deadline = clonedTemplate.querySelector('[data-todoDeadline]');
    deadline.textContent = todo.deadline;

    output.appendChild(clonedTemplate);
  }
}
