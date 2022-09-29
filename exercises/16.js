function getElemsWithUniqueColors(inputArr) {
  // 1. Create an empty list
  // 2. Loop through the inputArr
  // 3. For each object in inputArr check if it matches with other objects, don't include other objects with same color in the new list.

  const filteredList = [];

  for (const obj of inputArr) {
    if (!atLeastOneOfColor(filteredList, obj.color)) {
      filteredList.push(obj);
    }
  }

  return filteredList;
}

// With Array methods
function getElemsWithUniqueColors2(inputArr) {
  const filteredList = [];

  for (const obj of inputArr) {
    const hasItemWithColor = filteredList.find(filteredObj => filteredObj.color === obj.color);

    if (!hasItemWithColor) {
      filteredList.push(obj);
    }
  }

  return filteredList;
}

// With Array methods
function getElemsWithUniqueColors3(inputArr) {
  const filteredListColors = {};
  const filteredList = [];

  for (const obj of inputArr) {
    if (!filteredListColors[obj.color]) {
      filteredListColors[obj.color] = true;
      filteredList.push(obj);
    }
  }

  return filteredList;
}

//don't edit below
console.log(getElemsWithUniqueColors3(demoArr));

