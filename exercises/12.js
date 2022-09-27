function findByColor(inputArr, color) {
  // 1. Loop through the list
  // 2. if object contains color parameter return the object

  for (const object of inputArr) {
    const { color: objectColor } = object;

    if (objectColor === color) {
      return object;
    }
  }
}

// do not edit below:
console.log({
  crimson: findByColor(demoArr, 'crimson'),
  green: findByColor(demoArr, 'green'),
})

