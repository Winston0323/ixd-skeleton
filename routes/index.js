
/*
 * GET home page.
 */

var data = require('../data.json');
var login = require('../login.json')

exports.view = function (req, res) {
  console.log("loading home page");
  // console.log(JSON.stringify({"artists": data.artists, "login": login.login}));
  res.render('index', data);
  console.log("RENDER home page");
  // res.send('<script>window.location.href="http://localhost:3000/";</script>');
  // res.render('index', JSON.stringify({"artists": data.artists, "login": login.login}));
};
