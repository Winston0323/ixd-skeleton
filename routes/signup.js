var data = require('../data.json');
var logindata = require('../logindata.json');
exports.viewSignup = function (req, res) {
    console.log(data);
    res.render('signup');
    // console.log("login data: ");
};