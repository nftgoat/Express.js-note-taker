const fs = require('fs');
const util = require('util');

//fs.readFile promise version

const readFromFile = util.promisify(fs.readFile);
