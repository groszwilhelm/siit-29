const userInput = prompt('Please enter 3 numbers, and use comma separated values');

// Method one via variable and loop
const userInputAsList = userInput.split(',');
let max = -Infinity;

for (let i = 0; i < userInputAsList.length; i++) {
  const userInputNumber = Number(userInputAsList[i]);

  if (userInputNumber > max) {
    max = userInputNumber;
  }
}

console.log(max);

// Method 2 sort the list and take the last number

userInputAsList.sort();

console.log('Max number in list is:', userInputAsList[userInputAsList.length - 1]);
