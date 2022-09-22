const num = 4;

// 1. We know we have a max number 20
// 2. Multiply all the numbers from 1 to 20

let sum = 1;

for (let i = 1; i <= num; i++) {
  sum *= i;  // sum = sum * i;
}

console.log(sum);
