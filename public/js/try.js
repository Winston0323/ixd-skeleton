// $(document).ready(function(){
//     $("#submitButton").on("click", function(){
//         alert("clicked!");
//       var x = $( "#myDiv" ).val();
//       console.log(x);
//       data.login.name = x;
//       $( "#demo" ).val(x);
//     });
// });
$(document).ready(function(){
  fetch('/data.json')
  .then(response => response.json())
  .then(d => {data = d;
    initializePage();

  $("#submitButton").click(function(){
      // alert("clicked!");
    var x = $( "#myInput").val();
    console.log(x);
    data.login = x;
    $( "#demo" ).val(x);
  });

});


/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// $('#colorBtn').click(randomizeColors);
	console.log("successfully connect");
	addProjectDetails();
}