const path = require('path');
const assert = require('assert').strict;
const prims = require('../../lib/prims');
const readFiles = require('../../lib/utils/read-files');

/**
 * - Test for `resize` option.
 * - It should resize *doré-inferno-dante.jpg* and *waterhouse-miranda.png*.
 * - *sun.svg* should not be processed and should log an error.
 */

async function testResize() {
  try {
    const input = path.resolve(__dirname, '../images');
    const output = path.resolve(__dirname, '../output-images/resize');

    await prims({
      input,
      output,
      resize: {
        widths: [800, 300]
      }
    });

    const files = await readFiles(output);

    assert.strictEqual(files.length, 4);
    assert.strictEqual(`${files[0].name}.${files[0].ext}`, 'doré-inferno-dante_300w_380h.jpeg');
    assert.strictEqual(`${files[1].name}.${files[1].ext}`, 'doré-inferno-dante_800w_1014h.jpeg');
    assert.strictEqual(`${files[2].name}.${files[2].ext}`, 'waterhouse-miranda_300w_216h.png');
    assert.strictEqual(`${files[3].name}.${files[3].ext}`, 'waterhouse-miranda_800w_576h.png');
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = testResize;
