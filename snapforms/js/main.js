var isIE = false || !!document.documentMode;

if (isIE) {
    var head  = document.getElementsByTagName("head")[0];
    var link  = document.createElement("link");
    link.rel  = "stylesheet";
    link.href = "css/ie.css";
    head.appendChild(link);
}

(function() {

  // проверяем поддержку
  if (!Element.prototype.matches) {

    // определяем свойство
    Element.prototype.matches = Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector;

  }

})();

(function() {

  // проверяем поддержку
  if (!Element.prototype.closest) {

    // реализуем
    Element.prototype.closest = function(css) {
      var node = this;

      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }

})();

window.onload = function() {
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
		var btnShow = document.querySelectorAll('.js-btn__show');

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

	/* FORM
	----------------------------------- */
	var boxForm = document.querySelectorAll('.box-form');

	if (boxForm.length) {
		for (var i = 0; i < boxForm.length; i++) {
			var inputs = boxForm[i].querySelectorAll('input'),
				textareas = boxForm[i].querySelectorAll('textarea');

			for (var i = 0; i < inputs.length; i++) {
				inputs[i].addEventListener('keydown', function() {
					if (this.value.length > 2) {
						this.closest('label').classList.add('focus');
					} else if (this.value.length < 2) {
						this.closest('label').classList.remove('focus');
					}
				});
			}

			for (var i = 0; i < textareas.length; i++) {
				textareas[i].addEventListener('keydown', function() {
					if (this.value.length > 2) {
						this.closest('label').classList.add('focus');
					} else if (this.value.length < 2) {
						this.closest('label').classList.remove('focus');
					}
				});
			}
		}
	}

	/* PLANS
	----------------------------------- */
	function plans() {
		var plans = document.querySelector('.plans');

		if (plans != null) {
			var	control = plans.querySelectorAll('.tabs-controls li a'),
				contents = plans.querySelectorAll('.plans-select');

			for (var i = 0; i < control.length; i++) {
				control[i].addEventListener('click', function(e) {
					e.preventDefault();

					for (var j = 0; j < control.length; j++) {
						control[j].closest('li').classList.remove('active');
					}

					this.closest('li').classList.add('active');

					var data = this.getAttribute('data-tab');

					for (var j = 0; j < contents.length; j++) {
						contents[j].classList.remove('active');
					}

					document.querySelector('.' + data).classList.add('active');
				});
			}
		}	
	}

	plans();

	/* NAV MOBILE
	----------------------------------- */
	function NavMobile() {
		var nav = document.querySelector('.nav-mobile'),
			close = document.querySelector('.close-menu'),
			toggle = document.querySelector('.togle-menu'),
			link = document.querySelectorAll('.nav-mobile > ul > li > a');

		toggle.addEventListener('click', function(e) {
			e.preventDefault();

			nav.classList.add('active');
		});

		close.addEventListener('click', function(e) {
			e.preventDefault();

			nav.classList.remove('active');
		});

		for (var i = 0; i < link.length; i++) {
			link[i].addEventListener('click', function(e) {
				e.preventDefault();

				if (this.closest('li').querySelector('.svg-icon') != null) {
					this.closest('li').classList.toggle('active-drop');
				}
			});
		}
	}

	var navMobile = new NavMobile();
}
