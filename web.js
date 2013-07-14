var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs')
fs.readFile('index.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  
});


app.get('/', function(request, response) {
   response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(data);  
        response.end();
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
