const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const closeNav = document.querySelector('.close-nav');

burger.addEventListener('click', function() {
	nav.classList.toggle('active');
	console.log(nav);
});

closeNav.addEventListener('click', function() {
	nav.classList.remove('active');
});

$('.carousel').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	infinite: true,
	arrows: false,
	centerMode: true,
	centerPadding: '0px',
	responsive: [
	    {
		    breakpoint: 768,
		    settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		    }
	    },
	]
});