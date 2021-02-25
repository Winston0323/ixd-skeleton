
/*
 * GET home page.
 */

var data = require('../order.json');

exports.viewOrder = function (req, res) {
    console.log(data);
    res.render('order', data);
};
