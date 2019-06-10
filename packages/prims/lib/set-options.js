const path = require('path');

function setOptions(options) {
  options.input = options.input ? options.input : process.cwd();
  options.match = options.match ? options.match : false;
  options.output = options.output ?
    options.output : path.join(options.input, 'processed-images');
  options.formats = options.formats ? options.formats : {};
  options.resize = options.resize ? options.resize : {};
  options.withMetadata = options.withMetadata ? options.withMetadata : false;
  options.log = options.log ? options.log : false;

  if (options.input === options.output) {
    throw new Error('"input" can\'t be equal to "output"');
  } else {
    return options;
  }
}

module.exports = setOptions;