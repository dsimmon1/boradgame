$(document).ready(function() {


$("#hi").on("mouseleave", function () {

   $(this).removeAttr("controls"); 
  });

$("#hi").on("mouseover", function () {
  $(this).attr("controls","controls"); 

  });

$('#hi').parent().click(function () {
    if($(this).children("#hi").get(0).paused){
       console.log("play");
        $(this).children("#hi").get(0).play();
        $(this).children(".playpause").fadeOut();
        $(".carousel-indicators").hide();
        $(".carousel-control-prev").hide();
        $(".carousel-control-next").hide();
    }else{
       $(this).children("#hi").get(0).pause();
        $(this).children(".playpause").fadeIn();
        $(".carousel-indicators").show();
        $(".carousel-control-prev").show();
        $(".carousel-control-next").show();
       console.log("paused");
    }
});

$('video').on('play', function (e) {
    $("#carouselExampleIndicators").carousel('pause');
});
$('video').on('stop pause ended', function (e) {
    $("#carouselExampleIndicators").carousel();
});

function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

$(".top").on("click", function () {
  var number = $(this).data("index");
  openModal();
  currentSlide(number);
  });


$("#close").on("click", function (){
  closeModal();
  });

$(".prev").on("click", function () {
  plusSlides(-1);
});

$(".next").on("click", function() {
  plusSlides(1);
});

$(".bottom").on("click", function () {
  var number = $(this).data("index");
  currentSlide(number);
  });


});