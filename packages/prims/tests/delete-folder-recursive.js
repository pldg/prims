const fs = require('fs');
const path = require('path');

/**
 * Remove directory recursively.
 *
 * @see {@link https://stackoverflow.com/a/32197381}
 *
 * @param {string} dir Absolute path to directory.
 */
function deleteFolderRecursive(dir) {
  // Prevent root to be deleted
  const dirIsValid = typeof dir === 'string' &&
    dir.length > 0 &&
    dir !== '/' &&
    dir !== '\\';

  if (dirIsValid) {
    if (fs.existsSync(dir)) {
      const entries = fs.readdirSync(dir);

      for (const entry of entries) {
        const entryPath = path.join(dir, entry);
        const isDir = fs.lstatSync(entryPath).isDirectory();

        // Remove folder
        if (isDir) deleteFolderRecursive(entryPath);
        // Remove file
        else fs.unlinkSync(entryPath);
      }

      // Remove folder only if its empty
      fs.rmdirSync(dir);
    }
  } else {
    throw new Error('Invalid dir path');
  }
}

module.exports = deleteFolderRecursive;