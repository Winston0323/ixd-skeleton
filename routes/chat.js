var data = require('../data.json');
var chatData = require('../chat.json');
var mes = require('../messages.json');

exports.viewChat = function (req, res) {
  var name = req.params.name;
  var artist = req.params.artist;
  // var text = '';
  var i;

  // // console.log(artist);
  for (i = 0; i < chatData.chat.length; i++) {
    var temp = chatData.chat[i];
    // console.log(temp.artist);
    if (temp.artist == req.params.artist) {
      // text = temp.text;
      break;
    }
    if (i = chatData.chat.length - 1) {
      // var obj = {
      //   "artist": artist,
      //   "name": name,
      //   "text": []
      // };
      // // const cString = JSOn.stringify(c);
      // fs.readFile(chatData, 'utf8', function readFileCallback(err, data) {
      //   if (err) {
      //     console.log(err);
      //   } else {
      //     obj = JSON.parse(data); //now it an object
      //     obj.chat.push({
      //       "artist": artist,
      //       "name": name,
      //       "text": []
      //     }); //add some data
      //     json = JSON.stringify(obj); //convert it back to json
      //     fs.writeFile(chatData, json, 'utf8', callback); // write it back 
      //   }
      // });
      chatData.chat.push({
        "artist": artist,
        "name": name,
        "text": []
      });
    }
  }
  console.log("in chat: " + chatData.chat[i].artist);
  chatData.chat[i].login = "guest";
  res.render('chat', chatData.chat[i]);
  // console.log(img);
  // res.render('chat', {
  //   "artist": artist,
  //   "name": name,
  //   "imageName": img
  // });

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
