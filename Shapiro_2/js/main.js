/* ---------------------------------------------------------- */
/* 01 - SELECT                                                */
/* ---------------------------------------------------------- */
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

					for (var s = 0; s < li.length; s++) {
						li[s].classList.remove('active');
					}

					this.classList.add('active');

					return false;
				}
			}

			return false;
		}
	}
}

var select = new Select('.select');

/* ---------------------------------------------------------- */
/* 02 - TABS                                                  */
/* ---------------------------------------------------------- */

function Tabs(obj) {
	var tabControls = document.querySelectorAll(obj.elem);

	for (var i = 0; i < tabControls.length; i++) {
		var controlLi = tabControls[i].querySelectorAll('li'),
			tabs = document.querySelectorAll('.tabs-content .tab');

		for (var a = 0; a < controlLi.length; a++) {
			var link = controlLi[a].getElementsByTagName('a');

			link[0].onclick = function(e) {

				for (var j = 0; j < controlLi.length; j++) {
					controlLi[j].classList.remove('active');
				}

				this.closest('li').classList.add('active');
				var hrf = this.getAttribute('href'),
					tab = document.querySelector(hrf);
console.log(hrf);
				for (var d = 0; d < tabs.length; d++) {
					tabs[d].classList.remove('active');
				}

				tab.classList.add('active');

				return false;
			}
		}		
	}
}

var tabs = new Tabs({elem: '.tabs-control'});

/* ---------------------------------------------------------- */
/* 03 - SLICK                                                 */
/* ---------------------------------------------------------- */

if (document.querySelector('.shapiro-wrap') != null) {
	window.addEventListener("resize", function () {
		if ($(window).width() < 900) {
			console.log('resize');
			$('.shapiro-wrap').slick({
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: true
			});
		} else {
			$('.shapiro-wrap').slick('unslick');
		}
	});

	if ($(window).width() < 900) {
		$('.shapiro-wrap').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: true
		});
	} else {
		$('.shapiro-wrap').slick('unslick');
		console.log('slic resize');
	}
	
}
