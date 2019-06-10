const validFormats = require('../../lib/valid-formats');
const isInputExtensionValid = require('../../lib/is-input-extension-valid');

describe('Input extension', () => {
  validFormats.forEach(ext => {
    test(`${ext} should be valid`, () => {
      expect(isInputExtensionValid({ ext })).toBe(true);
    });
  });

  test('.txt should console.warn', () => {
    let log = '';

    // https://jestjs.io/docs/en/mock-functions
    console['warn'] = jest.fn(consoleInput => log += consoleInput);

    isInputExtensionValid({ ext: 'txt', name: 'hello' });

    expect(log).toBe('Warning: Invalid extension: File not processed: hello.txt');
  });
});
