var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 3000));

var Snoocore = require('snoocore');
var reddit = new Snoocore();

app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.get('/topnews', function (request, response) {
  response.send('Hello World!');
});

app.listen(3000, function () {
  console.log('App started. Listening on port 3000.');
});