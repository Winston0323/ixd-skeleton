var data = require('../data.json');

exports.viewLogin = function (req, res) {
  console.log(data);
  res.render('login', data);
};
