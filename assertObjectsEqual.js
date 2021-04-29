// Function to compare two objects
const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }
  for (let item of object1Keys) {
    if (!Array.isArray(object1[item]) || !Array.isArray(object2[item])) {
      if (object1[item] !== object2[item]) {
        return false;
      }
    } else {
      return eqArrays(object1[item], object2[item]);
    }
  }
  return true;
};

// Function to compare two arrays
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i])
      return false;
  }
  return true;
};

// Function to do the assertions
const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  if (eqObjects(obj1, obj2)) {
    console.log(`✅✅ %cTest Passed: ${inspect(obj1)} & ${inspect(obj2)} are equal`, `color: green`);
  } else {
    console.log(`⛔️⛔️ %cTest Failed: ${inspect(obj1)} & ${inspect(obj2)} are not equal`, `color: red`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const ca = { b: "1", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, abc);