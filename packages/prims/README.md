# Prims

![downloads-badge](https://img.shields.io/npm/dt/prims.svg)

A program built on top of [sharp](https://github.com/lovell/sharp) to batch processing images from an input directory.

- Support `jpeg`, `png`, `webp`, `tiff` images.
- Batch convert to a list of specified formats.
- Batch resize to a list of specified widths and/or heights.
- Fit image (cover, contain, fill).
- Preserve or remove image metadata.
- Automatically rename.
- Optional interactive CLI.
- Sharp is the only dependency.
- Runs in nodejs v8 and up.

I've built *prims* to easily work with [responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) in webpages.

## Install

`npm install --save-dev prims`

You can also install the optional [prims-cli](https://github.com/pldg/prims/blob/master/packages/prims-cli).

## Quick Start

```js
const prims = require('prims');

const options = {
  input: path.resolve(__dirname, './images'),
  formats: {
    jpeg: {
      quality: 70,
      progressive: true
    },
    png: {
      compressionLevel: 3
    },
    webp: {}
  },
  resize: {
    widths: [ 750, 1280 ]
  }
};

prims(options);
```

1. Load files inside `images` folder (unsupported formats are automatically skipped).
2. Convert images to:
    - [`jpeg`](http://sharp.pixelplumbing.com/en/stable/api-output/#jpeg) at 70% quality, use progressive scan.
    - [`png`](http://sharp.pixelplumbing.com/en/stable/api-output/#png) at 3 compression level.
    - [`webp`](http://sharp.pixelplumbing.com/en/stable/api-output/#webp) at default *sharp* quality.
3. Each converted images will also be [resized](http://sharp.pixelplumbing.com/en/stable/api-resize/) to 750px and to 1280px widths.
4. Because `resize.heights` is omitted, height for each image is calculated automatically to preserve aspect ratio.
5. Rename each image `[name]_[width]w_[height]h.[ext]`.
6. Output all processed images to `./images/processed-images`.

## Examples

Go to [examples](./doc/examples.md) page.

## API

Go to [api](./doc/api.md) page.

## Test locally

`yarn run test`

See [tests](./tests) folder.

## Contribution

*Prims* is still in development, all contributions are welcome.
