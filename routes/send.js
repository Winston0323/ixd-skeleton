var data = require("../data.json");

exports.sendText = function (request, response) {
    // Your code goes here
    // console.log("in send " + request.params);
    var name = request.params.name;
    var artist = request.params.artist;
    var newText = request.query.text;
    console.log(newText);
    var i;
    for (i = 0; i < data.chat.length; i++) {
        var temp = data.chat[i];
        // console.log(temp.artist);
        if (temp.artist == request.params.artist) {
            // data.chat[i].text.push({
            //     "right": newText, "left": "Thanks for your message. AFK; BRB :)"
            // });
            data.chat[i].text.push({
                "lg-end": true,
                "from": "right",
                "txt": newText
            });
            break;
        }
    }
    if (newText.indexOf('status') != -1) {
        data.chat[i].text.push({
            "lg-end": false,
            "from": "left",
            "txt": "Here's the <a href='http://localhost:3000/addOrder/A.G.'>order status</a>"
        });
    }

    console.log(data.chat[i].text);
    response.render("chat", data.chat[i]);
}