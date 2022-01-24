const fs = require('fs');

fs.readFile('./readme.txt', (err, data) => {
    if(err) {
        throw err;
    }
    console.log(data);
    console.log(data.toString());
});

const fs2 = require('fs').promises;

fs2.readFile('./readme.txt').then( (data) => {
    console.log(data);
    console.log(data.toString());
    })
    .catch((err) => {
        console.log(err)
    })


fs2.writeFile('./writeme.txt', '글이 입력됩니다.')
    .then(() => {
        return fs2.readFile('./writeme.txt');
    })
    .then((data) => {
        console.log(data.toString());
    })
    .catch((err) => {
        console.error(err);
    });