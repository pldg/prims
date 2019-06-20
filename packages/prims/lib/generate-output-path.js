const path = require('path');

function generateOutputPath(ctx) {
  let { info, name, output, naming } = ctx;
  let { format, width, height } = info;

  width = width + 'w';
  height = height + 'h';

  let dimensions = '';

  if (naming.width && naming.height) {
    dimensions = width + naming.separator + height;
  } else if (naming.width && !naming.height) {
    dimensions = width;
  } else if (!naming.width && naming.height) {
    dimensions = height;
  }

  const separator = dimensions ? naming.separator : '';

  const filename = `${name}${separator}${dimensions}.${format}`;

  return path.resolve(output, filename);
}

module.exports = generateOutputPath;
