//Function Implementation

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`%cAssertion Passed: ${actual} === ${expected}`, `color: green`);
  } else {
    console.log(`%cAssertion Failed: ${actual} !== ${expected}`, `color: red`);
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

//Test Code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2], [1, 2, 3]), false);
assertEqual(eqArrays([4, 2, 7], [4, 2, 7]), false);
