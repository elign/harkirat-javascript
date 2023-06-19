const express = require('express')
const fs = require('fs')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

app.use(bodyParser.json());
// middlewares takes three arguments
// first control reaches the middlewares
// goal is to intercept requests
// there are many middleware available written by people that you can use in your code
function middleware(req, res, next) {
  console.log("inside middleware " + req.headers.count);
  // so when we the control reaches next() only then the code will executer further
  // if condition is not met then
  // res.send("Error that happened")
  // don't send two responses
  next();
}
//
app.use(middleware);


function sum (val1) {
    return String(10 + val1);
}

app.get('/', (req, res) => {

  res.send(sum(Number(req.query.val1)));
})

app.post('/', (req, res) => {

  res.send(sum(Number(req.headers.count)));
})

// express doesn't support accessing body
// thus, we use 
// npm install body-parser library
app.post('/body', (req, res) => {

  res.send(sum(req.body.counter));
})

app.get('/html', (req, res) => {
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>
          Hello There!
      </title>
  </head>
  <body>
      <p>okay okay</p>
  </body>
  </html>`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

fs.readFile('notes.md', 'utf-8', (err, data) => {
    console.log("read succesful")
})