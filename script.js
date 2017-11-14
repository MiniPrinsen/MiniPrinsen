$(document).ready(function(){
	showSlides(slideIndex);
/*Script to make the site scroll when clicking on a href in the header.	*/
	var $root = $('html, body');

	$('a[href^="#"]').click(function() {
    	var href = $.attr(this, 'href');

	    $root.animate({
	       	scrollTop: $(href).offset().top
	    }, 1000, function () {
	       	window.location.hash = href;
	    });

    return false;
	});	

$(document).ready(function () {
  var toggle;
  
  $("#workcirkel3,#workcirkel2, #workcirkel1")
    .click(function (e) {
        e.stopPropagation();
        toggle = !toggle;
        if (toggle) {

          $(this)
            .stop(true, false)

            .animate({
            "background-color" :"#000000",
              width: "36%",
              height: "65%",
              "border-radius":"5%"
            });

        }
        else {
        	
          $(this)
            .stop(true, false)
            
            .animate({
              width: "21%",
              height: "40%",
              "border-radius":"50%"

            })
            .removeClass('darken');
        }
    });   
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

var slideIndex=1;

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
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
      dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}