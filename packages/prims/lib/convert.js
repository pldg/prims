function convertToFormats(ctx) {
  let { image, formats } = ctx;
  const convertedImages = [];

  for (const format of Object.keys(formats)) {
    let options = formats[format];

    const converted = image
      .toFormat(format, options)
      .clone();

    convertedImages.push(converted);
  }

  return convertedImages;
}

function convertToInputExtension(ctx) {
  let { ext, image } = ctx;

  return image.toFormat(ext);
}

module.exports = {
  convertToFormats,
  convertToInputExtension
};
