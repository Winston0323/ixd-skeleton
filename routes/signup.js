var data = require('../data.json');
exports.viewSignup = function (req, res) {
    console.log(data);
    res.render('signup');
    // console.log("login data: ");
};