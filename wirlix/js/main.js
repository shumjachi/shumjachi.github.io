/*
 MENU
------------------------------------------------------- */
function Menu() {
	let btn = document.querySelector('.btn-menu');
	let nav = document.querySelector('.nav');
	let close = nav.querySelector('.close-nav');

	btn.onclick = function(e) {
		e.preventDefault();
		nav.classList.toggle('active');
	};

	close.onclick = function(e) {
		e.preventDefault();
		nav.classList.remove('active');
	};
}

new Menu();

/*
 TABS
------------------------------------------------------- */
function Tabs(options) {
	let _this = this;
	let tabs = document.querySelectorAll(options.elem);

	for (var i = 0; i < tabs.length; i++) {
		let controls = tabs[i].querySelectorAll('.tabs-controls .tab-btn');

		for (var i = 0; i < controls.length; i++) {
			controls[i].addEventListener('click', function(e) {
				e.preventDefault();
				_this.clearActive(this);
				_this.active(this);
			});
		}
	}

	this.clearActive = function(btn) {
		let btns = btn.closest('.tabs-controls').querySelectorAll('.tab-btn');
		let contents = btn.closest(options.elem).querySelectorAll('.tabs-content .tab');

		for (var i = 0; i < btns.length; i++) {
			btns[i].classList.remove('active');
		}

		for (var i = 0; i < contents.length; i++) {
			contents[i].classList.remove('active');
		}
	}

	this.active = function(btn) {
		let id = '#' + btn.getAttribute('data-tab');
		let content = document.querySelector(id);

		btn.classList.add('active');
		content.classList.add('active');
	}
}

new Tabs({elem: '.tabs'});

/*
 ACCORDEON
------------------------------------------------------- */
function Accordeon(options) {
	let _this = this;
	let tabs = document.querySelectorAll(options.elem);

	for (var i = 0; i < tabs.length; i++) {
		let controls = tabs[i].querySelectorAll('.btn-accordeon');

		for (var i = 0; i < controls.length; i++) {
			controls[i].addEventListener('click', function(e) {
				e.preventDefault();
				_this.clearActive(this);
				_this.active(this);
			});
		}
	}

	this.clearActive = function(btn) {
		let btns = btn.closest(options.elem).querySelectorAll('li');

		for (var i = 0; i < btns.length; i++) {
			btns[i].classList.remove('active');
		}
	}

	this.active = function(btn) {
		btn.closest('li').classList.toggle('active');
	}
}

new Accordeon({elem: '.accordeon'});