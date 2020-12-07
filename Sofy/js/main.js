/* SLIDER
---------------------------------------------------- */
function Slider(options) {
	let slider = document.querySelectorAll(options.elem);
	let interval = null;

	for (let i = 0; i < slider.length; i++) {

		let slideBox = slider[i].querySelector('.slide-box');
		let track = slider[i].querySelector('.track');
		let slideItem = slider[i].querySelectorAll('.slide-item');

		console.log(slider[i].querySelector('.next'));
		if (slider[i].querySelector('.next') != null) {
			next = slider[i].querySelector('.next').addEventListener('click', nextSlid);
		}
		
		if (slider[i].querySelector('.prev') != null) {
			prew = slider[i].querySelector('.prev').addEventListener('click', prewSlid);
		}

		let clone = 4;
		let countDot = 0;
		let count = clone;
		let p = 0;

		/*  ADD-DOT 
		------------------------------------------------- */
		function addDot() {
			let dotWrap = slider[i].querySelector('.dot-wrap');

			for (let i = 0; i < slideItem.length / options.slidesToScroll; i++) {
				let span = document.createElement('span');
				span.setAttribute('data-index', i);
				dotWrap.appendChild(span);
			}
		}

		addDot();

		/*  DOTS-MOVE 
		------------------------------------------------- */
		let dots = slider[i].querySelectorAll('.dot-wrap span');

		function slideDots() {
			dots[0].classList.add('activ-dot');

			for (let i = 0; i < dots.length; i++) {
				dots[i].onclick = function() {
					if (options.autoplay) clear();
					
					slideSpeed(0.5);

					setTimeout(function() {
						slideSpeed(0);
					}, 500);
					
					let index = this.getAttribute('data-index');
					let num = Number(index);

					for (let i = 0; i < dots.length; i++) {
						dots[i].classList.remove('activ-dot');
					}

					dots[index].classList.add('activ-dot');
					countDot = index;
					count = clone + num * options.slidesToScroll;

					setTransform();
				}
			}
		}

		slideDots();

		/*  SLIDE-CLONE
		------------------------------------------------- */
		function slideClone() {
			for (let i = 0; i < clone; i++) {
				let cloneStart = slideItem[slideItem.length - clone + i].cloneNode(true);
				cloneStart.classList.add('cloned');
				track.insertBefore(cloneStart, slideItem[0]);
			}

			for (let i = 0; i < clone; i++) {
				let cloneEnd = slideItem[i].cloneNode(true);
				cloneEnd.classList.add('cloned');
				track.appendChild(cloneEnd);
			}
		}

		slideClone();

		let slideItems = slider[i].querySelectorAll('.slide-item');

		for (let i = 0; i < slideItems.length; i++) {
			slideItems[i].onmousedown = function(e) {
				e.preventDefault();
			}
		}

		let desc = 0;
		let widthItem = 0;
		let proc = 0;
		let drob = 0;

		/*  SWIPE DESCTOP
		------------------------------------------------- */
		function swiperDesctop(e) {
			track.addEventListener("mousedown", swipeStart);

		  	let shiftX = 0;

		  	function swipeStart(e) {
		  		track.removeEventListener("mousedown", swipeStart);

		  		widthItem = slideItem[0].clientWidth;
		  		proc = widthItem / 2;
		  		drob = this.clientWidth / 100;
		  		shiftX = e.pageX;

				track.addEventListener("mouseup", swipeEnd);
		  		track.addEventListener("mousemove", swipeMove);
				track.addEventListener("mouseleave", swipeEnd);

		  		setTimeout(function() {
					track.addEventListener("mousedown", swipeStart);
				}, 600);
		  	}

		  	function swipeMove(e) {
		    	desc = e.pageX - shiftX;
		    	let swipe = count * -p + desc / drob;
		    	track.style.transform = 'translate3d(' + swipe + '%,0,0)';
		  	}

		  	function swipeEnd(e) {
		    	slideSpeed(0.5);

		    	track.style.transform = 'translate3d(' + count * -p + '%,0,0)';

		    	setTimeout(function() {
					slideSpeed(0);
				}, 500);

		  	 	if (desc < -proc) {
		    		nextSlid();
		    		desc = 0;
		    	}else if (desc > proc) {
		    		prewSlid();
		    		desc = 0;
		    	}

		   		track.removeEventListener("mousemove", swipeMove);
		   		track.removeEventListener("mouseleave", swipeEnd);
		   		track.removeEventListener("mouseup", swipeEnd);
		 	 };
		}

		swiperDesctop();

		/*  SWIPE MOBILE
		------------------------------------------------- */
		function swipeMobile() {
			track.addEventListener("touchstart", swipeStart);					
		  	let touchX = 0;

			function swipeStart(e) {
				track.removeEventListener("touchstart", swipeStart);
		  		widthItem = slideItem[0].clientWidth;
		  		proc = widthItem / 2;
		  		drob = this.clientWidth / 100;
				touchX = e.changedTouches[0].screenX;

				track.addEventListener("touchend", swipeEnd);
				track.addEventListener("touchmove", swipeMove);
				track.addEventListener("touchleave", swipeEnd);

				setTimeout(function() {
					track.addEventListener("touchstart", swipeStart);
				}, 600);
			}

			function swipeMove(e) {
				desc = e.changedTouches[0].screenX - touchX;
			    let swipe = count * -p + desc / drob;					   
		    	track.style.transform = 'translate3d(' + swipe + '%,0,0)';
			}

			function swipeEnd(e) {
				slideSpeed(0.5);

		    	track.style.transform = 'translate3d(' + count * -p + '%,0,0)';

		    	setTimeout(function() {
					slideSpeed(0);
				}, 500);

		  	 	if (desc < -proc) {
		    		nextSlid();
		    		desc = 0;
		    	}else if (desc > proc) {
		    		prewSlid();
		    		desc = 0;
		    	}

			    track.removeEventListener("touchmove", swipeMove);
			    track.removeEventListener("touchleave", swipeEnd);
			    track.removeEventListener("touchend", swipeEnd);
			}
		}

		swipeMobile();

		/*  VERTICAL-SLIDE
		------------------------------------------------- */
		function vertialSlide() {
			if (options.vertical) {
				track.style.flexDirection = 'column';
				let slideBoxHeight = slideBox.clientHeight;
				slideBox.style.height = slideBoxHeight / 3 + 'px';
			}
		}

		vertialSlide();

		function setTransform() {
			let trackWidth = slider[i].querySelector('.track').offsetWidth;
			let itemWidth = slider[i].querySelectorAll('.slide-item')[0].offsetWidth;
			let procentWidth = Math.round(itemWidth / trackWidth * 100);

			if (procentWidth == 14) {
				p = 14;
			} else if (procentWidth == 15) {
				p = 15;
			} else if (procentWidth == 17) {
				p = 16.6;
			} else if (procentWidth == 20) {
				p = 20;
			} else if (procentWidth == 25) {
				p = 25;
			} else if (procentWidth == 33) {
				p = 33.3;
			} else if (procentWidth == 50) {
				p = 50;
			} else if (procentWidth == 100) {
				p = 100;
			}

			track.style.transform = 'translateX(' + count * -p + '%)';

		    if (options.vertical) {
		    	let trackWidth = slider[i].querySelector('.track').offsetHeight;
				let itemWidth = slider[i].querySelectorAll('.slide-item')[0].offsetHeight;
				let procentHeight = Math.round(itemWidth / trackWidth * 100);

				if (procentHeight == 17) {
					p = 16.6;
				} else if (procentHeight == 20) {
					p = 20;
				} else if (procentHeight == 25) {
					p = 25;
				} else if (procentHeight == 33) {
					p = 33.3;
				} else if (procentHeight == 50) {
					p = 50;
				} else if (procentHeight == 100) {
					p = 100;
				}

				track.style.transform = 'translateY(' + count * -p + '%)';
			}
		}

		setTransform();

		/*  SPEED-SLIDE 
		------------------------------------------------- */
		function slideSpeed(seconds) {
			track.style.transition = seconds + 's';
		}

		/*  CONTROL-POSITION 
		------------------------------------------------- */
		function controlPosition(position) {
			setTimeout(function() {
				slideSpeed(0);

				setTransform();
			}, 500);
		}

		/*  BTN-DISABLED 
		------------------------------------------------- */
		function btnDisabled(el) {
			el.disabled = true;

			setTimeout(function() {
				slideSpeed(0);
				el.disabled = false;
			}, 500, el);
		}

		function nextSlid() {
			if (options.autoplay) clear();

			if (options.infinite) {
				dots[countDot].classList.remove('activ-dot');

			  	slideSpeed(0.5);
			  	btnDisabled(this);

			  	countDot ++;
			  	count = count + options.slidesToScroll;

			  	setTransform();

			  	if (count >= slideItem.length + clone) {
			  		countDot = 0;
			  		count = clone;

			  		controlPosition();
			  	}

			  	dots[countDot].classList.add('activ-dot');
			} else {
				slider[i].querySelector('.prev').classList.add('active');
				
				if (dots[countDot].getAttribute('data-index') < (dots.length - 1)) {
					dots[countDot].classList.remove('activ-dot');

				  	slideSpeed(0.5);
				  	btnDisabled(this);

				  	countDot ++;
				  	count = count + options.slidesToScroll;

				  	setTransform();

				  	if (count >= slideItem.length + clone) {
				  		countDot = 0;
				  		count = clone;

				  		controlPosition();
				  	}

				  	dots[countDot].classList.add('activ-dot');

				  	if (dots[countDot].getAttribute('data-index') == 4) slider[i].querySelector('.next').classList.remove('active');
				}
			} 		  	
		}

		function prewSlid() {
			if (options.autoplay) clear();

			if (options.infinite) {
				dots[countDot].classList.remove('activ-dot');

			  	slideSpeed(0.5);
			  	btnDisabled(this);

			  	countDot --;
			  	count = count - options.slidesToScroll;

			  	setTransform();

			  	if (count < clone ) {
			  		countDot = slideItem.length / options.slidesToScroll -1;
			  		count = slideItem.length + clone - options.slidesToScroll;

			  		controlPosition();
			  	}

			  	dots[countDot].classList.add('activ-dot');
			} else {
				slider[i].querySelector('.next').classList.add('active');

				if (dots[countDot].getAttribute('data-index') > 0) {
					dots[countDot].classList.remove('activ-dot');

				  	slideSpeed(0.5);
				  	btnDisabled(this);

				  	countDot --;
				  	count = count - options.slidesToScroll;

				  	setTransform();

				  	if (count < clone ) {
				  		countDot = slideItem.length / options.slidesToScroll -1;
				  		count = slideItem.length + clone - options.slidesToScroll;

				  		controlPosition();
				  	}

				  	dots[countDot].classList.add('activ-dot');	

				  	if (dots[countDot].getAttribute('data-index') == 0) slider[i].querySelector('.prev').classList.remove('active');
				}
			}			
		}

		// autoplay slide
		function autoplay() {
			interval = setInterval(function() {
				if (slider[i].querySelector('.prev') != null) {
					if (!slider[i].querySelector('.prev').classList.contains('active'))
						slider[i].querySelector('.prev').classList.add('active');
				}				

				dots[countDot].classList.remove('activ-dot');

			  	slideSpeed(0.5);
			  	btnDisabled(this);

			  	countDot ++;
			  	count = count + options.slidesToScroll;

			  	setTransform();

			  	if (count >= slideItem.length + clone) {
			  		countDot = 0;
			  		count = clone;

			  		controlPosition();
			  	}

			  	dots[countDot].classList.add('activ-dot');
			}, options.autoplayTime);
		}

		if (options.autoplay) autoplay();

		function clear() {
			clearInterval(interval);
		}		

		// autoplay time slide 
		let countAutoplayTime = 0;
		let timeout = null;
		function autoplayTimeSlide(time) {
			let innerTime = options.autoplayTimeSlide;

			timeout = setTimeout(function() {
				dots[countDot].classList.remove('activ-dot');

			  	slideSpeed(0.5);
			  	btnDisabled(this);

			  	countDot ++;
			  	count = count + options.slidesToScroll;

			  	setTransform();

			  	if (count >= slideItem.length + clone) {
			  		countDot = 0;
			  		count = clone;

			  		controlPosition();
			  	}

			  	dots[countDot].classList.add('activ-dot');

			  	countAutoplayTime++;
			  	autoplayTimeSlide(innerTime[countAutoplayTime]);

			  	if (dots[countDot].getAttribute('data-index') >= dots.length - 1) {
			  		clearInterval(timeout);
			  	}
			}, time);
		}

		if (options.autoplayTimeSlide) {
			autoplayTimeSlide(options.autoplayTimeSlide[0]);
		} 

		window.addEventListener('resize', setTransform);
	}
}

