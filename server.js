var express = require('express')
var app = express()
var server = app.listen(1337);

// Sockets
// io = require('socket.io').listen(server)

// Body Parser
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// Session
var session = require('express-session')
app.use(session({
	secret: 'asdf',
	resave: false,
	saveUninitialized: true,
	cookie: { maxAge: 120000 }
}))


app.use(express.static(__dirname + '/client'))

// Mongo
require('./server/config/mongoose.js');
// SQL
// require('./server/config/sql.js');
// HTTP Routes
// require('./server/config/routes.js')(app);
// Socket Routes
// require('./server/config/socket.routes.js')(app);