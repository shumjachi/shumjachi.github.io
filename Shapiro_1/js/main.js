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

					select.classList.remove('active');

					return false;
				}
			}

			return false;
		}
	}
}

var select = new Select('.select');

/* ---------------------------------------------------------- */
/* 02 - QUESTION CARD                                         */
/* ---------------------------------------------------------- */
if (document.querySelector('.question-svv .svg-icon') != null) {
	document.querySelector('.question-svv .svg-icon').onclick = function(e) {
		document.querySelector('.info-card-svv').classList.add('active');	
	}

	document.querySelector('.info-card-svv .close').onclick = function(e) {
		document.querySelector('.info-card-svv').classList.remove('active');	
		return false;
	}
}

/* ---------------------------------------------------------- */
/* 03 - OPEN REPORT                                     */
/* ---------------------------------------------------------- */
if (document.querySelector('.btn-report') != null) {
	document.querySelector('.btn-report').onclick = function(e) {
		var text = this.innerHTML,
			dataText = this.getAttribute('data-text');

		if (document.querySelector('.opened-report').classList.contains('close')) {
			this.innerHTML = dataText;
		} else {
			this.innerHTML = text;
		}

		document.querySelector('.opened-report').classList.toggle('close');
		return false;
	}

	document.querySelector('.close-report').onclick = function(e) {
		document.querySelector('.opened-report').classList.toggle('close');

		var btnReport = document.querySelector('.btn-report'),
			text = btnReport.innerHTML,
			dataText = btnReport.getAttribute('data-text');

		if (document.querySelector('.opened-report').classList.contains('close')) {
			btnReport.innerHTML = 'Watch full report';
		}

		return false;
	}
}

/* ---------------------------------------------------------- */
/* 04 - POPUP                                                 */
/* ---------------------------------------------------------- */
function Popup(obj) {
	var popups = document.querySelectorAll(obj.elem),
		overlay = document.querySelector(obj.overlay),
		btn = document.querySelectorAll(obj.btnPopup);

	for (var i = 0; i < btn.length; i++) {
		btn[i].onclick = function(e) {
			console.log('click ppopup');
			var data = this.getAttribute('data-popup'),
				popup = document.querySelector('.' + data);

			overlay.classList.add('active');
			popup.classList.add('active');

			return false;
		}
	}
	
	for (var i = 0; i < popups.length; i++) {
		var popup = popups[i],
			close = popup.querySelector('.close');

		if (close != null) {
			close.onclick = function(e) {
				var parent = this.closest(obj.elem);
				console.log(parent);
				parent.classList.remove('active');
				overlay.classList.remove('active');

				return false;
			}
		}		
	}
}

if (document.querySelectorAll('.popup') != null) {
	var popup = new Popup({elem: '.popup', overlay: '.popup-overlay', btnPopup: '.button-popup'});
}