let home = new Slider({
	elem: '.home-slider',
	slidesToScroll: 1,
	vertical: false,
	infinite: true,
	autoplayTimeSlide: [7000,5500,5500,6000,5000]
});

let presentation = new Slider({
	elem: '.presentation-slider',
	slidesToScroll: 1,
	vertical: false,
	infinite: false,
	autoplay: true,
	autoplayTime: 2500
});

let partner = new Slider({
	elem: '.partner-slider',
	slidesToScroll: 1,
	vertical: false,
	infinite: false,
	autoplay: true,
	autoplayTime: 5000
});

/* MOBILE MENU
---------------------------------------------------- */
function MobileMenu() {
	let btnNav = document.querySelector('.btn-nav');
	let btnNavClose = document.querySelector('.btn-navclose');
	let nav = document.querySelector('nav');

	btnNav.addEventListener('click', function() {
		nav.classList.toggle('active');
	});

	btnNavClose.addEventListener('click', function() {
		nav.classList.remove('active');
	});
}

MobileMenu();	

/* TABS
---------------------------------------------------- */
function tabs() {
	let tabs = document.querySelectorAll('.tabs');
	let controls = null;
	let contentTab = null;

	for (var i = 0; i < tabs.length; i++) {
		controls = tabs[i].querySelectorAll('.control-tab li');
		contentTab = tabs[i].querySelectorAll('.content-tab');

		for (var i = 0; i < controls.length; i++) {
			controls[i].addEventListener('click', function() {
				openTab(this);
			});
		}
	}

	function openTab(_this) {
		let clsTab = _this.getAttribute('data-tab');
		let tab = _this.closest('.tabs').querySelector('.' + clsTab);

		for (var i = 0; i < controls.length; i++) {
			controls[i].classList.remove('active');
		}

		for (var i = 0; i < contentTab.length; i++) {
			contentTab[i].classList.remove('active');
		}

		_this.classList.add('active');
		tab.classList.add('active');
	}
}

