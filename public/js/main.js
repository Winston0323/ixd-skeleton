'use strict';
var home = "http://localhost:3000"
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here
	$(".col-sm-3").click(projectClick);
	$(".home").click(projectClick1);
}
function projectClick(e){
	window.location.replace(window.location.href + "description");

}
function projectClick1(e){
	console.log(window.location.href);
	console.log("click");
	window.location.replace(home);

}