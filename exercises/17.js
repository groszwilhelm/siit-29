const demoArr = [
  { id: 1, color: 'red', height: 15, width: 20, distance: 10 },
  { id: 2, color: 'green', height: 5, width: 30, distance: 15 },
  { id: 3, color: 'turqoize', height: 7, width: 9, distance: 8 },
  { id: 4, color: 'blue', height: 2, width: 3, distance: 3 },
  { id: 5, color: 'red', height: 10, width: 10, distance: 2 },
  { id: 6, color: 'crimson', height: 7, width: 8, distance: 16 },
  { id: 7, color: 'crimson', height: 71, width: 82, distance: 216 },
];

// Return a new list with elements of distance higher than 10
// Return a new list with elements of distance lower than 10

function filterListHigherThan10(inputArr) {
  return loopThroughItemsAndReturnNewList(function (object) {
    return object.distance > 10;
  });
}

function filterListLowerThan10(inputArr) {
  return loopThroughItemsAndReturnNewList(function(object) {
    return object.distance < 10;
  });
}

function loopThroughItemsAndReturnNewList(callback) {
  const list = [];

  for (const object of inputArr) {    
    const result = callback(object);

    if (result) {
      list.push(object);
    }
  }

  return list;
}


const itemsWithDistanceLowerThan10 = demoArr.filter(function(object) {
  return object.distance < 10;
});

console.log(itemsWithDistanceLowerThan10);

const itemsWithDistanceHigherThan10 = demoArr.filter(function(object) {
  return object.distance > 10;
});

console.log(itemsWithDistanceHigherThan10);
console.log(demoArr);

const searchItem = demoArr.find(function(object) {
  return object.distance === 16;
});

console.log(searchItem);

// Method chaining

const result = demoArr
  .filter((object) =>  object.distance > 10)
  .find((object) => object.color === 'crimson');

// Above code is equal to this

// step 1
const result1 = demoArr
  .filter((object) => object.distance > 10);

// step 2
const result2 = result1
  .find((object) => object.color === 'crimson');

console.log(result);

demoArr.find((object) => object.distance > 10 && object.color === 'green');

// We would like to obtain a new list from demo arr but only showing the colors as primitives
// const newArray = ['red', 'green', ...etc]

// const map1 = array1.map(x => x * 2);

const demoArrColors = demoArr.map((object) => object.color);

console.log(demoArrColors);

/**
 * Let's obtain the colors for the objects that have distance higher than 10
 */

const result3 = demoArr
  .filter(object => object.distance > 10)
  .map(object => object.color);

console.log(result3);


for (const obj of demoArr) {

}

// Above code equals to this

demoArr.forEach((currentObj, index) => {
  console.log(currentObj);
  console.log(index);
});

console.log(demoArr.includes('red'));
