$(document).ready(function() {

$('#subscribes').on("click", function() {
	event.preventDefault();

	var email = $("#formGroupExampleInput").val().trim();

	var newEmail = {
		email: email
	}

	 if ($("#inlineCheckbox1").is(':checked')) {
   	
   		 $.ajax("/kickstarter", {
	      type: "POST",
	      data: newEmail
	    }).then(
	      function() {
	        console.log("new subscriber");
	         location.reload();
	      }
	    );

		}
		if ($("#inlineCheckbox2").is(':checked')) {
   
   		 $.ajax("/newsletter", {
	      type: "POST",
	      data: newEmail
	    }).then(
	      function() {
	        console.log("new subscriber");
	         location.reload();
	      }

	    );
		}


});


});