tabs();

/* FORM SEARCH
---------------------------------------------------- */
function searchForm() {
	let inputSearch = document.querySelector('.form-search input[type="text"]');
	let form = document.querySelector('.form-search');

	if (form != null) {
		let close = form.querySelector('.close');

		inputSearch.addEventListener('focus', function() {
			form.classList.add('active');
			form.classList.add('bg-white');
		});

		close.addEventListener('click', function(e) {
			e.preventDefault();

			form.classList.remove('active');
			form.classList.remove('bg-white');
		});
	}
}

searchForm();

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
		this.parentNode.classList.toggle('active');
	}
}

accordeon();

/* SWITCH
---------------------------------------------------- */
let liSwitchFirst = document.querySelector('.switch li:first-child');
let liSwitchLast = document.querySelector('.switch li:last-child');

if (liSwitchFirst != null) {
	liSwitchFirst.addEventListener('click', function(e) {
		liSwitchFirst.classList.add('active');
		liSwitchLast.classList.remove('active');
	});
}

if (liSwitchLast != null) {
	liSwitchLast.addEventListener('click', function(e) {
		liSwitchLast.classList.add('active');
		liSwitchFirst.classList.remove('active');
	});
}

/* CURSOR
---------------------------------------------------- */
function cursor() {
	const cursor = document.querySelector('.cursor');

	document.addEventListener('mousemove', e => {
		cursor.setAttribute('style', 'transform: translate(' + (e.pageX - 15) + 'px, ' + (e.pageY - 15) + 'px);');

		// default cursor
		if (e.target.closest('a') != null || e.target.closest('button') != null) {
			cursor.classList.add('active');
		} else {
			cursor.classList.remove('active');
		}

		// cursor white
		if (e.target.closest('.bg-green') != null) {
			cursor.classList.add('cursor-white');
			document.body.classList.add('cursor-white');
		} else {
			cursor.classList.remove('cursor-white');
			document.body.classList.remove('cursor-white');
		}

		// cursor green
		if (e.target.closest('.bg-white') != null) {
			cursor.classList.add('cursor-green');
			document.body.classList.remove('cursor-white');
		} else {
			cursor.classList.remove('cursor-green');
			document.body.classList.remove('cursor-green');
		}
	});
}

// cursor();

/* NAV POSITION
---------------------------------------------------- */
function navPosition() {
	const nav = document.querySelector('.nav-position');
	const sticky = document.querySelector('.position-sticky');
	const enginers = document.querySelector('.enginers + .enginers');
	const span = nav.querySelectorAll('span');

	document.addEventListener('scroll', () => {
		console.log(enginers.offsetTop);

		if (window.scrollY >= sticky.offsetTop) {
			sticky.classList.add('fixed');	
		} else {
			sticky.classList.remove('fixed');	
		}

		if (window.scrollY >= enginers.offsetTop) {
			span[0].classList.remove('active');
			span[1].classList.add('active');
		} else {
			span[0].classList.add('active');
			span[1].classList.remove('active');
		}
	});
}

navPosition();