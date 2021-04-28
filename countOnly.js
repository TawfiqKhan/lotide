//For Testing/Assertion

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ %cAssertion Passed: ${actual} === ${expected}`, `color: green`);
  } else {
    console.log(`⛔️⛔️ %cAssertion Failed: ${actual} !== ${expected}`, `color: red`);
  }
};

const countOnly = function(arr, obj) {
  const results = {};
  for (let item of arr) {
    if (obj[item]) {
      !results[item] ? results[item] = 1 : results[item]++;
    }
  }
  // console.log(count);
  return results;
};

//an Array
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

// result1 is calling a function
const result1 = countOnly(firstNames, { "Jason": true, "Salima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Salima"], 3);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);