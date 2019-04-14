// Collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});
    $(document).ready(function () {
    		if($(window).width() > 727) {
    			$(".top-angle").css("border-right-width",$(window).width());
				$(".top-angle-transparent").css("border-left-width",$(window).width());
    		}
    		else {
    			$(".top-angle").css("border-right-width",0);
				$(".top-angle-transparent").css("border-left-width",0);
    		}
    		collapseNavbar();
            $("#typed").typed({
                strings: ['Fresh Fruits', 'Breads n Eggs','Fresh Vegetables', 'Grocery items'],
                typeSpeed: 100,
                loop: true
             });
            $('.center').slick({
                centerMode: true,
                centerPadding: '330px',
                autoplay:false,
                focusOnSelect: true,
                slidesToShow:1,
                prevArrow:'',
                nextArrow:'',
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: true,
                            centerMode: true,
                            centerPadding: '40px',
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            arrows: true,
                            centerMode: true,
                            centerPadding: '40px',
                            slidesToShow: 1
                        }
                    }
                ]
            });
		});