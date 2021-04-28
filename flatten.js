const flatten = function(arr) {
  let flattenedArray = [];
  for (let item of arr) {
    if (!Array.isArray(item))
      flattenedArray.push(item);
    if (Array.isArray(item)) {
      for (let innerItem of item) {
        if (!Array.isArray(innerItem)) {
          flattenedArray.push(innerItem);
        } else {
          return "I'm not smart enough to handle Nested Array!";
        }
      }
    }
  }
  return flattenedArray;
};
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]



// const checkIfArray = function(item) {

// }

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`%cTest Passed: ${arr1} & ${arr2} are equal`, `color: green`);
  } else {
    console.log(`%cTest Failed: ${arr1} & ${arr2} are not equal`, `color: red`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i])
      return false;
  }
  return true;
};