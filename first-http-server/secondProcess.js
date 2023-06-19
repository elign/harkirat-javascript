// fetch
const sendObj = {
    method: "POST"
}

function logResponseBody(jsonBody) {
    console.log(jsonBody);
}

function callbackFunction(result) {
    console.log(result);
    result.json().then(logResponseBody)
}

fetch("http://localhost:3000", sendObj).then(callbackFunction)