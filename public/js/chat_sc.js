'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
    initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    console.log("path = " + location.pathname);
    var path = location.pathname;
    $('.btn.status').click(function () {
        location.href = "http://localhost:3000" + path + "?text=What%27s+the+status+of+the+order%3F";
    });
    // $('#colorBtn').click(randomizeColors);
}