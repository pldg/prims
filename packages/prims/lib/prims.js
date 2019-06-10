const setOptions = require('./set-options');
const createDirByPathSync = require('./utils/create-dir-by-path-sync');
const readInputFolder = require('./read-input-folder');
const isInputExtensionValid = require('./is-input-extension-valid');
const runSharp = require('./run-sharp');

/**
 * Batch processing images from an input directory.
 *
 * Read [prims documentation](https://github.com/pldg/prims) for more
 * information.
 *
 * @param {Object} [options] If `undefined` set all options to their defaults.
 *
 * @param {String} [options.input] Absolute path to input folder.
 *
 * @param {Regex} [options.match] Load only files that match regex.
 *
 * @param {String} [options.output] Absolute path to output folder.
 *
 * @param {Object} [options.formats] List of [output
 * formats](http://sharp.pixelplumbing.com/en/stable/api-output/#toformat) and
 * their quality. If `undefined` use same format of the image with default Sharp
 * quality.
 *
 * @param {Object} [options.resize] Resizing options. Accept Sharp [resize
 * options](http://sharp.pixelplumbing.com/en/stable/api-resize/#parameters)
 * object, but `width` is substituted with `widths` array and `height` is
 * substituted with `heights` array. If `undefined` do not resize.
 * @param {Array} [options.resize.widths] Image will be resized to those widths
 * in px (aspect ratio is preserved if `heights` is omitted). If `undefined` do
 * not resize width.
 * @param {Array} [options.resize.heights] Image will be resized to those
 * heights in px (aspect ratio is preserved if `widths` is omitted). If
 * `undefined` do not resize height.
 *
 * @param {Boolean} [options.withMetadata] If `true` image metadata will be
 * preserved.
 *
 * @param {Boolean} [options.log] Log info in console for each image.
 */
async function prims(options = {}) {
  try {
    options = setOptions(options);
    let { input, output, match } = options;

    // Create output folder
    createDirByPathSync(output);

    const files = await readInputFolder(input, match);

    const images = files.map(file => {
      let ctx = { ...file, ...options };

      const inputExtIsValid = isInputExtensionValid(ctx);

      if (inputExtIsValid) return runSharp(ctx);
    });

    return Promise.all(images);
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = prims;
