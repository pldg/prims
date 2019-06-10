const path = require('path');
const assert = require('assert').strict;
const prims = require('../../lib/prims');
const readFiles = require('../../lib/utils/read-files');

/**
 * - Test running multiple options.
 * - It should output two folder: *doré-inferno-dante* and *waterhouse-miranda*.
 * - *doré-inferno-dante* should contain *doré-inferno-dante_300w_380h.jpeg* and
 * *doré-inferno-dante_500w_634h.jpeg*.
 * - *waterhouse-miranda* should contain *waterhouse-miranda_278w_200h.png* and
 * *waterhouse-miranda_556w_400h.png*.
 */

async function testMultipleOptions() {
  try {
    const input = path.resolve(__dirname, '../images');
    let output;

    for (const image_name of ['doré-inferno-dante', 'waterhouse-miranda']) {
      const widths = image_name === 'doré-inferno-dante' ? [500, 300] : undefined;
      const heights = image_name === 'waterhouse-miranda' ? [400, 200] : undefined;
      const match = new RegExp(image_name);
      output = path.resolve(__dirname, `../output-images/multiple-options/${image_name}`);

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
        assert.strictEqual(`${files[0].name}.${files[0].ext}`, 'doré-inferno-dante_300w_380h.jpeg');
        assert.strictEqual(`${files[1].name}.${files[1].ext}`, 'doré-inferno-dante_500w_634h.jpeg');
      } else if (image_name === 'waterhouse-miranda') {
        assert.strictEqual(`${files[0].name}.${files[0].ext}`, 'waterhouse-miranda_278w_200h.png');
        assert.strictEqual(`${files[1].name}.${files[1].ext}`, 'waterhouse-miranda_556w_400h.png');
      }
    }
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = testMultipleOptions;
