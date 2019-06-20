const path = require('path');
const deleteFolderRecursive = require('../delete-folder-recursive');
const testWithoutOptions = require('./without-options');
const testMatch = require('./match');
const testConvert = require('./convert');
const testResizeWidths = require('./resize-widths');
const testResizeWidthsAndHeights = require('./resize-widths-heights');
const testAllOptions = require('./all-options');

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
  await testConvert();
  await testResizeWidths();
  await testResizeWidthsAndHeights();
  await testAllOptions();

  console.log(`
====================================
End of integration tests
- Warnings for extensions are normal
====================================
`)
}