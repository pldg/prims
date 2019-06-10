const path = require('path');

function generateOutputPath(ctx) {
  let { info, name, output } = ctx;
  let { format, width, height } = info;

  const filename = `${name}_${width}w_${height}h.${format}`;

  return path.resolve(output, filename);
}

module.exports = generateOutputPath;
