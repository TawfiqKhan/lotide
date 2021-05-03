const assertEqual = require("../assertEqual");
const tail = require("../tail");

const result = tail([1, 2, 3, 4, 5]);
assertEqual(result.length, 3);
assertEqual(result[0], 3);
assertEqual(result[1], 3);

const words = ["Yo Yo"];
tail(words);
assertEqual(words.length, 1); // original array should still have 3 elements!