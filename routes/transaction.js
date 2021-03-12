var data = require('../data.json');

exports.viewTran = function (req, res) {
  var product = 0;
  var date = 0;
  var price = 0;
  var artist = req.params.artist;
  var pieceName = 0;
  var status = 0;
  var finish = 0;
  var paid = 0;
  var detail =0;

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
if(status == "preparing"){
  detail = '<div class = "detail">'+
  '<p>We just receieve your $!</p>' +
  '<p>Payment will be sent to artist once you accept</p>'+
  '</div>';
  paid = true;
}else if(status == "completed"){
  detail = '<div class = "detail">'+
  '<p>We just receieve your $!</p>' +
  '<p>Payment will be sent to artist once you accept</p>'+
  '</div>';
  paid = true;
}else if(status == "accpeted") {
  detail = '<div class = "detail">'+
  '<p>We just receieve your $!</p>' +
  '<p>Payment will be sent to artist once you accept</p>'+
  '</div>';
  paid = true;
}else{
  detail = '<div class = "detail">'+
  '<p>We just receieve your $!</p>' +
  '<p>Payment will be sent to artist once you accept</p>'+
  '</div>';
  paid = false;
}

console.log("status is "+ status);
res.render('transaction', {
  "name": pieceName,
  "date": date,
  "price": price,
  "status": status,
  "product": product,
  "Finished": finish,
  "paid": paid,
  "detail": detail
});
};