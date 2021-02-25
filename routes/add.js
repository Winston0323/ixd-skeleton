
/*
 * GET home page.
 */

var data = require('../order.json');

exports.addOrder = function(req, res){
	var artist = req.params.artist;
	var pieceName = "newPiece";
	var status = "Finished";
	var newOrder = {
		"name": pieceName,
		"artist": artist,
		"status": status,
	}
	console.log(newOrder);
	data.order.push(newOrder);
	res.render('order',data);
	
}