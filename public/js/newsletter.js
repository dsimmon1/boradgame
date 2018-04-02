$(document).ready(function() {

 $.ajax("/newsletter", {
        type: "GET",
      }).done(
        function(response) {
          console.log(response);
        });

       //    var results = response.data;
       //      var h2 = $("<h2>").text(show);
       //    $(".title").append(h2);
          

       //    for (var j = 0; j < results.length; j++) {
    			// var div = $("<div class='item'>");
       //    var image = $("<img>").attr("src", results[j].images.original_still.url).attr("height", "100").attr("width", "auto");
       //    image.attr("data-still", results[j].images.original_still.url);
       //    image.attr("data-animate", results[j].images.original.url);
       //    image.attr("data-state", "still");
       //    var rating = results[j].rating;
       //    var p = $("<p>").text("Rating: " + rating);
       //    div.append(image);
       //    div.append(p);
       //    $(".showInformation").append(div);
       //  }  

       //   $("img").on("click", function() {
       // 		 	var state = $(this).attr("data-state");
      	// 		if (state === "still") {
       //  			$(this).attr("src", $(this).attr("data-animate"));
       //  			$(this).attr("data-state", "animate");
     		// 	 	} 
     		// 	 	else {
       //  			$(this).attr("src", $(this).attr("data-still"));
       //  			$(this).attr("data-state", "still");
      	// 		}
    		// });
});	
