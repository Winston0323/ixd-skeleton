
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');
var index = require('./routes/index');
//filter options
var indexAcrylic = require('./routes/indexAcrylic');
var indexDigital = require('./routes/indexDigital');
var indexSketch = require('./routes/indexSketch');
var indexPottery = require('./routes/indexPottery');
var indexWatercorlor = require('./routes/indexWatercolor');
var add = require('./routes/add');
var messages = require('./routes/messages');
var orders = require('./routes/orders');
var artist = require('./routes/artist');
var chat = require('./routes/chat');
var send = require("./routes/send");
var avail = require('./routes/availability');
var login = require('./routes/login');
var signup = require('./routes/signup');
var orderDetail = require('./routes/orderDetail')
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
//filter options
app.get('/acrylic', indexAcrylic.viewAcrylic);
app.get('/digital', indexDigital.viewDigital);
app.get('/sketch', indexSketch.viewSketch);
app.get('/pottery', indexPottery.viewPottery);
app.get('/watercolor', indexWatercorlor.viewWatercolor);
app.get('/messages', messages.viewMessages);

app.get('/orderDetail', orderDetail.viewOrderDetail);

app.get('/orders', orders.viewOrders);
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

