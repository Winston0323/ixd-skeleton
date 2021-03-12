var data = require('../data.json');

exports.change = function (req, res) {
    console.log("TESTTTTT");
  var user_name = req.body.user;
  var password = req.body.password;
  console.log("post reuqest User name = "+user_name+", password is "+password);
  res.send("success res");
  console.log("data in postmethod");
  data.login = user_name;
  console.log(data.login);
  console.log("the login name above is guest");
  // res.end("yes");
  // res.end("yes");
};