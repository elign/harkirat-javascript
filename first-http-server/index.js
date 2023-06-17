const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

function sum (val1) {
    return String(10 + val1);
}

app.get('/', (req, res) => {

  res.send(sum(Number(req.query.val1)));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

fs.readFile('notes.md', 'utf-8', (err, data) => {
    console.log("read succesful")
})