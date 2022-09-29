function totalDistance(inputArr) {
  let sum = 0;

  for (const { distance } of inputArr) {
    sum = sum + distance;
    // sum += distance
  }

  return sum;
}


function totalDistance2(inputArr) {
  // acc, curr 
  /**
   * acc -> accumulator (sum)
   * curr -> currentElement in the iteration (for loop)
   */
  return inputArr.reduce((sum, currentValue) => {
    return sum + currentValue.distance;
  }, 0);
}

//don't edit below
console.log(totalDistance(demoArr));
