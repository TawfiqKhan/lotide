// This function should take in a source array and a itemsToRemove array.
// It should return a new array with only those elements from source that are not present in the itemsToRemove array.

const without = function(arr, itemsToRemove) {
  //Copying the array to prevent mutation
  let tempArray = [...arr];
  // Short Version
  // tempArray = tempArray.filter(item => !itemsToRemove.includes(item))

  //Long version
  let index = 0;
  for (let item of itemsToRemove) {
    if (tempArray.indexOf(item) !== -1) {
      index = tempArray.indexOf(item);
      tempArray.splice(index, 1);
    }
  }
  console.log(tempArray);
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`%cTest Passed: ${arr1} & ${arr2} are equal`, `color: green`);
  } else {
    console.log(`%cTest Failed: ${arr1} & ${arr2} are not equal`, `color: red`);
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

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

without(['A', "B", "C"], ["B"]); // => [A, C]
without(['A', "B", "C"], [1, 2, "C"]); // => ["A", "B"]


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);