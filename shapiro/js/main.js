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
 		if (isPartiallyVisible(homeH1)) {
			homeH1.classList.add("anim");        	
   		}   

   		if (isPartiallyVisible(homeH2)) {
			homeH2.classList.add("anim");        	
   		}   

   		if (isPartiallyVisible(homeDescr)) {
			homeDescr.classList.add("anim");        	
   		}   

   		if (isPartiallyVisible(homeThumb)) {
			homeThumb.classList.add("anim");        	
   		}   

   		for (var i = 0; i < h2Title.length; i++) {
	   		if (isPartiallyVisible(h2Title[i])) {
				h2Title[i].classList.add("anim");        	
	   		}      			
   		}

   		for (var i = 0; i < subtitle.length; i++) {
	   		if (isPartiallyVisible(subtitle[i])) {
				subtitle[i].classList.add("anim");        	
	   		}      			
   		}

   		if (isPartiallyVisible(circle1)) {
			circle1.classList.add("anim");        	
   		}  
   		if (isPartiallyVisible(circle2)) {
			circle2.classList.add("anim");        	
   		}  
   		if (isPartiallyVisible(circle3)) {
			circle3.classList.add("anim");        	
   		}  
   		if (isPartiallyVisible(circle4)) {
			circle4.classList.add("anim");        	
   		}  

   		if (isPartiallyVisible(circleTitle1)) {
			circleTitle1.classList.add("anim");        	
   		}  
   		if (isPartiallyVisible(circleTitle2)) {
			circleTitle2.classList.add("anim");        	
   		}  
   		if (isPartiallyVisible(circleTitle3)) {
			circleTitle3.classList.add("anim");        	
   		}  
   		if (isPartiallyVisible(circleTitle4)) {
			circleTitle4.classList.add("anim");        	
   		}  

   		if (isPartiallyVisible(number1)) {
			number1.classList.add("anim");        	
   		}  
   		if (isPartiallyVisible(number2)) {
			number2.classList.add("anim");        	
   		}  
   		if (isPartiallyVisible(number3)) {
			number3.classList.add("anim");        	
   		}  

   		if (isPartiallyVisible(resultH31)) {
			resultH31.classList.add("anim");        	
   		}  
   		if (isPartiallyVisible(resultH32)) {
			resultH32.classList.add("anim");        	
   		}  
   		if (isPartiallyVisible(resultH33)) {
			resultH33.classList.add("anim");        	
   		}  

   		if (isPartiallyVisible(resultThumb1)) {
			resultThumb1.classList.add("anim");        	
   		} 
   		if (isPartiallyVisible(resultThumb2)) {
			resultThumb2.classList.add("anim");        	
   		} 
   		if (isPartiallyVisible(resultThumb3)) {
			resultThumb3.classList.add("anim");        	
   		} 

   		if (isPartiallyVisible(deliveryCircle1)) {
			deliveryCircle1.classList.add("anim");        	
   		} 
   		if (isPartiallyVisible(deliveryCircle2)) {
			deliveryCircle2.classList.add("anim");        	
   		} 
   		if (isPartiallyVisible(deliveryCircle3)) {
			deliveryCircle3.classList.add("anim");        	
   		} 

   		if (isPartiallyVisible(deliveryP1)) {
			deliveryP1.classList.add("anim");        	
   		} 
   		if (isPartiallyVisible(deliveryP2)) {
			deliveryP2.classList.add("anim");        	
   		}
   		if (isPartiallyVisible(deliveryP3)) {
			deliveryP3.classList.add("anim");        	
   		}  

   		if (isPartiallyVisible(disclaimer)) {
			disclaimer.classList.add("anim");        	
   		}  

   		if (isPartiallyVisible(effectsItem1)) {
			effectsItem1.classList.add("anim");        	
   		} 
   		if (isPartiallyVisible(effectsItem2)) {
			effectsItem2.classList.add("anim");        	
   		} 

   		if (isPartiallyVisible(girls)) {
			girls.classList.add("anim");        	
   		} 

   		if (isPartiallyVisible(li1)) {
			li1.classList.add("anim");        	
   		} 
   		if (isPartiallyVisible(li2)) {
			li2.classList.add("anim");        	
   		} 
   		if (isPartiallyVisible(li3)) {
			li3.classList.add("anim");        	
   		} 
   		if (isPartiallyVisible(li4)) {
			li4.classList.add("anim");        	
   		} 
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

/* ACTION
---------------------------------------------------- */
const action = document.querySelector('.action');

window.addEventListener('scroll', function() {
  if (window.scrollY > 1000) action.classList.add('active');
  else action.classList.remove('active');
});

/* SLICK
---------------------------------------------------- */
$(window).resize(function() {
	if ($(window).width() < 769) {
		$('.list-image').not('.slick-initialized').slick({
			infinite: true,
		    slidesToShow: 2,
		    slidesToScroll: 1,
		    arrows: false,
		    autoplay: true,
		    autoplaySpeed: 2000,
		});
	} else {
		$('.list-image').slick('unslick');
	}
});

if ($(window).width() < 769) {
	$('.list-image').not('.slick-initialized').slick({
		infinite: true,
	    slidesToShow: 2,
	    slidesToScroll: 1,
	    arrows: false,
	    autoplay: true,
		autoplaySpeed: 2000,
	});
} else {
	$('.list-image').slick('unslick');
}