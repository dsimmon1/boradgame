$(document).ready(function() {
const express = require("express");
const request = require("request");

$("#press").on("click", function() {
  console.log("click");
  var options = { method: 'GET',
  url: 'https://us12.api.mailchimp.com/3.0/campaigns/aad27e435c/content',
  headers: 
   { 'postman-token': '270d5330-5d0a-0fd5-14bb-4cba7de76d76',
     'cache-control': 'no-cache',
     authorization: 'Basic YW55c3RyaW5nOjVmNWYyNWVkYzFkMjg1NzFmNGZjMjVjNGJmNmY1MjA0LXVzMTI=',
     'content-type': 'application/json' } };
request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(response);

   });
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
