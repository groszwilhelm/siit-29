
/**
 * 1. We should list (read) all todos that are stored on the server (GET /todos)
 * 2. Create todo functionality (POST /todos)
 * 3. Delete todo (DELETE /todos/:id)
 * 4. Update todo (PATCH/PUT /todos/:id)
 */
const titleElement = document.querySelector('[data-title]');
const descriptionElement = document.querySelector('[data-description]');
const deadlineElement = document.querySelector('[data-deadline]');
const createTodoButton = document.querySelector('[data-createTodo]');
const editTodoButton = document.querySelector('[data-editTodo]');

const url = 'http://localhost:3000';
const endpoint = '/todos';

retrieveTodoList();

function retrieveTodoList() {
  fetch(url + endpoint + '?_page=2&_limit=2')
    .then((response) => response.json())
    .then((todos) => listTodos(todos))
}

function listTodos(todos) {
  const template = document.querySelector('#todo-card');
  const output = document.querySelector('[data-todoList]');

  output.innerHTML = '';
  titleElement.value = '';
  descriptionElement.value = '';
  deadlineElement.value = '';
  createTodoButton.classList.remove('hidden');
  editTodoButton.classList.add('hidden');

  for (const todo of todos) {
    const clonedTemplate = template.content.cloneNode(true);

    const h3 = clonedTemplate.querySelector('[data-todoTitle]');
    h3.textContent = todo.title;

    const description = clonedTemplate.querySelector('[data-todoDescription]');
    description.textContent = todo.description;

    const deadline = clonedTemplate.querySelector('[data-todoDeadline]');
    deadline.textContent = todo.deadline;

    const deleteButton = clonedTemplate.querySelector('[data-delete]');
    deleteButton.setAttribute('id', todo.id);

    deleteButton.addEventListener('click', () => {
      console.log({ button: deleteButton });
      // fetch(`${url}${endpoint}/${todo.id}`)
      fetch(url + endpoint + '/' + deleteButton.getAttribute('id'), { method: 'DELETE' })
        .then(() => retrieveTodoList());
    });

    const editButton = clonedTemplate.querySelector('[data-edit]');

    editButton.addEventListener('click', () => {
      titleElement.value = todo.title;
      descriptionElement.value = todo.description;      
      deadlineElement.value = todo.deadline;

      createTodoButton.classList.add('hidden');
      editTodoButton.classList.remove('hidden');
      editTodoButton.setAttribute('id', todo.id);
    });

    output.appendChild(clonedTemplate);
  }
}

editTodoButton.addEventListener('click', (event) => {
  event.preventDefault();

  const title = titleElement.value;
  const description = descriptionElement.value;
  const deadline = deadlineElement.value;
  const id = editTodoButton.getAttribute('id');

  const body = {
    title,
    description,
    deadline,
  };
  const json = JSON.stringify(body);

  fetch(url + endpoint + '/' + id, {
    method: 'PUT',
    body: json,
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(() => {
      retrieveTodoList();
    });
});

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

createTodoButton.addEventListener('click', function(event) {
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

function sayGoodbye() {
  console.log('Goodbye');
}

let newName = 'Stefan';

// Encapsulation
function sayHello() {
  const name = "Ion";
  const lastName = 'Hello';
  newName = 'Ion';

  console.log(name);

  return function greeter() {
    debugger;
    console.log('Hello ' + newName);
  }
}

newName = 'Altceva';

// document.addEventListener('click', () => {
//   // Currying 
//   sayHello()();

//   const greeterFunction = sayHello();
//   greeterFunction();
// });

function yolo() {
  console.log(arguments[0]);
}

yolo(1, 2, 3);

