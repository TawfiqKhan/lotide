const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle')

assertArraysEqual(middle([1, 2, 3]), [2]); // Should pass
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); //Should pass
assertArraysEqual(middle([1, 2, 3, 4, 5]), [4]); //Should fail
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); //Should pass
