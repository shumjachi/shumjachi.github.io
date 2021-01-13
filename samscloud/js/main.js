const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
	if (window.scrollY > 0) header.classList.add('fixed');
	else header.classList.remove('fixed');
});

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

		for (var i = 0; i < item.length; i++) {
			item[i].classList.remove('active');
		}
		
		this.parentNode.classList.toggle('active');
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