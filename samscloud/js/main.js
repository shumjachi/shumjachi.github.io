/* HOME VIDEO
---------------------------------------------------- */
function videoSlider() {
	const btnVideo = document.querySelectorAll('.btn-video');
	let video = document.querySelectorAll('.home video');
	let counterVideo = 0;
	let timeInterval = 14000;
	let int = null;

	btnVideo.forEach(btn => {
		btn.addEventListener('click', function(e) {
			e.preventDefault();

			const _this = this;
			const video = _this.closest('.home').querySelectorAll('video');
			let svg = this.querySelector('svg');
			let interval = null;

			function videoReset() {
				for (var i = 0; i < video.length; i++) {
					video[i].classList.remove('play');
					video[i].pause();
					video[i].currentTime = 0;
				}

				if (int) clearInterval(int);

				if (_this.classList.contains('next-video')) {
					_this.previousElementSibling.classList.remove('active');				
				} else {
					_this.nextElementSibling.classList.remove('active');
				}

				_this.classList.remove('active');
				void _this.offsetWidth;
			}

			function videoPlay(index) {
				video[index].classList.add('play');
				video[index].play();
				timeInterval = video[index].duration;
				
				void _this.offsetWidth;
				_this.classList.add('active');
				svg.querySelector('circle').setAttribute('style', 'animation-duration: ' + (video[index].duration) + 's');
			}

			if (_this.classList.contains('next-video')) {
				videoReset();
				counterVideo++;
				if (counterVideo > 3) counterVideo = 0;
				videoPlay(counterVideo);
			} else {
				videoReset();
				if (counterVideo == 0) counterVideo = 3;
				counterVideo--;
				videoPlay(counterVideo);
			}
		});
	});

	int = setInterval(function() {
		for (var i = 0; i < video.length; i++) {
			video[i].classList.remove('play');
			video[i].pause();
			video[i].currentTime = 0;
		}

		video[0].closest('.home').querySelector('button.next-video').classList.remove('active');
		void video[0].closest('.home').querySelector('button.next-video').offsetWidth;

		counterVideo++;
		if (counterVideo > 3) counterVideo = 0;

		video[counterVideo].classList.add('play');
		video[counterVideo].play();
		timeInterval = video[counterVideo].duration;

		void video[0].closest('.home').querySelector('button.next-video').offsetWidth;
		video[0].closest('.home').querySelector('button.next-video').classList.add('active');
		video[counterVideo].closest('.home').querySelector('button.next-video svg circle').setAttribute('style', 'animation-duration: ' + (video[counterVideo].duration) + 's');
		console.log(counterVideo);
	}, timeInterval);
}

if (document.querySelectorAll('.home video').length) {
	videoSlider();
}


/* HEADER
---------------------------------------------------- */
const header = document.querySelector('.header');
const nav = header.querySelector('.nav');
const navLi = header.querySelectorAll('.nav > ul > li');
const overlay = document.querySelector('.overlay');
const btnMenu = document.querySelector('.btn-menu');
const body = document.querySelector('body');
let lastScrollTop = 0;

function hover() {
	nav.classList.add('active');
	overlay.classList.add('active');
}

function hoverOut() {
	nav.classList.remove('active');
	overlay.classList.remove('active');
}

btnMenu.addEventListener('click', function(e) {
	e.preventDefault();
	body.classList.toggle('menu-active');
	overlay.classList.toggle('active');
});

if (window.innerWidth > 991) {
	nav.addEventListener('mouseover', hover, false);
	nav.addEventListener('mouseout', hoverOut, false);
} else {
	nav.removeEventListener('mouseover', hover, false);
	nav.removeEventListener('mouseout', hoverOut, false);

	for (var i = navLi.length - 1; i >= 0; i--) {
		let link = navLi[i].querySelector('a');

		link.addEventListener('click', function(e) {
			e.preventDefault();
			let _this = this;

			this.closest('li').classList.add('active');

			this.closest('li').querySelector('.back-menu').onclick = function() {
				_this.closest('li').classList.remove('active');
			}
		});
	}
}	

window.addEventListener('resize', function() {
	if (window.innerWidth > 991) {
		nav.addEventListener('mouseover', hover, false);
		nav.addEventListener('mouseout', hoverOut, false);
	} else {
		nav.removeEventListener('mouseover', hover, false);
		nav.removeEventListener('mouseout', hoverOut, false);

		for (var i = navLi.length - 1; i >= 0; i--) {
			let link = navLi[i].querySelector('a');

			link.addEventListener('click', function(e) {
				e.preventDefault();
				let _this = this;

				this.closest('li').classList.add('active');

				this.closest('li').querySelector('.back-menu').onclick = function() {
					_this.closest('li').classList.remove('active');
				}
			});
		}
	}	
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

/* DROP DOWN
---------------------------------------------------- */

function dropDown() {
	let btnDrop = document.querySelectorAll('.drop-down .view');

	for (var i = 0; i < btnDrop.length; i++) {
		btnDrop[i].addEventListener('click', openDrop);
	}

	function openDrop(e) {
		let parent = this.closest('.drop-down');
		let view = this.querySelector('span');
		let drop = this.nextElementSibling;
		let li = drop.querySelectorAll('li');

		drop.classList.toggle('active');
		parent.classList.toggle('selected');

		for (var i = 0; i < li.length; i++) {
			li[i].addEventListener('click', function(){
				view.textContent = this.textContent;
				drop.classList.remove('active');
				parent.classList.remove('selected');
			});
		}
	}
}

dropDown();