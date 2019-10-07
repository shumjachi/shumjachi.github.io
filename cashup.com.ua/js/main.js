/* ------------------------------------------------------------------------------------------ 
	01.	SELECT 
------------------------------------------------------------------------------------------ */
function Select(elem) {
	var select = document.querySelectorAll(elem);
	

	for (var i = 0; i < select.length; i++) {

		var curSelect = select[i],
			curSelectLi = curSelect.querySelectorAll('li'),
			curSelectView = curSelect.querySelector('.view'),
			curSelectInput = curSelect.querySelector('input');

		for (var j = 0; j < curSelectLi.length; j++) {
			if (curSelectLi[j].classList.contains('selected')) {
				curSelectView.innerHTML = curSelectLi[j].innerHTML;
				curSelectInput.value = curSelectLi[j].innerHTML;
			}
		}

		curSelectView.onclick = function(e) {
			var select = this.closest('.select'),
				drop = select.querySelector('.drop'),
				li = drop.querySelectorAll('li'),
				curSelectInput = select.querySelector('input'),
				curSelectView = select.querySelector('.view');

			select.classList.toggle('active');

			for (var b = 0; b < li.length; b++) {
				li[b].onclick = function(e) {
					curSelectView.innerHTML = this.innerHTML;
					curSelectInput.value = this.innerHTML;

					select.classList.remove('active');

					return false;
				}
			}

			return false;
		}
	}
}

var select = new Select('.select');

/* ------------------------------------------------------------------------------------------ 
	02.	SLIDER 
------------------------------------------------------------------------------------------ */
function SliderRange(options) {
	var slider = document.querySelectorAll(options.slider),
		_this = this;	

	for (var i = 0; i < slider.length; i++) {
		var input = slider[i].querySelector(options.input),
			range = slider[i].querySelector(options.range);

		range.innerHTML = input.value;

		input.addEventListener('change', function(e) {
			_this.setRange(this, range);
		}, false);
	}

	this.setRange = function(curInput, curRange) {
		curRange.innerHTML = curInput.value;
	}	
}

var sliderRange = new SliderRange({
	slider: '.range-slider',
	input: '.range-slider__range',
	range: '.range-slider__value' 
});

/* ------------------------------------------------------------------------------------------ 
	03.	TABS 
------------------------------------------------------------------------------------------ */
function Tabs(options) {
	var tabs = document.querySelectorAll(options.wrap),
		_this = this;

	for (var i = 0; i < tabs.length; i++) {
		var controls = tabs[i].querySelectorAll(options.nav + ' li'),
			cont = tabs[i].querySelector(options.cont);

		for (var j = 0; j < controls.length; j++) {
			var a = controls[j].querySelector('a');

			a.addEventListener('click', function(e) {
				e.preventDefault();
				
				var href = this.getAttribute('href'),
					contActive = cont.querySelector(href);

				_this.reset(cont);
				contActive.classList.add('active');

				return false;
			}, false);
		}
	}


	this.reset = function(cont) {
		var item  = cont.querySelectorAll('.item');

		for (var i = 0; i < item.length; i++) {
			item[i].classList.remove('active');
		}
	}
}

var tabs = new Tabs({wrap: '.tabs', nav: '.tabs-navigation', cont: '.tabs-content'});

var tabsItem = document.querySelectorAll('.tabs-content__item');

for (var i = 0; i < tabsItem.length; i++) {
	var h3 = tabsItem[i].querySelector('h3');

	h3.onclick = function() {
		for (var i = 0; i < tabsItem.length; i++) {
			var contInner = tabsItem[i].querySelector('.inner-cont');
			contInner.classList.add('hidden');
		}

		var parent = this.closest('.tabs-content__item');
		parent.querySelector('.inner-cont').classList.remove('hidden');
	}
}

/* ------------------------------------------------------------------------------------------ 
	04.	TABS 
------------------------------------------------------------------------------------------ */
function Accorderon(options) {
	var _this = this,
		accordeon = document.querySelectorAll(options.wrap);

	for (var i = 0; i < accordeon.length; i++) {
		var controls = accordeon[i].querySelectorAll(options.control);

		for (var j = 0; j < controls.length; j++) {
			controls[j].addEventListener('click', function() {
				_this.activeAccordeon(this, controls);
			}, false);
		}
	}

	this.activeAccordeon = function(btn, controls) {
		var parent = btn.closest('li'),
			contAccordeon = parent.querySelector(options.cont);


		contAccordeon.classList.toggle('hidden');
		
		// _this.accordeonReset(controls);
	}

	this.accordeonReset = function(controls) {
		for (var i = 0; i < controls.length; i++) {
			var parent = controls[i].closest('li'),
				contAccordeon = parent.querySelector(options.cont);

			contAccordeon.classList.add('hidden');
		}
	}
}

var accordeon = new Accorderon({wrap: '.accordeon', control: '.accordeon-btn', cont: '.item'});