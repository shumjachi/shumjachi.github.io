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

// var rangeSlider = function(){
//   var slider = $('.range-slider'),
//       range = $('.range-slider__range'),
//       value = $('.range-slider__value');
    
//   slider.each(function(){

//     value.each(function(){
//       var value = $(this).prev().attr('value');
//       $(this).html(value);
//     });

//     range.on('input', function(){
//       $(this).next(value).html(this.value);
//     });
//   });
// };

// rangeSlider();