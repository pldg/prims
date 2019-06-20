const path = require('path');
const assert = require('assert').strict;
const prims = require('../../lib/prims');
const readFiles = require('../../lib/utils/read-files');

/**
 * - Test for `resize.widths` option.
 * - *sun.svg* should not be processed and should log a warning.
 */

async function testResizeWidths() {
  try {
    const input = path.resolve(__dirname, '../images');
    const output = path.resolve(__dirname, '../output-images/resize-widths');

    await prims({
      input,
      output,
      resize: {
        widths: [800, 300]
      }
    });

    const files = await readFiles(output);

    assert.strictEqual(files.length, 4);
    assert.strictEqual(`${files[0].name}.${files[0].ext}`, 'doré-inferno-dante_300w.jpeg');
    assert.strictEqual(`${files[1].name}.${files[1].ext}`, 'doré-inferno-dante_800w.jpeg');
    assert.strictEqual(`${files[2].name}.${files[2].ext}`, 'waterhouse-miranda_300w.png');
    assert.strictEqual(`${files[3].name}.${files[3].ext}`, 'waterhouse-miranda_800w.png');
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = testResizeWidths;
