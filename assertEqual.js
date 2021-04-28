//For Testing

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ %cAssertion Passed: ${actual} === ${expected}`, `color: green`);
  } else {
    console.log(`⛔️⛔️ %cAssertion Failed: ${actual} !== ${expected}`, `color: red`);
  }
};

//Test Code

assertEqual("Lighouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("1", 1);
assertEqual(1, 5);