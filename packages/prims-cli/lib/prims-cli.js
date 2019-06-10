#!/usr/bin/env node

const prims = require('prims');
const ask_input = require('./ask-input');
const ask_output = require('./ask-output');
const ask_resize = require('./ask-resize');
const ask_formats = require('./ask-formats');
const ask_metadata = require('./ask-metadata');
const colorLightBlue = '\033[1;34m';
const colorReset = '\033[0m';

console.info(
  `\nWelcome to prims-cli:` +
  `\n- Press ${colorLightBlue}Enter${colorReset} to choose default answer` +
  `\n- Press ${colorLightBlue}Ctrl+c${colorReset} to quit` +
  `\n- More info at https://github.com/pldg/prims` +
  `\n`
);

async function cli() {
  const { input } = await ask_input();
  const { output } = await ask_output(input);
  const formats = await ask_formats();
  const resize = await ask_resize();
  const { withMetadata } = await ask_metadata();

  const options = {
    input,
    output,
    formats,
    resize,
    withMetadata
  };

  return options;
}

cli().then(options => prims(options));