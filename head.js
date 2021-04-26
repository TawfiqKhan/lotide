//Function Implementation

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`%cAssertion Passed: ${actual} === ${expected}`, `color: green`);
  } else {
    console.log(`%cAssertion Failed: ${actual} !== ${expected}`, `color: red`);
  }
};

const head = function(arr) {
  return arr.length > 0 ? arr[0] : undefined;
}

//Test Code

assertEqual("Lighouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("1", 1);
// assertEqual(1, 5);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "labs");
assertEqual(head([]), undefined);