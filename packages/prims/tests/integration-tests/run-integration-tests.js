const path = require('path');
const deleteFolderRecursive = require('../delete-folder-recursive');
const testWithoutOptions = require('./without-options');
const testMatch = require('./match');
const testFormats = require('./formats');
const testResize = require('./resize');
const testAllOptions = require('./all-options');
const testMultipleOptions = require('./multiple-options');

console.log(`
==========================================
Running tests/integration-tests/
- For more info read comments inside files
==========================================
`);

const output = path.resolve(__dirname, '../output-images');

deleteFolderRecursive(output);

runIntegrationTests();

async function runIntegrationTests() {
  await testWithoutOptions();
  await testMatch();
  await testFormats();
  await testResize();
  await testAllOptions();
  await testMultipleOptions();

  console.log(`
====================================
End of integration tests
- Warnings for extensions are normal
====================================
`)
}