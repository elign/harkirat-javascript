// Promise is mostly an object -> and we need one or two keys most of the time
// if there's a function it needs to look a certain way always
// that is it should look like a promise
// whenever you call an asynchoronous function 
// it returns you a promise immediately

// defining process is a bit difficult otherwise, using is
// easy

const fs = require("fs")

function promiseBody (resolve) {
    setTimeout(resolve, 5000)
}

function med1() {
    var answer = new Promise(promiseBody)
    return answer
}

function printThing() {
    console.log("medicine 1 received");
}

var medicinePromise = med1()
console.log(medicinePromise)
medicinePromise.then(printThing);

//----------------

function fileIsRead(content)  {
    console.log(content);
}

FileSystem.read("a.txt", fileIsRead)
FileSystem.read("a.txt").then(fileIsRead)

/// ---------------
function callback(err, data) {
    console.log(data)
}
fs.readFile('a.txt', 'utf-8', callback)
