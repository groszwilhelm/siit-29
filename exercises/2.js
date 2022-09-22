const firstInput = Number(prompt('Please input your first number!'));
const secondInput = Number(prompt('Please input your second number!'));

let max;

if (firstInput > secondInput) {
  max = firstInput;
} else {
  max = secondInput;
}

console.log(max);

// Ternary expression 

const max2 = firstInput > secondInput ? firstInput : secondInput;

console.log(max2);

// Solving via Math.max method

console.log(Math.max(firstInput, secondInput, firstInput));
