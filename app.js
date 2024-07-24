// var express = require('express')
// var app = express()

// app.get('/', function (req, res) {
// 	res.send('testing auto scaling')
// })

// var server = app.listen(3000, function () {
// 	var host = server.address().address
// 	var port = server.address().port
// 	console.log('Server listening at http://%s:%s', host, port)
// })

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
