
/*
 * GET home page.
 */

var order = require('../order.json');
var mes = require('../messages.json');

exports.addOrder = function (req, res) {
	var artist = req.params.artist;
	var pieceName = "newPiece";
	var status = "Finished";
	var newOrder = {
		"name": pieceName,
		"artist": artist,
		"status": status,
	}
	for (var i = 0; i < order.order.length; i++) {
		var temp = order.order[i];
		console.log(order.order.length);
		if (temp.artist == artist) {
			console.log("inner i:" + i);
			res.render('order', order);
			return;
		}
	}
	order.order.push(newOrder);
	console.log(newOrder);
	res.render('order', order);
}
// const { request } = require('express');
// var data = require('../logindata.json');
// exports.addFriend = function(request, response) {  
//     // Your code goes here
//     console.log("addfriend: " + request.query.name);
// 	data.users.push({
// 		"name": request.query.name
//         // "password": request.query.password
//     });
// 	// response.render("add", {
//     //     'name': request.query.name,
//     //     'password': request.query.password
//     // });
// };
