var data = require('../data.json');

exports.viewAccount = function (req, res) {
    res.render('account',data);
};