'use strict';
var data;

// Call this function when the page loads (the "ready" event)
$(document).ready(function(){
	fetch('/data.json')
  		.then(response => response.json())
		  .then(d => {data = d;
				initializePage();
		});
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// $('#colorBtn').click(randomizeColors);
	console.log("successfully connect");
	addProjectDetails();
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	var product = 0;
  	var date = 0;
  	var price = 0;
	var artist = getUrlParameter('artist');
	var pieceName = 0;
	var status = "Finished";
	console.log("artist is "+ artist);
	for (var i = 0; i < data.orders.length; i++) {
		var temp = data.orders[i];
		if (temp.artist == artist) {
			pieceName = temp.name;
      		date = temp.date;
      		price = temp.price;
      		status = temp.status;
      		product = temp.product;
			break;
		}
	}
	console.log(status);
  	if(status == "preparing"){
		var progressBlock = '<div class = "frame">'+
							'<p>The order is in progress. Please check</p>' +
							'<p>the <a href="http://localhost:3000/availability">Calendar</a> for more details</p>'+
							'</div>';
	}else if(status == "completed"){
		var progressBlock = '<div class = "frame">'+
						'<p>The order has been finished. Please confirm</p>' +
						'<p>if you accepet the final product</p>'+
						'</div>';
	}else if(status == "accpeted") {
		var progressBlock = '<div class = "frame">'+
						'<p>The order has been completed.</p>' +
						'</div>';
	}else{
		var progressBlock = '<div class = "frame">'+
						'<p>Unavalible</p>' +
						'</div>';
	}
	//$('#progress-description').html(progressBlock);
}
function projectClick(e){
	console.log(e);
}
function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};