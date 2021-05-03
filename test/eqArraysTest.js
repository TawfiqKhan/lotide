// const assertEqual = require('../assertEqual');
// const eqArrays = require('../eqArrays');
const assert = require('chai').assert;
const _ = require('../index');

//Test Code
// assertEqual(_.eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(_.eqArrays([1, 2], [1, 2, 3]), false);
// assertEqual(_.eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
// assertEqual(_.eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false
// assertEqual(_.eqArrays([[2, 2], [4]], [[2, 2], [4]]), true); // => false
// assertEqual(_.eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false

describe("#eqArrays", ()=> {
  it("returns true when comparing [1, 2, 3] to [1, 2, 3]", ()=> {
    assert.deepEqual(_.eqArrays([1, 2, 3], [1, 2, 3]), true)
  });
  
  it("returns true when comparing [1, 2] to [1, 2, 3]", ()=> {
    assert.deepEqual(_.eqArrays([1, 2], [1, 2, 3]), false)
  });

  it("returns true when comparing [[2, 3], [4]] to [[2, 3], [4]]", ()=> {
    assert.deepEqual(_.eqArrays([[2, 3], [4]], [[2, 3], [4]]), true)
  });

  it("returns false when comparing [[2, 3], [4]] to [[2, 3], 4]", ()=> {
    assert.deepEqual(_.eqArrays([[2, 3], [4]], [[2, 3], 4]), false)
  });

  it("returns false when comparing [[2, 3], [4]] to [[2, 3], [4, 5]]", ()=> {
    assert.deepEqual(_.eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false)
  });
})