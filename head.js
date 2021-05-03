const assertEqual = require('./assertEqual');

const head = function(arr) {
  return arr.length > 0 ? arr[0] : undefined;
}

module.exports = head;