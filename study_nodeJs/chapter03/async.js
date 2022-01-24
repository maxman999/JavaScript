const fs = require('fs');

console.log('시작1');
fs.readFile('./readme2.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('1번', data.toString());
})
fs.readFile('./readme2.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('2번', data.toString());
})
fs.readFile('./readme2.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('3번', data.toString());
})
console.log("끝");

// 순서를 보장하고 싶을 때
setTimeout(function() {
    console.log('시작2');
    fs.readFile('./readme2.txt', (err, data) => {
        if (err) {
            throw err;
        }
        console.log('1번', data.toString());
        fs.readFile('./readme2.txt', (err,data) => {
            if (err) {
                throw err;
            }
            console.log('2번', data.toString());
            fs.readFile('./readme2.txt', (err,data) => {
                if (err) {
                    throw err;
                }
                console.log('3번', data.toString());
                console.log("끝");
            })
        })
    })
}, 100);

// 콜백지옥 해결
const fs2 = require('fs').promises;

console.log('시작3');
fs2.readFile('./readme2.txt')
    .then((data) => {
        console.log('1번', data.toString());
        return fs.readFile('./readme2.txt');
    })
    .then((data) => {
        console.log('2번', data.toString());
        return fs.readFile('./readme2.txt');
    })
    .then((data) => {
        console.log('3번', data.toString());
        console.log("끝");
    })
    .catch((err) => {
        console.log(err);
    })
