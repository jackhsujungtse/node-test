var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false});

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/error.html', function(req, res) {
	res.render('error');
});

app.listen(port);