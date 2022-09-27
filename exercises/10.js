function calclulateAreas(inputArr) {
  // 1. Create an empty list 
  // 2. Loop through inputArr (function parameter)
  // 3. Calculate height * width
  // 4. Push previous result 
  // 5. return result list

  const areas = [];

  // for (const item of inputArr) {
  for (const { width, height } of inputArr) {
    // Object destructuring
    // const { width, height } = item;

    areas.push(width * height);
  }

  return areas;
}

function calclulateAreasV2(inputArr) {
  // 1. Create an empty list 
  // 2. Loop through inputArr (function parameter)
  // 3. Calculate height * width
  // 4. Push existing object from inputArr and add property areas to the object
  // 5. return result list

  const areas = [];

  /**
   * When we have objects / arrays we point to them via references
   */
  for (const item of inputArr) {
    const { width, height } = item;
    // Here we change the object on the original array
    // item.area = width * height;
    // Spread operator -> extracts all properties from the item object and sets the properties on a new object
    const itemWithArea = { 
      ...item, 
      area: width * height,
    };

    areas.push(itemWithArea);
  }

  return areas;
}

/**
 * Only use this in case you don't need to reuse the original data from the passed in list.
 * In general to be avoided use the solution above.
 */
function calclulateAreasV3(inputArr) {
  for(const item of inputArr) {
    const { width, height } = item;
    item.area = width * height;
  }

  return inputArr;
}

// do not edit below:
console.log('Areas:', calclulateAreas(demoArr));
console.log('Areas Version 2:', calclulateAreasV2(demoArr));
console.log(demoArr);

const house = {
  windowNumber: 2,
  door: 1,
  roof: true,
  basement: true,
  paint: true,
}

// Destructuring
// Rest: ...rest => all other properties from the object returned as a new object
const { windowNumber, door, basement, ...rest } = house;
// Destructure basement property and rename it to a new name via :
const { basement: myNewPropertyName, paint, roof } = rest;

// This equals to
const houseWindow = house.windowNumber;
const houseDoor = house.door;


console.log(door);

const newObject = {
  prop1: 'hello',
  prop2: 'world',
  prop3: true,
}

const newObjectWithExtraProperty = {
  ...newObject,
  extraProperty: 'another hello world',
};

console.log(newObject, newObjectWithExtraProperty);
