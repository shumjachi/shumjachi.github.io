/* MENU
----------------------------------- */
function FixedHeader() {
	var header = document.querySelector('.header');

	window.addEventListener('scroll', function() {
		var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

		if (scrollTop > 200) {
			header.classList.add('fixed');
		} else {
			header.classList.remove('fixed');
		}
	});
}

var fixedMenu = new FixedHeader();

/* SHOW CONTENT
----------------------------------- */
function ShowContent() {
	var btnShow = document.querySelectorAll('.js-btn__show')

	if (btnShow.length) {
		for (var i = 0; i < btnShow.length; i++) {
			btnShow[i].addEventListener('click', function(e) {
				e.preventDefault();
				var parent = this.closest('.js-show'),
					hidden = parent.querySelector('.hidden-content');

				parent.classList.toggle('active');
				hidden.classList.toggle('hidden');
				return false;
			});
		}
	}
}

var showContent = new ShowContent();

/* CHECKBOX
----------------------------------- */
function RarioSelect() {
	var radio = document.querySelectorAll('.radio-select');

	if (radio.length) {
		for (var i = 0; i < radio.length; i++) {
			var prev = radio[i].querySelector('.prev'),
				next = radio[i].querySelector('.next'),
				checked = radio[i].querySelector('.checked');

			next.addEventListener('click', function() {
				checked.classList.remove('left');
				checked.classList.add('right');
				prev.classList.remove('active');
				this.classList.add('active');
			});

			prev.addEventListener('click', function() {
				checked.classList.remove('right');
				checked.classList.add('left');
				next.classList.remove('active');
				this.classList.add('active');
			});
		}
	}
}	

var radioSelect = new RarioSelect();