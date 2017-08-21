var express = require('express');
var app = express();
var response_json = '{"code":200, "message":"success", "payload":{"name":"keylor navas", "team":"real madrid"}';

app.get('/', function (req, res) {
    res.send(response_json);
    console.log(response_json);
});

app.listen(3000, function () {
    console.log('Endpoint #1 listening on port 3000!');
});
