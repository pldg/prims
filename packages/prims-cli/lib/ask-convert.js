const inquirer = require('inquirer');
const { errorOnlyNums } = require('./errors');

async function ask_convert(convert = {}) {
  const { format } = await ask_format();

  if (format !== 'Do not convert') {
    if (format === 'png') {
      const { compressionLevel } = await ask_png_compression();

      convert[format] = { compressionLevel };
    } else {
      const { quality } = await ask_jpeg_tiff_webp_compression();

      convert[format] = { quality };
    }

    const { next } = await ask_proceed();

    if (next === 'Select another format') {
      return await ask_convert(convert);
    }
  }

  return convert;
}

function ask_format() {
  return inquirer.prompt([{
    type: 'rawlist',
    name: 'format',
    message: 'Choose conversion format',
    choices: [
      'jpeg',
      'webp',
      'png',
      'tiff',
      'Do not convert'
    ],
    default: 'Do not convert'
  }]);
}

function ask_png_compression() {
  return inquirer.prompt([{
    type: 'input',
    name: 'compressionLevel',
    message: 'Set compression level (from 0 to 9)',
    filter: compressionLevel => Number(compressionLevel),
    validate: compressionLevel => {
      if (isNaN(compressionLevel)) {
        logError('onlyNums');
        return false;
      } else if (compressionLevel >= 0 && compressionLevel <= 9) {
        return true;
      } else {
        throw new Error('You can set compression level from 0 to 9');
      }
    },
    default: 9
  }]);
}

function ask_jpeg_tiff_webp_compression() {
  return inquirer.prompt([{
    type: 'input',
    name: 'quality',
    message: 'Set format quality (from 1 to 100)',
    filter: quality => Number(quality),
    validate: quality => {
      if (isNaN(quality)) {
        errorOnlyNums();
        return false;
      } else if (quality >= 1 && quality <= 100) {
        return true;
      } else {
        throw new Error('You can set quality from 1 to 100');
      }
    },
    default: 80
  }]);
}

function ask_proceed() {
  return inquirer.prompt([{
    type: 'rawlist',
    name: 'next',
    message: 'Continue or select another format?',
    choices: [
      'Continue',
      'Select another format'
    ],
    default: 'Continue'
  }]);
}

module.exports = ask_convert;
