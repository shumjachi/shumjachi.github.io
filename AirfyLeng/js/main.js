/* HEADER
---------------------------------------------------- */
const header = document.querySelector('.header');
const body = document.querySelector('body');
const btnMenu = document.querySelector('.btn-menu');
const overlay = document.querySelector('.overlay');

btnMenu.addEventListener('click', function() {
	body.classList.toggle('header-active');
	overlay.classList.toggle('header-active');
});

document.addEventListener('scroll', function() {
	if (window.scrollY > 0) {
		body.classList.add('scroll-body');
	} else {
		body.classList.remove('scroll-body');
	}
});

/* ANIMATION
---------------------------------------------------- */

const rooms = document.querySelectorAll('button.room');
const animationWrap = document.querySelector('.css-animation');

const waveSpan1 = document.querySelectorAll('.css-animation .wave span.span-1');
const waveSpan2 = document.querySelectorAll('.css-animation .wave span.span-2');

rooms.forEach(room => {
    room.addEventListener('click', e => {
        e.preventDefault();

        const dataRoom = room.getAttribute('data-room');
        const roomClass = 'room-' + dataRoom;
        
        if ( !animationWrap.classList.contains(roomClass) ) {
            animationWrap.classList.remove('room-1', 'room-2', 'room-3', 'room-4', 'room-5', 'room-6');
            animationWrap.classList.add(roomClass);
        } else {
            animationWrap.classList.remove('room-1', 'room-2', 'room-3', 'room-4', 'room-5', 'room-6');
        }

        willChange();
    });
});

function willChange() {
    animationWrap.classList.add('will-change');

    setTimeout(() => {
        animationWrap.classList.remove('will-change');
    }, 1000);
}

/* SLICK
---------------------------------------------------- */
$('.slider ul').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	autoplay: true,
	autoplaySpeed: 5000,
	arrows: false,
	centerMode: true,
	centerPadding: '50px',
	responsive: [
		{
		    breakpoint: 1024,
		    settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		        centerPadding: '30px',
		    }
	    },
	    {
		    breakpoint: 500,
		    settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        centerMode: false,
		        centerPadding: '0',
		    }
	    },
	]
});

$('.business-slider .inner').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: true
});

$('.slider-horizontal').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	fade: true,
	asNavFor: '.slider-vertical'
});

$('.slider-vertical').slick({
	slidesToShow: 4,
	slidesToScroll: 4,
	asNavFor: '.slider-horizontal',
	vertical: true,
	verticalSwiping: true,
	arrows: false,
	responsive: [
		{
		    breakpoint: 769,
		    settings: {
		        vertical: false
		    }
	    },
	]
});

function slickList() {
	if ($(window).width() < 991) {
		$('.list-partner').not('.slick-initialized').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			arrows: false,
			responsive: [
				{
				    breakpoint: 500,
				    settings: {
				        slidesToShow: 2
				    }
			    },
			]
		});
	} else {
		if ($('.list-partner').hasClass('slick-initialized')) {
			$('.list-partner').slick('unslick');
		}		
	}
}

$(window).resize(function() {
	slickList();
});

slickList();

/* ACCORDEON
---------------------------------------------------- */
function accordeon() {
	let accordeon = document.querySelectorAll('.accordeon');

	if (accordeon != null) {
		for (var i = 0; i < accordeon.length; i++) {
			item = accordeon[i].querySelectorAll('.item-accordeon');

			for (var j = 0; j < item.length; j++) {
				let btn = item[j].querySelector('.btn-accordeon');
				
				btn.addEventListener('click', openAccordeon);
			}
		}
	}

	function openAccordeon(e) {
		let item = this.closest('.accordeon').querySelectorAll('.item-accordeon');
		let inner = this.parentNode.querySelector('.inner');
		let content = this.parentNode.querySelector('.content-accordeon');

		for (var i = 0; i < item.length; i++) {
			item[i].classList.remove('active');
			item[i].querySelector('.content-accordeon').removeAttribute('style');
		}
		
		this.parentNode.classList.add('active');
		content.style.height = inner.clientHeight + 'px';		
	}
}

accordeon();

/* TABS
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
	}
}

tabs();

/* ANIMATION SCROLL PAGE
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
 
    let animTextLeft = document.querySelectorAll('.anim-textleft');
    let animTextRight = document.querySelectorAll('.anim-textright');
    let animScale = document.querySelectorAll('.anim-scale');
    let animBottomTop = document.querySelectorAll('.anim-bottomtop');
    let listPartner = document.querySelectorAll('.list-partner li');
    let rotate3d = document.querySelectorAll('.umfang .card .item');
    let faqs = document.querySelectorAll('.faqs .item-accordeon');
    let tab = document.querySelectorAll('.instruction .tabs .control-tab li');
 
    function scrolling(e) {
    	for (var i = 0; i < animTextLeft.length; i++) {
			if (isPartiallyVisible(animTextLeft[i])) {
				animTextLeft[i].classList.add("animation"); 
			}
		}

		for (var i = 0; i < animTextRight.length; i++) {
			if (isPartiallyVisible(animTextRight[i])) {
				animTextRight[i].classList.add("animation"); 
			}
		}

		for (var i = 0; i < animBottomTop.length; i++) {
			if (isPartiallyVisible(animBottomTop[i])) {
				animBottomTop[i].classList.add("animation"); 
			}
		}

		for (var i = 0; i < listPartner.length; i++) {
			if (isPartiallyVisible(listPartner[i])) {
				listPartner[i].classList.add("animation"); 
			}
		}

		for (var i = 0; i < animScale.length; i++) {
			if (isPartiallyVisible(animScale[i])) {
				animScale[i].classList.add("animation"); 
			}
		}

		for (var i = 0; i < rotate3d.length; i++) {
			if (isPartiallyVisible(rotate3d[i])) {
				rotate3d[i].classList.add("animation"); 
			}
		}

		for (var i = 0; i < faqs.length; i++) {
			if (isPartiallyVisible(faqs[i])) {
				faqs[i].classList.add("animation"); 
			}
		}

		for (var i = 0; i < tab.length; i++) {
			if (isPartiallyVisible(tab[i])) {
				tab[i].classList.add("animation"); 
			}
		}
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