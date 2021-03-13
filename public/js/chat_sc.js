'use strict';
var i = 0;
// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
    initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    var path = location.pathname;
    $("#sendTextForm").submit(function (event) {

        // Stop form from submitting normally
        event.preventDefault();
        // Get some values from elements on the page:
        var $form = $(this),
            term = $form.find("input[name='txt']").val(),
            // url = $form.attr("action");
            url = "https://a8-artcommissioner.herokuapp.com" + path;
        // Send the data using post
        var posting = $.post(url, { txt: term, p: url });

        posting.done(function (data) {
            location.reload();
            // var content = $(data).find("#content");
        });
    });
    $('.btn.status').click(function () {
        event.preventDefault();
        // Get some values from elements on the page:
        var term = "I would like to know my order status",
            // url = $form.attr("action");
            url = "https://a8-artcommissioner.herokuapp.com" + path;
        var posting = $.post(url, { txt: term, p: url });

        posting.done(function (data) {
            location.reload();
            // var content = $(data).find("#content");
        });
    });
    $('.btn.inquiry').click(function () {
        event.preventDefault();
        // Get some values from elements on the page:
        var term = "I'm looking to commission a piece of work. Do you have any open commission spot?",
            // url = $form.attr("action");
            url = "https://a8-artcommissioner.herokuapp.com" + path;
        var posting = $.post(url, { txt: term, p: url });

        posting.done(function (data) {
            location.reload();
            // var content = $(data).find("#content");
        });
    });
    $('.btn.cancel').click(function () {
        event.preventDefault();
        // Get some values from elements on the page:
        var term = "I'd like to cancel my order.",
            // url = $form.attr("action");
            url = "https://a8-artcommissioner.herokuapp.com" + path;
        var posting = $.post(url, { txt: term, p: url });

        posting.done(function (data) {
            location.reload();
            // var content = $(data).find("#content");
        });
    });
    $('.btn.pay').click(function () {
        event.preventDefault();
        // Get some values from elements on the page:
        var term = "Here's the deposit.",
            // url = $form.attr("action");
            url = "https://a8-artcommissioner.herokuapp.com" + path;
        var posting = $.post(url, { txt: term, p: url });

        posting.done(function (data) {
            location.reload();
            // var content = $(data).find("#content");
        });
    });
    // $('#colorBtn').click(randomizeColors);
}