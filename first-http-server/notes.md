### -> Backend
* HTTP Servers 
* Authentication 
* Databases 
* Middlewares

### -> HTTP Servers
* Request Methods 
* URL Route 
* Query Params Headers Body 
* Status Codes 
* Response HTML etc.

## Client Server Model

client (browser, mobile app, desktop app) ---- server

chat.openai.com -> **URL** 

/backend-api/conversation -> **route**

```bash
#create package.json file
npm init -y

#install express package
npm install express
```

### Boilerplate Code
```javascript
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

Query Params, Header, & Body are some ways to send input to the API

URL, Route, Method

Method
* GET 
* POST 
* PUT 
* DELETE

Every request by default is GET.

You can almost do everything using GET Request.

But ideally, you should use the proper methods for specific types of requests.

## Header Request

```javascript
app.post('/', (req, res) => {
  
  res.send(sum(Number(req.headers.count)));
})
```
## Middleware

Official: Middleware functions are functions that have access to the request.object (req), the response object (res)

Browser -> Middleware -> API

Middleware are a way to capture request, 

Used generally for Authentication.

Take it as a function which is called before the route handler is called

* middlewares takes three arguments
* first control reaches the middlewares
* goal is to intercept requests
* there are many middleware available written by people that you can use in your code
* let's you track all the requests like counting the number of requests that is being made
* we don't write middlewares of our own, we simply use middlewares created by others

```javascript
let numberOfRequests = 0;
function middleware(req, res, next) {
  numberOfRequests++;
  console.log("inside middleware " + req.headers.count);
  // so when we the control reaches next() only then the code will executer further
  // if condition is not met then
  // res.send("Error that happened")
  // don't send two responses
  next();
}
//
app.use(middleware);
```
## Body

used 90% of times

we use body-parser library to be able to access body parameters 
Express doesn't support accessing body, thus we use body-parser library

we can't send res.send multiple times

```javascript
const bodyParser = require('body-parser')
app.use(bodyParser.json());

app.post('/body', (req, res) => {

  res.send(sum(req.body.counter));
})

// sending JSON as response
// 99% of times we send JSON as response
answerObject = {
  "name" : "harshit",
  "sum": 20,
  "mul": 30,
}

res.status(200).send(answerObject)

// sending html as response

app.get('/html', (req, res) => {
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>
          Hello There!
      </title>
  </head>
  <body>
      <i>okay okay</i>
  </body>
  </html>`)
})

app.get('/file', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})
```
## Things that server can send us back

### Status Code
* informational - 100 - 199
* successful - 200 - 299
* redirection - 300 - 399
* client error - 400 - 499
* server error- 500 - 599

```javascript
res.status(411).send("some message")
```

Default status code in express is 200


## Servers can talk to Servers

Browsers Postman NodeJS Processes ---- can talk to HTTP Servers

and HTTP server can also be a NodeJs Process