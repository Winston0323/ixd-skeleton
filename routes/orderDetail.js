
/*
 * GET home page.
 */

var data = require('../data.json');

exports.viewOrderDetail = function (req, res) {
  var artist = req.params.artist;
  var product;
  var date = 0;
  var price = 0;
  var name = 0;
  var status = 0;
  var progress = 0;
  //find the artist 
  for (var i = 0; i < data.order.length; i++) {
    var temp = data.order[i];
    if (temp.artist == artist) {
      name = temp.name;
      date = temp.date;
      price = temp.price;
      status = temp.status;
      product = temp.product;
      break;
    }
  }

  res.render('orderDetail', {
    "name": name,
    "date": date,
    "price": price,
    "status": status,
    "product": product,
  });
}
