//For Test/Assertions

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

//Actual Function

const letterPositions = function (str) {
  let results = {};
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    if (currentChar !== " ") {
      // if current charter not in the object, create a key and place its index as value
      if (!results[currentChar]) {
        results[currentChar] = [str.indexOf(currentChar)];
      } else {
        results[currentChar].push(str.indexOf(currentChar, i));
      }
    }
  }

  return results;
};
const testString = "lighthouse in the house";
assertArraysEqual(letterPositions(testString)["l"], [0]);
assertArraysEqual(letterPositions(testString)["h"], [3, 5, 15, 18]);