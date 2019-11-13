// モジュールの読み込み
var express = require('express'),
    app = express(),
    settings = require('./settings');

// routing
app.get('/', function(req, res) {
    res.send('hello world');
});
app.get('/about', function(req, res) {
    res.send('about this page');
});
app.get('/users/:name?', function(req, res) {
    if (req.params.name) {
        res.send('hello, ' + req.params.name);
    } else {
        res.send('Hello, nobody!');
    }
});

app.listen(settings.port);
console.log("Server Starting...");