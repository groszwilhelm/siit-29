
/**
 * 1. We should list (read) all todos that are stored on the server (GET /todos)
 * 2. Create todo functionality (POST /todos)
 * 3. Delete todo (DELETE /todos/:id)
 * 4. Update todo (PATCH/PUT /todos/:id)
 */

const url = 'http://localhost:3000';
const endpoint = '/todos';

retrieveTodoList();

function retrieveTodoList() {
  fetch(url + endpoint)
    .then((response) => response.json())
    .then((todos) => listTodos(todos))
}

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

/**
 * strongly typed programming languages
 * loosely typed languages
 */

// loosely typed languages

// let number = 2;
// number = 'Ion';

// // strongly typed programming languages

// let number: number = 2;

// // this won't be permitted
// number = 'string';

// const arr = [1, 2, 3, 4, 5, 6];

// // Mutating the original array
// arr.push(7);

// const arr2 = [1, 2, 3, 4, 5, 6];
// arr.push(7);
// // .map , .filter

// let hello = 10;

// hello = 12;

// let number = 10;

// // Primitives are passed by value
// function sayNumber(arg) {
//   arg = 12;
//   console.log(arg);
// }

// sayNumber(number);
// console.log(number);

// const numberObject = {
//   prop1: 'Hello world',
// };

// // Objects (also arrays) are passed by reference
// function sayNumber(arg) {
//   // This produces a mutation
//   arg.prop2 = 'Hello world from function';
//   console.log(arg);
//   // How to solve mutation problem?
//   // Create a copy of the object / array
// }

// sayNumber(numberObject);
// console.log(numberObject);

const titleElement = document.querySelector('[data-title]');
const descriptionElement = document.querySelector('[data-description]');
const deadlineElement = document.querySelector('[data-deadline]');
const createTodo = document.querySelector('[data-createTodo]');

createTodo.addEventListener('click', function(event) {
  event.preventDefault();
  event.stopPropagation();

  const title = titleElement.value;
  const description = descriptionElement.value;
  const deadline = deadlineElement.value;

  const data = {
    title,
    description,
    deadline,
  };

  const json = JSON.stringify(data);

  fetch(url + endpoint, {
    method: 'POST',
    body: json,
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => { 
      retrieveTodoList()
    });

});
