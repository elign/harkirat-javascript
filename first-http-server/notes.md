## javascript

```javascript

```
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