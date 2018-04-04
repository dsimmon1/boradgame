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