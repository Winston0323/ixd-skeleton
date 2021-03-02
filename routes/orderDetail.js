
/*
 * GET home page.
 */

var data = require('../data.json');

exports.viewOrderDetail = function (req, res) {
    res.render('orderDetail', data);
};
