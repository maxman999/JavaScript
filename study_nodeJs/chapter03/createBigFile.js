const fs = require('fs');
const file = fs.createWriteStream('./big.txt');

for(let i = 0 ; i <= 10000000 ; i++){
    file.write('엄청나게 큰 파일');
}

file.end();