var data = require("../data.json");

exports.sendText = function (request, response) {
    // Your code goes here
    console.log("in send " + request.params);
    var name = request.params.name;
    var artist = request.params.artist;
    var newText = request.query.text;
    var i;
    for (i = 0; i < data.chat.length; i++) {
        var temp = data.chat[i];
        // console.log(temp.artist);
        if (temp.artist == request.params.artist) {
            data.chat[i].text.push({
                "right": newText, "left": "Thanks for your message. AFK; BRB :)"
            });
            break;
        }
    }
    // for (var i = 0; i < chatData.chat.length; i++) {
    //     var temp = chatData.chat[i];
    //     // console.log(temp.artist);
    //     if (temp.artist == req.params.artist) {
    //         text = temp.text;
    //         break;
    //     }
    // }
    // chatData.chat.push({ "text": text });
    // console.log(artist);
    console.log(data.chat[i].text);
    response.render("chat", data.chat[i]);
}