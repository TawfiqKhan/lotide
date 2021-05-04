
// Arrays with 1 or two item should return an empty array
// array with odd number of items, return an array with single element
// array with even number of items, return an arry with two or more elements

// function implementation
const middle = function (arr) {
  let output = [];
  if (arr.length <= 2)
    return ('output:', []);
  let midValue = Math.round(arr.length / 2);
  if (arr.length % 2 === 0) {
    output.push(arr[midValue - 1], arr[midValue]);
    return output;
  } else {
    output.push(arr[midValue - 1]);
    return output;
  }
};
module.exports = middle;

