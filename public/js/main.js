'use strict';
var home = "http://localhost:3000"
// var data = require('../data.json');
// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
    initializePage();
})

// $("#all").click(function (e) {
// 	// e.preventDefault();
// 	// $("#all").load(window.location.href + " .container masonry");
// 	// data.artists.splice(0, 1)
// 	console.log()
// 	$("#filter-refresh").load(" #;filter-refresh > *", data);
// 	// res.render('index', data);
// });
/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    $('figure.zoom').hover(function () {
        $(this).addClass('transition');
    }, function () {
        $(this).removeClass('transition');
    });
    // $('figure.zoom').on("taphold", function () {
    //     $(this).addClass('transition');
    // }, function () {
    //     $(this).removeClass('transition');
    // });
    $('figure.zoom').on('touchstart touchend', function (e) {
        e.preventDefault();
        $(this).toggleClass('transition');
    });
}