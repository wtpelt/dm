var express = require('express');
var serveStatic = require('serve-static');
var http = require('http');
var express_enforces_ssl = require('express-enforces-ssl');

var cors = require('cors');

var app = express();

// use it before all route definitions
app.use(cors({origin: 'https://angular-cnq2zj.stackblitz.io'}));

app.enable('trust proxy');

app.use(express_enforces_ssl());

app.use(serveStatic('dist/myapp'));

http.createServer(app).listen(8080, function() {
	console.log('Example app listening on port 8080!');
});
