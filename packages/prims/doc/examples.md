# Examples

See also [integration-tests](../tests/integration-tests) for more examples.

## Without options

```js
const prims = require('prims');

prims();
```

1. Load files from current working directory (unsupported formats are automatically skipped).
2. Compress images to [sharp defaults](http://sharp.pixelplumbing.com/en/stable/api-output/) (preserve original format).
3. Rename each image `[name]_[width]w_[height]w.[ext]`.
4. Output images to `path.join(process.cwd(), 'processed-images')`.

## Resize height and width

```js
const prims = require('prims');

const options = {
  input: path.resolve(__dirname, './images'),
  output: path.resolve(__dirname, './output_imgs'),
  resize: {
    widths: [ 720, 1280 ],
    heights: [ 480, 360 ]
  }
};

prims(options);
```

Let assume `images` folder contains only *sample.jpg*.

1. Load files from `images` folder.
2. Compress *sample.jpg* to [sharp defaults](http://sharp.pixelplumbing.com/en/stable/api-output/) (preserve original format).
3. *sample.jpg* is [resized](http://sharp.pixelplumbing.com/en/stable/api-resize/) to those width/height combinations:
    - sample_720w_480h.jpeg
    - sample_720w_360h.jpeg
    - sample_1280w_480h.jpeg
    - sample_1280w_360h.jpeg
4. Output to `./output_imgs`.

Note: If an input image has `.jpg` will be converted to `.jpeg`.

## Convert and resize

```js
const prims = require('prims');

const options = {
  input: path.resolve(__dirname, './images'),
  formats: {
    png: {},
    webp: {}
  },
  resize: {
    widths: [ 720, 1280 ],
    heights: [ 480, 360 ]
  }
};

prims(options);
```

Let assume `images` folder contains only *sample.jpg*.

1. Load files from `images` folder.
2. *sample.jpg* will be converted to [png](http://sharp.pixelplumbing.com/en/stable/api-output/#png) and [webp](http://sharp.pixelplumbing.com/en/stable/api-output/#webp) using Sharp default values.
3. The converted *sample.png* and *sample.webp* will also be [resized](http://sharp.pixelplumbing.com/en/stable/api-resize/):
    - sample_720w_480h.png
    - sample_720w_360h.png
    - sample_1280w_480h.png
    - sample_1280w_360h.png
    - sample_720w_480h.webp
    - sample_720w_360h.webp
    - sample_1280w_480h.webp
    - sample_1280w_360h.webp
4. Output to `path.join(process.cwd(), 'processed-images')`.
