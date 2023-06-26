const fs = require('fs')


// ----------------- First way! -----------------//
function callback (err, data) {
    console.log(data + "1")
}
fs.readFile('a.txt', {encoding : "utf-8"}, callback)


// ---------------- Second way! -----------------//
fs.readFile('a.txt', {encoding : "utf-8"}, (err, data) => {
    console.log(data + "2");
})

// ---------------- Third way! ------------------//
fs.readFile('a.txt', {encoding : "utf-8"}, function (err, data) {
    console.log(data + "3");
})