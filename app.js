
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');
var index = require('./routes/index');
var add = require('./routes/add');
var messages = require('./routes/messages');
var order = require('./routes/order');
var artist = require('./routes/artist');
var chat = require('./routes/chat');
var send = require("./routes/send");
var avail = require('./routes/availability');
var login = require('./routes/login');
var signup = require('./routes/signup');
// var description1 = require('./routes/description1');
// Example route
// var user = require('./routes/user');

var app = express();
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
app.get('/messages', messages.viewMessages);
app.get('/order', order.viewOrder);
app.get('/addOrder/:artist', add.addOrder);
app.get('/artist/:name&:artist', artist.viewArtist);
app.get('/artist/:name&:artist/chat', chat.viewChat);
app.get('/availability', avail.viewAvail);
app.get('/artist/:name&:artist/chat/send', send.sendText)
app.get('/login', login.viewLogin);
app.get('/signup', signup.viewSignup);
// app.get('/add', add.addFriend);
// app.get('/description1', description1.view);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

