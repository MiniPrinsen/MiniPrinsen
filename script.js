$(document).ready(function(){

/*Script to make the site scroll when clicking on a href in the header.	*/
	var $root = $('html, body');

	$('a[href^="#"]').click(function() {
    	var href = $.attr(this, 'href');

	    $root.animate({
	       	scrollTop: $(href).offset().top
	    }, 500, function () {
	       	window.location.hash = href;
	    });

    return false;
	});	

	
	$("#workcirkel2").click(function(){
			$("#workcirkel2").animate({"height":"550" ,"width":"1200", "border-radius":"0","z-index":"2"},300);
		});
/*Script to make the header disappear when scrolling down & appear when scrolling up	*/
	var didScroll;
		var lastScrollTop = 0;
		var delta = 5;
		var topnavbarHeight = $('header').outerHeight();

		$(window).scroll(function(event){
	    	didScroll = true;
		});

		setInterval(function() {
	    	if (didScroll) {
	        	hasScrolled();
	        	didScroll = false;
	    	}
		}, 200);

		function hasScrolled() {
		    var st = $(this).scrollTop();
		    // Make sure they scroll more than delta
		    if(Math.abs(lastScrollTop - st) <= delta)
		        return;
		    // If they scrolled down and are past the navbar, add class .nav-up.
		    // This is necessary so you never see what is "behind" the navbar.
		    if (st > lastScrollTop && st > topnavbarHeight){
		        // Scroll Down
		        $('header').removeClass('show').addClass('hide'); 
		    } 
		    else {
		        // Scroll Up
		        if(st + $(window).height() < $(document).height()) {
		            $('header').removeClass('hide').addClass('show'); 
		        }
		    }
		    lastScrollTop = st;
		}


});