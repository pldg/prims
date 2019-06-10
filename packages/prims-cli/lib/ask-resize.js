const inquirer = require('inquirer');
const { errorOnlyNums } = require('./errors');

async function ask_resize(resize = undefined) {
  const { widths } = await ask_widths();
  const { heights } = await ask_heights();

  const isWidthsZero = widths[0] === 0;
  const isHeightsZero = heights[0] === 0;

  // The ask_widths and ask_heights functions returns array [0] by default
  // if both are [0] than `resize` is set to undefined
  // otherwise `resize` is set to object
  if (!isWidthsZero || !isHeightsZero) {
    const { fit } = await ask_fit();

    resize = {
      widths: !isWidthsZero ? widths : undefined,
      heights: !isHeightsZero ? heights : undefined,
      fit
    }
  }

  return resize;
}

function ask_widths() {
  return inquirer.prompt([{
    type: 'input',
    name: 'widths',
    message: 'List of widths',
    filter: widths => widths.trim().split(' ').map(Number),
    validate: widths => widths.some(w => isNaN(w)) ? errorOnlyNums() : true
  }]);
}

function ask_heights() {
  return inquirer.prompt([{
    type: 'input',
    name: 'heights',
    message: 'List of heights',
    filter: heights => heights.trim().split(' ').map(Number),
    validate: heights => heights.some(h => isNaN(h)) ? errorOnlyNums() : true
  }]);
}

// Resize fit option
// http://sharp.pixelplumbing.com/en/stable/api-resize/#parameters
function ask_fit() {
  return inquirer.prompt([{
    type: 'rawlist',
    name: 'fit',
    message: 'Choose how the image should fit both provided dimensions',
    choices: [
      'cover',
      'contain',
      'fill',
      'inside',
      'outside'
    ],
    default: 'cover'
  }]);
}

module.exports = ask_resize;
