const path = require('path');
const readInputFolder = require('../../lib/read-input-folder');

describe('Read input folder', () => {
  const input = path.resolve(__dirname, '../images');

  test('Should read doré-inferno-dante, waterhouse-miranda, sun', async () => {
    const files = await readInputFolder(input);

    expect(files[0]).toEqual(
      {
        name: 'doré-inferno-dante',
        ext: 'jpg',
        filepath: path.join(input, 'doré-inferno-dante.jpg')
      },
      {
        name: 'waterhouse-miranda',
        ext: 'png',
        filepath: path.join(input, 'waterhouse-miranda.png')
      },
      {
        name: 'sun',
        ext: 'svg',
        filepath: path.join(input, 'sun.svg')
      }
    );
  });

  test('Should match only doré-inferno-dante', async () => {
    const match = /doré-inferno-dante/;
    const files = await readInputFolder(input, match);

    expect(files[0]).toEqual({
      name: 'doré-inferno-dante',
      ext: 'jpg',
      filepath: path.join(input, 'doré-inferno-dante.jpg')
    });
  });
});
