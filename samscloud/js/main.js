/* HEADER
---------------------------------------------------- */
const header = document.querySelector('.header');
const nav = header.querySelector('.nav');
const navLi = header.querySelectorAll('.nav > ul > li');
const overlay = document.querySelector('.overlay');
let lastScrollTop = 0;

nav.addEventListener('mouseover', function() {
	nav.classList.add('active');
	overlay.classList.add('active');
});

nav.addEventListener('mouseout', () => {
	nav.classList.remove('active');
	overlay.classList.remove('active');
});

window.addEventListener('scroll', function() {
	if (window.scrollY > 0) {
		header.classList.add('fixed');
	}

	if (window.scrollY > 700) {
		header.classList.remove('fixed');
	}

	let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    
    if (st < lastScrollTop) {
      	header.classList.add('fixed');
    }

    if (window.scrollY <= 0) {
		header.classList.remove('fixed');
	}

    lastScrollTop = st <= 0 ? 0 : st;
});

/* ACCORDEON
---------------------------------------------------- */
function accordeon() {
	let accordeon = document.querySelectorAll('.accordeon');
	let flag = true;

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
 
    let animation = document.querySelectorAll('.set-animation');
    let text = document.querySelectorAll('.set-animtext');
 
    function scrolling(e) {
    	if (animation.length) {
			for (var i = 0; i < animation.length; i++) {
				if (isPartiallyVisible(animation[i])) {
					animation[i].classList.add("anim"); 
				} else {
					animation[i].classList.remove("anim"); 
				}
			}
		}
    			
    	if (text.length) {
			for (var i = 0; i < text.length; i++) {
				if (isPartiallyVisible(text[i])) {
					text[i].classList.add("anim"); 
				} else {
					text[i].classList.remove("anim"); 
				}
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