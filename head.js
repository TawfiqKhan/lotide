const assertEqual = require('./assertEqual');

const head = function(arr) {
  return arr.length > 0 ? arr[0] : undefined;
}
// assertEqual(head(["Lighthouse Labs", "Bootcamp"]), "Lighthouse Labs");
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "labs");
// assertEqual(head([]), undefined);

module.exports = head;