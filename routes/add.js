const { request } = require('express');
var data = require('../logindata.json');
exports.addFriend = function(request, response) {  
    // Your code goes here
    console.log("addfriend: " + request.query.name);
	data.users.push({
		"name": request.query.name
        // "password": request.query.password
    });
	// response.render("add", {
    //     'name': request.query.name,
    //     'password': request.query.password
    // });
};