const accordeon = document.querySelectorAll('.accordeon li');

for (var i = 0; i < accordeon.length; i++) {
	let link = accordeon[i].querySelector('a');
	console.log(link);
	link.addEventListener('click', function(e) {
		e.preventDefault();

		let parent = this.closest('li');
		parent.classList.toggle('active');
	});
}

$('.slick').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	arrows: false
});

$('.slick-white').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	arrows: false
});

function popup() {
    const btn = document.querySelectorAll('.btn-popup');
    const ovelay = document.querySelector('.popup-overlay');
    var popup = null;

    for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', openPopup);
    }

    function openPopup(e) {
        e.preventDefault();

        popup = document.querySelector('.' + this.getAttribute('data-popup'));
        const close = popup.querySelector('.popup-close');

        close.addEventListener('click', closePopup);

        var top  = window.pageYOffset || document.documentElement.scrollTop,
            left = window.pageXOffset || document.documentElement.scrollLeft;

        console.log(top);

        ovelay.classList.add('active');
        popup.classList.add('active');
        popup.style.top = (top + 50) + 'px';
    }

    function closePopup(e) {
        e.preventDefault();

        popup.classList.remove('active');
        ovelay.classList.remove('active');
    }
}

popup();

const label = document.querySelectorAll('label');

for (var i = 0; i < label.length; i++) {
	label[i].addEventListener('click', function() {
		this.querySelector('.label').classList.toggle('active');
	});
}

const roadmap = document.querySelectorAll('.roadmap-slider');

for (var i = 0; i < roadmap.length; i++) {
	let iconRoad = roadmap[i].querySelectorAll('.roadmap-icon li');

	for (var j = 0; j < iconRoad.length; j++) {
		iconRoad[j].onclick = function() {
			let parent = this.closest('.roadmap-slider');
			let h3 = parent.querySelector('h3');
			let text = parent.querySelector('.bg .text');
			
			h3.textContent = this.querySelector('.text').textContent;
			text.textContent = this.querySelector('.text').getAttribute('data-text');

			for (var i = 0; i < iconRoad.length; i++) {
				iconRoad[i].classList.remove('active');
			}
			
			this.classList.add('active');
		}
	}
}

