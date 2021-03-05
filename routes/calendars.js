
/*
 * GET home page.
 */

var data = require('../data.json');

exports.viewCalendars = function (req, res) {
    // console.log(data);
    for (var i = 0; i < data.orders.length; i++) {
        if (i == 0) {
            data.orders[i].number = "one";
        } else if (i == 1) {
            data.orders[i].number = "two";
        } else if (i == 2) {
            data.orders[i].number = "three";
        }
    }
    res.render('calendars', data);
}
