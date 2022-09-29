function atLeastOneOfColor(inputArr, color = 'crimson') {
  let hasMatchingColor = false;

  for (const obj of inputArr) {
    if (obj.color === color) {
      hasMatchingColor = true;
      // return true;
    }
  }

  // return false;
  return hasMatchingColor;
}

function atLeastOneOfColor2(inputArr, color = 'crimson') {
  const foundItem = inputArr.some(obj => obj.color === color);

  return foundItem;
}

//don't edit below
console.log({
 'red': atLeastOneOfColor(demoArr, 'red'),
 'default': atLeastOneOfColor(demoArr),
 'green': atLeastOneOfColor(demoArr, 'green'),
 'magenta': atLeastOneOfColor(demoArr, 'magenta'),
});
