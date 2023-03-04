const path = require('path')

const testFilePath = 'C:/nodejs_training-8/day1/learn.txt';

console.log(path.dirname(testFilePath));
console.log(path.basename(testFilePath));
console.log(path.extname(testFilePath));
console.log(path.isAbsolute(testFilePath));
console.table(path.parse(testFilePath));