/* 
08 HIDDEN CONTENT ------------------------------------ */

function hidden() {
	let btn = document.querySelectorAll('.js-hidden');

	for (var i = 0; i < btn.length; i++) {
		btn[i].addEventListener('click', function() {
			this.closest('.hidden-content').classList.toggle('active');
		});
	}
}

function footerMobile() {
	if ($(window).width() < 700) {
		let item = document.querySelectorAll('.footer-item');

		for (var i = 0; i < item.length; i++) {
			item[i].querySelector('h5').classList.add('js-hidden');
			item[i].classList.add('hidden-content');
			item[i].querySelector('ul').classList.add('hidden');
		}

		hidden();
	} else {
		let item = document.querySelectorAll('.footer-item');

		for (var i = 0; i < item.length; i++) {
			item[i].querySelector('h5').classList.remove('js-hidden');
			item[i].classList.remove('hidden-content');
			item[i].querySelector('ul').classList.remove('hidden');
		}
	}	
}

footerMobile();

$(window).resize(function() {
	footerMobile();
});

$(window).scroll(function(){
	if ($(this).scrollTop() >= 50) {
		$('.header .head-line').addClass('fixed');
	} else {
		$('.header .head-line').removeClass('fixed');
	}
});

/* 01 SLICK
---------------------------------------------------- */

$('.day').slick({
	infinite: true,
	slidesToShow: 16,
	slidesToScroll: 7,
	prevArrow: '<span class="slick-arrow slick-prev"><svg width="23" height="26"><use xlink:href="#ic-arrslick"></use></svg></span>',
	nextArrow: '<span class="slick-arrow slick-next"><svg width="23" height="26"><use xlink:href="#ic-arrslick"></use></svg></span>',
	responsive: [
		{
		    breakpoint: 1200,
		    settings: {
		        slidesToShow: 10
		    }
	    },
		{
		    breakpoint: 991,
		    settings: {
		        slidesToShow: 7
		    }
	    },
	    {
		    breakpoint: 550,
		    settings: {
		        slidesToShow: 3,
				slidesToScroll: 3,
		    }
	    },
	]
});

$(window).resize(function() {
	slickMonth();
});

function slickMonth() {
	if ($(window).width() < 1000) {
		$('.calendar .month').not('.slick-initialized').slick({
			infinite: true,
			slidesToShow: 5,
			slidesToScroll: 3,
			prevArrow: '<span class="slick-arrow slick-prev"><svg width="23" height="26"><use xlink:href="#ic-arrslick"></use></svg></span>',
			nextArrow: '<span class="slick-arrow slick-next"><svg width="23" height="26"><use xlink:href="#ic-arrslick"></use></svg></span>',
			responsive: [
			    {
				    breakpoint: 550,
				    settings: {
				        slidesToShow: 3,
						slidesToScroll: 3,
				    }
			    },
			    {
				    breakpoint: 450,
				    settings: {
				        slidesToShow: 2,
						slidesToScroll: 2,
				    }
			    },
			]
		});
	} else {
		$('.calendar .month').filter('.slick-initialized').slick('unslick');
	}
}

slickMonth();


function slickTab(cls) {
	$('.slider-tab ' + cls).slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,	
		prevArrow: '<span class="slick-arrow slick-prev"><svg width="23" height="26"><use xlink:href="#ic-arrslick"></use></svg></span>',
		nextArrow: '<span class="slick-arrow slick-next"><svg width="23" height="26"><use xlink:href="#ic-arrslick"></use></svg></span>',
		appendArrows: $('.slider-tab .controls .inner'),
		appendDots: $('.slider-tab .controls .inner'),		
		adaptiveHeight: true
	});
}

slickTab('.tab-one');

function slickTabControl() {
	tabs();

	if ($(window).width() < 700) {
		$('.control-tab').not('.slick-initialized').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: false,
			responsive: [
			    {
				    breakpoint: 450,
				    settings: {
				        slidesToShow: 1,
						slidesToScroll: 1,
				    }
			    },
			]
		});

	} else {
		$('.control-tab').filter('.slick-initialized').slick('unslick');
	}
}

slickTabControl();

$(window).resize(function() {
	slickTabControl();
});


$('.atbalstita-slider').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	autoplay: true,
  	autoplaySpeed: 3000,
	prevArrow: '<span class="slick-arrow slick-prev"><svg width="23" height="26"><use xlink:href="#ic-arrslick"></use></svg></span>',
	nextArrow: '<span class="slick-arrow slick-next"><svg width="23" height="26"><use xlink:href="#ic-arrslick"></use></svg></span>',
	responsive: [
		{
		    breakpoint: 600,
		    settings: {
		        arrows: false
		    }
	    },
	    {
		    breakpoint: 450,
		    settings: {
		        slidesToShow: 2,
				slidesToScroll: 2,
		    }
	    },
	]
});

/* 02 TABS
---------------------------------------------------- */

