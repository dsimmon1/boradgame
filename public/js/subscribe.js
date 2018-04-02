$(document).ready(function() {

$('#subscribes').on("click", function() {
	event.preventDefault();

	var email = $("#formGroupExampleInput").val().trim();


	var newEmail = {
		email: email
	}

 $.ajax("/subscribe", {
      type: "POST",
      data: newEmail
    }).then(
      function() {
        console.log("new subscriber");
         location.reload();
      }
    );
});



});