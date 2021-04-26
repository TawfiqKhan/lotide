//Function Implementation

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`%cAssertion Passed: ${actual} === ${expected}`, `color: green`);
  } else {
    console.log(`%cAssertion Failed: ${actual} !== ${expected}`, `color: red`);
  }
};

const tail = function(arr) {
  return arr.slice(1);
};

//Test Code

const result = tail([1, 2, 3]);
assertEqual(result.length, 2);
assertEqual(result[0], 2);
assertEqual(result[1], 3);

const words = ["Yo Yo"];
tail(words);
assertEqual(words.length, 1); // original array should still have 3 elements!