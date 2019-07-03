const readFiles = require('./utils/read-files');

async function readInputFolder(input, match) {
  try {
    const files = await readFiles(input);

    return files
      .filter(file => {
        const isFolder = file === undefined;

        if (match) {
          return !isFolder && match.test(`${file.name}.${file.ext}`);
        } else {
          return !isFolder;
        }
      })
      .map(file => file);
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = readInputFolder;