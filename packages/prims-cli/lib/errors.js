function errorOnlyNums() {
  throw new Error('You can only provide numbers');
}

module.exports = {
  errorOnlyNums
};