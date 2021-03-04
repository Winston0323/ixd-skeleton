
/*
 * GET home page.
 */

var data = require('../data.json');

exports.viewDigital = function (req, res) {
    // console.log(data);
    var i = 0;
    let reg1 = new RegExp('Cartoon');
    let reg2 = new RegExp('Modern');
    let reg3 = new RegExp('Poster');
    var temp;
    var dataCopy = { "artists": [] };
    // console.log(data.artists.length);
    while (i < data.artists.length) {
        temp = data.artists[i].name.search(reg1);
        if (temp != -1) {
            dataCopy.artists.push(data.artists[i]);
            // dataCopy.artists.splice(i, 1);
        }
        else {
            temp = data.artists[i].name.search(reg2);
            if (temp != -1) {
                dataCopy.artists.push(data.artists[i]);
            } else {
                temp = data.artists[i].name.search(reg3);
                if (temp != -1) {
                    dataCopy.artists.push(data.artists[i]);
                }
            }
        }
        i++;
    }
    res.render('index', dataCopy);
};
