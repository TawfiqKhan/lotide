//For Testing/Assertion

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅ %cTest Passed: ${arr1} & ${arr2} are equal`, `color: green`);
  } else {
    console.log(`⛔️⛔️ %cTest Failed: ${arr1} & ${arr2} are not equal`, `color: red`);
  }
};

const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i])
      return false;
  }
  return true;
};

//Main Function
const takeUntil = function (arr, callback) {
  let output = [];

  for (let item of arr) {
    if (!callback(item)) {
      output.push(item);
    } else {
      return output;
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
assertArraysEqual(takeUntil(data2, x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);