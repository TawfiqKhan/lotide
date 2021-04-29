const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅ %cTest Passed: ${arr1} & ${arr2} are equal`, `color: green`);
  } else {
    console.log(`⛔️⛔️ %cTest Failed: ${arr1} & ${arr2} are not equal`, `color: red`);
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



const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(words, word => word[2]), [ 'o', 'n', , 'j', 'm' ]);
assertArraysEqual(map(words, word => word[1]), [ 'r', 'o', 'o', 'a', 'o' ]);