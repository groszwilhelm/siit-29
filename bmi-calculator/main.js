/**
 * Calculate BMI 
 * 
 * How do I do it?
 * weight / height ** 2
 * 
 * We would need:
 * 
 * 2 inputs
 * output
 * button for calculate
 */

const outputElement = document.querySelector('[data-output]');
const weightElement = document.querySelector('[data-weight]');
const heightElement = document.querySelector('[data-height]');
const calculateElement = document.querySelector('[data-calculate]');
const bmiResultElement = document.querySelector('[data-bmiResult]');

// Node List
const inputElements = document.querySelectorAll('input');

// Converts node list to a JavaScript Array
const inputElementsAsJsArray = Array.from(inputElements);

for (const element of inputElementsAsJsArray) {
  console.log({ element });
}

// This event listener gets stored in memory
// This can cause memory leaks be sure to remove when not needed anymore
calculateElement.addEventListener('click', calculateBmi, { once: false });

function calculateBmi(event) {
  event.preventDefault();

  event.stopPropagation();

  const bmi = Number(weightElement.value) / (Number(heightElement.value) ** 2);

  outputElement.textContent = bmi;

  let bmiResult;

  if (bmi < 18.5) {
    bmiResult = 'Underweight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bmiResult = 'Healthy Weight';
  } else if (bmi >= 25 && bmi <= 29.9) {
    bmiResult = 'Overweight';
  } else {
    bmiResult = 'Obesity';
  }

  bmiResultElement.textContent = bmiResult;
  // calculateElement.removeEventListener('click', calculateBmi);
}

function navigateToOtherPage() {
  // navigate
  // calculateElement.removeEventListener('click', calculateBmi);
}


const firstButton = document.querySelector('[data-firstButton]');
const secondButton = document.querySelector('[data-secondButton]');

firstButton.addEventListener('click', () => {
  secondButton.removeEventListener('click', secondButtonClickHandler);
  secondButton.addEventListener('click', secondButtonClickHandler);
  console.log('1st button clicked');
});

function secondButtonClickHandler() {
  secondButton.classList.toggle('red');
  console.log('2nd button clicked');
}

// Adding multiple listeners and remove them;
const eventListeners = [
  {
    eventName: 'click',
    function: secondButtonClickHandler,
  },
  {
    eventName: 'input',
    function: secondButtonClickHandler,
  },
  {
    eventName: 'hover',
    function: secondButtonClickHandler,
  },
];

for (const eventListener of eventListeners) {
  secondButton.addEventListener(eventListener.eventName, eventListener.function);
}

for (const eventListener of eventListeners) {
  secondButton.removeEventListener(eventListener.eventName, eventListener.function);
}

// In case we have many event listeners attached to an element.
// We can use the following solution:
// https://bobbyhadz.com/blog/javascript-remove-all-event-listeners-from-element#:~:text=To%20remove%20all%20event%20listeners,t%20copy%20the%20event%20listeners.
