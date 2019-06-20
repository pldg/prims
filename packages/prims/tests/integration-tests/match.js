const path = require('path');
const assert = require('assert').strict;
const prims = require('../../lib/prims');
const readFiles = require('../../lib/utils/read-files');

/**
 * - Test for `match` option.
 */

async function testMatch() {
  try {
    const input = path.resolve(__dirname, '../images');
    const output = path.resolve(__dirname, '../output-images/match');

    await prims({
      input,
      match: /inferno/,
      output
    });

    const files = await readFiles(output);

    assert.strictEqual(files.length, 1);
    assert.strictEqual(files[0].name, 'doré-inferno-dante');
    assert.strictEqual(files[0].ext, 'jpeg');
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = testMatch;
