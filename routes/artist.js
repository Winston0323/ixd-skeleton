var data = require('../data.json');

exports.viewArtist = function (req, res) {
  var name = req.params.name;
  var artist = req.params.artist;
  var img = 0;
  //find the artist 
  for (var i = 0; i < data.artists.length; i++) {
    var temp = data.artists[i];
    if (temp.name == req.params.name) {
      img = temp.image;
      break;
    }
  }
  console.log(img);
  res.render('artist', {
    "artist": artist,
    "name": name,
    "imageName": img
  });
};