var PORT = process.env.PORT || 8081;
var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.locals.pretty = true;

app.get('/', function(req, res) {
	res.render('pages/index');
});

var data = {
	messages: [
		{ id: '666', username: 'Markus', Country: 'Finland', Message: 'Greetings' },
		{ id: '666', username: 'Markus', Country: 'Finland', Message: 'Greetings' }
	]
};

app.get('/message', function(req, res) {
	res.render('pages/message', data);
});
app.get('*', function(req, res) {
	res.send('Cant find the requested page', 404);
});

app.listen(PORT, function() {
	console.log('Example app listening on port 8081!');
});
