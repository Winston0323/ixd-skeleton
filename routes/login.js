var data = require('../data.json');
exports.viewLogin = function (req, res) {
  console.log(data);
  res.render('login');
  
  // res.sendfile("views/login.handlebars");
};

