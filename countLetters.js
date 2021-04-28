
// For Testing
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ %cAssertion Passed: ${actual} === ${expected}`, `color: green`);
  } else {
    console.log(`⛔️⛔️ %cAssertion Failed: ${actual} !== ${expected}`, `color: red`);
  }
};

const countLetters = function(str) {
  let output = {};
  for (let char of str) {
    // console.log("Inside For Loop")
    if (char !== " ") {
      if (!output[char]) {
        output[char] = 1;
      } else {
        output[char]++;
      }
    }
  }
  return output;
};
// console.log(countLetters("lighthouse in the house"));
// assertEqual(countLetters("lighthouse in the house"), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 } )
console.log(countLetters('LHL'));
assertEqual(countLetters("LHL")["L"], 2);
assertEqual(countLetters("LHL")["H"], 1);
assertEqual(countLetters("abc")["c"], 1);
