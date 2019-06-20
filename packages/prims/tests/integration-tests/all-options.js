const path = require('path');
const assert = require('assert').strict;
const prims = require('../../lib/prims');
const readFiles = require('../../lib/utils/read-files');

/**
 * - Test for all options.
 * - It should output 16 version of *doré-inferno-dante* image inside
 * *all-options* folder.
 * - All output jpeg images should looks pixelated because of `quality: 5`.
 */

async function testAllOptions() {
  try {
    const input = path.resolve(__dirname, '../images');
    const output = path.resolve(__dirname, '../output-images/all-options');

    await prims({
      input,

      // Process only images with "dante" in their name
      match: /dante/,

      output,

      // Convert to those formats
      formats: {
        jpeg: {
          quality: 5
        },

        png: {
          compressionLevel: 3,
          adaptiveFiltering: true
        },

        // Fallback to sharp defaults
        webp: {},

        tiff: {
          // Squash 8-bit images down to 1 bit
          squash: true
        }
      },

      resize: {
        // Resize to: 800x500, 800x200, 300x500, 300x200
        widths: [800, 300],
        heights: [500, 200],

        // Scales as large as possible without cropping or stretching
        fit: 'contain'
      },

      naming: {
        separator: '@'
      },

      // Include all metadata
      withMetadata: true
    });

    const files = await readFiles(output);

    assert.strictEqual(files.length, 16);

    assert.strictEqual(`${files[0].name}.${files[0].ext}`, 'doré-inferno-dante@300w@200h.jpeg');
    assert.strictEqual(`${files[1].name}.${files[1].ext}`, 'doré-inferno-dante@300w@200h.png');
    assert.strictEqual(`${files[2].name}.${files[2].ext}`, 'doré-inferno-dante@300w@200h.tiff');
    assert.strictEqual(`${files[3].name}.${files[3].ext}`, 'doré-inferno-dante@300w@200h.webp');

    assert.strictEqual(`${files[4].name}.${files[4].ext}`, 'doré-inferno-dante@300w@500h.jpeg');
    assert.strictEqual(`${files[5].name}.${files[5].ext}`, 'doré-inferno-dante@300w@500h.png');
    assert.strictEqual(`${files[6].name}.${files[6].ext}`, 'doré-inferno-dante@300w@500h.tiff');
    assert.strictEqual(`${files[7].name}.${files[7].ext}`, 'doré-inferno-dante@300w@500h.webp');

    assert.strictEqual(`${files[8].name}.${files[8].ext}`, 'doré-inferno-dante@800w@200h.jpeg');
    assert.strictEqual(`${files[9].name}.${files[9].ext}`, 'doré-inferno-dante@800w@200h.png');
    assert.strictEqual(`${files[10].name}.${files[10].ext}`, 'doré-inferno-dante@800w@200h.tiff');
    assert.strictEqual(`${files[11].name}.${files[11].ext}`, 'doré-inferno-dante@800w@200h.webp');

    assert.strictEqual(`${files[12].name}.${files[12].ext}`, 'doré-inferno-dante@800w@500h.jpeg');
    assert.strictEqual(`${files[13].name}.${files[13].ext}`, 'doré-inferno-dante@800w@500h.png');
    assert.strictEqual(`${files[14].name}.${files[14].ext}`, 'doré-inferno-dante@800w@500h.tiff');
    assert.strictEqual(`${files[15].name}.${files[15].ext}`, 'doré-inferno-dante@800w@500h.webp');
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = testAllOptions;
