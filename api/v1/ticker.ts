var request = require('request');

var endPoint = 'https://api.coin.z.com/public';
var path     = '/v1/ticker?symbol=BTC';

request(endPoint + path, function (err, response, payload) {
    console.log(JSON.stringify(JSON.parse(payload), null, 2));
});