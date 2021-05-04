const _ = require('./index')
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
      return _.eqArrays(object1[item], object2[item]);
    } else if (typeof object1[item] === "object" && typeof object1[item] === "object") { // if Object
      if (!eqObjects(object1[item], object2[item])) {
        return false;
      }
    } else if (object1[item] !== object2[item]) { // if item not object and if they dont match
      return false;
    }
  }
  return true;
};
module.exports = eqObjects;

// _.assertEqual(eqObjects({ a: {z: 1, c:2 }, b: 4 }, {a: {z: 1, c:2}, b: 4}), true);
// _.assertEqual(eqObjects({ a: ['a', 'b'], z:{c:2, d:4}, x: 2}, { a: ['a', 'b'], z:{c:2, d:4}, x: 2}), true);

