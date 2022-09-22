function getAllAddedWith2(inputArr) {
  const processedArray = [];

  for(let i = 0; i < inputArr.length; i++) {
    let number = Number(inputArr[i]);
    const isPositiveNumber = inputArr[i] > 0;
    
    number = isPositiveNumber ? number += 2 : number -= 2;
    
    // Other way of doing things
    // if (inputArr[i] > 0) {
    //   number += 2;
    // } else {
    //   number -= 2;
    // }

    processedArray.push(String(number));
  }

  return processedArray;
}

//do not edit below here:
const originalArray = getNumberArray({min: -100, max: 100, allowFloat: true, mappingFn: String, length: 15});
console.log({transformedArray:  getAllAddedWith2(originalArray), originalArray});
