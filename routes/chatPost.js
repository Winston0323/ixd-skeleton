var data = require('../data.json');
var url = require('url');
const e = require('express');
exports.postChat = function (req, res) {
    var newText = req.body.txt;
    var newPath = req.body.p;

    function getPosition(string, subString, index) {
        return string.split(subString, index).join(subString).length;
    }
    function replaceAt(index, replacement) {
        return this.substr(0, index) + replacement + this.substr(index + replacement.length);
    }
    var artist, name;
    var temp = newPath.substring(getPosition(req.body.p, '/', 4) + 1, getPosition(req.body.p, '/', 5));
    artist = temp.substring(temp.indexOf('&') + 1, temp.length);
    name = temp.substring(0, temp.indexOf('&'));
    name = name.substring(0, name.indexOf('%20')) + ' ' + name.substring(name.indexOf('%20') + 3, name.length);

    var i;

    for (i = 0; i < data.chat.length; i++) {
        var temp1 = data.chat[i];

        if (temp1.artist == artist) {

            data.chat[i].text.push({
                "linkable": false,
                "lg-end": true,
                "from": "right",
                "txt": newText
            });
            break;
        } else if (i == (data.chat.length - 1)) {
            console.log('in else if');
            data.chat.push({
                "artist": artist,
                "name": name,
                "title": "Hello",
                "text": [{
                    "linkable": false,
                    "lg-end": true,
                    "from": "right",
                    "txt": newText
                }]
            });

        }

    }
    if (newText == "I'm looking to commission a piece of work. Do you have any open commission spot?") {
        data.chat[i].text.push({
            "linkable": false,
            "lg-end": false,
            "from": "left",
            "txt": "Thanks for contacting me. I'll get back to you as soon as possible. Or, you can refer to this <a href='http://localhost:3000/artist/" + temp + "/availability'>calendar</a> for availability."
        });
    } else {
        for (var j = 0; j < data.orders.length; j++) {
            if (data.orders[j].artist == artist) {
                if (newText == "I would like to know my order status") {
                    data.chat[i].text.push({
                        "linkable": true,
                        "lg-end": false,
                        "from": "left",
                        "txt": "Here's the order <a href='http://localhost:3000/addOrder/" + artist + "'>status</a>. "
                    });
                    break;
                } else if (newText == "Here's the deposit.") {
                    data.chat[i].text.push({
                        "linkable": false,
                        "lg-end": false,
                        "from": "left",
                        "txt": "Thanks for the deposit. See <a href='http://localhost:3000/transaction/" + artist + "'>transaction detail</a> here."
                    });
                    break;
                } else if (newText == "I'd like to cancel my order.") {
                    if (data.orders[j].status == "received") {
                        data.chat[i].text.push({
                            "linkable": false,
                            "lg-end": false,
                            "from": "left",
                            "txt": "Cancel request has been received. We will cancel the order for you as soon as possible."
                        });
                        break;
                    }
                    data.chat[i].text.push({
                        "linkable": false,
                        "lg-end": false,
                        "from": "left",
                        "txt": "Cancel request has been received. However, your order is being prepared, so cancelling at this stage may not get you full refund."
                    });
                    break;
                }
            } else if (j == (data.orders.length - 1)) {
                if (newText == "I would like to know my order status") {
                    console.log("in j else if");
                    data.chat[i].text.push({
                        "linkable": false,
                        "lg-end": false,
                        "from": "left",
                        "txt": "You haven't placed an order. If you'd like to commission me, leave me your requirements here; I'll get back to you soon. "
                    });
                } else if (newText == "I'd like to cancel my order.") {
                    data.chat[i].text.push({
                        "linkable": false,
                        "lg-end": false,
                        "from": "left",
                        "txt": "You haven't placed an order. If you'd like to commission me, leave me your requirements here; I'll get back to you soon. "
                    });
                } else if (newText == "Here's the deposit.") {
                    data.chat[i].text.push({
                        "linkable": false,
                        "lg-end": false,
                        "from": "left",
                        "txt": "You haven't placed an order. If you'd like to commission me, leave me your requirements here; I'll get back to you soon. "
                    });
                    break;
                }
            }
        }
    }


    console.log(data.chat[i]);
    res.render('chat', data.chat[i]);
};