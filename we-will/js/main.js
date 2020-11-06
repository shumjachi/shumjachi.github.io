/* 
01 POPUP ------------------------------------ */

function popup() {
	let btn = document.querySelectorAll('.btn-popup');
	let overlay = document.querySelector('.popup-overlay');
	let popup = null;
	let close = null;
	let _this = this;

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
02 HIDDEN CONTENT ------------------------------------ */

function hidden() {
	let btn = document.querySelectorAll('.js-hidden');

	for (var i = 0; i < btn.length; i++) {
		btn[i].addEventListener('click', function() {
			this.closest('.hidden-content').classList.toggle('active');
		});
	}
}

hidden();

/* 
03 SLIDER ------------------------------------ */

$('.slider > ul').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	appendArrows: $('.slider > .center'),
});

/* 
04 MOB MENU ------------------------------------ */

let btnNav = document.querySelector('.btn-nav');
let btnNavClose = document.querySelector('.btn-navclose');
let nav = document.querySelector('nav');
let navLink = document.querySelectorAll('nav a');

btnNav.addEventListener('click', function() {
	nav.classList.toggle('active');
});

btnNavClose.addEventListener('click', function() {
	nav.classList.remove('active');
});

function subMenuMob() {
	for (var i = 0; i < navLink.length; i++) {
		navLink[i].addEventListener('click', function(e) {
			let li = this.closest('li');

			if (li != null) {
				li.querySelector('.dropdown').classList.toggle('active');
				return false;
			}
		});
	}
}

if ($(window).width() < 991) {
	subMenuMob();
}

$(window).resize(function() {
	if ($(window).width() < 991) {
		subMenuMob();
	}
});


/* 05 ANIMATION SCROLL PAGE
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
 
    let animTop = document.querySelectorAll(".main-links .item");
    let animSmal = document.querySelector(".main-descr .text-small");
    let animBig = document.querySelector(".main-descr .text-big");
    let animT = document.querySelectorAll(".main-stories .item h2");
    let animLeft = document.querySelectorAll(".main-stories .item p");
    let animB = document.querySelectorAll(".main-stories .item a");
 
    function scrolling(e) {
 		for (var i = 0; i < animTop.length; i++) {
 			if (isPartiallyVisible(animTop[i])) {
 				animTop[i].classList.add("anim");        	
       		} 			
 		}  

 		if (isPartiallyVisible(animSmal)) {
			animSmal.classList.add("anim");        	
   		}   

   		if (isPartiallyVisible(animBig)) {
			animBig.classList.add("anim");        	
   		} 

   		for (var i = 0; i < animT.length; i++) {
 			if (isPartiallyVisible(animT[i])) {
 				animT[i].classList.add("anim");        	
       		} 			
 		} 

 		for (var i = 0; i < animLeft.length; i++) {
 			if (isPartiallyVisible(animLeft[i])) {
 				animLeft[i].classList.add("anim");        	
       		} 			
 		} 

 		for (var i = 0; i < animB.length; i++) {
 			if (isPartiallyVisible(animB[i])) {
 				animB[i].classList.add("anim");        	
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

/* 
06 FORM QUIZ ------------------------------------ */
$('.form-quiz').submit(function(e) {
	e.preventDefault();

	let _this = $(this);
	$(this).addClass('preloader');

	setTimeout(function() {
		_this.hide();
		_this.removeClass('preloader');
		$('.cards').css('display', 'flex');
		let body = $("html, body");
		body.stop().animate({scrollTop:0}, 500, 'swing');

		setTimeout(function() {
			_this.find('input:checked').each(function(e) {
				$('.' + $(this).val()).fadeIn(1000, function() {
					$('.card-item.download').addClass('active');
				});
			});
		}, 500);
	}, 500);
});