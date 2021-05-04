const assert = require('chai').assert
const _ = require('../index');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const ca = { b: "1", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

describe("#eqObjects", () => {
  it("returns true for { a: 1, b: 2} -- { b: 2, a: 1}", () => {
    assert.deepEqual(_.eqObjects(ab, ba), true);
  });

  it("returns false for { a: { y: 0, z: 1 }, b: 2 } -- { a: 1, b: 2 }", () => {
    assert.deepEqual(_.eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  });

  it("returns true for { a: {z: 1, c:2 }, b: 4 }} -- { b: 4 , a: {z: 1, c:2 }}", () => {
    assert.deepEqual(_.eqObjects({ a: { z: 1, c: 2 }, b: 4 }, { a: { z: 1, c: 2 }, b: 4 }), true);
  });

  it("returns true for { a: ['a', 'b'], z:{c:2, d:4}, x: 2} -- { a: ['a', 'b'], z:{c:2, d:4}, x: 2}", () => {
    assert.deepEqual(_.eqObjects({ a: ['a', 'b'], z:{c:2, d:4}, x: 2}, { a: ['a', 'b'], z:{c:2, d:4}, x: 2}), true);
  });
});
