var express = require('express');
var app = express();

app.set('port', 8080);

app.get('/', function(req, res) {
   console.log("GET the homepage");
   res.send("Hello");
});

var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log("magic happens on port " + port);
});

console.log("me first");