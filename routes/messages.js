
/*
 * GET home page.
 */

var data = require('../data.json');

exports.viewMessages = function (req, res) {
    console.log(data);
    res.render('messages', data);
};
