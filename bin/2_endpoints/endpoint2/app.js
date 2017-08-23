var express = require('express');
var app = express();
var response_json = '{"code":200, "message":"success", "payload":{"name":"timothy figueroa", "team":"familia figueroa"}';

app.get('/', function (req, res) {
    res.send(response_json);
    console.log(response_json);
});

app.listen(4000, function () {
    console.log('Endpoint #2 listening on port 4000!');
});
