
/*
 * GET home page.
 */

var data = require('../data.json');

exports.viewSketch = function (req, res) {
    // console.log(data);
    var i = 0;
    let reg1 = new RegExp('Pen');
    let reg2 = new RegExp('Charcoal');
    var temp;
    var dataCopy = { "artists": [] };
    // console.log(data.artists.length);
    while (i < data.artists.length) {
        temp = data.artists[i].name.search(reg1);
        if (temp != -1) {
            // console.log(data.artists[i].name);
            dataCopy.artists.push(data.artists[i]);
            // dataCopy.artists.splice(i, 1);
        } else {
            temp = data.artists[i].name.search(reg2);
            if (temp != -1) {
                // console.log(data.artists[i].name);
                dataCopy.artists.push(data.artists[i]);
            }
        }
        i++;
    }
    res.render('index', dataCopy);
};
