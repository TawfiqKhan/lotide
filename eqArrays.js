//Function Implementation

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅  %cAssertion Passed: ${actual} === ${expected}`, `color: green`);
  } else {
    console.log(`⛔️⛔️ %cAssertion Failed: ${actual} !== ${expected}`, `color: red`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log("returning from line 14:  ");
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      if (!eqArrays(arr1[i], arr2[i])) {
        return false;
      }
    } else {
      if (arr1[i] !== arr2[i]) {
        console.log("From line 24: ", "item 1:", arr1[i], "item 2: ", arr2[i]);
        return false;
      }
    }
  }
  return true;
};

//Test Code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2], [1, 2, 3]), false);
assertEqual(eqArrays([4, 2, 7], [4, 2, 7]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false
assertEqual(eqArrays([[2, 2], [4]], [[2, 2], [4]]), true); // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false
