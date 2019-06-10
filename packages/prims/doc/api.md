# API

```js
{
  input: String,
  match: /regex/,
  output: String,
  formats: {
    jpeg: Object,
    webp: Object,
    png: Object,
    tiff: Object
    /*
     * Format objects are the same as Sharp documentation,
     * inside each extension object you can use the same
     * properties / methods listed here:
     * http://sharp.pixelplumbing.com/en/stable/api-output/
     */
  },
  resize: {
    widths: Number[],
    heights: Number[]
    /*
     * You can use other Sharp resize options:
     * http://sharp.pixelplumbing.com/en/stable/api-resize/#resize
     */
  },
  withMetadata: Boolean,
  log: Boolean
}
```

| Param | Type | Description | Default
| --- | --- | --- | --- |
| \[options\] | `Object` | List of options. | `undefined` set all options to their defaults. |
| \[options.input\] | `String` | Absolute path to input folder. | `process.cwd()` |
| \[options.match\] | `Regex` | Load only files that match regex. | `undefined` |
| \[options.output\] | `String` | Absolute path to output folder. | `path.join(input, 'processed-images')` |
| \[options.formats\] | `Object` | List of [output formats](http://sharp.pixelplumbing.com/en/stable/api-output/#toformat) and their quality | `undefined` use same format of the image with default Sharp quality. |
| \[options.resize\] | `Object` | Accept Sharp [resize options](http://sharp.pixelplumbing.com/en/stable/api-resize/#parameters) object, but `width` is substituted with `widths` array and `height` is substituted with `heights` array. | `undefined` do not resize. |
| \[options.resize.widths\] | `Number[]` | Image will be resized to those widths in px (aspect ratio is preserved if `heights` is omitted). | `undefined` do not resize width. |
| \[options.resize.heights\] | `Number` | Image will be resized to those heights in px (aspect ratio is preserved if `widths` is omitted). | `undefined` do not resize height. |
| \[options.withMetadata\]| `Boolean` | If `true` image metadata will be preserved. | `false` |
| \[options.log\] | `Boolean` | Log info in console for each image. | `false` |
