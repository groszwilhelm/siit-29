/**
 * Sa se scrie o functie care returneaza true daca toate elementele din array au aria >= parametrul de intrare al functiei, false altfel.
 */

function areasAreAtLeast(inputArr, minArea = 10) {
  // 1. Get area for each item in inputArr
  // 2. Loop through inputArrWithArea
  // 3. Check if there is an object with area less than minArea => return false else => return true;

  const inputArrWithArea = calclulateAreasV2(inputArr);
  // let result = true;

  for (const obj of inputArrWithArea) {
    if (obj.area < minArea) {
      // result = false;
      return false;
    }
  }

  // return result;
  return true;
}

//don't edit below this line
console.log({
  6: areasAreAtLeast(demoArr, 6),
  10: areasAreAtLeast(demoArr),
  300: areasAreAtLeast(demoArr, 300),
})

