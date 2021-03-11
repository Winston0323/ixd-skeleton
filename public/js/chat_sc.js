'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
    initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    $('.btn.status').click(getStatus);

    // $('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function getStatus(e) {
    // Prevent following the link
    e.preventDefault();
    // Get the div ID, e.g., "project3"
    // var projectID = $(.chat-panel).closest('.project').attr('id');
    // get rid of 'project' from the front of the id 'project3'
    location.href = "http://localhost:3000/artist/Acrylic%202&A.G./chat" + "/send?text=What%27s+the+status+of+the+order%3F";
    // $.post(url, callBackFn);
    // $.post(url)
    // console.log(url);
    // // http://localhost:3000/#
    // // https://lab6-170cse.herokuapp.com/#
    // console.log("User clicked on project " + idNumber);
}

// function callBackFn(response) {
//     console.log(response);
//     var d = ".artist#project" + response.id + " .details";
//     $(d).html("<p>" + response.title + "</p><p>" + response.date + "</p><img class='detailsImage' src=" + response.image + " /><p>" + response.summary + "</p");
// }