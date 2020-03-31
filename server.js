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
app.listen(8081);

console.log('8081 is the magic port');
