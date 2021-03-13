
/*
 * GET home page.
 */

const e = require('express');
var data = require('../data.json');
var ready = false;
exports.addOrder = function (req, res) {
  	var product = 0;
  	var date = 0;
  	var price = 0;
	var artist = req.params.artist;
	var pieceName = 0;
	var status = "Finished";
	var progressbar = 0;
	var acceptable = 0;
	var finish = 0;
	var prepared = 0;
	var revise = false;
	var pay = false;
	
	var newOrder = {
		"name": pieceName,
		"artist": artist,
		"status": status,
	}
	for (var i = 0; i < data.orders.length; i++) {
		var temp = data.orders[i];
		if (temp.artist == artist) {
			pieceName = temp.name;
      		date = temp.date;
      		price = temp.price;
      		status = temp.status;
			product = temp.product;
			finish = temp.Finished;
			break;
		}
	}
	
	console.log("status is "+status);
  	if(status == "preparing"){
		var progressBlock = '<div class = "frame">'+
							'The order is in progress. Please check' +
							'the <a href="https://a7-artcommissioner.herokuapp.com/availability">Calendar</a> for more details'+
							'</div>';
		progressbar = "progress-prepared";
		acceptable = false;
		prepared = "active";
	}else if(status == "completed"){
		var progressBlock = '<div class = "frame">'+
						'<p>The order has been finished. Please confirm</p>' +
						'<p>if you accept the final product</p>'+
						'</div>';
		progressbar = "progress-finished";
		acceptable = true;
		prepared = "active";
	}else if(status == "accepted") {
		var progressBlock = '<div class = "frame">'+
						'<p>The order has been completed.</p>' +
						'</div>';
		progressbar = "progress-finished";
		acceptable = false;
		prepared = "active";
	}else if(status == "received"){
		var progressBlock = '<div class = "frame">'+
		'<p>The order was received by the artist!</p>' +
		'</div>';
		progressbar = "progress-received";
		acceptable = false;
		prepared = "";
		pay = true;
	}else if(status == "revising"){
		var progressBlock = '<div class = "frame">'+
		'<p>The artist is revising your changes!</p>' +
		'</div>';
		progressbar = "progress-prepared";
		acceptable = false;
		prepared = "active";
		revise = true;
	}else{
		var progressBlock = '<div class = "frame">'+
						'<p>Unavalible</p>' +
						'</div>';
		progressbar = "progress-received";
		acceptable = false;
		prepared = "active";
	}

	//document.getElementById("progress-description").innerHTML = codeBlock;	
	
	console.log("product name is " + product);
	res.render('orderDetail', {
    "name": pieceName,
    "date": date,
    "price": price,
    "status": status,
	"product": product,
	"detail": progressBlock,
	"progressbar": progressbar,
	"acceptable": acceptable, 
	"Finished": finish,
	"Prepared": prepared,
	"revise": revise,
	"pay": pay
  });
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
