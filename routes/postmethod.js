var order = require('../order.json');
var data = require('../data.json');
var message = require('../messages.json');
var chat = require('../chat.json');
var log = require('../login.json');

exports.change = function (req, res) {
    console.log("TESTTTTT");
  var user_name = req.body.user;
  var password = req.body.password;
  console.log("post reuqest User name = "+user_name+", password is "+password);
  res.send("success res");
  res.end("yes");
  console.log("data in postmethod");
  data.login = user_name;
  order.login = user_name;
  chat.login = user_name;
  log.login = user_name;
  message.login = user_name;
  console.log(data.login);
  console.log("the login name above is guest");
};