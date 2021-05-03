const assert = require('chai').assert;
const _ = require('../index');

const result = _.tail([1, 2, 3, 4]);

const words = ["Yo Yo"];
// tail(words);
// assertEqual(words.length, 1); // original array should still have 3 elements!

describe("#Tail", () => {
  it("expect Length to be 3 for [1, 2, 3, 4] ", () => {
    assert.strictEqual(result.length, 3)
  });

  it("returns tail [2, 3, 4] for [1, 2, 3, 4] ", () => {
    assert.deepEqual(_.tail([1, 2, 3, 4]), [2, 3, 4])
  });

  it("original array should still have 3 elements!", () => {
    _.tail(words);
    assert.strictEqual(words.length, 1)
  });
})