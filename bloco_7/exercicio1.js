const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

const expected = sum(4, 5);

assert.strictEqual(expected, 9, 'Ta errado isso ai')
assert.equal(sum(0, 0), 0, 'Era pra ser 0, ta errado');
assert.deepStrictEqual(sum(3, 5), 8, 'REPROVADO!');
//assert.deepStrictEqual(sum(4, '5'));
//assert.throws(() => {sum(4, '5')}, /^Error: parameters must be number$/);
assert.throws(sum(4, '5'));