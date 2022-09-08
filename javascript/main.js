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

const userInput = prompt('Please type in your test number');
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
