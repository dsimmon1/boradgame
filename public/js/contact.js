$(document).ready(function() {

$('#submit').on("click", function() {
	event.preventDefault();

	var name = $("#name").val().trim();
	var email = $("#email").val().trim();
	var message = $("#message").val().trim();


	var newContact = {
		name: name,
		email: email,
		message: message
	}

	console.log(newContact);

	$("#name").val('');
	$("#email").val('');
	$("#message").val('');


 $.ajax("/contact", {
      type: "POST",
      data: newContact
    }).then(
      function() {
        console.log("new contact");
         location.reload();
      }
    );
});



});