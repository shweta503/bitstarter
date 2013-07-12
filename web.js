var express = require('express');
var fs = require('fs');
var infile = "index.html";

var getString = function() {
  fs.readFileSync('index.html', function(err, data) {
    if (err) { console.log(err);}
//    return data;
    console.log(data);
  });
};

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(fs.readFileSync(infile,'utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
