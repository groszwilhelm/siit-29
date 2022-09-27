function getElemsWithUniqueColors(inputArr) {
  // 1. Create an empty list
  // 2. Loop through the inputArr
  // 3. For each object in inputArr check if it matches with other objects, don't include other objects with same color in the new list.

  const filteredList = [];

  for (const obj of inputArr) {
    for (const otherObj of inputArr) {
      if (obj !== otherObj) {
        if (otherObj.color !== obj.color) {
          filteredList.push(obj);
        }
      }
    }
  }

  return filteredList;
}

//don't edit below
console.log(getElemsWithUniqueColors(demoArr));

