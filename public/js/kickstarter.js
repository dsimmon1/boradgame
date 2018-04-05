$(document).ready(function() {
$('#subscribed').on("click", function() {
  event.preventDefault();

  var email = $("#emailForm").val().trim();

  var newEmail = {
    email: email
  }

  $("#emailForm").val('');

    $.ajax("/kickstarter", {
	      type: "POST",
	      data: newEmail
	    }).then(
	      function() {
	        console.log("new subscriber");
	      }
	    );

    });

});