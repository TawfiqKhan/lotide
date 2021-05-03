const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

//Test Code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2], [1, 2, 3]), false);
assertEqual(eqArrays([4, 2, 7], [4, 2, 7]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false
assertEqual(eqArrays([[2, 2], [4]], [[2, 2], [4]]), true); // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false
