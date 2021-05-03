//For Testing

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ %cAssertion Passed: ${actual} === ${expected}`, `color: green`);
  } else {
    console.log(`⛔️⛔️ %cAssertion Failed: ${actual} !== ${expected}`, `color: red`);
  }
};

module.exports = assertEqual;
