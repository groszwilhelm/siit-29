/**
 * Prompt users for a number, if the user does not pass a number, repeat the prompt.
 * 
 * @param {string} message The message to display to the user
 * @returns {number | null} The number provided or null if the user cancels the prompt.
 */
function getNumberFromUser(message) {
  let val, num;
  do {
    val = prompt(message);
    if(val === null) {
      return null;
    }
    num = Number(val);
  } while (Number.isNaN(num) || val === '');
  return num;
}
/**
 * Round a number to the specified precision.
 * 
 * @param {number} num The number to round
 * @param {number} precision The number of decimals the number should have
 * @returns {number} The rounded number.
 */
function roundNumberToPrecision(num, precision = 2) {
  return Number(num.toFixed(precision));
}

/**
 * Get a random whole number inside an interval, optionally can be floating point.
 * @param {number} min The minimal value, default: 0
 * @param {number} max The maximal value, default: 100
 * @param {number} maxPrecision How many decimals the number should have, default: 0
 * @returns {number} A random number.
 */
function getRandomNumber(min = 0, max = 100, maxPrecision = 0) {
  const randomFloat = Math.random() * (max - min) + min;
  let precision = 0;
  if(maxPrecision > 0) {
    precision = getRandomNumber(0, maxPrecision);
  }

  return roundNumberToPrecision(randomFloat, precision);
}

/**
 * Get an array of items starting from random numbers to which you can apply an optional mapping function.
 * @param { {min: 0, max: 100, length: 5 allowFloat: false, mappingFn: (n) => n} } config A configuration array.
 * min: {number} The minimal value, default: 0
 * max: {number} The maximal value, default: 100 
 * length: {number} How many items should be in the array, default: 5
 * allowFloat: {boolean} Whether to allow floating point numbers in the array or not, default false
 * mappingFn: {function} A function applied to each number in order to transform it, default: noop
 * @returns { [*] } An array of values resulting by mapping random numbers using the provided mapping function
 */
function getNumberArray({ min = 0, max = 100, length = 5, allowFloat = false, mappingFn = (n) => n }) {
  const arr = [];
  for(let i = 0; i < length; i++) {
    arr.push(mappingFn(getRandomNumber(min, max, allowFloat ? 2 : 0)));
  }
  return arr;
}


const demoArr = [
  {id: 1, color: 'red', height: 15, width: 20, distance: 10},
  {id: 2, color: 'green', height: 5, width: 30, distance: 15},
  {id: 3, color: 'turqoize', height: 7, width: 9, distance: 8},
  {id: 4, color: 'blue', height: 2, width: 3, distance: 3},
  {id: 5, color: 'red', height: 10, width: 10, distance: 2},
  {id: 6, color: 'crimson', height: 7, width: 8, distance: 16},
];
