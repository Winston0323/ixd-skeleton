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
    $("#snedTextForm").submit(function (event) {

        // Stop form from submitting normally
        event.preventDefault();

        // Get some values from elements on the page:
        var $form = $(this),
            term = $form.find("input[name='s']").val(),
            url = $form.attr("action");

        // Send the data using post
        var posting = $.post(url, { s: term });

        // Put the results in a div
        posting.done(function (data) {
            var content = $(data).find("#content");
            $("#result").empty().append(content);
        });
    });
    $('.btn.status').click(function () {
        location.href = "http://localhost:3000" + path + "?text=What%27s+the+status+of+the+order%3F";
    });
    // $('#colorBtn').click(randomizeColors);
}