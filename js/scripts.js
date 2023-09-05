(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		

		// slider
		$('.owl-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:false,
			autoplay:true,
			autoplayTimeout:2000,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				1000:{
					items:4
				}
			}
		})

	// menu area
	$(".hamburger").click(function(){
		$(".header-nav").slideToggle();
	  });
		

				
		
		
		
		
		
		
		
		
	});
})(jQuery);
