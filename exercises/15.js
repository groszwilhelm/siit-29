function totalDistance(inputArr) {
  let sum = 0;

  for (const { distance } of inputArr) {
    sum = sum + distance;
    // sum += distance
  }

  return sum;
}

//don't edit below
console.log(totalDistance(demoArr));
