
/*
 * GET home page.
 */

var data = require('../data.json');

exports.viewAvail = function (req, res) {
    var name = req.params.name;
    var temp = req.params.artist;
    // var temp = 
    // for (i = 0; i < data.artists.length; i++) {
    //     var temp = data.artists[i];
    //     // console.log(i + " " + temp.artist);
    //     // console.log(temp.artist);
    //     if (temp.artist == req.params.artist) {
    //         // text = temp.text;
    //         // console.log("break i = " + i);
    //         break;
    //     }

    // }
    // // console.log(data);
    res.render('availability', {
        "artist": temp,
        "name": name
    });
};
