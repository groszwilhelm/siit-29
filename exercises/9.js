function pluck(inputArr, key) {
  // 1. Create a new empty list
  // 2. Loop through the input array
  // 3. Extract color / distance (key) from object and push them in the new list
  // 4. return the new list

  const arr = [];

  for (const item of inputArr) {
    arr.push(item[key]);
  }

  return arr;
}

//don't change this
console.log({
  pluckColors: pluck(demoArr, 'color'),
  pluckDistances: pluck(demoArr, 'distance'),
})
