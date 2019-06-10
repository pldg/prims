const path = require('path');
const inquirer = require('inquirer');

async function ask_output(input) {
  return inquirer.prompt([{
    type: 'input',
    name: 'output',
    message: 'Output directory',
    default: path.resolve(input, 'processed-images'),
    filter: output => path.resolve(input, output)
  }]);
}

module.exports = ask_output;