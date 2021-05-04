//For Testing/Assertion
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
module.exports = countOnly;