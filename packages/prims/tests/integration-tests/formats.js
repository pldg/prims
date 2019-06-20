const path = require('path');
const assert = require('assert').strict;
const prims = require('../../lib/prims');
const readFiles = require('../../lib/utils/read-files');

/**
 * - Test for `formats` option.
 * - It should convert *doré-inferno-dante.jpg* and *waterhouse-miranda* images
 * to jpeg, png, webp and tiff formats.
 * - Formats folder should contains 8 files in total.
 * - *sun.svg* should not be processed and should log a warning.
 * - *doré-inferno-dante.jpeg* should looks pixelated because of `quality: 5`.
 */

async function testFormats() {
  try {
    const input = path.resolve(__dirname, '../images');
    const output = path.resolve(__dirname, '../output-images/formats');

    await prims({
      input,
      output,
      formats: {
        jpeg: {
          quality: 5
        },
        png: {
          compressionLevel: 4
        },
        webp: {},
        tiff: () => ({
          quality: 50
        })
      }
    });

    const files = await readFiles(output);

    assert.strictEqual(files.length, 8);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (i < 4) {
        assert.strictEqual(file.name, 'doré-inferno-dante');
      } else {
        assert.strictEqual(file.name, 'waterhouse-miranda');
      }
    }
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = testFormats;
