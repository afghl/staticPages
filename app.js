//libs
var jade = require('jade');

// application
var express = require('express');
var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/public');

// serve static files (js, css)
app.use('/lib', express.static('lib'));
app.use('/static', express.static('assets'));

// routes
app.get('/', function (req, res) {
  res.render('index', { title : 'Home' });
});
app.get('/hello_js', function (req, res) {
  res.render('hello_js');
})


var server = app.listen(5000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
