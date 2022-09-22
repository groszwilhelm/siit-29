const grades = [4, 3, 5, 9, 1, 6, 7, 10, 10];
let sum = 0;

for (let i = 0; i < grades.length; i++) {
  sum = sum + grades[i];
}

const average = Math.round(sum / grades.length);

console.log(average);
