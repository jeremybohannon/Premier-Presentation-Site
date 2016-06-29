var express = require('express');

var app = express();
var path = require("path");
var http = require('http');

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/stylesheet.css', function(req, res){
	res.sendFile(path.join(__dirname + '/stylesheet.css'));
});

app.use(function (req, res, next) {
	res.status(404).send('Error: 404');
});

var server = app.listen(8080, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('My site is listening at http://%s:%s', host, port);
});
