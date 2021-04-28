//For Testing

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ %cAssertion Passed: ${actual} === ${expected}`, `color: green`);
  } else {
    console.log(`⛔️⛔️ %cAssertion Failed: ${actual} !== ${expected}`, `color: red`);
  }
};

//Main Logic Function

const findKeyByValue = function(obj, str) {
  let keys = Object.keys(obj);
  for (let item of keys) {
    if (obj[item] === str) {
      return item;
    }
  }
  return undefined;
};

//For Testing
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  crime: "The Sopranos"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Sopranos"), "crime");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);