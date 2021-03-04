
/*
 * GET home page.
 */

var data = require('../data.json');

exports.viewOrders = function (req, res) {
    console.log(data);
    res.render('orders', data);
};
