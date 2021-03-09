
/*
 * GET home page.
 */

var data = require('../login.json');

exports.viewAvail = function (req, res) {
    // console.log(data);
    res.render('availability', data);
};
