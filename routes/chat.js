var data = require('../data.json');
var mes = require('../messages.json');

exports.viewChat = function (req, res) {
  var name = req.params.name;
  var artist = req.params.artist;
  var img = 0;
  for (var i = 0; i < data.artists.length; i++) {
    var temp = data.artists[i];
    if (temp.name == req.params.name) {
      img = temp.image;
      break;
    }
  }
  console.log(img);
  res.render('chat', {
    "artist": artist,
    "name": name,
    "imageName": img
  });
  
  for (var i = 0; i < mes.messages.length; i++) {
      var temp = mes.messages[i];
      if (temp.name == artist) {
        return;
      }
  }
    var newMessage = {
    "name": artist,
    "title": "Hello",
    "status": "read"
    }
    console.log(newMessage);
    mes.messages.push(newMessage);
};
