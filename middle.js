// Test/Assertion Function

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅ %cTest Passed: ${arr1} & ${arr2} are equal`, `color: green`);
  } else {
    console.log(`⛔️⛔️ %cTest Failed: ${arr1} & ${arr2} are not equal`, `color: red`);
  }
}
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i])
      return false;
  }
  return true;
};

//Actual Function

// Arrays with 1 or two item should return an empty array
// array with odd number of items, return an array with single element
// array with even number of items, return an arry with two or more elements

const middle = function(arr) {
  let output = [];
  if (arr.length <= 2)
    return ('output:', []);
  let midValue = Math.round(arr.length / 2);
  if (arr.length % 2 === 0) {
    output.push(arr[midValue - 1], arr[midValue]);
    return output;
  } else {
    output.push(arr[midValue - 1]);
    return output;
  }
};

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

