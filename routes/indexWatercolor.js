
/*
 * GET home page.
 */

var data = require('../data.json');

exports.viewWatercolor = function (req, res) {
    // console.log(data);
    var i = 0;
    let reg = new RegExp('Watercolor');
    var temp;
    var dataCopy = { "artists": [] };
    // console.log(data.artists.length);
    while (i < data.artists.length) {
        temp = data.artists[i].name.search(reg);
        if (temp != -1) {
            // console.log(data.artists[i].name);
            dataCopy.artists.push(data.artists[i]);
            // dataCopy.artists.splice(i, 1);
        } else {
        }
        i++;
    }
    res.render('index', dataCopy);
};
