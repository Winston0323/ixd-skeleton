
/*
 * GET home page.
 */

var order = require('../order.json');
var mes = require('../messages.json');

exports.addOrder = function(req, res){
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
	res.render('order', order);		
}
