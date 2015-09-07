//libs
var jade = require('jade');


// application
var express = require('express');
var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/public');
//
// app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index', { title : 'Home' });
});

var server = app.listen(5000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
