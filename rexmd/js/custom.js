$(window).on('load', function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('html').addClass('ios');
	};
	$('body').removeClass('loaded');
});

$(function(){
    if($('.reviews').length){
        $('.reviews').slick({
        	slidesToShow: 3,
        	slidesToScroll: 3,
        	arrows: false,
        	dots: true,
        	responsive: [
        		{
        			breakpoint: 992, 
        			settings: {
        				slidesToShow: 2, 
        				slidesToScroll: 2,
        			}
        		},
        		{
        			breakpoint: 767, 
        			settings: {
        				slidesToShow: 1, 
        				slidesToScroll: 1,
        			}
        		}
        	]
        });
    };


	$('.accordion__head').on('click', function(){
		var el = $(this);
		var elNext = $(this).next();
		$('.accordion__head').not(el).removeClass('open')
		$('.accordion__body').not(elNext).slideUp(200)
		el.next('.accordion__body').slideToggle(200);
		el.toggleClass('open');
		return false;
	});

	$('.navbar-toggle').on('click', function(){
		$(this).toggleClass('is-active');
		$('.navbar').toggleClass('is-open')
	})

    $('.btn-link').on('click', function(e) {
        e.preventDefault();
        var top = $('.section-reviews').position().top;
        $('html, body').animate({scrollTop: top}, 1000);
    });

    $('.doctors-button').on('click', function(e) {
        $('.doctors-dropdown').slideToggle(300);
    });

});