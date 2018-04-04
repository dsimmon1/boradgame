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

$("video").on("mouseleave", function () {

   $(this).removeAttr("controls"); 
  });

$("video").on("mouseover", function () {
  $(this).attr("controls","controls"); 

  });

$('#hi').parent().click(function () {
    if($(this).children("#hi").get(0).paused){
        $(this).children("#hi").get(0).play();
        $(".playb").css('opacity','0');
    }else{
       $(this).children("#hi").get(0).pause();
        $(".playb").css('opacity','1');
    }
});


});