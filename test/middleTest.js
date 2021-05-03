const assert = require('chai').assert;
const _= require('../index');

// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
describe("#Middle", () => {
  it("returns [2] from Array [1, 2, 3]", () => {
    assert.deepEqual(_.middle([1, 2, 3],), [2]);
  });

  it("returns [3] from Array [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(_.middle([1, 2, 3, 4, 5],), [3]);
  });

  it("returns [3, 4] from Array [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(_.middle([1, 2, 3, 4, 5, 6],), [3, 4]);
  });
});
