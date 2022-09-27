function getObjectsWithMinArea(inputArr, minArea = 100) {
  // 1. call calclulateAreasV2 with inputArr
  // 2. loop through inputArrWithArea
  // 3. add if statement with condition: area <= minArea
  // 4. return list only with the above condition met

  const inputArrWithArea = calclulateAreasV2(inputArr);

  const filteredList = [];

  for (const inputObject of inputArrWithArea) {
    if (inputObject.area <= minArea) {
      filteredList.push(inputObject);
    }
  }

  return filteredList;
}

// do not edit below:
console.log({ 'Min area is 6': getObjectsWithMinArea(demoArr, 6),
  'Min area is 5': getObjectsWithMinArea(demoArr, 5),
  'Min area is 10': getObjectsWithMinArea(demoArr, 10),
  'Min area is default': getObjectsWithMinArea(demoArr),
})
