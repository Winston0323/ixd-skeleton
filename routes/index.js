
/*
 * GET home page.
 */

var data = require('../data.json');

exports.view = function (req, res) {
  console.log("testsss");
  res.render('index', data);
};
