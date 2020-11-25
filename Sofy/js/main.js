/* SLIDER
---------------------------------------------------- */
function Slider(options) {

	let slider = document.querySelectorAll(options.elem);

	for (let i = 0; i < slider.length; i++) {

		let slideBox = slider[i].querySelector('.slide-box');
		let track = slider[i].querySelector('.track');
		let slideItem = slider[i].querySelectorAll('.slide-item');

		if (slider[i].querySelector('.next') != null)
			next = slider[i].querySelector('.next').addEventListener('click', nextSlid);
		
		if (slider[i].querySelector('.prev') != null)
			prew = slider[i].querySelector('.prev').addEventListener('click', prewSlid);

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

			if (procentWidth == 17) {
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
		}

		function prewSlid() {
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
		}

		window.addEventListener('resize', setTransform);
	}
}

let home = new Slider({
	elem: '.home-slider',
	slidesToScroll: 1,
	vertical: false,
});

let presentation = new Slider({
	elem: '.presentation-slider',
	slidesToScroll: 1,
	vertical: false,
});