const fs = require('fs');

const readStream = fs.createReadStream('readme4.txt');
const writeStream = fs.WriteStream('writeme3.txt');

readStream.pipe(writeStream);