var data = require('../data.json');

exports.viewChat = function (req, res) {
  var name = req.params.name;
  var artist = req.params.artist;
  // var text = '';
  var i;

  // // console.log(artist);
  for (i = 0; i < data.chat.length; i++) {
    var temp = data.chat[i];
    // console.log(i + " " + temp.artist);
    // console.log(temp.artist);
    if (temp.artist == req.params.artist) {
      // text = temp.text;
      // console.log("break i = " + i);
      break;
    } else if (i == (data.chat.length - 1)) {
      data.chat.push({
        "artist": artist,
        "name": name,
        "title": "Hello",
        "text": []
      });
      // console.log("pushed empty i = " + i);
    }

  }

  res.render('chat', data.chat[i]);


  for (var i = 0; i < data.messages.length; i++) {
    var temp = data.messages[i];
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
  data.messages.push(newMessage);
};
