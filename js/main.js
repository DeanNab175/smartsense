$(document).ready(function(){
	$('.carousel.smrts-slider').carousel({
		indicators: true
	});


	// Previous slide
	$( ".smart-sense .left.carousel-control" ).click(function() {
	  	
		$('.carousel.smrts-slider').carousel('prev');
	});

	// Next slide
	$( ".smart-sense .right.carousel-control" ).click(function() {
	  	
		$('.carousel.smrts-slider').carousel('next');
	});


	

	var mySlider;
	
	   mySlider= $('#flexifull-carousel').bxSlider({
	       auto: true,
	       controls: false,
	       mode: 'fade'
	   });

	   var mySliderC;
		
	   mySliderC= $('#chef-control-carousel').bxSlider({
	       auto: true,
	       controls: false,
	       mode: 'fade'
	   });

	   var mySliderM;
		
	   mySliderM= $('#manuel-carousel').bxSlider({
	       auto: true,
	       controls: false,
	       mode: 'fade'
	   });

   //mySlider.reloadShow();, chef-control-carousel, manuel


   $('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {

   		mySlider.reloadSlider();
   		mySliderC.reloadSlider();
   		mySliderM.reloadSlider();
	  
	  //$('#flexifull-carousel.carousel').carousel(0);
	  //console.log("tab clicked");
	  // $('#flexifull-carousel.carousel .item.active').removeClass('active');
	  // $('#flexifull-carousel.carousel .item:first-child').addClass('active');

	  //$('#chef-control.carousel .item.active').removeClass('active');
	  //$('#chef-control.carousel .item:first-child').addClass('active');

	  // $('#manuel.carousel .item.active').removeClass('active');
	  // $('#manuel.carousel .item:first-child').addClass('active');
	});


});

