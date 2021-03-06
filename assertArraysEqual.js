// const eqArrays = require('./eqArrays')
const _ = require('./index')

// For TesTing/Assertion

const assertArraysEqual = function (arr1, arr2) {
  if (_.eqArrays(arr1, arr2)) {
    console.log(`✅✅ %cTest Passed: ${arr1} & ${arr2} are equal`, `color: green`);
  } else {
    console.log(`⛔️⛔️ %cTest Failed: ${arr1} & ${arr2} are not equal`, `color: red`);
  }
}

module.exports = assertArraysEqual;