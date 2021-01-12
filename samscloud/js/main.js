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
 
    let homeH1 = document.querySelector(".home h1");
    let homeH2 = document.querySelector(".home h2");
    let homeDescr = document.querySelector(".home p.descr");
    let homeThumb = document.querySelector(".home .thumb");
    let h2Title = document.querySelectorAll("h2.title");
    let subtitle = document.querySelectorAll("p.subtitle");

    let circle1 = document.querySelector(".list-circle li:nth-child(1) .circle");
    let circle2 = document.querySelector(".list-circle li:nth-child(2) .circle");
    let circle3 = document.querySelector(".list-circle li:nth-child(3) .circle");
    let circle4 = document.querySelector(".list-circle li:nth-child(4) .circle");

    let circleTitle1 = document.querySelector(".list-circle li:nth-child(1) .title");
    let circleTitle2 = document.querySelector(".list-circle li:nth-child(2) .title");
    let circleTitle3 = document.querySelector(".list-circle li:nth-child(3) .title");
    let circleTitle4 = document.querySelector(".list-circle li:nth-child(4) .title");

    let number1 = document.querySelector(".result ul li:nth-child(1) div.number");
    let number2 = document.querySelector(".result ul li:nth-child(2) div.number");
    let number3 = document.querySelector(".result ul li:nth-child(3) div.number");

    let resultH31 = document.querySelector(".result ul li:nth-child(1) h3");
    let resultH32 = document.querySelector(".result ul li:nth-child(2) h3");
    let resultH33 = document.querySelector(".result ul li:nth-child(3) h3");

    let resultThumb1 = document.querySelector(".result ul li:nth-child(1) .thumb span");
    let resultThumb2 = document.querySelector(".result ul li:nth-child(2) .thumb span");
    let resultThumb3 = document.querySelector(".result ul li:nth-child(3) .thumb span");

    let deliveryCircle1 = document.querySelector(".delivery ul li:nth-child(1) div.icon");
    let deliveryCircle2 = document.querySelector(".delivery ul li:nth-child(2) div.icon");
    let deliveryCircle3 = document.querySelector(".delivery ul li:nth-child(3) div.icon");

    let deliveryP1 = document.querySelector(".delivery ul li:nth-child(1) p");
    let deliveryP2 = document.querySelector(".delivery ul li:nth-child(2) p");
    let deliveryP3 = document.querySelector(".delivery ul li:nth-child(3) p");

    let disclaimer = document.querySelector(".disclaimer p");

    let effectsItem1 = document.querySelector(".effects .item:nth-last-child(1)");
    let effectsItem2 = document.querySelector(".effects .item:nth-last-child(2)");

    let girls = document.querySelector(".effects .descr .girls");

    let li1 = document.querySelector(".home .group li:nth-child(1)");
    let li2 = document.querySelector(".home .group li:nth-child(2)");
    let li3 = document.querySelector(".home .group li:nth-child(3)");
    let li4 = document.querySelector(".home .group li:nth-child(4)");
    let li5 = document.querySelector(".home .group li:nth-child(5)");
 
    function scrolling(e) {
 		
   		if (isPartiallyVisible(li5)) {
			li5.classList.add("anim");        	
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