const path = require('path');
const assert = require('assert').strict;
const prims = require('../../lib/prims');
const readFiles = require('../../lib/utils/read-files');

/**
 * - Test for `resize.widths` and `resize.heights` options.
 */

async function testResizeWidthsAndHeights() {
  try {
    const input = path.resolve(__dirname, '../images');
    let output;

    for (const image_name of ['doré-inferno-dante', 'waterhouse-miranda']) {
      const widths = image_name === 'doré-inferno-dante' ? [500, 300] : undefined;
      const heights = image_name === 'waterhouse-miranda' ? [400, 200] : undefined;
      const match = new RegExp(image_name);
      output = path.resolve(__dirname, `../output-images/resize-widths-heights/${image_name}`);

      await prims({
        input,
        match,
        output,
        resize: {
          widths,
          heights
        }
      });

      const files = await readFiles(output);

      assert.strictEqual(files.length, 2);

      if (image_name === 'doré-inferno-dante') {
        assert.strictEqual(`${files[0].name}.${files[0].ext}`, 'doré-inferno-dante_300w.jpeg');
        assert.strictEqual(`${files[1].name}.${files[1].ext}`, 'doré-inferno-dante_500w.jpeg');
      } else if (image_name === 'waterhouse-miranda') {
        assert.strictEqual(`${files[0].name}.${files[0].ext}`, 'waterhouse-miranda_200h.png');
        assert.strictEqual(`${files[1].name}.${files[1].ext}`, 'waterhouse-miranda_400h.png');
      }
    }
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = testResizeWidthsAndHeights;
