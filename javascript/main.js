// We need js in order to give instructions
// We should achieve this via functions
// We have variables at our disposal

// var let const 
/**
 * var - old way of doing things
 * 
 * let, const - new way of working
 * 
 * const > let > var
 */

// assign a value via =
var ageIon = 23;
let ageMaria = 34;
const ageCostin = 35;

const greeting = 'Hello world';
const greeting2 = 'Hello world 2';

// Declared a constant pi and assigned value 3.14
const pi = 3.14;

// console.log(pi);
/**
 * Primitive data types:
 * 
 * words -> string
 * numbers -> Max 64 bytes
 * boolean -> true or false
 * undefined -> no value assigned -> In general it's assigned by JavaScript
 * null -> it doesn't value -> In general assigned by the developer
 * Symbol -> Unique values in JavaScript: Symbol('hello')
 * BigInt -> 234n -> Exceeds 64 bytes
 * 
 * Complex data types:
 * array (list) - ex: shopping list, etc.
 * object - ex: car, house, person
 * 
 */

// ! Not defined error -> means we didn't define the actual variable.

// boolean
const weAreSiit29 = true;

// undefined
let variableUndefined;


let variableUndefined2 = 'Siit-29';

variableUndefined2 = null;

/**
 * Variable naming restrictions
 * 
 * Variable name can only start with a letter or _ or $
 * 
 */

const hello2 = '';
const houseCat = 'Tom';

/**
 * Addition: +
 * Subtraction: - 
 * Multiply: *
 * Divide: /
 * Power: **
 * Modulo: %
 */

console.log();

let sum = 10;

// Expression -> code that evaluates to a value
sum = (sum + 10) * 2;

console.log(sum);

const hello = 'Hello';
const world = 'World';

// Concatenation 
console.log(hello + ' ' + world);

let name = 'Tom';
name += ' Jerry';

console.log(name);

const stringNumber = '123';

// Template literal -> backticks -> it lets us interpolate expressions via ${}
console.log(`${hello} ${world} ${Number(stringNumber)}`);

console.log(Number('123') + 3);
// 🐞 bug!
console.log('123' + 3);
console.log(123 + 3);

/**
 * Conditional statements - cross road
 */

// How would we determine if a number is odd or even

const userInput = 43; //prompt('Please type in your test number');
const userInputAsNumber = Number(userInput);
// Converts expression to boolean
// Truthy or Falsy values
const isEven = userInputAsNumber % 2 == 0;

if (isEven) {
  console.log('Your number is even');
} else {
  console.log('Your number is odd');
}

console.log(userInputAsNumber + 100);
console.log(userInput + 200);

/**
 * If a user inputs a number lower than 10 show Hello
 * If a user inputs a number lower than 20 show Hi
 * If a user inputs a number lower than 30 show Hello World
 * If the number is anything bigger than 30 show Awesome
 */

let userInput2 = 33; // prompt('Please input a number');

if (userInput2 === '') {
  userInput2 = promptInvalidUserInput();
}

const userInput2AsNumber = Number(userInput2);

if (isNaN(userInput2AsNumber)) {
  userInput2AsNumber = Number(promptInvalidUserInput());
}

if (userInput2AsNumber < 10) {
  console.log('Hello');
} else if (userInput2AsNumber < 20) {
  console.log('Hi');
} else if (userInput2AsNumber < 30) {
  console.log('Hello World');
} else if (userInput2AsNumber >= 30) {
  console.log('Awesome');
}

/**
 * By default all function produce undefined as a result;
 * In order for a function to produce a result we need to: return;
 * Pure function -> Doesn't modify things from outside, only relies on inputs to produce a value;
 */
function promptInvalidUserInput() {
  console.log('You entered an invalid information! Please enter a number');
  const userInput = prompt('You entered an invalid information! Please enter a number');

  return userInput;
}

/**
 * If user input is between 10 and 15 display Hello user
 * 
 * if user input is 20 or 30 display YES!
 */

/**
 * Logical operators
 * and && 
 * or ||
 */

const userInput3 = 15;

if (userInput3 => 10 && userInput3 <= 15) {
  console.log('Hello user');
}

if (userInput3 === 20 || userInput3 === 30) {
  console.log('Yes!');
}
/**
 * When checking for equality between anything
 * is user input is 20 show Yes 20
 * is user input is 30 show Yes 30
 * is user input is 40 show Yes 40
 * else 50
 * 
 * if user input is 50 or 60 Yes something!
 */

const userInput4 = 50;

switch (userInput4) {
  case 20: {
    console.log('Yes 20');
    break;
  }
  case 30: {
    console.log('Yes 30');
    break;
  }
  case 40: {
    console.log('Yes 40');
    break;
  }
  case 50:
  case 60: {
    console.log('Yes something!');
    break;
  }
  default: {
    console.log('Yes 50');
  }
}

/**
 * Complex data types
 * 
 * Array - Will contain primitive values or other complex data types
 * Object - Will contain primitive values or other complex data types
 */

const shoppingList = ['Turkey', 'Bread', 'Meat', 'Vegetables', 'Fruits'];
// All items are stored on an index
/**
 * Bread - 0
 * Meat - 1
 * Vegetables - 2
 * Fruits - 3
 */

console.log(shoppingList);

// Adds item to the end of the list
shoppingList.push('Something new');

// Adds item to the beginning of the list
shoppingList.unshift('Start of the list');

// Remove element from the end of the list
shoppingList.pop();

// Remove first element from the list
shoppingList.shift();

// Remove an element based on the index
// shoppingList.splice(2, 2);

// find the index of an item

const toRemoveIndex = shoppingList.indexOf('Vegetables');
shoppingList.splice(toRemoveIndex, 1);

console.log(shoppingList);

/**
 * const shoppingList = ['Turkey', 'Bread', 'Meat', 'Vegetables', 'Fruits'];
 *  ['Turkey: 0', 'Bread: 1', 'Meat: 2', 'Vegetables: 3', 'Fruits: 4'];
 */

const quantity = [3, 10, 6, 20, 15];
const shoppingListWithQuantity = [];

for (let index = 0; index < shoppingList.length; index++) {
  const product = shoppingList[index];
  const qnt = quantity[index];

  shoppingListWithQuantity.push(`${product}: ${qnt}`);
}

console.log(shoppingListWithQuantity);
