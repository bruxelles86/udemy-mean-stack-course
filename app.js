var express = require('express');
var app = express();
var path = require('path');
var routes = require('./routes');

app.set('port', 8080);

app.use('/css', function(req, res, next) {
    console.log(req.method, req.url);
    next();
});

app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', routes);

app.get('/json', function(req, res) {
   console.log("GET the json");
   res  
        .status(200)
        .json( {"jsondata" : true} );
});

app.get('/file', function(req, res) {
   console.log("GET the file");
   res  
        .status(200)
        .sendFile(path.join(__dirname, 'app.js'));
});

var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log("magic happens on port " + port);
});

console.log("me first");