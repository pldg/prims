const path = require('path');
const inquirer = require('inquirer');

async function ask_input() {
  return inquirer.prompt([{
    type: 'input',
    name: 'input',
    message: 'Input directory',
    default: process.cwd(),
    filter: input => path.resolve(process.cwd(), input)
  }]);
}

module.exports = ask_input;