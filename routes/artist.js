exports.viewArtist = function (req, res) {
  var name = req.params.name;
  console.log("the params is: " + req.query);
  res.render('artist', {
    "artistName": name
  });
};