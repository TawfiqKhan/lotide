const assertEqual = require('../assertEqual');
const head = require('../head');

//Test Code

assertEqual(head(["Lighthouse Labs", "Bootcamp"]), "Lighthouse Labs");
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "labs");
assertEqual(head([]), undefined);

