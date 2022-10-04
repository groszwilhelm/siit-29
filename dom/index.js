/**
 * DOM - Document Object Model - document
 *  -> Interact with html document
 * 
 * BOM - Browser Object Model - window
 *  -> Interact with the browser window
 */

/**
 * What can we do via DOM Manipulation?
 * 
 * - Modify html elements
 * - Style html elements
 * - Add new elements
 * - Remove html elements
 * - Change attributes, classes, styles
 * - Read values from HTML to use in JS
 * - Handle DOM Events (click, input)
 * 
 */

/**
 * Let's make heading h1 text color green.
 * 1. Select element
 * 2. Change color to green
 */

// document.getElementById
// document.getElementByClassName
// document.getElementByName
// document.getElementByTagName
// document.getElementsByClassName

const heading = document.querySelector('[data-title]');
const button = document.querySelector('[data-button]');

button.addEventListener('click', () => {
  const className = 'dom-title--red';

  if (!heading.className.includes(className)) {
    heading.classList.add(className);
  } else {
    heading.classList.remove(className);
  }

  /**
   * Change element text
   */
  heading.textContent = `<img src='#' onerror=alert(1) />`;

  heading.innerHTML = `
    <img src='#' onerror=alert(1) />
  `;

  // Toggle above code is equal to this one
  // heading.classList.toggle(className);
});

console.log(heading);

const emailInput = document.querySelector('[data-email]');
const output = document.querySelector('[data-output]');

emailInput.addEventListener('input', () => {
  output.textContent = emailInput.value;
});

// heading.style.color = 'blue';
// heading.style.fontSize = '40px';

// Snake case helloWorld 
// Camel case HelloWorld

/**
 * Create a counter app!
 * 
 * Should have an initial value
 * When pressing + button it should add 1 to the initial value
 * When pressing - button it should subtract 1 from the initial value
 * 
 * 
 * 2 button elements
 * span with value 0 -> <output> element
 */

// State variable
let count = 0;
const countElement = document.querySelector('[data-count]');
const incrementButton = document.querySelector('[data-increment]');
const decrementButton = document.querySelector('[data-decrement]');
const incrementByInputElement = document.querySelector('[data-incrementBy]');

incrementButton.addEventListener('click', incrementClickHandler);
decrementButton.addEventListener('click', decrementClickHandler);
countElement.addEventListener('input', countInputHandler);

document.addEventListener('keyup', (event) => {
  console.log(event);

  if (event.code === 'Tab' || event.keyCode === 9) {
    console.log('!!!!!!!');
  }

});

function incrementClickHandler() {
  // When user clicks the button this function gets triggered.
  // count++;
  count = count + Number(incrementByInputElement.value);
  // countElement.textContent = count;
  countElement.value = count;
};

function decrementClickHandler() {
  // When user clicks the button this function gets triggered.
  count = count - Number(incrementByInputElement.value);
  // countElement.textContent = count;
  countElement.value = count;
}
function countInputHandler() {
  count = Number(countElement.value);
}
