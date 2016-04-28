$(document).ready(function() {
	$.getScript("assets/plugins/backstretch/jquery.backstretch.min.js", function(){
		$(".fullscreen-static-image").backstretch([
	  "assets/img/bg/2.jpg", "assets/img/bg/3.jpg",
	  ], {duration: 8000, fade: 800});
		$(".fullscreen-static-image1").backstretch([
	  "prostreetlogo2light.png",
	  ], {duration: 8000, fade: 800});
		$(".fullscreen-static-image2").backstretch([
	  "assets/img/bg/img4.jpg",
	  ], {duration: 8000, fade: 800});
		$(".fullscreen-static-image3").backstretch([
	  "assets/img/bg/img5.jpg",
	  ], {duration: 8000, fade: 800});
		$(".fullscreen-static-image4").backstretch([
	  "assets/img/bg/img6.jpg",
	  ], {duration: 8000, fade: 800});
		$(".fullscreen-static-image5").backstretch([
	  "assets/img/bg/img7.jpg",
	  ], {duration: 8000, fade: 800});
		$(".fullscreen-static-image6").backstretch([
	  "assets/img/bg/img8.jpg",
	  ], {duration: 8000, fade: 800});
	});
});