function tabs() {
	let tabs = $('.tabs');
	let controls = null;
	let tabsItem = null;

	tabs.each(function() {
		controls = $(this).find('.control-tab li');
		tabsItem = $(this).find('.content-tab');

		controls.on('click', function() {
			openTab($(this));
		});
	});

	function openTab(_this) {
		let clsTab = _this.attr('data-tab');
		let tab = _this.closest('.tabs').find('.' + clsTab);

		_this.closest('.control-tab').find('li').each(function() {
			$(this).removeClass('active');
		});

		_this.closest('.tabs').find('.content-tab').each(function() {
			$(this).removeClass('active');
		});

		_this.addClass('active');
		tab.addClass('active');

		$('.slider-tab .content-tab').filter('.slick-initialized').slick('unslick');
		slickTab('.' + clsTab);
	}
}

tabs();

/* 03 PARALAX
---------------------------------------------------- */

function paralax(event) {
	this.querySelectorAll('.layer').forEach(layer => {
		let speed = layer.getAttribute('data-spped');

		layer.style.transform = `translate(${event.clientX*speed/1000}px, ${event.clientY*speed/1000}px)`;
	});
}

document.addEventListener('mousemove', paralax);

/* 
04 MOB MENU ------------------------------------ */

function mobileMenu() {
	let btnNav = document.querySelector('.btn-nav');
	let nav = document.querySelector('nav');

	btnNav.addEventListener('click', function() {
		nav.classList.toggle('active');
		btnNav.classList.toggle('active');
		document.querySelector('.head-line').classList.toggle('active');
	});
}

mobileMenu();

/* 
05 POPUP ------------------------------------ */

function popup() {
	let btn = document.querySelectorAll('.btn-popup');
	let overlay = document.querySelector('.popup-overlay');
	let popup = null;
	let close = null;
	let _this = this;
	console.log(overlay);
	for (var i = 0; i < btn.length; i++) {
		btn[i].addEventListener('click', function(e) {
			e.preventDefault();

			popup = document.querySelector('.' + this.getAttribute('data-popup'));
			close = popup.querySelector('.popup-close');

			let top  = window.pageYOffset || document.documentElement.scrollTop,
            left = window.pageXOffset || document.documentElement.scrollLeft;
			
			overlay.classList.add('active');
			popup.classList.add('active');
			popup.style.top = (top + 100) + 'px';

			close.addEventListener('click', closePopup);
        	overlay.addEventListener('click', closePopup);
		});
	}

	document.addEventListener('keydown', function(e) {
		if (e.keyCode == 27) closePopup(e);
	});

	function closePopup(e) {
        e.preventDefault();

        overlay.classList.remove('active');
        popup.classList.remove('active');
    }
}

popup();

/* 
06 ANHOR ------------------------------------ */

$('.anhor').click(function(e) {
	let cls = $(this).attr('data-anhor');
	let pos = $('.' + cls).position().top;

	let body = $("html, body");
	body.stop().animate({scrollTop:pos}, 500, 'swing');
});

/* 07 ANIMATION SCROLL PAGE
---------------------------------------------------- */

function animationScrollPage() {
	var isScrolling = false;
 
    window.addEventListener("scroll", throttleScroll, false);
 
    function throttleScroll(e) {
	    if (isScrolling == false) {
	        window.requestAnimationFrame(function() {
		        scrolling(e);
		        isScrolling = false;
	        });
	    }

	    isScrolling = true;
    }
 
    document.addEventListener("DOMContentLoaded", scrolling, false);
 
    let calendar = document.querySelector(".calendar");
    let banner = document.querySelector(".banner");
    let sliderTab = document.querySelector(".slider-tab");
    let lesl = document.querySelector(".lesl");
    let atbalstita = document.querySelector(".atbalstita");
    let balvas = document.querySelector(".balvas");
    let noteikumi = document.querySelector(".noteikumi");
    let prasibas = document.querySelector(".prasibas");
    let footer = document.querySelector(".footer");
 
    function scrolling(e) {
 		if (isPartiallyVisible(calendar)) calendar.classList.add("anim"); 

 		if (isPartiallyVisible(banner)) banner.classList.add("anim"); 

 		if (isPartiallyVisible(sliderTab)) sliderTab.classList.add("anim"); 

 		if (isPartiallyVisible(lesl)) lesl.classList.add("anim"); 

 		if (isPartiallyVisible(atbalstita)) atbalstita.classList.add("anim"); 

 		if (isPartiallyVisible(balvas)) balvas.classList.add("anim"); 

 		if (isPartiallyVisible(noteikumi)) noteikumi.classList.add("anim"); 

 		if (isPartiallyVisible(prasibas)) prasibas.classList.add("anim"); 

 		if (isPartiallyVisible(footer)) footer.classList.add("anim"); 
    }
 
    function isPartiallyVisible(el) {
	    var elementBoundary = el.getBoundingClientRect();
	 
	    var top = elementBoundary.top;
	    var bottom = elementBoundary.bottom;
	    var height = elementBoundary.height;
	 
	    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
    }
 
    function isFullyVisible(el) {
	    var elementBoundary = el.getBoundingClientRect();
	 
	    var top = elementBoundary.top;
	    var bottom = elementBoundary.bottom;
	 
	    return ((top >= 0) && (bottom <= window.innerHeight));
    }
}

animationScrollPage();