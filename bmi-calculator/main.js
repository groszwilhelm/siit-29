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

calculateElement.addEventListener('click', calculateBmi);

function calculateBmi(event) {
  event.preventDefault();

  const bmi = Number(weightElement.value) / (Number(heightElement.value) ** 2);

  outputElement.textContent = bmi;

  let bmiResult;

  if (bmi < 18.5) {
    bmiResult = 'Underweight';
  } else if (bmi >= 18.5 && bmi <= 24.9 ) {
    bmiResult = 'Healthy Weight';
  } else if (bmi >= 25 && bmi <= 29.9) {
    bmiResult = 'Overweight';
  } else {
    bmiResult = 'Obesity';
  }

  bmiResultElement.textContent = bmiResult;
}
