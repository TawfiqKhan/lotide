const assert = require('chai').assert;
const _ = require('../index')

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

// result1 is calling a function
const result1 = _.countOnly(firstNames, { "Jason": true, "Salima": true, "Fang": true, "Agouhanna": false });

describe("#countOnly", () => {
  it("returns {Jason:1 and Salima : 2 } from firstNames Array", () => {
    assert.deepEqual(_.countOnly(firstNames, { "Jason": true, "Salima": true }), { Jason: 1, Salima: 2 })
  });

  it("returns {Agouhanna : undefined} from firstNames Array", () => {
    assert.deepEqual(_.countOnly(firstNames, { "Agouhanna": false }), {})
  });
})