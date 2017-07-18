var express = require('express');
var app = express();

app.set('port', 8080);

app.get('/', function(req, res) {
   console.log("GET the homepage");
   res  
        .status(404)
        .send("Hello");
});

app.get('/json', function(req, res) {
   console.log("GET the json");
   res  
        .status(200)
        .json( {"jsondata" : true} );
});

var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log("magic happens on port " + port);
});

console.log("me first");