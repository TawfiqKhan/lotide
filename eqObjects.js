//For Testing

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ %cAssertion Passed: ${actual} === ${expected}`, `color: green`);
  } else {
    console.log(`⛔️⛔️ %cAssertion Failed: ${actual} !== ${expected}`, `color: red`);
  }
};

//For comparing Arrays

const eqArrays = function (arr1, arr2) {
  console.log("arr1 L: ", arr1.length, "arr2 L: ", arr2.length);
  if (arr1.length !== arr2.length)
    return false;
  for (let i = 0; i < arr1.length; i++) {
    console.log("We are Here...");
    if (arr1[i] !== arr2[i])
      return false;
  }
  return true;
};
// Main Logic Function

const eqObjects = function (object1, object2) {
  if (typeof object1 !== "object" || typeof object2 !== "object")
    return false;
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }
  for (let item of object1Keys) {
    if (Array.isArray(object1[item]) && Array.isArray(object2[item])) { // if not array
      return eqArrays(object1[item], object2[item]);
    } else if (typeof object1[item] === "object" && typeof object1[item] === "object") { // if Object
      if (!object1[item], object2[item]) {
        return false;
      }
    } else if (object1[item] !== object2[item]) { // if item not object and if they dont match
      return false;
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const ca = { b: "1", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

assertEqual(eqObjects({ a: { z: 1 }, b: 2, c: { z: 1 } }, { a: { z: 1 }, b: 2, c: { z: 2 } }), false);  // => true
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);

