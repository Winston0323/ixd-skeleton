var data = require('../data.json');
exports.viewLogin = function (req, res) {
  // console.log(data);
  res.render('login');
  // console.log("login data: ");
};

// 'use strict';
// // Call this function when the page loads (the "ready" event)
// $(document).ready(function() {
// 	initializePage();
// })

// function initializePage() {
// 	$('submit').click(addProjectDetails);

// 	// $('#colorBtn').click(randomizeColors);
// }
// var objPeople = [{
//   username: "sam",
//   password: "codify"
// },
// {
//   username: "ann",
//   password: "forever"
// },
// {
//   username: "tom",
//   password: "foever"
// },
// ]

// function getInfo() {
//   var username = document.getElementById("username").value
//   var password = document.getElementById("password").value
//   console.log("your username is " + username + " and your password is " + password);
// }