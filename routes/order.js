
/*
 * GET home page.
 */

var data = require('../data.json');

exports.viewOrder = function (req, res) {
    console.log(data);
    res.render('order', data);
};
