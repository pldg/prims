const path = require('path');
const assert = require('assert').strict;
const prims = require('../../lib/prims');
const { default_input_path, default_output_dir } = require('../constants');
const readFiles = require('../../lib/utils/read-files');

/**
 * - Test when the program run without options.
 * - It should create an empty folder *processed-images*.
 * - In the root directory of the project.
 * - Should also log an error for each file which is not a valid format.
 */

async function testWithoutOptions() {
  try {
    await prims();

    const output = path.resolve(default_input_path, default_output_dir);
    const files = await readFiles(output);

    assert.strictEqual(files.length, 0);
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = testWithoutOptions;
