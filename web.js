var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs')
fs.readFile('index.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});


app.get('/', function(request, response) {
  response.send('vaibhav'+data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
