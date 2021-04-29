
// For TesTing/Assertion

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

//Main Logic function

const findKey = function(obj, callback) {
  let keys = Object.keys(obj);
  for (let item of keys) {
    if (callback(obj[item])) {
      return item;
    }
  }
  return undefined;
};

const movies = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

console.log(findKey(movies, x => x.stars === 2));

assertArraysEqual(findKey(movies, x => x.stars === 2), "noma");
assertArraysEqual(findKey(movies, x => x.stars === 3), "Akaleri");
assertArraysEqual(findKey(movies, x => x.stars === 1), "Ora");
