const inquirer = require('inquirer');

function ask_metadata() {
  return inquirer.prompt([{
    type: 'confirm',
    name: 'withMetadata',
    message: 'Include metadata?',
    default: false
  }]);
}

module.exports = ask_metadata;