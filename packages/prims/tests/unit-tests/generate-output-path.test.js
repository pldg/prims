const path = require('path');
const generateOutputPath = require('../../lib/generate-output-path');
const { default_input_path, default_output_dir } = require('../constants');

describe('Output path', () => {
  test('Should return doré-inferno-dante_800w_400h.jpeg', () => {
    const name = 'doré-inferno-dante';
    const info = {
      format: 'jpeg',
      width: 800,
      height: 400
    };
    const naming = {
      separator: '_',
      width: true,
      height: true
    };

    const filename = `${name}_${info.width}w_${info.height}h.${info.format}`;
    const output = path.resolve(default_input_path, default_output_dir);
    const outputPath = path.resolve(output, filename);

    const ctx = { info, name, output, naming };

    expect(generateOutputPath(ctx)).toBe(outputPath);
  });
});
