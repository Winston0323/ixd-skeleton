'use strict';
var data;

// Call this function when the page loads (the "ready" event)
$(document).ready(function(){
	fetch('/data.json')
  		.then(response => response.json())
		  .then(d => {data = d;
				initializePage();
		});
	    $(".accept-btn").click(function(){
			console.log("status is", localStorage.getItem('status'));
			$(".accept-btn").hide();
			$(".decline-btn").hide();
			$("#progress-description").text("Final product accepted!");
			localStorage.setItem('status','accept');
			console.log("status is", localStorage.getItem('status'));
		});
		$(".decline-btn").click(function(){
			console.log("status is", localStorage.getItem('status'));
			$(".progress-container").replaceWith(' <div class="progress-container"><div class="circle"></div><div class="circle revise">Revising</div><div class="circle"></div><div class="revise-bar" id="progress"></div></div>');
			$(".accept-btn").hide();
			$(".decline-btn").hide();
			$("#progress-description").text("The artist is revising your changes!");
			//localStorage.setItem('status', 'revising');
			
		});
		$(".pay-btn").click(function(){
			console.log("status is", localStorage.getItem('status'));
			$(".progress-container").replaceWith(' <div class="progress-container"><div class="circle active">Received</div><div class="circle">Preparing</div><div class="circle">Finished</div><div class="progress-received" id="progress"></div></div>');
			$(".pay-btn").hide();
			$("#progress-description").text("We just receive your payment!");
			console.log("status is", localStorage.getItem('status'));
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
							'<p>the <a href="https://a7-artcommissioner.herokuapp.com/availability">Calendar</a> for more details</p>'+
							'</div>';
	}else if(status == "completed"){
		var progressBlock = '<div class = "frame">'+
						'<p>The order has been finished. Please confirm</p>' +
						'<p>if you accepet the final product</p>'+
						'</div>';
	}else if(status == "accepted") {
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