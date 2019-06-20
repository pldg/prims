const path = require('path');
const setOptions = require('../../lib/set-options');
const {
  default_input_path,
  default_output_dir
} = require('../constants');

describe('Set options', () => {
  test('options === undefined should return defaults', () => {
    const input = default_input_path;

    expect(setOptions()).toEqual({
      input,
      match: false,
      output: path.resolve(input, default_output_dir),
      formats: {},
      resize: {},
      naming: {
        separator: '_'
      },
      withMetadata: false,
      log: false
    });
  });

  test('Setting an option should override its default', () => {
    const options = {
      input: path.resolve(__dirname, 'images'),
      match: true,
      output: path.resolve(__dirname, 'output-images'),
      formats: {
        webp: {
          quality: 60
        }
      },
      resize: {
        widths: [1920]
      },
      naming: {
        separator: '_',
        width: true
      },
      withMetadata: true,
      log: true
    }

    expect(setOptions(options)).toEqual(options);
  });

  test('Setting an option to undefined should convert it to default', () => {
    const options = {
      input: undefined,
      match: undefined,
      output: undefined,
      formats: undefined,
      resize: undefined,
      withMetadata: undefined,
      log: undefined
    };

    expect(setOptions(options)).toEqual({
      input: default_input_path,
      match: false,
      output: path.resolve(default_input_path, default_output_dir),
      formats: {},
      resize: {},
      naming: {
        separator: '_'
      },
      withMetadata: false,
      log: false
    });
  });

  /**
   * toThrow() works only if you call the testing function
   * inside the expect() callback
   * https://stackoverflow.com/a/46707558/
   */
  test('input === output should throw error', () => {
    const input = path.resolve(__dirname, 'images');

    expect(() => {
      setOptions({
        input,
        output: input
      })
    }).toThrow();
  });
});